import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { locations } from '@/content/locations'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const location = locations.find((l) => l.slug === slug)
  if (!location) return {}

  return {
    title: { absolute: location.seoTitle },
    description: location.seoDescription,
    alternates: {
      canonical: `https://www.stravagroupcarpentry.com.au/locations/${location.slug}/`,
    },
    openGraph: {
      title: location.seoTitle,
      description: location.seoDescription,
      url: `https://www.stravagroupcarpentry.com.au/locations/${location.slug}/`,
      siteName: 'Strava Group',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: location.seoTitle,
      description: location.seoDescription,
    },
  }
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const location = locations.find((l) => l.slug === slug)
  if (!location) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stravagroupcarpentry.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.stravagroupcarpentry.com.au/locations/' },
      { '@type': 'ListItem', position: 3, name: location.name, item: `https://www.stravagroupcarpentry.com.au/locations/${location.slug}/` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <main className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Page header */}
      <section className="bg-[#0C0C0C] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 mb-6 text-xs">
            <Link href="/" className="text-white/60 hover:text-white/90 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/locations/" className="text-white/60 hover:text-white/90 transition-colors">Locations</Link>
            <span className="text-white/20">/</span>
            <span className="text-gold">{location.name}</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">{location.headline}</h1>
          <p className="text-white/55 text-lg mt-5 max-w-2xl leading-relaxed">{location.subheadline}</p>
          <div className="flex flex-wrap gap-2 mt-8">
            {location.suburbs.map((suburb) => (
              <span
                key={suburb}
                className="text-white/60 text-xs border border-white/25 px-3 py-1"
              >
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-gold">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 justify-center sm:justify-start">
            {[
              'Licensed Builder (BLD)',
              'Licensed Carpenter',
              '10+ Years Experience',
              'Sydney Wide',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#0C0C0C] flex-shrink-0" />
                <span className="text-[#0C0C0C] text-xs font-semibold tracking-[0.15em] uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image placeholder + description */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Description */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-gold" />
                <span className="text-[#8B6300] text-xs font-semibold tracking-[0.3em] uppercase">About This Area</span>
              </div>
              <div className="space-y-5">
                {location.description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-lg">{para}</p>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/contact/"
                  className="inline-block bg-[#0C0C0C] hover:bg-gold text-white px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            <div>
              <img
                src={location.image}
                alt={`${location.name} carpentry — Strava Group`}
                className="w-full h-auto block"
                fetchPriority="high"
                width={1000}
                height={667}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[#8B6300] text-xs font-semibold tracking-[0.3em] uppercase">What We Do Here</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {location.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="bg-white border border-gray-200 hover:border-gold p-8 group transition-all"
              >
                <h3 className="font-bold text-[#0C0C0C] text-xl mb-3 group-hover:text-gold transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                <div className="flex items-center gap-2 text-[#8B6300] text-xs font-semibold tracking-[0.15em] uppercase">
                  <span>Learn more</span>
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

      {/* Why local */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={location.image}
                alt={`${location.name} carpentry work — Strava Group`}
                className="w-full h-auto block"
                loading="lazy"
                width={1000}
                height={667}
              />
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-gold" />
                <span className="text-[#8B6300] text-xs font-semibold tracking-[0.3em] uppercase">Why Local Matters</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{location.whyLocal}</p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact/"
                  className="inline-block bg-[#0C0C0C] hover:bg-gold text-white px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:0450605080"
                  className="inline-block border-2 border-[#0C0C0C] text-[#0C0C0C] hover:bg-[#0C0C0C] hover:text-white px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
                >
                  0450 605 080
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-offwhite py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-10 bg-gold" />
              <h2 className="text-xl font-bold text-[#0C0C0C] tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              {location.faqs.map((faq, i) => (
                <div key={i} className="border-l-2 border-gold pl-5">
                  <p className="font-bold text-[#0C0C0C] mb-2">{faq.q}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Suburbs served */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[#8B6300] text-xs font-semibold tracking-[0.3em] uppercase">Suburbs We Serve</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {location.suburbs.map((suburb) => (
              <span
                key={suburb}
                className="bg-offwhite border border-gray-200 text-gray-600 text-sm px-4 py-2"
              >
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C0C0C] mb-3">Working in {location.name}?</h2>
          <p className="text-[#0C0C0C]/70 mb-8 text-lg">Talk to us about your next project.</p>
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
