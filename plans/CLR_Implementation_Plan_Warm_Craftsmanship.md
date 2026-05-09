# Central Lakes Removals - Implementation Plan
## Warm Craftsmanship Edition

---

## 1. Concept Overview

### Design Direction: Warm Craftsmanship

This approach bridges the premium brand with the human owner-led story by softening the strict dark editorial look while maintaining sophistication. The result feels like a trusted craftsman who takes genuine pride in their work—not a cold corporate service or a casual tradie.

### Core Differentiator

Where typical premium brands feel distant or corporate, Central Lakes Removals Warm Craftsmanship feels **personal and human** while remaining **premium and authoritative**. The design speaks to someone who values quality, cares about details, and wants to trust the person handling their move.

### Mood Board Keywords

| Category | Keywords |
|----------|----------|
| Colors | Warm midnight, brass warmth, cream white |
| Textures | Subtle grain, natural linen, worn leather undertones |
| Typography | Editorial serif headlines, clean humanist sans-serif body |
| Imagery | Russell in natural light, real truck, authentic working moments |
| Motion | Smooth, considered, human-paced (not flashy) |
| Spacing | Generous but grounded, breathing room with substance |

---

## 2. Color System

### Warm Craftsmanship Palette

```css
:root {
  /* Core Backgrounds */
  --bg-primary: #060A12;        /* Deep warm midnight */
  --bg-secondary: #0C1421;      /* Elevated surfaces */
  --bg-card: #111927;           /* Card backgrounds */
  --bg-elevated: #172033;       /* Hover/elevated states */
  
  /* Warm Accent System */
  --brass-primary: #B8954B;      /* Main CTA */
  --brass-warm: #C9A85A;        /* Hover state */
  --brass-muted: #8A6F3A;       /* Secondary brass */
  --brass-glow: rgba(184, 149, 75, 0.15); /* Subtle glow effects */
  
  /* Text Hierarchy */
  --text-primary: #F5F1E8;       /* Warm off-white headings */
  --text-secondary: #B0B6C0;    /* Body text */
  --text-muted: #6B7280;        /* Tertiary/captions */
  
  /* Borders & Dividers */
  --border-subtle: #1E2A3A;     /* Low contrast dividers */
  --border-medium: #2A3A4D;     /* Card borders */
  
  /* Texture Overlay */
  --noise-texture: url("data:image/svg+xml,..."); /* Subtle grain */
}
```

### Key Warmth Adjustments from Original Brief

1. **Background**: Shifted 1 tone warmer (more brown than pure blue)
2. **Text**: Cream white `#F5F1E8` instead of `#F4F0E8`
3. **Brass**: Retained but used more sparingly
4. **Texture**: Added subtle grain overlay at 2-3% opacity

---

## 3. Typography System

### Font Recommendations

**Headings:**
- Primary: `Cormorant Garamond` (elegant editorial serif with warmth)
- Fallback: `Georgia, 'Times New Roman', serif`

**Body:**
- Primary: `Source Sans 3` (humanist sans-serif, excellent readability)
- Fallback: `system-ui, -apple-system, sans-serif`

**Accent/Labels:**
- Primary: `Cormorant Garamond` small caps
- Fallback: `serif`

### Type Scale

```css
/* Desktop */
--text-hero: clamp(3.5rem, 6vw, 5rem);     /* 56-80px */
--text-h1: clamp(2.5rem, 4vw, 3.5rem);     /* 40-56px */
--text-h2: clamp(1.75rem, 3vw, 2.25rem);   /* 28-36px */
--text-h3: clamp(1.25rem, 2vw, 1.5rem);    /* 20-24px */
--text-body: 1.125rem;                      /* 18px */
--text-small: 0.9375rem;                     /* 15px */

/* Mobile */
--text-hero-mobile: clamp(2.5rem, 10vw, 3.25rem);
--text-h1-mobile: clamp(2rem, 8vw, 2.75rem);
--text-h2-mobile: clamp(1.5rem, 6vw, 2rem);
--text-body-mobile: 1.0625rem;
```

### Letter Spacing

