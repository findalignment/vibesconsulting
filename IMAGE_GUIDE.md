# Image Management Best Practices for Vibes Consulting

## Overview

This guide explains the image asset strategy for your Next.js website, why we chose this approach, and how to update images in the future.

---

## What We Created

### ✅ SVG Placeholders (Already Created)
- `public/images/logo-mark.svg` - Your brand logo/icon
- `public/images/vibe-pattern.svg` - Subtle background pattern

**Why SVGs for these?**
- **Scalable:** Look perfect at any size (retina displays, large screens)
- **Tiny file size:** < 2KB each, load instantly
- **Editable:** Can be modified in any text editor or design tool
- **No generation needed:** Simple geometric shapes that work immediately

### 📝 Placeholder Files (Need Your Content)
- `.placeholder-hero.txt` → Replace with `hero.jpg`
- `.placeholder-flow-map.txt` → Replace with `flow-map.png`
- `.placeholder-og-image.txt` → Replace with `og-image.png`

**Why placeholder files instead of generated images?**
- **Authenticity:** Real photos/graphics match your brand better than AI placeholders
- **Quality control:** You choose the exact imagery that represents your business
- **Avoids confusion:** No need to replace "good enough" temporary images later
- **Clear next steps:** You know exactly what's needed

---

## Image Specifications

### 1. Hero Image (`/images/hero.jpg`)
**Purpose:** Main visual on homepage  
**Specs:**
- Dimensions: 1200×800px minimum (landscape)
- Format: JPG or WebP
- File size: < 500KB (use compression tools)
- Content ideas: 
  - Santa Cruz workspace or landscape
  - Abstract flowing shapes/water/movement
  - Professional office space with natural light
  - Person working with focus/ease

**Where it's used:**
```tsx
// app/(site)/page.tsx
<img src="/images/hero.jpg" alt="Flow" />
```

---

### 2. Flow Map (`/images/flow-map.png`)
**Purpose:** Visual diagram showing process transformation  
**Specs:**
- Dimensions: 1000×600px minimum
- Format: PNG (transparency) or SVG (preferred)
- File size: < 200KB
- Content: Before/after process flow, TQM diagram, or system map

**Not currently used but available for:**
- Blog posts about process improvement
- Case study visualizations
- Services page illustrations

---

### 3. Open Graph Image (`/og-image.png`)
**Purpose:** Social media preview when sharing your site  
**Specs:**
- Dimensions: **1200×630px (exact)** ← Critical for social platforms
- Format: PNG or JPG
- File size: < 1MB
- Design requirements:
  - **Large text** (readable at small sizes)
  - Your brand name + tagline
  - Safe zone: Keep content 120px from edges
  - Test preview at: https://www.opengraph.xyz/

**Example layout:**
```
┌─────────────────────────────────┐
│                                 │
│     VIBES CONSULTING            │
│     We fix the flow.            │
│                                 │
│     [logo or pattern]           │
└─────────────────────────────────┘
```

**Where it's configured:**
```tsx
// lib/seo.ts
export function createMetadata({ image = '/og-image.png' })
```

---

## How to Add/Update Images

### Step 1: Prepare Your Image
1. Resize to recommended dimensions (use Photoshop, Figma, or free tools like Squoosh.app)
2. Optimize file size:
   - JPG: Use 80-85% quality
   - PNG: Use TinyPNG.com or ImageOptim
   - WebP: Modern format, best quality/size ratio
3. Name it correctly: `hero.jpg`, `flow-map.png`, `og-image.png`

### Step 2: Add to Project
```bash
# From your project root
cp ~/Downloads/hero.jpg "public/images/hero.jpg"
cp ~/Downloads/og-image.png "public/og-image.png"
```

Or drag-and-drop into VS Code/Cursor:
- `/public/images/` folder for component images
- `/public/` root for og-image

### Step 3: Remove Placeholder Files (Optional)
```bash
rm public/images/.placeholder-*.txt
rm public/.placeholder-*.txt
```

