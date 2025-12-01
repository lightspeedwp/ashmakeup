# Contentful & Netlify Integration Guide

This guide will walk you through setting up your Ash Shaw Makeup Portfolio with Contentful CMS and Netlify hosting.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Contentful Setup](#contentful-setup)
3. [Netlify Setup](#netlify-setup)
4. [Connect Contentful to Netlify](#connect-contentful-to-netlify)
5. [Local Development](#local-development)
6. [Content Management](#content-management)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, you'll need:

- A [Contentful](https://www.contentful.com/) account (free tier available)
- A [Netlify](https://www.netlify.com/) account (free tier available)
- A [GitHub](https://github.com/) account (for deployment)
- Node.js 18+ installed locally

---

## Contentful Setup

### Step 1: Create a Contentful Space

1. Log in to [Contentful](https://app.contentful.com/)
2. Click **"Create space"** or use an existing one
3. Choose the **free** plan if you're just starting out
4. Name your space (e.g., "Ash Shaw Portfolio")

### Step 2: Import Content Types

The content types are defined in `src/contentful-content-types.json`. You can import them manually or via the Contentful CLI.

#### Option A: Manual Creation

Create these content types in your Contentful space:

- **homePage** - Homepage content (hero, philosophy cards, featured work)
- **portfolioEntry** - Individual portfolio pieces
- **aboutPage** - About page content
- **blogPost** - Blog posts
- **author** - Author information
- **philosophyCard** - Why I do makeup cards
- **journeySection** - Timeline sections for about page
- **service** - Services offered
- **seoSettings** - SEO metadata

#### Option B: CLI Import (Recommended)

```bash
# Install Contentful CLI
npm install -g contentful-cli

# Login to Contentful
contentful login

# Import content types (replace YOUR_SPACE_ID)
contentful space import \
  --space-id YOUR_SPACE_ID \
  --content-file src/contentful-content-types.json
```

### Step 3: Get API Keys

1. In Contentful, go to **Settings → API Keys**
2. Click **"Add API key"**
3. Name it (e.g., "Portfolio Website")
4. Copy these values:
   - **Space ID** → `VITE_CONTENTFUL_SPACE_ID`
   - **Content Delivery API - access token** → `VITE_CONTENTFUL_ACCESS_TOKEN`
   - **Content Preview API - access token** → `VITE_CONTENTFUL_PREVIEW_TOKEN`

### Step 4: Create Initial Content

Create at least one entry for each main content type:

1. **homePage** - Your homepage content
2. **aboutPage** - Your about page content
3. **author** - Your author profile (for blog posts)
4. **portfolioEntry** - At least one portfolio piece

---

## Netlify Setup

### Step 1: Push to GitHub

First, ensure your code is in a GitHub repository:

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit with Contentful integration"

# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/ashmakeup.git
git push -u origin main
```

### Step 2: Connect to Netlify

1. Log in to [Netlify](https://app.netlify.com/)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize Netlify
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Functions directory:** `netlify/functions`

### Step 3: Set Environment Variables

In Netlify, go to **Site settings → Environment variables** and add:

| Variable Name | Description |
|--------------|-------------|
| `VITE_CONTENTFUL_SPACE_ID` | Your Contentful Space ID |
| `VITE_CONTENTFUL_ACCESS_TOKEN` | Content Delivery API token |
| `VITE_CONTENTFUL_PREVIEW_TOKEN` | Content Preview API token (optional) |
| `VITE_CONTENTFUL_ENVIRONMENT` | `master` (default) |

### Step 4: Create Build Hook

1. Go to **Site settings → Build & deploy → Build hooks**
2. Click **"Add build hook"**
3. Name it "Contentful Webhook"
4. Copy the generated URL (you'll need this for Contentful)
5. Add this URL as an environment variable:
   - **Name:** `NETLIFY_BUILD_HOOK_URL`
   - **Value:** The URL you just copied

---

## Connect Contentful to Netlify

### Set Up Automatic Deploys

When you publish content in Contentful, it should automatically rebuild your site:

1. In Contentful, go to **Settings → Webhooks**
2. Click **"Add Webhook"**
3. Configure:
   - **Name:** "Netlify Deploy"
   - **URL:** `https://YOUR-SITE.netlify.app/api/contentful-webhook`
   - **Triggers:** Select these events:
     - ✅ Entry → Publish
     - ✅ Entry → Unpublish
     - ✅ Entry → Delete
     - ✅ Asset → Publish
     - ✅ Asset → Unpublish
   - **Content Types:** Select all content types you want to trigger rebuilds

### Alternative: Direct Build Hook

For simpler setup, you can use Netlify's build hook directly:

1. In Contentful Webhooks, use the Netlify build hook URL directly:
   - **URL:** Your Netlify build hook URL (from Step 4 above)
   - Same triggers as above

---

## Local Development

### Step 1: Create Local Environment File

```bash
# Copy the example file
cp .env.example .env

# Edit with your values
nano .env  # or use your preferred editor
```

Add your Contentful credentials:

```env
VITE_CONTENTFUL_SPACE_ID=your_actual_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=your_actual_access_token
VITE_CONTENTFUL_PREVIEW_TOKEN=your_preview_token
VITE_CONTENTFUL_ENVIRONMENT=master
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

Your site will be available at `http://localhost:3000`

### Step 4: Test Netlify Functions Locally

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Run with Netlify dev server
netlify dev
```

---

## Content Management

### Adding Portfolio Entries

1. In Contentful, go to **Content → Add entry → Portfolio Entry**
2. Fill in required fields:
   - **Title** - Name of the work
   - **Slug** - URL-friendly name (e.g., "modem-festival-2024")
   - **Description** - Short description
   - **Category** - Select from: festival, uv-makeup, editorial, nail-art, creative, etc.
   - **Featured Image** - Upload the main image
3. Optional but recommended:
   - **Gallery Images** - Additional images
   - **Tags** - For filtering
   - **Featured Work** - Toggle to show on homepage
4. Click **Publish**

### Adding Blog Posts

1. Create an **Author** entry first (if not already done)
2. Go to **Content → Add entry → Blog Post**
3. Fill in required fields:
   - **Title** - Post title
   - **Slug** - URL-friendly name
   - **Excerpt** - Short summary
   - **Content** - Full post content (rich text)
   - **Category** - Select category
   - **Author** - Link to your author entry
   - **Published Date** - When to show as published
   - **Published** - Toggle to make visible
4. Click **Publish**

### Updating Homepage Content

1. Find your **homePage** entry in Content
2. Update:
   - Hero title, subtitle, description
   - Philosophy cards (link to philosophyCard entries)
   - Featured work section settings
3. Click **Publish**
4. Wait for automatic rebuild (1-2 minutes)

---

## Troubleshooting

### Content Not Showing

1. **Check environment variables** - Ensure they're set correctly in Netlify
2. **Check Contentful** - Make sure entries are **published**, not just saved
3. **Check browser console** - Look for API errors
4. **Check content types** - Ensure fields match the code expectations

### Build Failing

1. Check **Netlify deploy logs** for errors
2. Ensure **Node version** is 18+
3. Verify **environment variables** are set
4. Run `npm run build` locally to test

### Webhooks Not Working

1. Verify **webhook URL** is correct in Contentful
2. Check **Netlify Functions logs** for errors
3. Ensure `NETLIFY_BUILD_HOOK_URL` is set
4. Test webhook manually via Contentful

### Local Development Issues

1. Ensure `.env` file exists with correct values
2. Restart dev server after changing env vars
3. Check for TypeScript errors: `npx tsc --noEmit`
4. Clear node_modules: `rm -rf node_modules && npm install`

---

## Quick Reference

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_CONTENTFUL_SPACE_ID` | ✅ | Contentful Space ID |
| `VITE_CONTENTFUL_ACCESS_TOKEN` | ✅ | Content Delivery API token |
| `VITE_CONTENTFUL_PREVIEW_TOKEN` | ❌ | Preview API token |
| `VITE_CONTENTFUL_ENVIRONMENT` | ❌ | Environment (default: master) |
| `NETLIFY_BUILD_HOOK_URL` | ❌ | For webhook rebuilds |

### Useful Commands

```bash
# Development
npm run dev              # Start local dev server
npm run build            # Build for production
npm run preview          # Preview production build

# Netlify
netlify dev              # Dev with Netlify functions
netlify deploy           # Deploy preview
netlify deploy --prod    # Deploy to production

# Contentful CLI
contentful login         # Authenticate
contentful space list    # List spaces
contentful content-type list --space-id XXX  # List content types
```

### Content Types Reference

| Type | Description | Linked By |
|------|-------------|-----------|
| `homePage` | Homepage content | - |
| `aboutPage` | About page content | - |
| `portfolioEntry` | Portfolio pieces | portfolioSection |
| `portfolioSection` | Portfolio groupings | portfolioPage |
| `blogPost` | Blog articles | author, seoSettings |
| `author` | Author profiles | blogPost |
| `philosophyCard` | Why I do makeup cards | homePage |
| `journeySection` | Timeline sections | aboutPage |
| `service` | Services offered | aboutPage |
| `seoSettings` | SEO metadata | various |

---

## Need Help?

- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Documentation](https://vitejs.dev/)

For project-specific issues, check the existing code in:

- `src/utils/contentfulService.ts` - API integration
- `src/hooks/useContentful.ts` - React hooks
- `netlify/functions/` - Webhook handlers
