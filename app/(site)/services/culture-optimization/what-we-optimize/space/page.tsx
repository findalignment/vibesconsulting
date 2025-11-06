import Link from 'next/link'

export const metadata = { title: 'Physical & Digital Space — Culture & Environment Optimization' }

export default function SpacePage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/culture-optimization" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Culture & Environment Optimization
      </Link>

      <h1 className="mb-4">Physical & Digital Space Optimization</h1>
      <p className="text-xl text-white/90 mb-8">Your environment shapes behavior. We optimize workspaces (physical and digital) to support focus, collaboration, and well-being.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">Why Space Matters</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-3">Environment is culture made visible. A cluttered, loud, uncomfortable space signals chaos. A thoughtful, well-designed space signals care.</p>
            <p className="text-white/70 text-sm">Most businesses don't think about space optimization until morale tanks. We help you design environments that support the behaviors you want to see.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Physical Space Optimization</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Layout & Flow</h3>
              <p className="text-white/70 text-sm mb-3">Do people have space for focused work? Informal conversation? Collaboration? We assess and redesign.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Common improvements:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Create quiet zones for deep work (no talking, no pings)</li>
                  <li>• Designate collaboration zones (whiteboards, movable furniture)</li>
                  <li>• Add casual gathering spots (coffee nook, lounge area)</li>
                  <li>• Improve sightlines (can people see each other or are they isolated?)</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Noise & Acoustics</h3>
              <p className="text-white/70 text-sm mb-3">Open offices can be productivity killers. We assess noise levels and recommend fixes.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Common solutions:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Sound-absorbing panels or plants</li>
                  <li>• Designated phone booths or quiet rooms</li>
                  <li>• Headphone culture (when headphones are on, don't interrupt)</li>
                  <li>• White noise machines</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Lighting & Comfort</h3>
              <p className="text-white/70 text-sm mb-3">Bad lighting = bad morale. Uncomfortable furniture = distraction. We audit and optimize.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Common improvements:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Maximize natural light (remove barriers to windows)</li>
                  <li>• Add task lighting for individual control</li>
                  <li>• Upgrade chairs and desks (ergonomics matter)</li>
                  <li>• Temperature control (let people adjust their zones)</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Visual Identity & Vibe</h3>
              <p className="text-white/70 text-sm mb-3">Does your space reflect your values? Or is it generic corporate?</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Examples:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Display team work (projects, case studies)</li>
                  <li>• Art, plants, and color (make it feel alive)</li>
                  <li>• Remove corporate clichés (inspirational posters, generic art)</li>
                  <li>• Add personal touches (team photos, achievements)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Digital Space Optimization</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Tool Sprawl Reduction</h3>
              <p className="text-white/70 text-sm mb-3">Too many tools = cognitive overload. We audit your digital stack and consolidate.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Common consolidations:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Replace 3 project tools with 1 (e.g., Notion or Asana)</li>
                  <li>• Unify communication (Slack + email, not 5 channels)</li>
                  <li>• Archive unused tools (save money, reduce noise)</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Information Architecture</h3>
              <p className="text-white/70 text-sm mb-3">If people can't find what they need, they'll ask (or guess). We organize your digital workspace.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Examples:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Create centralized knowledge base (SOPs, templates, FAQs)</li>
                  <li>• Organize file structure (naming conventions, folder hierarchy)</li>
                  <li>• Implement search-friendly tagging</li>
                  <li>• Build onboarding portal for new hires</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Notification Management</h3>
              <p className="text-white/70 text-sm mb-3">Constant pings kill focus. We help teams set norms around notifications.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Strategies:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Define "urgent" vs. "can wait"</li>
                  <li>• Establish focus hours (no Slack between 9-11am)</li>
                  <li>• Use status indicators (DND, Available, In a Meeting)</li>
                  <li>• Batch notifications (check email 3x/day, not constantly)</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Remote/Hybrid Setup</h3>
              <p className="text-white/70 text-sm mb-3">If your team is distributed, the digital workspace IS the office. We optimize for async and sync work.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Best practices:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Default to async documentation (don't rely on meetings)</li>
                  <li>• Record meetings for those who can't attend</li>
                  <li>• Use time zone-friendly scheduling</li>
                  <li>• Create virtual "watercooler" space for casual chat</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Real Example: Wellness Studio</h2>
          <div className="card p-6 border-l-4 border-current-600">
            <p className="text-white/90 mb-3"><strong>Problem:</strong> Staff felt stressed and disconnected. Physical space was cramped and uninspiring.</p>

            <p className="text-white/90 mb-2 mt-4"><strong>Changes we made:</strong></p>
            <ul className="text-white/70 text-xs space-y-2 pl-3 mb-4">
              <li><strong>• Physical:</strong> Created staff lounge (comfortable seating, plants, natural light). Added lockers for personal storage.</li>
              <li><strong>• Physical:</strong> Improved acoustics (sound panels in noisy zones).</li>
              <li><strong>• Digital:</strong> Consolidated 4 scheduling tools into 1. Built internal knowledge base for class protocols.</li>
              <li><strong>• Digital:</strong> Established "no Slack after 7pm" norm to prevent burnout.</li>
            </ul>

            <p className="text-current-500 text-xs font-medium">Result: Staff satisfaction up 40%. Turnover dropped from 30%/year to 10%/year.</p>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Culture Optimization</h2>
          <p className="text-white/80">Physical and digital space optimization is a core part of our Culture & Environment Optimization work.</p>
          <Link href="/services/culture-optimization" className="text-current-500 hover:text-current-400 text-sm inline-block mt-4">Learn more →</Link>
        </section>
      </div>
    </div>
  )
}

