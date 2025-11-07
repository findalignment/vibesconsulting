# Lead Magnets Setup Guide

This site has 3 lead magnets designed to capture email addresses and qualify leads. Each one targets a specific pain point and guides visitors toward your paid services.

---

## 📋 Lead Magnet Pages

### 1. **5 Signs Your Business Needs Better Systems**
- **URL:** https://vibes.consulting/resources/5-signs
- **Target Audience:** Business owners who suspect they have operational issues but can't articulate them
- **Pain Point:** Invisible friction, feeling overwhelmed, can't take vacation
- **Converts To:** Flow Check package
- **Best For:** Blog post CTAs, social media, email signature

### 2. **The 10-Minute Operations Audit**
- **URL:** https://vibes.consulting/resources/10-minute-audit
- **Target Audience:** DIY business owners who want to self-diagnose before reaching out
- **Pain Point:** Not sure where to start, want to identify the #1 bottleneck
- **Converts To:** Flow Check or Flow Rebuild packages
- **Best For:** LinkedIn posts, website popup, consultation call follow-up

### 3. **The Delegation Framework**
- **URL:** https://vibes.consulting/resources/delegation-framework
- **Target Audience:** Founders who are bottlenecks, can't let go of control
- **Pain Point:** Everything runs through them, team asks permission for everything
- **Converts To:** Business Flow service
- **Best For:** Email nurture sequence, webinar lead magnet, direct outreach

---

## 🔧 Setup Instructions

Right now, the forms are static HTML. You need to connect them to an email service provider (ESP) to actually capture emails.

### Option 1: Formspree (Easiest - Free for 50 submissions/month)

1. Go to https://formspree.io and create a free account
2. Create a new form for each lead magnet:
   - "5 Signs Form"
   - "10 Min Audit Form"
   - "Delegation Framework Form"
3. Copy the form endpoint URL (e.g., `https://formspree.io/f/abc123`)
4. Update each resource page's `<form>` tag:

```tsx
// Replace this:
<form className="space-y-4">

// With this:
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4">
```

5. Formspree will email you when someone submits
6. Optional: Set up Formspree to forward to your ESP (Mailchimp, ConvertKit, etc.)

### Option 2: ConvertKit (Best for Email Marketing - $9-29/month)

1. Sign up at https://convertkit.com
2. Create a "Form" for each lead magnet in ConvertKit
3. Use ConvertKit's custom HTML form option
4. Replace the form HTML on each page with ConvertKit's embed code
5. Set up automated email sequences to deliver the PDF

### Option 3: Mailchimp (Popular - Free for 500 contacts)

1. Sign up at https://mailchimp.com
2. Create an "Audience" (or use existing)
3. Create a "Landing Page" or "Embedded Form" for each magnet
4. Copy the form HTML and replace the forms on your site
5. Set up automation to send welcome email with PDF

### Option 4: HubSpot (Most Powerful - Free tier available)

1. Sign up at https://hubspot.com
2. Create a "Form" in Marketing > Forms
3. Add fields: Name, Email, Business Type/Role
4. Copy the embed code
5. Replace form HTML on each page
6. Set up workflows to deliver content and tag leads

---

## 📄 Create the PDFs

You'll need to create the actual downloadable PDFs. Each page references a PDF that gets sent after form submission.

### What to Include in Each PDF:

#### **5 Signs Guide (8-10 pages)**
- Cover page
- Introduction (why these signs matter)
- Sign #1: Can't Take a Vacation (1-2 pages)
- Sign #2: Everything Runs Through You (1-2 pages)
- Sign #3: Repeating Same Conversations (1-2 pages)
- Sign #4: New Hires Take Forever (1-2 pages)
- Sign #5: Revenue Up, Profits Flat (1-2 pages)
- What to Do Next (CTA to Flow Check)
- Contact page

#### **10-Minute Audit (6-8 pages)**
- Cover page
- How to Use This Audit
- The 20 Questions (checklist format)
- Scoring Guide
- What Your Score Means (0-5, 6-10, 11-15, 16-20)
- Recommended Next Steps for Each Score Range
- Contact page

#### **Delegation Framework (10-12 pages)**
- Cover page
- Why Delegation Fails (intro)
- The 3-Tier Decision Framework (visual diagram)
- Task Audit Template (worksheet)
- Delegation Conversation Script (copy-paste template)
- Expectation-Setting Checklist
- Feedback Loop System (when to check in, what to ask)
- Common Mistakes to Avoid
- Implementation Timeline (30/60/90 days)
- Contact page

### Design Options:

**DIY (Free):**
- Use Canva (canva.com/templates) - tons of guide templates
- Use Google Docs/Slides, export as PDF
- Keep it simple: good typography, your brand colors, clean layout

