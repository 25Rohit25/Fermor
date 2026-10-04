# Fermor Homepage

A responsive, production-quality homepage redesign for **Fermor** — built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Recharts, and Lucide React.

---

## Overview

Fermor is designed around helping users better understand their financial position and make clearer decisions.

For this assignment, I redesigned the homepage around a simple product narrative:

> **Understand your money → decide what matters → see where your decisions can take you.**

The goal was to make the product feel calm, trustworthy and intelligent while demonstrating the platform through interactive financial interfaces instead of generic marketing imagery.

---

## Product Direction & Framework

Fermor should not feel like another investment tracker, expense logger, or cryptocurrency dashboard. Instead, it positions itself as a **financial intelligence layer** connecting where your money is with what to do next.

The homepage guides the user through three core mental stages:

1. **Understand (Stage 01)** — Gives users a clear, unified view of everything they own, owe, spend, and invest across multiple accounts.
2. **Act (Stage 02)** — Transforms raw financial information into contextual, actionable next steps rather than passive data tables.
3. **Grow (Stage 03)** — Helps users understand how today's decisions compound over 5, 10, and 15 years through live scenario exploration.

---

## Key Product Decisions

### 1. Positioning Around "What should I do next with my money?"
Many financial products stop at displaying balances, charts, or transaction lists. I chose to position Fermor around the question: **“What should I do next with my money?”** 

Connecting balances to context and compounding actions allows Fermor to serve as a decision co-pilot rather than another passive aggregation spreadsheet.

### 2. Product UI as the Primary Visual Language
Instead of relying on generic stock photography, 3D illustrations, or abstract geometric slop, I used realistic financial interfaces as the primary visual language of the homepage. This makes the product tangible immediately and communicates Fermor's value through concrete, relatable financial scenarios (e.g., dining spend reallocations, car purchase affordability, retirement milestone acceleration).

### 3. Restraint and Minimal Aesthetic
Financial products depend heavily on trust and clarity. I intentionally avoided aggressive neon gradients, crypto aesthetics, floating coins, and excessive glassmorphism. The interface uses restrained, warm off-white surfaces (`#F7F8F5`), crisp 1px borders (`#E5E7E2`), generous spacing, tabular numerals, and a curated forest green palette (`#173F35`, `#245B4C`, `#E8F1EC`) so that financial information remains the hero.

---

## Key Features

- **Dynamic Financial Dashboard Preview:** Live net-worth counter with animated spring figures, portfolio health indicators, and responsive timeframe toggles (`1M`, `6M`, `1Y`, `ALL`).
- **Interactive Recharts Visualizations:** Smooth curved area charts with customized gradient fills, tabular axis labels, and tooltip inspectors formatted in Indian Rupee format.
- **Fermor Scenario Explorer:** Contextual insight card demonstrating how increasing the monthly savings rate from 22% to 25% accelerates a ₹1 Crore milestone by 14 months.
- **Financial Fragmentation Storytelling:** High-contrast dark section (`#111310`) contrasting disconnected financial silos (Banks, Investments, Credit, Goals) against Fermor's unified model.
- **Understand Bento Grid:** Asymmetrical layout showcasing Net Worth, Monthly Spending with category variances, Asset Allocation (Equity, Debt, Cash, Gold), and Emergency Runway milestones.
- **Act Decision Card:** Realistic dining spend variance analysis (+₹4,280/mo) coupled with a ₹3,000/mo SIP reallocation compounding into +₹6.1 Lakhs over 10 years.
- **Interactive Grow Wealth Projection:** Real-time compounding calculator with an interactive monthly investment slider (₹10,000 to ₹50,000/mo) dynamically rendering 10-year and 15-year future milestones and area charts.
- **Ask Fermor Conversational Intelligence:** Interactive prompt selector with smooth opacity/translateY transitions exploring real-world questions (*"Can I afford a ₹20L car?"*, *"Where did I overspend this month?"*, *"Why is my portfolio down today?"*, *"How much should I invest to retire at 50?"*) alongside an interactive question simulator.
- **Privacy & Security Architecture:** Three core principles (*Private by design, Secure connections, Transparent insights*) with a minimal architectural data flow diagram.
- **Interactive Early Access Experience:** Cohort 02 waitlist modal with email capture, interest segmentation, celebratory confetti effects, and personal invitation referral link.
- **Mobile-First Responsive Layout:** Custom drawer menu, horizontal scrollable prompt chips, stacked Bento cards, and touch-friendly controls tested across 390px, 768px, and 1440px viewports.

