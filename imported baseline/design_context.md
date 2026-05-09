# Design Context — Central Lakes Removals Prototype

> Consolidated brief synthesizing `DESIGN.md`, the Brand Copy PDF, and the UIUX High-Taste + Design skill systems. This document is the single source of truth for building the above-the-fold hero and the broader prototype.

---

## 1. Design Brief Summary (from DESIGN.md)

### Creative North Star — "The Industrial Architect"
A **High-End Editorial** experience that radiates **30 years of authority** through **executive precision** and **heavy-duty reliability**. Not "friendly delivery" — this is **mechanical luxury**. Every gap is deliberate, every element has engineered purpose.

### Core Aesthetic Pillars
- **Intentional asymmetry** + **massive typographic contrast** + **mechanical luxury**.
- Layout should feel like a **custom-engineered machine**.
- **Glassmorphism** used as a *metaphor* for the transparency/clarity of high-stakes logistics — not as a trend.
- **Borderless "No-Line" architecture**: sections are carved from the page via background-color shifts, not divider lines.

### Color System (Masculine Industrial Neutrals + Surgical Gold)
| Role | Token | Hex |
|---|---|---|
| Base (deepest) | `surface-container-lowest` | **#0a0e14** |
| Base | `surface` | **#10141a** |
| Secondary content | `surface-container` | **#1c2026** |
| Raised/interactive | `surface-container-highest` | **#31353c** |
| Primary gold (bright) | `primary` | **#f2ca50** |
| Primary gold (deep/brushed) | `primary-container` | **#d4af37** |
| Secondary text | `on-surface-variant` | **#d0c5af** |

**Surface Hierarchy Rules**
- Base: `surface` or `surface-container-lowest`.
- Secondary content: `surface-container`.
- Raised/interactive: `surface-container-highest`.
- Glass layers (nav, modals, dropdowns, floating cards): `surface` tokens at **70–80% opacity** + `backdrop-filter: blur(16px)`.
- **Signature gradient** on hero backgrounds and primary CTAs: `primary` → `primary-container` at **135°** (brushed metallic gold).

### Typography System
- **Display / Headline**: **Montserrat** or **Work Sans**, **ALL CAPS**, **Extra Bold**, letter-spacing **−2%**. Use `display-lg` / `headline-lg` as "stamps of authority."
- **Body**: **Open Sans** or **Public Sans** at **18px** (`body-lg`). Clean, legible, massive breathing room around aggressive headers.
- **Labels**: `label-md`, uppercase — reads like a serial number on heavy machinery.

### Elevation & Depth — Tonal Layering + Ghost Borders (No Drop Shadows)
- **Layering Principle**: Nest a `surface-container-highest` card inside a `surface-container-low` section — the *value contrast itself* produces the lift.
- **Ambient shadow** (only when truly floating, e.g. critical modal): 32–64px blur at **8% opacity**, tinted with `surface-container-lowest` — **never pure black**.
- **Ghost Border**: every container gets a **2px corner radius** (sharp) and a **1px border of `primary` at 20% opacity** to mimic the glint off a machined metal edge.

### Components
- **Primary Button**: Solid `#d4af37`, Montserrat ExtraBold uppercase, 2px radius, 1px `primary_fixed` top-border at 30% for a beveled edge. **No shadow.**
- **Secondary (Ghost) Button**: No fill, 1px ghost border (primary @ 20%) → 100% on hover.
- **Inputs**: `surface-container-high` bg, 1px `outline-variant` bottom border. Focus: bottom border → `primary`, bg gains 5% primary tint.
- **Cards/Lists**: No divider lines. Separation via 48–64px vertical spacing or alternating `surface-container-low` / `surface-container-lowest` stripes. On hover: gold ghost border 20% → 50%, backdrop-blur increases.
- **"Logistics Tracker"** specialty: heavy vertical line in `outline-variant`, active node `primary` with a 4px same-color glow, completed segments gradient `primary` → `surface`.

### Do's & Don'ts
- **DO** use extreme whitespace; align to a rigid grid; uppercase all labels/headings; make any off-grid element *obviously* intentional (e.g., an image overlapping text by exactly 10%).
- **DON'T** use corner radius > 2px (no "bubbly"); high-contrast pure white on charcoal (use `#d0c5af`); standard blue for links (stay in gold/neutral); traditional drop shadows (glass or metal only).

---

