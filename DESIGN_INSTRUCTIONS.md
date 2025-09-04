Goal: Build a world-class, dark-themed, single-page developer portfolio using React + Vite + Tailwind, with Motion animations, Radix Accordion collapsibles, shadcn-style component patterns, lucide icons, Geist typography, and optional React Bits pieces via MCP.

High-level requirements:

One-page layout with sections: Hero, then three collapsible sections (Resume, Portfolio, About Me), plus a minimal site footer.

Dark-first design using Tailwind’s dark class strategy and a carefully tuned palette for contrast and elegance.

Smooth, tasteful Motion-based entrances, scroll-reveals, and hover microinteractions, with performance-aware spring configs and variants.

Accessible primitives via Radix Accordion with “single” type and “collapsible” behavior, then styled with Tailwind and animated with Motion.

Use shadcn/ui approach to create and own the component code, ensuring consistent, composable, and AI-friendly interfaces.

Developer-centered styling: Geist Sans for UI, Geist Mono for code, and lucide-react iconography, all integrated cleanly.

Pull in React Bits animations/backgrounds where they add genuine value anywhere in the website.

Project setup:

Install Motion, Radix Accordion, lucide-react, and set up Geist fonts.

Confirm React 18 createRoot usage for the app entry to align with modern rendering APIs.

Commands (run as needed):

npm install framer-motion @radix-ui/react-accordion lucide-react.

Set up Geist fonts via npm or downloaded woff2; for Vite, prefer standard @font-face using files from Vercel’s distribution or use a Google Fonts import if simpler.

File structure:

src/

main.tsx (React 18 createRoot entry)

App.tsx (one-page assembly with sections and scroll anchors)

components/ (reusable, shadcn-style)

ui/Accordion.tsx (Radix Accordion wrappers with Tailwind classes + Motion transitions)

ui/Button.tsx (primary, ghost variants; focus-visible outlines; icon slot)

ui/Badge.tsx (small label chip for skills/stacks)

ui/Icon.tsx (lucide-react wrapper for consistent sizing/styling)

Hero.tsx (developer terminal-style hero + Motion entrance + optional React Bits text effect)

Section.tsx (reusable section shell with title, subtitle, description)

Collapsible.tsx (composed Accordion with single/collapsible behavior and Motion)

cards/ProjectCard.tsx (Portfolio items: title, stack badges, links, Motion hover)

timeline/ResumeTimeline.tsx (vertical timeline with Motion stagger)

lib/

cn.ts (clsx/tailwind-merge style utility; or implement a small className merge util)

animations.ts (Motion variants: fadeInUp, stagger container, hover lift)

styles/

globals.css (Tailwind @import and base styles, font-face or font utility classes for Geist)

Tailwind configuration:

Enable dark mode via the 'class' strategy in tailwind.config and ensure a top-level <html class="dark"> or toggle support later.

Use @tailwindcss/vite plugin in vite.config.ts and import Tailwind in a single CSS entry (globals.css).

Define a color system geared to a dark palette: slate/neutral bases, a desaturated background, and a refined accent (e.g., pink-gold gradient via utilities), all expressed as Tailwind theme.extend colors/tokens.

Register font families: Geist Sans as default sans, Geist Mono for code spans and small developer UI accents.

Example notes (implement per docs):

darkMode: 'class' and plugin: [tailwindcss()] in Vite, then @import "tailwindcss" in styles.

Add container, spacing scale, and motion-safe utilities for animations.

Typography and icons:

Use Geist Sans for headings/body and Geist Mono for code-like highlights, tabs, and terminal motifs to emphasize a developer identity.

Use lucide-react icons by named imports to keep bundles lean due to ES module tree-shaking, embedding icons as inline React SVGs.

Animations with Motion:

Create variants for hero reveal (opacity/translateY), section in-view reveals (whileInView with once), and small hover/tap microinteractions.

Use staggered containers for lists (skills, timeline items, project cards), and spring transitions for “crafted but restrained” feel.

Prefer Motion for scroll-based or viewport animations and composable variants to synchronize multiple elements elegantly.

Collapsible sections with Radix

Implement a single-type Accordion with collapsible set to true, then style item triggers as large, tactile rows with icons and subtle Motion chevron rotation.

Keep semantics and WAI-ARIA alignment from Radix, layering Tailwind for design and Motion for animation only.

shadcn-style component approach

Build a ui/ folder with composable primitives (Button, Badge, Accordion wrapper) using the “open code” philosophy so components are fully modifiable and cohesive across the site.

