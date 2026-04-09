"use client";

import { useState } from "react";
import { catalog, formatStars, type Category } from "@/lib/catalog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Star, Search, ExternalLink } from "lucide-react";

export default function CatalogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = catalog
    .map((cat) => ({
      ...cat,
      libraries: cat.libraries.filter(
        (lib) =>
          (lib.name.toLowerCase().includes(search.toLowerCase()) ||
            lib.note?.toLowerCase().includes(search.toLowerCase()))
      ),
    }))
    .filter((cat) => activeCategory === null || cat.slug === activeCategory)
    .filter((cat) => cat.libraries.length > 0);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">📚 Full Catalog</h1>
        <p className="text-muted-foreground mt-1">
          Browse all {catalog.reduce((s, c) => s + c.libraries.length, 0)} libraries across{" "}
          {catalog.length} categories
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search libraries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          <Badge
            variant={activeCategory === null ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setActiveCategory(null)}
          >
            All
          </Badge>
          {catalog.map((cat) => (
            <Badge
              key={cat.slug}
              variant={activeCategory === cat.slug ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setActiveCategory(activeCategory === cat.slug ? null : cat.slug)}
            >
              {cat.icon} {cat.name.split(" ")[0]}
            </Badge>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-8">
        {filtered.map((cat) => (
          <CategorySection key={cat.slug} category={cat} />
        ))}
      </div>
    </div>
  );
}

function CategorySection({ category }: { category: Category }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{category.icon}</span>
        <div>
          <h2 className="text-xl font-bold">{category.name}</h2>
          <p className="text-sm text-muted-foreground">{category.description}</p>
        </div>
        <Badge variant="secondary" className="ml-auto">{category.libraries.length}</Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {category.libraries.map((lib) => (
          <LibraryCard key={lib.name} {...lib} />
        ))}
      </div>
      <Separator className="mt-6" />
    </section>
  );
}

function LibraryCard(lib: (typeof catalog)[0]["libraries"][0]) {
  const isTopPick = lib.dbot_pick?.includes("★★★");
  return (
    <Card className={`group hover:border-primary/50 transition-colors ${isTopPick ? "border-primary/30" : ""}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base group-hover:text-primary transition-colors flex items-center gap-2">
            {lib.name}
            {isTopPick && <span className="text-xs">⭐</span>}
          </CardTitle>
          <a href={lib.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <CardDescription className="text-xs">{lib.note}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="h-3 w-3" /> {formatStars(lib.stars)}
          </span>
          <Badge variant="outline" className="text-xs">{lib.bundle}</Badge>
          <Badge variant="outline" className="text-xs">{lib.license}</Badge>
          {lib.ts && <Badge variant="outline" className="text-xs">TS</Badge>}
          {lib.dark && <Badge variant="outline" className="text-xs">Dark</Badge>}
          {lib.tree_shake && <Badge variant="outline" className="text-xs">Tree</Badge>}
          {lib.ssr === "RSC" && <Badge variant="outline" className="text-xs text-green-500">RSC</Badge>}
          {lib.ssr === true && <Badge variant="outline" className="text-xs">SSR</Badge>}
        </div>
      </CardContent>
    </Card>
  );
}
