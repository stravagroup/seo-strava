import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Strava Group | Above-Standard Structural Carpentry Sydney',
    template: '%s | Strava Group',
  },
  description:
    'Strava Group is a specialist carpentry division delivering above-standard structural carpentry in Sydney. Licensed builder and licensed carpenter. Built Once. Built Right.',
  keywords: [
    'carpentry sydney',
    'structural carpentry sydney',
    'wall framing sydney',
    'roof framing sydney',
    'subfloor framing sydney',
    'licensed carpenter sydney',
    'licensed builder sydney',
    'wall removal sydney',
    'decking pergola sydney',
  ],
  icons: {
    icon: '/strava-group-carpentry-logo.webp',
    shortcut: '/strava-group-carpentry-logo.webp',
    apple: '/strava-group-carpentry-logo.webp',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://www.stravagroupcarpentry.com.au/',
    siteName: 'Strava Group',
    title: 'Strava Group | Above-Standard Structural Carpentry Sydney',
    description:
      'Above-standard structural carpentry. Licensed builder and licensed carpenter. Built Once. Built Right.',
    images: [{ url: 'https://www.stravagroupcarpentry.com.au/aerial-frame-shot-single-house.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strava Group | Above-Standard Structural Carpentry Sydney',
    description:
      'Above-standard structural carpentry. Licensed builder and licensed carpenter. Built Once. Built Right.',
    images: ['https://www.stravagroupcarpentry.com.au/aerial-frame-shot-single-house.webp'],
  },
  alternates: {
    canonical: 'https://www.stravagroupcarpentry.com.au/',
  },
  verification: {
    google: 'C2rWa0Wl0gI2jjifiUG-SonNWLUMgQmD0cJCVn-Dc9E',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.stravagroupcarpentry.com.au/#business',
  name: 'Strava Group',
  url: 'https://www.stravagroupcarpentry.com.au',
  telephone: '+61450605080',
  email: 'stav@stravagroup.com.au',
  description:
    'Above-standard structural carpentry in Sydney. Licensed builder and licensed carpenter. Wall framing, subfloor framing, roof framing, decking, pergolas, wall removal, and restumping.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sydney',
    addressRegion: 'NSW',
    addressCountry: 'AU',
  },
  areaServed: { '@type': 'City', name: 'Sydney' },
  priceRange: '$$',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