## 2. Brand Identity — Central Lakes Removals (from Brand Copy PDF)

### Brand Essence
- **Name**: Central Lakes Removals
- **Location/Heritage**: Rooted in **Cromwell, Central Otago, New Zealand** — serves the **South Island**.
- **Tenure**: **30+ years** of experience.
- **Social Proof**: **90+ consecutive 5-star reviews**.
- **Philosophy**: *"We are the calm in the chaos."* Moving isn't transporting boxes — it's transitioning lives.

### Core Brand Pillars / USPs
1. **The Steady Hand** (Trust) — 30 years, 90+ five-star reviews.
2. **Respect for the Journey** (Care) — antiques to kids' toys, same meticulous respect.
3. **Eco-Conscious Protection** (Sustainability) — renewable, eco-friendly packing materials; protect the NZ environment.
4. **Good Humour, Great Service** (Culture) — positive can-do attitude; friendly banter turns stress into seamlessness.

### Taglines (Pick & Rotate)
- **Brand Promise (hero-ready)**: **"Moving lives, not just furniture."**
- **Action-oriented**: "The South Island's antidote to moving stress."
- **Heritage**: "Over 30 years of moving the South Island forward."
- **Reassurance**: "Your steady hand on moving day."

### Tone of Voice
Authoritative yet warm; confident, hardworking, Southern-grounded; honest ("transparent pricing, no hidden surprises"); calm, reassuring, understated wit. **Never** corporate-cold or gimmicky.

### Key Messaging Hooks (ready-to-paste copy atoms)
- "We move lives, not just furniture."
- "The calm in the chaos."
- "Fully licensed, fully insured, fully committed to your peace of mind."
- "From priceless antiques to a child's favorite toy — the same meticulous respect."
- "Welcome to your new beginning. We'll carry it from here."

### Services (implicit from manifesto)
- Residential moves across the South Island.
- Commercial/office relocations.
- Specialized fine-art & antique handling.
- Eco-friendly packing & unpacking.
- End-to-end service with transparent pricing.

### Value Propositions (rank for hero)
1. **30 years of trusted South Island expertise**.
2. **90+ consecutive 5-star reviews** (quantifiable proof).
3. **Licensed, insured, transparent pricing** (no hidden surprises).
4. **Eco-conscious packing** (aligns with NZ environmental values).
5. **Meticulous care** (same respect for heirlooms as everyday items).

---

## 3. Key Principles from the Skill Systems

### From UIUX High-Taste Skill (`README.md` philosophy)
**"Every pixel matters. Anti-slop, anti-generic."** Explicit rejections:
- ❌ **Inter font** as default (we use Montserrat/Work Sans + Open Sans).
- ❌ **Purple gradients** (we use brushed gold 135°).
- ❌ **3-column equal-cards layouts** (use asymmetry, rhythm, intentional off-grid).
- ❌ **"Elevate your workflow"** generic copy (use brand voice: steady, human, Southern).

Design ethos inherited: **soft** (luxury / elevated typefaces / generous whitespace / depth), **minimalist** (editorial, content-focused), and **brutalist** (industrial raw + Swiss typography, dramatic scale contrast) — all three dial settings are relevant to "Industrial Prestige."

### From Design Skill (`SKILL.md` — master curriculum)
Applicable high-leverage principles:
- **Content drives form** — start from the brand manifesto, not from aesthetics.
- **Constraints are fuel** — the No-Line rule and 2px radius limit *are* the design's signature.
- **Longevity over novelty** — no trend effects that will date the site.
- **Typographic hierarchy** via size, weight, case, and spacing — pair one serif-free display (Montserrat) with one humanist body (Open Sans).
- **60-30-10 color rule**: ~60% deep surface neutrals, ~30% mid-surface layering, ~10% gold accent.
- **Gestalt grouping** via proximity + whitespace, never via borders.
- **Golden-ratio / modular scale** for vertical rhythm.
- **Narrative arc in UX**: Exposition (hero) → Rising (proof/services) → Climax (CTA) → Resolution (contact).
- **Accessibility non-negotiable**: WCAG AA 4.5:1 — verify `#d0c5af` on `#10141a` ✓; gold `#f2ca50` on dark ✓; avoid pure white on charcoal.
- **Red-team filters**: Anti-Schtick (no gratuitous glass), Lazy-AI detection (no default bento grids, no equal spacing everywhere).

