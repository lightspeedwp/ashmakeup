# Interface Icons

UI control, navigation, and system icons for the Ash Shaw Makeup Portfolio interface.

## 📋 Available Icons

### Navigation & Menu

#### Menu
**Usage:** Open mobile menu, hamburger menu

```tsx
import { Menu } from 'lucide-react';

<button 
  className="lg:hidden"
  aria-label="Open navigation menu"
  onClick={openMenu}
>
  <Menu className="w-6 h-6 text-gray-700" />
</button>
```

#### X (Close)
**Usage:** Close menu, dismiss modal, remove item

```tsx
import { X } from 'lucide-react';

<button 
  aria-label="Close menu"
  onClick={closeMenu}
  className="absolute top-4 right-4"
>
  <X className="w-6 h-6 text-gray-700 hover:text-gray-900" />
</button>
```

#### ChevronDown
**Usage:** Dropdown indicators, expandable sections

```tsx
import { ChevronDown } from 'lucide-react';

<button className="flex items-center gap-2">
  <span>Categories</span>
  <ChevronDown className="w-4 h-4" />
</button>
```

#### ChevronUp
**Usage:** Collapse sections, scroll up indicators

```tsx
import { ChevronUp } from 'lucide-react';

<button className="flex items-center gap-2">
  <span>Show Less</span>
  <ChevronUp className="w-4 h-4" />
</button>
```

#### ChevronLeft / ChevronRight
**Usage:** Carousel navigation, pagination

```tsx
import { ChevronLeft, ChevronRight } from 'lucide-react';

<div className="flex items-center gap-2">
  <button aria-label="Previous">
    <ChevronLeft className="w-6 h-6" />
  </button>
  
  <button aria-label="Next">
    <ChevronRight className="w-6 h-6" />
  </button>
</div>
```

#### ArrowUp / ArrowDown
**Usage:** Scroll indicators, sort directions

```tsx
import { ArrowUp, ArrowDown } from 'lucide-react';

// Scroll to top button
<button aria-label="Scroll to top">
  <ArrowUp className="w-5 h-5" />
</button>

// Scroll down arrow
<button aria-label="Scroll down">
  <ArrowDown className="w-5 h-5 animate-bounce" />
</button>
```

#### ArrowLeft / ArrowRight
**Usage:** Back navigation, slide navigation

```tsx
import { ArrowLeft, ArrowRight } from 'lucide-react';

<button className="flex items-center gap-2">
  <ArrowLeft className="w-4 h-4" />
  <span>Back to Portfolio</span>
</button>
```

### Content Actions

#### Heart
**Usage:** Favorites, likes, save items

```tsx
import { Heart } from 'lucide-react';

<button 
  className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
  aria-label="Add to favorites"
>
  <Heart 
    className="w-6 h-6" 
    fill={isFavorite ? 'currentColor' : 'none'}
  />
</button>
```

#### Star
**Usage:** Ratings, featured items, highlights

```tsx
import { Star } from 'lucide-react';

<div className="flex gap-1">
  {[1, 2, 3, 4, 5].map((star) => (
    <Star 
      key={star}
      className="w-5 h-5 text-yellow-400"
      fill="currentColor"
    />
  ))}
</div>
```

#### Bookmark
**Usage:** Save for later, bookmarks

```tsx
import { Bookmark } from 'lucide-react';

<button aria-label="Bookmark this article">
  <Bookmark className="w-5 h-5 text-blue-600 hover:text-blue-700" />
</button>
```

#### Share2
**Usage:** Share content, social sharing

```tsx
import { Share2 } from 'lucide-react';

<button className="flex items-center gap-2 text-gray-600 hover:text-pink-500">
  <Share2 className="w-5 h-5" />
  <span>Share</span>
</button>
```

#### Link
**Usage:** Copy link, external links

```tsx
import { Link } from 'lucide-react';

<button 
  className="flex items-center gap-2"
  onClick={copyLink}
>
  <Link className="w-4 h-4" />
  <span>Copy Link</span>
</button>
```

### Search & Filter

#### Search
**Usage:** Search bars, search buttons

