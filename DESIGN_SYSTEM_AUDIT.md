# COMPREHENSIVE DESIGN SYSTEM AUDIT
## prateekkarn.com — Growth Architect Design System

**Audit Date:** December 24, 2025  
**Version:** 1.0  
**Framework:** Tailwind CSS + React + TypeScript

---

## 1. COLORS

### 1.1 Light Mode (Default)

| Token | HSL Value | Hex Equivalent | Usage |
|-------|-----------|----------------|-------|
| **Background** | `hsl(27, 20%, 97.5%)` | `#F9F8F6` | Page background, warm off-white |
| **Foreground** | `hsl(0, 0%, 6.7%)` | `#111111` | Primary text, deep charcoal |
| **Primary** | `hsl(0, 0%, 6.7%)` | `#111111` | Primary actions, deep charcoal |
| **Primary Foreground** | `hsl(27, 20%, 97.5%)` | `#F9F8F6` | Text on primary |
| **Accent** | `hsl(42, 20%, 58%)` | `#A89A7D` | Muted gold, brand accent |
| **Accent Foreground** | `hsl(0, 0%, 6.7%)` | `#111111` | Text on accent |
| **Secondary** | `hsl(27, 15%, 94%)` | `#F2F0EC` | Subtle backgrounds |
| **Secondary Foreground** | `hsl(0, 0%, 6.7%)` | `#111111` | Text on secondary |
| **Muted** | `hsl(27, 15%, 92%)` | `#EDEBE6` | Muted backgrounds |
| **Muted Foreground** | `hsl(0, 0%, 40%)` | `#666666` | Secondary text |
| **Card** | `hsl(27, 20%, 97.5%)` | `#F9F8F6` | Card backgrounds |
| **Border** | `hsl(27, 15%, 90%)` | `#E8E5DF` | Borders, dividers |
| **Input** | `hsl(27, 15%, 90%)` | `#E8E5DF` | Input field borders |
| **Ring** | `hsl(42, 20%, 58%)` | `#A89A7D` | Focus rings (gold) |
| **Destructive** | `hsl(0, 84.2%, 60.2%)` | `#EF4444` | Error states |

### 1.2 Additional Hardcoded Colors (In Components)

| Hex Code | Usage |
|----------|-------|
| `#8b7355` | CTA buttons, gold/brown accent |
| `#7a6548` | CTA button hover state |
| `#1a1a1a` | Footer background, pure black |
| `#2a2a2a` | Dark input fields |
| `#333333` | Divider lines in footer |
| `#f5f5dc` | Cream/off-white text in footer |
| `#c9b896` | Gold links in footer |
| `#f5f5f0` | Light cream backgrounds |
| `#e5e5dc` | Light borders |
| `#5a5a5a` | Secondary text |
| `#4a4a4a` | Hover text states |

### 1.3 Dark Mode

| Token | HSL Value | Hex Equivalent |
|-------|-----------|----------------|
| **Background** | `hsl(0, 0%, 8%)` | `#141414` |
| **Foreground** | `hsl(27, 20%, 95%)` | `#F5F3F0` |
| **Card** | `hsl(0, 0%, 10%)` | `#1A1A1A` |
| **Secondary** | `hsl(0, 0%, 12%)` | `#1F1F1F` |
| **Muted Foreground** | `hsl(0, 0%, 60%)` | `#999999` |
| **Accent** | `hsl(42, 25%, 55%)` | `#A8956E` |
| **Border** | `hsl(0, 0%, 15%)` | `#262626` |

### 1.4 Color Palette Visual Reference

