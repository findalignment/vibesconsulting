import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Predicting Seasonal Demand for Inventory Planning | Santa Cruz Business',
  description: 'How to forecast seasonal demand and plan inventory for Santa Cruz businesses. Avoid overstocking in winter and stockouts in summer with smart planning.',
})

export default function PredictingSeasonalDemand() {
  const sections = [
    {
      title: 'The Seasonal Inventory Paradox',
      content: (
        <>
          <p className="mb-4">
            Order too much inventory for winter and you'll tie up cash in products that sit on shelves for months. Order too little for summer and you'll lose sales to stockouts during your most profitable season. The margin for error is tiny, and the financial consequences of getting it wrong are massive.
          </p>
          <p className="mb-4">
            Most Santa Cruz businesses manage inventory by gut feel: "We'll probably need more in summer" isn't a plan. Without data-driven demand forecasting, you're either constantly running out of popular items or sitting on dead inventory you can't sell. Both problems destroy profitability.
          </p>
          <p className="mb-4">
            The businesses that manage seasonal inventory well aren't lucky—they've built forecasting systems that predict demand patterns, plan inventory purchases strategically, and adjust in real-time based on actual sales data. These systems don't require expensive software or advanced math—just consistent tracking and systematic planning.
          </p>
        </>
      )
    },
    {
      title: 'Understanding Your Demand Patterns',
      content: (
        <>
          <p className="mb-4">
            Before you can predict future demand, you need to understand historical patterns. "Summer is busy" isn't specific enough. You need actual numbers.
          </p>

          <p className="mb-6 mt-6">
            <strong>Data to Collect (For Past 2-3 Years):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Monthly unit sales by product/category:</strong> What sold and when</li>
            <li><strong>Revenue by product/category:</strong> What drove dollars vs volume</li>
            <li><strong>Stockout occurrences:</strong> When you ran out and lost sales</li>
            <li><strong>Markdown/clearance sales:</strong> What you overstocked and had to discount</li>
            <li><strong>Week-by-week patterns:</strong> Within seasons, are weekends heavier?</li>
            <li><strong>Event impacts:</strong> How do holidays, festivals affect demand?</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Create Visual Charts:</strong> Plot unit sales by month for your top 20 products. You'll see clear patterns emerge. Some products spike in summer. Others are consistent year-round. Some have unpredictable volatility.
          </p>

          <p className="mb-6 mt-8">
            <strong>Calculate Seasonal Indices:</strong>
          </p>
          <p className="mb-4">
            For each product, compare monthly sales to average monthly sales:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Average monthly sales = Annual sales ÷ 12</li>
            <li>June index = June sales ÷ Average monthly sales</li>
            <li>Index of 2.0 = June is 2x average month</li>
            <li>Index of 0.5 = December is half of average month</li>
          </ul>

          <p className="mb-4">
            These indices become your forecasting foundation. If a product has June index of 2.5, you know to stock 2.5x normal inventory for June.
          </p>
        </>
      )
    },
    {
      title: 'Building a Simple Demand Forecast',
      content: (
        <>
          <p className="mb-4">
            You don't need complex algorithms. A simple forecast based on historical patterns works for most seasonal businesses.
          </p>

          <p className="mb-6 mt-6">
            <strong>Basic Forecasting Method:</strong>
          </p>

          <p className="mb-4">
            <strong>Step 1: Start with last year's sales</strong>
          </p>
          <p className="mb-4">
            Last June you sold 200 units. That's your baseline.
          </p>

          <p className="mb-4 mt-6">
            <strong>Step 2: Adjust for growth/decline</strong>
          </p>
          <p className="mb-4">
            If business is growing 10%, adjust baseline: 200 × 1.10 = 220 units
          </p>

          <p className="mb-4 mt-6">
            <strong>Step 3: Adjust for known changes</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Adding new product that will cannibalize this one? Reduce forecast</li>
            <li>Increased marketing planned? Increase forecast</li>
            <li>Competitor opened nearby? Reduce forecast</li>
            <li>Price increase planned? Reduce units, increase revenue</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Step 4: Add safety stock buffer</strong>
          </p>
          <p className="mb-4">
            Forecast is 220 units. Add 15-20% buffer for uncertainty: 220 × 1.15 = 253 units to stock.
          </p>

          <p className="mb-4 mt-8">
            This simple method is 70-80% accurate for stable products. That's good enough to dramatically improve inventory decisions.
          </p>

          <p className="mb-6 mt-8">
            <strong>For New Products (No Historical Data):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Look at similar product's sales history</li>
            <li>Research industry benchmarks</li>
            <li>Order conservatively for first season</li>
            <li>Use first season data to improve next year's forecast</li>
          </ul>
        </>
      )
    },
    {
      title: 'Strategic Ordering Timelines',
      content: (
        <>
          <p className="mb-4">
            When you order matters as much as how much you order. Timing purchases strategically balances cash flow, storage capacity, and vendor lead times.
          </p>

          <p className="mb-6 mt-6">
            <strong>Typical Santa Cruz Seasonal Business Ordering Calendar:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>January-February: Place Summer Orders</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Peak season 4-6 months away, gives vendors time to produce</li>
            <li>Early ordering often gets better pricing/terms</li>
            <li>Schedule delivery for April/May arrival</li>
            <li>Focus on long lead-time items first</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>March-April: Pre-Season Top-Offs</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Adjust initial orders based on early trends</li>
            <li>Order fast-moving items with short lead times</li>
            <li>Ensure you're fully stocked by Memorial Day</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>May-August: In-Season Replenishment</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Weekly monitoring of inventory levels</li>
            <li>Quick reorders of hot sellers</li>
            <li>Stop ordering slow movers to avoid overstock</li>
            <li>Have vendor relationships for emergency rush orders</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>September-October: Wind Down</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Stop major ordering for seasonal items</li>
            <li>Clear remaining summer inventory at discount</li>
            <li>Reduce to winter baseline levels</li>
            <li>Order holiday-specific inventory if applicable</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>November-December: Minimal Winter Stock</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Keep only year-round essentials in stock</li>
            <li>Minimize cash tied up in inventory</li>
            <li>Use slow season to audit and plan next year</li>
          </ul>
        </>
      )
    },
    {
      title: 'Managing the Cash Flow-Inventory Tension',
      content: (
        <>
          <p className="mb-4">
            Inventory ties up cash. The more inventory you carry, the less cash you have for operations. But too little inventory means lost sales. Balancing this tension requires strategic thinking.
          </p>

          <p className="mb-6 mt-6">
            <strong>Strategies to Reduce Cash Tied Up in Inventory:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Just-In-Time for Non-Seasonal Items</strong>
          </p>
          <p className="mb-4">
            Products that sell consistently year-round don't need large stockpiles. Order smaller quantities more frequently. This frees cash for seasonal items that DO need large purchases.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Vendor Payment Terms Negotiation</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Request 60-90 day payment terms instead of 30 days</li>
            <li>Order in February, deliver in April, pay in June (when cash is flowing)</li>
            <li>Some vendors offer seasonal payment plans for known seasonal businesses</li>
            <li>Early payment discounts only make sense if cash isn't constrained</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>3. Consignment Arrangements</strong>
          </p>
          <p className="mb-4">
            For some products, vendors will stock inventory on consignment—you only pay for what sells. This is ideal for high-value, uncertain-demand items. Not all vendors offer this, but it's worth asking.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Pre-Sales and Deposits</strong>
          </p>
          <p className="mb-4">
            Take orders and deposits before ordering inventory. This is common for high-ticket items or custom products. Customer's money funds your inventory purchase.
          </p>
        </>
      )
    },
    {
      title: 'Dealing With Uncertainty: Safety Stock vs Deadstock',
      content: (
        <>
          <p className="mb-4">
            Every forecast is wrong. The question is how much buffer (safety stock) to carry versus risk of overstock (deadstock you can't sell).
          </p>

          <p className="mb-6 mt-6">
            <strong>When to Carry More Safety Stock:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>High margin products:</strong> Cost of lost sale exceeds cost of overstock</li>
            <li><strong>Core products:</strong> Being out of bestsellers hurts reputation</li>
            <li><strong>Long lead times:</strong> Can't quickly reorder if you run out</li>
            <li><strong>Unpredictable demand:</strong> High variance in week-to-week sales</li>
            <li><strong>Limited supplier reliability:</strong> Deliveries often delayed</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>When to Carry Less Safety Stock:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Low margin products:</strong> Overstock erodes thin margins</li>
            <li><strong>Trendy/seasonal items:</strong> Won't sell next season</li>
            <li><strong>Short lead times:</strong> Can reorder quickly if needed</li>
            <li><strong>Predictable demand:</strong> Low variance, easy to forecast</li>
            <li><strong>Cash constrained:</strong> Can't afford excess inventory</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>The 80/20 Rule:</strong> Typically 20% of products generate 80% of sales. Carry high safety stock on that critical 20%. Be conservative on the remaining 80% where stockouts are less painful.
          </p>
        </>
      )
    },
    {
      title: 'Real-Time Tracking and Adjustment',
      content: (
        <>
          <p className="mb-4">
            Your forecast is your plan, but reality unfolds differently. Successful inventory management requires monitoring actual sales and adjusting orders in real-time.
          </p>

          <p className="mb-6 mt-6">
            <strong>Weekly Inventory Review During Season:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Compare actual to forecast:</strong> What's selling faster/slower than expected?</li>
            <li><strong>Current stock levels:</strong> What's running low vs overstocked?</li>
            <li><strong>Reorder trigger points:</strong> Place orders before you hit zero</li>
            <li><strong>Vendor lead times:</strong> How long until reorders arrive?</li>
            <li><strong>Remaining season weeks:</strong> How much more selling time do you have?</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Reorder Calculation:</strong>
          </p>
          <p className="mb-4">
            (Weeks remaining × weekly sales rate) + safety stock - current stock = reorder quantity
          </p>

          <p className="mb-4 mt-6">
            <strong>Example:</strong> You have 10 weeks left in season. Item sells 30 units/week. You want 20% safety buffer. Currently have 150 units in stock.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>(10 weeks × 30 units) = 300 units needed</li>
            <li>300 × 1.20 safety buffer = 360 units total</li>
            <li>360 - 150 current stock = 210 units to reorder</li>
          </ul>

          <p className="mb-4 mt-6">
            This math takes 60 seconds per product. Doing it weekly prevents both stockouts and overstock.
          </p>
        </>
      )
    },
    {
      title: 'Santa Cruz-Specific Demand Factors',
      content: (
        <>
          <p className="mb-4">
            Santa Cruz has unique demand drivers that affect inventory planning beyond just "summer busy, winter slow."
          </p>

          <p className="mb-6 mt-6">
            <strong>UC Santa Cruz Academic Calendar Impact:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>September-October:</strong> Students return, spike in certain categories</li>
            <li><strong>Mid-December to mid-January:</strong> Students gone, demand drops</li>
            <li><strong>Late January:</strong> Return but broke from holidays</li>
            <li><strong>March:</strong> Spring break dip</li>
            <li><strong>Early June:</strong> Exodus, demand drops</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Weather Impacts:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Surf conditions:</strong> Big swells = wetsuit/gear sales spike</li>
            <li><strong>Heat waves:</strong> Beach traffic surge, ice cream/beverages spike</li>
            <li><strong>Rain:</strong> Indoor activity products increase</li>
            <li><strong>Fire season:</strong> Outdoor recreation decreases, air quality products increase</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Local Events:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Beach Boardwalk season opening (April):</strong> Tourist traffic starts</li>
            <li><strong>Wharf-to-Wharf race (July):</strong> Major visitor weekend</li>
            <li><strong>Woodies on the Wharf (June):</strong> Specific demographic influx</li>
            <li><strong>Open Studios Art Tour (October):</strong> Local + tourist mix</li>
          </ul>

          <p className="mb-4 mt-6">
            Track how these specific events affected your sales in past years. Build them into your forecasts as demand spikes or dips that require inventory adjustment.
          </p>
        </>
      )
    }
  ]

  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-text">
            Predicting Seasonal Demand for Inventory Planning
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Build demand forecasting systems that prevent summer stockouts and winter overstock. Data-driven inventory planning for Santa Cruz seasonal businesses.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help With Inventory Planning and Operations?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses build inventory management systems, demand forecasting models, and operational processes that reduce waste and increase profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Learn About Business Flow Analysis
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Your Inventory Challenges
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

