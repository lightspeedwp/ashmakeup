/**
 * @fileoverview React Router configuration for Ash Shaw Makeup Portfolio
 * 
 * Defines all application routes using React Router's Data mode pattern.
 * The RootLayout provides the shared Header/Footer shell, while each
 * child route renders its page content via the Outlet.
 * 
 * Route structure:
 * /                    → HomePage (landing)
 * /about               → AboutPage (journey & philosophy)
 * /portfolio            → PortfolioMainPage (gallery with category filtering)
 * /portfolio/:slug      → PortfolioResolver (resolves to category view or detail page)
 * /blog                 → BlogPage (with optional ?category= query param)
 * /blog/:slug           → BlogPostPageRoute (individual post)
 * /contact              → ContactPage (Typeform embed)
 * /videos               → VideosPage (video showcase)
 * /terms                → TermsAndConditions
 * /privacy              → PrivacyPolicy
 * /sitemap              → SitemapPage
 * /style-guide          → StyleGuidePage
 * *                     → NotFoundPage (404)
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0 - React Router Migration
 */

import { createBrowserRouter } from 'react-router';
import { RootLayout } from './components/common/RootLayout';
import { HomePage } from './components/pages/home/HomePage';
import { AboutPage } from './components/pages/about/AboutPage';
import { PortfolioMainPage } from './components/pages/portfolio/PortfolioMainPage';
import { PortfolioResolver } from './components/pages/portfolio/PortfolioResolver';
import { BlogPage } from './components/pages/blog/BlogPage';
import { BlogPostPageRoute } from './components/pages/blog/BlogPostPage';
import { ContactPage } from './components/pages/contact/ContactPage';
import { VideosPage } from './components/pages/videos/VideosPage';
import { TermsAndConditions } from './components/pages/legal/TermsAndConditions';
import { PrivacyPolicy } from './components/pages/legal/PrivacyPolicy';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { SitemapPage } from './components/pages/SitemapPage';
import { StyleGuidePage } from './components/pages/StyleGuidePage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'portfolio', Component: PortfolioMainPage },
      { path: 'portfolio/:slug', Component: PortfolioResolver },
      { path: 'blog', Component: BlogPage },
      { path: 'blog/:slug', Component: BlogPostPageRoute },
      { path: 'contact', Component: ContactPage },
      { path: 'videos', Component: VideosPage },
      { path: 'terms', Component: TermsAndConditions },
      { path: 'privacy', Component: PrivacyPolicy },
      { path: 'sitemap', Component: SitemapPage },
      { path: 'style-guide', Component: StyleGuidePage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);