```css
--tracking-tight: -0.02em;    /* Large headings */
--tracking-normal: 0;          /* Body text */
--tracking-wide: 0.05em;      /* Small caps/labels */
--tracking-wider: 0.1em;       /* All caps eyebrow */
```

---

## 4. Layout Architecture

### Section Rhythm Pattern

```
┌─────────────────────────────────────────────┐
│ HERO                                        │
│ Split: 52% Copy | 48% Russell Image         │
│ Dark midnight bg + subtle grain             │
├─────────────────────────────────────────────┤
│ TRUST PROOF BAR                             │
│ Horizontal strip | bg-secondary             │
│ 6 proof points | brass accents              │
├─────────────────────────────────────────────┤
│ OWNER LED DIFFERENCE                        │
│ 2-column editorial split                    │
│ Left: Large heading + body                 │
│ Right: Pull quote + Russell portrait        │
├─────────────────────────────────────────────┤
│ SERVICES OVERVIEW                           │
│ 2×2 Card grid | generous card spacing      │
│ Card style: warm cards + brass links        │
├─────────────────────────────────────────────┤
│ REPUTATION & REVIEWS                        │
│ 3 proof blocks + real customer themes       │
│ Calm review layout (not carousel)           │
├─────────────────────────────────────────────┤
│ MOVING PROCESS                              │
│ Vertical timeline with warm brass numbers   │
│ 5 steps | refined horizontal layout        │
├─────────────────────────────────────────────┤
│ PREMIUM VALUE STATEMENT                     │
│ Full-width centered | warm statement       │
│ Minimal copy | high-impact typography       │
├─────────────────────────────────────────────┤
│ SERVICE AREAS                               │
│ Location grid with subtle map element      │
│ Cromwell-centric with service routes        │
├─────────────────────────────────────────────┤
│ ABOUT RUSSELL                               │
│ Portrait-forward | human trust section      │
│ Proof points + personal story              │
├─────────────────────────────────────────────┤
│ FINAL QUOTE SECTION                         │
│ 2-column: Copy + Quote Form Card            │
│ Form: Warm, spacious, inviting             │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
│ 4-column | muted warmth | brass hover      │
└─────────────────────────────────────────────┘
```

### Spacing System

```css
:root {
  /* Section Padding */
  --section-padding-desktop: clamp(5rem, 10vw, 8rem);
  --section-padding-mobile: clamp(3rem, 8vw, 5rem);
  
  /* Content Width */
  --content-max: 1200px;
  --content-narrow: 800px;
  --content-wide: 1400px;
  
  /* Card Spacing */
  --card-gap: 2rem;
  --card-padding: 2rem;
  
  /* Element Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;
}
```

---

## 5. Component Specifications

### 5.1 Header

**Desktop:**
- Logo left (warm off-white)
- Nav center-right: Services | Areas | Reviews | About | Contact
- CTA right: "Request a Quote" (brass button)
- Transparent at top → solid midnight on scroll
- Thin border-bottom on scroll (subtle)

**Mobile:**
- Logo + Hamburger
- Slide-in menu (dark, warm)
- Menu items: Quote CTA first, then nav items
- Warm overlay with slight blur

### 5.2 Hero Section

**Layout:**
- 52% left: Eyebrow + Headline + Body + CTAs + Proof
- 48% right: Russell portrait with subtle warm overlay
- Full viewport height minus header

**Eyebrow:**
- Small caps
- Brass color `#B8954B`
- Letter-spacing: 0.15em
- Text: "OWNER LED MOVING ACROSS CENTRAL OTAGO"

**Headline:**
- 64-80px (desktop)
- Cormorant Garamond
- Color: `#F5F1E8`
- Line-height: 1.1

**Body:**
- 18-21px
- Source Sans 3
- Color: `#B0B6C0`
- Max-width: 520px
- Line-height: 1.65

**CTAs:**
- Primary: "Request a Quote" (brass)
- Secondary: "Talk to Russell" (ghost button)

**Proof Line:**
- Small text (15px)
- Muted color
- "12,000+ relocations · 5.0 Google rated · Family owned"

**Image Treatment:**
- Russell portrait with subtle warm color grade
- Slight vignette overlay for depth
- Optional: subtle grain texture

