# Design System Specification: Industrial Prestige

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Industrial Architect."** 

Unlike standard logistics platforms that focus on "friendly" delivery, this system communicates 30 years of authority through a lens of executive precision and heavy-duty reliability. We are moving away from "web-native" templates and toward a **High-End Editorial** experience. This is achieved through intentional asymmetry, massive typographic contrast, and a "mechanical luxury" aesthetic.

The layout should feel like a custom-engineered machine: every element has a purpose, every gap is deliberate, and every interaction is friction-less. We utilize "glassmorphism" not as a trend, but to represent the transparency and clarity of high-stakes logistics.

---

## 2. Colors
Our palette is rooted in deep, masculine neutrals with surgical applications of industrial gold.

### The "No-Line" Rule
To maintain a premium editorial feel, **prohibit the use of 1px solid borders for sectioning.** Structural boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit directly on a `surface` background to create a "carved" look rather than a "pasted" look.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers to create depth:
- **Base Layer:** `surface` (#10141a) or `surface-container-lowest` (#0a0e14).
- **Secondary Content:** `surface-container` (#1c2026).
- **Interactive/Raised Elements:** `surface-container-highest` (#31353c).

### The "Glass & Gradient" Rule
For floating elements (modals, dropdowns, navigation bars), use **Glassmorphism**. Apply a translucent background using `surface` tokens at 70-80% opacity combined with a `backdrop-filter: blur(16px)`. 

### Signature Textures
Main CTAs and Hero backgrounds should leverage subtle linear gradients. Transition from `primary` (#f2ca50) to `primary-container` (#d4af37) at a 135-degree angle to give the gold a metallic, "brushed industrial" soul.

---

## 3. Typography
The typography system is built on a high-contrast relationship between architectural headings and utilitarian body copy.

*   **Display & Headlines (Montserrat / Work Sans):** All-caps, extra bold. These are the "stamps" of authority. Use `display-lg` and `headline-lg` to anchor pages. Letter spacing should be tightened (-2%) for impact.
*   **Body (Open Sans / Public Sans):** Set at a comfortable 18px (`body-lg`). This is the "Zero-Friction" element of the brand. It must be clean, legible, and provide massive breathing room around the aggressive headers.
*   **Labels:** Use `label-md` for technical metadata. These should feel like serial numbers on heavy machinery—precise and functional.

---

## 4. Elevation & Depth
We eschew traditional shadows in favor of **Tonal Layering** and **Ghost Borders.**

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-highest` card inside a `surface-container-low` section. The contrast in value provides all the "lift" required.
*   **Ambient Shadows:** If a floating effect is necessary (e.g., a critical action modal), use a shadow with a 32px-64px blur at 8% opacity. The shadow color should be a tinted version of `surface-container-lowest`, never pure black.
*   **The "Ghost Border" Fallback:** Every container must utilize a **2px corner radius (sharp corners)**. To define edges without breaking the "No-Line" rule, use a 1px border of `primary` (#d4af37) at **20% opacity**. This creates a "glint" effect similar to the edge of a machined metal part.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary-container` (#d4af37) fill. Montserrat Extra Bold, Uppercase. 2px border-radius. No shadow, but a 1px `primary_fixed` top-border at 30% to simulate a beveled edge.
*   **Secondary (Ghost):** No fill. 1px Ghost Border (`primary` at 20%). On hover, increase border opacity to 100%.

### Input Fields
*   **Visual Style:** `surface-container-high` background with a 1px bottom-border of `outline-variant`. 
*   **Focus State:** The bottom border transitions to `primary` (#d4af37), and the background gains a 5% `primary` tint.

### Cards & Lists
*   **Constraint:** Forbid divider lines.
*   **Separation:** Use `48px` or `64px` vertical spacing to separate list items, or alternate background colors between `surface-container-low` and `surface-container-lowest`.
*   **Interactive Cards:** On hover, the 20% opacity gold border should animate to 50% opacity, and the backdrop-blur should increase.

### Specialized Component: "The Logistics Tracker"
*   Use a heavy vertical line in `outline-variant`.
*   Active nodes are `primary` (#f2ca50) with a 4px "glow" (shadow) of the same color.
*   Completed segments use a subtle gradient from `primary` to `surface`.

---

## 6. Do's and Don'ts

### Do
*   **DO** use extreme whitespace. A "Sophisticated" brand isn't afraid of empty pixels.
*   **DO** align text to a rigid, industrial grid. If an element is off-grid, it must look intentionally asymmetrical (e.g., an image overlapping a text container by exactly 10%).
*   **DO** use uppercase for all labels and headings to maintain the "Executive Authority" tone.

### Don't
*   **DON'T** use rounded corners above 2px. Anything "bubbly" destroys the masculine, heavy-duty personality.
*   **DON'T** use high-contrast white text on the Charcoal background. Use `on-surface-variant` (#d0c5af) for secondary text to keep the "low-friction" visual profile.
*   **DON'T** use standard blue for links. Every interactive element must be within the Gold or Neutral spectrum.
*   **DON'T** use traditional drop shadows. If it doesn't look like glass or metal, it doesn't belong in this system.