import type { Metadata } from 'next'
import Link from 'next/link'
import { locations } from '@/content/locations'

export const metadata: Metadata = {
  title: { absolute: 'Structural Carpentry Locations Sydney | Strava Group' },
  description:
    'Strava Group works across Sydney — Inner West, North Shore, Eastern Suburbs, Northern Beaches, Hills District, and Ryde. Structural carpentry wherever you are building.',
  alternates: {
    canonical: 'https://www.stravagroupcarpentry.com.au/locations/',
  },
  openGraph: {
    title: 'Structural Carpentry Locations Sydney | Strava Group',
    description:
      'Strava Group works across Sydney — Inner West, North Shore, Eastern Suburbs, Northern Beaches, Hills District, and Ryde. Structural carpentry wherever you are building.',
    url: 'https://www.stravagroupcarpentry.com.au/locations/',
    siteName: 'Strava Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Structural Carpentry Locations Sydney | Strava Group',
    description:
      'Strava Group works across Sydney — Inner West, North Shore, Eastern Suburbs, Northern Beaches, Hills District, and Ryde. Structural carpentry wherever you are building.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stravagroupcarpentry.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.stravagroupcarpentry.com.au/locations/' },
  ],
}

export default function LocationsPage() {
  return (
    <main className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Page header */}
      <section className="bg-[#0C0C0C] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 mb-6 text-xs">
            <Link href="/" className="text-white/60 hover:text-white/90 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-gold">Locations</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Where We Work</h1>
          <p className="text-white/55 text-lg mt-5 max-w-2xl leading-relaxed">
            Structural carpentry across Greater Sydney. The specification doesn&apos;t change based on the suburb.
          </p>
        </div>
      </section>

      {/* Locations grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}/`}
                className="group border border-gray-200 hover:border-gold p-8 transition-all"
              >
                <h2 className="font-bold text-[#0C0C0C] text-2xl mb-3 group-hover:text-gold transition-colors">
                  {location.name}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{location.subheadline}</p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {location.suburbs.slice(0, 5).map((suburb) => (
                    <span key={suburb} className="text-xs text-gray-500 border border-gray-200 px-2 py-0.5">
                      {suburb}
                    </span>
                  ))}
                  {location.suburbs.length > 5 && (
                    <span className="text-xs text-gray-500">+{location.suburbs.length - 5} more</span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-[#8B6300] text-xs font-semibold tracking-[0.15em] uppercase">
                  <span>View area</span>
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C0C0C] mb-3">Don&apos;t see your suburb?</h2>
          <p className="text-[#0C0C0C]/70 mb-8 text-lg">We work across Greater Sydney. Get in touch and we&apos;ll let you know if we cover your area.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="bg-white hover:bg-offwhite text-[#0C0C0C] px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
            >
              Get a Quote
            </Link>
            <a
              href="tel:0450605080"
              className="border-2 border-[#0C0C0C] text-[#0C0C0C] hover:bg-black/10 px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
            >
              0450 605 080
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
