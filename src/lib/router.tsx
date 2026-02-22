/**
 * @fileoverview Lightweight client-side router — drop-in replacement for react-router
 *
 * Built to eliminate the `async_hooks` runtime error caused by react-router v7's
 * server-side code being loaded via esm.sh in the Figma Make environment.
 *
 * Exposes the same public API surface used across the codebase:
 *   createBrowserRouter, RouterProvider, useNavigate, useLocation,
 *   useParams, useSearchParams, Link, Outlet
 *
 * @version 1.0.0
 */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  type ReactNode,
  type ComponentType,
  type MouseEvent,
} from 'react';

/* ────────────────────────────── Types ────────────────────────────── */

export interface RouteObject {
  path?: string;
  index?: boolean;
  Component?: ComponentType<any>;
  children?: RouteObject[];
}

interface MatchedRoute {
  route: RouteObject;
  params: Record<string, string>;
  /** child routes that still need matching */
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
  /** Stack of matched routes for nested Outlet rendering */
  outlets: MatchedRoute[];
  /** Index into the outlets stack for the current Outlet depth */
  depth: number;
}

type NavigateFunction = (to: string | number, options?: { replace?: boolean }) => void;

/* ────────────────────────────── Context ────────────────────────────── */

const RouterContext = createContext<RouterContextValue | null>(null);

function useRouterContext(): RouterContextValue {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('Router hooks must be used inside <RouterProvider>');
  return ctx;
}

/* ────────────────────────────── Matching ────────────────────────────── */

/**
 * Convert a route path pattern (e.g. "blog/:slug") into a RegExp + param names.
 */
function compilePath(pattern: string): { regex: RegExp; paramNames: string[] } {
  const paramNames: string[] = [];

  // Catch-all "*"
  if (pattern === '*') {
    return { regex: /^\/.*$/, paramNames: ['*'] };
  }

  const regexStr = pattern
    .split('/')
    .filter(Boolean)
    .map((seg) => {
      if (seg === '*') {
        paramNames.push('*');
        return '(?:/(.*))?';
      }
      if (seg.startsWith(':')) {
        paramNames.push(seg.slice(1));
        return '/([^/]+)';
      }
      return '/' + seg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    })
    .join('');

  return { regex: new RegExp('^' + (regexStr || '') + '/?$', 'i'), paramNames };
}

/**
 * Walk the route tree and produce a flat list of matched routes (parent → child)
 * so that each level can render via <Outlet />.
 */
function matchRoutes(
  routes: RouteObject[],
  pathname: string,
): MatchedRoute[] | null {
  for (const route of routes) {
    // Index route — match parent path exactly
    if (route.index) {
      // Index routes match only when there's nothing left to match
      if (pathname === '/' || pathname === '') {
        const matched: MatchedRoute = { route, params: {}, children: undefined };
        return [matched];
      }
      continue;
    }

    if (route.path === undefined && route.children) {
      // Layout route without its own path — try matching children
      const childMatch = matchRoutes(route.children, pathname);
      if (childMatch) {
        return [{ route, params: childMatch[0]?.params ?? {}, children: route.children }, ...childMatch];
      }
      continue;
    }

    const pattern = route.path ?? '';
    const hasChildren = route.children && route.children.length > 0;

    if (hasChildren) {
      // Parent route — match prefix
      const { regex: prefixRegex, paramNames } = compilePrefixPath(pattern);
      const prefixMatch = pathname.match(prefixRegex);
      if (prefixMatch) {
        const params: Record<string, string> = {};
        paramNames.forEach((name, i) => {
          params[name] = decodeURIComponent(prefixMatch[i + 1] || '');
        });

        const rest = pathname.slice(prefixMatch[0].replace(/\/$/, '').length) || '/';
        const childMatch = matchRoutes(route.children!, rest);
        if (childMatch) {
          // Merge params
          const merged = { ...params, ...childMatch[0]?.params };
          return [
            { route, params: merged, children: route.children },
            ...childMatch.map((m) => ({ ...m, params: { ...merged, ...m.params } })),
          ];
        }
      }
    } else {
      // Leaf route — exact match
      if (pattern === '*') {
        return [{ route, params: { '*': pathname } }];
      }
      const { regex, paramNames } = compilePath(pattern);
      const match = pathname.match(regex);
      if (match) {
        const params: Record<string, string> = {};
        paramNames.forEach((name, i) => {
          params[name] = decodeURIComponent(match[i + 1] || '');
        });
        return [{ route, params }];
      }
    }
  }

  return null;
}

function compilePrefixPath(pattern: string): { regex: RegExp; paramNames: string[] } {
  const paramNames: string[] = [];
  if (!pattern || pattern === '/') {
    return { regex: /^/, paramNames };
  }

  const regexStr = pattern
    .split('/')
    .filter(Boolean)
    .map((seg) => {
      if (seg.startsWith(':')) {
        paramNames.push(seg.slice(1));
        return '/([^/]+)';
      }
      return '/' + seg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    })
    .join('');

  return { regex: new RegExp('^' + regexStr, 'i'), paramNames };
}

/* ────────────────────────────── Location helpers ────────────────────────────── */

