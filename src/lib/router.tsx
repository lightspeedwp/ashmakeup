/**
 * @fileoverview Lightweight client-side router
 *
 * Built to eliminate the async_hooks runtime error caused by react-router v7
 * server-side code being loaded via esm.sh in the Figma Make environment.
 *
 * Exposes the same public API surface used across the codebase:
 *   createBrowserRouter, RouterProvider, useNavigate, useLocation,
 *   useParams, useSearchParams, Link, Outlet
 *
 * BUNDLER SAFETY (v3.0.0):
 * - No optional chaining (?.) or nullish coalescing (??)
 * - No for...of loops (uses classic for-index loops)
 * - No spread operators in JSX or destructuring rest
 * - No nested if blocks (extracted to helpers)
 * - No inline type keyword in imports
 * - No bracket-notation on objects (uses grab helper)
 * - Array access via safe arrayGet helper
 * - All object property reads via safe grab helper
 *
 * @version 3.0.0
 */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

/* ── Bundler-safe property access helpers ── */

/**
 * Safely read a property from an object without dot-notation or bracket-notation
 * in call-site code.  Uses Object.entries iteration so the bundler cannot
 * statically rewrite the access pattern.
 */
function grab(obj: any, key: string): any {
  if (obj == null) return undefined;
  var entries = Object.entries(obj);
  for (var i = 0; i < entries.length; i++) {
    var pair = entries[i];
    if (pair[0] === key) return pair[1];
  }
  return undefined;
}

/**
 * Safely read from an array by numeric index, using iteration to avoid
 * bracket-notation that the bundler may choke on.
 */
function arrayGet(arr: any[], index: number): any {
  if (!arr) return undefined;
  if (index < 0) return undefined;
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (count === index) {
      return arr[i];
    }
    count++;
  }
  return undefined;
}

/**
 * Safely set a property on an object using Object.defineProperty
 * to avoid bracket-notation assignment that the bundler chokes on.
 */
function setProp(obj: any, key: string, val: any): void {
  Object.defineProperty(obj, key, {
    value: val,
    writable: true,
    enumerable: true,
    configurable: true,
  });
}

/* ── Types ── */

export interface RouteObject {
  path?: string;
  index?: boolean;
  Component?: React.ComponentType<any>;
  children?: RouteObject[];
}

interface MatchedRoute {
  route: RouteObject;
  params: Record<string, string>;
  children?: RouteObject[];
}

interface LocationDescriptor {
  pathname: string;
  search: string;
  hash: string;
  key: string;
}

interface RouterContextValue {
  location: LocationDescriptor;
  navigate: NavigateFunction;
  params: Record<string, string>;
  outlets: MatchedRoute[];
  depth: number;
}

type NavigateFunction = (to: string | number, options?: { replace?: boolean }) => void;

/* ── Context ── */

var routerContextInit: RouterContextValue | null = null;
var RouterContext = createContext(routerContextInit);

function useRouterContext(): RouterContextValue {
  var ctx = useContext(RouterContext);
  if (!ctx) throw new Error('Router hooks must be used inside RouterProvider');
  return ctx;
}

/* ── Matching helpers ── */

function buildCompileResult(r: RegExp, p: string[]): { regex: RegExp; paramNames: string[] } {
  var obj = {} as { regex: RegExp; paramNames: string[] };
  obj.regex = r;
  obj.paramNames = p;
  return obj;
}

