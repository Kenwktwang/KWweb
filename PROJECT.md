# VaR Risk Analytics — Project Progress Log

> Marketing website for KW-Consultancy (branded as "VaR Risk Analytics")
> Single-page React application with i18n support (EN / 繁體中文 / 简体中文)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19.2 + TypeScript 5.9 (strict mode) |
| Build Tool | Vite 7.2 |
| Styling | Tailwind CSS 3.4 + shadcn/ui |
| Charts | Recharts |
| i18n | React Context (custom) |
| Forms | Formspree (frontend-only) |
| Icons | Lucide React |

---

## Completed Changes

### 1. Navigation Bar — VaR Calculator Button
**Status:** ✅ Completed

- Added "VaR Calculator" button with external-link icon
- Opens `https://var-calculator-production.up.railway.app` in new tab
- Appears on both desktop and mobile menus
- Existing "Get Free Analysis" button kept as secondary CTA
- Fully translated in all 3 languages

**Files touched:**
- `src/sections/Navigation.tsx`
- `src/context/LanguageContext.tsx`

---

### 2. Contact Section (CTA) — Full Revamp
**Status:** ✅ Completed

Replaced the old QR-code-only contact section with a comprehensive contact layout:

#### Left Column — Contact Info
- **Email:** info@openminai.com (mailto link)
- **Phone:** +852 6592 8971 (tel link)
- **Service Regions:** 🇭🇰 Hong Kong ｜ 🇲🇴 Macau ｜ 🇨🇳 Greater Bay Area
- **Business Hours:** Mon–Sat 10:00 AM – 8:00 PM

#### Right Column — Contact Form
- Name* + Phone* (side-by-side on desktop)
- Email
- Service of Interest dropdown:
  - VaR Analysis
  - Portfolio Risk Report
  - Stress Testing
  - Risk Consulting
  - Enterprise Solution
  - Other Inquiry
- Message*
- Submit button with loading state
- Success confirmation screen

#### Form Integration
- Submits to Formspree endpoint: `https://formspree.io/f/xgorqpqw`
- Loading spinner during submission
- Error handling with alert
- Success state replaces form with confirmation

**Files touched:**
- `src/sections/CTA.tsx` (complete rewrite)
- `src/context/LanguageContext.tsx` (30+ new translation keys)

---

### 3. Pricing Section — Complete Restructure
**Status:** ✅ Completed

Replaced old 3-tier portfolio-size pricing with new service-based pricing:

| Tier | Price | Target | Key Features |
|------|-------|--------|-------------|
| **VaR Calculator** | HKD 30 / month | DIY investors | Online calculator, daily VaR/CVaR, basic metrics, up to 20 stocks |
| **Bespoke Analysis** ⭐ | HKD 290 one-time | Most popular | Comprehensive bespoke analysis, stress testing, professional PDF, unlimited stocks |
| **Premium + Consult** | HKD 590 one-time | High-touch clients | Everything in Bespoke + 30-min 1-on-1 video consultation with ex-investment banker (CFA + FRM certified), personalized strategy, portfolio Q&A, priority delivery, 6-month follow-up |

#### Design
- "Bespoke Analysis" highlighted as "Most Popular" with gold gradient card
- "Premium + Consult" features an "+ Expert Consultation" badge describing the 30-min session credentials
- Mobile-responsive stacked layout
- All CTAs scroll to `#cta` contact form

**Files touched:**
- `src/sections/Pricing.tsx` (complete rewrite)
- `src/context/LanguageContext.tsx` (replaced all plan/feature translations)

---

### 4. Bug Fix — Contact Email
**Status:** ✅ Completed

- Fixed contact email from `info@kw-consultancy.com` → `info@openminai.com`
- Verified consistency across CTA section, Footer, and success message translations

**Files touched:**
- `src/sections/CTA.tsx`

---

## File Inventory (Key Files)

```
src/
├── sections/
│   ├── Navigation.tsx      ✅ VaR Calculator button + Get Free Analysis
│   ├── Hero.tsx            🔄 Original (unchanged)
│   ├── Problem.tsx         🔄 Original (unchanged)
│   ├── Solution.tsx        🔄 Original (unchanged)
│   ├── SampleReport.tsx    🔄 Original (unchanged)
│   ├── Services.tsx        🔄 Original (unchanged)
│   ├── Blog.tsx            🔄 Original (unchanged)
│   ├── Pricing.tsx         ✅ Restructured (3 new tiers)
│   ├── CTA.tsx             ✅ Revamped (contact form + info)
│   └── Footer.tsx          🔄 Original (unchanged)
├── context/
│   └── LanguageContext.tsx ✅ Updated translations
└── components/
    └── LanguageSwitcher.tsx 🔄 Original (unchanged)
```

---

## Translation Coverage

All new content is fully translated in:
- **en** — English
- **zh** — 繁體中文 (Traditional Chinese, default)
- **cn** — 简体中文 (Simplified Chinese)

---

## Deployment Checklist

- [x] TypeScript compiles without errors (`npx tsc --noEmit`)
- [x] All i18n keys defined for 3 languages
- [x] Formspree endpoint configured
- [x] External VaR Calculator link opens in new tab
- [x] Responsive layouts verified (desktop + mobile)
- [ ] Run `npm run build` for production
- [ ] Deploy `dist/` + `public/images/` to server

---

## Next Steps / Ideas

1. **Services Section** — Update service descriptions to align with new pricing tiers
2. **Hero CTA** — Could add a direct "Subscribe 30 HKD/mo" quick-action button
3. **Payment Integration** — For the 30 HKD/mo tier, integrate Stripe/PayPal for self-service checkout
4. **Email Confirmation** — Set up auto-reply from Formspree confirming inquiry received
5. **SEO** — Add meta tags for each language variant
6. **Analytics** — Add GA4 or Plausible to track pricing page conversions

---

*Last updated: 2026-04-29*
