export type DBOTPick = "★★★ PRIMARY" | "★★★ HEADLESS BASE" | "★★★ CHARTS" | "★★★ TABLES" | "★★★ CRYPTO" | "★★★ FORMS" | "★★★ VALIDATION" | "★★ FULL KIT" | "★★ BEAUTIFUL" | "★★ SERVER CHARTS" | "★★ LOW-LEVEL" | "★★ LIGHTWEIGHT" | "★★ ZERO-CONFIG" | "★★ ALT" | "★★ TAILWIND" | "★ ENTERPRISE" | "★ ECOSYSTEM" | "★ ARK+PANDA" | "★ ALT SHADCN" | "★ HEADLESS" | "★ A11Y FOCUS" | "★ TAILWIND PAIR" | "★ ANIMATED" | "★ ENTERPRISE TABLE" | "★ GENERAL" | "★ FORMIDABLE" | "★ CRYPTO ALT" | "★ PHYSICS" | "★ PREMIUM" | "★ SERVER-FIRST" | "★ TANSTACK" | "★ VARIETY" | "★ MEGA SET" | "★ TS STYLES" | "★ META SCALE" | "★ ATOMIC" | "★ URL STATE" | "★ SERVER STATE" | "★ CLIENT STATE" | "HEADLESS" | "A11Y FOCUS";

export interface Library {
  name: string;
  stars: number;
  license: string;
  bundle: string;
  ts: boolean;
  ssr?: string | boolean;
  dark?: boolean;
  tree_shake?: boolean;
  url: string;
  dbot_pick?: DBOTPick | string;
  note?: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  libraries: Library[];
}

