import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/content/services'
import { posts } from '@/content/posts'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: { absolute: 'Strava Group | Above-Standard Structural Carpentry Sydney' },
  description:
    'Strava Group delivers above-standard structural carpentry in Sydney. Licensed builder and licensed carpenter. Wall framing, subfloor framing, roof framing, decking, and more.',
  alternates: {
    canonical: 'https://www.stravagroupcarpentry.com.au/',
  },
  openGraph: {
    title: 'Strava Group | Above-Standard Structural Carpentry Sydney',
    description:
      'Above-standard structural carpentry in Sydney. Licensed builder and licensed carpenter. Built Once. Built Right.',
    url: 'https://www.stravagroupcarpentry.com.au/',
    siteName: 'Strava Group',
    type: 'website',
    images: [{ url: 'https://www.stravagroupcarpentry.com.au/aerial-frame-shot-single-house.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strava Group | Above-Standard Structural Carpentry Sydney',
    description:
      'Above-standard structural carpentry in Sydney. Licensed builder and licensed carpenter. Built Once. Built Right.',
    images: ['https://www.stravagroupcarpentry.com.au/aerial-frame-shot-single-house.webp'],
  },
}

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '✓', label: 'Licensed Builder' },
  { value: '✓', label: 'Licensed Carpenter' },
  { value: '8', label: 'Services' },
]

const differentiators = [
  {
    number: '01',
    title: 'Base Accuracy First',
    body: 'Set-out errors compound at every stage above them. We use true diagonal verification rather than 3-4-5, and correct level at slab — not disguised at top-plate. If the base is wrong, it cannot be corrected later without compromise.',
  },
  {
    number: '02',
    title: 'Tension-Based Bracing Only',
    body: 'Traditional compression bracing loses effectiveness as timber seasons and fixings loosen. We use tension-based systems exclusively — they actively restrain movement rather than reacting after it occurs, and maintain effectiveness over the life of the building.',
  },
  {
    number: '03',
    title: 'Nails and Structural Screws. Both.',
    body: 'Nail-only framing is the standard. The connections hold initially but loosen as timber seasons and cyclic loading works the joints. Every frame we build uses rear nailing, side fixing, and structural screws to all end studs — noggings included. A typical frame can be knocked apart with a hammer before it is braced. Ours cannot.',
  },
  {
    number: '04',
    title: 'No Liquid Nails',
    body: 'Liquid nails becomes brittle, does not accommodate movement, and debonds under cyclic loading. That leads directly to squeaking floors. We use polyurethane adhesive exclusively — it cushions, flexes, and holds over time.',
  },
]

const process = [
  { step: '01', title: 'Enquire', body: 'Contact us with your project details. We work with builders, developers, and private clients.' },
  { step: '02', title: 'Review', body: 'We review your plans and engineering documentation to understand full scope.' },
  { step: '03', title: 'Quote', body: 'You receive a detailed, transparent quote covering all labour and methods.' },
  { step: '04', title: 'Build', body: 'We execute to our above-standard specification, from base set-out through to final fix.' },
]

