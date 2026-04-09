import { dbotStack, catalog, formatStars, getDBOTPicks } from "@/lib/catalog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CopyButton } from "@/components/copy-button";
import { Star, Layers, Zap, ExternalLink } from "lucide-react";

export default function Home() {
  const topPicks = getDBOTPicks();
  const totalLibs = catalog.reduce((sum, c) => sum + c.libraries.length, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Hero */}
      <section className="text-center space-y-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-violet-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
            React UI Library Reference
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Curated catalog of {totalLibs} libraries across {catalog.length} categories for DBOT projects.
          Browse, compare, and copy install commands.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><Layers className="h-4 w-4" /> {totalLibs} libraries</span>
          <span className="flex items-center gap-1"><Star className="h-4 w-4" /> {topPicks.length} top picks</span>
          <span className="flex items-center gap-1"><Zap className="h-4 w-4" /> All MIT/Apache</span>
        </div>
      </section>

      <Separator />

      {/* Full Stack Install */}
      <section>
        <h2 className="text-2xl font-bold mb-4">⚡ Full DBOT Stack — One Command</h2>
        <Card className="bg-card/50">
          <CardContent className="pt-4">
            <div className="flex items-center gap-2">
              <code className="flex-1 text-sm bg-muted px-4 py-3 rounded-lg font-mono overflow-x-auto">
                npx shadcn@latest init && npm install tremor recharts react-hook-form @hookform/resolvers zod @tanstack/react-table @tanstack/react-query zustand nuqs framer-motion @formkit/auto-animate lucide-react lightweight-charts
              </code>
              <CopyButton text="npx shadcn@latest init && npm install tremor recharts react-hook-form @hookform/resolvers zod @tanstack/react-table @tanstack/react-query zustand nuqs framer-motion @formkit/auto-animate lucide-react lightweight-charts" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* DBOT Stack Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-4">🏗️ DBOT Recommended Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {dbotStack.map((item) => (
            <Card key={item.layer} className="group hover:border-primary/50 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{item.icon}</span>
                  <Badge variant="secondary" className="text-xs">{item.layer}</Badge>
                </div>
                <CardTitle className="text-base">{item.library}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-xs bg-muted px-3 py-2 rounded font-mono truncate">
                    {item.install}
                  </code>
                  <CopyButton text={item.install} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Top Picks */}
      <section>
        <h2 className="text-2xl font-bold mb-4">⭐ DBOT Top Picks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {topPicks.map((lib) => (
            <Card key={lib.name} className="group hover:border-primary/50 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base group-hover:text-primary transition-colors">
                    {lib.name}
                  </CardTitle>
                  <a
                    href={lib.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <CardDescription className="text-xs">{lib.note}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" /> {formatStars(lib.stars)}
                  </span>
                  <Badge variant="outline" className="text-xs">{lib.bundle}</Badge>
                  <Badge variant="outline" className="text-xs">{lib.license}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
