# Page Banner Implementation Guide

## ✅ What's Been Completed

### 1. **PageBanner Component** (`src/components/PageBanner.tsx`)
A fully responsive, reusable banner component for all non-home pages.

**Features:**
- ✅ Responsive height (400px mobile → 500px desktop)
- ✅ Next.js Image optimization
- ✅ Breadcrumb navigation with HOME link
- ✅ Auto-highlights "RND" in title with yellow color
- ✅ Space/cosmic theme with gradient overlays
- ✅ Optional astronaut character placement
- ✅ Decorative planet/cosmic elements
- ✅ Uses Bebas Neue for titles, Jakarta Sans for text
- ✅ Smart image placeholders until real images added

### 2. **Sticky Navbar** (`src/components/Navbar.tsx`)
Already configured to work on all pages:
- Home page: Transparent initially, becomes sticky after hero
- Other pages: Sticky from the start
- Smooth backdrop blur and shadow transitions

### 3. **Example Page** (`src/app/about-us/page.tsx`)
Demonstrates proper implementation with:
- Sticky navbar
- Page banner
- Content sections
- Footer

---

## 📋 How to Use on Any Page

### Basic Template

```tsx
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";

export default function YourPage() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-white">
      {/* Background */}
      <SpaceBackground />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Page Banner - Add pt-20 or pt-24 for navbar spacing */}
      <div className="pt-20 sm:pt-24">
        <PageBanner
          title="YOUR PAGE TITLE"
          breadcrumb="BREADCRUMB TEXT"
          showAstronaut={true}
        />
      </div>

      {/* Page Content */}
      <main className="relative z-10">
        <section className="py-[50px] px-6 sm:px-12">
          {/* Your content here */}
        </section>
      </main>

      {/* Footer */}
      <RnDFooter />
    </div>
  );
}
```

---

## 🎨 PageBanner Props

```typescript
interface PageBannerProps {
  title: string;              // Page title (e.g., "ABOUT RND")
  breadcrumb?: string;        // Breadcrumb text (e.g., "ABOUT US")
  backgroundImage?: string;   // Custom background image path
  showAstronaut?: boolean;    // Show/hide astronaut character
}
```

### Examples

**Services Page:**
```tsx
<PageBanner
  title="OUR SERVICES"
  breadcrumb="SERVICES"
  backgroundImage="/images/services_banner.jpg"
  showAstronaut={true}
/>
```

**Contact Page (no astronaut):**
```tsx
<PageBanner
  title="GET IN TOUCH"
  breadcrumb="CONTACT US"
  showAstronaut={false}
/>
```

**Portfolio Page:**
```tsx
<PageBanner
  title="OUR WORK"
  breadcrumb="PORTFOLIOS"
  backgroundImage="/images/portfolio_banner.jpg"
/>
```

---

## 🖼️ Image Setup Guide

### Required Images

#### 1. Background Image
- **Path:** `/public/images/page_banner_bg.jpg`
- **Size:** 1920x500px minimum
- **Format:** JPG (optimized)
- **Description:** Space theme with planets and stars

#### 2. Astronaut Character  
- **Path:** `/public/images/astronaut_banner.png`
- **Size:** 360x400px
- **Format:** PNG with transparency
- **Description:** Full body astronaut in black & yellow suit

#### 3. Droid Companion (Optional)
- **Path:** `/public/images/droid_companion.png`
- **Size:** 100x120px
- **Format:** PNG with transparency

### How to Add Images

**Step 1:** Add images to `/public/images/` folder

**Step 2:** In `PageBanner.tsx`, uncomment these sections:

**For Astronaut (around line 30):**
```tsx
<Image
  src="/images/astronaut_banner.png"
  alt="Astronaut"
  fill
  className="object-contain object-bottom"
  sizes="(max-width: 768px) 280px, 360px"
/>
```

**For Droid (around line 48):**
```tsx
<Image
  src="/images/droid_companion.png"
  alt="Droid"
  fill
  className="object-contain object-bottom"
  sizes="100px"
/>
```

---

## 📐 Responsive Behavior

| Breakpoint | Height | Astronaut Size | Title Size |
|------------|--------|----------------|------------|
| Mobile (< 640px) | 400px | 280px | text-5xl |
| Tablet (640-768px) | 450px | 320px | text-6xl |
| Desktop (> 768px) | 500px | 360px | text-7xl-8xl |

