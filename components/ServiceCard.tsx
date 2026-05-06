import Link from 'next/link'
import type { Service } from '@/content/services'

const icons: Record<string, React.ReactNode> = {
  wall: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6h18M3 10h18M3 14h18M3 18h18M8 6v12M16 6v12" />
    </svg>
  ),
  floor: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20h16M4 4v16M20 4v16M8 4v16M12 4v16M16 4v16" />
    </svg>
  ),
  roof: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l9-9 9 9M5 10v10h14V10" />
    </svg>
  ),
  fitout: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
    </svg>
  ),
  cladding: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16v4H4zM4 10h16v4H4zM4 16h16v4H4z" />
    </svg>
  ),
  deck: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17h18M3 13h18M6 8v9M10 8v9M14 8v9M18 8v9M3 8h18" />
    </svg>
  ),
  removal: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
    </svg>
  ),
  restumping: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M6 21V8m4 13V8m4 13V8m4 13V8M3 8h18M3 4l9-1 9 1" />
    </svg>
  ),
}

interface Props {
  service: Service
}

export default function ServiceCard({ service }: Props) {
  return (
    <Link
      href={`/services/${service.slug}/`}
      className="group border border-gray-200 hover:border-gold p-8 transition-all duration-200 hover:shadow-md block"
    >
      <div className="w-11 h-11 bg-[#0C0C0C] group-hover:bg-gold flex items-center justify-center mb-6 transition-colors text-white flex-shrink-0">
        {icons[service.icon]}
      </div>
      <h3 className="font-bold text-[#0C0C0C] text-xl mb-3 tracking-tight">{service.name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.shortDescription}</p>
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
  )
}
