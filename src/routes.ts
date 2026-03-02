/**
 * @fileoverview React Router configuration for Ash Shaw Makeup Portfolio
 * 
 * Defines all application routes using React Router's Data mode pattern.
 * The RootLayout provides the shared Header/Footer shell, while each
 * child route renders its page content via the Outlet.
 * 
 * Route structure:
 * /                              → HomePage (landing)
 * /about                         → HiddenAboutPage (unlisted gateway to all about content)
 * /about/journey                 → AboutPage (journey & philosophy — original about page)
 * /about/history                 → HistoryPage (company history)
 * /about/berlin                  → BerlinPage (Berlin creative anchor)
 * /about/book                    → BookPage (book project)
 * /about/bio                     → BioPage (full biography)
 * /about/process                 → ProcessPage (creative process)
 * /about/lucy-in-the-sky-with-diamonds → LucyPage (psychedelic influence)
 * /about/travels                 → TravelsPage (nomadic festival circuit)
 * /about/podcast                 → PodcastPage (podcast project)
 * /ebook                         → EbookPage (ebook project)
 * /about/adhd                    → AdhdPage (ADHD experience)
 * /about/cycling                 → CyclingPage (cycling identity)
 * /about/aquarius                → AquariusPage (Aquarian identity blueprint)
 * /about/music                   → MusicPage (psytrance & 140 BPM heartbeat)
 * /about/lightspeed              → LightSpeedPage (LightSpeed WordPress agency)
 * /about/education               → EducationPage (unconventional classroom)
 * /about/partners                → PartnersPage (people along the way)
 * /about/fitness                 → FitnessPage (the moving body)
 * /about/six-cats                → SixCatsPage (Six Cats Cannabis Club)
 * /about/manifesto               → ManifestoPage (creative manifesto)
 * /about/tribes                  → TribesPage (tribes & community)
 * /about/accessibility           → AccessibilityStatementPage (accessibility statement)
 * /events                        → EventsPage (events listing)
 * /events/category/:slug         → EventCategoryPage (category archive)
 * /events/tag/:slug              → EventTagPage (tag archive)
 * /events/:slug                  → EventDetailPage (single event detail)
 * /portfolio                     → PortfolioMainPage (gallery with category filtering)
 * /portfolio/category/:slug      → PortfolioCategoryPage (category archive)
 * /portfolio/tag/:slug           → PortfolioTagPage (tag archive)
 * /portfolio/:slug               → PortfolioResolver (resolves to detail page)
 * /blog                          → BlogPage (with optional ?category= query param)
 * /blog/category/:slug           → BlogCategoryPage (category archive)
 * /blog/tag/:slug                → BlogTagPage (tag archive)
 * /blog/:slug                    → BlogPostPageRoute (individual post)
 * /contact                       → ContactPage (Typeform embed)
 * /press                         → PressKitPage (press kit)
 * /toolkit                       → GearPage (gear & toolkit)
 * /next-festival                 → FestivalLandingPage (festival landing)
 * /videos                        → VideosPage (video showcase)
 * /videos/category/:slug         → VideoCategoryPage (category archive)
 * /videos/tag/:slug              → VideoTagPage (tag archive)
 * /video/:slug                   → VideoDetailPage (single video)
 * /podcasts                      → PodcastsPage (podcast archive)
 * /podcasts/category/:slug       → PodcastCategoryPage (category archive)
 * /podcasts/tag/:slug            → PodcastTagPage (tag archive)
 * /podcast/:slug                 → PodcastDetailPage (single episode)
 * /search                        → SearchResultsPage (global search)
 * /faq                            → FaqAggregatePage (all FAQs)
 * /feedback                       → FeedbackPage (testimonials)
 * /terms                         → TermsAndConditions
 * /privacy                       → PrivacyPolicy
 * /sitemap                       → SitemapPage
 * /style-guide                   → StyleGuidePage
 * /stickers                      → StickersPage (sticker art gallery)
 * /dev-tools                     → DevToolsPage (developer tools hub)
 * /dev-tools/style-guide         → StyleGuidePage (via dev tools)
 * /dev-tools/typography          → TypographySpecimenPage
 * /dev-tools/spacing             → SpacingSpecimenPage
 * /dev-tools/shadows             → ShadowSpecimenPage
 * /dev-tools/radius              → RadiusSpecimenPage
 * /dev-tools/buttons             → ButtonSpecimenPage
 * /dev-tools/cards               → CardSpecimenPage
 * /dev-tools/neon                → AnimationSpecimenPage
 * /dev-tools/tokens              → DesignTokensRefPage
 * /dev-tools/icons               → IconLibraryPage
 * /dev-tools/api                 → ComponentApiPage
 * /dev-tools/playground          → PlaygroundPage
 * /dev-tools/code-quality        → CodeQualityPage
 * /dev-tools/deployment          → DeploymentReadinessPage
 * /dev-tools/analytics           → AnalyticsDashboardPage
 * /dev-tools/components          → ComponentShowcasePage
 * /dev-tools/snippets            → SnippetGeneratorPage
 * /dev-tools/docs                → DocumentationGeneratorPage
 * /dev-tools/visual-regression   → VisualRegressionTesterPage
 * /dev-tools/integration         → IntegrationTesterPage
 * /dev-tools/stickers            → StickersPage (via dev tools)
 * /dev-tools/accessibility       → AccessibilityTesterPage
 * /dev-tools/performance         → PerformanceTesterPage
 * *                              → NotFoundPage (404)
 * 
 * @author Ash Shaw Portfolio Team
 * @version 13.0.0 - Fixed stale /about/ebook → /ebook, added missing route docs
 */

