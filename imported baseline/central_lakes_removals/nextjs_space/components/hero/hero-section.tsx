'use client'

import { useCallback, useState } from 'react'
import { Leaf, ShieldCheck, Sparkles, Star } from 'lucide-react'
import { toast } from 'sonner'
import VideoBackground from './video-background'
import GlassNav from './glass-nav'
import ScrollCue from './scroll-cue'
import Typewriter from './typewriter'
import BackgroundFX from './background-fx'

const TYPEWRITER_PHRASES = [
  'calm in the chaos.',
  'antidote to moving stress.',
  'steady hand on moving day.',
  'trusted memory keepers.',
]

/**
 * The Industrial Architect hero — above-the-fold only.
 * Editorial, single-column composition. The typewriter is the focal
 * element (replaces the legacy headline). The right-hand tracker card
 * has been intentionally retired to reduce visual noise.
 */
export default function HeroSection() {
  const [quoting, setQuoting] = useState(false)

  const onQuote = useCallback(() => {
    setQuoting(true)
    toast.success('Quote request queued', {
      description:
        'Our team will call you within one business hour with a transparent, no-surprise estimate.',
      duration: 4200,
    })
    // Reset visual state so the button can be reused
    setTimeout(() => setQuoting(false), 1200)
  }, [])

  const onReviews = useCallback(() => {
    toast('Loading our 90+ five-star reviews', {
      description: 'Reviewed by real South Island families and businesses.',
      icon: <Star size={14} fill="var(--primary-gold)" strokeWidth={0} />,
    })
  }, [])

  return (
    <section
      id="hero"
      aria-label="Central Lakes Removals — Moving lives, not just furniture"
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-x-clip"
      style={{
        // Carbon-fiber weave baked directly into the hero surface so the
        // fine texture shows through the video's transparent edges and
        // underneath the glass layers. Matches body base so there's no seam.
        backgroundColor: 'var(--surface-container-lowest)',
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            #05080c 0%,
            #05080c 3px,
            #070a10 3px,
            #070a10 6px
          ),
          repeating-linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.42) 0%,
            rgba(0, 0, 0, 0.42) 3px,
            transparent 3px,
            transparent 6px
          )
        `,
      }}
    >
      {/* Layer 0: Scroll-linked background FX (no visual — just updates --scroll-y). */}
      <BackgroundFX />

      {/* Layer 1: Background video + overlays */}
      <VideoBackground />

      {/* Layer 2: Fixed glass navigation */}
      <GlassNav onQuoteClick={onQuote} />

      {/* Layer 3: Hero content — single column, vertically centered */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-6 pb-12 pt-24 md:px-10 md:pt-32 lg:pt-36">
        <div className="flex flex-1 flex-col justify-center">
          {/* Eyebrow / serial stamp */}
          <div
            className="will-reveal inline-flex items-center gap-3 glass-surface-soft ghost-border relative px-3 py-1.5"
            style={{ borderRadius: 2, animationDelay: '50ms', alignSelf: 'flex-start' }}
          >
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--primary-gold)]"
            />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-on-surface-variant">
              Est. 1994 · Cromwell · South Island NZ
            </span>
          </div>

          {/* Heading-scale lead-in: "We Are Your" — larger anchor that
              the typewriter phrase completes. The two together read as one
              continuous statement stacked across two lines. */}
          <h1
            className="will-reveal mt-7 font-display font-extrabold uppercase tracked-display text-on-surface md:mt-8"
            style={{
              fontSize: 'clamp(30px, 6.4vw, 92px)',
              lineHeight: 1.05,
              letterSpacing: '-0.022em',
              animationDelay: '120ms',
            }}
          >
            We Are Your
          </h1>

          {/* Focal typewriter line — dynamic complement to the heading.
              Sized to fill the available width at mobile so the phrase
              reads as a bold statement, not a footnote. NO overflow:hidden
              so descenders (g, y, p) are never clipped. line-height 1.2
              gives descenders breathing room. */}
          <div
            className="will-reveal mt-1"
            style={{ animationDelay: '220ms' }}
          >
            <p
              className="font-display font-extrabold text-on-surface"
              style={{
                fontSize: 'clamp(20px, 4.6vw, 72px)',
                lineHeight: 1.2,
                letterSpacing: '-0.018em',
                whiteSpace: 'nowrap',
                minHeight: '1.25em',
              }}
            >
              <Typewriter
                phrases={TYPEWRITER_PHRASES}
                typeSpeed={80}
                deleteSpeed={38}
                holdMs={2200}
                gapMs={520}
                startDelayMs={900}
              />
            </p>
          </div>

          {/* Deck — shortened for CRO: front-load the value prop,
              cut the filler. Every word must earn its place above the fold. */}
          <p
            className="will-reveal mt-5 max-w-[52ch] text-[15.5px] leading-[1.55] text-on-surface-variant md:mt-6 md:text-[17px]"
            style={{ animationDelay: '320ms' }}
          >
            Over 30 years of meticulous care across the South Island.
            Eco-conscious packing, transparent pricing, and the calm
            your moving day deserves.
          </p>

          {/* Dual CTAs — tighter spacing to keep above fold */}
          <div
            className="will-reveal mt-7 flex flex-wrap items-center gap-3 md:mt-8 md:gap-4"
            style={{ animationDelay: '380ms' }}
          >
            <button
              onClick={onQuote}
              disabled={quoting}
              className="btn-bevel-top group relative inline-flex items-center gap-3 overflow-hidden bg-[var(--primary-container)] px-7 py-3.5 font-display text-[12.5px] font-extrabold uppercase tracking-[0.18em] text-[var(--surface-container-lowest)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[var(--primary-gold)] active:translate-y-0 disabled:opacity-80 md:py-4"
              style={{ borderRadius: 2 }}
            >
              {/* Inner specular highlight on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,240,190,0.35) 0%, rgba(255,240,190,0) 50%)',
                }}
              />
              <span className="relative">Get your free quote</span>
              <span
                aria-hidden
                className="relative inline-flex h-5 w-5 items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </span>
            </button>

            <button
              onClick={onReviews}
              className="group relative inline-flex items-center gap-2 bg-transparent ghost-border glass-surface-soft px-5 py-3.5 font-display text-[12.5px] font-extrabold uppercase tracking-[0.18em] text-on-surface transition-all duration-200 hover:ghost-border-hover md:px-6 md:py-4"
              style={{ borderRadius: 2 }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ boxShadow: 'inset 0 0 0 1px var(--ghost-border-strong)' }}
              />
              <Star
                size={14}
                strokeWidth={0}
                fill="var(--primary-gold)"
                aria-hidden
              />
              See our 5-star reviews
            </button>
          </div>

          {/* Compact trust strip — single row of key trust signals.
              Closer to CTAs to reinforce the conversion decision. */}
          <div
            className="will-reveal mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 md:mt-8"
            style={{ animationDelay: '480ms' }}
          >
            <TrustChip
              icon={<Sparkles size={12} strokeWidth={2.4} aria-hidden />}
              label="30+ Years"
              detail="South Island Expertise"
            />
            <TrustChip
              icon={<Star size={12} strokeWidth={0} fill="var(--primary-gold)" aria-hidden />}
              label="90+ 5★ Reviews"
              detail="Consecutive, unedited"
            />
            <TrustChip
              icon={<ShieldCheck size={12} strokeWidth={2.4} aria-hidden />}
              label="Licensed & Insured"
              detail="Transparent pricing"
            />
            <TrustChip
              icon={<Leaf size={12} strokeWidth={2.4} aria-hidden />}
              label="Eco-Conscious"
              detail="Renewable materials"
            />
          </div>
        </div>

        {/* Bottom rail: scroll cue + serial-number pair — no line, just spacing */}
        <div className="mt-12 flex items-end justify-between gap-6 pt-6 md:pt-16">
          <div className="hidden md:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-on-surface-variant">
              Manifest
            </p>
            <p className="mt-2 font-display text-[13px] font-extrabold uppercase tracking-[0.08em] text-on-surface">
              Your steady hand on
              <span className="text-gold"> moving day</span>.
            </p>
          </div>

          <ScrollCue />

          <div className="hidden md:block text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-on-surface-variant">
              Serial
            </p>
            <p className="mt-2 font-mono text-[12px] tracking-[0.2em] text-on-surface">
              CLR · NZ · 1994—2026
            </p>
          </div>
        </div>
      </div>

      {/* Subtle surface-color carve into the next section (no divider line). */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,14,20,0) 0%, var(--surface-container-lowest) 100%)',
        }}
      />
    </section>
  )
}

function TrustChip({
  icon,
  label,
  detail,
}: {
  icon: React.ReactNode
  label: string
  detail: string
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="relative inline-flex h-7 w-7 items-center justify-center text-gold ghost-border glass-surface-soft"
        style={{ borderRadius: 2 }}
        aria-hidden
      >
        {icon}
      </span>
      <div className="leading-tight">
        <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.14em] text-on-surface">
          {label}
        </p>
        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
          {detail}
        </p>
      </div>
    </div>
  )
}
