import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services } from '@/content/services'
import { locations } from '@/content/locations'

interface Props {
  params: Promise<{ slug: string }>
}

function renderFaqAnswer(text: string) {
  const hasLinks = /\[([^\]]+)\]\(([^)]+)\)/.test(text)
  if (!hasLinks) return <span>{text}</span>
  const html = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-[#8B6300] hover:underline font-medium transition-colors">$1</a>'
  )
  return <span dangerouslySetInnerHTML={{ __html: html }} />
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}

  return {
    title: { absolute: service.seoTitle },
    description: service.seoDescription,
    alternates: {
      canonical: `https://www.stravagroupcarpentry.com.au/services/${service.slug}/`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `https://www.stravagroupcarpentry.com.au/services/${service.slug}/`,
      siteName: 'Strava Group',
      type: 'website',
      images: service.image ? [{ url: `https://www.stravagroupcarpentry.com.au${service.image}`, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seoTitle,
      description: service.seoDescription,
      images: service.image ? [`https://www.stravagroupcarpentry.com.au${service.image}`] : [],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  // locations that offer this service
  const relatedLocations = locations.filter((l) =>
    l.services.some((s) => s.slug === service.slug)
  )

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stravagroupcarpentry.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.stravagroupcarpentry.com.au/services/' },
      { '@type': 'ListItem', position: 3, name: service.name, item: `https://www.stravagroupcarpentry.com.au/services/${service.slug}/` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.seoDescription,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.stravagroupcarpentry.com.au/#business',
      name: 'Strava Group',
    },
    areaServed: { '@type': 'City', name: 'Sydney' },
    url: `https://www.stravagroupcarpentry.com.au/services/${service.slug}/`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <main className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Page header */}
      <section className="bg-[#0C0C0C] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 mb-6 text-xs">
            <Link href="/" className="text-white/60 hover:text-white/90 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/services/" className="text-white/60 hover:text-white/90 transition-colors">Services</Link>
            <span className="text-white/20">/</span>
            <span className="text-gold">{service.name}</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">{service.name}</h1>
          <p className="text-white/55 text-lg mt-5 max-w-2xl leading-relaxed">{service.shortDescription}</p>
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

      {/* Service image */}
      {service.image && (
        <div className="bg-white pt-10">
          <div className="max-w-7xl mx-auto px-6">
            <img
              src={service.image}
              alt={`${service.name} — Strava Group Sydney`}
              className="w-full h-auto block"
              loading="lazy"
              width={1000}
              height={667}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Description */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-gold" />
                <span className="text-[#8B6300] text-xs font-semibold tracking-[0.3em] uppercase">How We Do It</span>
              </div>
              <div className="space-y-5">
                {service.description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-lg">{para}</p>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href={`/contact/?service=${encodeURIComponent(service.name)}`}
                  className="inline-block bg-[#0C0C0C] hover:bg-gold text-white px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Features */}
            <div className="bg-offwhite p-8 md:p-10">
              <p className="font-bold text-[#0C0C0C] text-xs tracking-[0.25em] uppercase mb-7">
                What&apos;s Included
              </p>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold flex-shrink-0 mt-1.5" />
                    <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Where we work */}
      {relatedLocations.length > 0 && (
        <section className="bg-offwhite py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[#8B6300] text-xs font-semibold tracking-[0.3em] uppercase">Where We Work</span>
            </div>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl">
              We provide {service.name.toLowerCase()} across Sydney. Select your area for local information.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {relatedLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}/`}
                  className="bg-white border border-gray-200 hover:border-gold px-4 py-3 text-center group transition-all"
                >
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gold transition-colors">
                    {location.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 max-w-3xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-gold" />
            <h2 className="text-xl font-bold text-[#0C0C0C] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <div key={i} className="border-l-2 border-gold pl-5">
                <p className="font-bold text-[#0C0C0C] mb-2">{faq.q}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{renderFaqAnswer(faq.a)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-[#0C0C0C]">Other Services</h2>
            <Link
              href="/services/"
              className="text-[#8B6300] text-xs font-semibold tracking-[0.2em] uppercase hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="bg-white border border-gray-200 hover:border-gold p-6 group transition-all"
              >
                <h3 className="font-bold text-[#0C0C0C] text-lg mb-2 group-hover:text-gold transition-colors">
                  {s.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C0C0C] mb-3">Built Once. Built Right.</h2>
          <p className="text-[#0C0C0C]/70 mb-8 text-lg">Talk to us about your next project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contact/?service=${encodeURIComponent(service.name)}`}
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
