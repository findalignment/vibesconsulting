export const metadata = {
  title: 'Privacy Policy - Vibes Consulting',
  description: 'Privacy policy for Vibes Consulting services and website usage.'
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <h1 className="mb-8">Privacy Policy</h1>
      
      <div className="space-y-8 text-white/80">
        <section>
          <p className="text-sm text-white/60 mb-6">Last Updated: January 2025</p>
          <p>Vibes Consulting ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services or visit our website.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Information We Collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-white text-lg mb-2">Information You Provide</h3>
              <p>When you contact us, book a consultation, or engage our services, we may collect:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Name and contact information (email, phone number)</li>
                <li>Business name and information</li>
                <li>Communication preferences</li>
                <li>Information you share during consultations or engagements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg mb-2">Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-2">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide and deliver our consulting services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you service-related communications</li>
            <li>Improve our website and services</li>
            <li>Analyze usage patterns and optimize user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Information Sharing</h2>
          <p className="mb-2">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website or conducting our business (e.g., email service providers, payment processors)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, safety, or property</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Data Security</h2>
          <p>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">AI and Data Processing</h2>
          <p className="mb-2">When we use AI tools as part of our services:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>We use business-grade AI accounts with data opt-out settings enabled</li>
            <li>We never input confidential client information into AI systems without explicit consent</li>
            <li>We follow strict protocols to protect sensitive business information</li>
            <li>Client data processed through AI tools is handled in accordance with our service agreements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Cookies and Tracking</h2>
          <p>Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-2">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (subject to legal obligations)</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Children's Privacy</h2>
          <p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-4">Contact Us</h2>
          <p>If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:</p>
          <div className="mt-4 card p-4 inline-block">
            <p><strong className="text-white">Vibes Consulting</strong></p>
            <p>Santa Cruz, CA</p>
            <p>Email: <a href="mailto:info@vibes.consulting" className="text-current-500 hover:underline">info@vibes.consulting</a></p>
          </div>
        </section>
      </div>
    </div>
  )
}