---

## 🎯 Design Specifications

### Colors
- **Primary:** #FFD400 (Yellow/Gold)
- **Background:** #050608 (Dark black)
- **Text:** White with opacity variants

### Typography
- **Title:** Bebas Neue (uppercase, bold)
- **Breadcrumb:** Plus Jakarta Sans
- **Numbers/Stats:** Bebas Neue

### Spacing
- **Section padding:** 50px (consistent across all sections)
- **Top spacing:** 80-96px (for sticky navbar)
- **Content max-width:** 1400px

---

## 🔧 Customization Options

### Different Background Per Page

Create multiple background images:
```
/public/images/
  ├── about_banner.jpg
  ├── services_banner.jpg
  ├── portfolio_banner.jpg
  └── contact_banner.jpg
```

Use them:
```tsx
<PageBanner
  title="ABOUT US"
  backgroundImage="/images/about_banner.jpg"
/>
```

### Custom Height

Modify in `PageBanner.tsx`:
```tsx
// Current:
className="relative w-full h-[400px] sm:h-[450px] md:h-[500px]"

// Taller:
className="relative w-full h-[500px] sm:h-[550px] md:h-[600px]"
```

### No Breadcrumb

Simply omit the breadcrumb prop:
```tsx
<PageBanner title="ABOUT RND" />
```

---

## 🚀 Quick Implementation Checklist

### For Each New Page:

- [ ] Create page file in `src/app/[page-name]/page.tsx`
- [ ] Import required components (Navbar, PageBanner, Footer)
- [ ] Add `pt-20 sm:pt-24` wrapper around PageBanner
- [ ] Configure PageBanner with title and breadcrumb
- [ ] Use `py-[50px]` for section spacing
- [ ] Apply font classes: `font-[family-name:var(--font-bebas)]` or `font-[family-name:var(--font-jakarta)]`

---

## 📱 Pages That Need Banners

Based on your navigation:

1. ✅ **About Us** - Created with example
2. ⬜ **Services** - Use: `title="OUR SERVICES"` 
3. ⬜ **Portfolios** - Use: `title="OUR WORK"`
4. ⬜ **Contact Us** - Use: `title="GET IN TOUCH"`
5. ⬜ **Insights/Blog** - Use: `title="INSIGHTS"`
6. ⬜ **Industries** - Use: `title="INDUSTRIES WE SERVE"`

---

## 💡 Tips & Best Practices

### Image Optimization
- Compress JPGs to ~200-300KB
- Use PNG for characters (with transparency)
- WebP format for even better optimization

### Accessibility
- Always provide descriptive alt text
- Ensure text contrast meets WCAG standards
- Test with screen readers

### Performance
- Banner images are set to `priority` for faster loading
- Next.js Image automatically optimizes and lazy loads
- Blur placeholders show during loading

### SEO
- Use descriptive page titles
- Breadcrumbs help with site structure
- Semantic HTML (section, nav, main)

---

## 🎨 Current Placeholder Behavior

Without real images, the component displays:

**Background:**
- Gray placeholder with dark overlay
- Still maintains proper spacing and layout

**Astronaut:**
- SVG icon with yellow glow
- Text hint: "Add astronaut_banner.png"
- Positioned correctly for easy image swap

**Planet:**
- CSS gradient blur effect
- Top right corner decoration

**Everything is production-ready** - just add images to complete!

---

## 🔍 Troubleshooting

### Banner not showing?
- Check if `pt-20 sm:pt-24` wrapper exists
- Verify Navbar is included above banner

### Images not loading?
- Ensure images are in `/public/images/`
- Check file names match exactly (case-sensitive)
- Uncomment Image components in PageBanner.tsx

### Text not readable?
- Increase overlay opacity in banner background
- Darken background image
- Increase text shadow

### Navbar overlapping content?
- Add top padding to banner wrapper
- Use `pt-20 sm:pt-24` on the div wrapping PageBanner

---

## 📞 Need Help?

Refer to these files:
- Component code: `src/components/PageBanner.tsx`
- Example usage: `src/app/about-us/page.tsx`
- Image specs: `public/images/BANNER_IMAGE_REQUIREMENTS.md`
- This guide: `PAGE_BANNER_IMPLEMENTATION.md`

Your page banner system is complete and ready to use! 🚀