```
BRAND COLORS
┌─────────────────────────────────────────────────────────────┐
│  Primary (Charcoal)     │  #111111  │  Deep, authoritative  │
│  Accent (Muted Gold)    │  #A89A7D  │  Premium, sophisticated│
│  Background (Off-White) │  #F9F8F6  │  Warm, inviting       │
│  CTA Gold               │  #8b7355  │  Action-oriented      │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. TYPOGRAPHY

### 2.1 Font Families

| Token | Font Stack | Usage |
|-------|------------|-------|
| **Heading** | `'Cormorant Garamond', serif` | All headings, display text |
| **Body** | `'Inter', sans-serif` | Body text, UI elements |

### 2.2 Font Loading (index.html)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### 2.3 Heading Hierarchy

| Element | Mobile | Tablet (sm) | Desktop (md) | Large (lg) | Weight | Letter-Spacing |
|---------|--------|-------------|--------------|------------|--------|----------------|
| **H1** | `text-4xl` (36px) | `text-5xl` (48px) | — | `text-7xl` (72px) | `font-bold` (700) | `-0.025em` |
| **H2** | `text-2xl` (24px) | `text-3xl` (30px) | `text-4xl` (36px) | `text-5xl` (48px) | `font-bold` (700) | `-0.025em` |
| **H3** | `text-lg` (18px) | `text-xl` (20px) | `text-2xl` (24px) | `text-3xl` (30px) | `font-semibold` (600) | `-0.025em` |
| **H4** | `text-lg` (18px) | `text-xl` (20px) | `text-2xl` (24px) | — | `font-normal` (400) | `tracking-wide` |
| **H5** | `text-base` (16px) | `text-lg` (18px) | `text-xl` (20px) | — | `font-semibold` (600) | default |
| **H6** | `text-sm` (14px) | `text-base` (16px) | `text-lg` (18px) | — | `font-medium` (500) | default |

### 2.4 Body Text Variants

| Variant | Size | Weight | Line-Height | Usage |
|---------|------|--------|-------------|-------|
| **Body Large** | `text-lg` (18px) | 400 | `leading-relaxed` (1.625) | Hero subtitles, intros |
| **Body** | `text-base` (16px) | 400 | `leading-relaxed` (1.625) | Main content |
| **Body Small** | `text-sm` (14px) | 400 | `leading-relaxed` (1.625) | Secondary content, metadata |
| **Caption** | `text-xs` (12px) | 400-500 | default (1.5) | Labels, timestamps |

### 2.5 Typography CSS Classes

```css
/* Heading Font */
.font-heading {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  letter-spacing: -0.025em;
}

/* Body Font */
.font-body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

/* Applied to body element */
body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 1.625; /* leading-relaxed */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### 2.6 Font Weights Available

| Font | Weights |
|------|---------|
| **Cormorant Garamond** | 400, 500, 600, 700 |
| **Inter** | 300, 400, 500, 600, 700 |

---

## 3. SPACING & RADIUS

### 3.1 Spacing Scale (Tailwind Default)

| Token | Value | Pixels | Common Usage |
|-------|-------|--------|--------------|
| `0` | 0 | 0px | Reset |
| `0.5` | 0.125rem | 2px | Micro spacing |
| `1` | 0.25rem | 4px | Tight spacing |
| `1.5` | 0.375rem | 6px | Small gaps |
| `2` | 0.5rem | 8px | Icon gaps |
| `2.5` | 0.625rem | 10px | Small padding |
| `3` | 0.75rem | 12px | Button padding |
| `4` | 1rem | 16px | Standard padding |
| `5` | 1.25rem | 20px | Medium spacing |
| `6` | 1.5rem | 24px | Section gaps |
| `8` | 2rem | 32px | Large gaps |
| `10` | 2.5rem | 40px | Component spacing |
| `12` | 3rem | 48px | Section padding (mobile) |
| `16` | 4rem | 64px | Section padding (tablet) |
| `20` | 5rem | 80px | Large sections |
| `24` | 6rem | 96px | Section padding (desktop) |
| `32` | 8rem | 128px | Hero spacing |

### 3.2 Section Padding Pattern

| Breakpoint | Horizontal Padding | Vertical Padding |
|------------|-------------------|------------------|
| **Mobile (default)** | `px-4` (16px) | `py-12` (48px) |
| **Tablet (sm: 640px)** | `px-6` (24px) | `py-16` (64px) |
| **Desktop (lg: 1024px)** | `px-8` (32px) | `py-24` (96px) |

### 3.3 Container Configuration

| Property | Value |
|----------|-------|
| **Max Width** | `1400px` (2xl screens) |
| **Center** | `true` |
| **Default Padding** | `2rem` (32px) |

```typescript
// tailwind.config.ts
container: {
  center: true,
  padding: "2rem",
  screens: {
    "2xl": "1400px",
  },
},
```

### 3.4 Border Radius Tokens

| Token | CSS Variable | Computed Value | Usage |
|-------|--------------|----------------|-------|
| `--radius` | `0.375rem` | 6px | Base radius |
| `rounded-lg` | `var(--radius)` | 6px | Cards, buttons |
| `rounded-md` | `calc(var(--radius) - 2px)` | 4px | Inputs, small elements |
| `rounded-sm` | `calc(var(--radius) - 4px)` | 2px | Tags, badges |
| `rounded-full` | `9999px` | Full circle | Avatars, icons |
| `rounded-none` | `0` | 0px | Sharp edges |

