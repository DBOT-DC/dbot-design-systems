# 🎨 DBOT Design Systems Library

> Curated React design system resources for DBOT projects (PumpFinder, OMNOM DEX, Mission Control, Hermes Workspace).

**Last updated:** April 2026 | **43 libraries** across 7 categories

---

## ⭐ DBOT Picks — Quick Reference

| Use Case | Library | Why |
|----------|---------|-----|
| **UI Components** | shadcn/ui + Radix UI | Zero runtime, RSC native, full control |
| **Dashboard KPIs** | Tremor | Radix + Tailwind, beautiful KPI cards |
| **Charts** | Recharts | Declarative, composable, great DX |
| **Crypto Charts** | TradingView Lightweight | Candlesticks, volume, crosshair |
| **Data Tables** | TanStack Table | Headless, sort/filter/page/virtual |
| **Forms** | React Hook Form + Zod | ~11KB combined, minimal re-renders |
| **Icons** | Lucide React | 1500+ icons, best tree-shaking |
| **Styling** | Tailwind CSS v4 | Oxide engine, 100x faster builds |
| **Animation** | Framer Motion | Layout animations, gestures |
| **Server State** | TanStack Query | Caching, mutations, prefetching |
| **Client State** | Zustand | ~1.2KB, no providers |
| **URL State** | Nuqs | Type-safe URL search params |

---

## 📋 Comparison Matrix

### Component Libraries

| Library | ⭐ Stars | Bundle | TS | SSR/RSC | Dark | Tree-shake | License |
|---------|---------|--------|----|---------|------|-----------|---------|
| **shadcn/ui** | 112k | zero runtime | ✅ | RSC ✅ | ✅ | ✅ | MIT |
| **Radix UI** | 18.7k | 5-12KB/prim | ✅ | ✅ | ✅ | ✅ | MIT |
| **Mantine** | 30.9k | ~90KB core | ✅ | ✅ | ✅ | ✅ | MIT |
| **HeroUI (NextUI)** | 28.7k | ~45KB | ✅ | ✅ | ✅ | ✅ | MIT |
| **Ant Design** | 97.8k | ~2MB full | ✅ | ✅ | ✅ | ✅ | MIT |
| **MUI** | 98k | ~100KB core | ✅ | ✅ | ✅ | ✅ | MIT |
| **Chakra UI v3** | 40.3k | ~30KB | ✅ | ✅ | ✅ | ✅ | MIT |
| **Park UI** | 2.3k | zero runtime | ✅ | RSC ✅ | ✅ | ✅ | MIT |
| **React Aria** | 15k | 15-25KB | ✅ | ✅ | ✅ | ✅ | Apache-2.0 |
| **Headless UI** | 28.5k | 5-10KB | ✅ | ✅ | ❌ | ✅ | MIT |
| **React Bits** | 37.4k | varies | ✅ | ✅ | ✅ | ✅ | MIT |

### Dashboard & Data Viz

| Library | ⭐ Stars | Bundle | TS | SSR | Dark | Crypto? | License |
|---------|---------|--------|----|-----|------|---------|---------|
| **Tremor** | 21k | ~20KB | ✅ | ✅ | ✅ | ❌ | MIT |
| **Recharts** | 24.5k | ~60KB | ✅ | ✅ | ✅ | ❌ | MIT |
| **TanStack Table** | 26k | ~12KB | ✅ | ✅ | ❌ | ❌ | MIT |
| **TradingView LW** | 9.2k | ~45KB | ✅ | ❌ | ✅ | ✅✅✅ | Apache-2.0 |
| **LiteCharts** | 1.4k | ~20KB | ✅ | ❌ | ✅ | ✅✅ | MIT |
| **Nivo** | 15k | ~50KB/chart | ✅ | ✅ | ✅ | ❌ | MIT |
| **Visx** | 19.5k | 5-15KB/viz | ✅ | ✅ | ❌ | ❌ | MIT |
| **AG Grid** | 14.5k | ~200KB | ✅ | ✅ | ✅ | ❌ | MIT/Comm |
| **Chart.js** | 65k | ~65KB | ✅ | ✅ | ✅ | ❌ | MIT |

### Animation

| Library | ⭐ Stars | Bundle | TS | SSR | Key Feature | License |
|---------|---------|--------|----|-----|-------------|---------|
| **Framer Motion** | 52k | ~30KB | ✅ | ✅ | Layout anim, gestures | MIT |
| **Motion** | 25k | ~5KB | ✅ | ✅ | CSS-first, lightweight | MIT |
| **AutoAnimate** | 18.5k | ~2KB | ✅ | ✅ | Zero-config list animations | MIT |
| **React Spring** | 26k | ~12KB | ✅ | ✅ | Spring physics | MIT |

