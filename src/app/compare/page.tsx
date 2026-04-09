import { catalog, formatStars } from "@/lib/catalog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">⚖️ Compare</h1>
        <p className="text-muted-foreground mt-1">
          Side-by-side comparison of libraries by category
        </p>
      </div>

      {catalog.map((cat) => (
        <section key={cat.slug}>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>{cat.icon}</span> {cat.name}
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-3 font-medium min-w-[140px]">Library</th>
                      <th className="text-center p-3 font-medium">⭐ Stars</th>
                      <th className="text-center p-3 font-medium">📦 Bundle</th>
                      <th className="text-center p-3 font-medium">TS</th>
                      <th className="text-center p-3 font-medium">SSR</th>
                      <th className="text-center p-3 font-medium">Dark</th>
                      <th className="text-center p-3 font-medium">Tree</th>
                      <th className="text-center p-3 font-medium">License</th>
                      <th className="text-left p-3 font-medium min-w-[160px]">DBOT Pick</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.libraries.map((lib, i) => (
                      <tr
                        key={lib.name}
                        className={`border-b last:border-0 ${i % 2 === 0 ? "" : "bg-muted/20"} ${
                          lib.dbot_pick?.includes("★★★") ? "bg-primary/5" : ""
                        }`}
                      >
                        <td className="p-3 font-medium">{lib.name}</td>
                        <td className="p-3 text-center">{formatStars(lib.stars)}</td>
                        <td className="p-3 text-center text-xs">{lib.bundle}</td>
                        <td className="p-3 text-center">
                          <BoolIcon value={lib.ts} />
                        </td>
                        <td className="p-3 text-center">
                          <BoolIcon value={lib.ssr === "RSC" ? "rsc" : lib.ssr === true ? "yes" : lib.ssr} />
                        </td>
                        <td className="p-3 text-center">
                          <BoolIcon value={lib.dark} />
                        </td>
                        <td className="p-3 text-center">
                          <BoolIcon value={lib.tree_shake} />
                        </td>
                        <td className="p-3 text-center text-xs">{lib.license}</td>
                        <td className="p-3 text-xs">
                          {lib.dbot_pick ? (
                            <span className={lib.dbot_pick.includes("★★★") ? "text-primary font-medium" : "text-muted-foreground"}>
                              {lib.dbot_pick}
                            </span>
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <Separator className="mt-8" />
        </section>
      ))}
    </div>
  );
}

function BoolIcon({ value }: { value: boolean | string | undefined }) {
  if (value === "RSC") {
    return <Badge variant="outline" className="text-xs text-green-500 mx-auto">RSC</Badge>;
  }
  if (value === true || value === "yes") {
    return <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" />;
  }
  if (value === false || value === "no") {
    return <XCircle className="h-4 w-4 text-red-400/60 mx-auto" />;
  }
  return <MinusCircle className="h-4 w-4 text-muted-foreground/40 mx-auto" />;
}
