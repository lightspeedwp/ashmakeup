/**
 * @fileoverview Simple validation test runner
 * 
 * Run this script to test the Contentful validation system with example content.
 * Can be executed in browser console or Node.js environment.
 * 
 * Usage in browser console:
 * 1. Copy this entire file
 * 2. Paste into browser console
 * 3. View test results
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

// Import validation functions (adjust path as needed in actual environment)
import { validatePortfolioEntry, validateBlogPost } from '../utils/contentfulValidation';

console.log('🧪 Starting Contentful Validation Tests...\n');

// ============================================================================
// TEST 1: Perfect Portfolio Entry
// ============================================================================

console.group('✅ TEST 1: Perfect Portfolio Entry');

const perfectEntry = {
  sys: {
    id: 'perfect-entry',
    contentType: { sys: { id: 'portfolioEntry' } },
  },
  fields: {
    title: 'Festival Makeup Masterpiece',
    description: 'Stunning festival makeup with vibrant UV colors and intricate glitter work',
    category: 'Festival Makeup',
    images: [
      {
        sys: { id: 'img1' },
        fields: {
          title: 'Main festival look',
          description: 'Full face festival makeup with UV reactive paints',
          file: {
            url: '//images.ctfassets.net/example/image1.jpg',
            contentType: 'image/jpeg',
            details: {
              size: 1500000, // 1.5MB
              image: { width: 1920, height: 1280 },
            },
          },
        },
      },
      {
        sys: { id: 'img2' },
        fields: {
          title: 'Close-up detail',
          file: {
            url: '//images.ctfassets.net/example/image2.jpg',
            contentType: 'image/jpeg',
            details: {
              size: 1200000,
              image: { width: 2400, height: 1600 },
            },
          },
        },
      },
    ],
    featuredImage: {
      sys: { id: 'featured' },
      fields: {
        title: 'Featured image',
        file: {
          url: '//images.ctfassets.net/example/featured.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 1800000,
            image: { width: 1920, height: 1280 },
          },
        },
      },
    },
    tags: ['festival', 'uv-makeup', 'colorful', 'creative', 'glitter'],
    featured: true,
    displayOrder: 1,
    seo: {
      metaTitle: 'Festival Makeup Masterpiece | Ash Shaw',
      metaDescription: 'Explore this stunning festival makeup creation featuring vibrant UV colors, intricate glitter work, and bold creative design by professional makeup artist Ash Shaw.',
      keywords: ['festival makeup', 'UV makeup', 'creative makeup'],
    },
  },
};

const result1 = validatePortfolioEntry(perfectEntry as any);
console.log('✅ Validation Result:', result1.isValid ? 'PASSED' : 'FAILED');
console.log('Errors:', result1.errors.length);
console.log('Warnings:', result1.warnings.length);
if (result1.warnings.length > 0) {
  console.log('Warnings:', result1.warnings);
}

console.groupEnd();

// ============================================================================
// TEST 2: Portfolio with Common Issues
// ============================================================================

console.group('\n⚠️ TEST 2: Portfolio with Common Issues');

const problematicEntry = {
  sys: {
    id: 'problematic-entry',
    contentType: { sys: { id: 'portfolioEntry' } },
  },
  fields: {
    title: 'Quick Makeup Test',
    description: 'Test entry',
    category: 'Custom Category Not In List', // Invalid category
    images: [
      {
        sys: { id: 'low-res' },
        fields: {
          // Missing title/description (accessibility issue)
          file: {
            url: '//images.ctfassets.net/example/lowres.jpg',
            contentType: 'image/jpeg',
            details: {
              size: 400000,
              image: { width: 640, height: 480 }, // Low resolution
            },
          },
        },
      },
    ],
    // No featured image
    tags: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], // Too many tags
    displayOrder: 9999, // Very high number
    seo: {
      metaTitle: 'This is an extremely long meta title that definitely exceeds the recommended 60 character limit',
      metaDescription: 'Too short', // Way too short
    },
  },
};

const result2 = validatePortfolioEntry(problematicEntry as any);
console.log('Validation Result:', result2.isValid ? 'PASSED' : 'FAILED');
console.log('Errors:', result2.errors.length);
console.log('Warnings:', result2.warnings.length);

console.log('\n📋 Issues Found:');
result2.warnings.forEach((warning, i) => {
  console.log(`${i + 1}. ${warning}`);
});

console.groupEnd();

// ============================================================================
// TEST 3: Missing Required Fields
// ============================================================================

console.group('\n❌ TEST 3: Missing Required Fields');

const incompleteEntry = {
  sys: {
    id: 'incomplete-entry',
    contentType: { sys: { id: 'portfolioEntry' } },
  },
  fields: {
    // Missing title
    description: 'Has description but missing other required fields',
    // Missing category
    images: [],
  },
};

const result3 = validatePortfolioEntry(incompleteEntry as any);
console.log('Validation Result:', result3.isValid ? 'PASSED' : 'FAILED');
console.log('Errors:', result3.errors.length);

console.log('\n❌ Critical Errors:');
result3.errors.forEach((error, i) => {
  console.log(`${i + 1}. ${error}`);
});

console.groupEnd();

// ============================================================================
// TEST 4: Image Quality Issues
// ============================================================================

console.group('\n📸 TEST 4: Image Quality Issues');

const imageIssuesEntry = {
  sys: {
    id: 'image-issues',
    contentType: { sys: { id: 'portfolioEntry' } },
  },
  fields: {
    title: 'Image Quality Test',
    description: 'Testing various image quality scenarios',
    category: 'Festival Makeup',
    images: [
      {
        sys: { id: 'huge-img' },
        fields: {
          title: 'Massive unoptimized image',
          file: {
            url: '//images.ctfassets.net/example/huge.jpg',
            contentType: 'image/jpeg',
            details: {
              size: 8000000, // 8MB - too large!
              image: { width: 6000, height: 4000 }, // Very high res
            },
          },
        },
      },
      {
        sys: { id: 'tiny-img' },
        fields: {
          title: 'Tiny low-res image',
          file: {
            url: '//images.ctfassets.net/example/tiny.jpg',
            contentType: 'image/jpeg',
            details: {
              size: 50000,
              image: { width: 400, height: 300 }, // Too small
            },
          },
        },
      },
    ],
    featuredImage: {
      sys: { id: 'portrait-featured' },
      fields: {
        title: 'Portrait orientation featured',
        file: {
          url: '//images.ctfassets.net/example/portrait.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 1000000,
            image: { width: 800, height: 1200 }, // Portrait (not ideal for cards)
          },
        },
      },
    },
  },
};

const result4 = validatePortfolioEntry(imageIssuesEntry as any);
console.log('Validation Result:', result4.isValid ? 'PASSED' : 'FAILED');
console.log('Image-related warnings:', result4.warnings.filter(w => w.includes('image') || w.includes('resolution') || w.includes('large')).length);

console.log('\n📸 Image Quality Warnings:');
result4.warnings
  .filter(w => w.includes('image') || w.includes('resolution') || w.includes('large') || w.includes('portrait'))
  .forEach((warning, i) => {
    console.log(`${i + 1}. ${warning}`);
  });

console.groupEnd();

// ============================================================================
// TEST 5: Blog Post Validation
// ============================================================================

console.group('\n📝 TEST 5: Blog Post Validation');

const blogPost = {
  sys: {
    id: 'test-blog',
    contentType: { sys: { id: 'blogPost' } },
  },
  fields: {
    title: 'Festival Makeup Tutorial 2024',
    slug: 'festival-makeup-tutorial-2024',
    excerpt: 'Learn how to create stunning festival makeup looks with this comprehensive guide',
    content: {
      nodeType: 'document',
      content: [
        {
          nodeType: 'heading-1',
          content: [{ nodeType: 'text', value: 'Introduction' }],
        },
        {
          nodeType: 'paragraph',
          content: [{ nodeType: 'text', value: 'Festival season is here!' }],
        },
      ],
    },
    category: 'tutorials',
    tags: ['festival', 'makeup', 'tutorial'],
    published: true,
  },
};

const result5 = validateBlogPost(blogPost as any);
console.log('✅ Validation Result:', result5.isValid ? 'PASSED' : 'FAILED');
console.log('Errors:', result5.errors.length);
console.log('Warnings:', result5.warnings.length);

console.groupEnd();

// ============================================================================
// TEST SUMMARY
// ============================================================================

console.group('\n📊 Test Summary');

const tests = [
  { name: 'Perfect Entry', result: result1, expected: 'valid' },
  { name: 'Common Issues', result: result2, expected: 'valid-with-warnings' },
  { name: 'Missing Fields', result: result3, expected: 'invalid' },
  { name: 'Image Issues', result: result4, expected: 'valid-with-warnings' },
  { name: 'Blog Post', result: result5, expected: 'valid' },
];

console.log('\n📋 Test Results:');
tests.forEach(test => {
  const icon = test.result.isValid ? '✅' : '❌';
  const status = !test.result.isValid ? 'INVALID' : test.result.warnings.length > 0 ? 'VALID (with warnings)' : 'VALID';
  console.log(`${icon} ${test.name}: ${status}`);
  console.log(`   Errors: ${test.result.errors.length}, Warnings: ${test.result.warnings.length}`);
});

const validCount = tests.filter(t => t.result.isValid).length;
const totalCount = tests.length;

console.log(`\n🎯 Overall: ${validCount}/${totalCount} tests passed validation`);
console.log(`📈 Success Rate: ${((validCount / totalCount) * 100).toFixed(1)}%`);

console.groupEnd();

// ============================================================================
// VALIDATION FEATURE DEMONSTRATION
// ============================================================================

console.group('\n🌟 Validation Features Demonstrated');

console.log('\n✅ Required Field Validation:');
console.log('  - Title, Description, Category');
console.log('  - Clear error messages for missing fields');

console.log('\n⚠️ Quality Checks:');
console.log('  - Image resolution warnings (< 800x600 or > 4000x4000)');
console.log('  - File size warnings (> 5MB)');
console.log('  - Accessibility checks (missing alt text)');

console.log('\n🏷️ Category Validation:');
console.log('  - Standard categories: Festival Makeup, UV Makeup, Swiss Festivals, etc.');
console.log('  - Warnings for non-standard categories');

console.log('\n📸 Image Validation:');
console.log('  - Image count recommendations (1 image = warning, > 20 = performance warning)');
console.log('  - File type verification');
console.log('  - Dimension and aspect ratio checking');
console.log('  - Featured image requirements');

console.log('\n🔍 SEO Validation:');
console.log('  - Meta title length (< 60 chars)');
console.log('  - Meta description length (150-160 chars)');
console.log('  - Keyword count (5-10 recommended)');

console.log('\n🏷️ Tag Validation:');
console.log('  - Tag count warnings (0 = no discovery, > 10 = too many)');
console.log('  - Empty tag detection');
console.log('  - Tag length checking');

console.groupEnd();

console.log('\n✨ Validation testing complete!\n');

// Export results for analysis
export const validationTestResults = {
  tests,
  summary: {
    totalTests: totalCount,
    validTests: validCount,
    successRate: (validCount / totalCount) * 100,
  },
};
