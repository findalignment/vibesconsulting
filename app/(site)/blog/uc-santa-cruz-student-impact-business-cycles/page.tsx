import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'UC Santa Cruz Student Population Impact on Business Cycles',
  description: 'How UCSC\'s 17,000 students affect Santa Cruz business revenue patterns. Plan for student arrival, breaks, and exodus to optimize operations.',
  keywords: 'UCSC students business impact, santa cruz student population, college town business, student revenue cycles, UCSC calendar'
})

export default function UCSCStudentImpact() {
  const sections = [
    {
      title: 'The Hidden 17,000-Person Revenue Cycle',
      content: (
        <>
          <p className="mb-4">
            UC Santa Cruz brings 17,000+ students who dramatically affect local business patterns, but not in the ways most business owners expect. Students don't just add demand—they create their own distinct revenue cycle that overlays (and sometimes conflicts with) tourist seasonality.
          </p>
          <p className="mb-4">
            Ignoring student cycles means confused revenue patterns. Why did September look strong but October dipped? Why is late January so weak despite students being back? Why does March feel slower than February? The answer is almost always UCSC's academic calendar.
          </p>
          <p className="mb-4">
            Businesses that understand and plan for student cycles can anticipate demand shifts, adjust staffing proactively, and capture revenue opportunities competitors miss. Those that don't are constantly confused about why their numbers don't match their expectations.
          </p>
        </>
      )
    },
    {
      title: 'The UCSC Academic Calendar and Your Revenue',
      content: (
        <>
          <p className="mb-4">
            UCSC operates on a quarter system (not semesters), creating unique patterns most business owners don't recognize.
          </p>

          <p className="mb-6 mt-6">
            <strong>Fall Quarter (Late September - Mid December):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Move-in (late September):</strong> Massive demand spike for basics—groceries, household items, services</li>
            <li><strong>First month optimism:</strong> Students have money, energy, enthusiasm</li>
            <li><strong>Mid-quarter reality:</strong> Money tightens, study intensifies</li>
            <li><strong>Thanksgiving week:</strong> Many students leave, demand drops</li>
            <li><strong>Finals (early-mid December):</strong> Minimal discretionary spending</li>
            <li><strong>Winter break (mid-December through early January):</strong> Campus ghost town</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Winter Quarter (Early January - Mid March):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Return from break:</strong> Broke from holidays, minimal spending</li>
            <li><strong>Late January-February:</strong> Consistent but conservative spending</li>
            <li><strong>Presidents' Day weekend:</strong> Some students leave</li>
            <li><strong>Finals (early-mid March):</strong> Study mode, reduced activity</li>
            <li><strong>Spring break (late March):</strong> Significant exodus</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Spring Quarter (Late March/Early April - Mid June):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Post-spring break:</strong> Students return energized</li>
            <li><strong>April-May:</strong> Peak student engagement, nice weather</li>
            <li><strong>Memorial Day weekend:</strong> Some early departures</li>
            <li><strong>Finals (early-mid June):</strong> Intense studying</li>
            <li><strong>Summer break (mid-June):</strong> Majority leave campus</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Summer Session (Late June - Late August):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Only ~3,000 students remain (mostly out-of-state, international)</li>
            <li>Minimal compared to full academic year</li>
            <li>Tourist activity more dominant factor</li>
          </ul>
        </>
      )
    },
    {
      title: 'Which Businesses Are Most Affected',
      content: (
        <>
          <p className="mb-4">
            Not all Santa Cruz businesses feel student impact equally. Your exposure depends on location, product mix, and price point.
          </p>

          <p className="mb-6 mt-6">
            <strong>Heavily Impacted (30-50% revenue from students):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Near-campus businesses:</strong> Mission Street, Westside, Capitola Village</li>
            <li><strong>Budget-friendly restaurants:</strong> Pizza, burritos, cheap eats</li>
            <li><strong>Coffee shops with laptop seating:</strong> Study spaces</li>
            <li><strong>Bars and nightlife:</strong> Entertainment on student budgets</li>
            <li><strong>Affordable retail:</strong> Clothing, accessories under $50</li>
            <li><strong>Convenience stores:</strong> Quick groceries and snacks</li>
            <li><strong>Budget fitness:</strong> Low-cost gyms, yoga studios</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Moderately Impacted (10-30% revenue from students):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Downtown businesses:</strong> Students mix with locals/tourists</li>
            <li><strong>Mid-price restaurants:</strong> Occasional treat dining</li>
            <li><strong>Entertainment venues:</strong> Movies, bowling, arcade</li>
            <li><strong>Services:</strong> Hair salons, auto repair, healthcare</li>
            <li><strong>Grocery stores:</strong> Especially Trader Joe's proximity</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Minimal Impact (Under 10% revenue from students):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>High-end dining:</strong> Above typical student budgets</li>
            <li><strong>Luxury retail:</strong> Premium pricing</li>
            <li><strong>B2B services:</strong> Commercial/business customers</li>
            <li><strong>Residential neighborhood businesses:</strong> Far from campus/transport</li>
            <li><strong>Senior-focused services:</strong> Different demographic</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Know Your Exposure:</strong> Track revenue by customer type if possible. Ask customers "Are you a UCSC student?" at checkout for a month. Knowing your student percentage lets you plan appropriately.
          </p>
        </>
      )
    },
    {
      title: 'Planning for the Move-In Surge',
      content: (
        <>
          <p className="mb-4">
            Late September brings 17,000 students moving into Santa Cruz within a 2-week window. Businesses prepared for this surge capture significant revenue. Those unprepared miss opportunity or deliver poor service.
          </p>

          <p className="mb-6 mt-6">
            <strong>What Students Need During Move-In:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Household basics:</strong> Bedding, storage, cleaning supplies</li>
            <li><strong>Room decor:</strong> Posters, lights, furniture</li>
            <li><strong>First grocery shop:</strong> Pantry staples, easy meals</li>
            <li><strong>School supplies:</strong> Backpacks, notebooks, tech</li>
            <li><strong>Services:</strong> Phone setup, bank accounts, haircuts</li>
            <li><strong>Discovery:</strong> Finding favorite spots for food, coffee, study</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>How to Capture Move-In Business:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Stock relevant inventory in August for September arrival</li>
            <li>Student-focused promotions ("Welcome Back UCSC!")</li>
            <li>Extended hours during move-in weekend</li>
            <li>Extra staff to handle volume</li>
            <li>Loyalty programs starting immediately</li>
            <li>Campus area advertising (bulletin boards, orientation week)</li>
          </ul>

          <p className="mb-4 mt-6">
            Students forming habits in September-October become regulars all year. Miss this window and competitors capture their loyalty.
          </p>
        </>
      )
    },
    {
      title: 'Navigating the Break Exodus',
      content: (
        <>
          <p className="mb-4">
            Students disappear for extended breaks, creating demand craters that overlap with other seasonal patterns. This creates confusion and cash flow challenges if you're not prepared.
          </p>

          <p className="mb-6 mt-6">
            <strong>Winter Break Impact (Mid-December to Early January):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Student-dependent businesses see 40-60% revenue drop</li>
            <li>Overlaps with general Santa Cruz winter slowdown</li>
            <li>Compounded effect: no students + no tourists = brutal month</li>
            <li>Some offset from locals' holiday shopping</li>
          </ul>
          <p className="mb-4">
            <strong>Strategy:</strong> Reduce staffing to minimal levels. Schedule deep cleaning, maintenance, inventory. Use for strategic planning time.
          </p>

          <p className="mb-6 mt-8">
            <strong>Spring Break Impact (Late March):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>One week dropout in student revenue</li>
            <li>Spring weather starting to bring tourists</li>
            <li>Partial offset but still noticeable</li>
          </ul>
          <p className="mb-4">
            <strong>Strategy:</strong> If tourist-exposed, pivot marketing to spring visitors. If student-dependent, reduce hours or offer local appreciation promotions.
          </p>

          <p className="mb-6 mt-8">
            <strong>Summer Exodus (Mid-June to Late September):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Only ~3,000 summer session students remain</li>
            <li>Loss of 80%+ of student customer base</li>
            <li>But tourist season is peak—for some businesses this is net positive</li>
          </ul>
          <p className="mb-4">
            <strong>Strategy:</strong> If student-dependent, summer is survival mode unless you can pivot to tourists. If tourist-capable, this is your money-making season despite losing students.
          </p>
        </>
      )
    },
    {
      title: 'The Broke Student Cycle',
      content: (
        <>
          <p className="mb-4">
            Students follow a predictable spending pattern within each quarter. Understanding this helps you anticipate demand fluctuations.
          </p>

          <p className="mb-6 mt-6">
            <strong>Student Financial Cycle (Per Quarter):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Week 1-2:</strong> Money from financial aid, family, summer jobs. Relatively free spending.</li>
            <li><strong>Week 3-5:</strong> Initial funds depleting. More budget-conscious.</li>
            <li><strong>Week 6-8:</strong> Tight budgets. Essential spending only.</li>
            <li><strong>Week 9-10:</strong> Finals. Many subsisting on minimal spending.</li>
            <li><strong>Break:</strong> Replenish from home/family.</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>How This Affects Different Businesses:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Restaurants:</strong> Early quarter = dining out. Late quarter = ramen at home.</li>
            <li><strong>Retail:</strong> Early quarter = clothes shopping. Late quarter = window shopping.</li>
            <li><strong>Entertainment:</strong> Early quarter = movies, events. Late quarter = free activities.</li>
            <li><strong>Coffee shops:</strong> More consistent (studying essential), but fancy drinks vs basic coffee shifts.</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Capitalize on This:</strong> Offer promotions late in quarter when students are broke. Student-only discounts, happy hour specials, loyalty rewards timed to when they're most price-sensitive.
          </p>
        </>
      )
    },
    {
      title: 'Building Student Loyalty That Lasts',
      content: (
        <>
          <p className="mb-4">
            Students are here for 4+ years. Capture them as freshmen and you have a loyal customer for their entire college career—and potentially beyond as alumni.
          </p>

          <p className="mb-6 mt-6">
            <strong>Student Loyalty Strategies:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Student discount programs:</strong> Show ID for 10-15% off</li>
            <li><strong>Punch cards/loyalty:</strong> Visit frequency builds over years</li>
            <li><strong>Finals week specials:</strong> Support them during stress</li>
            <li><strong>Birthday promotions:</strong> Students love recognition</li>
            <li><strong>Social media engagement:</strong> Tag your business, get featured</li>
            <li><strong>Study-friendly environment:</strong> WiFi, seating, reasonable stay times</li>
            <li><strong>Late hours:</strong> Students operate on different schedules</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>What Students Value:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Price:</strong> Budget-conscious, sensitive to costs</li>
            <li><strong>Convenience:</strong> Near campus, on bus routes</li>
            <li><strong>Speed:</strong> Between classes, limited time</li>
            <li><strong>WiFi/outlets:</strong> Study space matters</li>
            <li><strong>Social environment:</strong> Want to see friends</li>
            <li><strong>Authenticity:</strong> Not corporate chains</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Alumni Effect:</strong> Students who loved your business often return as alumni visiting Santa Cruz or recommend to younger students. This creates decade-long customer relationships from a single freshman year capture.
          </p>
        </>
      )
    },
    {
      title: 'Adjusting Operations for Student Patterns',
      content: (
        <>
          <p className="mb-6">
            <strong>Staffing Adjustments:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Hire student workers:</strong> Their schedules align with demand</li>
            <li><strong>Reduce hours during breaks:</strong> No students = less demand</li>
            <li><strong>Extend hours during quarters:</strong> Students study late</li>
            <li><strong>Staff up for move-in:</strong> Surge capacity needed</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Marketing Calendar:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>September:</strong> Welcome back campaigns, student orientation</li>
            <li><strong>October:</strong> Habit formation, loyalty program push</li>
            <li><strong>Finals weeks:</strong> Study fuel promotions, stress relief</li>
            <li><strong>January:</strong> Budget-friendly options for broke students</li>
            <li><strong>April-May:</strong> Nice weather, outdoor activities</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Inventory Planning:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Stock up pre-quarter start</li>
            <li>Reduce inventory during breaks</li>
            <li>Budget-friendly options always available</li>
            <li>Quick meal solutions for time-pressed students</li>
          </ul>
        </>
      )
    }
  ]

  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-text">
            UC Santa Cruz Student Population Impact on Business Cycles
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Understand how UCSC's 17,000 students affect your revenue patterns. Plan for student arrival, breaks, and exodus to optimize operations and capture opportunities competitors miss.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Understanding Your Revenue Patterns?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses analyze revenue cycles, plan for predictable demand shifts, and build systems that account for both tourist and student seasonality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/packages/flow-check" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Get Your Flow Check
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Your Business Cycles
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

