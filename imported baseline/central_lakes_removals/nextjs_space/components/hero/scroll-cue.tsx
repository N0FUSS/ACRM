'use client'

export default function ScrollCue() {
  const handleClick = () => {
    const target =
      document?.getElementById?.('after-hero') ??
      document?.querySelector?.('main > *:nth-child(2)')
    if (target && 'scrollIntoView' in target) {
      ;(target as HTMLElement).scrollIntoView?.({
        behavior: 'smooth',
        block: 'start',
      })
    } else {
      window?.scrollBy?.({ top: window?.innerHeight ?? 800, behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to next section"
      className="group flex flex-col items-center gap-3 outline-none"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-on-surface-variant transition-colors group-hover:text-gold">
        Scroll
      </span>
      <span
        className="relative flex h-10 w-6 items-start justify-center pt-2 ghost-border"
        style={{ borderRadius: 10 }}
      >
        <span
          aria-hidden
          className="h-1.5 w-[2px] rounded-full bg-[var(--primary-gold)] scroll-cue-dot"
        />
      </span>
    </button>
  )
}
