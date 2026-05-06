import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/content/services'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: { absolute: 'Structural Carpentry Services Sydney | Strava Group' },
  description:
    'Above-standard carpentry services in Sydney: wall framing, subfloor framing, roof framing, fit-out, cladding, decking & pergolas, wall removal, and restumping.',
  alternates: {
    canonical: 'https://www.stravagroupcarpentry.com.au/services/',
  },
  openGraph: {
    title: 'Structural Carpentry Services Sydney | Strava Group',
    description:
      'Above-standard carpentry services in Sydney: wall framing, subfloor framing, roof framing, fit-out, cladding, decking & pergolas, wall removal, and restumping.',
    url: 'https://www.stravagroupcarpentry.com.au/services/',
    siteName: 'Strava Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Structural Carpentry Services Sydney | Strava Group',
    description:
      'Above-standard carpentry services in Sydney: wall framing, subfloor framing, roof framing, fit-out, cladding, decking & pergolas, wall removal, and restumping.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stravagroupcarpentry.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.stravagroupcarpentry.com.au/services/' },
  ],
}

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Page header */}
      <section className="bg-[#0C0C0C] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 mb-6 text-xs">
            <Link href="/" className="text-white/60 hover:text-white/90 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-gold">Services</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Our Services</h1>
          <p className="text-white/55 text-lg mt-5 max-w-2xl leading-relaxed">
            Structural carpentry executed above minimum code requirements. Every service is delivered under the same above-standard specification.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* One standard */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[#8B6300] text-xs font-semibold tracking-[0.3em] uppercase">Our Standard</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="text-4xl font-bold text-[#0C0C0C] mb-6">Every service. One standard.</h2>
            <p className="text-gray-600 leading-relaxed">
              Across all services, Strava Group applies the same above-standard specification: enhanced fixings,
              correct materials, and methods that account for how buildings behave over time — not just how
              they appear on the day of inspection.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C0C0C] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-white/55 mb-8 text-lg">Contact us to discuss your project.</p>
          <Link
            href="/contact/"
            className="inline-block bg-gold hover:bg-gold-light text-[#0C0C0C] px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
