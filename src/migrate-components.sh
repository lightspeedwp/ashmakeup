#!/bin/bash
# 🚀 Batch 2: Move Components to /src/components/
# Generated: January 13, 2026

echo "📦 Batch 2: Moving components to /src/components/..."
echo ""

# Create directory structure
echo "Creating directory structure..."
mkdir -p src/components/admin
mkdir -p src/components/common
mkdir -p src/components/figma
mkdir -p src/components/pages/about
mkdir -p src/components/pages/blog
mkdir -p src/components/pages/contact
mkdir -p src/components/pages/home
mkdir -p src/components/pages/portfolio
mkdir -p src/components/sections
mkdir -p src/components/ui

# Move files
echo "Moving component files..."

# Admin components
if [ -d "components/admin" ]; then
  mv components/admin/* src/components/admin/ 2>/dev/null
  echo "  ✅ Admin components moved"
fi

# Common components
if [ -d "components/common" ]; then
  mv components/common/* src/components/common/ 2>/dev/null
  echo "  ✅ Common components moved"
fi

# Figma components (protected but can move)
if [ -d "components/figma" ]; then
  mv components/figma/* src/components/figma/ 2>/dev/null
  echo "  ✅ Figma components moved"
fi

# Page components
if [ -d "components/pages" ]; then
  # Move subdirectories
  if [ -d "components/pages/about" ]; then
    mv components/pages/about/* src/components/pages/about/ 2>/dev/null
  fi
  if [ -d "components/pages/blog" ]; then
    mv components/pages/blog/* src/components/pages/blog/ 2>/dev/null
  fi
  if [ -d "components/pages/contact" ]; then
    mv components/pages/contact/* src/components/pages/contact/ 2>/dev/null
  fi
  if [ -d "components/pages/home" ]; then
    mv components/pages/home/* src/components/pages/home/ 2>/dev/null
  fi
  if [ -d "components/pages/portfolio" ]; then
    mv components/pages/portfolio/* src/components/pages/portfolio/ 2>/dev/null
  fi
  echo "  ✅ Page components moved"
fi

# Section components
if [ -d "components/sections" ]; then
  mv components/sections/* src/components/sections/ 2>/dev/null
  echo "  ✅ Section components moved"
fi

# UI components
if [ -d "components/ui" ]; then
  mv components/ui/* src/components/ui/ 2>/dev/null
  echo "  ✅ UI components moved"
fi

echo ""
echo "✅ Batch 2 Complete: Components moved to /src/components/"
echo ""
echo "📊 Summary:"
echo "  - Admin components: $(ls src/components/admin 2>/dev/null | wc -l) files"
echo "  - Common components: $(ls src/components/common 2>/dev/null | wc -l) files"
echo "  - Figma components: $(ls src/components/figma 2>/dev/null | wc -l) files"
echo "  - Page components: $(find src/components/pages -type f 2>/dev/null | wc -l) files"
echo "  - Section components: $(ls src/components/sections 2>/dev/null | wc -l) files"
echo "  - UI components: $(ls src/components/ui 2>/dev/null | wc -l) files"
echo ""
echo "🔜 Next: Run ./migrate-data.sh"
