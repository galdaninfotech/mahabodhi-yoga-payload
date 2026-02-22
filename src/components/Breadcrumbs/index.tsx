'use client'

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const Breadcrumbs = () => {
  const pathname = usePathname()

  // If we are on the homepage we shouldn't necessarily render breadcrumbs
  if (!pathname || pathname === '/') return null

  const pathSegments = pathname.split('/').filter((segment) => segment)

  return (
    <nav className="flex items-center justify-center gap-2 text-sm text-white/80 font-medium tracking-wide">
      <Link
        href="/"
        className="hover:text-white transition-colors uppercase text-xs tracking-wider"
      >
        Home
      </Link>
      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`
        const isLast = index === pathSegments.length - 1

        // Convert slugs back to normal human readable readable cases
        const decodedSegment = decodeURIComponent(segment.replace(/-/g, ' '))
        const label = decodedSegment
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')

        return (
          <React.Fragment key={href}>
            <ChevronRight className="w-4 h-4 text-white/50" />
            {isLast ? (
              <span className="text-white uppercase text-xs tracking-wider">{label}</span>
            ) : (
              <Link
                href={href}
                className="hover:text-white transition-colors uppercase text-xs tracking-wider"
              >
                {label}
              </Link>
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}
