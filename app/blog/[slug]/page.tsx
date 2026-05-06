import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '@/content/posts'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: { absolute: post.seoTitle },
    description: post.seoDescription,
    alternates: {
      canonical: `https://www.stravagroupcarpentry.com.au/blog/${post.slug}/`,
    },
    openGraph: {
      type: 'article',
      title: post.seoTitle,
      description: post.seoDescription,
      url: `https://www.stravagroupcarpentry.com.au/blog/${post.slug}/`,
      siteName: 'Strava Group',
      publishedTime: post.publishDate,
      authors: ['Stav — Strava Group'],
      images: post.image ? [{ url: `https://www.stravagroupcarpentry.com.au${post.image}`, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.seoDescription,
      images: post.image ? [`https://www.stravagroupcarpentry.com.au${post.image}`] : [],
    },
  }
}

// Process [text](/href/) markdown links into anchor tags
function renderParagraph(text: string, className = 'text-gray-600 leading-relaxed text-lg') {
  const hasLinks = /\[([^\]]+)\]\(([^)]+)\)/.test(text)
  if (!hasLinks) {
    return <p className={className}>{text}</p>
  }
  const html = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-[#8B6300] hover:underline font-medium transition-colors">$1</a>'
  )
  return <p className={className} dangerouslySetInnerHTML={{ __html: html }} />
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stravagroupcarpentry.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.stravagroupcarpentry.com.au/blog/' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.stravagroupcarpentry.com.au/blog/${post.slug}/` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      '@type': 'Person',
      name: 'Stav',
      jobTitle: 'Licensed Builder & Carpenter',
      worksFor: {
        '@type': 'Organization',
        name: 'Strava Group',
        url: 'https://www.stravagroupcarpentry.com.au',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Strava Group',
      url: 'https://www.stravagroupcarpentry.com.au',
    },
    url: `https://www.stravagroupcarpentry.com.au/blog/${post.slug}/`,
  }

  const publishDateFormatted = new Date(post.publishDate).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <main id="top" className="pt-24">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Page header */}
      <section className="bg-[#0C0C0C] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 mb-6 text-xs">
            <Link href="/" className="text-white/60 hover:text-white/90 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/blog/" className="text-white/60 hover:text-white/90 transition-colors">Blog</Link>
            <span className="text-white/20">/</span>
            <span className="text-gold truncate max-w-xs">{post.title}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl leading-tight">
            {post.title}
          </h1>
          {/* Author byline */}
          <div className="flex flex-wrap items-center gap-5 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gold flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                S
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Stav</p>
                <p className="text-white/40 text-xs">Licensed Builder &amp; Carpenter</p>
              </div>
            </div>
            <div className="w-px h-8 bg-white/15 hidden sm:block" />
            <p className="text-white/40 text-xs">{publishDateFormatted}</p>
            <div className="w-px h-8 bg-white/15 hidden sm:block" />
            <p className="text-white/40 text-xs">{post.readingTime} min read</p>
          </div>
          {/* Author bio */}
          <p className="text-white/35 text-sm leading-relaxed mt-6 max-w-2xl">
            Stav is a licensed builder and licensed carpenter based in Sydney with over ten years in structural carpentry.
            He started his apprenticeship at 15 and has spent the decade since working out why most buildings fail —
            and building them so they don&apos;t.
          </p>
        </div>
      </section>

      {/* Featured image */}
      {post.image && (
        <div className="bg-white pt-10">
          <div className="max-w-7xl mx-auto px-6">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto block"
              loading="lazy"
              width={1000}
              height={667}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-14">

            {/* Sticky TOC — desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0C0C0C] mb-4">
                  Contents
                </p>
                <nav>
                  <ul className="space-y-2.5 border-l border-gray-200">
                    {post.sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="block pl-4 text-sm text-gray-500 hover:text-gold transition-colors leading-snug"
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="#faq"
                        className="block pl-4 text-sm text-gray-500 hover:text-gold transition-colors"
                      >
                        Frequently Asked Questions
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Article body */}
            <article>
              {/* Lead */}
              <p className="text-gray-500 text-xl leading-relaxed border-l-4 border-gold pl-5 mb-12">
                {post.excerpt}
              </p>

              {/* Sections */}
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl font-bold text-[#0C0C0C] mb-5 leading-tight">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.body.map((para, i) => renderParagraph(para, 'text-gray-600 leading-relaxed text-lg'))}
                  </div>
                </section>
              ))}

              {/* FAQ */}
              <section id="faq" className="mt-14 scroll-mt-28">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-10 bg-gold" />
                  <h2 className="text-xl font-bold text-[#0C0C0C] tracking-tight">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="space-y-6">
                  {post.faqs.map((faq, i) => (
                    <div key={i} className="border-l-2 border-gold pl-5">
                      <p className="font-bold text-[#0C0C0C] mb-2">{faq.q}</p>
                      <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* References */}
              {post.references.length > 0 && (
                <section className="mt-14 pt-8 border-t border-gray-200">
                  <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 mb-4">
                    Sources &amp; Further Reading
                  </p>
                  <ul className="space-y-2">
                    {post.references.map((ref) => (
                      <li key={ref.url}>
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-500 hover:text-gold transition-colors"
                        >
                          {ref.title} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {/* Back to top */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <a href="#top" className="text-sm text-gray-500 hover:text-gold transition-colors">
                  ↑ Back to top
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* More posts */}
      <section className="bg-offwhite py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-[#0C0C0C]">More from the blog</h2>
            <Link href="/blog/" className="text-[#8B6300] text-xs font-semibold tracking-[0.2em] uppercase hover:underline">
              All posts
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}/`}
                  className="bg-white border border-gray-200 hover:border-gold p-6 group transition-all"
                >
                  <p className="text-xs text-gray-500 mb-3">
                    {new Date(p.publishDate).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}
                    {' · '}{p.readingTime} min
                  </p>
                  <h3 className="font-bold text-[#0C0C0C] text-base leading-snug mb-3 group-hover:text-gold transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.excerpt}</p>
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