### Forms & Validation

| Library | ⭐ Stars | Bundle | Weekly DL | Key Feature | License |
|---------|---------|--------|-----------|-------------|---------|
| **React Hook Form** | 44.6k | ~9KB | ~12M | Uncontrolled, minimal re-renders | MIT |
| **Zod** | 42.3k | ~2KB | ~31M | TS-first schema validation | MIT |
| **Conform** | 6.8k | ~8KB | ~300K | Server Actions, progressive enhancement | MIT |
| **TanStack Form** | 6.4k | ~9.6KB | ~600K | Framework-agnostic | MIT |

### Icons

| Library | ⭐ Stars | Icons | Weekly DL | Tree-shake | License |
|---------|---------|-------|-----------|------------|---------|
| **Lucide React** | 21.9k | 1,500+ | ~55M | ✅ best | ISC |
| **Heroicons** | 23.4k | 292 | ~2.2M | ✅ | MIT |
| **Tabler Icons** | 20.5k | 6,000+ | ~1.4M | ✅ | MIT |
| **Phosphor** | 1.6k | 7,700+ | ~1.2M | ✅ | MIT |

### Styling

| Library | ⭐ Stars | Runtime | RSC | Key Feature | License |
|---------|---------|---------|-----|-------------|---------|
| **Tailwind CSS v4** | 94.3k | Zero | ✅ | Oxide (Rust), 100x faster builds | MIT |
| **Panda CSS** | 6k | Zero | ✅ | Build-time CSS-in-JS, recipes | MIT |
| **Vanilla Extract** | 10.3k | Zero | ✅ | Stylesheets-in-TypeScript | MIT |
| **StyleX (Meta)** | 9.1k | Zero | ✅ | Powers FB/IG/WhatsApp | MIT |

### State Management

| Library | ⭐ Stars | Bundle | Weekly DL | Key Feature | License |
|---------|---------|--------|-----------|-------------|---------|
| **TanStack Query** | 49k | ~12KB | ~8M | Server-state caching | MIT |
| **Zustand** | 57.6k | ~1.2KB | ~20M | Minimal client state | MIT |
| **Jotai** | 21.1k | ~3KB | ~2M | Atomic model | MIT |
| **Nuqs** | 10.3k | ~5.5KB | ~200K | URL state management | MIT |

---

## 🏗️ DBOT Tech Stack Recommendation

```
Styling:          Tailwind CSS v4
Components:       shadcn/ui (built on Radix)
Dashboard KPIs:   Tremor
Charts:           Recharts + TradingView Lightweight (crypto)
Tables:           TanStack Table
Forms:            React Hook Form + Zod
Icons:            Lucide React
Animation:        Framer Motion + AutoAnimate
Server State:     TanStack Query
Client State:     Zustand
URL State:        Nuqs
```

**Rationale:**
- All MIT or permissive license
- Zero or minimal runtime overhead
- Full Next.js App Router / RSC support
- Dark mode everywhere
- TypeScript native
- Best tree-shaking in class
- Largest communities = best docs + ecosystem

---

## 📂 Repository Structure

```
dbot-design-systems/
├── README.md                    # This file
├── CATALOG.json                 # Full structured data
├── examples/                    # Copy-paste ready examples
│   ├── shadcn-dashboard/        # Dark dashboard with Tremor + shadcn
│   ├── crypto-charts/           # TradingView + Recharts crypto view
│   ├── data-table/              # TanStack Table + shadcn
│   ├── form-patterns/           # RHF + Zod patterns
│   └── animations/              # Framer Motion + AutoAnimate
├── docs/                        # Deep dives
│   ├── SHADCN_GUIDE.md
│   ├── TREMOR_GUIDE.md
│   ├── TRADINGVIEW_GUIDE.md
│   └── TAILWIND_V4_NOTES.md
└── scripts/                     # Setup helpers
    └── bootstrap-dbot-ui.sh
```

---

## 🔗 Quick Install Commands

```bash
# Full DBOT stack
npx shadcn@latest init
npm install tremor recharts react-hook-form @hookform/resolvers zod
npm install @tanstack/react-table @tanstack/react-query zustand nuqs
npm install framer-motion @formkit/auto-animate lucide-react
npm install lightweight-charts

# TradingView (crypto)
npm install lightweight-charts
```

---

## 📊 License Summary

All recommended libraries are **MIT** or **Apache-2.0** licensed. No copyleft restrictions. Safe for commercial use.

---

*Maintained by [DBOT-DC](https://github.com/DBOT-DC) • Auto-updated via Hermes Agent*
