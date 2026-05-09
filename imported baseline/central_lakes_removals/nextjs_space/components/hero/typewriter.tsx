'use client'

import { useEffect, useRef, useState } from 'react'

type TypewriterProps = {
  phrases: string[]
  /** Typing speed in ms per character. */
  typeSpeed?: number
  /** Deleting speed in ms per character. */
  deleteSpeed?: number
  /** Pause in ms after a full phrase is typed. */
  holdMs?: number
  /** Pause in ms before typing next phrase. */
  gapMs?: number
  /** Delay before the first character starts typing. */
  startDelayMs?: number
  /** Extra class names applied to the animated text span. */
  className?: string
}

/**
 * Hero typewriter that cycles through phrases with a gold cursor.
 * - Text is painted with the animated amber → metallic-gold → yellow gradient.
 * - A gradient-filled block cursor blinks to the right.
 * - Hydration-safe: first paint is an empty string until useEffect runs.
 */
export default function Typewriter({
  phrases,
  typeSpeed = 85,
  deleteSpeed = 42,
  holdMs = 1800,
  gapMs = 420,
  startDelayMs = 800,
  className = '',
}: TypewriterProps) {
  const [text, setText] = useState('')
  const stateRef = useRef({
    phraseIdx: 0,
    charIdx: 0,
    deleting: false,
    started: false,
  })

  useEffect(() => {
    if (!phrases?.length) return

    let timer: ReturnType<typeof setTimeout> | null = null

    const tick = () => {
      const state = stateRef?.current
      const currentPhrase = phrases?.[state?.phraseIdx] ?? ''

      if (!state?.deleting) {
        // Typing forward
        state.charIdx = Math.min(state.charIdx + 1, currentPhrase.length)
        setText(currentPhrase.slice(0, state.charIdx))

        if (state.charIdx === currentPhrase.length) {
          // Fully typed — hold, then start deleting.
          timer = setTimeout(() => {
            stateRef.current.deleting = true
            tick()
          }, holdMs)
          return
        }

        timer = setTimeout(tick, typeSpeed)
      } else {
        // Deleting backward
        state.charIdx = Math.max(state.charIdx - 1, 0)
        setText(currentPhrase.slice(0, state.charIdx))

        if (state.charIdx === 0) {
          // Done deleting — advance to next phrase after a short pause.
          state.deleting = false
          state.phraseIdx = (state.phraseIdx + 1) % phrases.length
          timer = setTimeout(tick, gapMs)
          return
        }

        timer = setTimeout(tick, deleteSpeed)
      }
    }

    // Initial delay so the headline rise-in can land before typing starts.
    timer = setTimeout(tick, startDelayMs)

    return () => {
      if (timer) clearTimeout(timer)
    }
    // Effect deliberately only re-runs if the phrase list identity changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrases])

  return (
    <span
      className="inline-flex items-baseline"
      style={{ whiteSpace: 'nowrap' }}
      aria-live="polite"
      aria-atomic="true"
    >
      <span className={`text-gold-gradient-animated ${className}`}>
        {text || '\u00A0'}
      </span>
      <span aria-hidden className="typewriter-cursor self-stretch" />
    </span>
  )
}
