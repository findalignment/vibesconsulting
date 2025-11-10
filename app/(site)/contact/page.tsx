export const metadata = { title: 'Contact - Vibes Consulting' }

export default function ContactPage() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <h1>Fix your flow</h1>
        <p className="mt-3 text-brand-text/70 max-w-xl">Tell us where it feels sticky. We'll reply within one business day with next steps and a link to book your Flow Check.</p>
        <div className="card p-8 mt-8">
          <form action="https://formspree.io/f/your-id" method="POST" className="space-y-4">
            <input 
              className="w-full bg-brand-base border border-brand-neutral rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors" 
              placeholder="Name" 
              name="name" 
              required 
            />
            <input 
              className="w-full bg-brand-base border border-brand-neutral rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors" 
              placeholder="Email" 
              name="email" 
              type="email" 
              required 
            />
            <textarea 
              className="w-full bg-brand-base border border-brand-neutral rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors" 
              placeholder="Where is the friction showing up?" 
              name="message" 
              rows={6}
              required
            />
            <button className="btn btn-primary w-full" type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="card p-8">
        <h3 className="mb-6">What happens next</h3>
        <ol className="list-decimal pl-6 text-brand-text/80 space-y-3 text-lg">
          <li>We review your note and reply with clarifying questions.</li>
          <li>Book a 30-min intro call.</li>
          <li>If it's a fit, start the two-week Flow Check.</li>
        </ol>
      </div>
    </div>
  )
}

