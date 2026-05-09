'use client'

import { useEffect } from 'react'

/**
 * BackgroundFX — no visual output of its own.
 * Its only job is to keep the `--scroll-y` CSS custom property on <html>
 * synced with `window.scrollY`, so the body::before gloss-shimmer layer in
 * globals.css can drift in lockstep with the page scroll.
 *
 * This creates the "moving perspective" glass-sheet effect over the
 * nearly-black carbon-fibre backglass without re-rendering any React tree.
 */
export default function BackgroundFX() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const root = document?.documentElement
    if (!root) return

    let raf = 0
    let latest = 0

    const apply = () => {
      root.style?.setProperty?.('--scroll-y', String(latest))
    }

    const onScroll = () => {
      latest = window?.scrollY ?? 0
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(apply)
    }

    onScroll()
    window?.addEventListener?.('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window?.removeEventListener?.('scroll', onScroll)
    }
  }, [])

  return null
}