### 3.5 Common Spacing Patterns

```css
/* Section Pattern */
.section {
  padding: 3rem 1rem;      /* py-12 px-4 (mobile) */
  padding: 4rem 1.5rem;    /* py-16 px-6 (sm) */
  padding: 6rem 2rem;      /* py-24 px-8 (lg) */
}

/* Card Pattern */
.card {
  padding: 1.5rem;         /* p-6 */
  border-radius: 0.375rem; /* rounded-lg */
}

/* Button Pattern */
.button {
  padding: 0.75rem 1.5rem; /* py-3 px-6 */
  border-radius: 0.375rem; /* rounded-lg */
}
```

---

## 4. ICONOGRAPHY

### 4.1 Icon Library

| Property | Value |
|----------|-------|
| **Library** | Lucide React |
| **Version** | `^0.462.0` |
| **Package** | `lucide-react` |
| **Default Stroke Width** | `2` (Lucide default) |
| **Custom Stroke Width** | `1.5` (used in ManifestoSection) |

### 4.2 Icon Sizing Pattern

| Context | Mobile | Tablet (sm) | Desktop (md) | Class Pattern |
|---------|--------|-------------|--------------|---------------|
| **Navigation** | 20px | 20px | 20px | `w-5 h-5` |
| **Section Icons** | 24px | 28px | 32px | `w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8` |
| **Inline Icons** | 16px | 18px | 20px | `w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5` |
| **Small Icons** | 12px | 14px | 16px | `w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4` |

### 4.3 Icons Used in Project

| Icon | Import | Component | Usage |
|------|--------|-----------|-------|
| `Menu` | lucide-react | Header | Mobile menu toggle |
| `X` | lucide-react | Header, Dialog | Close/dismiss actions |
| `Mail` | lucide-react | Footer, Contact | Email contact link |
| `Linkedin` | lucide-react | Footer, Contact | LinkedIn profile link |
| `Compass` | lucide-react | ManifestoSection | Architecture principle |
| `Settings` | lucide-react | ManifestoSection | Automation principle |
| `TrendingUp` | lucide-react | ManifestoSection | Outcomes principle |
| `ArrowRight` | lucide-react | HeroCard, Carousel | CTA arrows, navigation |
| `ArrowUpRight` | lucide-react | GridCard | External link indicator |
| `ArrowLeft` | lucide-react | Carousel | Previous navigation |
| `ChevronDown` | lucide-react | Accordion, NavMenu | Expandable indicators |
| `ChevronLeft` | lucide-react | Calendar, Pagination | Previous navigation |
| `ChevronRight` | lucide-react | Breadcrumb, Calendar | Next/forward navigation |
| `Check` | lucide-react | Checkbox, Menu | Selection indicator |
| `Search` | lucide-react | Command | Search input |
| `Circle` | lucide-react | RadioGroup, Menu | Radio/dot indicator |
| `MoreHorizontal` | lucide-react | Breadcrumb, Pagination | Overflow indicator |
| `Dot` | lucide-react | InputOTP | OTP separator |

### 4.4 Icon Styling Guidelines

```tsx
// Standard icon usage
<IconName className="w-5 h-5" />

// With custom stroke width
<IconName className="w-6 h-6" strokeWidth={1.5} />

// Responsive sizing
<IconName className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />

// With color
<IconName className="w-5 h-5 text-accent" />

// With hover state
<IconName className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
```

---

## 5. ANIMATIONS

### 5.1 Keyframe Animations

| Animation | Duration | Timing | Iteration | Usage |
|-----------|----------|--------|-----------|-------|
| `accordion-down` | 0.2s | ease-out | once | Accordion expand |
| `accordion-up` | 0.2s | ease-out | once | Accordion collapse |
| `slide-left` | 30-45s | linear | infinite | Logo carousel |
| `scroll-left` | 30-45s | linear | infinite | Horizontal scroll |
| `spin-slow` | 3s | linear | infinite | Slow rotation |

### 5.2 Animation Definitions

