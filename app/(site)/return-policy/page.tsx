export const metadata = {
  title: 'Return Policy - Vibes Consulting',
  description: 'Return and refund policy for Vibes Consulting services.'
}

export default function ReturnPolicyPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <h1 className="mb-8">Return Policy</h1>
      
      <div className="space-y-8 text-white/80">
        <section>
          <p className="text-sm text-white/60 mb-6">Last Updated: January 2025</p>
          <p>Vibes Consulting provides professional business consulting services. This Return Policy explains our approach to refunds, cancellations, and service satisfaction.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Service-Based Business</h2>
          <p>As a professional services firm, we deliver consulting, analysis, training, and implementation work. Once services are rendered, they cannot be "returned" in the traditional sense. However, we are committed to client satisfaction and fair business practices.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Satisfaction Guarantee</h2>
          <p className="mb-2">We stand behind the quality of our work. If you are not satisfied with our services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Communicate Early:</strong> Let us know immediately if you have concerns about deliverables, process, or outcomes</li>
            <li><strong>Good Faith Resolution:</strong> We will work with you in good faith to address issues and improve deliverables</li>
            <li><strong>Scope Adjustments:</strong> We can adjust scope or approach if expectations are misaligned</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Refund Policy by Package</h2>
          
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-white text-lg mb-3">The Flow Check ($2,500)</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Before Work Begins:</strong> Full refund if cancelled before kickoff call</li>
                <li><strong>During Discovery (Week 1):</strong> 50% refund if cancelled during discovery phase</li>
                <li><strong>After Analysis Begins (Week 2):</strong> No refund, but credit toward future services</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-white text-lg mb-3">The Flow Rebuild ($8,000)</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Before Work Begins:</strong> Full refund if cancelled before kickoff</li>
                <li><strong>Weeks 1-2:</strong> Prorated refund based on completed work</li>
                <li><strong>After Week 3:</strong> No refund, but we will complete contracted deliverables</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-white text-lg mb-3">The Vibe Partnership (Monthly Retainer)</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>3-Month Minimum:</strong> Commitment required for first quarter</li>
                <li><strong>After Initial Period:</strong> Cancel anytime with 30 days notice</li>
                <li><strong>No Mid-Month Refunds:</strong> Services are billed monthly and non-refundable once the month begins</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-white text-lg mb-3">Add-On Services</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Before Delivery:</strong> Full refund if cancelled before work begins</li>
                <li><strong>After Delivery:</strong> No refund, but we will revise based on feedback</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Cancellation Process</h2>
          <p className="mb-2">To cancel or request a refund:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Email us at <a href="mailto:hello@vibesconsulting.com" className="text-current-500 hover:underline">hello@vibesconsulting.com</a> with "Cancellation Request" in the subject line</li>
            <li>Include your name, service purchased, and reason for cancellation</li>
            <li>We will respond within 2 business days with next steps</li>
            <li>Approved refunds are processed within 10 business days</li>
          </ol>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Non-Refundable Circumstances</h2>
          <p className="mb-2">Refunds will not be provided in the following cases:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Client fails to provide requested information or access needed for service delivery</li>
            <li>Client does not attend scheduled meetings or respond to communications</li>
            <li>Client changes scope or expectations after work has begun</li>
            <li>Deliverables are completed according to agreed-upon specifications</li>
            <li>Client simply changes their mind after receiving deliverables</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Credit Transfers</h2>
          <p>In some cases, rather than issuing a refund, we may offer credit toward future services. Credits are:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Valid for 12 months from issue date</li>
            <li>Non-transferable</li>
            <li>Applied to future Vibes Consulting services only</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Disputes</h2>
          <p>If you are unsatisfied with our resolution of a refund request, we encourage open communication to find a mutually agreeable solution. We believe in fair dealing and will work in good faith to resolve disputes.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Changes to This Policy</h2>
          <p>We reserve the right to modify this Return Policy at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the modified policy.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Contact Us</h2>
          <p>Questions about our return policy or need to request a refund? Contact us:</p>
          <div className="mt-4 card p-4 inline-block">
            <p><strong className="text-white">Vibes Consulting</strong></p>
            <p>Santa Cruz, CA</p>
            <p>Email: <a href="mailto:hello@vibesconsulting.com" className="text-current-500 hover:underline">hello@vibesconsulting.com</a></p>
          </div>
        </section>
      </div>
    </div>
  )
}

