# Vibes Consulting

**We refactor businesses the way you refactor code.**

Most small businesses run on implicit processes, tribal knowledge, and heroic effort. It works until it doesn't. Then everything becomes technical debt: the founder is the single point of failure, new hires take months to onboard, and every decision requires manual intervention.

We fix the flow.

---

## The Problem (In Developer Terms)

Your business operations have the same problems you fix in code every day:

- **No separation of concerns** - The founder handles everything from architecture to deployment
- **Tight coupling** - One person goes on vacation and the whole system breaks
- **Missing documentation** - Knowledge lives in people's heads, not in accessible systems  
- **No CI/CD** - Every process requires manual execution and review
- **Tech debt everywhere** - "We'll fix it later" became "we can't change anything"
- **Poor error handling** - Problems don't surface until they're catastrophic

You wouldn't ship code like this. Why run a business like this?

---

## What We Do

We apply systems thinking to business operations:

### 1. **Audit the System**
Like a code review, but for your entire workflow. We identify bottlenecks, redundancies, single points of failure, and latency.

### 2. **Refactor for Clarity**
Document processes. Define decision boundaries. Separate concerns. Make the implicit explicit.

### 3. **Automate the Repetitive**
If it runs more than twice, it should be automated. We implement AI and workflow tools that actually fit your stack.

### 4. **Build for Maintainability**
Systems that can be updated, handed off, and scaled without breaking everything downstream.

### 5. **Measure What Matters**
Instrumenting operations so you know what's working, what's broken, and where the next failure will be.

---

## Services

### **Business Flow Consulting**
Operational architecture for small teams. Process mapping, documentation, decision frameworks. Think of it as writing the README your business never had.

**Best for:** Founder bottlenecks, missing SOPs, onboarding chaos

### **AI Integration**
Practical automation without the hype. We help you use AI safely for admin tasks, documentation, and knowledge management. No hallucinating chatbots facing customers.

**Best for:** Repetitive tasks, data privacy concerns, non-technical teams

### **Culture Optimization**
Culture isn't ping pong tables. It's your operating system. We redesign rituals, communication patterns, and feedback loops so people can actually do their best work.

**Best for:** High turnover, meeting overload, burnout

---

## How This Site Works (Technical Details)

Built with a focus on speed, maintainability, and SEO.

### **Tech Stack**

```
Next.js 14.2.5      → App Router, React Server Components
React 18.3.1        → UI
TypeScript 5.6.3    → Type safety
Tailwind CSS 3.4.10 → Utility-first styling
```

### **Architecture**

```
app/
├── (site)/              # Route group (shared layout)
│   ├── page.tsx         # Homepage
│   ├── services/        # Service pages (nested routes)
│   ├── packages/        # Package pages (nested routes)
│   ├── blog/            # 84 blog posts (static generation)
│   ├── case-studies/    # Client work examples
│   ├── resources/       # Lead magnets (gated content)
│   └── faq/             # Accordion-based FAQ
├── layout.tsx           # Root layout (Nav + Footer)
├── globals.css          # Tailwind + custom styles
├── sitemap.ts           # Dynamic sitemap generation
└── robots.txt           # Crawler config

components/
├── Nav.tsx              # Responsive nav (client component)
├── Footer.tsx           # Site footer with links
├── BlogAccordion.tsx    # Collapsible sections (client component)
└── [other components]   # Shared UI components

lib/
└── seo.ts               # Metadata utilities

public/
└── images/              # Static assets
```

### **Key Features**

- **Static Generation:** All pages pre-rendered at build time (fast TTI)
- **SEO Optimized:** Meta tags, sitemap, structured data, geo-targeting
- **Mobile First:** Responsive design, hamburger nav, touch-optimized
- **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation
- **Lead Capture:** 3 lead magnets with form integration points
- **Blog System:** 84 geo-targeted posts with accordion UI for readability

---

## Development

### **Quick Start**

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

### **Commands**

```bash
npm run dev      # Dev server (hot reload)
npm run build    # Production build (static export)
npm run start    # Production preview
npm run lint     # ESLint check
```

### **Build Output**

```bash
npm run build
```

Generates 170+ static pages in `.next/`:
- All service/package detail pages
- 84 blog posts (SEO + geo-targeted)
- 3 lead magnet pages
- FAQ with accordions
- Sitemap + robots.txt

### **Environment**

No `.env` needed for static pages. Optional for:
- Form submission (Formspree/ConvertKit API keys)
- Analytics (GA4 tracking ID)
- Email capture (ESP webhook URLs)

---

## Customization

### **Brand Colors**

Defined in `tailwind.config.ts`:

```typescript
colors: {
  'current-400': '#88B4C8',  // Light accent
  'current-500': '#5A96B3',  // Primary accent
  'current-600': '#3C7A99',  // Dark accent
  'current-700': '#2E5F7A',
  'current-800': '#1E3F52',
}
```

Change these to match your brand.

### **Typography**

Uses system font stack for performance:

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...
```

Override in `globals.css` if you want custom fonts.

### **Navigation**

Edit `components/Nav.tsx`:

```typescript
const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  // Add/remove as needed
]
```

### **Footer**

Edit `components/Footer.tsx` for link structure and columns.

---

## SEO Strategy

This site is optimized for `santa cruz business consulting` and related local searches:

- 84 blog posts targeting local pain points + operations keywords
- Location-specific content throughout
- Internal linking between services/packages/blog
- Structured metadata on every page
- Fast load times (static generation)

**Result:** High visibility for geo-targeted B2B searches without paid ads.

---

## Lead Generation System

Built-in lead capture with 3 gated resources:

1. **5 Signs Your Business Needs Better Systems** (`/resources/5-signs`)
2. **10-Minute Operations Audit** (`/resources/10-minute-audit`)
3. **Delegation Framework** (`/resources/delegation-framework`)

Each has:
- Professional landing page
- Form (needs ESP integration)
- Clear value prop
- Conversion to paid services

See `LEAD_MAGNETS_SETUP.md` for implementation guide.

---

## Deployment

### **Vercel (Recommended)**

```bash
git push origin main
```

Auto-deploys on push. Zero config needed.

### **Other Platforms**

Works on Netlify, Railway, Cloudflare Pages, or any static host.

Build command: `npm run build`  
Output directory: `.next/`

---

## Philosophy

We built this site the way we build systems for clients:

- **Clear structure** - Easy to navigate, maintain, and scale
- **No bloat** - Only dependencies we actually use
- **Fast by default** - Static generation, minimal JS
- **Maintainable** - TypeScript, consistent patterns, documented
- **Conversion-focused** - Every page has a clear next action

If you're reading this and thinking "this is how businesses should operate," you're right. And that's what we help companies do.

---

## Contact

Questions about the site or the business?  
**info@vibes.consulting**

Based in **Santa Cruz, CA** - Working with small businesses everywhere.

---

**© 2025 Vibes Consulting**

*We fix the flow.*
