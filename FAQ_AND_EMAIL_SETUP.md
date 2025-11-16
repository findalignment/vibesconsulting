# FAQ & Email Setup – How-To (Copy/Paste Ready)

This guide shows you how to:
- Add an FAQ accordion to any page in seconds
- Connect ConvertKit for email capture (footer, blog, lead magnets)

---

## 1) FAQ Accordion Anywhere

We added `components/FAQAccordion.tsx` that wraps the existing accordion.

### Usage
```tsx
import FAQAccordion from '@/components/FAQAccordion'

export default function Page() {
  const faq = [
    { question: 'How long does a Flow Check take?', answer: <p>Two weeks. You get a map, improvements, and a plan.</p> },
    { question: 'Do you work outside Santa Cruz?', answer: <p>Yes, remotely. On‑site by request.</p> },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">FAQ</h2>
      <FAQAccordion items={faq} />
    </div>
  )
}
```

### Notes
- Add as many Q/A items as you want; mobile friendly by default
- First item opens by default (inherits from BlogAccordion)
- Use simple `<p>`, lists, or links inside `answer`

---

## 2) ConvertKit – Email Capture

You can embed ConvertKit in two ways:

### A) Native HTML form (fastest)
Use ConvertKit “HTML” embed and paste into a component.

```tsx
// components/NewsletterInline.tsx
'use client'

export default function NewsletterInline() {
  return (
    <form
      action="https://app.convertkit.com/forms/YOUR_FORM_ID/subscriptions"
      method="post"
      className="space-y-3 md:space-y-4"
    >
      <input
        type="email"
        name="email_address"
        placeholder="you@company.com"
        required
        className="w-full bg-brand-base border border-brand-neutral rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
        aria-label="Email address"
      />
      {/* Optional first name */}
      <input
        type="text"
        name="first_name"
        placeholder="First name (optional)"
        className="w-full bg-brand-base border border-brand-neutral rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
        aria-label="First name"
      />
      {/* Honeypot spam field (hidden) */}
      <input type="text" name="fields[website]" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      {/* Redirect after success (optional) */}
      <input type="hidden" name="redirect" value="https://vibes.consulting/thanks" />

      <button className="btn btn-primary w-full" type="submit">Subscribe</button>
      <p className="text-xs text-brand-text/60">We send practical, local insights. Unsubscribe anytime.</p>
    </form>
  )
}
```

Replace `YOUR_FORM_ID` with the numeric ID from ConvertKit → Forms.

Place it anywhere:
```tsx
import NewsletterInline from '@/components/NewsletterInline'

<NewsletterInline />
```

### B) ConvertKit Javascript embed (as‑is)
ConvertKit gives you a JS `<script>` embed that injects styles/iframe. If you prefer that:

```tsx
// components/NewsletterEmbed.tsx
'use client'

export default function NewsletterEmbed() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
      <!-- ConvertKit Script Embed -->
      <script async data-uid="YOUR_UID" src="https://YOUR_SUBDOMAIN.ck.page/YOUR_UID/index.js"></script>
    ` }} />
  )
}
```

Notes:
- JS embed comes with ConvertKit’s own styling
- HTML method (A) uses your site’s styles and is lighter

---

## 3) Where To Put Email Capture

- Footer (site‑wide): small inline form with a single email field
- Contact page: below the form as a checkbox (e.g., “Send me monthly tips” → use a separate ConvertKit form/tag)
- Blog pages: at the end of high‑traffic posts (use relevant micro‑offer text)
- Blog hubs & services pages: small card “Get local ops tips” inline

### Micro‑copy examples
- “Santa Cruz ops tips, once a month. No fluff.”
- “Seasonal playbooks for locals. Get the next one.”
- “Fix one bottleneck a month. Join the list.”

---

## 4) ConvertKit Account Setup (10–20 min)

1) Create a Form (Inline)
- Form → Create → Inline → HTML embed
- Copy `form_id` or `JS embed uid`
- Decide: single field (email) or email + first name

2) Set Incentive / Double Opt‑In
- Enable incentive email or disable for single opt‑in (your call)
- If incentive: upload your lead magnet and set the download link

3) Domain Email Alignment
- Make sure you send from `info@vibes.consulting`
- Configure SPF/DKIM per your email host (improves inboxing)

4) Tags/Segments (optional but nice)
- Create tags like: `newsletter`, `flow-check-interest`, `ai-curious`
- If using separate forms, set each form to apply a tag

5) Test End‑to‑End
- Submit email → confirm receipt → verify appears as a subscriber
- If using redirect, confirm `/thanks` works

---

## 5) FAQ + Email Combo Pattern

- Add a small inline newsletter block directly after the FAQ on key pages:
```tsx
<FAQAccordion items={faq} />
<div className="mt-10 card p-6 bg-current-600/10">
  <h3 className="text-xl font-bold mb-3">Want monthly local ops tips?</h3>
  <NewsletterInline />
</div>
```

This turns Q&A traffic into subscribers without being pushy.

---

## 6) Troubleshooting

- ConvertKit form submits but no emails arrive
  - Check you used the **HTML action URL** or correct **JS uid**
  - Confirm SPF/DKIM for `info@vibes.consulting`
  - Check ConvertKit → Subscribers to see if entries are recorded

- Styling looks off
  - Prefer the HTML method to inherit site styles
  - Wrap the form in a `.card p-6` to match site UI

- GDPR/Consent text
  - Add a one‑line plain‑English note under the button: “We send 1 email/month. Unsubscribe anytime.”

---

## 7) What Not To Do (keeps it simple)
- Don’t add popups yet (use inline forms first)
- Don’t add multiple forms per page (one is enough)
- Don’t require first name unless you’ll use it (less friction)

---

You’re set. If you send me your ConvertKit form ID or JS UID, I’ll wire the first inline form and place it in the footer + one blog post to get you live quickly.