### Step 4: Test Locally
```bash
npm run dev
# Visit http://localhost:3000
# Check that images load correctly
```

---

## Next.js Image Optimization (Optional Upgrade)

Currently using standard `<img>` tags with `images: { unoptimized: true }` in `next.config.ts`.

**To enable Next.js Image optimization:**

1. **Update next.config.ts:**
```ts
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Remove or comment out: images: { unoptimized: true },
}
```

2. **Replace `<img>` with `<Image>` component:**
```tsx
// Before
<img src="/images/hero.jpg" alt="Flow" />

// After
import Image from 'next/image'
<Image 
  src="/images/hero.jpg" 
  alt="Flow" 
  width={1200} 
  height={800}
  priority // for above-fold images
/>
```

**Benefits:**
- Automatic WebP conversion
- Responsive image srcsets
- Lazy loading
- Blur placeholder while loading

**Trade-off:** Requires deployment to Vercel or custom image optimization server

---

## Common Issues & Solutions

### Image not showing?
1. Check file path: `/public/images/hero.jpg` → Reference as `/images/hero.jpg` (no "public")
2. Check file name: Case-sensitive on production servers
3. Clear browser cache: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)

### Image too large/slow?
1. Use compression tools: [Squoosh.app](https://squoosh.app), [TinyPNG.com](https://tinypng.com)
2. Consider WebP format for better compression
3. For photos: JPG with 80% quality is usually perfect

### Social preview not updating?
1. LinkedIn/Twitter cache previews: Clear at [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. Facebook cache: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
3. Wait 24 hours for caches to expire naturally

---

## Tools & Resources

### Image Creation
- **Figma** (free): Design og-image and flow diagrams
- **Canva**: Quick social media graphics
- **Unsplash/Pexels**: Free stock photos (Santa Cruz, workspaces)

### Image Optimization
- **Squoosh.app**: Compress/resize in browser
- **TinyPNG.com**: Batch PNG/JPG compression
- **ImageOptim** (Mac): Desktop compression app

### Testing
- **OpenGraph.xyz**: Preview social media cards
- **Responsively.app**: Test responsive images

---

## Why This Approach?

### ✅ Pros
- **Fast initial setup:** SVGs work immediately, no generation wait
- **Authentic brand:** You control the visual identity
- **Production-ready:** Clear placeholders prevent "temp image" confusion
- **Best practice:** Standard Next.js public folder structure
- **Flexible:** Easy to swap images anytime

### ❌ What we avoided
- Generated placeholder images that look "AI-ish"
- Large bundled images that slow page load
- Complex image CDN setup before you need it
- Placeholder images you'd need to replace anyway

---

## Future Enhancements

When your site grows, consider:

1. **Image CDN**: Cloudinary or Imgix for dynamic resizing
2. **Next.js Image component**: Automatic optimization (see section above)
3. **WebP with fallbacks**: Best compression for modern browsers
4. **Blur placeholders**: Base64-encoded tiny previews for smoother loading

---

## Quick Reference

| File | Location | Format | Dimensions | Status |
|------|----------|--------|------------|--------|
| Logo | `/images/logo-mark.svg` | SVG | 32×32 | ✅ Ready |
| Pattern | `/images/vibe-pattern.svg` | SVG | 400×400 | ✅ Ready |
| Hero | `/images/hero.jpg` | JPG | 1200×800 | 📝 Add your image |
| Flow Map | `/images/flow-map.png` | PNG | 1000×600 | 📝 Optional |
| OG Image | `/og-image.png` | PNG | 1200×630 | 📝 Important for sharing |

---

## Need Help?

- Next.js Image docs: https://nextjs.org/docs/app/api-reference/components/image
- Open Graph guide: https://ogp.me/
- Image optimization: https://web.dev/fast/#optimize-your-images

Keep this file in your project root for future reference!