**Outsource ($20-100 per PDF):**
- Fiverr - search "lead magnet design" or "PDF guide design"
- Upwork - hire a designer for a few hours
- 99designs - post a design contest

**Brand Consistency:**
- Use your site colors (current teal/blue accent)
- Include your logo on each page
- Use the same font as your website (or similar)
- Keep it clean and readable (not too "designed")

---

## 🎯 How to Use These Lead Magnets

### 1. Add CTAs to Blog Posts
Edit relevant blog posts to include inline CTAs like:

```tsx
<div className="bg-current-600/10 p-6 rounded-lg my-8">
  <p className="font-semibold text-white mb-2">Struggling with delegation?</p>
  <p className="text-white/70 text-sm mb-4">
    Download our free Delegation Framework to learn the exact system we use with clients.
  </p>
  <Link href="/resources/delegation-framework" className="text-current-500 hover:underline text-sm">
    Get the framework →
  </Link>
</div>
```

**Suggested placements:**
- "5 Signs" - Bottom of all operational blog posts
- "10-Min Audit" - Mid-article in "systems" posts
- "Delegation Framework" - Any post about founder bottleneck

### 2. Exit Intent Popup
Add a popup that shows when someone is about to leave:
- "Before you go - grab our free guide"
- Shows on blog posts after 30 seconds or on exit intent
- Tools: OptinMonster, Sumo, ConvertBox

### 3. Homepage Hero
Consider adding a lead magnet option to homepage CTA:
- Primary CTA: "Schedule Intro Call"
- Secondary CTA: "Get Free Audit" (less commitment)

### 4. Email Signature
Add to your email signature:
```
PS - Wondering if your business needs better systems? Take our 10-minute audit: vibes.consulting/resources/10-minute-audit
```

### 5. LinkedIn/Social
- Post about each resource
- Pin one to your LinkedIn profile
- Share in relevant Facebook/LinkedIn groups
- Include in bio links

### 6. Follow-Up Sequence
After someone downloads, send them:
- Day 0: Immediate delivery of PDF
- Day 2: "Did you complete the audit? Here's what to do with your results"
- Day 5: Case study or relevant blog post
- Day 7: "Ready to fix this? Here's how we can help" (pitch your packages)

---

## 📊 Tracking & Analytics

Once you have email capture set up, track:
- Conversion rate (visitors → downloads)
- Which lead magnet performs best
- Which traffic sources convert best (blog, social, direct)
- How many leads turn into consultations
- How many consultations turn into clients

Tools:
- Google Analytics 4 (track form submissions as events)
- Your ESP's analytics (open rates, click rates)
- Simple spreadsheet to track leads → calls → sales

---

## 🚀 Quick Start Checklist

- [ ] Sign up for Formspree or ConvertKit
- [ ] Update form actions on all 3 resource pages
- [ ] Create 3 PDFs (or hire someone on Fiverr)
- [ ] Upload PDFs to your email provider
- [ ] Set up automated email to deliver PDF on form submit
- [ ] Test each form with your own email
- [ ] Add lead magnet CTAs to 5-10 blog posts
- [ ] Share on social media
- [ ] Add to email signature
- [ ] Set up analytics tracking

---

## 💡 Pro Tips

1. **Start with one** - Don't try to perfect all 3 at once. Start with the 10-Min Audit (easiest to create).

2. **Keep PDFs simple** - Content matters more than design. A Google Doc PDF is better than no PDF.

3. **Test the journey** - Submit each form yourself. Make sure the email arrives, PDF works, and messaging is clear.

4. **Segment your list** - Tag people based on which magnet they download. Someone who downloads the Delegation Framework is more ready to buy than someone downloading "5 Signs".

5. **Promote consistently** - Link to these in every piece of content you create. They're only valuable if people see them.

6. **Track which converts** - After 30 days, see which lead magnet actually turns into consultations. Double down on that one.

---

## 🔗 Quick Reference Links

- **5 Signs:** https://vibes.consulting/resources/5-signs
- **10-Min Audit:** https://vibes.consulting/resources/10-minute-audit  
- **Delegation Framework:** https://vibes.consulting/resources/delegation-framework
- **FAQ Page:** https://vibes.consulting/faq

All lead magnets are also linked in the site footer under "Resources".

---

## Need Help?

If you get stuck on any of this:
1. Formspree setup: https://help.formspree.io
2. ConvertKit setup: https://help.convertkit.com
3. Canva tutorials: YouTube "how to create lead magnet in Canva"
4. Fiverr designers: Search "PDF guide design" or "lead magnet design"

Or just email me if you run into issues!

