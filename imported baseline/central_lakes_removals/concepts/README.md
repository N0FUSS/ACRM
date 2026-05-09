# Concept Reference Files

This folder stores **design concept references** that are kept OUTSIDE the Next.js build. They will never be packaged into the production deployment — they exist purely as a design library to pull features, patterns, and ideas from as we iterate.

## Files

### `brand-hub-concept.html`
A standalone, self-contained HTML concept of the Central Lakes Removals **Dynamic Brand Hub**. Preserved for its excellent borderless depth system and feature set.

**Award-winning features to harvest later:**

1. **3D Depth Engine (No Borders)** — A full box-shadow taxonomy for layering:
   - `.glass-panel` — raised glass layer (inset highlight + inset shadow + drop shadow)
   - `.glass-panel-recessed` — pushed-in layer with deep inner shadow
   - `.glass-panel-floating` — interactive hover-lift cards
   - `.glass-panel-amber` — highlighted gold glass variant

2. **Dynamic Scroll Shimmer** — A fixed `body::before` gradient that tracks scroll position via `--scroll` CSS variable and uses `mix-blend-mode: color-dodge` to simulate a gloss-resin reflection sweeping across the viewport.

3. **Woven Carbon Fiber Background** — Double-layered repeating linear gradients at ±45° to create a tactile carbon-fiber base texture.

4. **Typewriter Headline** — Rotating phrases with blinking amber cursor, gradient-clip text, and animated gradient-x fill.

5. **Copy Generator with Recessed Tabs** — Tab system using inset shadows (no borders) for the active state, with smooth opacity + translate transitions between copy lengths (Elevator / Story / Manifesto).

6. **Interactive Radar Chart (Brand Matrix)** — Chart.js radar with custom dark styling, hover+click to populate a linked floating display card with the four brand pillars (Trust / Care / Sustainability / Culture).

7. **Scroll Reveal Observer** — IntersectionObserver-based `.reveal` → `.active` fade-up system.

8. **Tagline Cards with Giant Quote Glyphs** — Floating glass cards with oversized serif quote marks that glow amber on hover.

9. **Recessed Footer** — Uses `inset box-shadow` on top edge to recess the footer into the page (no border).

10. **Beveled Logo Monogram** — Gradient orange-to-amber square with inset highlight + outer glow.

## How to preview
Open `brand-hub-concept.html` directly in a browser — it is fully self-contained (CDN Tailwind, CDN Chart.js, CDN Google Fonts).

## How to pull features into the Next.js app
Port the specific CSS/JS techniques into `nextjs_space/app/globals.css` and the relevant React components. Adapt the vanilla JS patterns into `useEffect` / IntersectionObserver hooks.
