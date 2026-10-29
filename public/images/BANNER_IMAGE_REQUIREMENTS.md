# Page Banner Image Requirements

## 🖼️ Required Images for Page Banners

### 1. Background Image
**Filename:** `page_banner_bg.jpg`  
**Location:** `/public/images/`  
**Dimensions:** 1920x500px (recommended minimum)  
**Aspect Ratio:** ~3.8:1 (wide banner format)  
**File Size:** < 500KB (optimized for web)  

**Description:**
- Space/cosmic theme with planets and stars
- Dark atmospheric background (blacks, dark blues, purples)
- Should have good contrast for white text overlay
- Similar to the reference image with planet on top right

**Style Guidelines:**
- Deep space atmosphere
- Subtle lighting from planets/stars
- Professional, cinematic quality
- Not too busy - text needs to be readable

---

### 2. Astronaut Character
**Filename:** `astronaut_banner.png`  
**Location:** `/public/images/`  
**Dimensions:** 360x400px (width x height)  
**Format:** PNG with transparency  
**File Size:** < 200KB

**Description:**
- Full body astronaut in space suit
- Facing forward or slightly angled
- Black and yellow/golden (#FFD400) color scheme
- Standing pose, professional stance
- Transparent background

**Positioning:**
- Will be placed at bottom-right of banner
- Should have space above head for planet overlay
- Arms can be in various positions (holding tablet, waving, etc.)

---

### 3. Robot/Droid Companion (Optional)
**Filename:** `droid_companion.png`  
**Location:** `/public/images/`  
**Dimensions:** 100x120px (width x height)  
**Format:** PNG with transparency  
**File Size:** < 100KB

**Description:**
- Small robot/droid character (R2D2 style)
- Complements the astronaut
- Yellow/golden accents
- Cute, friendly appearance
- Transparent background

---

## 📐 Technical Specifications

### Image Optimization
- **Format**: JPG for backgrounds, PNG for characters with transparency
- **Compression**: Use tools like TinyPNG or ImageOptim
- **Color Profile**: sRGB
- **Quality**: 85-90% for JPG, lossless for PNG characters

### Responsive Behavior
The banner component handles these breakpoints:
- **Mobile**: 400px height
- **Tablet**: 450px height  
- **Desktop**: 500px height

Images will scale proportionally using Next.js Image component.

---

## 🎨 Creating/Sourcing Images

### Option 1: AI Generation
Use AI tools with these prompts:

**Background:**
```
"Cinematic deep space background, distant planet in upper right corner, 
dark atmosphere with stars and nebula, professional space photography, 
ultra wide banner format, dark navy and black colors, 4K quality"
```

**Astronaut:**
```
"Professional 3D rendered astronaut character in black and yellow space suit, 
full body standing pose, transparent background, front view, clean design, 
modern tech aesthetic, PNG with alpha channel"
```

**Tools:** Midjourney, Leonardo.ai, DALL-E 3

### Option 2: Stock Images
Search on:
- **Unsplash** (free space backgrounds)
- **Pexels** (free stock photos)
- **TurboSquid** (3D astronaut models)
- **Sketchfab** (3D characters)

### Option 3: Use Existing Assets
You already have:
- `astronaut.glb` - Can be rendered and exported as PNG
- Space backgrounds in your public folder

---

## 🔧 Integration Steps

### 1. Add Background Image
```tsx
<PageBanner
  title="ABOUT RND"
  breadcrumb="ABOUT US"
  backgroundImage="/images/page_banner_bg.jpg"
  showAstronaut={true}
/>
```

### 2. Add Astronaut (in PageBanner.tsx)
Uncomment this section (line ~30):
```tsx
<Image
  src="/images/astronaut_banner.png"
  alt="Astronaut"
  fill
  className="object-contain object-bottom"
  sizes="(max-width: 768px) 280px, 360px"
/>
```

### 3. Add Droid (optional, in PageBanner.tsx)
Uncomment the droid section (line ~48):
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

## 📋 Current Component Features

### ✅ Already Implemented
- Responsive height (400-500px)
- Next.js Image optimization
- Lazy loading
- Proper aspect ratios
- Dark overlay for text readability
- Breadcrumb navigation
- Sticky navbar integration

### 🎯 Image Placement
- **Background**: Covers full banner with 40% opacity
- **Planet**: Top right corner (CSS gradient placeholder)
- **Astronaut**: Bottom right, scales with viewport
- **Droid**: Next to astronaut, slightly smaller

---

## 💡 Temporary Workaround

Until you have actual images, the component uses:
- **Background**: Gray placeholder with dark overlay
- **Astronaut**: SVG icon with glow effect
- **Planet**: CSS gradient blur effect

Everything is styled and positioned correctly - just swap in real images!

---

## 📱 Usage Examples

### Basic Usage
```tsx
<PageBanner
  title="ABOUT RND"
  breadcrumb="ABOUT US"
/>
```

### Custom Background
```tsx
<PageBanner
  title="OUR SERVICES"
  breadcrumb="SERVICES"
  backgroundImage="/images/services_banner.jpg"
/>
```

### Without Astronaut
```tsx
<PageBanner
  title="CONTACT US"
  breadcrumb="CONTACT"
  showAstronaut={false}
/>
```

### Highlight RND in Title
The component automatically highlights "RND" in yellow:
```tsx
<PageBanner title="ABOUT RND" /> // "RND" will be yellow
```

---

## 🚀 Quick Start Checklist

1. ✅ Component created (`PageBanner.tsx`)
2. ✅ About Us page example created
3. ✅ Responsive sizing configured
4. ✅ Font families applied (Bebas Neue + Jakarta)
5. ⬜ Add `page_banner_bg.jpg` to `/public/images/`
6. ⬜ Add `astronaut_banner.png` to `/public/images/`
7. ⬜ Uncomment image components in `PageBanner.tsx`
8. ⬜ Test on different screen sizes

Your page banners are ready to go! 🎉
