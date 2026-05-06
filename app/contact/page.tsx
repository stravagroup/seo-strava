import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Contact Strava Group | Structural Carpentry Sydney' },
  description:
    'Get in touch with Strava Group for above-standard structural carpentry in Sydney. Licensed builder and licensed carpenter â€” 0450 605 080.',
  alternates: {
    canonical: 'https://www.stravagroupcarpentry.com.au/contact/',
  },
  openGraph: {
    title: 'Contact Strava Group | Structural Carpentry Sydney',
    description:
      'Get in touch with Strava Group for above-standard structural carpentry in Sydney. Licensed builder and licensed carpenter â€” 0450 605 080.',
    url: 'https://www.stravagroupcarpentry.com.au/contact/',
    siteName: 'Strava Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Strava Group | Structural Carpentry Sydney',
    description:
      'Get in touch with Strava Group for above-standard structural carpentry in Sydney. Licensed builder and licensed carpenter â€” 0450 605 080.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stravagroupcarpentry.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.stravagroupcarpentry.com.au/contact/' },
  ],
}

export default function ContactPage() {
  return (
    <main className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Page header */}
      <section className="bg-[#0C0C0C] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 mb-6 text-xs">
            <Link href="/" className="text-white/60 hover:text-white/90 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-gold">Contact</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Get in Touch</h1>
          <p className="text-white/55 text-lg mt-5 max-w-2xl leading-relaxed">
            We work with builders, developers, and private clients across Sydney. Tell us about your project.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Details */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-gold" />
                <span className="text-[#8B6300] text-xs font-semibold tracking-[0.3em] uppercase">Contact Details</span>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">Phone</p>
                  <a
                    href="tel:0450605080"
                    className="text-3xl font-bold text-[#0C0C0C] hover:text-gold transition-colors"
                  >
                    0450 605 080
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">Email</p>
                  <a
                    href="mailto:stav@stravagroupcarpentry.com.au"
                    className="text-xl font-semibold text-[#0C0C0C] hover:text-gold transition-colors"
                  >
                    stav@stravagroupcarpentry.com.au
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">Location</p>
                  <p className="text-xl font-semibold text-[#0C0C0C]">Sydney, NSW, Australia</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">Website</p>
                  <p className="text-xl font-semibold text-[#0C0C0C]">www.stravagroupcarpentry.com.au</p>
                </div>
              </div>

              <div className="mt-12 bg-offwhite p-8">
                <h3 className="font-bold text-[#0C0C0C] text-sm tracking-[0.2em] uppercase mb-5">
                  Who We Work With
                </h3>
                <ul className="space-y-3">
                  {['Builders and developers', 'Owner-builders', 'Architects and designers', 'Private homeowners'].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-gold" />
                <span className="text-[#8B6300] text-xs font-semibold tracking-[0.3em] uppercase">Send a Message</span>
              </div>

              {/* Note: connect action to a form service (e.g. Formspree) before going live */}
              <form
                action="https://formspree.io/f/xrejkyez"
                method="POST"
                encType="multipart/form-data"
                className="space-y-5"
              >
                {/* Subject is set by the page the user came from — updated client-side */}
                <input type="hidden" name="_subject" id="form-subject" defaultValue="Website Enquiry — Strava Group" />
                <script dangerouslySetInnerHTML={{ __html: `(function(){var s=new URLSearchParams(window.location.search).get('service');if(s){var el=document.getElementById('form-subject');if(el)el.value=s+' Enquiry — Strava Group';}})();` }} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      required
                      placeholder="First name"
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      required
                      placeholder="Last name"
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="wall-framing">Wall Framing</option>
                    <option value="subfloor-framing">Subfloor Framing</option>
                    <option value="roof-framing">Roof Framing</option>
                    <option value="fit-out">Fit Out</option>
                    <option value="cladding">Cladding</option>
                    <option value="decking-pergolas">Decking & Pergolas</option>
                    <option value="wall-removal">Wall Removal</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project â€” scope, location, timeline..."
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
                    Plans / Blueprints{' '}
                    <span className="normal-case tracking-normal font-normal text-gray-400">(optional â€” PDF, max 10 MB)</span>
                  </label>
                  <input
                    type="file"
                    name="attachment"
                    accept=".pdf,application/pdf"
                    className="w-full border border-gray-200 text-sm text-gray-500 transition-colors cursor-pointer
                      file:mr-4 file:py-3 file:px-4 file:border-0 file:border-r file:border-gray-200
                      file:text-xs file:font-semibold file:tracking-[0.15em] file:uppercase
                      file:bg-[#0C0C0C] file:text-white file:cursor-pointer
                      hover:border-gold hover:file:bg-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0C0C0C] hover:bg-gold text-white py-4 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
