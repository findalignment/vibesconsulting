import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vibes.consulting'
  
  // Main pages
  const mainPages = [
    { url: '', priority: 1, changeFrequency: 'daily' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  // Services pages
  const servicesPages = [
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/services/business-flow', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/services/ai-integration', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/services/culture-optimization', priority: 0.85, changeFrequency: 'weekly' as const },
  ]

  // Packages pages
  const packagesPages = [
    { url: '/packages', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/packages/flow-check', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/packages/flow-rebuild', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/packages/vibe-partnership', priority: 0.85, changeFrequency: 'weekly' as const },
  ]

  // Case studies
  const caseStudiesPages = [
    { url: '/case-studies', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/case-studies/consulting-collective', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/case-studies/retail-testing-space', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/case-studies/training-studio', priority: 0.75, changeFrequency: 'monthly' as const },
  ]

  // Blog hub pages (NEW - high priority for SEO)
  const blogHubPages = [
    { url: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
    { url: '/blog/santa-cruz-business', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/blog/team-leadership', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/blog/systems-operations', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/blog/ai-technology', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/blog/growth-scaling', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/blog/productivity-time-management', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/blog/client-experience', priority: 0.85, changeFrequency: 'weekly' as const },
  ]

  // Individual blog posts (lower priority but important for SEO)
  const blogPosts = [
    '/blog/ai-for-humans',
    '/blog/ai-for-santa-cruz-businesses',
    '/blog/automation-without-losing-personal-touch',
    '/blog/santa-cruz-boutique-fitness-operations',
    '/blog/santa-cruz-fitness-scheduling-nightmare',
    '/blog/santa-cruz-gym-membership-retention',
    '/blog/santa-cruz-fitness-client-communication',
    '/blog/santa-cruz-fitness-facilities-operations',
    '/blog/santa-cruz-wellness-business-intake',
    '/blog/santa-cruz-wellness-business-systems',
    '/blog/santa-cruz-wellness-industry-evolution',
    '/blog/restaurant-operations-santa-cruz',
    '/blog/retail-operations-santa-cruz',
    '/blog/creative-agencies-santa-cruz',
    '/blog/scaling-service-business-santa-cruz',
    '/blog/santa-cruz-small-business-operations',
    '/blog/sustainable-business-operations-santa-cruz',
    '/blog/meeting-overload-santa-cruz',
    '/blog/seasonal-business-operations',
    '/blog/team-asks-permission-everything',
    '/blog/decision-making-small-teams',
    '/blog/decisions-get-revisited',
    '/blog/team-autonomy-without-chaos',
    '/blog/delegate-but-still-doing-everything',
    '/blog/micromanaging-without-realizing',
    '/blog/founder-cant-take-vacation',
    '/blog/knowledge-in-founders-head',
    '/blog/repeating-same-questions',
    '/blog/documentation-that-actually-gets-used',
    '/blog/hiring-fixes-nothing',
    '/blog/new-hires-take-months',
    '/blog/good-people-bad-systems',
    '/blog/hiring-season-preparation',
    '/blog/team-waiting-for-answers',
    '/blog/team-siloed-not-collaborating',
    '/blog/information-scattered-everywhere',
    '/blog/quality-inconsistent-across-team',
    '/blog/quality-standards-not-documented',
    '/blog/team-working-late-accomplishing-less',
    '/blog/handoffs-where-work-dies',
    '/blog/waste-in-business-operations',
    '/blog/operational-sustainability-efficiency',
    '/blog/feedback-loops-dont-exist',
    '/blog/grew-past-informal-systems',
    '/blog/onboarding-bottleneck-local-business',
    '/blog/standard-operating-procedures-ignored',
    '/blog/data-privacy-ai-local-business',
    '/blog/too-many-tools-low-adoption',
    '/blog/crm-for-non-technical-owners',
    '/blog/growing-pains-feel-permanent',
    '/blog/growth-without-burnout',
    '/blog/sustainable-growth-versus-growth-at-all-costs',
    '/blog/building-business-that-lasts',
    '/blog/small-business-sustainability-paradox',
    '/blog/revenue-up-profits-flat',
    '/blog/lost-what-made-you-special',
    '/blog/busy-but-not-productive',
    '/blog/working-in-business-not-on',
    '/blog/urgent-always-beats-important',
    '/blog/reactive-not-proactive',
    '/blog/meetings-become-more-meetings',
    '/blog/calendar-owns-you',
    '/blog/context-switching-killing-productivity',
    '/blog/inbox-zero-myth',
    '/blog/async-communication-small-business',
    '/blog/client-work-versus-business-building',
    '/blog/first-impression-operational-failure',
    '/blog/client-expectations-misaligned',
    '/blog/client-experience-inconsistent',
    '/blog/consistency-secret-shopper-perspective',
    '/blog/25-years-secret-shopping-operations',
    '/blog/secret-shopping-small-business-insights',
    '/blog/secret-shopper-reveals-training-gaps',
    '/blog/employee-experience-secret-shopper',
    '/blog/client-retention-through-systems',
    '/blog/customer-experience-operations-disconnect',
    '/blog/culture-productivity-hack',
    '/blog/communication-breakdowns-constant',
    '/blog/scope-creep-every-project',
    '/blog/project-timelines-always-slip',
    '/blog/saying-yes-to-everything',
    '/blog/path-of-least-resistance',
    '/blog/why-business-feels-harder',
  ].map(url => ({ url, priority: 0.6, changeFrequency: 'monthly' as const }))

  // Resources pages
  const resourcesPages = [
    { url: '/resources/5-signs', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/resources/10-minute-audit', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/resources/delegation-framework', priority: 0.75, changeFrequency: 'monthly' as const },
  ]

  // Approach pages
  const approachPages = [
    { url: '/approach/human-centered-systems', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/approach/safe-ai-enablement', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/approach/tqm-principles', priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  // Legal pages
  const legalPages = [
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/return-policy', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  // Combine all pages
  const allPages = [
    ...mainPages,
    ...servicesPages,
    ...packagesPages,
    ...caseStudiesPages,
    ...blogHubPages,
    ...blogPosts,
    ...resourcesPages,
    ...approachPages,
    ...legalPages,
  ]

  return allPages.map(({ url, priority, changeFrequency }) => ({
    url: `${base}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}

