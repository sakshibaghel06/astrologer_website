'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Star } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',        href: '/' },
  { label: 'About',       href: '/about' },
  { label: 'Services',    href: '/shop' },
  { label: 'Appointment', href: '/appointment' },
  { label: 'Contact',     href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen]       = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const pathname                  = usePathname()

  // Add backdrop-blur once user scrolls past 20px
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cosmic-deep/90 backdrop-blur-md border-b border-cosmic-border shadow-[0_2px_20px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-gold-bright"
          >
            <span
              className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-violet to-gold shadow-glow-sm group-hover:shadow-glow-gold transition-all duration-300"
              aria-hidden="true"
            >
              <Star className="w-4 h-4 text-cosmic-black fill-current" />
            </span>
            <span className="font-serif text-xl font-bold tracking-wide">
              <span className="text-cream">Astro</span>
              <span className="text-gradient-gold">Jyotish</span>
            </span>
          </Link>

          {/* ── Desktop nav links ─────────────────────────────────────────── */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200
                      focus-visible:outline-gold-bright
                      ${isActive
                        ? 'text-gold-bright bg-gold/10'
                        : 'text-silver hover:text-cream hover:bg-white/5'
                      }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-bright"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* ── Desktop CTA ───────────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/appointment"
              className="btn-primary text-xs px-5 py-2.5"
            >
              Book Consultation
            </Link>
          </div>

          {/* ── Mobile menu toggle ────────────────────────────────────────── */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-cosmic-border text-silver hover:text-cream hover:border-violet/40 transition-all duration-200 focus-visible:outline-gold-bright"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu drawer ──────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="glass border-t border-cosmic-border px-4 py-4">
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                      ${isActive
                        ? 'text-gold-bright bg-gold/10 border border-gold/20'
                        : 'text-silver hover:text-cream hover:bg-white/5'
                      }`}
                    aria-current={isActive ? 'page' : undefined}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-bright" aria-hidden="true" />
                    )}
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="mt-4 pt-4 border-t border-cosmic-border">
            <Link
              href="/appointment"
              className="btn-primary w-full justify-center text-sm"
              tabIndex={isOpen ? 0 : -1}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
