'use client'

import { useEffect, useRef, useState } from 'react'

type VideoBackgroundProps = {
  src?: string
  poster?: string
}

/**
 * Full-bleed auto-playing muted background video for the hero.
 * - Uses playsInline + muted so iOS / mobile autoplay works.
 * - Adds a parallax-lite scroll effect: the video translates slower than the page.
 * - Sits behind every piece of hero content; receives its own video-vignette overlay.
 */
export default function VideoBackground({
  src = '/videos/hero-truck.mp4',
  poster,
}: VideoBackgroundProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [canPlay, setCanPlay] = useState(false)

  // Attempt autoplay once the component mounts (some browsers need a nudge)
  useEffect(() => {
    const v = videoRef?.current
    if (!v) return
    const tryPlay = () => {
      v.play?.().catch(() => {
        /* autoplay blocked — poster + gradient will be visible */
      })
    }
    tryPlay()
    const onVisibility = () => {
      if (document?.visibilityState === 'visible') tryPlay()
    }
    document?.addEventListener?.('visibilitychange', onVisibility)
    return () => {
      document?.removeEventListener?.('visibilitychange', onVisibility)
    }
  }, [])

  // Parallax: translate video background slightly on scroll for depth.
  useEffect(() => {
    const el = wrapRef?.current
    if (!el) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window?.scrollY ?? 0
        // Limit parallax so it never exposes an empty area at the bottom.
        const clamped = Math.max(-120, Math.min(120, y * 0.18))
        el.style.transform = `translate3d(0, ${clamped}px, 0) scale(1.06)`
      })
    }
    onScroll()
    window?.addEventListener?.('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window?.removeEventListener?.('scroll', onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* The video itself, slightly over-scaled so parallax never reveals edges. */}
      <div
        ref={wrapRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: 'translate3d(0,0,0) scale(1.06)' }}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          style={{
            opacity: canPlay ? 0.8 : 0,
            transition: 'opacity 1200ms ease-out',
          }}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setCanPlay(true)}
        />
      </div>

      {/* Video vignette for typographic legibility (no borders, just tonal gradients). */}
      <div className="absolute inset-0 bg-video-vignette" />
      {/* Brushed gold focal glow in the bottom-right — the signature. */}
      <div className="absolute inset-0 bg-focal-glow" />
      {/* Subtle mechanical-luxury grain. */}
      <div className="absolute inset-0 grain-overlay" />
    </div>
  )
}
