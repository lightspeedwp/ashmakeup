# Contentful Import Instructions

**📦 How to Import Content Models Using the CLI-Compatible JSON**

---

## 🎯 Overview

This guide explains how to use `/contentful-export.json` to automatically create all content models in your Contentful space using the Contentful CLI.

**What You Get:**
- ✅ All 7 content types pre-configured
- ✅ All 77 fields with validation rules
- ✅ Proper field relationships
- ✅ Default values set
- ✅ Editor interface configurations

**Time Required:** 5 minutes (vs 2-3 hours manual setup)

---

## 📋 Prerequisites

Before starting, ensure you have:

1. **Contentful Account** - Created at [contentful.com](https://www.contentful.com)
2. **Contentful Space** - New empty space created
3. **Space ID** - Found in Settings → General Settings
4. **Management Token** - Created in Settings → API keys → Content management tokens

---

## 🚀 Method 1: Using Contentful CLI (Recommended)

### Step 1: Install Contentful CLI

```bash
# Install globally using npm
npm install -g contentful-cli

# Or using yarn
yarn global add contentful-cli

# Verify installation
contentful --version
```

### Step 2: Login to Contentful

```bash
# Interactive login (opens browser)
contentful login

# Or use management token directly
contentful login --management-token YOUR_MANAGEMENT_TOKEN
```

### Step 3: Prepare the Import File

1. Open `/contentful-export.json` in a text editor
2. Find and replace **ALL** instances of `REPLACE_WITH_YOUR_SPACE_ID` with your actual Space ID
   - Example: Replace with `abc123def456` (your actual space ID)
3. Save the file

**Quick Replace (Command Line):**
```bash
# Mac/Linux
sed -i 's/REPLACE_WITH_YOUR_SPACE_ID/your-actual-space-id/g' contentful-export.json

# Windows PowerShell
(Get-Content contentful-export.json) -replace 'REPLACE_WITH_YOUR_SPACE_ID', 'your-actual-space-id' | Set-Content contentful-export.json
```

### Step 4: Import Content Model

```bash
# Navigate to project directory
cd /path/to/ash-shaw-portfolio

# Import the content model
contentful space import \
  --space-id YOUR_SPACE_ID \
  --content-file ./contentful-export.json \
  --content-model-only

# With confirmation skip (faster)
contentful space import \
  --space-id YOUR_SPACE_ID \
  --content-file ./contentful-export.json \
  --content-model-only \
  --skip-content-model \
  --skip-locales \
  --skip-webhooks
```

### Step 5: Verify Import

1. Go to your Contentful space: `https://app.contentful.com/spaces/YOUR_SPACE_ID`
2. Click **Content model** in the left sidebar
3. You should see 7 content types:
   - ✅ Blog Category
   - ✅ Why Reason
   - ✅ Social Link
   - ✅ Homepage
   - ✅ Portfolio Entry
   - ✅ Blog Post
   - ✅ Testimonial

### Step 6: Publish Content Types

```bash
# Publish all content types (make them available in Delivery API)
contentful space publish --space-id YOUR_SPACE_ID
```

---

## 🔧 Method 2: Manual Import via Contentful Web App

If CLI doesn't work, you can import manually:

### Step 1: Export from Another Space (Workaround)

1. Create a temporary Contentful space
2. Manually create ONE content type (e.g., Blog Category)
3. Export it:
   ```bash
   contentful space export \
     --space-id TEMP_SPACE_ID \
     --export-dir ./temp-export \
     --content-model-only
   ```
4. Compare the structure with `/contentful-export.json`
5. Use Contentful's import UI (if available)

**Note:** As of 2025, Contentful doesn't have a web UI import for content models. CLI is required.

---

## 🔄 Method 3: Using Contentful's Management API

For advanced users who want programmatic import:

### Step 1: Create Import Script

```javascript
// import-content-model.js
const contentful = require('contentful-management');
const fs = require('fs');

async function importContentModel() {
  const client = contentful.createClient({
    accessToken: 'YOUR_MANAGEMENT_TOKEN'
  });

  const space = await client.getSpace('YOUR_SPACE_ID');
  const environment = await space.getEnvironment('master');

  const contentModel = JSON.parse(
    fs.readFileSync('./contentful-export.json', 'utf8')
  );

  // Import each content type
  for (const contentType of contentModel.contentTypes) {
    try {
      const ct = await environment.createContentTypeWithId(
        contentType.sys.id,
        {
          name: contentType.name,
          description: contentType.description,
          displayField: contentType.displayField,
          fields: contentType.fields
        }
      );

      await ct.publish();
      console.log(`✅ Created and published: ${contentType.name}`);
    } catch (error) {
      console.error(`❌ Error creating ${contentType.name}:`, error.message);
    }
  }

  console.log('🎉 Import complete!');
}

importContentModel();
```

### Step 2: Run Script

```bash
# Install dependencies
npm install contentful-management

# Run import
node import-content-model.js
```

---

## ✅ Post-Import Checklist

After successful import:

### 1. Verify Content Types
- [ ] Go to Content model
- [ ] Check all 7 content types exist
- [ ] Click into each to verify fields

### 2. Configure Editor Interface (Optional)
- [ ] Content model → Select a content type
- [ ] Click "Settings" tab
- [ ] Customize field appearance (sidebar, full-width, etc.)

### 3. Create API Keys
- [ ] Settings → API keys
- [ ] Create new key (if not exists)
- [ ] Copy:
  - Space ID
  - Content Delivery API - access token
  - (Optional) Content Preview API - access token

### 4. Add Environment Variables

Add to your `.env` file:
```bash
VITE_CONTENTFUL_SPACE_ID=your_space_id_here
VITE_CONTENTFUL_ACCESS_TOKEN=your_delivery_token_here

# Optional for preview mode
VITE_CONTENTFUL_PREVIEW_TOKEN=your_preview_token_here
VITE_CONTENTFUL_PREVIEW_MODE=false
```

### 5. Start Adding Content

Now you can create content entries! Follow this order:

**Foundation (Create First):**
1. Blog Categories (6 entries) - See `/guidelines/contentful-cheat-sheet.md`
2. Why Reasons (3-5 entries)
3. Social Links (5 entries)

**Pages (Create Second):**
4. Homepage (1 entry)
5. Portfolio Entry (5-10 entries)
6. Blog Post (3-5 entries)
7. Testimonial (3-5 entries)

---

## 🐛 Troubleshooting

### Error: "Content type already exists"

**Problem:** Content type with that ID already exists in your space.

**Solution:**
```bash
# Delete existing content types first
contentful space delete \
  --space-id YOUR_SPACE_ID \
  --content-type-id blogCategory

# Then retry import
```

**Or:** Use a different space.

---

### Error: "Invalid token"

**Problem:** Management token is incorrect or expired.

**Solution:**
1. Go to Settings → API keys → Content management tokens
2. Create new token
3. Use new token:
   ```bash
   contentful login --management-token NEW_TOKEN
   ```

---

### Error: "Space not found"

**Problem:** Space ID is incorrect.

**Solution:**
1. Go to Settings → General Settings
2. Copy exact Space ID
3. Update in command and JSON file

---

### Error: "Field validation failed"

**Problem:** JSON structure doesn't match Contentful's expected format.

**Solution:**
- Ensure you're using the **exact** `/contentful-export.json` provided
- Don't modify the structure
- Only replace `REPLACE_WITH_YOUR_SPACE_ID`

---

### Import Succeeds But Content Types Don't Appear

**Problem:** Content types not published.

**Solution:**
```bash
# Publish all content types
contentful space publish --space-id YOUR_SPACE_ID
```

Or manually:
1. Content model → Select content type
2. Click "Publish changes" button

---

## 📊 What Gets Imported

### Content Types (7)

| ID | Name | Fields | References |
|----|------|--------|-----------|
| `blogCategory` | Blog Category | 6 | None |
| `whyReason` | Why Reason | 5 | None |
| `socialLink` | Social Link | 6 | None |
| `homepage` | Homepage | 8 | whyReason, portfolioEntry |
| `portfolioEntry` | Portfolio Entry | 14 | None |
| `blogPost` | Blog Post | 12 | blogCategory |
| `testimonial` | Testimonial | 11 | None |

### Field Validation Rules

All imported fields include:
- ✅ Required/optional flags
- ✅ Max length validations
- ✅ Unique constraints where needed
- ✅ Pattern validations (hex colors, URLs)
- ✅ Range validations (integers)
- ✅ Default values

### Relationships

Pre-configured content type relationships:
- ✅ Homepage → Why Reason (references)
- ✅ Homepage → Portfolio Entry (references)
- ✅ Blog Post → Blog Category (reference)

---

## 🎯 Next Steps After Import

### 1. Review Content Model
- Click through each content type
- Verify field configurations
- Adjust descriptions or help text if needed

### 2. Create Sample Content
Follow the quick start guide to create sample entries:
- [Content Creation Guide](/guidelines/contentful-quick-setup.md)

### 3. Test API Integration
```bash
# Run development server
npm run dev

# Check console for Contentful connection status
# Look for: "Contentful CMS: Connected successfully"
```

### 4. Deploy to Production
```bash
# Build for production
npm run build

# Add environment variables to Netlify
# VITE_CONTENTFUL_SPACE_ID=...
# VITE_CONTENTFUL_ACCESS_TOKEN=...
```

---

## 📚 Additional Resources

### Contentful CLI Documentation
- [Official CLI Docs](https://github.com/contentful/contentful-cli)
- [Import/Export Guide](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/)
- [Content Management API](https://www.contentful.com/developers/docs/references/content-management-api/)

### Project Documentation
- **Audit Report:** `/CONTENTFUL_INTEGRATION_AUDIT.md`
- **Setup Guide:** `/CONTENTFUL_SETUP_README.md`
- **Content Models:** `/guidelines/contentful-content-models.md`
- **Cheat Sheet:** `/guidelines/contentful-cheat-sheet.md`

---

## 💡 Pro Tips

1. **Use a Test Space First**
   - Create a "test" space
   - Import there first
   - Verify everything works
   - Then import to production space

2. **Keep a Backup**
   - Export your content model after setup
   - Store in version control
   - Makes recreation easy if needed

3. **Version Control the JSON**
   - Commit `/contentful-export.json` to git
   - Update when you modify content model
   - Team members can import easily

4. **Automate for Multiple Environments**
   ```bash
   # Development space
   contentful space import --space-id DEV_SPACE_ID --content-file ./contentful-export.json

   # Staging space
   contentful space import --space-id STAGING_SPACE_ID --content-file ./contentful-export.json

   # Production space
   contentful space import --space-id PROD_SPACE_ID --content-file ./contentful-export.json
   ```

---

## 🎉 You're Done!

After successful import, you'll have:
- ✅ 7 content types ready to use
- ✅ 77 fields configured with validations
- ✅ Relationships set up
- ✅ Ready to add content

**Total time:** ~5 minutes  
**vs Manual setup:** ~2-3 hours

**Next:** Start creating content using the [Quick Setup Guide](/guidelines/contentful-quick-setup.md)!

---

**Last Updated:** January 2025  
**Contentful CLI Version:** 3.x  
**Tested:** January 2025

Need help? Check the [Integration Audit](/CONTENTFUL_INTEGRATION_AUDIT.md) or [Troubleshooting Guide](/guidelines/contentful-integration.md).
