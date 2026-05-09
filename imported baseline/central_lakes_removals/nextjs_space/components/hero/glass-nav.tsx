'use client'

import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'Our Story', id: 'story' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'Contact', id: 'contact' },
]

export default function GlassNav({
  onQuoteClick,
}: {
  onQuoteClick?: () => void
}) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled((window?.scrollY ?? 0) > 8)
    }
    onScroll()
    window?.addEventListener?.('scroll', onScroll, { passive: true })
    return () => window?.removeEventListener?.('scroll', onScroll)
  }, [])

  const handleLink = (id: string) => {
    // Smooth-scroll to a section anchor if present; otherwise ignore cleanly.
    const el = document?.getElementById?.(id)
    el?.scrollIntoView?.({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-3'
      }`}
    >
      <nav
        aria-label="Primary"
        className={`relative mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 md:px-10 ${
          scrolled
            ? 'glass-surface-strong ghost-border py-3'
            : 'glass-surface ghost-border-faint py-4'
        } glass-reflection`}
        style={{ borderRadius: 2 }}
      >
        {/* Logo wordmark */}
        <button
          onClick={() => {
            window?.scrollTo?.({ top: 0, behavior: 'smooth' })
          }}
          className="group flex items-center gap-3 outline-none"
          aria-label="Central Lakes Removals — Home"
        >
          <span
            aria-hidden
            className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden bg-[var(--surface-container-highest)] ghost-border"
            style={{ borderRadius: 2 }}
          >
            <span className="font-display text-[12px] font-extrabold tracking-tight text-gold-gradient-animated">
              CLR
            </span>
            <span className="absolute inset-0 bevel-top pointer-events-none" />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-[13px] font-extrabold uppercase tracking-[0.14em] text-on-surface">
              Central Lakes
            </span>
            <span className="mt-1 font-display text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-deep">
              Removals · EST. 1994
            </span>
          </span>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link?.id}>
              <button
                onClick={() => handleLink(link?.id)}
                className="group relative px-4 py-2 font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant transition-colors duration-200 hover:text-on-surface"
              >
                <span>{link?.label}</span>
                {/* Ghost underline on hover — NOT a solid line; fades via opacity. */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-[6px] left-4 right-4 h-px opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ background: 'var(--ghost-border-strong)' }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Right-side actions */}
        <div className="flex items-center gap-2">
          <a
            href="tel:+6434451234"
            className="hidden items-center gap-2 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-on-surface-variant transition-colors duration-200 hover:text-gold lg:inline-flex"
          >
            <Phone size={14} aria-hidden /> 03 445 1234
          </a>

          <button
            onClick={onQuoteClick}
            className="group relative hidden items-center gap-2 overflow-hidden bg-[var(--primary-container)] px-4 py-2.5 font-display text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--surface-container-lowest)] transition-transform duration-200 hover:translate-y-[-1px] active:translate-y-0 sm:inline-flex"
            style={{ borderRadius: 2 }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{ background: 'rgba(255,240,190,0.75)' }}
            />
            Get a Quote
            <span aria-hidden className="text-[14px]">→</span>
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="md:hidden relative inline-flex h-10 w-10 items-center justify-center bg-[var(--surface-container-high)]/70 text-on-surface ghost-border"
            style={{ borderRadius: 2 }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`mx-6 mt-2 md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? 'max-h-[340px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className="glass-surface-strong ghost-border glass-reflection relative p-4"
          style={{ borderRadius: 2 }}
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link?.id}>
                <button
                  onClick={() => handleLink(link?.id)}
                  className="w-full px-3 py-3 text-left font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant transition-colors hover:text-gold"
                >
                  {link?.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              onQuoteClick?.()
              setMobileOpen(false)
            }}
            className="btn-bevel-top relative mt-3 flex w-full items-center justify-center gap-2 bg-[var(--primary-container)] px-4 py-3 font-display text-[12px] font-extrabold uppercase tracking-[0.16em] text-[var(--surface-container-lowest)]"
            style={{ borderRadius: 2 }}
          >
            Get a Free Quote <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </div>
  )
}
