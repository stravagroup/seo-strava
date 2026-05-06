import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/content/posts'

export const metadata: Metadata = {
  title: { absolute: 'Structural Carpentry Blog Sydney | Strava Group' },
  description:
    'Practical writing on structural carpentry â€” why subfloors squeak, what restumping costs in Sydney, the difference between Baltic and Radiata Pine, and how to tell if a wall is load bearing.',
  alternates: {
    canonical: 'https://www.stravagroupcarpentry.com.au/blog/',
  },
  openGraph: {
    type: 'website',
    title: 'Structural Carpentry Blog Sydney | Strava Group',
    description:
      'Practical writing on structural carpentry â€” why subfloors squeak, what restumping costs in Sydney, the difference between Baltic and Radiata Pine, and how to tell if a wall is load bearing.',
    url: 'https://www.stravagroupcarpentry.com.au/blog/',
    siteName: 'Strava Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Structural Carpentry Blog Sydney | Strava Group',
    description:
      'Practical writing on structural carpentry â€” why subfloors squeak, what restumping costs in Sydney, the difference between Baltic and Radiata Pine, and how to tell if a wall is load bearing.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stravagroupcarpentry.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.stravagroupcarpentry.com.au/blog/' },
  ],
}

export default function BlogIndexPage() {
  return (
    <main className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Header */}
      <section className="bg-[#0C0C0C] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 mb-6 text-xs">
            <Link href="/" className="text-white/60 hover:text-white/90 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-gold">Blog</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">From the Blog</h1>
          <p className="text-white/55 text-lg mt-5 max-w-2xl leading-relaxed">
            Practical writing on structural carpentry â€” what the difference actually is, where things go wrong, and how to avoid paying for someone else&apos;s shortcuts.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured post */}
          <Link
            href={`/blog/${posts[0].slug}/`}
            className="group block border border-gray-200 hover:border-gold transition-all mb-8 p-8 md:p-12"
          >
            <p className="text-xs text-gray-500 mb-3">
              {new Date(posts[0].publishDate).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
              {' Â· '}{posts[0].readingTime} min read
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C0C0C] group-hover:text-gold transition-colors leading-tight mb-4 max-w-3xl">
              {posts[0].title}
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-2xl mb-6">{posts[0].excerpt}</p>
            <div className="flex items-center gap-2 text-[#8B6300] text-xs font-semibold tracking-[0.15em] uppercase">
              <span>Read article</span>
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

          {/* Remaining posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group border border-gray-200 hover:border-gold p-7 transition-all"
              >
                <p className="text-xs text-gray-500 mb-3">
                  {new Date(post.publishDate).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
                  {' Â· '}{post.readingTime} min read
                </p>
                <h2 className="font-bold text-[#0C0C0C] text-xl leading-snug mb-3 group-hover:text-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-[#8B6300] text-xs font-semibold tracking-[0.15em] uppercase">
                  <span>Read article</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C0C0C] mb-3">Built Once. Built Right.</h2>
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
