# 🚀 Quick Start: Dark Mode & New Features

## Immediate Usage

### 1. Toggle Dark Mode

**Desktop:**
- Look for the sun/moon icon button in the header (top right)
- Click to toggle between light and dark modes

**Mobile:**
- Open mobile menu (hamburger icon)
- Click the theme toggle button
- Theme persists across pages

### 2. View Festival Countdowns

Add the new `MultipleCountdowns` component to your homepage:

```tsx
// In /components/pages/home/HomePage.tsx
import { MultipleCountdowns } from '../../sections/MultipleCountdowns';

export function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <>
      <HeroLayout ... />
      <WhySection ... />
      <FeaturedSection ... />
      <MultipleCountdowns />  {/* ADD THIS LINE */}
      <BlogPreviewSection ... />
      <TestimonialsSection ... />
      <Footer />
    </>
  );
}
```

**Features:**
- Shows next 3 upcoming Australian festivals
- Real-time countdown timers
- Automatically hides expired festivals
- "HAPPENING NOW" banner when festival is live

### 3. Update Festival Dates Annually

Edit `/components/sections/MultipleCountdowns.tsx`:

```tsx
const FESTIVALS: Festival[] = [
  {
    name: "Origin Festival",
    startDate: new Date('2027-01-30T00:00:00'),  // UPDATE YEAR
    endDate: new Date('2027-02-01T23:59:59'),    // UPDATE YEAR
    location: "Byron Bay, NSW",
    // ... colors
  },
  // ... more festivals
];
```

---

## Component Customization

### Theme Colors

Dark mode colors are defined in `/styles/globals.css`:

```css
.dark {
  --background: #0a0118;      /* Deep purple-black */
  --card: #1a0f2e;            /* Card background */
  --border: #3b2667;          /* Borders */
}
```

### Logo Glow Effect

Adjust in `/components/common/Logo.tsx`:

```tsx
${isDarkMode ? 'brightness-110 contrast-110 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]' : ''}
```

---

## Testing Checklist

- [ ] Toggle dark mode works in header
- [ ] Toggle dark mode works in mobile menu
- [ ] Theme persists on page refresh
- [ ] All sections display correctly in both modes
- [ ] Logo adapts to dark mode
- [ ] Festival countdowns display and update
- [ ] Countdowns show "HAPPENING NOW" when live
- [ ] Past festivals are hidden
- [ ] Accessibility: keyboard navigation works
- [ ] Accessibility: focus indicators visible

---

## Troubleshooting

### Theme Not Persisting
- Check browser localStorage is enabled
- Clear localStorage: `localStorage.removeItem('theme')`
- Refresh page

### Countdown Not Showing
- Check festival dates are in the future
- Verify component is imported and rendered
- Check console for errors

### Dark Mode Classes Not Working
- Ensure `dark` class is on `<html>` element
- Check Tailwind config includes dark mode support
- Verify CSS classes are properly formatted

---

## Key Features Reference

### ✅ Dark Mode
- Auto-detection of system preference
- Manual toggle with persistence
- Smooth transitions
- Full component coverage

### ✅ Logo Adaptation
- Automatic theme detection
- Enhanced visibility in dark mode
- Maintains brand identity

### ✅ Festival Countdowns
- Real-time updates every second
- Smart date handling
- Urgency indicators
- Responsive grid layout

### ✅ Instagram Integration
- Real API data (when configured)
- 24-hour caching
- Mock data fallback
- Engagement metrics

### ✅ Video Testimonials
- Custom controls
- Responsive player
- Accessibility features
- Dark mode compatible

---

## Next Steps

1. **Deploy:** All features are production-ready
2. **Test:** Run through testing checklist above
3. **Monitor:** Check user engagement with dark mode
4. **Iterate:** Gather feedback and refine

---

**Need Help?**
- Check `/DARK_MODE_IMPLEMENTATION_COMPLETE.md` for full documentation
- Review component-specific guideline files in `/guidelines/components/`
- Consult main guidelines in `/Guidelines.md`
