# Pagination Guidelines

Page navigation component with smart ellipsis and full accessibility.

**File:** `/components/ui/BlogPagination.tsx`  
**WordPress Equivalent:** `core/query-pagination` block  
**Used In:** BlogPage, PortfolioPage (if paginated)

---

## Purpose

The Pagination block provides page navigation for content with:
- Smart ellipsis pattern (1 ... 4 5 6 ... 10)
- Full keyboard navigation support
- Screen reader compatibility
- Brand-consistent styling
- Touch-friendly design for mobile
- Disabled state handling

---

## Pagination Structure

```tsx
<div role="navigation" aria-label="Blog posts pagination">
  <Pagination>
    <PaginationContent>
      {/* Previous Button */}
      <PaginationItem>
        <PaginationPrevious 
          onClick={() => goToPreviousPage()}
          disabled={isFirstPage}
        />
      </PaginationItem>
      
      {/* Page Numbers */}
      {pageNumbers.map(pageNum => (
        <PaginationItem>
          {pageNum === 'ellipsis' ? (
            <PaginationEllipsis />
          ) : (
            <PaginationLink
              onClick={() => goToPage(pageNum)}
              isActive={pageNum === currentPage}
            >
              {pageNum}
            </PaginationLink>
          )}
        </PaginationItem>
      ))}
      
      {/* Next Button */}
      <PaginationItem>
        <PaginationNext 
          onClick={() => goToNextPage()}
          disabled={isLastPage}
        />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
  
  {/* Screen Reader Status */}
  <div className="sr-only" aria-live="polite">
    Page {currentPage} of {totalPages}
  </div>
</div>
```

---

## Container Styles

### Navigation Wrapper
```tsx
<div 
  className="
    flex justify-center                      // Center pagination
    mt-fluid-xl                              // Top margin
    {className}                              // Optional custom classes
  "
  role="navigation"
  aria-label="Blog posts pagination"
>
```

### Pagination Content
```tsx
<PaginationContent className="
  gap-fluid-xs                               // clamp(0.25rem, 0.15rem + 0.5vw, 0.5rem)
">
```

---

## Visual Elements

### 1. Previous Button

```tsx
<PaginationPrevious 
  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
  disabled={currentPage <= 1}
  className="
    !px-3                                    // Override default padding
    bg-white/80 
    backdrop-blur-sm 
    border border-white/50 
    shadow-lg hover:shadow-xl 
    transition-all duration-300 
    rounded-lg 
    hover:bg-gradient-pink-purple-blue       // Gradient on hover
    hover:text-white 
    disabled:opacity-50 
    disabled:cursor-not-allowed 
    disabled:hover:bg-white/80               // No hover effect when disabled
    disabled:hover:text-gray-700 
    focus:outline-none 
    focus:ring-4 focus:ring-pink-200 
    focus:ring-opacity-50
  "
  aria-label={
    currentPage <= 1 
      ? "Previous page (disabled)" 
      : `Go to page ${currentPage - 1}`
  }
/>
```

**Features:**
- Disabled on first page
- Gradient background on hover
- Descriptive ARIA label
- Focus ring for keyboard navigation

---

### 2. Page Number Buttons

#### Active Page (Current)
```tsx
<PaginationLink
  onClick={() => handlePageChange(pageNum)}
  isActive={true}
  className="
    !px-3 !w-auto                            // Override defaults
    py-2 
    font-body font-medium 
    text-button-fluid                        // clamp(0.875rem, 1.2vw, 1.125rem)
    transition-all duration-300 
    rounded-lg 
    shadow-lg hover:shadow-xl 
    transform hover:scale-105 
    focus:outline-none 
    focus:ring-4 focus:ring-pink-200 
    focus:ring-opacity-50 
    bg-gradient-pink-purple-blue             // Gradient background
    text-white 
    shadow-xl 
    scale-105                                // Slightly larger
  "
  aria-label={`Current page, page ${pageNum}`}
  aria-current="page"
>
  {pageNum}
</PaginationLink>
```

#### Inactive Page
```tsx
<PaginationLink
  onClick={() => handlePageChange(pageNum)}
  isActive={false}
  className="
    !px-3 !w-auto 
    py-2 
    font-body font-medium 
    text-button-fluid 
    transition-all duration-300 
    rounded-lg 
    shadow-lg hover:shadow-xl 
    transform hover:scale-105 
    focus:outline-none 
    focus:ring-4 focus:ring-pink-200 
    focus:ring-opacity-50 
    bg-white/80 
    backdrop-blur-sm 
    border border-white/50 
    text-gray-700 
    hover:bg-gradient-pink-purple-blue       // Gradient on hover
    hover:text-white
  "
  aria-label={`Go to page ${pageNum}`}
>
  {pageNum}
</PaginationLink>
```