```css
@keyframes accordion-down {
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
}

@keyframes accordion-up {
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
}

@keyframes slide-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

### 5.3 Responsive Animation Speeds

| Animation | Mobile | Tablet (sm) | Desktop (lg) |
|-----------|--------|-------------|--------------|
| `slide-left` | 30s | 40s | 45s |
| `scroll-left` | 30s | 40s | 45s |

### 5.4 Transition Defaults

| Property | Duration | Timing Function |
|----------|----------|-----------------|
| **Color** | 200-300ms | default (ease) |
| **Transform** | 300ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| **Opacity** | 300-500ms | default (ease) |
| **All** | 200ms | default (ease) |

### 5.5 Common Transition Classes

```css
/* Color transitions */
.transition-colors { transition-property: color, background-color, border-color; }

/* All transitions */
.transition-all { transition-property: all; }

/* Duration */
.duration-200 { transition-duration: 200ms; }
.duration-300 { transition-duration: 300ms; }
.duration-500 { transition-duration: 500ms; }
```

---

## 6. BREAKPOINTS

### 6.1 Breakpoint Scale

| Name | Min-Width | Target Devices |
|------|-----------|----------------|
| `sm` | 640px | Small tablets, large phones (landscape) |
| `md` | 768px | Tablets (portrait) |
| `lg` | 1024px | Laptops, tablets (landscape) |
| `xl` | 1280px | Desktops |
| `2xl` | 1400px | Large desktops (container max) |

### 6.2 Breakpoint Usage Pattern

```tsx
// Mobile-first responsive classes
className="
  text-sm          // Mobile (default)
  sm:text-base     // >= 640px
  md:text-lg       // >= 768px
  lg:text-xl       // >= 1024px
  xl:text-2xl      // >= 1280px
"
```

### 6.3 Grid Responsive Patterns

```tsx
// Common grid patterns used
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
className="grid grid-cols-2 lg:grid-cols-4"
```

---

## 7. SHADOWS & EFFECTS

### 7.1 Shadow Scale (Tailwind Default)

| Class | Value |
|-------|-------|
| `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` |
| `shadow` | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)` |
| `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` |
| `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` |
| `shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` |

### 7.2 Filter Effects

| Effect | Class | Usage |
|--------|-------|-------|
| Grayscale | `grayscale` | Client logos, testimonial photos |
| Remove Grayscale | `grayscale-0` | Hover state |
| Blur | `blur-sm` | Background effects |

---

## 8. Z-INDEX SCALE

| Layer | Z-Index | Usage |
|-------|---------|-------|
| Base | `0` | Default content |
| Raised | `10` | Gradient overlays |
| Dropdown | `20` | Dropdowns, tooltips |
| Sticky | `30` | Sticky headers |
| Modal Backdrop | `40` | Modal backgrounds |
| Modal | `50` | Modal content |
| Popover | `50` | Popovers |
| Toast | `100` | Toast notifications |

---

## 9. COMPONENT TOKENS SUMMARY

### 9.1 Button Variants

| Variant | Background | Text | Border | Hover |
|---------|------------|------|--------|-------|
| **Primary** | `#8b7355` | `#ffffff` | none | `#7a6548` |
| **Outline** | transparent | `#c9b896` | `#c9b896` | fill `#c9b896` |
| **Ghost** | transparent | inherit | none | `bg-accent/10` |

### 9.2 Input Fields

| Property | Light Mode | Dark Mode |
|----------|------------|-----------|
| Background | `#E8E5DF` | `#2a2a2a` |
| Border | `#E8E5DF` | `#333333` |
| Text | `#111111` | `#f5f5dc` |
| Placeholder | `#666666` | `#999999` |
| Focus Ring | `#A89A7D` | `#A8956E` |

### 9.3 Card Styles

| Property | Value |
|----------|-------|
| Background | `hsl(var(--card))` |
| Border | `1px solid hsl(var(--border))` |
| Border Radius | `0.375rem` (rounded-lg) |
| Padding | `1.5rem` (p-6) |
| Shadow | `shadow-sm` to `shadow-lg` on hover |

---

## 10. FILE REFERENCES

| File | Purpose |
|------|---------|
| `tailwind.config.ts` | Theme configuration, color tokens, font families |
| `src/index.css` | CSS variables, global styles, animations |
| `index.html` | Font loading, meta tags |
| `src/components/ui/*` | Shadcn/ui component library |

---

**End of Design System Audit**

*Generated for prateekkarn.com portfolio project*
