"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import {
  Palette,
  Type,
  MousePointer,
  Tag,
  LayoutDashboard,
  Settings,
  BarChart3,
  AlertCircle,
  Compass,
  Sparkles,
} from "lucide-react";

const sections = [
  { id: "colors", label: "Colors & Theme", icon: Palette },
  { id: "typography", label: "Typography", icon: Type },
  { id: "buttons", label: "Buttons", icon: MousePointer },
  { id: "badges", label: "Badges & Tags", icon: Tag },
  { id: "cards", label: "Cards", icon: LayoutDashboard },
  { id: "forms", label: "Form Elements", icon: Settings },
  { id: "data", label: "Data Display", icon: BarChart3 },
  { id: "feedback", label: "Feedback", icon: AlertCircle },
  { id: "navigation", label: "Navigation", icon: Compass },
  { id: "motion", label: "Motion", icon: Sparkles },
  { id: "icons", label: "Icons", icon: Type },
];

export function SidebarNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("colors");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
      setMobileOpen(false); // close drawer on mobile after click
    }
  }, []);

  const navContent = (
    <>
      <div className="p-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg"
          onClick={() => setMobileOpen(false)}
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">DB</span>
          </div>
          <span>Design Hub</span>
        </Link>
      </div>

      <Separator />

      <nav className="p-2">
        <div className="space-y-1">
          <NavLink href="/" active={pathname === "/"} onClick={() => setMobileOpen(false)}>
            Overview
          </NavLink>
          <NavLink href="/catalog" active={pathname === "/catalog"} onClick={() => setMobileOpen(false)}>
            Component Catalog
          </NavLink>
          <NavLink href="/compare" active={pathname === "/compare"} onClick={() => setMobileOpen(false)}>
            Compare
          </NavLink>
        </div>
      </nav>

      <Separator className="my-2" />

      <div className="px-3 py-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
          Sections
        </p>
      </div>

      <nav className="p-2 flex-1">
        <div className="space-y-0.5">
          {sections.map(({ id, label, icon: IconComponent }) => (
            <a
              key={id}
              id={`nav-${id}`}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
                activeSection === id
                  ? "bg-muted text-foreground font-medium"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <IconComponent className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );

  return (
    <>
      {/* Mobile hamburger button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-3 left-3 z-50 bg-background/80 backdrop-blur border border-border/40 rounded-full"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar — desktop: sticky, mobile: slide-in drawer */}
      <aside
        className={cn(
          "border-r bg-card h-screen overflow-y-auto flex flex-col z-50 transition-transform duration-300 ease-in-out",
          // Desktop: always visible, sticky
          "lg:sticky lg:top-0 lg:w-64 lg:translate-x-0 lg:relative lg:z-auto",
          // Mobile: fixed, off-screen by default, slide in
          "fixed top-0 left-0 w-72",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {navContent}
      </aside>
    </>
  );
}

function NavLink({
  href,
  active,
  children,
  onClick,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
        active
          ? "bg-muted text-foreground font-medium"
          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
      )}
    >
      {children}
    </Link>
  );
}
