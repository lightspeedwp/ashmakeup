#!/bin/bash
# 🔍 Verify Migration Completed Successfully
# Generated: January 13, 2026

echo "🔍 Verifying /src migration..."
echo ""

# Initialize counters
CHECKS_PASSED=0
CHECKS_FAILED=0

# Check directories exist
echo "📁 Checking directories..."

if [ -d "src/components" ]; then
  echo "  ✅ /src/components/ exists"
  CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
  echo "  ❌ /src/components/ missing"
  CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

if [ -d "src/data" ]; then
  echo "  ✅ /src/data/ exists"
  CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
  echo "  ❌ /src/data/ missing"
  CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

if [ -d "src/utils" ]; then
  echo "  ✅ /src/utils/ exists"
  CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
  echo "  ❌ /src/utils/ missing"
  CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

if [ -d "src/hooks" ]; then
  echo "  ✅ /src/hooks/ exists"
  CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
  echo "  ❌ /src/hooks/ missing"
  CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

if [ -d "src/styles" ]; then
  echo "  ✅ /src/styles/ exists"
  CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
  echo "  ❌ /src/styles/ missing"
  CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

echo ""
echo "📄 Checking key files..."

if [ -f "src/App.tsx" ]; then
  echo "  ✅ /src/App.tsx exists"
  CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
  echo "  ❌ /src/App.tsx missing"
  CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

if [ -f "src/styles/globals.css" ]; then
  echo "  ✅ /src/styles/globals.css exists"
  CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
  echo "  ❌ /src/styles/globals.css missing"
  CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

if [ -f "src/styles/section-card-themes.css" ]; then
  echo "  ✅ /src/styles/section-card-themes.css exists"
  CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
  echo "  ❌ /src/styles/section-card-themes.css missing"
  CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

echo ""
echo "🗑️  Checking old directories..."

if [ ! -d "components" ] || [ -z "$(ls -A components 2>/dev/null)" ]; then
  echo "  ✅ /components/ is empty or removed"
  CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
  echo "  ⚠️  /components/ still has files (safe to delete manually)"
fi

if [ ! -d "data" ] || [ -z "$(ls -A data 2>/dev/null)" ]; then
  echo "  ✅ /data/ is empty or removed"
  CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
  echo "  ⚠️  /data/ still has files (safe to delete manually)"
fi

if [ ! -d "utils" ] || [ -z "$(ls -A utils 2>/dev/null)" ]; then
  echo "  ✅ /utils/ is empty or removed"
  CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
  echo "  ⚠️  /utils/ still has files (safe to delete manually)"
fi

if [ ! -d "hooks" ] || [ -z "$(ls -A hooks 2>/dev/null)" ]; then
  echo "  ✅ /hooks/ is empty or removed"
  CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
  echo "  ⚠️  /hooks/ still has files (safe to delete manually)"
fi

echo ""
echo "📊 File count summary:"
echo "  - Components: $(find src/components -type f 2>/dev/null | wc -l) files"
echo "  - Data files: $(find src/data -type f 2>/dev/null | wc -l) files"
echo "  - Utilities: $(find src/utils -type f 2>/dev/null | wc -l) files"
echo "  - Hooks: $(find src/hooks -type f 2>/dev/null | wc -l) files"
echo "  - Styles: $(find src/styles -type f 2>/dev/null | wc -l) files"

echo ""
echo "🧪 Testing build..."
npm run build > /dev/null 2>&1

if [ $? -eq 0 ]; then
  echo "  ✅ Build successful"
  CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
  echo "  ❌ Build failed (run 'npm run build' for details)"
  CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

echo ""
echo "═══════════════════════════════════════"
echo "📊 VERIFICATION SUMMARY"
echo "═══════════════════════════════════════"
echo "  ✅ Checks passed: $CHECKS_PASSED"
echo "  ❌ Checks failed: $CHECKS_FAILED"
echo "═══════════════════════════════════════"

if [ $CHECKS_FAILED -eq 0 ]; then
  echo ""
  echo "🎉 MIGRATION SUCCESSFUL!"
  echo ""
  echo "✅ All files migrated to /src/"
  echo "✅ Build passes"
  echo ""
  echo "🔜 Next steps:"
  echo "  1. Test dev server: npm run dev"
  echo "  2. Test in browser: http://localhost:5173"
  echo "  3. Clean up old directories (optional):"
  echo "     rm -rf components data utils hooks styles"
  echo ""
else
  echo ""
  echo "⚠️  MIGRATION INCOMPLETE"
  echo ""
  echo "Please review the failed checks above and:"
  echo "  1. Ensure all migration scripts completed"
  echo "  2. Check for any error messages"
  echo "  3. Run 'npm run build' for detailed errors"
  echo ""
fi