export default function HomePage() {
  return (
    <main>
      {/* â”€â”€ Hero â”€â”€ */}
      <section className="relative min-h-screen bg-[#0C0C0C] flex items-center overflow-hidden">
        <img
          src="/aerial-frame-shot-single-house.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(255,255,255,1) 59px,rgba(255,255,255,1) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(255,255,255,1) 59px,rgba(255,255,255,1) 60px)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-36">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.35em] uppercase">
                Strava Group — Sydney
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.0] tracking-tight mb-8">
              BUILT<br />
              ONCE.<br />
              <span className="text-gold">BUILT RIGHT.</span>
            </h1>

            <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-xl mb-12">
              Above-standard structural carpentry for builders and clients who prioritise
              long-term performance and structural integrity over minimum compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/"
                className="bg-gold hover:bg-gold-light text-white px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase transition-colors text-center"
              >
                Our Services
              </Link>
              <Link
                href="/contact/"
                className="border border-white/30 hover:border-white text-white px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase transition-colors text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-white/20" />
          <span className="text-white/55 text-xs tracking-[0.3em] uppercase">Scroll</span>
        </div>
      </section>

      {/* â”€â”€ Stats bar â”€â”€ */}
      <section className="bg-gold">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gold-dark">
            {stats.map((s) => (
              <div key={s.label} className="text-center py-2 px-4">
                <div className="text-2xl font-bold text-[#0C0C0C]">{s.value}</div>
                <div className="text-[#0C0C0C]/70 text-xs tracking-[0.2em] uppercase mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ About â”€â”€ */}
      <section className="bg-offwhite py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-gold" />
                <span className="text-[#8B6300] text-xs font-semibold tracking-[0.3em] uppercase">Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0C0C0C] leading-tight mb-6">
                Above-standard carpentry. By design.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Strava Group is a specialist carpentry division led by Stavrow (Stav) — a licensed
                carpenter and licensed builder who started his apprenticeship at 15.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Over more than a decade, the focus has been on understanding how buildings
                behave over time: where they fail, and why certain construction methods do not last.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                In most cases, failures are not the result of poor materials. They come from methods
                that meet minimum standards without accounting for cumulative tolerances, timber
                behaviour, and long-term load transfer.
              </p>
              <Link
                href="/contact/"
                className="inline-block bg-[#0C0C0C] hover:bg-charcoal text-white px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
              >
                Work With Us
              </Link>
            </div>

            <div className="bg-[#0C0C0C] p-10">
              <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-8">
                Experience Across
              </p>
              <ul className="space-y-5">
                {[
                  'High-end residential construction',
                  'Complex renovations and structural alterations',
                  'Commercial construction',
                  'Structural reframing and rectification',
                  'Shop fit-outs',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-gold flex-shrink-0 mt-1.5" />
                    <span className="text-white/70 text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Services â”€â”€ */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[#8B6300] text-xs font-semibold tracking-[0.3em] uppercase">What We Do</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C0C0C]">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services/"
              className="inline-block border border-[#0C0C0C] hover:bg-[#0C0C0C] hover:text-white text-[#0C0C0C] px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* â”€â”€ Why Different â”€â”€ */}
      <section className="bg-[#0C0C0C] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-10 bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Our Approach</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Why we build differently</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((d) => (
              <div
                key={d.number}
                className="border border-white/10 hover:border-gold p-8 transition-colors duration-200"
              >
                <div className="text-gold/55 text-6xl font-bold leading-none mb-5" aria-hidden="true">{d.number}</div>
                <h3 className="text-white font-bold text-xl mb-3">{d.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Process â”€â”€ */}
      <section className="bg-offwhite py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[#8B6300] text-xs font-semibold tracking-[0.3em] uppercase">How It Works</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C0C0C]">Our Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[-2rem] h-px bg-gray-300" />
                )}
                <div className="relative z-10 w-16 h-16 bg-[#0C0C0C] flex items-center justify-center mb-6">
                  <span className="text-gold font-bold text-base">{item.step}</span>
                </div>
                <h3 className="font-bold text-[#0C0C0C] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Blog â”€â”€ */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="h-px w-10 bg-gold" />
                <span className="text-[#8B6300] text-xs font-semibold tracking-[0.3em] uppercase">From the Blog</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0C0C0C]">What we know, written down</h2>
            </div>
            <Link
              href="/blog/"
              className="hidden sm:inline-block text-[#8B6300] text-xs font-semibold tracking-[0.2em] uppercase hover:underline"
            >
              All posts
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group border border-gray-200 hover:border-gold p-7 transition-all"
              >
                <p className="text-xs text-gray-500 mb-3">
                  {new Date(post.publishDate).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}
                  {' · '}{post.readingTime} min
                </p>
                <h3 className="font-bold text-[#0C0C0C] text-lg leading-snug mb-3 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link href="/blog/" className="text-[#8B6300] text-xs font-semibold tracking-[0.2em] uppercase hover:underline">
              All posts
            </Link>
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA â”€â”€ */}
      <section className="bg-gold py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0C0C0C] mb-4">
            Ready to build it right?
          </h2>
          <p className="text-[#0C0C0C]/70 text-lg mb-10 max-w-xl mx-auto">
            We work with builders, developers, and private clients across Sydney.
          </p>
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
