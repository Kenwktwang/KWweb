# AGENTS.md - Project Guide for AI Coding Agents

## Project Overview

**VaR Risk Analytics** is a marketing website for KW-Consultancy, a financial risk analysis consultancy specializing in VaR (Value at Risk) calculations for retail investors. The website is a single-page application (SPA) showcasing professional risk analytics services, portfolio risk reports, pricing plans, and market insights via a built-in blog.

- **Project Name**: my-app (internal), branded as "VaR Risk Analytics"
- **Type**: React-based marketing/landing page website
- **Primary Language**: TypeScript with English (`en`), Traditional Chinese (`zh`), and Simplified Chinese (`cn`) support
- **Default Language**: Traditional Chinese (`zh`)
- **Target Audience**: Retail investors seeking professional portfolio risk analysis

## Technology Stack

### Core Framework
- **React**: ^19.2.0 (with `StrictMode` enabled)
- **TypeScript**: ~5.9.3 (strict mode enabled)
- **Vite**: ^7.2.4 (build tool and dev server)

### Styling
- **Tailwind CSS**: ^3.4.19 (utility-first CSS)
- **tailwindcss-animate**: Animation utilities
- **@tailwindcss/typography**: Typography plugin for prose content
- **PostCSS**: With Tailwind and Autoprefixer
- **Dark mode**: `class` strategy configured in Tailwind

### UI Components
- **shadcn/ui**: Component library using Radix UI primitives (style: `new-york`, `rsc: false`, `tsx: true`)
- **class-variance-authority (cva)**: Component variant management
- **clsx + tailwind-merge**: Utility for conditional class names (`cn()` function in `@/lib/utils`)

### Key Dependencies
- **Radix UI**: 20+ primitive components (dialog, dropdown, navigation, accordion, tabs, tooltip, etc.)
- **Lucide React**: ^0.562.0 (icon library)
- **Recharts**: ^2.15.4 (data visualization)
- **React Hook Form**: ^7.70.0 (form management)
- **Zod**: ^4.3.5 (schema validation)
- **Embla Carousel**: ^8.6.0 (carousel functionality)
- **date-fns**: ^4.1.0 (date formatting)
- **react-markdown**: ^10.1.0 (rendering blog article markdown in modals)
- **gray-matter**: ^4.0.3 (frontmatter parsing)
- **next-themes**: ^0.4.6 (theme management)
- **sonner**: ^2.0.7 (toast notifications)
- **vaul**: ^1.1.2 (drawer component)

### Development Tools
- **ESLint**: ^9.39.1 with TypeScript, React Hooks, and React Refresh plugins
- **@vitejs/plugin-react**: React Fast Refresh support
- **kimi-plugin-inspect-react**: ^1.0.3 (development inspection plugin)

## Project Structure

```
/Users/kenwang/Desktop/KWweb/
├── public/                  # Static assets
│   └── images/             # Image and video assets
│       ├── hero-bg.jpg
│       ├── Hero-bg-moving.mp4
│       ├── cta-bg.jpg
│       ├── cta-bg-moving.mp4
│       ├── sample-report.jpg
│       ├── bell-curve.jpg
│       ├── wechat-qr.png
│       └── whatsapp-qr.png
├── content/                # Markdown blog content (reference/source)
│   └── blog/
│       ├── Latest-Gold-update.md
│       ├── market-volatility-2026.md
│       ├── portfolio-concentration-risk.md
│       └── README.md
├── src/
│   ├── components/
│   │   ├── ui/             # 50+ shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── ... (accordion, alert, command, etc.)
│   │   └── LanguageSwitcher.tsx
│   ├── context/
│   │   └── LanguageContext.tsx    # i18n context (en/zh/cn)
│   ├── hooks/
│   │   └── use-mobile.ts          # Mobile breakpoint detection (768px)
│   ├── lib/
│   │   └── utils.ts               # Utility functions (cn() helper)
│   ├── sections/           # Page sections (single-page layout)
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── SampleReport.tsx
│   │   ├── Services.tsx
│   │   ├── Blog.tsx               # Market insights with article modals
│   │   ├── Pricing.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   ├── App.css             # Legacy styles (mostly unused)
│   └── index.css           # Global styles, Tailwind directives, custom CSS
├── index.html              # HTML entry point
├── vite.config.ts          # Vite configuration (base: './')
├── tailwind.config.js      # Tailwind theme customization
├── tsconfig.json           # TypeScript project references
├── tsconfig.app.json       # App TypeScript config
├── tsconfig.node.json      # Node/Vite TypeScript config
├── eslint.config.js        # ESLint configuration
├── components.json         # shadcn/ui configuration
└── package.json            # Dependencies and scripts
```

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Runs Vite dev server on default port (usually 5173)

