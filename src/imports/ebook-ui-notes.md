## Font Size & Typography Controls


Font Size Controls - Where and how?

- there are other controls like toc, back, forward, full screen, add a new font size option somewhere next to full screen

Floating toolbar with A- / A+ buttons?

- yes

Settings panel/modal?

- what settings would go in there other than font size, I think less is more


Should it remember user preference (localStorage)?

- yes


What size range? (e.g., 14px - 28px, or small/medium/large/x-large presets)

- yes


What should resize?

- the text only



Just body text?

- yes, body text only


Everything including headings (proportionally)?

- yes, headings shouldn't increase excessivly


Line height and spacing too?

- I think we probably have to consider increasing 



## Navigation & Progress

Navigation Controls - What navigation options?

- currently the toc below the ebook works well, check the target area and make sure the implementation is WCAG compliant



Previous/Next page buttons?

- currently there are next and back buttons, check the target area and make sure the implementation is WCAG compliant


Keyboard shortcuts (arrow keys, spacebar)?

- yes, can you add anymore shortcuts?


Touch gestures (swipe left/right)?

- yes, but I would like smooth animation page flipping interactions, currently the experience is not very smooth


Progress bar at bottom showing position in book?

- yes


Jump to page number input?

- yes


Progress Tracking - How should readers track their position?

- cookies or can you recommend a suitable solution




"Page X of 85" indicator?

- yes


Percentage complete (e.g., "42% complete")?

- yes, now as more tools are being added it makes more sense to display a spanner icon and to move all tools into the settings modal overlay. 


Chapter/section title in header?

- yes 


All of the above?

- yes 


## Responsive Behavior

Mobile vs Desktop - Should the experience differ?

- yes, we're probably gonna need to tailor the experience for mobile tablets and desktop, because one size doesn't fit all, I'm not sure what to suggest maybe you can make recommendations on how to make the e-book more fluid and responsive with tailored interfaces for different screen sizes


Same behavior on all devices?

- no


Mobile-optimized swipe gestures?

- yes, definitely


Different full-screen controls for touch vs desktop?

- yes




## User Preferences

Save Reading Preferences - What should be remembered?

- all settings, page / position in book last time used


Last page read (bookmark)?

- yes 


Font size preference?

- yes 


Full-screen mode preference?

- yes, not sure what additional options, maybe show controls or change the controls to minimal with 1 button 


Light/dark mode for reading?

- yes 



## Current Behavior

What specifically feels broken right now?

- the swiping / paging on desktop and mobile, it seems jerky, needs to be 


When you go full-screen, does content get cut off?

- yes, in some scenarios when screen sizes change, too many variables to list, you need to come up with a more responsive solution for presenting the content


Can't scroll at all?

- I would prefer no scrolling, but that depends on what you can achieve after receiving all my answers


Font too small/large?

- the font is good currently, but the text is cut off on some screen sizes


Need to see more content per screen?

- no, not specifically, but I should always be able to see the content that is on a page, it should not be obscured








## Settings Modal Trigger: Where should the spanner/gear icon live?

- next to the full screen icon

In the existing toolbar (next to full-screen button)?

- yes


Floating button in corner?

- yes, but only in minimal mode, there should be a setting to turn off the menu below the book and then only one minimal control button will displkay


In the header?

- yes, maybe or the footer, wherever it will not obscure text or page numbers or something in the book.


## Full-Screen Mode: When entering full-screen, should:

Settings modal still be accessible?

- yes


Show minimal controls overlay (fade out after inactivity)?

- not sure, I will let you decide what is most accessible and wcag AA and AAA compliant


Exit full-screen button always visible or auto-hide?

- yes, always visible


Page Flip Animation Style: What feel do you prefer?

I like all of these, implement whatever compliments the ebook user experience, maybe mix and match:
- Book-style flip (3D page curl effect)
- Slide transition (pages slide left/right)
- Fade transition (cross-fade between pages)
- Modern page flip (smooth horizontal slide with slight scale)

## Mobile Swipe Sensitivity: Should swipe work:

Anywhere on the page content?

- not sure, might be a usability problem if anywhere on page, I will take your advice


Only in specific swipe zones (left/right edges)?

- yes