export const catalog: Category[] = [
  {
    name: "Component Libraries",
    slug: "components",
    description: "Full UI kits and headless primitives",
    icon: "🧩",
    color: "from-violet-500/20 to-purple-500/20",
    libraries: [
      { name: "shadcn/ui", stars: 112000, license: "MIT", bundle: "zero runtime", ts: true, ssr: "RSC", dark: true, tree_shake: true, url: "https://github.com/shadcn-ui/ui", dbot_pick: "★★★ PRIMARY", note: "Copy-paste model, Tailwind-native, RSC-ready" },
      { name: "Radix UI", stars: 18700, license: "MIT", bundle: "5-12KB/prim", ts: true, ssr: true, dark: true, tree_shake: true, url: "https://github.com/radix-ui/primitives", dbot_pick: "★★★ HEADLESS BASE", note: "AAA accessibility, unstyled primitives" },
      { name: "Mantine", stars: 30900, license: "MIT", bundle: "~90KB core", ts: true, ssr: true, dark: true, tree_shake: true, url: "https://github.com/mantinedev/mantine", dbot_pick: "★★ FULL KIT", note: "100+ components, hooks, forms" },
      { name: "HeroUI", stars: 28700, license: "MIT", bundle: "~45KB", ts: true, ssr: true, dark: true, tree_shake: true, url: "https://github.com/heroui-inc/heroui", dbot_pick: "★★ BEAUTIFUL", note: "Beautiful OOTB, v3 March 2026" },
      { name: "Ant Design", stars: 97800, license: "MIT", bundle: "~2MB full", ts: true, ssr: true, dark: true, tree_shake: true, url: "https://github.com/ant-design/ant-design", dbot_pick: "★ ENTERPRISE", note: "Enterprise-grade, huge ecosystem" },
      { name: "MUI", stars: 98000, license: "MIT", bundle: "~100KB core", ts: true, ssr: true, dark: true, tree_shake: true, url: "https://github.com/mui/material-ui", dbot_pick: "★ ECOSYSTEM", note: "Largest ecosystem, v9 beta" },
      { name: "Chakra UI v3", stars: 40300, license: "MIT", bundle: "~30KB", ts: true, ssr: true, dark: true, tree_shake: true, url: "https://github.com/chakra-ui/chakra-ui", dbot_pick: "★ ARK+PANDA", note: "Now uses Ark UI + Panda CSS" },
      { name: "Park UI", stars: 2300, license: "MIT", bundle: "zero runtime", ts: true, ssr: "RSC", dark: true, tree_shake: true, url: "https://github.com/park-ui/park-ui", dbot_pick: "★ ALT SHADCN", note: "Ark+Panda, copy-paste like shadcn" },
      { name: "Ark UI", stars: 5000, license: "MIT", bundle: "zero runtime", ts: true, ssr: true, dark: true, tree_shake: true, url: "https://github.com/chakra-ui/ark", dbot_pick: "HEADLESS", note: "Multi-framework headless primitives" },
      { name: "React Aria", stars: 15000, license: "Apache-2.0", bundle: "15-25KB", ts: true, ssr: true, dark: true, tree_shake: true, url: "https://github.com/adobe/react-spectrum", dbot_pick: "A11Y FOCUS", note: "Adobe, WAI-ARIA compliance" },
      { name: "Headless UI", stars: 28500, license: "MIT", bundle: "5-10KB", ts: true, ssr: true, dark: false, tree_shake: true, url: "https://github.com/tailwindlabs/headlessui", dbot_pick: "★ TAILWIND PAIR", note: "Tailwind Labs official" },
      { name: "React Bits", stars: 37400, license: "MIT", bundle: "varies", ts: true, ssr: true, dark: true, tree_shake: true, url: "https://github.com/vasanthk/react-bits", dbot_pick: "★ ANIMATED", note: "Animated/interactive components" },
    ],
  },
  {
    name: "Dashboard & Data Viz",
    slug: "dashboard",
    description: "KPI cards, charts, tables, data visualization",
    icon: "📊",
    color: "from-blue-500/20 to-cyan-500/20",
    libraries: [
      { name: "Tremor", stars: 21000, license: "MIT", bundle: "~20KB", ts: true, ssr: true, dark: true, tree_shake: true, url: "https://github.com/tremorlabs/tremor", dbot_pick: "★★★ PRIMARY", note: "KPI cards, charts on Radix+Tailwind" },
      { name: "Recharts", stars: 24500, license: "MIT", bundle: "~60KB", ts: true, ssr: true, dark: true, tree_shake: true, url: "https://github.com/recharts/recharts", dbot_pick: "★★★ CHARTS", note: "Declarative, composable" },
      { name: "TanStack Table", stars: 26000, license: "MIT", bundle: "~12KB", ts: true, ssr: true, dark: false, tree_shake: true, url: "https://github.com/tanstack/table", dbot_pick: "★★★ TABLES", note: "Headless, sort/filter/page/virtual" },
      { name: "TradingView LW Charts", stars: 9200, license: "Apache-2.0", bundle: "~45KB", ts: true, ssr: false, dark: true, tree_shake: false, url: "https://github.com/tradingview/lightweight-charts", dbot_pick: "★★★ CRYPTO", note: "Candlesticks, volume, crosshair" },
      { name: "LiteCharts", stars: 1400, license: "MIT", bundle: "~20KB", ts: true, ssr: false, dark: true, tree_shake: false, url: "https://github.com/nicehash/litecharts", dbot_pick: "★ CRYPTO ALT", note: "Lightweight trading charts" },
      { name: "Nivo", stars: 15000, license: "MIT", bundle: "~50KB/chart", ts: true, ssr: true, dark: true, tree_shake: true, url: "https://github.com/plouc/nivo", dbot_pick: "★★ SERVER CHARTS", note: "SSR-first, 40+ chart types" },
      { name: "Visx", stars: 19500, license: "MIT", bundle: "5-15KB/viz", ts: true, ssr: true, dark: false, tree_shake: true, url: "https://github.com/airbnb/visx", dbot_pick: "★★ LOW-LEVEL", note: "Airbnb, low-level blocks" },
      { name: "AG Grid", stars: 14500, license: "MIT/Comm", bundle: "~200KB", ts: true, ssr: true, dark: true, tree_shake: false, url: "https://github.com/ag-grid/ag-grid", dbot_pick: "★ ENTERPRISE TABLE", note: "Excel-like, free tier limited" },
      { name: "Chart.js", stars: 65000, license: "MIT", bundle: "~65KB", ts: true, ssr: true, dark: true, tree_shake: true, url: "https://github.com/chartjs/Chart.js", dbot_pick: "★ GENERAL", note: "Canvas-based, wide chart types" },
      { name: "Victory", stars: 11000, license: "MIT", bundle: "~80KB", ts: true, ssr: true, dark: true, tree_shake: true, url: "https://github.com/FormidableLabs/victory", dbot_pick: "★ FORMIDABLE", note: "Formidable Labs, composable" },
    ],
  },
  {
    name: "Animation & Motion",
    slug: "animation",
    description: "UI animation and motion libraries",
    icon: "✨",
    color: "from-amber-500/20 to-orange-500/20",
    libraries: [
      { name: "Framer Motion", stars: 52000, license: "MIT", bundle: "~30KB", ts: true, ssr: true, dark: false, tree_shake: true, url: "https://github.com/framer/motion", dbot_pick: "★★★ PRIMARY", note: "Layout anim, gestures, exit" },
      { name: "Motion", stars: 25000, license: "MIT", bundle: "~5KB", ts: true, ssr: true, dark: false, tree_shake: true, url: "https://github.com/motiondivision/motion", dbot_pick: "★★ LIGHTWEIGHT", note: "CSS-first, from Framer creator" },
      { name: "AutoAnimate", stars: 18500, license: "MIT", bundle: "~2KB", ts: true, ssr: true, dark: false, tree_shake: true, url: "https://github.com/formkit/auto-animate", dbot_pick: "★★ ZERO-CONFIG", note: "One-line list animations" },
      { name: "React Spring", stars: 26000, license: "MIT", bundle: "~12KB", ts: true, ssr: true, dark: false, tree_shake: true, url: "https://github.com/pmndrs/react-spring", dbot_pick: "★ PHYSICS", note: "Spring physics, organic feel" },
      { name: "GSAP", stars: 21000, license: "Comm/Free", bundle: "~25KB", ts: true, ssr: true, dark: false, tree_shake: false, url: "https://github.com/greensock/GSAP", dbot_pick: "★ PREMIUM", note: "Industry standard, ScrollTrigger" },
    ],
  },
  {
    name: "Forms & Validation",
    slug: "forms",
    description: "Form handling and schema validation",
    icon: "📝",
    color: "from-green-500/20 to-emerald-500/20",
    libraries: [
      { name: "React Hook Form", stars: 44600, license: "MIT", bundle: "~9KB", ts: true, url: "https://github.com/react-hook-form/react-hook-form", dbot_pick: "★★★ PRIMARY", note: "Uncontrolled, ~12M weekly dl" },
      { name: "Zod", stars: 42300, license: "MIT", bundle: "~2KB", ts: true, url: "https://github.com/colinhacks/zod", dbot_pick: "★★★ VALIDATION", note: "TS-first, ~31M weekly dl" },
      { name: "Conform", stars: 6800, license: "MIT", bundle: "~8KB", ts: true, url: "https://github.com/edmundhung/conform", dbot_pick: "★★ SERVER-FIRST", note: "Server Actions, progressive enhancement" },
      { name: "TanStack Form", stars: 6400, license: "MIT", bundle: "~9.6KB", ts: true, url: "https://github.com/tanstack/form", dbot_pick: "★ TANSTACK", note: "Framework-agnostic" },
    ],
  },
  {
    name: "Icons",
    slug: "icons",
    description: "SVG icon libraries for React",
    icon: "🎯",
    color: "from-pink-500/20 to-rose-500/20",
    libraries: [
      { name: "Lucide React", stars: 21900, license: "ISC", bundle: "~0.5KB/icon", ts: true, url: "https://github.com/lucide-icons/lucide", dbot_pick: "★★★ PRIMARY", note: "1500+, ~55M weekly dl" },
      { name: "Heroicons", stars: 23400, license: "MIT", bundle: "~0.4KB/icon", ts: true, url: "https://github.com/tailwindlabs/heroicons", dbot_pick: "★★ TAILWIND", note: "292 icons, outline/solid/mini" },
      { name: "Tabler Icons", stars: 20500, license: "MIT", bundle: "~0.5KB/icon", ts: true, url: "https://github.com/tabler/tabler-icons", dbot_pick: "★ MEGA SET", note: "6000+, stroke-based, MIT" },
      { name: "Phosphor Icons", stars: 1600, license: "MIT", bundle: "~1KB/icon", ts: true, url: "https://github.com/phosphor-icons/react", dbot_pick: "★ VARIETY", note: "7700+, 6 weight variants" },
    ],
  },
  {
    name: "Styling & Theme",
    slug: "styling",
    description: "CSS frameworks and design token systems",
    icon: "🎨",
    color: "from-indigo-500/20 to-violet-500/20",
    libraries: [
      { name: "Tailwind CSS v4", stars: 94300, license: "MIT", bundle: "purged CSS", ts: true, url: "https://github.com/tailwindlabs/tailwindcss", dbot_pick: "★★★ PRIMARY", note: "Oxide (Rust), 100x faster builds" },
      { name: "Panda CSS", stars: 6000, license: "MIT", bundle: "zero runtime", ts: true, url: "https://github.com/chakra-ui/panda", dbot_pick: "★★ ALT", note: "Build-time CSS-in-JS, RSC" },
      { name: "Vanilla Extract", stars: 10300, license: "MIT", bundle: "zero runtime", ts: true, url: "https://github.com/vanilla-extract-css/vanilla-extract", dbot_pick: "★ TS STYLES", note: "Stylesheets-in-TypeScript" },
      { name: "StyleX (Meta)", stars: 9100, license: "MIT", bundle: "zero runtime", ts: true, url: "https://github.com/facebook/stylex", dbot_pick: "★ META SCALE", note: "Powers FB/IG/WhatsApp" },
    ],
  },
  {
    name: "State Management",
    slug: "state",
    description: "Client and server state management",
    icon: "⚡",
    color: "from-yellow-500/20 to-amber-500/20",
    libraries: [
      { name: "TanStack Query", stars: 49000, license: "MIT", bundle: "~12KB", ts: true, url: "https://github.com/tanstack/query", dbot_pick: "★★★ SERVER STATE", note: "Caching, mutations, prefetching" },
      { name: "Zustand", stars: 57600, license: "MIT", bundle: "~1.2KB", ts: true, url: "https://github.com/pmndrs/zustand", dbot_pick: "★★★ CLIENT STATE", note: "~1KB, no providers" },
      { name: "Jotai", stars: 21100, license: "MIT", bundle: "~3KB", ts: true, url: "https://github.com/pmndrs/jotai", dbot_pick: "★ ATOMIC", note: "Atomic model, zero re-renders" },
      { name: "Nuqs", stars: 10300, license: "MIT", bundle: "~5.5KB", ts: true, url: "https://github.com/47ng/nuqs", dbot_pick: "★ URL STATE", note: "Type-safe URL search params" },
    ],
  },
];

