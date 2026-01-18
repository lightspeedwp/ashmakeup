#!/bin/bash
# 🚀 Batch 4 & 5: Move Utils and Hooks to /src/
# Generated: January 13, 2026

echo "📦 Batch 4 & 5: Moving utils and hooks to /src/..."
echo ""

# Create directory structure for utils
echo "Creating utils directory structure..."
mkdir -p src/utils/__tests__
mkdir -p src/utils/supabase

# Create directory structure for hooks
echo "Creating hooks directory structure..."
mkdir -p src/hooks

# Move utils files
echo "Moving utility files..."
if [ -d "utils" ]; then
  # Move test files
  if [ -d "utils/__tests__" ]; then
    mv utils/__tests__/* src/utils/__tests__/ 2>/dev/null
    echo "  ✅ Test files moved"
  fi
  
  # Move supabase utils
  if [ -d "utils/supabase" ]; then
    mv utils/supabase/* src/utils/supabase/ 2>/dev/null
    echo "  ✅ Supabase utils moved"
  fi
  
  # Move remaining util files
  find utils -maxdepth 1 -type f -exec mv {} src/utils/ \; 2>/dev/null
  echo "  ✅ Utility files moved"
fi

# Move hooks files
echo "Moving hooks..."
if [ -d "hooks" ]; then
  mv hooks/* src/hooks/ 2>/dev/null
  echo "  ✅ Hooks moved"
fi

echo ""
echo "✅ Batch 4 & 5 Complete: Utils and hooks moved to /src/"
echo ""
echo "📊 Summary:"
echo "  - Utility files: $(find src/utils -maxdepth 1 -type f 2>/dev/null | wc -l) files"
echo "  - Test files: $(ls src/utils/__tests__ 2>/dev/null | wc -l) files"
echo "  - Supabase utils: $(ls src/utils/supabase 2>/dev/null | wc -l) files"
echo "  - Hooks: $(ls src/hooks 2>/dev/null | wc -l) files"
echo ""
echo "🔜 Next: Run ./verify-migration.sh"
