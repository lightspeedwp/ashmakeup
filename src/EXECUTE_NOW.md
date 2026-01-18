# ⚡ EXECUTE NOW - CSS Migration Step 1

**Quick Start:** Run these 3 commands, then tell me "Step 1 complete"

---

## 🚀 COMMANDS

```bash
# 1. Copy CSS file
cp styles/globals.css src/styles/globals.css

# 2. Open the file and add .py-section-sm class
# (See below for what to add)

# 3. Test
npm run dev
```

---

## ✏️ EDIT /src/styles/globals.css

Find the `@layer utilities` section (line ~360) and add this class anywhere inside it:

```css
/* Section Padding - Small (32px top/bottom) */
.py-section-sm {
  padding-top: 32px;
  padding-bottom: 32px;
}
```

---

## ✅ THEN TELL ME

> **"Step 1 complete"**

And I'll automatically update the rest!

---

**See `/STEP_1_CSS_INSTRUCTIONS.md` for detailed instructions.**