---

## 4. Above-the-Fold Hero — Specific Requirements

### Layout Spec
- **Full-bleed viewport** (100vh minimum; ~100vh on desktop, auto on mobile).
- **Intentional asymmetry**: a two-zone composition where text occupies ~55–60% of horizontal space (left) and a visual/media slab overlaps by ~10% (right). Off-grid overlap must be *obviously deliberate* (aligned to a 10% module).
- **Rigid underlying grid** (12-col desktop), **massive whitespace margins**, anchored to a baseline grid.
- **No borders, no dividers** — hero is distinguished from the next section by a **surface color shift** (e.g., hero `surface` #10141a → next section `surface-container-lowest` #0a0e14).

### Content Stack (top → bottom)
1. **Glass Navigation Bar** (fixed top): logo wordmark left, nav links center/right, gold ghost-bordered primary CTA ("GET A QUOTE") right. Background: `surface` @ 75% opacity + `backdrop-filter: blur(16px)`. Ghost border bottom at 20% gold.
2. **Overline / Eyebrow label** (uppercase, tracked, `label-md`, color `#d0c5af`): `EST. 1994 · CROMWELL · SOUTH ISLAND`.
3. **Display Headline** (Montserrat ExtraBold, ALL CAPS, tracking −2%, clamp(56px, 8vw, 128px)): **"MOVING LIVES, NOT JUST FURNITURE."** — or split across two lines with the second line in gold for massive contrast.
4. **Deck / Sub-headline** (Open Sans 18–22px, `#d0c5af`, max-width ~52ch): "The South Island's steady hand for over 30 years. Eco-conscious packing, meticulous care, and the calm your moving day deserves."
5. **Dual CTAs**:
   - **Primary**: solid `#d4af37` filled, "GET YOUR FREE QUOTE" (uppercase, Montserrat ExtraBold, 2px radius, beveled 1px top border).
   - **Secondary (Ghost)**: "SEE OUR 5-STAR REVIEWS" — no fill, 1px gold ghost border @ 20% → 100% on hover.
6. **Trust Strip** (aligned below CTAs, separated by 48–64px vertical rhythm, no line): serial-number-style label row — `30+ YEARS` · `90+ CONSECUTIVE 5★ REVIEWS` · `FULLY LICENSED & INSURED` · `ECO-CONSCIOUS PACKING`. Use `label-md`, uppercase, `#d0c5af`, pipe-style separators built from 8px whitespace + micro-dot dividers (not lines).

### Hero Visual / Right-Zone Slab
- A **"floating glass card"** containing either:
  - a muted, color-graded photograph of the Central Lakes / Cromwell landscape with a truck (from `Scenic Truck Drive Video.mp4` stills), OR
  - a live "Logistics Tracker" preview component (heavy vertical line + gold active nodes) demonstrating a move in progress.
- Card treatment: `surface-container` @ 75% opacity, `backdrop-filter: blur(16px)`, 2px radius, 1px gold ghost border @ 20%.
- Card is **deliberately off-grid**, overlapping the headline column by ~10% to reinforce the "engineered asymmetry" note from the brief.

### Hero Background
- **135° linear gradient** layered behind the content: from `#10141a` (top-left) through `#1c2026` to a subtle gold-tinted `primary-container` glow (bottom-right ~8% opacity) — the "brushed industrial soul" signature, but radically understated.
- Optional: extremely subtle noise/grain overlay at 2–4% opacity for mechanical-luxury texture.
- **No hero drop shadows**. Any "lift" comes from tonal layering.

---

## 5. Glass Morphism, 3D Effects & Borderless Approach — Implementation Notes

### Glassmorphism — Purposeful, Not Decorative
- Apply **only** to floating elements: nav bar, modals, dropdowns, hover menus, the hero right-zone slab, and on-hover cards.
- Recipe: `background: rgba(16, 20, 26, 0.75); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(212, 175, 55, 0.20); border-radius: 2px;`
- **Semantic meaning**: glass = "transparency and clarity of high-stakes logistics." If a component isn't about transparency/clarity, don't glass it.

### "3D" / Depth without Drop Shadows
- Depth comes from **tonal layering** — stacking surface tokens of different values. A `surface-container-highest` (#31353c) card sitting on a `surface-container-low` background reads as elevated without a single shadow.
- **Ghost Border** (1px gold @ 20%) gives the "machined metal edge" glint that simulates a beveled, physically-milled object.
- Primary-button beveled top edge (1px `primary_fixed` @ 30% on top border only) adds a tiny physical-object cue — reads as pressed brass.
- Ambient shadow only for critical modals: 32–64px blur, 8% opacity, **tinted** with `#0a0e14` (never pure black).

### Borderless / "No-Line" Architecture
- **Forbidden**: 1px solid divider lines between sections, card dividers, list rules, horizontal rules inside hero content.
- **Permitted separators**:
  1. **Background-color shifts** between surface tokens (carved, not pasted).
  2. **Whitespace** (48px / 64px / 96px vertical rhythm).
  3. **Alternating stripe bands** between `surface-container-low` and `surface-container-lowest`.
  4. **Ghost borders** (1px gold @ 20%) — the only "line" allowed, and only wrapping containers (never spanning the page).
- Lists/testimonial rails: rely purely on 48–64px gaps; cards for reviews inherit glass + ghost-border treatment.

---

## 6. Typography Cheat-Sheet for Implementation

```
--font-display: 'Montserrat', 'Work Sans', system-ui, sans-serif;
--font-body:    'Open Sans',  'Public Sans', system-ui, sans-serif;

Display XL (hero H1):  clamp(56px, 8vw, 128px) / 0.95 line-height / -2% tracking / 800 weight / UPPERCASE
Headline LG:           clamp(40px, 5vw, 72px)  / 1.00 / -1.5% / 800 / UPPERCASE
Title MD:              28px / 1.15 / -0.5% / 700 / UPPERCASE
Body LG (deck):        18–22px / 1.55 / 0 / 400
Body MD:               16px / 1.55 / 0 / 400
Label MD (chrome):     12–13px / 1.2 / +8% tracking / 600 / UPPERCASE
```

---

## 7. Color Tokens — CSS Custom Properties

```css
:root {
  --surface-container-lowest: #0a0e14;
  --surface:                  #10141a;
  --surface-container-low:    #151a21;
  --surface-container:        #1c2026;
  --surface-container-high:   #262a31;
  --surface-container-highest:#31353c;
  --outline-variant:          #3a3f47;

  --primary:            #f2ca50;   /* bright gold */
  --primary-container:  #d4af37;   /* brushed deep gold */
  --primary-fixed:      #e8c04a;   /* bevel highlight */

  --on-surface:         #f2ecdb;   /* never pure white */
  --on-surface-variant: #d0c5af;   /* secondary text */

  --ghost-border:       rgba(212, 175, 55, 0.20);
  --ghost-border-hover: rgba(212, 175, 55, 0.50);

  --glass-bg:           rgba(16, 20, 26, 0.75);
  --glass-blur:         16px;

  --grad-hero:          linear-gradient(135deg, #10141a 0%, #1c2026 55%, rgba(212,175,55,0.08) 100%);
  --grad-gold:          linear-gradient(135deg, #f2ca50 0%, #d4af37 100%);
}
```

---

## 8. Pre-Build Checklist (Red-Team Self-Critique)

- [ ] Zero 1px solid full-width divider lines anywhere.
- [ ] All corner radii ≤ 2px.
- [ ] No pure white text; all secondary text is `#d0c5af`.
- [ ] No default drop shadows; glass or tonal layering only.
- [ ] Hero headline in Montserrat ExtraBold UPPERCASE, −2% tracking.
- [ ] Body in Open Sans 18px with 1.55 line-height and generous column measure.
- [ ] Primary CTA uses 135° gold gradient OR flat `#d4af37` with 30% `primary_fixed` top bevel.
- [ ] Glass treatment applied only to floating/transparency-meaningful components.
- [ ] Off-grid overlap (hero slab over headline) is exactly 10% — obviously intentional.
- [ ] Brand voice present: at least one of ["calm in the chaos", "moving lives, not just furniture", "steady hand", "South Island"] appears above the fold.
- [ ] Proof points visible above the fold: `30+ YEARS`, `90+ 5★ REVIEWS`, `LICENSED & INSURED`, `ECO-CONSCIOUS PACKING`.
- [ ] Contrast ratios pass WCAG AA (4.5:1 body, 3:1 large display).
- [ ] No Inter, no purple gradients, no equal 3-column bento, no "Elevate your…" copy.

---

*End of context document. Use this as the single source of truth for the prototype build.*
