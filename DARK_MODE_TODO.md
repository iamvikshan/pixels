<!-- @format -->

# Dark Mode Implementation Plan

## Current Status

✅ Site is currently using light mode throughout ✅ Cal.com embed is forced to light mode with
custom brutalist styling ✅ All colors are defined in Layout.astro:

- `--main-bg: #fefff0` (cream/off-white)
- `--blue: #bae6ff` (light blue)
- `--yellow: #ffdc58` (yellow accent)

## When to Implement Dark Mode

Dark mode is **not critical** for Phase 2/3 but would be a nice enhancement for Phase 4.

---

## Implementation Approach

### Option 1: CSS Variables (Recommended)

Use CSS custom properties that change based on `prefers-color-scheme` or a toggle.

**Example:**

```css
:root {
  --main-bg: #fefff0;
  --text: #000000;
  --border: #000000;
  --accent: #ffdc58;
  --blue: #bae6ff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --main-bg: #1a1a1a;
    --text: #ffffff;
    --border: #ffffff;
    --accent: #ffdc58;
    --blue: #4a90e2;
  }
}

/* Or with manual toggle class */
html.dark-mode {
  --main-bg: #1a1a1a;
  --text: #ffffff;
  --border: #ffffff;
}
```

### Option 2: Tailwind Dark Mode

Since you're using Tailwind, can use their built-in dark mode.

**In tailwind.config:**

```js
export default {
  darkMode: "class", // or 'media'
  theme: {
    extend: {
      colors: {
        "main-bg-light": "#fefff0",
        "main-bg-dark": "#1a1a1a"
      }
    }
  }
}
```

---

## What Needs to Change

### 1. Colors

- Background: cream → dark gray/black
- Text: black → white
- Borders: black → white or light gray
- Accent yellow: keep or adjust slightly

### 2. Components to Update

- All components with `border-black` → use CSS variable
- Background colors
- Text colors
- Shadows (may need to invert or lighten)

### 3. Cal.com Embed

Update the theme setting:

```javascript
Cal.ns[config.namespace]("ui", {
  theme: isDarkMode ? "dark" : "light"
  // ... rest of config
})
```

### 4. Images

- Some images might need dark mode variants
- Consider adding filters or overlays

---

## Dark Mode Toggle Component

**Create `/src/components/ThemeToggle.astro`:**

```astro
<button id='theme-toggle' class='border-2 border-black p-2 dark:border-white'>
  <i class='ri-sun-line dark:hidden'></i>
  <i class='ri-moon-line hidden dark:inline'></i>
</button>

<script>
  const toggle = document.getElementById("theme-toggle")
  const html = document.documentElement

  // Check saved preference or system preference
  const currentTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

  html.classList.toggle("dark-mode", currentTheme === "dark")

  toggle?.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark-mode")
    localStorage.setItem("theme", isDark ? "dark" : "light")

    // Update Cal.com theme if on booking page
    // (would need to reinitialize Cal.com embeds)
  })
</script>
```

---

## Benefits of Waiting

1. **Focus on Core Features First** - Portfolio, content, functionality
2. **Test Light Mode Fully** - Ensure everything works perfectly
3. **Gather User Feedback** - See if clients actually want dark mode
4. **More Complex Implementation** - Dark mode affects every component

---

## When to Add Dark Mode

**Phase 4 or Later:**

- After core photography content is added
- After portfolio detail pages are working
- After client feedback on light mode
- If you have spare time and want the feature

**Not Critical Because:**

- Photography sites typically prefer light backgrounds (showcases photos better)
- Your target audience (clients booking photography) likely won't demand it
- Light mode is more traditional for creative portfolios
- Can be added anytime without breaking existing features

---

## Quick Implementation Checklist (When Ready)

- [ ] Add CSS variables for all colors
- [ ] Create dark mode color scheme
- [ ] Update all components to use CSS variables
- [ ] Add theme toggle button to header
- [ ] Add localStorage to remember preference
- [ ] Update Cal.com embed to match theme
- [ ] Test all pages in both modes
- [ ] Ensure images look good in dark mode
- [ ] Add transition animations between modes
- [ ] Update documentation

---

For now, the site looks great in light mode with the Cal.com embed matching perfectly! 🎨