# Build for production
npm run build
# Runs: tsc -b && vite build
# Output: dist/ directory with static files

# Preview production build
npm run preview
# Serves the dist/ directory locally

# Lint code
npm run lint
# Runs ESLint on entire project
```

## Code Style Guidelines

### TypeScript Configuration
- **Strict mode**: Enabled (`noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `noFallthroughCasesInSwitch`, `noUncheckedSideEffectImports`)
- **Target**: ES2022
- **Module**: ESNext with bundler resolution
- **JSX**: `react-jsx` (automatic runtime)

### Path Aliases
- `@/*` maps to `./src/*`
- Used throughout for clean imports: `import { Button } from '@/components/ui/button'`

### Component Patterns

#### shadcn/ui Components
- Located in `src/components/ui/`
- Use `cva` (class-variance-authority) for variant management
- Support `asChild` prop for composition
- Use `cn()` utility for class merging

Example:
```tsx
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: { default: "...", destructive: "..." },
      size: { default: "...", sm: "...", lg: "..." }
    }
  }
)
```

#### Section Components
- Located in `src/sections/`
- Self-contained sections of the landing page
- Use `useLanguage()` hook for i18n
- Implement scroll-triggered animations via `useState` + `useEffect` + `IntersectionObserver`
- Navigation anchors use section IDs: `#hero`, `#problem`, `#solution`, `#report`, `#services`, `#blog`, `#pricing`, `#cta`

### Styling Conventions

#### Color Scheme (Premium Gold Theme)
```css
--gold: #c9a962;           /* Primary accent */
--gold-light: #e8d5a3;     /* Light accent */
--gold-dark: #9a7b3d;      /* Dark accent */
--dark: #1a1a1a;           /* Dark backgrounds */
--text: #333333;           /* Primary text */
--text-light: #666666;     /* Secondary text */
```

#### Custom CSS Classes (defined in `index.css`)
- `.text-gradient-gold` - Gold gradient text
- `.bg-gradient-gold` - Gold gradient background
- `.glass` / `.glass-dark` - Glassmorphism effects
- `.btn-primary` / `.btn-secondary` - Button styles
- `.card-premium` - Premium card styling
- `.hover-lift` - Hover animation
- `.section-padding` - Consistent section spacing
- `.container-premium` - Max-width container (1400px)

#### Animation Classes
- `.animate-fade-in`, `.animate-slide-up`, `.animate-slide-in-left`
- `.animate-scale-in`, `.animate-float`, `.animate-pulse-glow`, `.animate-bounce-subtle`
- `.stagger-1` through `.stagger-6` - Stagger delay utilities

### Responsive Breakpoints
- Mobile: < 768px (`useIsMobile()` hook)
- Tailwind defaults: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)

## Internationalization (i18n)

The app supports three languages via React Context:

```typescript
type Language = 'en' | 'zh' | 'cn';
// en: English
// zh: Traditional Chinese (繁體中文)
// cn: Simplified Chinese (简体中文)
```

### Usage
```tsx
import { useLanguage } from '@/context/LanguageContext';

const Component = () => {
  const { t, language, setLanguage } = useLanguage();
  return <h1>{t('hero.headline1')}</h1>;
};
```

