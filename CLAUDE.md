# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

VaR Risk Analytics — a marketing SPA for KW-Consultancy, a financial risk analysis consultancy. Built with React 19, TypeScript, Vite, Tailwind CSS, and shadcn/ui (new-york style). Static frontend only, no backend.

See `AGENTS.md` for comprehensive documentation (component catalog, translation keys, color scheme, deployment).
See `PROJECT.md` for completed changes and progress log.

## Commands

```bash
npm run dev      # Start dev server (Vite, usually port 5173)
npm run build    # Type-check + production build → dist/
npm run preview  # Serve dist/ locally
npm run lint     # ESLint on entire project
```

## Architecture

**Single-page landing page** with sections rendered in `App.tsx`:

```
App
└── LanguageProvider (context, wraps everything)
    ├── Navigation (sticky, language switcher at far right)
    └── main (scrollable sections in order)
        ├── Hero → Problem → Solution → SampleReport
        ├── Services → Blog → Pricing → CTA
        └── Footer
```

**Path alias**: `@/` → `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`).

**i18n**: React Context in `src/context/LanguageContext.tsx`. Three languages: `zh` (default, Traditional Chinese), `en` (English), `cn` (Simplified Chinese). All translations are inline in that file under dot-notation keys. Components call `useLanguage()` → `t('key.path')`.

**Styling**: Tailwind utility classes + custom CSS in `src/index.css`. Gold-themed color scheme (`--gold: #c9a962`). Custom utility classes for animations (`.animate-fade-in`, `.stagger-N`), glassmorphism (`.glass`), and premium cards (`.card-premium`). The `cn()` helper from `src/lib/utils.ts` merges Tailwind classes everywhere.

**Blog articles**: Static data embedded in `src/sections/Blog.tsx` (one array per language). Markdown rendered in a `Dialog` modal via `react-markdown`. Hash-based deep linking via `#blog/{slug}`. The `content/blog/` directory is reference only, not loaded at runtime.

## Recent changes (frozen checkpoint 2026-04-29)

- **Navigation**: Language switcher moved to far right; added external VaR Calculator link
- **CTA/Contact**: Complete revamp — contact form with Formspree (`mdayqbdw`), contact info cards, business hours
- **Pricing**: 3-tier service pricing (HKD 30/mo calculator, HKD 290 bespoke, HKD 590 + consultation)
- **Wording**: All "Free Analysis" replaced with "Book Consultation" across all 3 languages
- **Services**: Added VaR Calculator CTA alongside View Pricing

## Component patterns

- shadcn/ui components live in `src/components/ui/` — use `npx shadcn add <component>` to add new ones
- Sections are self-contained files in `src/sections/`, each using `useLanguage()` for i18n
- Scroll-triggered reveal animations use `useState` + `useEffect` + `IntersectionObserver` (not a library)
- Forms use `react-hook-form` + `zod` validation
