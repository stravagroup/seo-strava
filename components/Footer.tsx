import Link from 'next/link'

const serviceLinks = [
  { name: 'Wall Framing', slug: 'wall-framing' },
  { name: 'Subfloor Framing', slug: 'subfloor-framing' },
  { name: 'Roof Framing', slug: 'roof-framing' },
  { name: 'Fit Out', slug: 'fit-out' },
  { name: 'Cladding', slug: 'cladding' },
  { name: 'Decking & Pergolas', slug: 'decking-pergolas' },
  { name: 'Wall Removal', slug: 'wall-removal' },
  { name: 'Restumping', slug: 'restumping' },
]

const locationLinks = [
  { name: 'Inner West', slug: 'inner-west' },
  { name: 'North Shore', slug: 'north-shore' },
  { name: 'Eastern Suburbs', slug: 'eastern-suburbs' },
  { name: 'Northern Beaches', slug: 'northern-beaches' },
  { name: 'Hills District', slug: 'hills-district' },
  { name: 'Ryde & Gladesville', slug: 'ryde' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <img
                src="/strava-group-carpentry-logo.webp"
                alt="Strava Group Carpentry"
                width={160}
                height={48}
                loading="lazy"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/65 text-sm leading-relaxed max-w-xs">
              Above-standard structural carpentry for builders and clients who prioritise long-term performance over minimum compliance.
            </p>
            <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mt-5">
              Built Once. Built Right.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-[0.25em] uppercase mb-6">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="text-white/65 hover:text-gold text-sm transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-[0.25em] uppercase mb-6">Locations</h3>
            <ul className="space-y-2.5">
              {locationLinks.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/locations/${l.slug}/`}
                    className="text-white/65 hover:text-gold text-sm transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-[0.25em] uppercase mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="tel:0450605080"
                className="block text-white/65 hover:text-white text-sm transition-colors"
              >
                0450 605 080
              </a>
              <a
                href="mailto:stav@stravagroup.com.au"
                className="block text-white/65 hover:text-white text-sm transition-colors break-all"
              >
                stav@stravagroup.com.au
              </a>
              <p className="text-white/65 text-sm">Sydney, NSW, Australia</p>
              <Link
                href="/contact/"
                className="inline-block bg-gold hover:bg-gold-light text-[#0C0C0C] px-5 py-2.5 text-xs font-bold tracking-[0.2em] uppercase transition-colors mt-2"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/55 text-xs">
            © {new Date().getFullYear()} Strava Group. All rights reserved. Licensed Builder & Carpenter.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-white/55 hover:text-white text-xs transition-colors">Home</Link>
            <Link href="/services/" className="text-white/55 hover:text-white text-xs transition-colors">Services</Link>
            <Link href="/blog/" className="text-white/55 hover:text-white text-xs transition-colors">Blog</Link>
            <Link href="/contact/" className="text-white/55 hover:text-white text-xs transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
