import { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Predicting Seasonal Demand for Inventory Planning in Santa Cruz | Vibes Consulting',
  description: 'Master inventory forecasting for Santa Cruz\'s unpredictable tourist seasons. Data-driven strategies for retail, restaurants, and service businesses to optimize stock levels year-round.',
  keywords: 'Santa Cruz inventory planning, seasonal demand forecasting, retail inventory management Santa Cruz, restaurant inventory optimization, tourist season planning, inventory forecasting California, small business inventory, seasonal business Santa Cruz',
  openGraph: {
    title: 'Predicting Seasonal Demand for Inventory Planning in Santa Cruz',
    description: 'Master inventory forecasting for Santa Cruz\'s unpredictable tourist seasons. Data-driven strategies to optimize stock levels year-round.',
    type: 'article',
    publishedTime: '2025-06-15T00:00:00Z',
    authors: ['Vibes Consulting'],
    url: 'https://vibes.consulting/blog/predicting-seasonal-demand-inventory-planning-santa-cruz',
  },
}

export default function PredictingSeasonalDemandPage() {
  return (
    <div className="bg-white text-zinc-900">
      {/* Breadcrumbs */}
      <Section width="default" className="pt-8 pb-4">
        <nav className="flex items-center space-x-2 text-sm text-zinc-600">
          <Link href="/" className="hover:text-purple-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-purple-600">Blog</Link>
          <span>/</span>
          <Link href="/blog/santa-cruz-business" className="hover:text-purple-600">Santa Cruz Business</Link>
          <span>/</span>
          <span className="text-zinc-900">Predicting Seasonal Demand</span>
        </nav>
      </Section>
      
      <Section width="default" className="pt-8 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">
          Predicting Seasonal Demand for Inventory Planning in Santa Cruz
        </h1>
        <p className="text-xl text-zinc-600 mb-8">
          How Santa Cruz businesses can forecast demand, optimize inventory levels, and avoid the costly traps of overstocking or stockouts during unpredictable tourist seasons.
        </p>
        <div className="w-16 h-1 bg-purple-600"></div>
      </Section>

      <Section width="default" className="py-8">
        <div className="prose prose-lg max-w-none">
          
          <h2>The Santa Cruz Inventory Paradox</h2>
          
          <p>
            You're staring at $15,000 worth of swimwear in July that should have sold in May. Meanwhile, you ran out of wetsuits during an unexpected cold snap in June and lost sales for three weeks. Sound familiar?
          </p>

          <p>
            For Santa Cruz business owners—whether you run a beach rental shop on the Boardwalk, a restaurant on the Westside, or a boutique downtown—inventory planning feels like gambling. The weather changes daily, tourists arrive unpredictably, UC Santa Cruz impacts traffic patterns, and what worked last year suddenly doesn't work this year.
          </p>

          <p>
            The stakes are high: overstock ties up cash you can't afford to waste, while stockouts mean missed revenue and frustrated customers who'll remember you didn't have what they needed. In a small community where word travels fast, inventory problems become reputation problems.
          </p>

          <p>
            But here's the truth: predicting seasonal demand in Santa Cruz isn't about having a crystal ball. It's about building systems that turn your historical data, local patterns, and real-time signals into actionable inventory decisions. Let's break down exactly how to do this.
          </p>

          <h2>Why Traditional Inventory Forecasting Fails in Santa Cruz</h2>

          <p>
            Most inventory management advice comes from consultants who've never dealt with Santa Cruz's unique challenges. They recommend strategies designed for stable, predictable markets—which is the opposite of what we have here.
          </p>

          <h3>The Local Factors That Make Santa Cruz Different:</h3>

          <p>
            <strong>1. Weather Microclimate Unpredictability</strong><br />
            Santa Cruz has some of the most variable weather in California. A foggy morning can turn into a 75-degree afternoon, or stay gray and cold all day. Weather apps are notoriously unreliable here because the microclimate shifts by neighborhood. This makes demand forecasting for outdoor gear, clothing, food and beverage, and tourist activities extremely difficult.
          </p>

          <p>
            <strong>2. Tourist Season Compression</strong><br />
            Unlike destinations with clear high/low seasons, Santa Cruz has compressed peaks. Memorial Day through Labor Day is obvious, but spring break, Halloween weekend, First Friday events, and random sunny winter weekends can spike demand unexpectedly. You're managing multiple mini-seasons rather than one predictable cycle.
          </p>

          <p>
            <strong>3. The UC Santa Cruz Calendar Effect</strong><br />
            When students are in session (roughly September through mid-June with breaks), local demand patterns shift dramatically. Move-in weekend, finals weeks, graduation, and breaks create inventory demand spikes and valleys that don't align with traditional tourist patterns. If your business is anywhere near campus or serves the student market, this is your dominant planning variable.
          </p>

          <p>
            <strong>4. Limited Storage in Expensive Real Estate</strong><br />
            Santa Cruz rent is expensive, and most small businesses operate in tight quarters. You don't have the luxury of massive back-of-house storage. This means your inventory forecasting needs to be precise—you can't afford to "stock extra just in case."
          </p>

          <p>
            <strong>5. Supply Chain Distance from Major Distribution Hubs</strong><br />
            Santa Cruz isn't Oakland or San Jose. Deliveries take longer, restocking windows are wider, and last-minute orders are expensive. You need longer lead times built into your forecasts, which increases the risk of getting predictions wrong.
          </p>

          <p>
            Traditional inventory formulas don't account for these variables. That's why you need a Santa Cruz-specific approach.
          </p>

          <h2>The Foundation: Building Your Historical Demand Database</h2>

          <p>
            Before you can predict future demand, you need clean, usable historical data. Most Santa Cruz business owners have years of sales data sitting in their POS system or spreadsheets—but it's not organized in a way that's useful for forecasting.
          </p>

          <h3>What Data to Track (If You're Starting Now):</h3>

          <ul>
            <li><strong>Daily sales by SKU or category</strong> – Not just totals, but what specifically sold</li>
            <li><strong>Weather conditions</strong> – Temperature, sun/fog, precipitation (use Weather Underground's historical data for Santa Cruz)</li>
            <li><strong>Day of week</strong> – Weekend vs. weekday patterns are critical</li>
            <li><strong>Special events</strong> – First Friday, Boardwalk concerts, surf competitions, marathons, UC events</li>
            <li><strong>Stockout instances</strong> – When you ran out of something and lost sales</li>
            <li><strong>Promotional activity</strong> – Sales, discounts, social media pushes</li>
            <li><strong>Local school calendar</strong> – UCSC, Cabrillo College, K-12 breaks</li>
            <li><strong>Nearby business activity</strong> – If you're downtown, track when neighboring businesses are closed or have events</li>
          </ul>

          <h3>How to Organize Historical Data for Forecasting:</h3>

          <p>
            Create a simple spreadsheet (or use a tool like Airtable) with these columns:
          </p>

          <ul>
            <li>Date</li>
            <li>Day of Week</li>
            <li>Product/Category</li>
            <li>Units Sold</li>
            <li>Revenue</li>
            <li>Weather (Sunny/Fog/Rain + Temp Range)</li>
            <li>Event Notes (if applicable)</li>
            <li>Stockout? (Y/N)</li>
          </ul>

          <p>
            Start collecting this data immediately if you haven't been. Even six months of clean data is better than years of messy, incomplete records.
          </p>

          <h2>Step-by-Step: Building a Practical Demand Forecasting System</h2>

          <h3>Step 1: Identify Your Seasonal Demand Patterns (Baseline Forecast)</h3>

          <p>
            Use your historical data to calculate average sales by week for each product category over the past 2-3 years. This creates your baseline seasonal curve.
          </p>

          <p>
            <strong>Example for a Westside surf shop:</strong>
          </p>

          <ul>
            <li>Weeks 1-12 (Jan-March): Wetsuit rentals average 45/week, surfboard sales 3/week</li>
            <li>Weeks 13-24 (April-June): Wetsuit rentals 30/week, surfboard sales 12/week</li>
            <li>Weeks 25-36 (July-Sept): Wetsuit rentals 20/week, surfboard sales 25/week</li>
            <li>Weeks 37-52 (Oct-Dec): Wetsuit rentals 50/week, surfboard sales 8/week</li>
          </ul>

          <p>
            This baseline tells you the general shape of demand, but it's not precise enough yet.
          </p>

          <h3>Step 2: Apply Local Adjustment Factors</h3>

          <p>
            Now layer in the variables that make Santa Cruz unique:
          </p>

          <p>
            <strong>Weather Adjustment:</strong><br />
            Look at historical correlations between weather and sales. For example:
          </p>

          <ul>
            <li>Sunny days above 70°F = 40% increase in beach gear sales</li>
            <li>Foggy days below 60°F = 25% increase in coffee/hot food sales</li>
            <li>Rainy days = 60% decrease in outdoor apparel, 30% increase in indoor entertainment</li>
          </ul>

          <p>
            Use 10-day weather forecasts to adjust your weekly inventory targets.
          </p>

          <p>
            <strong>Event Adjustment:</strong><br />
            Identify recurring events and their historical impact on sales. Examples:
          </p>

          <ul>
            <li>First Friday downtown = 2x normal foot traffic, 1.5x sales</li>
            <li>Wharf to Wharf race weekend = 3x sales for sports nutrition, hydration products</li>
            <li>UCSC move-in week = 5x sales for dorm supplies, coffee, grab-and-go food</li>
            <li>Boardwalk summer concert series Fridays = 30% increase within 1-mile radius</li>
          </ul>

          <p>
            Add these events to your calendar and adjust inventory orders 2-3 weeks in advance (depending on supplier lead times).
          </p>

          <p>
            <strong>UC Santa Cruz Calendar Adjustment:</strong><br />
            If students impact your business, overlay the academic calendar:
          </p>

          <ul>
            <li>Finals weeks (December, March, June) = Increased late-night food, decreased discretionary spending</li>
            <li>Thanksgiving/Spring Break = 50-70% drop in campus-adjacent businesses</li>
            <li>Graduation weekend = Spike in upscale dining, hotels, gifts</li>
          </ul>

          <h3>Step 3: Set Min/Max Inventory Targets by Category</h3>

          <p>
            Based on your adjusted forecast, calculate:
          </p>

          <ul>
            <li><strong>Minimum stock level:</strong> The lowest amount you can carry without risking stockouts (usually 1-1.5 weeks of forecasted demand)</li>
            <li><strong>Maximum stock level:</strong> The most you can carry without tying up excessive cash or storage space (usually 3-4 weeks of forecasted demand)</li>
            <li><strong>Reorder point:</strong> The inventory level that triggers a new order (minimum + lead time demand)</li>
          </ul>

          <p>
            <strong>Example for a downtown boutique:</strong>
          </p>

          <ul>
            <li>Summer dresses in June: Min 25 units, Max 80 units, Reorder at 35 units</li>
            <li>Summer dresses in September: Min 10 units, Max 25 units, Reorder at 15 units</li>
          </ul>

          <p>
            These targets change monthly based on your seasonal forecast.
          </p>

          <h3>Step 4: Use Rolling 4-Week Actuals to Refine Weekly</h3>

          <p>
            Your forecast is a living document, not a set-it-and-forget-it plan. Every week, compare actual sales to forecasted sales. If reality diverges from your forecast by more than 15-20%, adjust your upcoming orders.
          </p>

          <p>
            <strong>Example:</strong><br />
            You forecasted 100 units sold in Week 20, but only sold 70. Your Week 21-24 forecast should be adjusted down by a similar percentage until you see data suggesting otherwise.
          </p>

          <p>
            This rolling adjustment prevents you from over-ordering when demand softens unexpectedly (like a cold, foggy May that kills beach traffic).
          </p>

          <h3>Step 5: Build in Safety Stock for High-Margin, Fast-Moving Items</h3>

          <p>
            For your top 10-20% of products (the ones that drive most of your revenue), maintain a small safety stock buffer beyond your minimum level. This protects you from unexpected spikes without over-investing in slow movers.
          </p>

          <p>
            <strong>Safety stock formula:</strong><br />
            (Max daily sales - Avg daily sales) × Lead time in days
          </p>

          <p>
            <strong>Example:</strong><br />
            Your best-selling coffee blend normally sells 5 bags/day, but has spiked to 12 bags/day during events. Supplier lead time is 10 days.
          </p>

          <p>
            Safety stock = (12 - 5) × 10 = 70 bags
          </p>

          <p>
            Keep an extra 70 bags on hand beyond your normal reorder point.
          </p>

          <h2>Real-World Inventory Planning Scenarios in Santa Cruz</h2>

          <h3>Scenario 1: Beachside Restaurant Managing Perishables</h3>

          <p>
            <strong>Challenge:</strong> Fresh seafood spoils quickly, but running out on a busy Saturday night costs you $5,000+ in lost revenue and reputation damage.
          </p>

          <p>
            <strong>Solution:</strong>
          </p>

          <ul>
            <li>Track daily covers (customers served) by day of week and weather for past 2 years</li>
            <li>Calculate average seafood usage per cover</li>
            <li>Order fresh seafood 2x/week based on 7-day rolling average + weather-adjusted forecast</li>
            <li>Build relationships with backup suppliers for emergency orders on high-volume weekends</li>
            <li>Create a "market availability" special menu that lets you sell what you have extra of</li>
          </ul>

          <p>
            <strong>Result:</strong> Seafood waste dropped from 18% to 6%, and stockouts on premium items decreased by 75%.
          </p>

          <h3>Scenario 2: Downtown Boutique Managing Seasonal Apparel</h3>

          <p>
            <strong>Challenge:</strong> Need to order spring/summer inventory in December-January, but can't predict if May will be sunny or foggy. Wrong guess = thousands in unsold inventory.
          </p>

          <p>
            <strong>Solution:</strong>
          </p>

          <ul>
            <li>Analyze past 5 years of May-August weather and sales data to find correlation</li>
            <li>Order conservative baseline inventory in December for April delivery</li>
            <li>Reserve 30% of budget for "in-season" reorders based on early sales trends</li>
            <li>Partner with 1-2 suppliers offering 2-week lead times for fast-moving items</li>
            <li>Implement early-season promotions to test demand before committing to full inventory</li>
          </ul>

          <p>
            <strong>Result:</strong> End-of-season markdowns dropped from 40% of inventory to 15%, freeing up cash flow for better-selling items.
          </p>

          <h3>Scenario 3: Surf Shop Balancing Rentals vs. Retail Inventory</h3>

          <p>
            <strong>Challenge:</strong> Limited storage space. Need to balance rental gear (generates daily revenue) with retail inventory (higher margins but ties up space).
          </p>

          <p>
            <strong>Solution:</strong>
          </p>

          <ul>
            <li>Calculate revenue per square foot for rental vs. retail in each season</li>
            <li>In peak summer (June-Aug), prioritize rental inventory (higher turnover)</li>
            <li>In shoulder seasons (April-May, Sept-Oct), shift space to retail (higher margins, capitalize on locals)</li>
            <li>Use daily rental reservation data as leading indicator for retail demand</li>
            <li>Create "rent-to-buy" program that turns rental customers into retail sales</li>
          </ul>

          <p>
            <strong>Result:</strong> Overall inventory turnover improved by 40%, and space utilization increased revenue per square foot by 35%.
          </p>

          <h2>Tools and Systems for Santa Cruz Inventory Forecasting</h2>

          <h3>For Businesses Under $500K Revenue (Minimal Budget):</h3>

          <ul>
            <li><strong>Google Sheets + Weather Underground:</strong> Free historical weather data + manual sales tracking</li>
            <li><strong>Square or Shopify POS:</strong> Basic inventory tracking and low-stock alerts</li>
            <li><strong>Google Calendar:</strong> Track events, UCSC calendar, promotions</li>
            <li><strong>Weekly 15-minute review:</strong> Compare forecast to actuals, adjust next week's orders</li>
          </ul>

          <h3>For Businesses $500K-$2M Revenue (Mid-Tier Solutions):</h3>

          <ul>
            <li><strong>QuickBooks + Inventory Management:</strong> Integrates with accounting for better cash flow visibility</li>
            <li><strong>Airtable or Notion:</strong> Custom database for tracking weather, events, sales, supplier lead times</li>
            <li><strong>Ordoro or inFlow:</strong> Inventory management software with reorder point automation</li>
            <li><strong>Forecasting spreadsheet template:</strong> Custom-built with seasonal curves, event adjustments, safety stock calculations</li>
          </ul>

          <h3>For Businesses Over $2M Revenue (Advanced Systems):</h3>

          <ul>
            <li><strong>NetSuite or Odoo:</strong> Full ERP with demand forecasting, multi-location inventory, supplier management</li>
            <li><strong>Brightpearl or Cin7:</strong> Retail-specific inventory optimization with built-in forecasting</li>
            <li><strong>Custom Power BI or Tableau dashboards:</strong> Real-time inventory visibility with weather API integration</li>
            <li><strong>Fractional operations consultant:</strong> Ongoing monthly forecasting refinement and supplier negotiation</li>
          </ul>

          <h2>Common Inventory Forecasting Mistakes Santa Cruz Businesses Make</h2>

          <h3>Mistake #1: Relying Solely on Supplier Recommendations</h3>

          <p>
            Your supplier wants to sell you more inventory. Their "suggested order quantities" are based on their distribution goals, not your demand reality. Always calculate your own reorder points based on your data.
          </p>

          <h3>Mistake #2: Ordering the Same Amount Every Time</h3>

          <p>
            "We always order 50 units on the 1st of the month" is a recipe for overstocking in winter and stockouts in summer. Your order quantities should vary based on forecasted demand for the upcoming period.
          </p>

          <h3>Mistake #3: Ignoring the 80/20 Rule</h3>

          <p>
            Typically, 20% of your products drive 80% of your revenue. These items deserve precise forecasting and safety stock. The other 80%? You can afford to stock out occasionally—don't over-invest attention or cash there.
          </p>

          <h3>Mistake #4: Not Tracking Lost Sales from Stockouts</h3>

          <p>
            When you run out of something, you don't just lose that sale—you lose the data point that would improve future forecasts. Train staff to log every time a customer asks for something you don't have. This "ghost demand" should be added to your actual sales data.
          </p>

          <h3>Mistake #5: Treating All SKUs the Same</h3>

          <p>
            Different products require different forecasting strategies:
          </p>

          <ul>
            <li><strong>Staples (year-round consistent sellers):</strong> Simple reorder point system</li>
            <li><strong>Seasonal items:</strong> Aggressive forecasting with clear end-of-season exit plan</li>
            <li><strong>Trendy/experimental items:</strong> Small initial order, fast reorder if it hits</li>
            <li><strong>High-value, slow-moving:</strong> Made-to-order or drop-ship when possible</li>
          </ul>

          <h2>How to Start Improving Your Inventory Forecasting Today</h2>

          <h3>Week 1: Audit Your Current State</h3>

          <ul>
            <li>Pull your past 12 months of sales data from your POS</li>
            <li>Identify your top 20 products by revenue</li>
            <li>Calculate how many times you stocked out of each in the past year</li>
            <li>Identify slow-moving inventory sitting for 90+ days</li>
          </ul>

          <h3>Week 2: Build Your Historical Database</h3>

          <ul>
            <li>Create a spreadsheet with columns: Date, Product, Units Sold, Weather, Day of Week, Events</li>
            <li>Input at least 6 months of historical data (ideally 12-24 months)</li>
            <li>Add Santa Cruz-specific events to a calendar for the next 12 months</li>
          </ul>

          <h3>Week 3: Calculate Your First Seasonal Forecast</h3>

          <ul>
            <li>For each of your top 20 products, calculate average monthly sales</li>
            <li>Identify the seasonal pattern (which months are high, which are low)</li>
            <li>Create a 12-week rolling forecast with min/max/reorder point targets</li>
          </ul>

          <h3>Week 4: Implement and Test</h3>

          <ul>
            <li>Use your forecast to adjust this month's inventory orders</li>
            <li>Set up a weekly 15-minute review process: Forecast vs. Actual</li>
            <li>Refine your adjustment factors (weather, events) based on what actually happens</li>
          </ul>

          <h3>Ongoing: Iterate and Improve</h3>

          <ul>
            <li>Every month, review forecast accuracy for your top products</li>
            <li>Adjust your baseline seasonal curves annually</li>
            <li>Add new products to your forecasting system as they prove themselves</li>
            <li>Negotiate better payment terms with suppliers as your forecasting improves (you become a more reliable customer)</li>
          </ul>

          <h2>When DIY Inventory Planning Isn't Enough</h2>

          <p>
            If you're experiencing any of these, you've outgrown spreadsheet forecasting:
          </p>

          <ul>
            <li>You have 100+ SKUs and can't manually track them all</li>
            <li>You're managing multiple locations with different demand patterns</li>
            <li>Your cash flow is too tight to absorb forecasting mistakes</li>
            <li>You're spending 10+ hours/week on inventory management</li>
            <li>Your stockout rate is still above 10% despite efforts to improve</li>
          </ul>

          <p>
            At this point, you need either:
          </p>

          <ol>
            <li>A more sophisticated inventory management system (see tools section above)</li>
            <li>Outside help from someone who's built forecasting systems for Santa Cruz businesses before</li>
          </ol>

          <h2>The Bottom Line: Inventory Forecasting as Competitive Advantage</h2>

          <p>
            In Santa Cruz's small, competitive market, inventory management is a hidden differentiator. Your competitors are either:
          </p>

          <ul>
            <li>Chronically understocked and losing sales to you</li>
            <li>Chronically overstocked and burning cash on dead inventory</li>
          </ul>

          <p>
            By building a data-driven, Santa Cruz-specific forecasting system, you:
          </p>

          <ul>
            <li>Free up cash trapped in slow-moving inventory</li>
            <li>Capture sales your competitors miss when they stock out</li>
            <li>Reduce end-of-season markdowns that kill your margins</li>
            <li>Build a reputation for "always having what I need"</li>
            <li>Spend less time firefighting inventory crises and more time growing your business</li>
          </ul>

          <p>
            The businesses that survive and thrive in Santa Cruz are the ones that turn local knowledge into operational advantage. Inventory forecasting is one of the highest-leverage areas to do that.
          </p>

          <p>
            The weather will always be unpredictable. The tourists will always be inconsistent. But with the right systems, your inventory decisions don't have to be guesswork.
          </p>

          <p>
            Start tracking your data today. Build your forecast next month. Refine it over the next year. A year from now, you'll have a forecasting system that's worth tens of thousands of dollars in improved cash flow and captured revenue.
          </p>

          <p>
            And that's worth more than any consultant's crystal ball.
          </p>

        </div>
      </Section>

      <Section width="default" className="py-16 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-zinc-900">Need Help Building Your Inventory Forecasting System?</h2>
          <p className="text-xl text-zinc-600 mb-8">
            We help Santa Cruz businesses design custom inventory management systems that fit your specific products, seasons, and space constraints. Stop guessing, start forecasting.
          </p>
          <CTAButton href="/contact" text="Let's Optimize Your Inventory" />
        </div>
      </Section>

      {/* Related Posts */}
      <Section width="default" className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-zinc-900">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/managing-cash-flow-tourist-off-season" className="block p-6 border border-zinc-200 rounded-lg hover:border-purple-600 transition-colors">
            <h3 className="font-bold text-lg mb-2 text-zinc-900">Managing Cash Flow Between Seasons</h3>
            <p className="text-sm text-zinc-600">Financial strategies for seasonal revenue patterns</p>
          </Link>
          
          <Link href="/blog/creating-year-round-revenue-streams-seasonal-businesses-santa-cruz" className="block p-6 border border-zinc-200 rounded-lg hover:border-purple-600 transition-colors">
            <h3 className="font-bold text-lg mb-2 text-zinc-900">Year-Round Revenue Streams</h3>
            <p className="text-sm text-zinc-600">Diversification for seasonal businesses</p>
          </Link>
          
          <Link href="/blog/supply-chain-delays-outside-major-metros-santa-cruz" className="block p-6 border border-zinc-200 rounded-lg hover:border-purple-600 transition-colors">
            <h3 className="font-bold text-lg mb-2 text-zinc-900">Supply Chain Challenges</h3>
            <p className="text-sm text-zinc-600">Navigate delivery delays and vendor management</p>
          </Link>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/blog/santa-cruz-business" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
            View All Santa Cruz Business Articles →
          </Link>
        </div>
      </Section>
    </div>
  )
}
