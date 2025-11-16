import { Metadata } from 'next'
import Section from '@/components/Section'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Cybersecurity for Small Business: Scams, Hacking | Santa Cruz Protection',
  description: 'Protect your Santa Cruz small business from cyber threats, scams, and hacking. Essential security practices, tools, and protocols for non-technical business owners.',
  keywords: 'small business cybersecurity, hacking protection, phishing scams, data security, cyber threats, business security Santa Cruz, password security, ransomware protection',
  openGraph: {
    title: 'Cybersecurity for Small Business: Scams and Hacking Protection',
    description: 'Protect your business from cyber threats with essential security practices.',
    type: 'article',
    publishedTime: '2025-01-20T00:00:00Z',
    authors: ['Vibes Consulting'],
    url: 'https://vibes.consulting/blog/cybersecurity-for-small-business-scams-hacking-santa-cruz',
  },
}

export default function CybersecurityPage() {
  return (
    <div className="bg-white text-zinc-900">
      <Section width="default" className="pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">
          Cybersecurity for Small Business: Scams, Hacking
        </h1>
        <p className="text-xl text-zinc-600 mb-8">
          The essential cybersecurity guide for non-technical Santa Cruz business owners—protecting against scams, hacking, and data breaches without enterprise budgets or IT departments.
        </p>
        <div className="w-16 h-1 bg-purple-600"></div>
      </Section>

      <Section width="default" className="py-8">
        <div className="prose prose-lg max-w-none">
          
          <h2>The Threat You Don't See Coming</h2>
          
          <p>
            Monday morning email: "URGENT—Your invoice #7734 is overdue. Click here to pay immediately to avoid service interruption."
          </p>

          <p>
            You don't remember invoice #7734, but you don't want service interrupted. You click. Enter your bank account information. Submit.
          </p>

          <p>
            Two days later, $12,000 is missing from your business account. The "invoice" was fake. You just gave hackers direct access to your bank. And your business insurance doesn't cover it because you voluntarily provided the information.
          </p>

          <p>
            This happens to Santa Cruz small businesses regularly. Not because owners are stupid, but because:
          </p>

          <ul>
            <li>Scams are increasingly sophisticated</li>
            <li>You're busy and not thinking critically about every email</li>
            <li>You don't have IT staff to protect you</li>
            <li>Small businesses are attractive targets (easier to hack than big companies, often lack security)</li>
          </ul>

          <p>
            Cybersecurity isn't paranoia—it's essential business practice. Here's the minimum you need to know and do.
          </p>

          <h2>The 7 Essential Security Practices (Do These First)</h2>

          <h3>1. Use Password Manager (Non-Negotiable)</h3>

          <p>
            <strong>The problem:</strong> Reusing passwords across accounts. One breach compromises everything.
          </p>

          <p>
            <strong>The solution:</strong> Password manager (1Password, LastPass, Bitwarden)
          </p>

          <ul>
            <li>Generates unique, strong passwords for every account</li>
            <li>Stores them encrypted</li>
            <li>You remember ONE master password</li>
          </ul>

          <p>
            <strong>Cost:</strong> $3-10/month<br />
            <strong>Protection value:</strong> Prevents 60%+ of common hacking attempts
          </p>

          <h3>2. Enable Two-Factor Authentication (2FA) Everywhere</h3>

          <p>
            <strong>What it is:</strong> Second verification step after password (text code, app code, etc.)
          </p>

          <p>
            <strong>Enable 2FA on:</strong>
          </p>

          <ul>
            <li>Bank accounts (critical)</li>
            <li>Email (hackers target this first)</li>
            <li>Payment processors (Square, Stripe, PayPal)</li>
            <li>Social media accounts</li>
            <li>Any account with customer data</li>
          </ul>

          <p>
            <strong>Cost:</strong> Free<br />
            <strong>Protection value:</strong> Blocks 99%+ of automated account takeover attempts
          </p>

          <h3>3. Train Team on Phishing Recognition</h3>

          <p>
            <strong>Common Santa Cruz small business phishing scams:</strong>
          </p>

          <ul>
            <li><strong>"Urgent invoice" emails:</strong> Fake bills with payment links</li>
            <li><strong>"CEO needs gift cards":</strong> Impersonating owner asking employee to buy gift cards</li>
            <li><strong>"Account suspended":</strong> Fake alerts from banks, utilities, vendors</li>
            <li><strong>"Shipping problem":</strong> Fake FedEx/UPS links with malware</li>
          </ul>

          <p>
            <strong>Train employees to:</strong>
          </p>

          <ul>
            <li>Never click links in unexpected emails</li>
            <li>Verify requests directly (call the sender, don't reply to email)</li>
            <li>Check sender email carefully (paypal@secure-paypal.com is fake)</li>
            <li>Be suspicious of urgency ("Act now or lose account!")</li>
          </ul>

          <p>
            <strong>Monthly 5-minute reminder:</strong> Share recent scam examples. Keep awareness high.
          </p>

          <h3>4. Regular Backups (Automated)</h3>

          <p>
            <strong>What to backup:</strong>
          </p>

          <ul>
            <li>All business files (Google Drive, Dropbox automatically backs up)</li>
            <li>Customer database</li>
            <li>Financial records</li>
            <li>Website</li>
          </ul>

          <p>
            <strong>Backup frequency:</strong> Daily for critical data, weekly for everything else
          </p>

          <p>
            <strong>Storage:</strong> Cloud-based, off-site (if your location burns down, backups survive)
          </p>

          <p>
            <strong>Cost:</strong> $10-50/month<br />
            <strong>Insurance value:</strong> Can recover from ransomware, hardware failure, disasters
          </p>

          <h3>5. Keep Software Updated</h3>

          <p>
            <strong>Update monthly (or set to auto-update):</strong>
          </p>

          <ul>
            <li>Operating systems (Windows, MacOS)</li>
            <li>Browsers (Chrome, Safari, Firefox)</li>
            <li>Business applications</li>
            <li>POS software</li>
            <li>Website (WordPress, plugins, themes)</li>
          </ul>

          <p>
            <strong>Why:</strong> Updates patch security vulnerabilities. Old software = open door for hackers.
          </p>

          <h3>6. Secure Your WiFi Network</h3>

          <p>
            <strong>Essential WiFi security:</strong>
          </p>

          <ul>
            <li>Change default admin password on router (immediately)</li>
            <li>Use WPA3 encryption (or WPA2 minimum)</li>
            <li>Strong WiFi password (not "password123")</li>
            <li>Separate networks (business operations vs. guest WiFi)</li>
            <li>Hide network name (SSID) if possible</li>
          </ul>

          <h3>7. Limit Access to Sensitive Systems</h3>

          <p>
            <strong>Principle of least privilege:</strong> Employees should only access systems they need for their job
          </p>

          <ul>
            <li>Not everyone needs bank account access</li>
            <li>Not everyone needs admin rights to POS</li>
            <li>Not everyone needs customer database access</li>
          </ul>

          <p>
            <strong>Why:</strong> Reduces damage if employee account is compromised
          </p>

          <h2>Common Santa Cruz Business Cyber Scams</h2>

          <h3>Scam #1: Fake Vendor Invoice</h3>

          <p>
            <strong>Email says:</strong> "Updated invoice attached, please pay immediately"<br />
            <strong>Reality:</strong> Fake invoice with fake payment link or bank account<br />
            <strong>Prevention:</strong> Always verify invoice changes by calling vendor directly (use phone number you already have, not one in email)
          </p>

          <h3>Scam #2: "CEO" Gift Card Request</h3>

          <p>
            <strong>Email says:</strong> "Hi, I need you to buy $500 in gift cards for a client emergency. I'll reimburse." Appears to come from owner/boss.<br />
            <strong>Reality:</strong> Hacker spoofed email address<br />
            <strong>Prevention:</strong> Establish policy: "We never request gift card purchases via email. Always verify in person or phone."
          </p>

          <h3>Scam #3: Fake Domain/Website Renewal</h3>

          <p>
            <strong>Email says:</strong> "Your domain is expiring. Renew now for $299/year."<br />
            <strong>Reality:</strong> Your domain isn't expiring, or price is 10x actual cost<br />
            <strong>Prevention:</strong> Know your actual registrar (GoDaddy, Namecheap, etc.). Verify renewal notices directly on registrar website.
          </p>

          <h2>Essential Security Tools ($50-150/month Total)</h2>

          <ul>
            <li><strong>Password Manager:</strong> 1Password ($7/month) or Bitwarden (free)</li>
            <li><strong>Antivirus/Malware:</strong> Malwarebytes ($40/year per computer)</li>
            <li><strong>Website Security:</strong> Wordfence or Sucuri ($100-200/year if WordPress)</li>
            <li><strong>Backup Service:</strong> Backblaze or cloud storage ($10-30/month)</li>
            <li><strong>VPN (if working remotely):</strong> NordVPN or ExpressVPN ($5-12/month)</li>
          </ul>

          <p>
            <strong>Total:</strong> ~$50-150/month for comprehensive small business security<br />
            <strong>vs. Average cost of breach:</strong> $10,000-50,000+ (downtime, recovery, lost data, reputation)
          </p>

          <h2>The Bottom Line: Basic Security Prevents 90% of Attacks</h2>

          <p>
            You don't need enterprise security. You need basics done consistently:
          </p>

          <ol>
            <li>Strong, unique passwords (use password manager)</li>
            <li>Two-factor authentication on critical accounts</li>
            <li>Employee training on scam recognition</li>
            <li>Regular backups</li>
            <li>Software updates</li>
            <li>Secure WiFi</li>
            <li>Limited access controls</li>
          </ol>

          <p>
            <strong>Implement these 7 practices this month.</strong> Combined cost: under $200/month. Protection value: thousands in prevented losses.
          </p>

          <p>
            Cybersecurity isn't optional anymore. It's baseline business hygiene. Get it right once, maintain it consistently, sleep better.
          </p>

        </div>
      </Section>

      <Section width="default" className="py-16 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-zinc-900">Need Cybersecurity Guidance?</h2>
          <p className="text-xl text-zinc-600 mb-8">
            We help Santa Cruz businesses implement security systems, train teams on threat recognition, and build protection appropriate to your risk level.
          </p>
          <CTAButton href="/contact" text="Let's Secure Your Business" />
        </div>
      </Section>
    </div>
  )
}