import { createBrowserRouter } from './lib/router';
import { RootLayout } from './components/common/RootLayout';
import { HomePage } from './components/pages/home/HomePage';
import { AboutPage } from './components/pages/about/AboutPage';
import { HiddenAboutPage } from './components/pages/about/HiddenAboutPage';
import { HistoryPage } from './components/pages/about/HistoryPage';
import { BerlinPage } from './components/pages/about/BerlinPage';
import { BookPage } from './components/pages/about/BookPage';
import { BioPage } from './components/pages/about/BioPage';
import { ProcessPage } from './components/pages/about/ProcessPage';
import { LucyPage } from './components/pages/about/LucyPage';
import { TravelsPage } from './components/pages/about/TravelsPage';
import { PodcastPage } from './components/pages/about/PodcastPage';
import { EbookPage } from './components/pages/about/EbookPage';
import { AdhdPage } from './components/pages/about/AdhdPage';
import { CyclingPage } from './components/pages/about/CyclingPage';
import { AquariusPage } from './components/pages/about/AquariusPage';
import { MusicPage } from './components/pages/about/MusicPage';
import { LightSpeedPage } from './components/pages/about/LightSpeedPage';
import { EducationPage } from './components/pages/about/EducationPage';
import { PartnersPage } from './components/pages/about/PartnersPage';
import { FitnessPage } from './components/pages/about/FitnessPage';
import { SixCatsPage } from './components/pages/about/SixCatsPage';
import { ManifestoPage } from './components/pages/about/ManifestoPage';
import { TribesPage } from './components/pages/about/TribesPage';
import { AccessibilityStatementPage } from './components/pages/legal/AccessibilityStatementPage';
import { EventsPage } from './components/pages/events/EventsPage';
import { EventCategoryPage } from './components/pages/events/EventCategoryPage';
import { EventTagPage } from './components/pages/events/EventTagPage';
import { EventDetailPage } from './components/pages/events/EventDetailPage';
import { PortfolioMainPage } from './components/pages/portfolio/PortfolioMainPage';
import { PortfolioResolver } from './components/pages/portfolio/PortfolioResolver';
import { PortfolioCategoryPage } from './components/pages/portfolio/PortfolioCategoryPage';
import { PortfolioTagPage } from './components/pages/portfolio/PortfolioTagPage';
import { BlogPage } from './components/pages/blog/BlogPage';
import { BlogPostPageRoute } from './components/pages/blog/BlogPostPage';
import { BlogCategoryPage } from './components/pages/blog/BlogCategoryPage';
import { BlogTagPage } from './components/pages/blog/BlogTagPage';
import { ContactPage } from './components/pages/contact/ContactPage';
import { PressKitPage } from './components/pages/press/PressKitPage';
import { GearPage } from './components/pages/gear/GearPage';
import { FestivalLandingPage } from './components/pages/landing/FestivalLandingPage';
import { VideosPage } from './components/pages/videos/VideosPage';
import { VideoDetailPage } from './components/pages/videos/VideoDetailPage';
import { VideoCategoryPage } from './components/pages/videos/VideoCategoryPage';
import { VideoTagPage } from './components/pages/videos/VideoTagPage';
import { PodcastsPage } from './components/pages/podcasts/PodcastsPage';
import { PodcastDetailPage } from './components/pages/podcasts/PodcastDetailPage';
import { PodcastCategoryPage } from './components/pages/podcasts/PodcastCategoryPage';
import { PodcastTagPage } from './components/pages/podcasts/PodcastTagPage';
import { SearchResultsPage } from './components/pages/search/SearchResultsPage';
import { TermsAndConditions } from './components/pages/legal/TermsAndConditions';
import { PrivacyPolicy } from './components/pages/legal/PrivacyPolicy';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { SitemapPage } from './components/pages/SitemapPage';
import { StyleGuidePage } from './components/pages/StyleGuidePage';
import { FaqAggregatePage } from './components/pages/faq/FaqAggregatePage';
import { FeedbackPage } from './components/pages/feedback/FeedbackPage';
import { StickersPage } from './components/pages/StickersPage';
import { DevToolsPage } from './components/pages/dev-tools/DevToolsPage';
import { TypographySpecimenPage } from './components/pages/dev-tools/TypographySpecimenPage';
import { SpacingSpecimenPage } from './components/pages/dev-tools/SpacingSpecimenPage';
import { ShadowSpecimenPage } from './components/pages/dev-tools/ShadowSpecimenPage';
import { RadiusSpecimenPage } from './components/pages/dev-tools/RadiusSpecimenPage';
import { ButtonSpecimenPage } from './components/pages/dev-tools/ButtonSpecimenPage';
import { CardSpecimenPage } from './components/pages/dev-tools/CardSpecimenPage';
import { AnimationSpecimenPage } from './components/pages/dev-tools/AnimationSpecimenPage';
import { DesignTokensRefPage } from './components/pages/dev-tools/DesignTokensRefPage';
import { IconLibraryPage } from './components/pages/dev-tools/IconLibraryPage';
import { ComponentApiPage } from './components/pages/dev-tools/ComponentApiPage';
import { PlaygroundPage } from './components/pages/dev-tools/PlaygroundPage';
import { CodeQualityPage } from './components/pages/dev-tools/CodeQualityPage';
import { DeploymentReadinessPage } from './components/pages/dev-tools/DeploymentReadinessPage';
import { AnalyticsDashboardPage } from './components/pages/dev-tools/AnalyticsDashboardPage';
import { ComponentShowcasePage } from './components/pages/dev-tools/ComponentShowcasePage';
import { SnippetGeneratorPage } from './components/pages/dev-tools/SnippetGeneratorPage';
import { DocumentationGeneratorPage } from './components/pages/dev-tools/DocumentationGeneratorPage';
import { VisualRegressionTesterPage } from './components/pages/dev-tools/VisualRegressionTesterPage';
import { IntegrationTesterPage } from './components/pages/dev-tools/IntegrationTesterPage';
import { AccessibilityTesterPage } from './components/pages/dev-tools/AccessibilityTesterPage';
import { PerformanceTesterPage } from './components/pages/dev-tools/PerformanceTesterPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: HiddenAboutPage },
      { path: 'about/journey', Component: AboutPage },
      { path: 'about/history', Component: HistoryPage },
      { path: 'about/berlin', Component: BerlinPage },
      { path: 'about/book', Component: BookPage },
      { path: 'about/bio', Component: BioPage },
      { path: 'about/process', Component: ProcessPage },
      { path: 'about/lucy-in-the-sky-with-diamonds', Component: LucyPage },
      { path: 'about/travels', Component: TravelsPage },
      { path: 'about/podcast', Component: PodcastPage },
      { path: 'ebook', Component: EbookPage },
      { path: 'about/adhd', Component: AdhdPage },
      { path: 'about/cycling', Component: CyclingPage },
      { path: 'about/aquarius', Component: AquariusPage },
      { path: 'about/music', Component: MusicPage },
      { path: 'about/lightspeed', Component: LightSpeedPage },
      { path: 'about/education', Component: EducationPage },
      { path: 'about/partners', Component: PartnersPage },
      { path: 'about/fitness', Component: FitnessPage },
      { path: 'about/six-cats', Component: SixCatsPage },
      { path: 'about/manifesto', Component: ManifestoPage },
      { path: 'about/tribes', Component: TribesPage },
      { path: 'about/accessibility', Component: AccessibilityStatementPage },
      { path: 'events', Component: EventsPage },
      { path: 'events/category/:slug', Component: EventCategoryPage },
      { path: 'events/tag/:slug', Component: EventTagPage },
      { path: 'events/:slug', Component: EventDetailPage },
      { path: 'portfolio', Component: PortfolioMainPage },
      { path: 'portfolio/category/:slug', Component: PortfolioCategoryPage },
      { path: 'portfolio/tag/:slug', Component: PortfolioTagPage },
      { path: 'portfolio/:slug', Component: PortfolioResolver },
      { path: 'blog', Component: BlogPage },
      { path: 'blog/category/:slug', Component: BlogCategoryPage },
      { path: 'blog/tag/:slug', Component: BlogTagPage },
      { path: 'blog/:slug', Component: BlogPostPageRoute },
      { path: 'contact', Component: ContactPage },
      { path: 'press', Component: PressKitPage },
      { path: 'toolkit', Component: GearPage },
      { path: 'next-festival', Component: FestivalLandingPage },
      { path: 'videos', Component: VideosPage },
      { path: 'videos/category/:slug', Component: VideoCategoryPage },
      { path: 'videos/tag/:slug', Component: VideoTagPage },
      { path: 'video/:slug', Component: VideoDetailPage },
      { path: 'podcasts', Component: PodcastsPage },
      { path: 'podcasts/category/:slug', Component: PodcastCategoryPage },
      { path: 'podcasts/tag/:slug', Component: PodcastTagPage },
      { path: 'podcast/:slug', Component: PodcastDetailPage },
      { path: 'search', Component: SearchResultsPage },
      { path: 'faq', Component: FaqAggregatePage },
      { path: 'feedback', Component: FeedbackPage },
      { path: 'terms', Component: TermsAndConditions },
      { path: 'privacy', Component: PrivacyPolicy },
      { path: 'sitemap', Component: SitemapPage },
      { path: 'style-guide', Component: StyleGuidePage },
      { path: 'stickers', Component: StickersPage },
      { path: 'dev-tools', Component: DevToolsPage },
      { path: 'dev-tools/style-guide', Component: StyleGuidePage },
      { path: 'dev-tools/typography', Component: TypographySpecimenPage },
      { path: 'dev-tools/spacing', Component: SpacingSpecimenPage },
      { path: 'dev-tools/shadows', Component: ShadowSpecimenPage },
      { path: 'dev-tools/radius', Component: RadiusSpecimenPage },
      { path: 'dev-tools/buttons', Component: ButtonSpecimenPage },
      { path: 'dev-tools/cards', Component: CardSpecimenPage },
      { path: 'dev-tools/neon', Component: AnimationSpecimenPage },
      { path: 'dev-tools/tokens', Component: DesignTokensRefPage },
      { path: 'dev-tools/icons', Component: IconLibraryPage },
      { path: 'dev-tools/api', Component: ComponentApiPage },
      { path: 'dev-tools/playground', Component: PlaygroundPage },
      { path: 'dev-tools/code-quality', Component: CodeQualityPage },
      { path: 'dev-tools/deployment', Component: DeploymentReadinessPage },
      { path: 'dev-tools/analytics', Component: AnalyticsDashboardPage },
      { path: 'dev-tools/components', Component: ComponentShowcasePage },
      { path: 'dev-tools/snippets', Component: SnippetGeneratorPage },
      { path: 'dev-tools/docs', Component: DocumentationGeneratorPage },
      { path: 'dev-tools/visual-regression', Component: VisualRegressionTesterPage },
      { path: 'dev-tools/integration', Component: IntegrationTesterPage },
      { path: 'dev-tools/stickers', Component: StickersPage },
      { path: 'dev-tools/accessibility', Component: AccessibilityTesterPage },
      { path: 'dev-tools/performance', Component: PerformanceTesterPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);