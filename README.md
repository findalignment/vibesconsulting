# Vibes Consulting

A modern website built with Next.js 14 (App Router) and Tailwind CSS.

## 🚀 Quick Start

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📦 Built With

- **Next.js 14.2.5** - React framework with App Router
- **React 18.3.1** - UI library
- **Tailwind CSS 3.4.10** - Utility-first CSS
- **TypeScript 5.6.3** - Type safety

## 🗂 Project Structure

```
.
├── app/
│   ├── (site)/              # Main site pages
│   │   ├── page.tsx         # Home
│   │   ├── about/
│   │   ├── blog/
│   │   ├── case-studies/
│   │   ├── contact/
│   │   ├── packages/
│   │   └── services/
│   ├── layout.tsx           # Root layout with Nav/Footer
│   ├── globals.css          # Global styles + Tailwind
│   ├── sitemap.ts           # SEO sitemap
│   └── robots.txt           # Crawler directives
├── components/
│   ├── Nav.tsx              # Navigation (client component)
│   ├── Footer.tsx
│   ├── CTAButton.tsx
│   ├── CaseStudyCard.tsx
│   └── Section.tsx
├── lib/
│   └── seo.ts               # Metadata helpers
├── content/
│   ├── blog/                # Markdown blog posts
│   └── case-studies/        # Markdown case studies
├── public/
│   ├── images/              # Image assets
│   │   ├── logo-mark.svg    ✅ Ready
│   │   ├── vibe-pattern.svg ✅ Ready
│   │   └── .placeholder-*   📝 Replace with your images
│   └── .placeholder-*       📝 Add og-image.png
└── IMAGE_GUIDE.md           # Complete image best practices
```

## 🎨 Brand Colors

- **Navy 900:** `#0C1B2A` (primary background)
- **Navy 800:** `#10243A`
- **Navy 700:** `#12324B`
- **Walnut:** `#7A5C45` (accent)
- **Sand:** `#EFECE7` (light accent)

## 📝 Next Steps

### 1. Add Your Images
See `IMAGE_GUIDE.md` for complete instructions.

**Quick version:**
- Add `public/images/hero.jpg` (1200×800px) - Main homepage image
- Add `public/og-image.png` (1200×630px) - Social media preview
- Optional: `public/images/flow-map.png` - Process diagrams

### 2. Update Contact Form
Replace the Formspree endpoint in `app/(site)/contact/page.tsx`:
```tsx
<form action="https://formspree.io/f/your-id" method="POST">
```
Get your ID at [formspree.io](https://formspree.io)

### 3. Update Domain URLs
Replace `https://vibes.consulting` in:
- `lib/seo.ts` - SEO metadata
- `app/sitemap.ts` - Sitemap base URL
- `app/robots.txt` - Sitemap reference

### 4. Customize Content
All copy is live in the page files. Update:
- `app/(site)/page.tsx` - Hero copy and value props
- `app/(site)/about/page.tsx` - Your story
- Package pricing in `app/(site)/packages/page.tsx`

### 5. Security Update (Optional)
One dependency vulnerability was detected. Review and fix:
```bash
npm audit
npm audit fix --force  # Only if needed
```

## 🛠 Development Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Auto-deploys on every push

### Other Platforms
Works with Netlify, Railway, or any Node.js host.

## 📚 Documentation

- **Image Management:** See `IMAGE_GUIDE.md`
- **Next.js App Router:** [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)

## 🎯 Brand Tone

- **Direct** over marketing fluff
- **Calm** over aggressive
- **Supportive** over critical
- **Flow** over force

## 📧 Contact

Questions? hello@vibes.consulting

---

**© 2025 Vibes Consulting — Santa Cruz, CA**

We fix the flow.
