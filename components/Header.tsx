'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { services } from '@/content/services'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesHovered, setServicesHovered] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-[#0C0C0C] shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)}>
          <img
            src="/strava-group-carpentry-logo.webp"
            alt="Strava Group Carpentry"
            width={160}
            height={48}
            className="h-14 w-auto object-contain brightness-0 invert"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-white/70 hover:text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
          >
            Home
          </Link>

          {/* Services with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesHovered(true)}
            onMouseLeave={() => setServicesHovered(false)}
          >
            <button className="flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors">
              Services
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${servicesHovered ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown panel — pt-3 creates an invisible bridge so mouse doesn't lose hover between button and panel */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-56 pt-3 transition-all duration-200 ${
                servicesHovered ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
            <div className="bg-[#0C0C0C] border border-white/10 shadow-2xl">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="block px-5 py-3 text-white/60 hover:text-white hover:bg-white/5 text-xs font-semibold tracking-[0.15em] uppercase transition-colors border-b border-white/5 last:border-b-0"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          </div>

          <Link
            href="/blog/"
            className="text-white/70 hover:text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact/"
            className="text-white/70 hover:text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/contact/"
            className="bg-gold hover:bg-gold-light text-[#0C0C0C] px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-5">
            <Link
              href="/"
              className="text-white/70 hover:text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            {/* Mobile services expand */}
            <div>
              <button
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors w-full"
                onClick={() => setMobileServicesOpen((v) => !v)}
              >
                Services
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="mt-3 pl-3 border-l border-white/10 flex flex-col gap-3">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/`}
                      className="text-white/50 hover:text-white text-xs font-semibold tracking-[0.15em] uppercase transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog/"
              className="text-white/70 hover:text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact/"
              className="text-white/70 hover:text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact/"
              className="bg-gold text-[#0C0C0C] px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase text-center mt-1"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
