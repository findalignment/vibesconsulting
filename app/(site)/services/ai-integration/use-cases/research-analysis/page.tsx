import Link from 'next/link'

export const metadata = { title: 'Research & Data Analysis — AI Use Case' }

export default function ResearchAnalysisPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/ai-integration" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to AI Integration
      </Link>

      <h1 className="mb-4">Research & Data Analysis</h1>
      <p className="text-xl text-white/90 mb-8">Use AI to synthesize information, analyze trends, and extract insights from large datasets.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">Common Applications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Market Research</h3>
              <p className="text-white/70 text-xs">AI reads competitor websites, industry reports, and news articles. Summarizes key trends and insights.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Customer Feedback Analysis</h3>
              <p className="text-white/70 text-xs">AI processes hundreds of reviews, surveys, or comments. Identifies common themes and sentiment.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Document Synthesis</h3>
              <p className="text-white/70 text-xs">AI reads multiple long documents (reports, contracts, articles) and creates unified summaries.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Trend Spotting</h3>
              <p className="text-white/70 text-xs">AI analyzes sales data, web traffic, or social media to identify emerging patterns.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Competitive Analysis</h3>
              <p className="text-white/70 text-xs">AI monitors competitor pricing, positioning, and messaging. Flags significant changes.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Report Generation</h3>
              <p className="text-white/70 text-xs">AI turns raw data into formatted reports with charts, summaries, and recommendations.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">1. Feed AI Your Data</h3>
              <p className="text-white/70 text-sm mb-3">Upload documents, paste text, or connect data sources. AI tools can process PDFs, spreadsheets, websites, and more.</p>
              <p className="text-white/60 text-xs">Important: Anonymize any sensitive information before uploading to public AI tools.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">2. Ask Specific Questions</h3>
              <p className="text-white/70 text-sm mb-3">Instead of "analyze this," ask "What are the top 3 customer complaints in these reviews?" or "How does our pricing compare to competitors?"</p>
              <p className="text-white/60 text-xs">Specificity = better results. Vague prompts get vague answers.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">3. AI Processes & Synthesizes</h3>
              <p className="text-white/70 text-sm mb-3">In minutes, AI reads through hundreds of pages or thousands of data points. Identifies patterns humans would miss or take hours to find.</p>
              <p className="text-white/60 text-xs">Example: "After analyzing 500 customer reviews, the top 3 complaints are: wait times (mentioned 127x), pricing confusion (94x), and limited hours (76x)."</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">4. You Validate & Act</h3>
              <p className="text-white/70 text-sm mb-3">AI provides the insight, you decide what to do with it. Always verify critical findings before making business decisions.</p>
              <p className="text-white/60 text-xs">AI accelerates research, but human judgment is still essential.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Real Example: Retail Shop Analysis</h2>
          <div className="card p-6 bg-current-600/10">
            <p className="text-white/90 font-medium mb-3">Boutique Retail Store (Online + Physical)</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white text-sm font-medium mb-1">Challenge:</h4>
                <p className="text-white/70 text-xs">Owner wanted to understand why online sales were flat despite growing traffic. Had 300+ customer reviews and 2 years of sales data but no time to analyze.</p>
              </div>
              
              <div>
                <h4 className="text-white text-sm font-medium mb-1">AI Process:</h4>
                <ul className="text-white/70 text-xs space-y-1 pl-3">
                  <li>• Fed all reviews into ChatGPT (anonymized)</li>
                  <li>• Asked: "What are the most common complaints?"</li>
                  <li>• Asked: "What do customers praise most?"</li>
                  <li>• Cross-referenced with sales data in spreadsheet</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white text-sm font-medium mb-1">AI Findings (in 20 minutes):</h4>
                <ul className="text-white/70 text-xs space-y-1 pl-3">
                  <li>• Customers loved product quality but found checkout confusing</li>
                  <li>• Shipping costs mentioned negatively 47 times</li>
                  <li>• "Wish I could see this in person first" appeared 23 times</li>
                  <li>• Cart abandonment correlated with shipping cost display timing</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white text-sm font-medium mb-1">Actions Taken:</h4>
                <ul className="text-white/70 text-xs space-y-1 pl-3">
                  <li>• Simplified checkout flow</li>
                  <li>• Added free shipping threshold</li>
                  <li>• Created "try before you buy" local pickup option</li>
                </ul>
              </div>
            </div>
            
            <p className="text-white/60 text-xs mt-4"><strong>Result:</strong> Online sales increased 23% over next quarter. Owner would have spent 15+ hours doing this analysis manually.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Tools We Recommend</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">ChatGPT (Plus or Enterprise)</h3>
              <p className="text-white/70 text-sm mb-2">Can read PDFs, analyze data, synthesize information from multiple sources. Most versatile option.</p>
              <p className="text-white/60 text-xs"><strong>Cost:</strong> Plus at $20/month, Enterprise pricing varies</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Claude (Anthropic)</h3>
              <p className="text-white/70 text-sm mb-2">Excellent for document analysis and synthesis. Can process very long documents (100k+ words).</p>
              <p className="text-white/60 text-xs"><strong>Cost:</strong> Pro at $20/month</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Perplexity AI</h3>
              <p className="text-white/70 text-sm mb-2">AI research assistant that cites sources. Great for market research and competitive analysis.</p>
              <p className="text-white/60 text-xs"><strong>Cost:</strong> Free tier available, Pro at $20/month</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">MonkeyLearn or Levity AI</h3>
              <p className="text-white/70 text-sm mb-2">Specialized tools for customer feedback analysis and sentiment tracking.</p>
              <p className="text-white/60 text-xs"><strong>Cost:</strong> Starting at $299/month (for high-volume analysis)</p>
            </div>
          </div>
          
          <p className="text-white/70 text-sm mt-4">We match tools to your specific research needs and budget constraints.</p>
        </section>

        <section>
          <h2 className="mb-4">Safety Considerations</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-3">Research AI requires extra care with sensitive data:</p>
            
            <ul className="space-y-2 text-sm text-white/70">
              <li>• <strong>Anonymize before upload.</strong> Remove client names, personal details, proprietary information before feeding data to AI.</li>
              <li>• <strong>Verify AI findings.</strong> AI can misinterpret data or find false patterns. Always validate critical insights.</li>
              <li>• <strong>Use enterprise tools for confidential data.</strong> Public AI tools may use your data for training. Enterprise versions don't.</li>
              <li>• <strong>Cross-check sources.</strong> If AI cites research or statistics, verify the source is credible.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Expected Time Savings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">80-95%</div>
              <p className="text-white text-sm font-medium mb-1">Time Reduction</p>
              <p className="text-white/60 text-xs">Research tasks that involve reading/synthesizing large volumes</p>
            </div>
            
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">5-15</div>
              <p className="text-white text-sm font-medium mb-1">Hours/Week Saved</p>
              <p className="text-white/60 text-xs">For teams doing regular market or customer research</p>
            </div>
            
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">10x</div>
              <p className="text-white text-sm font-medium mb-1">Research Capacity</p>
              <p className="text-white/60 text-xs">You can analyze 10x more data in the same time</p>
            </div>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Ready to Supercharge Your Research?</h2>
          <p className="text-white/80 mb-4">We help you leverage AI for faster, deeper insights without compromising data security. Part of our AI Integration service.</p>
          <Link href="/packages/flow-rebuild" className="btn btn-primary inline-block">Explore AI Integration</Link>
        </section>
      </div>
    </div>
  )
}