---

## Interaction Design & Microinteractions

- **Tabular Figures:** All financial figures enforce `font-variant-numeric: tabular-nums` to prevent layout jitter during count-up transitions.
- **Smooth Easing Curves:** Micro-interactions follow an Apple-inspired cubic bezier easing curve: `[0.22, 1, 0.36, 1]`.
- **Dynamic Timeframe Filtering:** Switching between `1M`, `6M`, `1Y`, and `ALL` dynamically swaps the dataset with smooth SVG transitions.
- **Slider Feedback:** The wealth projection slider triggers instant compounding calculations without input lag.
- **Scroll-Aware Navbar:** Automatically transitions from transparent to a frosted glass background (`rgba(247, 248, 245, 0.85)` with `backdrop-filter: blur(18px)`) once the user scrolls past the hero fold.

---

## Technology Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 with custom design tokens
- **Animations:** Framer Motion
- **Data Visualization:** Recharts
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti

---

## Project Structure

```text
fermor-homepage/
├── app/
│   ├── globals.css              # Design tokens, CSS variables, range slider styles, reduced-motion
│   ├── icon.svg                 # Fermor brand favicon mark
│   ├── layout.tsx               # Root layout, Geist typography, SEO OpenGraph metadata
│   └── page.tsx                 # Main application page orchestrating the storytelling stages
├── components/
│   ├── navbar.tsx               # Translucent sticky header, mobile drawer menu, CTA triggers
│   ├── hero.tsx                 # Centered product story, headline scale, trust badges
│   ├── financial-dashboard.tsx  # Hero product preview, time filters, Recharts area chart, scenario toggle
│   ├── problem-section.tsx      # Dark section illustrating financial fragmentation vs. unified core
│   ├── product-framework.tsx    # "Understand. Act. Grow." 3-stage narrative introduction
│   ├── understand-section.tsx   # Chapter 01: Bento dashboard (Net worth, spending, allocation, goal)
│   ├── act-section.tsx          # Chapter 02: Contextual insight, dining variance, SIP compounding
│   ├── grow-section.tsx         # Chapter 03: Monthly investment slider & live projection chart
│   ├── ask-fermor.tsx           # Interactive AI Q&A prompt switcher & simulated query input
│   ├── security-section.tsx     # Privacy principles & architecture data flow
│   ├── final-cta.tsx            # Deep green CTA section with quick waitlist email capture
│   └── footer.tsx               # Editorial footer with navigation links & regulatory notices
├── components/ui/
│   ├── animated-number.tsx      # Spring-animated counter with Indian Rupee formatting
│   ├── button.tsx               # Primary, secondary, dark, and text buttons with hover microinteractions
│   ├── card.tsx                 # Reusable card container with border radius and subtle shadows
│   ├── early-access-modal.tsx   # Interactive waitlist dialog with confetti and referral link
│   ├── reveal.tsx               # Viewport entry animation wrapper with reduced-motion support
│   └── section-label.tsx        # Eyebrow tag with pulsing indicator dot
├── data/
│   └── demo-financial-data.ts   # Verified demo portfolio, time-series data, and prompt items
├── lib/
│   ├── projection.ts            # Compounding SIP & lump-sum future value mathematical models
│   └── utils.ts                 # Class merging (clsx + tailwind-merge) & Indian number formatting
└── README.md
```

---

## Getting Started Locally

### Prerequisites

- Node.js 18.18+ or 20+ (Node v23 supported)
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/25Rohit25/Fermor.git
cd Fermor

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Verify linting
npm run lint

# Compile optimized static bundle
npm run build

# Run production server
npm start
```

---

## Accessibility & Performance

- **Semantic HTML5:** Built using semantic elements (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<dialog>`).
- **Tabular Figures:** Financial values use `tabular-nums` for consistent column alignment and legible number counting.
- **Prefers-Reduced-Motion:** Animations automatically reduce duration to `0.01ms` when user settings prefer reduced motion.
- **Keyboard Navigation & ARIA:** Modals support `Escape` to close, interactive elements carry `aria-label` and `aria-pressed` states, and visible focus rings (`focus-visible:ring-2`) are enforced on all interactive controls.
- **Touch Target Sizing:** All mobile buttons and clickable chips satisfy the 44px minimum touch target standard.

---

## Disclaimer

Financial values, projections and insights shown in this project are demonstration data created for the frontend experience and should not be interpreted as financial advice.
