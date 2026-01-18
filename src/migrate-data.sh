#!/bin/bash
# 🚀 Batch 3: Move Data to /src/data/
# Generated: January 13, 2026

echo "📦 Batch 3: Moving data to /src/data/..."
echo ""

# Create directory structure
echo "Creating directory structure..."
mkdir -p src/data/mock/blog
mkdir -p src/data/mock/images
mkdir -p src/data/mock/pages
mkdir -p src/data/mock/portfolio
mkdir -p src/data/mock/testimonials
mkdir -p src/data/mock/ui
mkdir -p src/data/types

# Move files
echo "Moving data files..."

# Mock data
if [ -d "data/mock/blog" ]; then
  mv data/mock/blog/* src/data/mock/blog/ 2>/dev/null
  echo "  ✅ Blog mock data moved"
fi

if [ -d "data/mock/images" ]; then
  mv data/mock/images/* src/data/mock/images/ 2>/dev/null
  echo "  ✅ Images mock data moved"
fi

if [ -d "data/mock/pages" ]; then
  mv data/mock/pages/* src/data/mock/pages/ 2>/dev/null
  echo "  ✅ Pages mock data moved"
fi

if [ -d "data/mock/portfolio" ]; then
  mv data/mock/portfolio/* src/data/mock/portfolio/ 2>/dev/null
  echo "  ✅ Portfolio mock data moved"
fi

if [ -d "data/mock/testimonials" ]; then
  mv data/mock/testimonials/* src/data/mock/testimonials/ 2>/dev/null
  echo "  ✅ Testimonials mock data moved"
fi

if [ -d "data/mock/ui" ]; then
  mv data/mock/ui/* src/data/mock/ui/ 2>/dev/null
  echo "  ✅ UI mock data moved"
fi

# Move index file if exists
if [ -f "data/mock/index.ts" ]; then
  mv data/mock/index.ts src/data/mock/ 2>/dev/null
  echo "  ✅ Mock data index moved"
fi

# Type definitions
if [ -d "data/types" ]; then
  mv data/types/* src/data/types/ 2>/dev/null
  echo "  ✅ Type definitions moved"
fi

# README if exists
if [ -f "data/README.md" ]; then
  mv data/README.md src/data/ 2>/dev/null
  echo "  ✅ README moved"
fi

echo ""
echo "✅ Batch 3 Complete: Data moved to /src/data/"
echo ""
echo "📊 Summary:"
echo "  - Mock blog data: $(ls src/data/mock/blog 2>/dev/null | wc -l) files"
echo "  - Mock images data: $(ls src/data/mock/images 2>/dev/null | wc -l) files"
echo "  - Mock pages data: $(ls src/data/mock/pages 2>/dev/null | wc -l) files"
echo "  - Mock portfolio data: $(ls src/data/mock/portfolio 2>/dev/null | wc -l) files"
echo "  - Type definitions: $(ls src/data/types 2>/dev/null | wc -l) files"
echo ""
echo "🔜 Next: Run ./migrate-utils-hooks.sh"