**Key Differences:**
- Active: Gradient background, white text, scaled up
- Inactive: White background, gray text, gradient on hover

---

### 3. Ellipsis (More Pages Indicator)

```tsx
<PaginationEllipsis 
  className="
    text-gray-500 
    font-body 
    font-normal
  "
  aria-label="More pages"
/>
```

**Displays:** `...` (three dots)  
**Purpose:** Indicate skipped page numbers

---

### 4. Next Button

```tsx
<PaginationNext 
  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
  disabled={currentPage >= totalPages}
  className="
    !px-3 
    bg-white/80 
    backdrop-blur-sm 
    border border-white/50 
    shadow-lg hover:shadow-xl 
    transition-all duration-300 
    rounded-lg 
    hover:bg-gradient-pink-purple-blue 
    hover:text-white 
    disabled:opacity-50 
    disabled:cursor-not-allowed 
    disabled:hover:bg-white/80 
    disabled:hover:text-gray-700 
    focus:outline-none 
    focus:ring-4 focus:ring-pink-200 
    focus:ring-opacity-50
  "
  aria-label={
    currentPage >= totalPages 
      ? "Next page (disabled)" 
      : `Go to page ${currentPage + 1}`
  }
/>
```

**Features:**
- Disabled on last page
- Same styling as Previous button
- Descriptive ARIA label

---

### 5. Screen Reader Status (Hidden)

```tsx
<div 
  className="sr-only"                        // Visually hidden, screen reader only
  aria-live="polite"                         // Announce changes
  aria-atomic="true"                         // Read entire content
  id="pagination-status"
>
  Page {currentPage} of {totalPages}. Showing {limit} posts per page.
</div>
```

**Purpose:** Announce pagination state to screen readers

---

## Smart Ellipsis Logic

### Generate Page Numbers Function

```tsx
const generatePageNumbers = (): (number | 'ellipsis')[] => {
  const pages: (number | 'ellipsis')[] = [];
  const delta = 1; // Number of pages to show around current page
  
  // Always show first page
  pages.push(1);
  
  // Add ellipsis if there's a gap
  if (currentPage - delta > 2) {
    pages.push('ellipsis');
  }
  
  // Add pages around current page
  const start = Math.max(2, currentPage - delta);
  const end = Math.min(totalPages - 1, currentPage + delta);
  
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  
  // Add ellipsis if there's a gap
  if (currentPage + delta < totalPages - 1) {
    pages.push('ellipsis');
  }
  
  // Always show last page
  if (totalPages > 1) {
    pages.push(totalPages);
  }
  
  return pages;
};
```

### Examples

**Current page 1 of 10:**
```
[1] 2 3 ... 10
```

**Current page 5 of 10:**
```
1 ... 4 [5] 6 ... 10
```

**Current page 10 of 10:**
```
1 ... 8 9 [10]
```

**Current page 2 of 5:**
```
1 [2] 3 4 5
```

**Current page 1 of 3:**
```
[1] 2 3
```

---

## Interactive Features

### Page Change Handler

```tsx
const handlePageChange = (targetPage: number) => {
  // Validate page number
  if (targetPage >= 1 && targetPage <= totalPages && targetPage !== currentPage) {
    onPageChange(targetPage);
    
    // Announce to screen readers
    const announcement = `Navigated to page ${targetPage} of ${totalPages}`;
    const announcer = document.getElementById('announcements');
    if (announcer) {
      announcer.textContent = announcement;
    }
  }
};
```

**Features:**
- Validates page bounds
- Prevents unnecessary updates
- Announces to screen readers
- Calls parent's onPageChange callback

### Scroll to Top on Page Change

```tsx
// In parent component
const handlePageChange = (page: number) => {
  setCurrentPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });  // Smooth scroll to top
};
```

---

## Accessibility

### ARIA Labels

```tsx
// Navigation wrapper
<div 
  role="navigation"
  aria-label="Blog posts pagination"
>

// Previous button
<PaginationPrevious 
  aria-label={currentPage <= 1 
    ? "Previous page (disabled)" 
    : `Go to page ${currentPage - 1}`
  }
/>

// Page number button
<PaginationLink
  aria-label={pageNum === currentPage 
    ? `Current page, page ${pageNum}` 
    : `Go to page ${pageNum}`
  }
  aria-current={pageNum === currentPage ? 'page' : undefined}
/>

// Ellipsis
<PaginationEllipsis aria-label="More pages" />

// Next button
<PaginationNext 
  aria-label={currentPage >= totalPages 
    ? "Next page (disabled)" 
    : `Go to page ${currentPage + 1}`
  }
/>
```

### Keyboard Navigation

