# CardGridWithFilters Pattern Guidelines

Filterable content grid pattern with search and category filters.

**Used In:** BlogPage, PortfolioMainPage  
**WordPress Equivalent:** Query Loop with filters

---

## Purpose

The CardGridWithFilters is a **content browsing pattern** that combines:
- Category filter buttons
- Search input field
- Responsive card grid
- Pagination controls
- Empty state handling
- Loading states

---

## Pattern Structure

```tsx
<section className="py-section px-fluid-md">
  <div className="max-w-7xl mx-auto">
    {/* Filter Bar */}
    <div className="flex flex-col md:flex-row gap-4 mb-fluid-xl">
      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />
      
      {/* Search Bar */}
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search posts..."
      />
    </div>
    
    {/* Results Count */}
    <div className="mb-fluid-md">
      <p className="text-gray-600">
        Showing {filteredItems.length} of {totalItems} {itemType}
      </p>
    </div>
    
    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fluid-lg mb-fluid-xl">
      {filteredItems.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </div>
    
    {/* Empty State */}
    {filteredItems.length === 0 && (
      <div className="text-center py-12">
        <p className="text-gray-600">No results found</p>
      </div>
    )}
    
    {/* Pagination */}
    {totalPages > 1 && (
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    )}
  </div>
</section>
```

---

## Component Parts

### 1. Filter Bar

```tsx
<div className="
  flex flex-col md:flex-row
  gap-4
  mb-fluid-xl
">
  <CategoryFilter {...} />
  <SearchBar {...} />
</div>
```

### 2. Category Filter

```tsx
<div className="flex flex-wrap gap-2">
  <button
    onClick={() => setCategory('all')}
    className={`
      px-4 py-2 rounded-lg font-medium transition-all
      ${category === 'all'
        ? 'bg-gradient-pink-purple-blue text-white'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }
    `}
  >
    All
  </button>
  {categories.map(cat => (
    <button key={cat} ...>
      {cat}
    </button>
  ))}
</div>
```

### 3. Search Bar

```tsx
<div className="relative flex-1">
  <input
    type="search"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search..."
    className="
      w-full px-4 py-2 pl-10
      border border-gray-300 rounded-lg
      focus:ring-2 focus:ring-pink-500
    "
  />
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
</div>
```

### 4. Grid Layout

```tsx
<div className="
  grid
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  gap-fluid-lg
">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

---

## State Management

```typescript
// Filtering state
const [activeCategory, setActiveCategory] = useState('all');
const [searchQuery, setSearchQuery] = useState('');
const [currentPage, setCurrentPage] = useState(1);

// Filter logic
const filteredItems = useMemo(() => {
  let results = items;
  
  // Filter by category
  if (activeCategory !== 'all') {
    results = results.filter(item => item.category === activeCategory);
  }
  
  // Filter by search
  if (searchQuery) {
    results = results.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
  return results;
}, [items, activeCategory, searchQuery]);

// Pagination
const itemsPerPage = 9;
const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
const paginatedItems = filteredItems.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);
```

---

## Responsive Design

### Mobile (< 768px)
- Stacked filters
- Full-width search
- Single column grid

### Tablet (768px - 1024px)
- Side-by-side filters
- Two column grid

### Desktop (1024px+)
- Full filter bar
- Three column grid

---

## Best Practices

### 1. Reset Page on Filter Change
```tsx
useEffect(() => {
  setCurrentPage(1);
}, [activeCategory, searchQuery]);
```

### 2. Debounce Search
```tsx
const [debouncedSearch, setDebouncedSearch] = useState('');

useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(searchQuery);
  }, 300);
  return () => clearTimeout(timer);
}, [searchQuery]);
```

### 3. Handle Empty States
```tsx
{filteredItems.length === 0 && (
  <EmptyState
    title="No results found"
    description="Try adjusting your filters"
  />
)}
```

---

## Related Documentation

- **[overview-patterns.md](../overview-patterns.md)** - Pattern system
- **[CategoryFilter.md](../blocks/CategoryFilter.md)** - Filter component
- **[SearchBar.md](../blocks/SearchBar.md)** - Search component
- **[Pagination.md](../blocks/Pagination.md)** - Pagination component

---

**Last Updated:** January 2025  
**Version:** 3.2.0