### Translation Keys
All translations are defined in `LanguageContext.tsx` with dot-notation keys:
- `nav.*` - Navigation
- `hero.*` - Hero section
- `problem.*`, `mistake.*` - Problem section
- `solution.*` - Solution section
- `report.*` - Sample Report section
- `services.*`, `service.*` - Services section
- `pricing.*`, `plan.*` - Pricing section
- `cta.*`, `success.*` - CTA section
- `footer.*` - Footer section
- `blog.*` - Blog section

## Blog / Market Insights

The `Blog.tsx` section displays market insight articles in a responsive grid with a featured post.

- **Content source**: Article data (title, excerpt, markdown content, tags, date, read time) is embedded directly in `src/sections/Blog.tsx` as static data, organized by language (`blogPosts.en`, `blogPosts.zh`, `blogPosts.cn`).
- **Rendering**: Full articles are rendered inside a `Dialog` modal using `react-markdown` with Tailwind typography (`prose`) styling.
- **Sharing**: Each article modal includes social share buttons (X/Twitter, LinkedIn, Facebook, WhatsApp) and a copy-link feature.
- **Deep linking**: Article URLs use hash fragments (`#blog/{slug}`) so individual articles can be shared.
- **CTA**: Article modals include a call-to-action that scrolls to the `#cta` section.

The `content/blog/` directory contains markdown files that serve as source/reference material but are not dynamically loaded at runtime.

## Testing

**Note**: This project does not currently have automated testing configured. No Jest, Vitest, or Playwright setup is present.

Manual testing approach:
1. Run `npm run dev` for local development
2. Test all three language variants
3. Verify responsive behavior at various breakpoints
4. Check all interactive elements (modals, forms, navigation, blog article modals)
5. Verify blog deep-linking by opening `#blog/{slug}` URLs directly

## Deployment

### Build Output
- Static files generated in `dist/` directory
- `base: './'` configured in `vite.config.ts` for relative paths
- Single HTML entry point: `dist/index.html`

### Deployment Checklist
1. Run `npm run build` to generate production build
2. Verify `dist/` contains:
   - `index.html`
   - `assets/` (JS/CSS bundles)
   - Copy `public/images/` to deployment server
3. Configure web server to serve `index.html` for all routes (SPA fallback)

## Security Considerations

1. **Form Handling**: No backend API integration present — forms are frontend-only (contact via QR code/email)
2. **No Authentication**: Public marketing site with no login functionality
3. **Static Site**: No server-side processing, minimal attack surface
4. **Dependencies**: Keep npm packages updated (`npm audit` recommended)
5. **Content Security Policy**: Consider adding CSP headers for production deployment

## Common Development Tasks

### Adding a New Section
1. Create component in `src/sections/NewSection.tsx`
2. Import and add to `App.tsx` layout in the desired order
3. Add translations to `LanguageContext.tsx`
4. Add section ID for navigation anchors
5. Add nav link in `Navigation.tsx` if needed

### Adding a New UI Component
1. Use shadcn/ui CLI if available: `npx shadcn add <component>`
2. Or manually create in `src/components/ui/`
3. Follow existing patterns with `cva` and `cn()`
4. Export from component file

### Adding a New Blog Article
1. Add the article object to `blogPosts.en`, `blogPosts.zh`, and `blogPosts.cn` in `src/sections/Blog.tsx`
2. Ensure each language version has consistent `slug`, `date`, and `id`
3. Mark one article per language as `featured: true` (only one featured post is displayed)
4. Optionally add a markdown file to `content/blog/` for reference

### Adding a New Language
1. Add language code to `Language` type in `LanguageContext.tsx`
2. Add translation object to `translations` record
3. Add blog post translations to `blogPosts` in `Blog.tsx`
4. Update `LanguageSwitcher` component if needed

### Modifying Styles
1. Global styles: Edit `src/index.css`
2. Tailwind config: Edit `tailwind.config.js`
3. Component-specific: Use Tailwind classes or CSS modules

## External Dependencies Notes

- **Google Fonts**: Loaded via CSS `@import` for Playfair Display, Inter, and Noto Sans TC
- **Images/Videos**: Referenced from `/images/` path (public directory)
- **No Backend**: This is a static frontend-only application
