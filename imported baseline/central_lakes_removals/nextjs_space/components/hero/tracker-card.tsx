'use client'

import { useEffect, useState } from 'react'
import {
  BadgeCheck,
  Leaf,
  MapPin,
  PackageCheck,
  Star,
  Truck,
} from 'lucide-react'

/**
 * Floating glass "Logistics Tracker" card used as the hero's right-zone slab.
 * - Deliberately off-grid; overlaps the headline column ~10%.
 * - No solid divider lines; spacing + tonal layering only.
 * - Uses a vertical progress spine with gold nodes (allowed 1px line = tracker-spine, not a page divider).
 */
const STEPS: Array<{
  label: string
  detail: string
  status: 'done' | 'active' | 'pending'
  icon: React.ReactNode
}> = [
  {
    label: 'Pre-move Survey',
    detail: 'Cromwell → Queenstown',
    status: 'done',
    icon: <MapPin size={12} strokeWidth={2.4} />,
  },
  {
    label: 'Eco Packing Underway',
    detail: 'Renewable materials, zero plastic fill',
    status: 'active',
    icon: <Leaf size={12} strokeWidth={2.4} />,
  },
  {
    label: 'In Transit',
    detail: 'ETA 14:42 · SH6 near Kawarau',
    status: 'pending',
    icon: <Truck size={12} strokeWidth={2.4} />,
  },
  {
    label: 'Unload & Placement',
    detail: 'Whiteglove handling, room-by-room',
    status: 'pending',
    icon: <PackageCheck size={12} strokeWidth={2.4} />,
  },
]

export default function TrackerCard() {
  // Simulate live progress — advance the active node every ~4s on loop.
  const [progress, setProgress] = useState(0.42)
  useEffect(() => {
    let raf = 0
    let last = performance?.now?.() ?? 0
    const tick = (t: number) => {
      const dt = (t - last) / 1000
      last = t
      setProgress((p) => {
        const next = p + dt * 0.035
        return next > 1 ? 0.15 : next
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      className="relative w-full max-w-[460px] float-drift"
      style={{ borderRadius: 2 }}
    >
      {/* Subtle outer ambient lift — tinted with surface, never pure black */}
      <div
        aria-hidden
        className="absolute -inset-x-8 -inset-y-10 -z-10 opacity-70"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(10,14,20,0.55) 0%, rgba(10,14,20,0) 60%)',
          filter: 'blur(18px)',
        }}
      />

      <div
        className="glass-surface-strong glass-reflection ghost-border relative overflow-hidden"
        style={{ borderRadius: 2 }}
      >
        {/* Thin bevel highlight across the top edge */}
        <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{ background: 'linear-gradient(90deg, rgba(255,240,190,0) 0%, rgba(255,240,190,0.45) 50%, rgba(255,240,190,0) 100%)' }} />

        {/* Header strip */}
        <div className="flex items-center justify-between px-6 pt-6">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--primary-gold)] pulse-gold" aria-hidden />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-on-surface-variant">
              Live Move · #CLR-2026-0147
            </span>
          </div>
          <span
            className="glass-surface-soft ghost-border-faint relative px-2 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-on-surface-variant"
            style={{ borderRadius: 2 }}
          >
            Cromwell · NZ
          </span>
        </div>

        {/* Main title */}
        <div className="px-6 pt-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-on-surface-variant">
            Logistics Tracker
          </p>
          <h3 className="mt-2 font-display text-[22px] font-extrabold uppercase leading-[1.05] tracking-[-0.01em] text-on-surface">
            The steady hand,
            <br />
            <span className="text-gold-gradient">in motion.</span>
          </h3>
        </div>

        {/* Progress spine */}
        <div className="relative px-6 pb-6 pt-6">
          <div className="relative pl-8">
            {/* The vertical track: outline-variant base */}
            <span
              aria-hidden
              className="absolute left-[11px] top-2 bottom-2 w-[2px]"
              style={{ background: 'var(--outline-variant)' }}
            />
            {/* The animated filled portion (gold → surface gradient) */}
            <span
              aria-hidden
              className="absolute left-[11px] top-2 w-[2px] transition-[height] duration-700"
              style={{
                height: `calc(${Math.round(progress * 100)}% - 16px)`,
                background:
                  'linear-gradient(180deg, var(--primary-gold) 0%, var(--primary-container) 60%, rgba(217,164,65,0) 100%)',
              }}
            />

            <ul className="space-y-5">
              {STEPS.map((step, i) => {
                const isActive = step?.status === 'active'
                const isDone = step?.status === 'done'
                return (
                  <li key={step?.label} className="relative">
                    {/* Node */}
                    <span
                      aria-hidden
                      className={`absolute -left-8 top-1 flex h-6 w-6 items-center justify-center ${
                        isActive ? 'pulse-gold' : ''
                      }`}
                      style={{
                        borderRadius: 2,
                        background: isDone
                          ? 'var(--primary-container)'
                          : isActive
                          ? 'var(--primary-gold)'
                          : 'var(--surface-container-high)',
                        color: isDone || isActive
                          ? 'var(--surface-container-lowest)'
                          : 'var(--on-surface-variant)',
                        boxShadow: isActive
                          ? '0 0 0 3px rgba(217,164,65,0.22)'
                          : 'inset 0 0 0 1px var(--ghost-border)',
                      }}
                    >
                      {step?.icon}
                    </span>

                    <div>
                      <p
                        className={`font-display text-[12px] font-extrabold uppercase tracking-[0.12em] ${
                          isDone || isActive ? 'text-on-surface' : 'text-on-surface-variant'
                        }`}
                      >
                        {step?.label}
                        {isActive && (
                          <span className="ml-2 font-mono text-[10px] tracking-[0.2em] text-gold">
                            — NOW
                          </span>
                        )}
                      </p>
                      <p className="mt-1 text-[12.5px] leading-snug text-on-surface-variant">
                        {step?.detail}
                      </p>
                      {i === 1 && (
                        <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold-deep">
                          <BadgeCheck size={12} strokeWidth={2.4} />
                          Licensed · Insured
                        </div>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Footer badge strip (no borders — separated by tonal band) */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ background: 'rgba(10,14,20,0.55)' }}
        >
          <div className="flex items-center gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                size={12}
                strokeWidth={0}
                fill="var(--primary-gold)"
                aria-hidden
              />
            ))}
            <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.22em] text-on-surface-variant">
              90+ Consecutive 5★
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold-deep">
            ETA 14:42
          </span>
        </div>
      </div>
    </div>
  )
}