function compilePath(pattern: string): { regex: RegExp; paramNames: string[] } {
  var paramNames: string[] = [];

  if (pattern === '*') {
    return buildCompileResult(/^\/.*$/, ['*']);
  }

  var segments = pattern.split('/').filter(Boolean);
  var regexParts: string[] = [];

  for (var i = 0; i < segments.length; i++) {
    var seg = arrayGet(segments, i) as string;
    var isWild = seg === '*';
    var isParam = !isWild && seg.startsWith(':');

    if (isWild) {
      paramNames.push('*');
      regexParts.push('(?:/(.*))?');
    } else if (isParam) {
      paramNames.push(seg.slice(1));
      regexParts.push('/([^/]+)');
    } else {
      regexParts.push('/' + seg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    }
  }

  var finalStr = regexParts.join('');
  return buildCompileResult(new RegExp('^' + finalStr + '/?$', 'i'), paramNames);
}

function compilePrefixPath(pattern: string): { regex: RegExp; paramNames: string[] } {
  var paramNames: string[] = [];
  var isSlash = pattern === '/';
  var hasNoPattern = !pattern;
  if (hasNoPattern) {
    return buildCompileResult(/^/, paramNames);
  }
  if (isSlash) {
    return buildCompileResult(/^/, paramNames);
  }

  var segments = pattern.split('/').filter(Boolean);
  var regexParts: string[] = [];

  for (var i = 0; i < segments.length; i++) {
    var seg = arrayGet(segments, i) as string;
    var isParam = seg.startsWith(':');
    if (isParam) {
      paramNames.push(seg.slice(1));
      regexParts.push('/([^/]+)');
    } else {
      regexParts.push('/' + seg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    }
  }

  return buildCompileResult(new RegExp('^' + regexParts.join(''), 'i'), paramNames);
}

function extractParam(arr: RegExpMatchArray, idx: number): string {
  var raw = arrayGet(arr, idx);
  if (!raw) return '';
  return decodeURIComponent(raw);
}

function mergeParams(
  a: Record<string, string>,
  b: Record<string, string>,
): Record<string, string> {
  var result: Record<string, string> = {};
  var aEntries = Object.entries(a);
  for (var i = 0; i < aEntries.length; i++) {
    var aPair = arrayGet(aEntries, i);
    if (aPair) {
      var aKey = arrayGet(aPair, 0);
      var aVal = arrayGet(aPair, 1);
      setProp(result, aKey, aVal);
    }
  }
  var bEntries = Object.entries(b);
  for (var j = 0; j < bEntries.length; j++) {
    var bPair = arrayGet(bEntries, j);
    if (bPair) {
      var bKey = arrayGet(bPair, 0);
      var bVal = arrayGet(bPair, 1);
      setProp(result, bKey, bVal);
    }
  }
  return result;
}

function extractMatchParams(
  paramNames: string[],
  regexMatch: RegExpMatchArray,
): Record<string, string> {
  var params: Record<string, string> = {};
  for (var i = 0; i < paramNames.length; i++) {
    var name = arrayGet(paramNames, i) as string;
    setProp(params, name, extractParam(regexMatch, i + 1));
  }
  return params;
}

/* ── Helper functions to build MatchedRoute and NavOptions ── */

function buildMatchedRoute(r: RouteObject, p: Record<string, string>, c: RouteObject[] | undefined): MatchedRoute {
  var m = {} as MatchedRoute;
  m.route = r;
  m.params = p;
  m.children = c;
  return m;
}

function buildNavOptions(replaceVal: boolean | undefined): { replace?: boolean } {
  var opts = {} as { replace?: boolean };
  opts.replace = replaceVal;
  return opts;
}

/* ── matchRoutes: Flattened to avoid nested if blocks ── */

function tryMatchIndex(
  route: RouteObject,
  pathname: string,
): MatchedRoute[] | null {
  var isIndex = grab(route, 'index');
  if (!isIndex) return null;
  var isRoot = pathname === '/';
  var isEmpty = pathname === '';
  if (isRoot) return [buildMatchedRoute(route, {}, undefined)];
  if (isEmpty) return [buildMatchedRoute(route, {}, undefined)];
  return null;
}

function tryMatchPathless(
  route: RouteObject,
  pathname: string,
): MatchedRoute[] | null {
  var routePath = grab(route, 'path');
  var routeChildren = grab(route, 'children') as RouteObject[] | undefined;
  if (routePath !== undefined) return null;
  if (!routeChildren) return null;

  var childMatch = matchRoutes(routeChildren, pathname);
  if (!childMatch) return null;

  var firstChild = arrayGet(childMatch, 0);
  var childParams: Record<string, string> = {};
  if (firstChild) {
    var fp = grab(firstChild, 'params');
    if (fp) {
      childParams = fp;
    }
  }
  var entry = buildMatchedRoute(route, childParams, routeChildren);
  var result: MatchedRoute[] = [entry];
  for (var i = 0; i < childMatch.length; i++) {
    var item = arrayGet(childMatch, i);
    if (item) {
      result.push(item);
    }
  }
  return result;
}

function tryMatchParent(
  route: RouteObject,
  pathname: string,
): MatchedRoute[] | null {
  var routePath = grab(route, 'path') as string | undefined;
  var routeChildren = grab(route, 'children') as RouteObject[] | undefined;
  if (!routeChildren) return null;
  if (routeChildren.length === 0) return null;

  var pattern = '';
  if (routePath) {
    pattern = routePath;
  }
  var compiled = compilePrefixPath(pattern);
  var prefixRegex = compiled.regex;
  var paramNames = compiled.paramNames;
  var prefixMatch = pathname.match(prefixRegex);
  if (!prefixMatch) return null;

  var params = extractMatchParams(paramNames, prefixMatch);
  var matchedPath = arrayGet(prefixMatch, 0);
  var matchedStr = '';
  if (matchedPath) {
    matchedStr = String(matchedPath);
  }
  var cleanedPath = matchedStr.replace(/\/$/, '');
  var sliceStart = cleanedPath.length;
  var rest = pathname.slice(sliceStart);
  if (!rest) {
    rest = '/';
  }

  var childMatch = matchRoutes(routeChildren, rest);
  if (!childMatch) return null;

  var firstChild = arrayGet(childMatch, 0);
  var childParams: Record<string, string> = {};
  if (firstChild) {
    var fp = grab(firstChild, 'params');
    if (fp) {
      childParams = fp;
    }
  }
  var merged = mergeParams(params, childParams);

  var result: MatchedRoute[] = [buildMatchedRoute(route, merged, routeChildren)];
  for (var i = 0; i < childMatch.length; i++) {
    var m = arrayGet(childMatch, i);
    var mParams = grab(m, 'params');
    var mRoute = grab(m, 'route');
    var mKids = grab(m, 'children');
    var safeMP: Record<string, string> = {};
    if (mParams) {
      safeMP = mParams;
    }
    var combined = mergeParams(merged, safeMP);
    result.push(buildMatchedRoute(mRoute, combined, mKids));
  }
  return result;
}

function tryMatchLeaf(
  route: RouteObject,
  pathname: string,
): MatchedRoute[] | null {
  var routePath = grab(route, 'path') as string | undefined;
  var pattern = '';
  if (routePath) {
    pattern = routePath;
  }

  if (pattern === '*') {
    var wildcard = '*';
    var params: Record<string, string> = {};
    setProp(params, wildcard, pathname);
    return [buildMatchedRoute(route, params, undefined)];
  }

  var compiled = compilePath(pattern);
  var regex = compiled.regex;
  var paramNames = compiled.paramNames;
  var match = pathname.match(regex);
  if (!match) return null;

  var matchParams = extractMatchParams(paramNames, match);
  return [buildMatchedRoute(route, matchParams, undefined)];
}

function matchRoutes(
  routes: RouteObject[],
  pathname: string,
): MatchedRoute[] | null {
  for (var i = 0; i < routes.length; i++) {
    var route = arrayGet(routes, i) as RouteObject;

    // 1. Try index route
    var indexResult = tryMatchIndex(route, pathname);
    if (indexResult) return indexResult;

    // Skip further matching if this is an index route
    var isIndex = grab(route, 'index');
    if (!isIndex) {
      // 2. Try pathless layout route
      var pathlessResult = tryMatchPathless(route, pathname);
      if (pathlessResult) return pathlessResult;

      // 3. Determine if it has children
      var routeChildren = grab(route, 'children') as RouteObject[] | undefined;
      var hasChildren = false;
      if (routeChildren) {
        hasChildren = routeChildren.length > 0;
      }

      // 4. Try parent match (has children)
      if (hasChildren) {
        var parentResult = tryMatchParent(route, pathname);
        if (parentResult) return parentResult;
      }

      // 5. Try leaf match (no children) — only if no children
      if (!hasChildren) {
        var leafResult = tryMatchLeaf(route, pathname);
        if (leafResult) return leafResult;
      }
    }
  }

  return null;
}

/* ── Location helpers ── */

function readWindowPathname(): string {
  return window.location.pathname;
}

function readWindowSearch(): string {
  return window.location.search;
}

function readWindowHash(): string {
  return window.location.hash;
}

function createLocation(): LocationDescriptor {
  var randStr = Math.random().toString(36);
  var keyVal = randStr.slice(2, 8);
  var loc = {} as LocationDescriptor;
  loc.pathname = readWindowPathname();
  loc.search = readWindowSearch();
  loc.hash = readWindowHash();
  loc.key = keyVal;
  return loc;
}

/* ── createBrowserRouter ── */

export interface BrowserRouter {
  routes: RouteObject[];
  subscribe: (cb: () => void) => () => void;
  getLocation: () => LocationDescriptor;
  navigate: NavigateFunction;
}

export function createBrowserRouter(routes: RouteObject[]): BrowserRouter {
  var listeners: Array<() => void> = [];

  function notify() {
    for (var i = 0; i < listeners.length; i++) {
      var fn = arrayGet(listeners, i) as (() => void) | undefined;
      if (fn) {
        fn();
      }
    }
  }

  function removeListener(cb: () => void) {
    var idx = -1;
    for (var i = 0; i < listeners.length; i++) {
      var current = arrayGet(listeners, i);
      var isSame = current === cb;
      if (isSame) {
        idx = i;
        i = listeners.length;
      }
    }
    if (idx >= 0) {
      listeners.splice(idx, 1);
    }
  }

  function subscribeFn(cb: () => void): () => void {
    listeners.push(cb);
    return function unsubscribeFn() {
      removeListener(cb);
    };
  }

  window.addEventListener('popstate', notify);

  var navigate: NavigateFunction = function navigateFn(to, options) {
    if (typeof to === 'number') {
      window.history.go(to);
      return;
    }
    var shouldReplace = false;
    if (options) {
      shouldReplace = grab(options, 'replace');
    }
    if (shouldReplace) {
      window.history.replaceState(null, '', to);
    } else {
      window.history.pushState(null, '', to);
    }
    notify();
  };

  var result: BrowserRouter = {} as BrowserRouter;
  result.routes = routes;
  result.subscribe = subscribeFn;
  result.getLocation = createLocation;
  result.navigate = navigate;
  return result;
}

/* ── Helper to build context value ── */

function buildContextValue(
  loc: LocationDescriptor,
  nav: NavigateFunction,
  p: Record<string, string>,
  o: MatchedRoute[],
  d: number,
): RouterContextValue {
  var val: RouterContextValue = {} as RouterContextValue;
  val.location = loc;
  val.navigate = nav;
  val.params = p;
  val.outlets = o;
  val.depth = d;
  return val;
}

/* ── RouterProvider ── */

export function RouterProvider({ router }: { router: BrowserRouter }) {
  var routerGetLocation = grab(router, 'getLocation') as () => LocationDescriptor;
  var routerSubscribe = grab(router, 'subscribe') as (cb: () => void) => () => void;
  var routerRoutes = grab(router, 'routes') as RouteObject[];
  var routerNavigate = grab(router, 'navigate') as NavigateFunction;

  var locationState = useState(routerGetLocation);
  var location = arrayGet(locationState, 0) as LocationDescriptor;
  var setLocation = arrayGet(locationState, 1) as React.Dispatch<React.SetStateAction<LocationDescriptor>>;

  useEffect(function syncLocationEffect() {
    setLocation(routerGetLocation());
    return routerSubscribe(function onRouteChange() { setLocation(routerGetLocation()); });
  }, [routerGetLocation, routerSubscribe]);

  var locationPathname = grab(location, 'pathname') as string;

  var matched = useMemo(function matchMemo() {
    return matchRoutes(routerRoutes, locationPathname);
  }, [routerRoutes, locationPathname]);

  var params = useMemo(function paramsMemo() {
    if (!matched) return {};
    var len = matched.length;
    if (len === 0) return {};
    var lastMatch = arrayGet(matched, len - 1);
    if (!lastMatch) return {};
    var p = grab(lastMatch, 'params');
    if (p) return p;
    return {};
  }, [matched]);

  var outletsList: MatchedRoute[] = [];
  if (matched) {
    outletsList = matched;
  }

  var ctx = useMemo(function ctxMemo() {
    return buildContextValue(location, routerNavigate, params, outletsList, 0);
  }, [location, routerNavigate, params, outletsList]);

  if (!matched) {
    return null;
  }

  var matchedLen = matched.length;
  if (matchedLen === 0) {
    return null;
  }

  var firstMatch = arrayGet(matched, 0);
  if (!firstMatch) {
    return null;
  }

  var firstRoute = grab(firstMatch, 'route');
  if (!firstRoute) {
    return null;
  }

  var TopComponent = grab(firstRoute, 'Component') as React.ComponentType<any> | undefined;
  if (!TopComponent) {
    return null;
  }

  return (
    <RouterContext.Provider value={ctx}>
      <TopComponent />
    </RouterContext.Provider>
  );
}

/* ── Hooks ── */

export function useNavigate(): NavigateFunction {
  var ctx = useRouterContext();
  return grab(ctx, 'navigate') as NavigateFunction;
}

export function useLocation(): LocationDescriptor {
  var ctx = useRouterContext();
  return grab(ctx, 'location') as LocationDescriptor;
}

export function useParams<T extends Record<string, string> = Record<string, string>>(): T {
  var ctx = useRouterContext();
  return grab(ctx, 'params') as T;
}

export function useSearchParams(): [URLSearchParams, (next: URLSearchParams | ((prev: URLSearchParams) => URLSearchParams), opts?: { replace?: boolean }) => void] {
  var ctx = useRouterContext();
  var loc = grab(ctx, 'location') as LocationDescriptor;
  var nav = grab(ctx, 'navigate') as NavigateFunction;

  var locSearch = grab(loc, 'search') as string;
  var locPathname = grab(loc, 'pathname') as string;
  var locHash = grab(loc, 'hash') as string;

  var searchParams = useMemo(function searchParamsMemo() {
    return new URLSearchParams(locSearch);
  }, [locSearch]);

  var setSearchParams = useCallback(
    function setSearchParamsFn(
      next: URLSearchParams | ((prev: URLSearchParams) => URLSearchParams),
      opts?: { replace?: boolean },
    ) {
      var resolved: URLSearchParams;
      if (typeof next === 'function') {
        resolved = next(new URLSearchParams(locSearch));
      } else {
        resolved = next;
      }
      var qs = resolved.toString();
      var newUrl = locPathname;
      if (qs) {
        newUrl = newUrl + '?' + qs;
      }
      newUrl = newUrl + locHash;
      var replaceMode: boolean | undefined;
      if (opts) {
        replaceMode = grab(opts, 'replace');
      }
      nav(newUrl, buildNavOptions(replaceMode));
    },
    [locSearch, locPathname, locHash, nav],
  );

  return [searchParams, setSearchParams];
}

/* ── Outlet ── */

export function Outlet() {
  var ctx = useRouterContext();

  var currentDepth = grab(ctx, 'depth') as number;
  var currentOutlets = grab(ctx, 'outlets') as MatchedRoute[];
  var currentLocation = grab(ctx, 'location') as LocationDescriptor;
  var currentNavigate = grab(ctx, 'navigate') as NavigateFunction;

  var nextDepth = currentDepth + 1;

  // useMemo MUST run before any conditional returns (Rules of Hooks)
  var childCtx = useMemo(function childCtxMemo() {
    var len = currentOutlets.length;
    if (nextDepth >= len) {
      return buildContextValue(currentLocation, currentNavigate, {}, currentOutlets, nextDepth);
    }
    var match = arrayGet(currentOutlets, nextDepth);
    if (!match) {
      return buildContextValue(currentLocation, currentNavigate, {}, currentOutlets, nextDepth);
    }
    var p = grab(match, 'params');
    var safeParams = {};
    if (p) {
      safeParams = p;
    }
    return buildContextValue(currentLocation, currentNavigate, safeParams, currentOutlets, nextDepth);
  }, [currentLocation, currentNavigate, currentOutlets, nextDepth]);

  // Conditional returns after hooks
  var outletsLen = currentOutlets.length;
  if (nextDepth >= outletsLen) {
    return null;
  }

  var nextMatch = arrayGet(currentOutlets, nextDepth);
  if (!nextMatch) {
    return null;
  }

  var nextRoute = grab(nextMatch, 'route') as RouteObject | undefined;
  if (!nextRoute) {
    return null;
  }

  var NextComponent = grab(nextRoute, 'Component') as React.ComponentType<any> | undefined;
  if (!NextComponent) {
    return null;
  }

  return (
    <RouterContext.Provider value={childCtx}>
      <NextComponent />
    </RouterContext.Provider>
  );
}

/* ── Link ── */

interface LinkProps {
  to: string;
  replace?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
  id?: string;
  title?: string;
  target?: string;
  rel?: string;
  tabIndex?: number;
  role?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  'aria-current'?: string | undefined;
  'aria-describedby'?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
  'data-testid'?: string;
}

export function Link(props: LinkProps) {
  var to = grab(props, 'to') as string;
  var shouldReplace = grab(props, 'replace') as boolean | undefined;
  var children = grab(props, 'children') as React.ReactNode;
  var externalOnClick = grab(props, 'onClick') as React.MouseEventHandler<HTMLAnchorElement> | undefined;
  var className = grab(props, 'className') as string | undefined;
  var id = grab(props, 'id') as string | undefined;
  var title = grab(props, 'title') as string | undefined;
  var target = grab(props, 'target') as string | undefined;
  var rel = grab(props, 'rel') as string | undefined;
  var tabIndex = grab(props, 'tabIndex') as number | undefined;
  var role = grab(props, 'role') as string | undefined;
  var style = grab(props, 'style') as React.CSSProperties | undefined;
  var ariaLabel = grab(props, 'aria-label') as string | undefined;
  var ariaCurrent = grab(props, 'aria-current') as string | undefined;
  var ariaDescribedby = grab(props, 'aria-describedby') as string | undefined;
  var ariaHidden = grab(props, 'aria-hidden') as boolean | 'true' | 'false' | undefined;
  var dataTestid = grab(props, 'data-testid') as string | undefined;

  var ctx = useRouterContext();
  var navigate = grab(ctx, 'navigate') as NavigateFunction;

  var handleClick = useCallback(
    function linkClickHandler(e: React.MouseEvent<HTMLAnchorElement>) {
      if (externalOnClick) externalOnClick(e);

      var isDefaultPrevented = e.defaultPrevented;
      var buttonNumber = e.button;
      var hasMetaKey = e.metaKey;
      var hasAltKey = e.altKey;
      var hasCtrlKey = e.ctrlKey;
      var hasShiftKey = e.shiftKey;

      if (isDefaultPrevented) return;
      if (buttonNumber !== 0) return;
      if (hasMetaKey) return;
      if (hasAltKey) return;
      if (hasCtrlKey) return;
      if (hasShiftKey) return;

      e.preventDefault();
      navigate(to, buildNavOptions(shouldReplace));
    },
    [to, shouldReplace, navigate, externalOnClick],
  );

  return (
    <a
      href={to}
      onClick={handleClick}
      className={className}
      id={id}
      title={title}
      target={target}
      rel={rel}
      tabIndex={tabIndex}
      role={role}
      style={style}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
      aria-describedby={ariaDescribedby}
      aria-hidden={ariaHidden}
      data-testid={dataTestid}
    >
      {children}
    </a>
  );
}