function createLocation(): LocationDescriptor {
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    key: Math.random().toString(36).slice(2, 8),
  };
}

/* ────────────────────────────── createBrowserRouter ────────────────────────────── */

export interface BrowserRouter {
  routes: RouteObject[];
  /** Subscribe to location changes. Returns unsubscribe fn. */
  subscribe: (cb: () => void) => () => void;
  getLocation: () => LocationDescriptor;
  navigate: NavigateFunction;
}

export function createBrowserRouter(routes: RouteObject[]): BrowserRouter {
  let location = createLocation();
  const listeners = new Set<() => void>();

  function notify() {
    location = createLocation();
    listeners.forEach((fn) => fn());
  }

  // Listen for browser back/forward
  window.addEventListener('popstate', notify);

  const navigate: NavigateFunction = (to, options) => {
    if (typeof to === 'number') {
      window.history.go(to);
      return;
    }
    if (options?.replace) {
      window.history.replaceState(null, '', to);
    } else {
      window.history.pushState(null, '', to);
    }
    notify();
  };

  return {
    routes,
    subscribe: (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    getLocation: () => location,
    navigate,
  };
}

/* ────────────────────────────── RouterProvider ────────────────────────────── */

export function RouterProvider({ router }: { router: BrowserRouter }) {
  const [location, setLocation] = useState(router.getLocation);

  useEffect(() => {
    // Sync in case location changed between render and effect
    setLocation(router.getLocation());
    return router.subscribe(() => setLocation(router.getLocation()));
  }, [router]);

  const matched = useMemo(
    () => matchRoutes(router.routes, location.pathname),
    [router.routes, location.pathname],
  );

  const params = useMemo(() => {
    if (!matched || matched.length === 0) return {};
    return matched[matched.length - 1].params;
  }, [matched]);

  const ctx = useMemo<RouterContextValue>(
    () => ({
      location,
      navigate: router.navigate,
      params,
      outlets: matched ?? [],
      depth: 0,
    }),
    [location, router.navigate, params, matched],
  );

  if (!matched || matched.length === 0) {
    return null;
  }

  const TopComponent = matched[0].route.Component;
  return (
    <RouterContext.Provider value={ctx}>
      {TopComponent ? <TopComponent /> : null}
    </RouterContext.Provider>
  );
}

/* ────────────────────────────── Hooks ────────────────────────────── */

/**
 * Returns a function to navigate programmatically.
 * Compatible with react-router's useNavigate().
 */
export function useNavigate(): NavigateFunction {
  return useRouterContext().navigate;
}

/**
 * Returns the current location object.
 * Compatible with react-router's useLocation().
 */
export function useLocation(): LocationDescriptor {
  return useRouterContext().location;
}

/**
 * Returns URL params extracted from route patterns (e.g. `:slug`).
 * Compatible with react-router's useParams().
 */
export function useParams<T extends Record<string, string> = Record<string, string>>(): T {
  return useRouterContext().params as T;
}

/**
 * Returns [searchParams, setSearchParams] tuple.
 * Compatible with react-router's useSearchParams().
 */
export function useSearchParams(): [URLSearchParams, (next: URLSearchParams | ((prev: URLSearchParams) => URLSearchParams), opts?: { replace?: boolean }) => void] {
  const { location, navigate } = useRouterContext();

  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);

  const setSearchParams = useCallback(
    (
      next: URLSearchParams | ((prev: URLSearchParams) => URLSearchParams),
      opts?: { replace?: boolean },
    ) => {
      const resolved = typeof next === 'function' ? next(new URLSearchParams(location.search)) : next;
      const qs = resolved.toString();
      const newUrl = location.pathname + (qs ? '?' + qs : '') + location.hash;
      navigate(newUrl, { replace: opts?.replace });
    },
    [location, navigate],
  );

  return [searchParams, setSearchParams];
}

/* ────────────────────────────── Outlet ────────────────────────────── */

/**
 * Renders the matched child route component.
 * Compatible with react-router's <Outlet />.
 */
export function Outlet() {
  const ctx = useRouterContext();
  const nextDepth = ctx.depth + 1;

  if (nextDepth >= ctx.outlets.length) {
    return null;
  }

  const nextMatch = ctx.outlets[nextDepth];
  const NextComponent = nextMatch.route.Component;

  const childCtx = useMemo<RouterContextValue>(
    () => ({ ...ctx, depth: nextDepth, params: nextMatch.params }),
    [ctx, nextDepth, nextMatch.params],
  );

  return (
    <RouterContext.Provider value={childCtx}>
      {NextComponent ? <NextComponent /> : null}
    </RouterContext.Provider>
  );
}

/* ────────────────────────────── Link ────────────────────────────── */

interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
  replace?: boolean;
  children?: ReactNode;
}

/**
 * Client-side navigation link.
 * Compatible with react-router's <Link />.
 */
export function Link({ to, replace: shouldReplace, children, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouterContext();

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(e);
      // Allow modifier keys to open in new tab
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
        return;
      }
      e.preventDefault();
      navigate(to, { replace: shouldReplace });
    },
    [to, shouldReplace, navigate, onClick],
  );

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}