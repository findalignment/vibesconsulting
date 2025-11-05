import type { Metadata } from 'next'

export function createMetadata(
  {
    title = 'Vibes Consulting',
    description = 'We fix the flow — TQM + human systems + safe AI for small businesses in Santa Cruz.',
    url = 'https://vibesconsulting.com',
    image = '/og-image.png'
  } = {}
): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(url),
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
      siteName: 'Vibes Consulting',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  }
}