### 5.3 Trust Proof Bar

**Layout:**
- Horizontal strip, full-width
- 6 proof points evenly distributed
- Alternating warm off-white and muted text

**Proof Points:**
1. Personally led by Russell Brown
2. 12,000+ relocations
3. 5.0 Google rating
4. One dedicated team
5. Based in Cromwell
6. Serving the Lower South Island

**Style:**
- Background: `--bg-secondary`
- Top/bottom borders: `--border-subtle`
- Small brass icons or lines beside each point
- No carousel (static grid)

### 5.4 Service Cards

**Card Style:**
```css
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-medium);
  border-radius: 4px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.card:hover {
  background: var(--bg-elevated);
  border-color: var(--brass-muted);
  transform: translateY(-2px);
}
```

**Card Content:**
- Service title (H3)
- Brief description
- Brass text link with arrow
- Optional: subtle image or icon

### 5.5 Process Timeline

**Desktop:**
- Horizontal timeline with connecting line
- Large brass numbers (1-5)
- Step title + brief description
- Generous spacing between steps

**Mobile:**
- Vertical stacked cards
- Brass numbers left-aligned
- Smooth vertical rhythm

### 5.6 Quote Form

**Fields:**
1. Name (text)
2. Phone (tel)
3. Email (email)
4. Moving from (text)
5. Moving to (text)
6. Preferred date (date)
7. Type of move (select)
8. Main items (textarea)
9. Access notes (textarea)
10. Packing help (checkbox)
11. Message (textarea)

**Field Style:**
```css
input, textarea, select {
  background: rgba(6, 10, 18, 0.6);
  border: 1px solid var(--border-medium);
  border-radius: 4px;
  color: var(--text-primary);
  padding: 0.875rem 1rem;
  transition: border-color 0.2s ease;
}

input:focus, textarea:focus, select:focus {
  border-color: var(--brass-primary);
  outline: none;
}
```

**Submit Button:**
- Brass background
- Near-black text
- Full width on mobile
- Hover: brighter brass + slight lift

---

## 6. Animation & Motion

### Micro-Interactions

| Element | Animation | Duration |
|---------|-----------|----------|
| Page load | Fade in + subtle rise | 600ms ease-out |
| Scroll reveal | Fade in + 20px rise | 400ms ease-out |
| Button hover | Background brighten + 2px lift | 200ms ease |
| Card hover | Border color + translateY(-2px) | 300ms ease |
| Link hover | Color shift to brass-warm | 150ms ease |

### Scroll-Triggered Animations

- Hero content: Staggered fade-in (eyebrow → headline → body → CTAs)
- Section entries: Subtle rise + fade
- Proof bar: Sequential reveal left-to-right
- Process steps: Sequential reveal on scroll

### Animation Rules

```css
/* Allowed */
- Smooth fade-in (opacity 0 → 1)
- Subtle translateY (-20px → 0)
- Slow image reveal
- Gentle hover transitions

/* Avoid */
- Bouncing or spinning
- Aggressive parallax
- Fast or jarring motion
- Elements jumping during scroll
```

---

## 7. Image & Art Direction

### Required Image Types

1. **Russell Hero Portrait**
   - Standing beside or near the truck
   - Workwear appropriate
   - Controlled natural lighting
   - Calm, confident expression
   - Warm color grade compatible with palette

2. **Russell Working/Directing**
   - On-site at a move
   - Interacting with team or customer
   - Practical, experienced posture

3. **Truck in Context**
   - Real company truck
   - Central Otago landscape or rural setting
   - Clean but not sterile

4. **Moving Detail Shots**
   - Protected furniture being handled
   - Moving blankets/equipment
   - Team working carefully

### Image Style Guidelines

| Aspect | Specification |
|--------|---------------|
| Color grade | Warm, slightly golden tones |
| Contrast | High, cinematic feel |
| Saturation | Natural, not oversaturated |
| Mood | Calm, professional, capable |
| Aspect ratio | Hero: 4:5 or 3:4, Cards: 16:9 |

### Image Treatment CSS