- **Tab** - Move between pagination buttons
- **Enter/Space** - Activate button
- **Focus indicators** - Pink ring on focus

### Screen Reader Support

```tsx
// Status announcement
<div 
  className="sr-only" 
  aria-live="polite"                         // Polite announcements
  aria-atomic="true"                         // Read entire message
>
  Page {currentPage} of {totalPages}. Showing {limit} posts per page.
</div>
```

### Disabled State

```tsx
// Previous disabled on first page
disabled={currentPage <= 1}

// Next disabled on last page
disabled={currentPage >= totalPages}

// Disabled styles
disabled:opacity-50 
disabled:cursor-not-allowed 
disabled:hover:bg-white/80                   // No hover effect
```

---

## Responsive Breakpoints

### Mobile (< 640px)
- Gap: 0.25rem (gap-fluid-xs minimum)
- Button padding: 12px horizontal
- Font size: 14px (text-button-fluid minimum)
- Touch targets: Minimum 44px

### Tablet (640px - 1024px)
- Gap: 0.375rem
- Button padding: 12px horizontal
- Font size: 16px
- Comfortable touch targets

### Desktop (1024px+)
- Gap: 0.5rem (gap-fluid-xs maximum)
- Button padding: 12px horizontal
- Font size: 18px (text-button-fluid maximum)
- Hover effects more prominent

---

## Usage Examples

### Basic Usage
```tsx
import { BlogPagination } from './components/ui/BlogPagination';

function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useBlogPosts({ page: currentPage, limit: 6 });
  
  return (
    <>
      <BlogGrid posts={data.posts} />
      
      <BlogPagination 
        pagination={data.pagination}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
```

### With Scroll to Top
```tsx
const handlePageChange = (page: number) => {
  setCurrentPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

<BlogPagination 
  pagination={pagination}
  onPageChange={handlePageChange}
/>
```

### With Custom Styling
```tsx
<BlogPagination 
  pagination={pagination}
  onPageChange={handlePageChange}
  className="mt-fluid-xl border-t border-gray-200 pt-fluid-lg"
/>
```

### Conditional Rendering
```tsx
{pagination.pages > 1 && (
  <BlogPagination 
    pagination={pagination}
    onPageChange={handlePageChange}
  />
)}
```

---

## Data Structure

### Pagination Data Interface
```tsx
interface BlogPaginationData {
  page: number;       // Current page (1-indexed)
  limit: number;      // Items per page
  total: number;      // Total items
  pages: number;      // Total pages
}
```

### Example Data
```tsx
{
  page: 2,
  limit: 6,
  total: 24,
  pages: 4
}
```

---

## Best Practices

### 1. Always Validate Page Numbers
```tsx
// ✅ Validate bounds
if (targetPage >= 1 && targetPage <= totalPages) {
  onPageChange(targetPage);
}

// ❌ Don't skip validation
onPageChange(targetPage);  // Could navigate out of bounds
```

### 2. Scroll to Top on Page Change
```tsx
// ✅ Smooth scroll for better UX
window.scrollTo({ top: 0, behavior: 'smooth' });

// ❌ Jarring instant scroll
window.scrollTo({ top: 0 });
```

### 3. Conditional Rendering
```tsx
// ✅ Only show if multiple pages
{totalPages > 1 && <BlogPagination ... />}

// ✅ Don't render if only one page (handled in component)
if (totalPages <= 1) return <></>;
```

### 4. Announce Changes to Screen Readers
```tsx
// ✅ Update aria-live region
<div aria-live="polite">
  Page {currentPage} of {totalPages}
</div>
```

---

## WordPress Comparison

### WordPress `core/query-pagination` Block
```html
<!-- wp:query-pagination -->
<div class="wp-block-query-pagination">
  <!-- wp:query-pagination-previous /-->
  <!-- wp:query-pagination-numbers /-->
  <!-- wp:query-pagination-next /-->
</div>
<!-- /wp:query-pagination -->
```

### Ash Shaw BlogPagination
```tsx
<BlogPagination 
  pagination={{ page: 2, limit: 6, total: 24, pages: 4 }}
  onPageChange={handlePageChange}
/>
```

**Key Differences:**
- React component vs. PHP template
- Client-side vs. server-side pagination
- Smart ellipsis logic built-in
- Brand-specific styling

---

## Related Documentation

- **[overview-blocks.md](../overview-blocks.md)** - Block patterns overview
- **[templates/BlogPage.md](../templates/BlogPage.md)** - Blog page template
- **[patterns/CardGridWithFilters.md](../patterns/CardGridWithFilters.md)** - Grid with pagination
- **[Guidelines.md](../Guidelines.md)** - Main guidelines

---

**Last Updated:** January 2025  
**Version:** 3.2.0