export const dbotStack = [
  { layer: "Styling", library: "Tailwind CSS v4", install: "npm install tailwindcss", icon: "🎨" },
  { layer: "Components", library: "shadcn/ui", install: "npx shadcn@latest init", icon: "🧩" },
  { layer: "Dashboard", library: "Tremor", install: "npm install tremor", icon: "📊" },
  { layer: "Charts", library: "Recharts", install: "npm install recharts", icon: "📈" },
  { layer: "Crypto Charts", library: "TradingView LW", install: "npm install lightweight-charts", icon: "🕯️" },
  { layer: "Tables", library: "TanStack Table", install: "npm install @tanstack/react-table", icon: "📋" },
  { layer: "Forms", library: "RHF + Zod", install: "npm install react-hook-form zod @hookform/resolvers", icon: "📝" },
  { layer: "Icons", library: "Lucide React", install: "npm install lucide-react", icon: "🎯" },
  { layer: "Animation", library: "Framer Motion", install: "npm install framer-motion", icon: "✨" },
  { layer: "Server State", library: "TanStack Query", install: "npm install @tanstack/react-query", icon: "⚡" },
  { layer: "Client State", library: "Zustand", install: "npm install zustand", icon: "🧠" },
  { layer: "URL State", library: "Nuqs", install: "npm install nuqs", icon: "🔗" },
];

export function formatStars(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
  return n.toString();
}

export function getDBOTPicks(): Library[] {
  return catalog.flatMap(c => c.libraries).filter(l => l.dbot_pick?.includes("★★★"));
}