```tsx
import { Search } from 'lucide-react';

<div className="relative">
  <input 
    type="text"
    placeholder="Search portfolio..."
    className="pl-10 pr-4 py-2 rounded-lg border"
  />
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
</div>
```

#### Filter
**Usage:** Filter controls, advanced search

```tsx
import { Filter } from 'lucide-react';

<button className="flex items-center gap-2">
  <Filter className="w-5 h-5" />
  <span>Filter</span>
</button>
```

#### X (Clear)
**Usage:** Clear search, reset filters

```tsx
import { X } from 'lucide-react';

<button 
  className="absolute right-3 top-1/2 -translate-y-1/2"
  aria-label="Clear search"
>
  <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
</button>
```

### Layout & View

#### Grid
**Usage:** Grid view toggle

```tsx
import { Grid } from 'lucide-react';

<button 
  aria-label="Grid view"
  aria-pressed={viewMode === 'grid'}
  className={viewMode === 'grid' ? 'text-pink-500' : 'text-gray-400'}
>
  <Grid className="w-5 h-5" />
</button>
```

#### List
**Usage:** List view toggle

```tsx
import { List } from 'lucide-react';

<button 
  aria-label="List view"
  aria-pressed={viewMode === 'list'}
  className={viewMode === 'list' ? 'text-pink-500' : 'text-gray-400'}
>
  <List className="w-5 h-5" />
</button>
```

#### Eye
**Usage:** View count, preview, visibility

```tsx
import { Eye } from 'lucide-react';

<span className="flex items-center gap-1 text-gray-600 text-fluid-sm">
  <Eye className="w-4 h-4" />
  1,234 views
</span>
```

#### EyeOff
**Usage:** Hide content, privacy settings

```tsx
import { EyeOff } from 'lucide-react';

<button aria-label="Hide password">
  <EyeOff className="w-5 h-5 text-gray-500" />
</button>
```

### Status & Feedback

#### Check
**Usage:** Success states, completed items

```tsx
import { Check } from 'lucide-react';

<div className="flex items-center gap-2 text-green-700">
  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
    <Check className="w-3 h-3" />
  </div>
  <span>Email sent successfully</span>
</div>
```

#### CheckCircle
**Usage:** Success messages, confirmation

```tsx
import { CheckCircle } from 'lucide-react';

<div className="flex items-center gap-2 text-green-600">
  <CheckCircle className="w-6 h-6" />
  <span>Form submitted successfully!</span>
</div>
```

#### AlertCircle
**Usage:** Warnings, important information

```tsx
import { AlertCircle } from 'lucide-react';

<div className="flex items-center gap-2 text-amber-600">
  <AlertCircle className="w-5 h-5" />
  <span>Please review your information</span>
</div>
```

#### AlertTriangle
**Usage:** Errors, critical warnings

```tsx
import { AlertTriangle } from 'lucide-react';

<div className="flex items-center gap-3 bg-red-100 border border-red-700 text-red-900 px-4 py-3 rounded-lg">
  <AlertTriangle className="w-5 h-5 flex-shrink-0" />
  <span>Error: Please fill in all required fields</span>
</div>
```

#### Info
**Usage:** Information tooltips, help text

```tsx
import { Info } from 'lucide-react';

<button 
  className="text-blue-600 hover:text-blue-700"
  aria-label="More information"
>
  <Info className="w-5 h-5" />
</button>
```

#### Loader
**Usage:** Loading states, processing

```tsx
import { Loader } from 'lucide-react';

<div className="flex items-center gap-2">
  <Loader className="w-5 h-5 animate-spin text-pink-500" />
  <span>Loading...</span>
</div>
```

### Form & Input

#### Mail
**Usage:** Email fields, contact forms

```tsx
import { Mail } from 'lucide-react';

<div className="relative">
  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
  <input 
    type="email"
    placeholder="your@email.com"
    className="pl-10 pr-4 py-2 rounded-lg border"
  />
</div>
```

#### MessageCircle
**Usage:** Comments, messaging, WhatsApp