```css
.image-warm {
  filter: sepia(5%) saturate(1.1) brightness(1.02);
  border-radius: 4px;
}

.image-hero {
  position: relative;
}

.image-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(6, 10, 18, 0.3),
    rgba(6, 10, 18, 0.1)
  );
  pointer-events: none;
}
```

---

## 8. Technical Implementation

### Technology Stack Recommendation

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS + custom CSS variables |
| Animation | GSAP ScrollTrigger or Framer Motion |
| Fonts | Google Fonts (Cormorant Garamond + Source Sans 3) |
| Images | Next/Image with optimization |
| Forms | React Hook Form + validation |
| Deployment | Vercel |

### Performance Targets

- Lighthouse Performance: 95+
- Lighthouse Accessibility: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

### SEO Foundation

**Schema Types to Implement:**
- LocalBusiness
- MovingCompany
- Person (Russell Brown)
- WebSite
- BreadcrumbList

**Meta Tags:**
- Title: "Central Lakes Removals | Owner-Led Moving in Cromwell"
- Description: "Premium moving services led by Russell Brown. Based in Cromwell, serving Central Otago and the South Island. 12,000+ relocations."

---

## 9. Development Phases

### Phase 1: Foundation
- [ ] Set up Next.js project with TypeScript
- [ ] Configure Tailwind with custom design tokens
- [ ] Implement typography system (Cormorant + Source Sans)
- [ ] Build global layout components (Header, Footer)
- [ ] Create color system CSS variables

### Phase 2: Homepage Core
- [ ] Hero section with responsive layout
- [ ] Trust proof bar
- [ ] Owner led difference section
- [ ] Services overview (2×2 grid)
- [ ] Reputation and reviews section

### Phase 3: Homepage Continuation
- [ ] Moving process timeline
- [ ] Premium value statement
- [ ] Service areas section
- [ ] About Russell section
- [ ] Quote form section

### Phase 4: Polish & Optimization
- [ ] Scroll-triggered animations (GSAP)
- [ ] Mobile menu implementation
- [ ] Form validation and submission
- [ ] Performance optimization
- [ ] Accessibility audit

### Phase 5: SEO & Schema
- [ ] Meta tags and OG images
- [ ] LocalBusiness schema
- [ ] MovingCompany schema
- [ ] FAQ schema (if applicable)
- [ ] Breadcrumb schema

---

## 10. Homepage Section Summary

| # | Section | Key Elements |
|---|---------|--------------|
| 1 | Header | Logo, Nav, Quote CTA, Mobile menu |
| 2 | Hero | Eyebrow, Headline, Body, CTAs, Proof, Russell image |
| 3 | Trust Proof Bar | 6 proof points, horizontal strip |
| 4 | Owner Led Difference | Editorial split, pull quote, Russell image |
| 5 | Services Overview | 4 service cards (2×2), CTA |
| 6 | Reputation & Reviews | 3 proof blocks, real customer themes |
| 7 | Moving Process | 5-step timeline, brass numbers |
| 8 | Premium Value | Full-width statement, centered copy |
| 9 | Service Areas | Location grid, Cromwell base |
| 10 | About Russell | Portrait, personal story, proof points |
| 11 | Final Quote | Copy + Quote form card |
| 12 | Footer | 4-column, contact, navigation |

---

## 11. Brand Continuity Checklist

Before development, verify each element:

- [ ] Russell remains central to trust story
- [ ] Design feels warm, premium, human, spacious
- [ ] Dark midnight background with subtle warmth
- [ ] Brass CTAs used sparingly for conversion moments
- [ ] Cromwell correctly identified as business base
- [ ] Service areas described truthfully
- [ ] All claims factual and verifiable
- [ ] Copy is specific, not generic
- [ ] Clear conversion action on each page
- [ ] Design feels like Central Lakes Removals, not a template
- [ ] Subtle grain texture applied tastefully
- [ ] Animation is smooth and considered

---

## 12. Next Steps

1. **Review this plan** - Confirm Warm Craftsmanship direction aligns with vision
2. **Approve implementation** - Switch to Code mode to begin development
3. **Gather assets** - Collect high-quality Russell images per art direction
4. **Begin Phase 1** - Set up project foundation and design tokens
5. **Iterate** - Build section by section with feedback loops
