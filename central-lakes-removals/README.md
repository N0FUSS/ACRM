# Central Lakes Removals - Website

## Purpose
This is the Next.js production website for Central Lakes Removals, a premium, owner-led moving company based in Cromwell, personally led by Russell Brown. The website serves to capture leads and communicate the brand's premium value proposition.

## Strategic Documentation
The following documents define the "Russell Brown differentiator" positioning and brand continuity for all future work on this site:

- [Master Control Brief](docs/01_CLR_Website_Master_Control_Brief.md) - The core strategic and positioning framework.
- [Homepage Coding Agent Prompt](docs/02_CLR_Homepage_Coding_Agent_Prompt.md) - Detailed layout, copy, and component requirements for the homepage.
- [Visual Brand Continuity Guide](docs/03_CLR_Visual_Brand_Continuity_Guide.md) - Visual personality, color system, and design rhythm rules.
- [Prompt Pack Context](docs/PROMPTS_README.md) - Overview of the strategic documentation package.

## App Directory Structure
- `src/app/` - Next.js App Router pages and API routes
- `src/components/` - Reusable UI components
- `src/lib/` - Utilities, configuration, and structured data
- `public/` - Static assets like images and fonts
- `scripts/` - Utility scripts (e.g., Lighthouse CI runner)
- `tests/` - Playwright E2E tests

## Requirements
- Node.js (v18 or higher recommended)
- npm

## Commands

**Install Dependencies:**
\`\`\`bash
npm install
# or
npm ci
\`\`\`

**Development Server:**
\`\`\`bash
npm run dev
\`\`\`

**Build for Production:**
\`\`\`bash
npm run build
\`\`\`

**Linting:**
\`\`\`bash
npm run lint
\`\`\`

**End-to-End Tests:**
\`\`\`bash
npm run test:e2e
\`\`\`

**Lighthouse Performance Check:**
\`\`\`bash
npm run test:lighthouse
\`\`\`

## Environment Variables

The following environment variables are required for the quote form to function:

- `RESEND_API_KEY`: Your Resend API key for sending emails
- `TO_EMAIL`: The email address where quote requests will be sent (e.g., `quote@centrallakesremovals.co.nz`)
- `FROM_EMAIL`: The email address used as the sender (e.g., `Central Lakes Removals <quote@centrallakesremovals.co.nz>`)

## Deployment Notes
- This is a Next.js application designed to be deployed on Vercel or any standard Node.js hosting platform.
- Ensure all environment variables are correctly set in your deployment environment.
- The `business-config.ts` file acts as the single source of truth for business details.

## Important Brand Rules
- **Positioning:** Central Lakes Removals is a premium, owner-led moving company based in Cromwell, personally led by Russell Brown.
- **Visual Direction:** Dark midnight blue/black background, generous negative space, warm off-white typography, muted grey supporting text, restrained brass CTAs.
- **Style:** Do NOT make the site generic, cheap, bright, cluttered, cartoonish, or discount-driven.
- **WARNING - Do not invent claims:** Never invent business claims, reviews, phone numbers, locations, or schema facts. Only use verified claims found in `business-config.ts`.