```tsx
import { MessageCircle } from 'lucide-react';

<a 
  href="https://wa.me/1234567890"
  className="flex items-center gap-2 text-green-600 hover:text-green-700"
>
  <MessageCircle className="w-5 h-5" />
  <span>WhatsApp</span>
</a>
```

#### Send
**Usage:** Submit buttons, send messages

```tsx
import { Send } from 'lucide-react';

<button className="flex items-center gap-2 bg-gradient-pink-purple-blue text-white px-button py-button rounded-lg">
  <span>Send Message</span>
  <Send className="w-4 h-4" />
</button>
```

### Media

#### Image / Images
**Usage:** Gallery indicators, image uploads

```tsx
import { Image, Images } from 'lucide-react';

// Single image
<Image className="w-6 h-6 text-gray-400" />

// Gallery
<div className="flex items-center gap-2">
  <Images className="w-5 h-5 text-pink-500" />
  <span>12 photos</span>
</div>
```

#### Video
**Usage:** Video content, video uploads

```tsx
import { Video } from 'lucide-react';

<button className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/60">
  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
    <Video className="w-8 h-8 text-pink-500" />
  </div>
</button>
```

#### Play
**Usage:** Play video/audio, start action

```tsx
import { Play } from 'lucide-react';

<button 
  className="w-12 h-12 rounded-full bg-gradient-pink-purple-blue flex items-center justify-center shadow-lg hover:shadow-xl"
  aria-label="Play video"
>
  <Play className="w-6 h-6 text-white" fill="white" />
</button>
```

### Content Organization

#### Folder
**Usage:** Categories, collections

```tsx
import { Folder } from 'lucide-react';

<button className="flex items-center gap-2">
  <Folder className="w-5 h-5 text-blue-500" />
  <span>Festival Makeup</span>
</button>
```

#### Tag / Tags
**Usage:** Tags, keywords, categories

```tsx
import { Tag, Tags } from 'lucide-react';

<div className="flex items-center gap-2">
  <Tag className="w-4 h-4 text-gray-500" />
  <div className="flex flex-wrap gap-2">
    <span className="px-3 py-1 bg-gray-100 rounded-full text-fluid-sm">UV Makeup</span>
    <span className="px-3 py-1 bg-gray-100 rounded-full text-fluid-sm">Festival</span>
  </div>
</div>
```

#### FileText
**Usage:** Blog posts, documents, articles

```tsx
import { FileText } from 'lucide-react';

<div className="flex items-center gap-2">
  <FileText className="w-5 h-5 text-purple-500" />
  <span>Blog Post</span>
</div>
```

---

## Usage Patterns

### Mobile Menu Button

```tsx
import { Menu, X } from 'lucide-react';

function MobileMenuButton({ isOpen, onClick }: Props) {
  return (
    <button
      className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <X className="w-6 h-6 text-gray-700" />
      ) : (
        <Menu className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
}
```

### Search Bar with Clear

```tsx
import { Search, X } from 'lucide-react';

function SearchBar({ value, onChange, onClear }: Props) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search portfolio..."
        className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-200"
      />
      
      {value && (
        <button
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2"
          aria-label="Clear search"
        >
          <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
        </button>
      )}
    </div>
  );
}
```

### Status Alert Messages

```tsx
import { CheckCircle, AlertTriangle, Info } from 'lucide-react';

function StatusAlert({ type, message }: Props) {
  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <AlertTriangle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />
  };
  
  const styles = {
    success: 'bg-green-100 border-green-700 text-green-900',
    error: 'bg-red-100 border-red-700 text-red-900',
    info: 'bg-blue-100 border-blue-700 text-blue-900'
  };
  
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${styles[type]}`}>
      {icons[type]}
      <span className="font-body font-medium">{message}</span>
    </div>
  );
}
```

---

## Related Documentation

- **[overview-icons.md](../overview-icons.md)** - Icon system overview
- **[travel.md](./travel.md)** - Travel and location icons
- **[Guidelines.md](../Guidelines.md)** - Main guidelines

---

**Last Updated:** January 2025  
**Version:** 3.2.0