Maintain predictable props and composition patterns for cross-compatibility and AI-readability.

React Bits (via MCP):

Use React Bits for a tasteful animated background or text effect in the Hero, for example an animated background or headline effect that elevates first impression.

Call the configured React Bits MCP server and ask it to insert a specific component variant (TS + Tailwind when available) so the code fits the stack.

Keep dependencies minimal—React Bits often ships open code variants, so copy-in is aligned with the shadcn approach.

Detailed design spec:

Hero (developer-terminal aesthetic):

Full-viewport section on a rich dark background with nuanced noise/gradient layer using Tailwind utilities and subtle Motion-revealed content blocks.

Left-aligned stack: greeting line with a monospace caret blink accent, name in Sans with slight tracking, and a short capability line with Badge-like inline skill tags.

Primary Button (e.g., “Contact” or “Download Resume”) plus Ghost Button (“View GitHub/LinkedIn”), both with lucide icons and motion hover states.

Optional: React Bits animated background or text shimmer to make the hero truly memorable, carefully tuned to not overpower content.

Collapsible section 1 – Resume:

Radix Accordion item labeled “Resume” with a concise subtitle; on open, reveal a Motion-staggered timeline (company, role, dates, bullets, tech badges).

Include a small “Download PDF” Button with an icon and hover elevation.

Maintain strong contrast and readable line height for dark mode, using Geist Sans for body and Geist Mono for snippet-like elements (e.g., role tags).

Collapsible section 2 – Portfolio:

Accordion item “Portfolio”; on open, show a responsive grid of ProjectCard components with Motion hover lift and subtle glow on focus/hover.

Each card: project title, short description, badges for stack, and icon links to live/demo and repo, with icons imported individually from lucide-react for tree-shaking.

Optional: use Motion’s whileInView to reveal cards progressively as the expanded content scrolls into view.

Collapsible section 3 – About Me:

Accordion item “About Me”; on open, present a short narrative and a developer-centric “Now” list (what’s being learned, shipped, explored) with staggered reveals.

Include a compact skills matrix using Badge components with monospace variants to echo a terminal vibe.

Consider a small Motion-driven signature effect (e.g., underline sweep) on section headings for craft.

Footer:

Minimal, muted footer with a copyright line and a couple of icon links, matching the site’s subdued developer aesthetic.

Accessibility and UX:

Leverage Radix Accordion for accessible semantics and keyboard interactions out of the box.

Ensure focus-visible rings on interactive controls via Tailwind utilities and consistent Button/Link patterns.

Prefer motion-safe utilities and keep animation durations/curves ergonomic to reduce fatigue.

Implementation checklist (actionable):

Configure Tailwind with darkMode: 'class' and the @tailwindcss/vite plugin, then import Tailwind once in globals.css.

Load Geist Sans/Mono (via npm or zip) with @font-face or a Google Fonts import, then map to Tailwind theme fontFamily.

Create ui primitives (Button, Badge, Accordion wrapper) in shadcn style and document props for reusability.

Implement Hero with Motion: heading, subheading, CTA row, and optional React Bits accent; test performance in dev.

Build Accordion sections (Resume, Portfolio, About) with Motion content reveals and consistent spacing rhythm.

Add lucide-react icons by named import only for used icons to keep the bundle small.

Verify React 18 entrypoint with createRoot, and keep the entire site on a single route with anchor navigation.

Code-quality and best practices:

Favor component composition and small, focused files as encouraged by shadcn’s “build your own library” philosophy.

Keep animation definitions centralized in lib/animations.ts with named variants to enforce consistency and easy tuning.

Ensure all Accordion items mount content lazily when opened, coordinating Motion’s initial states only when visible.

Document props on each shared component, and standardize icon sizing, spacing, and color via Tailwind tokens.

Appendix: quick config snippets

Vite + Tailwind plugin: defineConfig with tailwindcss() in vite.config, and @import "tailwindcss" in globals.css.

Tailwind dark mode: darkMode: 'class' in tailwind.config and usage of dark: utilities for backgrounds, borders, and text.

React 18 entry: import { createRoot } from 'react-dom/client' and createRoot(document.getElementById('root')!).render(<App />).

Motion variants: export fadeInUp, staggeredList, hoverLift and apply via motion.div initial/animate/whileInView/whileHover.

Radix Accordion: Root type="single" collapsible, Trigger with a right-side chevron icon that rotates via Motion on open.

Icons: import { Github, ExternalLink, Mail } from 'lucide-react' and use as inline SVG React components.
