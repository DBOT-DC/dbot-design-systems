"use client";

import { useState } from "react";
import { SidebarNav } from "@/components/showcase/sidebar-nav";
import { CodePreview } from "@/components/showcase/code-preview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Copy,
  Check,
  Code,
  Eye,
  Plus,
  Minus,
  Trash2,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Menu,
  Home,
  ChevronRight,
  ChevronLeft,
  MoreHorizontal,
  Loader2,
  AlertCircle,
  Info,
  CheckCircle2,
  XCircle,
  Bell,
  User,
  Settings,
  Mail,
  Lock,
  Calendar,
  Star,
  Heart,
  Flame,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Layers,
  Box,
  Zap,
  Coffee,
  Music,
  Camera,
  MessageSquare,
  Briefcase,
  Gift,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  Wind,
} from "lucide-react";

const barData = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 300 },
  { name: "Wed", value: 550 },
  { name: "Thu", value: 280 },
  { name: "Fri", value: 650 },
];

const lineData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 450 },
  { name: "May", value: 600 },
  { name: "Jun", value: 550 },
];

const areaData = [
  { name: "Week 1", value: 1200 },
  { name: "Week 2", value: 1900 },
  { name: "Week 3", value: 1500 },
  { name: "Week 4", value: 2400 },
  { name: "Week 5", value: 2100 },
  { name: "Week 6", value: 2800 },
];

const lucideIcons = [
  { name: "Home", icon: Home },
  { name: "User", icon: User },
  { name: "Settings", icon: Settings },
  { name: "Mail", icon: Mail },
  { name: "Lock", icon: Lock },
  { name: "Calendar", icon: Calendar },
  { name: "Star", icon: Star },
  { name: "Heart", icon: Heart },
  { name: "Flame", icon: Flame },
  { name: "TrendingUp", icon: TrendingUp },
  { name: "Users", icon: Users },
  { name: "DollarSign", icon: DollarSign },
  { name: "Activity", icon: Activity },
  { name: "Layers", icon: Layers },
  { name: "Box", icon: Box },
  { name: "Zap", icon: Zap },
  { name: "Coffee", icon: Coffee },
  { name: "Music", icon: Music },
  { name: "Camera", icon: Camera },
  { name: "MessageSquare", icon: MessageSquare },
  { name: "Briefcase", icon: Briefcase },
  { name: "Gift", icon: Gift },
  { name: "Sun", icon: Sun },
  { name: "Moon", icon: Moon },
  { name: "Cloud", icon: Cloud },
  { name: "CloudRain", icon: CloudRain },
  { name: "Wind", icon: Wind },
  { name: "Plus", icon: Plus },
  { name: "Minus", icon: Minus },
  { name: "Trash2", icon: Trash2 },
];

export default function ShowcasePage() {
  const [sliderValue, setSliderValue] = useState(50);
  const [switchOn, setSwitchOn] = useState(false);
  const [checkboxState, setCheckboxState] = useState({ alpha: true, beta: false, gamma: true });
  const [radioValue, setRadioValue] = useState("option1");
  const [tabsValue, setTabsValue] = useState("overview");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <SidebarNav />

      <main className="flex-1 max-w-5xl py-6 pt-16 lg:pt-8 px-4 sm:px-6 lg:px-8 lg:ml-0">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Component Reference</h1>
          <p className="text-muted-foreground mt-2">
            A comprehensive showcase of all UI components with live previews and copyable code.
          </p>
        </div>

        {/* Colors & Theme */}
        <section id="colors" className="mb-12 scroll-mt-8">
          <h2 className="text-xl font-semibold mb-4">Colors & Theme</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <CodePreview
              title="DBOT Brand Colors"
              description="Primary brand color palette"
              code={`<div className="flex gap-2">
  <div className="h-12 w-12 rounded-lg bg-violet-600" />
  <div className="h-12 w-12 rounded-lg bg-blue-600" />
  <div className="h-12 w-12 rounded-lg bg-indigo-600" />
  <div className="h-12 w-12 rounded-lg bg-purple-600" />
  <div className="h-12 w-12 rounded-lg bg-cyan-600" />
</div>
<div className="flex gap-2 mt-2">
  <div className="h-12 w-12 rounded-lg bg-violet-400" />
  <div className="h-12 w-12 rounded-lg bg-blue-400" />
  <div className="h-12 w-12 rounded-lg bg-indigo-400" />
  <div className="h-12 w-12 rounded-lg bg-purple-400" />
  <div className="h-12 w-12 rounded-lg bg-cyan-400" />
</div>`}
            >
              <div className="flex gap-2">
                <div className="h-12 w-12 rounded-lg bg-violet-600" />
                <div className="h-12 w-12 rounded-lg bg-blue-600" />
                <div className="h-12 w-12 rounded-lg bg-indigo-600" />
                <div className="h-12 w-12 rounded-lg bg-purple-600" />
                <div className="h-12 w-12 rounded-lg bg-cyan-600" />
              </div>
            </CodePreview>

            <CodePreview
              title="Tailwind Color Scale"
              description="Blue shade scale from 50-900"
              code={`<div className="flex gap-1">
  <div className="h-8 w-8 rounded bg-blue-50" />
  <div className="h-8 w-8 rounded bg-blue-100" />
  <div className="h-8 w-8 rounded bg-blue-200" />
  <div className="h-8 w-8 rounded bg-blue-300" />
  <div className="h-8 w-8 rounded bg-blue-400" />
  <div className="h-8 w-8 rounded bg-blue-500" />
  <div className="h-8 w-8 rounded bg-blue-600" />
  <div className="h-8 w-8 rounded bg-blue-700" />
  <div className="h-8 w-8 rounded bg-blue-800" />
  <div className="h-8 w-8 rounded bg-blue-900" />
</div>`}
            >
              <div className="flex gap-1">
                <div className="h-8 w-8 rounded bg-blue-50" />
                <div className="h-8 w-8 rounded bg-blue-100" />
                <div className="h-8 w-8 rounded bg-blue-200" />
                <div className="h-8 w-8 rounded bg-blue-300" />
                <div className="h-8 w-8 rounded bg-blue-400" />
                <div className="h-8 w-8 rounded bg-blue-500" />
                <div className="h-8 w-8 rounded bg-blue-600" />
                <div className="h-8 w-8 rounded bg-blue-700" />
                <div className="h-8 w-8 rounded bg-blue-800" />
                <div className="h-8 w-8 rounded bg-blue-900" />
              </div>
            </CodePreview>

            <CodePreview
              title="Gradient Presets"
              description="Background gradient examples"
              code={`<div className="flex gap-4 flex-wrap">
  <div className="h-16 w-32 rounded bg-gradient-to-r from-violet-600 to-blue-600" />
  <div className="h-16 w-32 rounded bg-gradient-to-r from-pink-600 to-purple-600" />
  <div className="h-16 w-32 rounded bg-gradient-to-r from-cyan-500 to-blue-500" />
  <div className="h-16 w-32 rounded bg-gradient-to-br from-amber-500 to-orange-600" />
</div>`}
            >
              <div className="flex gap-4 flex-wrap">
                <div className="h-16 w-32 rounded bg-gradient-to-r from-violet-600 to-blue-600" />
                <div className="h-16 w-32 rounded bg-gradient-to-r from-pink-600 to-purple-600" />
                <div className="h-16 w-32 rounded bg-gradient-to-r from-cyan-500 to-blue-500" />
                <div className="h-16 w-32 rounded bg-gradient-to-br from-amber-500 to-orange-600" />
              </div>
            </CodePreview>

            <CodePreview
              title="Status Colors"
              description="Semantic status indicators"
              code={`<div className="flex gap-3">
  <div className="flex items-center gap-2">
    <div className="h-3 w-3 rounded-full bg-green-500" />
    <span className="text-sm">Success</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="h-3 w-3 rounded-full bg-yellow-500" />
    <span className="text-sm">Warning</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="h-3 w-3 rounded-full bg-red-500" />
    <span className="text-sm">Error</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="h-3 w-3 rounded-full bg-blue-500" />
    <span className="text-sm">Info</span>
  </div>
</div>`}
            >
              <div className="flex gap-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-sm">Success</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="text-sm">Warning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="text-sm">Error</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                  <span className="text-sm">Info</span>
                </div>
              </div>
            </CodePreview>

            <CodePreview
              title="Dark Mode Colors"
              description="Light and dark background pairs"
              code={`<div className="grid grid-cols-2 gap-4">
  <div className="p-4 rounded-lg bg-background border">
    <p className="text-sm">Background</p>
  </div>
  <div className="p-4 rounded-lg bg-card border">
    <p className="text-sm">Card</p>
  </div>
  <div className="p-4 rounded-lg bg-muted border">
    <p className="text-sm">Muted</p>
  </div>
  <div className="p-4 rounded-lg bg-popover border">
    <p className="text-sm">Popover</p>
  </div>
</div>`}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-background border">
                  <p className="text-sm">Background</p>
                </div>
                <div className="p-4 rounded-lg bg-card border">
                  <p className="text-sm">Card</p>
                </div>
                <div className="p-4 rounded-lg bg-muted border">
                  <p className="text-sm">Muted</p>
                </div>
                <div className="p-4 rounded-lg bg-popover border">
                  <p className="text-sm">Popover</p>
                </div>
              </div>
            </CodePreview>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Typography */}
        <section id="typography" className="mb-12 scroll-mt-8">
          <h2 className="text-xl font-semibold mb-4">Typography</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <CodePreview
              title="Heading Scale"
              description="h1 through h6 headings"
              code={`<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Heading 1</h1>
<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">Heading 2</h2>
<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Heading 3</h3>
<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Heading 4</h4>
<h5 className="scroll-m-20 text-lg font-semibold tracking-tight">Heading 5</h5>
<h6 className="scroll-m-20 text-base font-semibold tracking-tight">Heading 6</h6>`}
            >
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight">Heading 1</h1>
                <h2 className="text-3xl font-semibold tracking-tight">Heading 2</h2>
                <h3 className="text-2xl font-semibold tracking-tight">Heading 3</h3>
                <h4 className="text-xl font-semibold tracking-tight">Heading 4</h4>
                <h5 className="text-lg font-semibold tracking-tight">Heading 5</h5>
                <h6 className="text-base font-semibold tracking-tight">Heading 6</h6>
              </div>
            </CodePreview>

            <CodePreview
              title="Body Text Variants"
              description="Different text styling classes"
              code={`<p className="text-base">Body text - Regular paragraph</p>
<p className="text-sm text-muted-foreground">Small muted text</p>
<p className="text-xs">Extra small text</p>
<p className="font-mono text-sm">Monospace text</p>`}
            >
              <div className="space-y-2">
                <p className="text-base">Body text - Regular paragraph</p>
                <p className="text-sm text-muted-foreground">Small muted text</p>
                <p className="text-xs">Extra small text</p>
                <p className="font-mono text-sm">Monospace text</p>
              </div>
            </CodePreview>

            <CodePreview
              title="Text Gradients"
              description="Gradient text using bg-clip-text"
              code={`<p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600">
  Gradient Text
</p>
<p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
  Another Gradient
</p>`}
            >
              <div className="space-y-2">
                <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600">
                  Gradient Text
                </p>
                <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                  Another Gradient
                </p>
              </div>
            </CodePreview>

            <CodePreview
              title="Text with Icons"
              description="Inline icon and text combinations"
              code={`<div className="flex items-center gap-2">
  <Mail className="h-4 w-4 text-muted-foreground" />
  <span className="text-sm">contact@example.com</span>
</div>
<div className="flex items-center gap-2">
  <Phone className="h-4 w-4 text-muted-foreground" />
  <span className="text-sm">+1 (555) 123-4567</span>
</div>
<div className="flex items-center gap-2">
  <MapPin className="h-4 w-4 text-muted-foreground" />
  <span className="text-sm">San Francisco, CA</span>
</div>`}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">contact@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </CodePreview>

            <CodePreview
              title="Truncation Patterns"
              description="Text overflow handling"
              code={`<p className="truncate max-w-xs text-sm">
  This is a very long text that will be truncated with ellipsis when it exceeds the max width.
</p>
<p className="line-clamp-2 text-sm">
  This is a longer text that will be truncated after two lines. It uses the line-clamp-2 utility to limit text to exactly two lines with proper ellipsis at the end.
</p>`}
            >
              <div className="space-y-2">
                <p className="truncate max-w-xs text-sm">
                  This is a very long text that will be truncated with ellipsis when it exceeds the max width.
                </p>
                <p className="line-clamp-2 text-sm">
                  This is a longer text that will be truncated after two lines. It uses the line-clamp-2 utility to limit text to exactly two lines with proper ellipsis at the end.
                </p>
              </div>
            </CodePreview>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Buttons */}
        <section id="buttons" className="mb-12 scroll-mt-8">
          <h2 className="text-xl font-semibold mb-4">Buttons</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <CodePreview
              title="Button Variants"
              description="All shadcn button variants"
              code={`<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
            >
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </CodePreview>

            <CodePreview
              title="Button Sizes"
              description="sm, default, lg, and icon sizes"
              code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <Plus className="h-4 w-4" />
</Button>`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CodePreview>

            <CodePreview
              title="Buttons with Icons"
              description="Icon positioning variants"
              code={`<Button>
  <Plus className="h-4 w-4 mr-2" />
  Left Icon
</Button>
<Button>
  Right Icon
  <ArrowUpRight className="h-4 w-4 ml-2" />
</Button>
<Button variant="outline">
  <Search className="h-4 w-4 mr-2" />
  Search
</Button>
<Button variant="secondary">
  <Settings className="h-4 w-4 mr-2" />
  Settings
</Button>`}
            >
              <div className="flex flex-wrap gap-2">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Left Icon
                </Button>
                <Button>
                  Right Icon
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button variant="secondary">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </CodePreview>

            <CodePreview
              title="Button Groups"
              description="Grouped button layouts"
              code={`<div className="flex gap-1 p-1 bg-muted rounded-lg">
  <Button variant="secondary">Day</Button>
  <Button>Week</Button>
  <Button variant="secondary">Month</Button>
  <Button variant="secondary">Year</Button>
</div>
<div className="flex gap-2">
  <Button>-1</Button>
  <Button variant="outline">Reset</Button>
  <Button>+1</Button>
</div>`}
            >
              <div className="space-y-3">
                <div className="flex gap-1 p-1 bg-muted rounded-lg">
                  <Button variant="secondary">Day</Button>
                  <Button>Week</Button>
                  <Button variant="secondary">Month</Button>
                  <Button variant="secondary">Year</Button>
                </div>
                <div className="flex gap-2">
                  <Button>-1</Button>
                  <Button variant="outline">Reset</Button>
                  <Button>+1</Button>
                </div>
              </div>
            </CodePreview>

            <CodePreview
              title="Loading State"
              description="Button with loading spinner"
              code={`<Button disabled>
  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
  Loading...
</Button>
<Button variant="outline" disabled>
  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
  Processing
</Button>`}
            >
              <div className="flex flex-wrap gap-2">
                <Button disabled>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Loading...
                </Button>
                <Button variant="outline" disabled>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing
                </Button>
              </div>
            </CodePreview>

            <CodePreview
              title="Full Width Button"
              description="w-full button variant"
              code={`<Button className="w-full">
  <Mail className="h-4 w-4 mr-2" />
  Send Message
</Button>`}
            >
              <Button className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </CodePreview>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Badges & Tags */}
        <section id="badges" className="mb-12 scroll-mt-8">
          <h2 className="text-xl font-semibold mb-4">Badges & Tags</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <CodePreview
              title="Badge Variants"
              description="All badge style variants"
              code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
            >
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CodePreview>

            <CodePreview
              title="Badges with Dots"
              description="Status indicators with dot prefix"
              code={`<Badge>
  <span className="mr-1.5 h-2 w-2 rounded-full bg-green-500" />
  Active
</Badge>
<Badge variant="secondary">
  <span className="mr-1.5 h-2 w-2 rounded-full bg-yellow-500" />
  Pending
</Badge>
<Badge variant="destructive">
  <span className="mr-1.5 h-2 w-2 rounded-full bg-red-500" />
  Offline
</Badge>`}
            >
              <div className="flex flex-wrap gap-2">
                <Badge>
                  <span className="mr-1.5 h-2 w-2 rounded-full bg-green-500" />
                  Active
                </Badge>
                <Badge variant="secondary">
                  <span className="mr-1.5 h-2 w-2 rounded-full bg-yellow-500" />
                  Pending
                </Badge>
                <Badge variant="destructive">
                  <span className="mr-1.5 h-2 w-2 rounded-full bg-red-500" />
                  Offline
                </Badge>
              </div>
            </CodePreview>

            <CodePreview
              title="Status Badges"
              description="Pre-built status badges"
              code={`<div className="flex gap-2">
  <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
    Success
  </Badge>
  <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
    Warning
  </Badge>
  <Badge className="bg-red-500/10 text-red-500 border-red-500/20">
    Error
  </Badge>
  <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">
    Info
  </Badge>
</div>`}
            >
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  Success
                </Badge>
                <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                  Warning
                </Badge>
                <Badge className="bg-red-500/10 text-red-500 border-red-500/20">
                  Error
                </Badge>
                <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                  Info
                </Badge>
              </div>
            </CodePreview>

            <CodePreview
              title="Removable Badges"
              description="Badges with dismiss functionality"
              code={`<div className="flex flex-wrap gap-2">
  <Badge>
    Tag One
    <button className="ml-1 hover:text-destructive">
      <XCircle className="h-3 w-3" />
    </button>
  </Badge>
  <Badge variant="secondary">
    Tag Two
    <button className="ml-1 hover:text-destructive">
      <XCircle className="h-3 w-3" />
    </button>
  </Badge>
  <Badge variant="outline">
    Tag Three
    <button className="ml-1 hover:text-destructive">
      <XCircle className="h-3 w-3" />
    </button>
  </Badge>
</div>`}
            >
              <div className="flex flex-wrap gap-2">
                <Badge>
                  Tag One
                  <button className="ml-1 hover:text-destructive">
                    <XCircle className="h-3 w-3" />
                  </button>
                </Badge>
                <Badge variant="secondary">
                  Tag Two
                  <button className="ml-1 hover:text-destructive">
                    <XCircle className="h-3 w-3" />
                  </button>
                </Badge>
                <Badge variant="outline">
                  Tag Three
                  <button className="ml-1 hover:text-destructive">
                    <XCircle className="h-3 w-3" />
                  </button>
                </Badge>
              </div>
            </CodePreview>

            <CodePreview
              title="Badge Sizes"
              description="Small and default badge sizes"
              code={`<Badge>Default</Badge>
<Badge className="text-xs">Small</Badge>`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Default</Badge>
                <Badge className="text-xs">Small</Badge>
              </div>
            </CodePreview>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Cards */}
        <section id="cards" className="mb-12 scroll-mt-8">
          <h2 className="text-xl font-semibold mb-4">Cards</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <CodePreview
              title="Basic Card"
              description="Simple card with title and description"
              code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content area with additional details.</p>
  </CardContent>
</Card>`}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description text goes here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card content area with additional details.</p>
                </CardContent>
              </Card>
            </CodePreview>

            <CodePreview
              title="Metric/KPI Card"
              description="Key metric with trend indicator"
              code={`<Card>
  <CardHeader className="pb-2">
    <CardDescription>Total Revenue</CardDescription>
    <CardTitle className="text-3xl">$45,231</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="flex items-center gap-1 text-green-500 text-sm">
      <ArrowUpRight className="h-4 w-4" />
      <span>+20.5% from last month</span>
    </div>
  </CardContent>
</Card>`}
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Total Revenue</CardDescription>
                  <CardTitle className="text-3xl">$45,231</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 text-green-500 text-sm">
                    <ArrowUpRight className="h-4 w-4" />
                    <span>+20.5% from last month</span>
                  </div>
                </CardContent>
              </Card>
            </CodePreview>

            <CodePreview
              title="Profile Card"
              description="User profile with avatar and stats"
              code={`<Card>
  <CardHeader className="text-center">
    <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center">
      <User className="h-8 w-8" />
    </div>
    <CardTitle>Jane Cooper</CardTitle>
    <CardDescription>Product Designer</CardDescription>
  </CardHeader>
  <CardContent className="text-center">
    <div className="flex justify-center gap-6 text-sm">
      <div><span className="font-semibold">2.5k</span> Followers</div>
      <div><span className="font-semibold">180</span> Following</div>
    </div>
  </CardContent>
</Card>`}
            >
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center">
                    <User className="h-8 w-8" />
                  </div>
                  <CardTitle>Jane Cooper</CardTitle>
                  <CardDescription>Product Designer</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-center gap-6 text-sm">
                    <div><span className="font-semibold">2.5k</span> Followers</div>
                    <div><span className="font-semibold">180</span> Following</div>
                  </div>
                </CardContent>
              </Card>
            </CodePreview>

            <CodePreview
              title="Feature Card"
              description="Icon, title, and description layout"
              code={`<Card>
  <CardHeader>
    <div className="h-10 w-10 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-3">
      <Zap className="h-5 w-5 text-violet-600" />
    </div>
    <CardTitle>Lightning Fast</CardTitle>
    <CardDescription>Built for speed with optimized performance.</CardDescription>
  </CardHeader>
</Card>`}
            >
              <Card>
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-3">
                    <Zap className="h-5 w-5 text-violet-600" />
                  </div>
                  <CardTitle>Lightning Fast</CardTitle>
                  <CardDescription>Built for speed with optimized performance.</CardDescription>
                </CardHeader>
              </Card>
            </CodePreview>

            <CodePreview
              title="Pricing Card"
              description="Plan details with feature list and CTA"
              code={`<Card>
  <CardHeader>
    <CardTitle>Pro Plan</CardTitle>
    <CardDescription>For growing teams</CardDescription>
    <div className="mt-2">
      <span className="text-3xl font-bold">$29</span>
      <span className="text-muted-foreground">/month</span>
    </div>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2 text-sm">
      <li className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-500" /> Unlimited projects
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-500" /> 10GB storage
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-500" /> Priority support
      </li>
    </ul>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Get Started</Button>
  </CardFooter>
</Card>`}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Pro Plan</CardTitle>
                  <CardDescription>For growing teams</CardDescription>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">$29</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> Unlimited projects
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> 10GB storage
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> Priority support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
            </CodePreview>

            <CodePreview
              title="Testimonial Card"
              description="Quote with avatar and name"
              code={`<Card>
  <CardContent className="pt-6">
    <p className="text-muted-foreground italic mb-4">
      "This product has completely transformed how we work. The interface is intuitive and the performance is outstanding."
    </p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
        <User className="h-5 w-5" />
      </div>
      <div>
        <p className="font-semibold text-sm">Sarah Chen</p>
        <p className="text-xs text-muted-foreground">CEO at TechCorp</p>
      </div>
    </div>
  </CardContent>
</Card>`}
            >
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic mb-4">
                    "This product has completely transformed how we work. The interface is intuitive and the performance is outstanding."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Sarah Chen</p>
                      <p className="text-xs text-muted-foreground">CEO at TechCorp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CodePreview>

            <CodePreview
              title="Card with Image Header"
              description="Image at the top of the card"
              code={`<Card className="overflow-hidden">
  <div className="h-32 bg-gradient-to-r from-violet-600 to-blue-600" />
  <CardHeader>
    <CardTitle>Featured Article</CardTitle>
    <CardDescription>Learn about our latest innovations</CardDescription>
  </CardHeader>
</Card>`}
            >
              <Card className="overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-violet-600 to-blue-600" />
                <CardHeader>
                  <CardTitle>Featured Article</CardTitle>
                  <CardDescription>Learn about our latest innovations</CardDescription>
                </CardHeader>
              </Card>
            </CodePreview>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Form Elements */}
        <section id="forms" className="mb-12 scroll-mt-8">
          <h2 className="text-xl font-semibold mb-4">Form Elements</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <CodePreview
              title="Text Inputs"
              description="Default, disabled, and error states"
              code={`<Input placeholder="Default input" />
<Input disabled placeholder="Disabled input" />
<Input className="border-red-500" placeholder="Error state" />
<p className="text-xs text-red-500 mt-1">Error message</p>`}
            >
              <div className="space-y-2">
                <Input placeholder="Default input" />
                <Input disabled placeholder="Disabled input" />
                <Input className="border-red-500" placeholder="Error state" />
                <p className="text-xs text-red-500">Error message</p>
              </div>
            </CodePreview>

            <CodePreview
              title="Input with Icons"
              description="Icon prefix and suffix variants"
              code={`<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input className="pl-9" placeholder="Search..." />
</div>
<div className="relative">
  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input className="pl-9" placeholder="Email address" />
</div>
<div className="relative">
  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input className="pl-9" type="password" placeholder="Password" />
</div>`}
            >
              <div className="space-y-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-9" placeholder="Search..." />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-9" placeholder="Email address" />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-9" type="password" placeholder="Password" />
                </div>
              </div>
            </CodePreview>

            <CodePreview
              title="Textarea"
              description="Multi-line text input"
              code={`<Textarea placeholder="Enter your message here..." />
<Textarea className="h-24" placeholder="Taller textarea..." />`}
            >
              <div className="space-y-2">
                <Textarea placeholder="Enter your message here..." />
                <Textarea className="h-24" placeholder="Taller textarea..." />
              </div>
            </CodePreview>

            <CodePreview
              title="Checkbox Group"
              description="Multiple selection checkboxes"
              code={`<div className="space-y-2">
  <label className="flex items-center gap-2">
    <Input type="checkbox" className="w-4 h-4" defaultChecked /> 
    <span className="text-sm">Alpha feature</span>
  </label>
  <label className="flex items-center gap-2">
    <Input type="checkbox" className="w-4 h-4" /> 
    <span className="text-sm">Beta feature</span>
  </label>
  <label className="flex items-center gap-2">
    <Input type="checkbox" className="w-4 h-4" defaultChecked /> 
    <span className="text-sm">Gamma feature</span>
  </label>
</div>`}
            >
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Input type="checkbox" className="w-4 h-4" defaultChecked />
                  <span className="text-sm">Alpha feature</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">Beta feature</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Input type="checkbox" className="w-4 h-4" defaultChecked />
                  <span className="text-sm">Gamma feature</span>
                </label>
              </div>
            </CodePreview>

            <CodePreview
              title="Radio Group"
              description="Single selection radios"
              code={`<div className="space-y-2">
  <label className="flex items-center gap-2">
    <Input type="radio" name="option" className="w-4 h-4" defaultChecked /> 
    <span className="text-sm">Option 1</span>
  </label>
  <label className="flex items-center gap-2">
    <Input type="radio" name="option" className="w-4 h-4" /> 
    <span className="text-sm">Option 2</span>
  </label>
  <label className="flex items-center gap-2">
    <Input type="radio" name="option" className="w-4 h-4" /> 
    <span className="text-sm">Option 3</span>
  </label>
</div>`}
            >
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Input type="radio" name="option" className="w-4 h-4" defaultChecked />
                  <span className="text-sm">Option 1</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Input type="radio" name="option" className="w-4 h-4" />
                  <span className="text-sm">Option 2</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Input type="radio" name="option" className="w-4 h-4" />
                  <span className="text-sm">Option 3</span>
                </label>
              </div>
            </CodePreview>

            <CodePreview
              title="Switch/Toggle"
              description="Toggle switch component"
              code={`<div className="flex items-center justify-between">
  <span className="text-sm">Enable notifications</span>
  <button className="w-10 h-6 rounded-full bg-muted relative transition-colors data-[state=checked]:bg-green-500">
    <span className="block w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform data-[state=checked]:translate-x-4" />
  </button>
</div>
<div className="flex items-center justify-between">
  <span className="text-sm">Dark mode</span>
  <button className="w-10 h-6 rounded-full bg-green-500 relative transition-colors">
    <span className="block w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform translate-x-4" />
  </button>
</div>`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Enable notifications</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked="true"
                    className="w-10 h-6 rounded-full bg-muted relative transition-colors data-[state=checked]:bg-green-500"
                  >
                    <span className="block w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform data-[state=checked]:translate-x-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dark mode</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked="true"
                    className="w-10 h-6 rounded-full bg-green-500 relative transition-colors"
                  >
                    <span className="block w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform translate-x-4" />
                  </button>
                </div>
              </div>
            </CodePreview>

            <CodePreview
              title="Slider/Range"
              description="Range input with value display"
              code={`<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Volume</span>
    <span className="text-muted-foreground">{sliderValue}%</span>
  </div>
  <input
    type="range"
    min="0"
    max="100"
    value={sliderValue}
    onChange={(e) => setSliderValue(Number(e.target.value))}
    className="w-full h-2 rounded-full bg-muted appearance-none cursor-pointer"
  />
</div>`}
            >
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Volume</span>
                  <span className="text-muted-foreground">{sliderValue}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  className="w-full h-2 rounded-full bg-muted appearance-none cursor-pointer"
                />
              </div>
            </CodePreview>

            <CodePreview
              title="Search Input"
              description="Search box with icon"
              code={`<div className="relative max-w-sm">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input className="pl-9 pr-4" placeholder="Search components..." />
</div>`}
            >
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input className="pl-9 pr-4" placeholder="Search components..." />
              </div>
            </CodePreview>

            <CodePreview
              title="Form Layouts"
              description="Various form layout patterns"
              code={`<div className="space-y-4">
  {/* Stacked */}
  <div className="space-y-2">
    <label className="text-sm font-medium">Name</label>
    <Input placeholder="Your name" />
  </div>
  <div className="space-y-2">
    <label className="text-sm font-medium">Email</label>
    <Input placeholder="your@email.com" />
  </div>
  <Button>Submit</Button>
</div>`}
            >
              <div className="space-y-4 max-w-sm">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="your@email.com" />
                </div>
                <Button>Submit</Button>
              </div>
            </CodePreview>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Data Display */}
        <section id="data" className="mb-12 scroll-mt-8">
          <h2 className="text-xl font-semibold mb-4">Data Display</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <CodePreview
              title="Stat/KPI Cards"
              description="Three key metrics in a row"
              code={`<div className="grid grid-cols-3 gap-4">
  <Card>
    <CardContent className="pt-4">
      <p className="text-sm text-muted-foreground">Revenue</p>
      <p className="text-2xl font-bold">$45,231</p>
      <p className="text-xs text-green-500">+20.5%</p>
    </CardContent>
  </Card>
  <Card>
    <CardContent className="pt-4">
      <p className="text-sm text-muted-foreground">Users</p>
      <p className="text-2xl font-bold">2,350</p>
      <p className="text-xs text-green-500">+180</p>
    </CardContent>
  </Card>
  <Card>
    <CardContent className="pt-4">
      <p className="text-sm text-muted-foreground">Orders</p>
      <p className="text-2xl font-bold">1,284</p>
      <p className="text-xs text-red-500">-5.2%</p>
    </CardContent>
  </Card>
</div>`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground">Revenue</p>
                    <p className="text-2xl font-bold">$45,231</p>
                    <p className="text-xs text-green-500">+20.5%</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground">Users</p>
                    <p className="text-2xl font-bold">2,350</p>
                    <p className="text-xs text-green-500">+180</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground">Orders</p>
                    <p className="text-2xl font-bold">1,284</p>
                    <p className="text-xs text-red-500">-5.2%</p>
                  </CardContent>
                </Card>
              </div>
            </CodePreview>

            <CodePreview
              title="Progress Bars"
              description="Various progress bar styles"
              code={`<div className="space-y-4">
  <div className="space-y-1">
    <div className="flex justify-between text-sm">
      <span>Progress</span>
      <span>75%</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <div className="h-full bg-violet-600 rounded-full" style={{ width: "75%" }} />
    </div>
  </div>
  <div className="space-y-1">
    <div className="flex justify-between text-sm">
      <span>Storage</span>
      <span>45%</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <div className="h-full bg-blue-600 rounded-full" style={{ width: "45%" }} />
    </div>
  </div>
</div>`}
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-violet-600 rounded-full" style={{ width: "75%" }} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Storage</span>
                    <span>45%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: "45%" }} />
                  </div>
                </div>
              </div>
            </CodePreview>

            <CodePreview
              title="Data Table"
              description="Simple table with headers and rows"
              code={`<div className="border rounded-lg">
  <table className="w-full text-sm">
    <thead>
      <tr className="border-b bg-muted/50">
        <th className="px-4 py-3 text-left font-medium">Name</th>
        <th className="px-4 py-3 text-left font-medium">Status</th>
        <th className="px-4 py-3 text-right font-medium">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b">
        <td className="px-4 py-3">Alpha Project</td>
        <td className="px-4 py-3"><Badge variant="secondary">Active</Badge></td>
        <td className="px-4 py-3 text-right">$12,400</td>
      </tr>
      <tr className="border-b">
        <td className="px-4 py-3">Beta Initiative</td>
        <td className="px-4 py-3"><Badge>Pending</Badge></td>
        <td className="px-4 py-3 text-right">$8,200</td>
      </tr>
    </tbody>
  </table>
</div>`}
            >
              <div className="border rounded-lg overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-medium">Name</th>
                      <th className="px-4 py-3 text-left font-medium">Status</th>
                      <th className="px-4 py-3 text-right font-medium">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3">Alpha Project</td>
                      <td className="px-4 py-3"><Badge variant="secondary">Active</Badge></td>
                      <td className="px-4 py-3 text-right">$12,400</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">Beta Initiative</td>
                      <td className="px-4 py-3"><Badge>Pending</Badge></td>
                      <td className="px-4 py-3 text-right">$8,200</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">Gamma Launch</td>
                      <td className="px-4 py-3"><Badge variant="destructive">Delayed</Badge></td>
                      <td className="px-4 py-3 text-right">$15,800</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Delta System</td>
                      <td className="px-4 py-3"><Badge variant="outline">Planning</Badge></td>
                      <td className="px-4 py-3 text-right">$6,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CodePreview>

            <CodePreview
              title="Bar Chart"
              description="Weekly activity bar chart"
              code={`<BarChart data={barData} width={300} height={150}>
  <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
  <YAxis tick={{ fontSize: 12 }} />
</BarChart>`}
            >
              <BarChart data={barData} width={300} height={150}>
                <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
              </BarChart>
            </CodePreview>

            <CodePreview
              title="Line Chart"
              description="Monthly trend line chart"
              code={`<LineChart data={lineData} width={300} height={150}>
  <Line 
    type="monotone" 
    dataKey="value" 
    stroke="#8b5cf6" 
    strokeWidth={2} 
    dot={{ fill: "#8b5cf6", strokeWidth: 2 }} 
  />
  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
  <YAxis tick={{ fontSize: 12 }} />
</LineChart>`}
            >
              <LineChart data={lineData} width={300} height={150}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  dot={{ fill: "#8b5cf6", strokeWidth: 2 }}
                />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
              </LineChart>
            </CodePreview>

            <CodePreview
              title="Area Chart"
              description="Weekly growth area chart"
              code={`<AreaChart data={areaData} width={300} height={150}>
  <defs>
    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
    </linearGradient>
  </defs>
  <Area 
    type="monotone" 
    dataKey="value" 
    stroke="#8b5cf6" 
    fill="url(#colorValue)" 
    strokeWidth={2} 
  />
  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
  <YAxis tick={{ fontSize: 12 }} />
</AreaChart>`}
            >
              <AreaChart data={areaData} width={300} height={150}>
                <defs>
                  <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#8b5cf6"
                  fill="url(#colorValue2)"
                  strokeWidth={2}
                />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
              </AreaChart>
            </CodePreview>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Feedback */}
        <section id="feedback" className="mb-12 scroll-mt-8">
          <h2 className="text-xl font-semibold mb-4">Feedback</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <CodePreview
              title="Alert Variants"
              description="Info, success, warning, and error alerts"
              code={`<div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
  <div className="flex gap-2">
    <Info className="h-4 w-4 text-blue-500 mt-0.5" />
    <p className="text-sm text-blue-500">Information message here.</p>
  </div>
</div>
<div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
  <div className="flex gap-2">
    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
    <p className="text-sm text-green-500">Success message here.</p>
  </div>
</div>`}
            >
              <div className="space-y-2">
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="flex gap-2">
                    <Info className="h-4 w-4 text-blue-500 mt-0.5" />
                    <p className="text-sm text-blue-500">Information message here.</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                    <p className="text-sm text-green-500">Success message here.</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="flex gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5" />
                    <p className="text-sm text-yellow-500">Warning message here.</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <div className="flex gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5" />
                    <p className="text-sm text-red-500">Error message here.</p>
                  </div>
                </div>
              </div>
            </CodePreview>

            <CodePreview
              title="Skeleton Loaders"
              description="Pulse animation placeholders"
              code={`<div className="space-y-3">
  <div className="flex gap-3">
    <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
    <div className="flex-1 space-y-2">
      <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
      <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
    </div>
  </div>
  <div className="h-32 bg-muted rounded animate-pulse" />
</div>`}
            >
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                    <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
                  </div>
                </div>
                <div className="h-32 bg-muted rounded animate-pulse" />
              </div>
            </CodePreview>

            <CodePreview
              title="Empty State"
              description="Icon, heading, description, and CTA"
              code={`<div className="flex flex-col items-center justify-center py-12 text-center">
  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
    <Mail className="h-6 w-6 text-muted-foreground" />
  </div>
  <h3 className="font-semibold mb-1">No messages yet</h3>
  <p className="text-sm text-muted-foreground mb-4">
    When you receive messages, they will appear here.
  </p>
  <Button>Send a message</Button>
</div>`}
            >
              <div className="flex flex-col items-center justify-center py-12 text-center border rounded-lg">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="font-semibold mb-1">No messages yet</h3>
                <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                  When you receive messages, they will appear here.
                </p>
                <Button>Send a message</Button>
              </div>
            </CodePreview>

            <CodePreview
              title="Error State"
              description="Error message with retry button"
              code={`<div className="flex flex-col items-center justify-center py-12 text-center">
  <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
    <XCircle className="h-6 w-6 text-red-500" />
  </div>
  <h3 className="font-semibold mb-1">Something went wrong</h3>
  <p className="text-sm text-muted-foreground mb-4">
    We could not load your data. Please try again.
  </p>
  <Button variant="outline">
    <Loader2 className="h-4 w-4 mr-2" />
    Retry
  </Button>
</div>`}
            >
              <div className="flex flex-col items-center justify-center py-12 text-center border rounded-lg">
                <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                  <XCircle className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="font-semibold mb-1">Something went wrong</h3>
                <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                  We could not load your data. Please try again.
                </p>
                <Button variant="outline">
                  <Loader2 className="h-4 w-4 mr-2" />
                  Retry
                </Button>
              </div>
            </CodePreview>

            <CodePreview
              title="Loading Spinners"
              description="Various loading patterns"
              code={`<div className="flex gap-4">
  <div className="h-6 w-6 border-2 border-muted-foreground border-t-transparent rounded-full animate-spin" />
  <div className="h-8 w-8 border-4 border-violet-600 border-t-transparent rounded-full animate-spin" />
  <Button disabled>
    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
    Loading
  </Button>
</div>`}
            >
              <div className="flex gap-4 items-center">
                <div className="h-6 w-6 border-2 border-muted-foreground border-t-transparent rounded-full animate-spin" />
                <div className="h-8 w-8 border-4 border-violet-600 border-t-transparent rounded-full animate-spin" />
                <Button disabled>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Loading
                </Button>
              </div>
            </CodePreview>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Navigation */}
        <section id="navigation" className="mb-12 scroll-mt-8">
          <h2 className="text-xl font-semibold mb-4">Navigation</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <CodePreview
              title="Breadcrumbs"
              description="Hierarchical navigation path"
              code={`<nav className="flex items-center gap-2 text-sm">
  <a href="#" className="text-muted-foreground hover:text-foreground">Home</a>
  <ChevronRight className="h-4 w-4 text-muted-foreground" />
  <a href="#" className="text-muted-foreground hover:text-foreground">Components</a>
  <ChevronRight className="h-4 w-4 text-muted-foreground" />
  <span className="font-medium">Current Page</span>
</nav>`}
            >
              <nav className="flex items-center gap-2 text-sm">
                <a href="#" className="text-muted-foreground hover:text-foreground">Home</a>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <a href="#" className="text-muted-foreground hover:text-foreground">Components</a>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Current Page</span>
              </nav>
            </CodePreview>

            <CodePreview
              title="Tabs"
              description="Horizontal tab navigation"
              code={`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
  </TabsList>
  <TabsContent value="overview" className="mt-4">
    <p className="text-sm text-muted-foreground">Overview content here.</p>
  </TabsContent>
</Tabs>`}
            >
              <Tabs defaultValue="overview" value={tabsValue} onValueChange={setTabsValue}>
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                  <p className="text-sm text-muted-foreground">Overview content here.</p>
                </TabsContent>
                <TabsContent value="analytics" className="mt-4">
                  <p className="text-sm text-muted-foreground">Analytics content here.</p>
                </TabsContent>
                <TabsContent value="reports" className="mt-4">
                  <p className="text-sm text-muted-foreground">Reports content here.</p>
                </TabsContent>
              </Tabs>
            </CodePreview>

            <CodePreview
              title="Pagination"
              description="Page navigation controls"
              code={`<div className="flex items-center gap-1">
  <Button variant="outline" size="icon" className="h-8 w-8">
    <ChevronLeft className="h-4 w-4" />
  </Button>
  <Button variant="secondary" size="sm" className="h-8 w-8 p-0">1</Button>
  <Button variant="outline" size="sm" className="h-8 w-8 p-0">2</Button>
  <Button variant="outline" size="sm" className="h-8 w-8 p-0">3</Button>
  <span className="px-2 text-muted-foreground">...</span>
  <Button variant="outline" size="sm" className="h-8 w-8 p-0">10</Button>
  <Button variant="outline" size="icon" className="h-8 w-8">
    <ChevronRight className="h-4 w-4" />
  </Button>
</div>`}
            >
              <div className="flex items-center gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="sm" className="h-8 w-8 p-0">1</Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">2</Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">3</Button>
                <span className="px-2 text-muted-foreground">...</span>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">10</Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CodePreview>

            <CodePreview
              title="Dropdown Menu"
              description="Action menu with trigger"
              code={`<div className="relative">
  <Button variant="outline" onClick={() => setDropdownOpen(!dropdownOpen)}>
    <Menu className="h-4 w-4 mr-2" />
    Menu
  </Button>
  {dropdownOpen && (
    <div className="absolute top-full left-0 mt-1 w-48 bg-popover border rounded-lg shadow-lg p-1 z-10">
      <button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-muted">
        <Settings className="h-4 w-4 mr-2 inline" />Settings
      </button>
      <button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-muted">
        <User className="h-4 w-4 mr-2 inline" />Profile
      </button>
      <Separator className="my-1" />
      <button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-muted text-red-500">
        <Trash2 className="h-4 w-4 mr-2 inline" />Delete
      </button>
    </div>
  )}
</div>`}
            >
              <div className="relative">
                <Button variant="outline" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <Menu className="h-4 w-4 mr-2" />
                  Menu
                </Button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-popover border rounded-lg shadow-lg p-1 z-10">
                    <button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-muted flex items-center gap-2">
                      <Settings className="h-4 w-4" />Settings
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-muted flex items-center gap-2">
                      <User className="h-4 w-4" />Profile
                    </button>
                    <Separator className="my-1" />
                    <button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-muted text-red-500 flex items-center gap-2">
                      <Trash2 className="h-4 w-4" />Delete
                    </button>
                  </div>
                )}
              </div>
            </CodePreview>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Motion */}
        <section id="motion" className="mb-12 scroll-mt-8">
          <h2 className="text-xl font-semibold mb-4">Motion</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <CodePreview
              title="Fade In"
              description="Basic fade in animation on mount"
              code={`<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="p-4 bg-violet-600 rounded-lg text-white"
>
  Fade In Animation
</motion.div>`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="p-4 bg-violet-600 rounded-lg text-white text-center"
              >
                Fade In Animation
              </motion.div>
            </CodePreview>

            <CodePreview
              title="Slide In"
              description="Slide in from different directions"
              code={`<motion.div
  initial={{ x: -20, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.3 }}
  className="p-4 bg-blue-600 rounded-lg text-white"
>
  Slide from Left
</motion.div>`}
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-blue-600 rounded-lg text-white text-center"
              >
                Slide from Left
              </motion.div>
            </CodePreview>

            <CodePreview
              title="Scale Up"
              description="Scale up animation on mount"
              code={`<motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.3 }}
  className="p-4 bg-green-600 rounded-lg text-white"
>
  Scale Up Animation
</motion.div>`}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-green-600 rounded-lg text-white text-center"
              >
                Scale Up Animation
              </motion.div>
            </CodePreview>

            <CodePreview
              title="Stagger Children"
              description="Sequential animation for child elements"
              code={`<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }}
  className="flex gap-2"
>
  {[1, 2, 3].map((i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
      }}
      className="p-4 bg-purple-600 rounded-lg text-white"
    >
      Item {i}
    </motion.div>
  ))}
</motion.div>`}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
                className="flex gap-2"
              >
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="p-4 bg-purple-600 rounded-lg text-white text-center"
                  >
                    Item {i}
                  </motion.div>
                ))}
              </motion.div>
            </CodePreview>

            <CodePreview
              title="Hover Scale"
              description="Scale effect on hover"
              code={`<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="p-6 bg-amber-600 rounded-lg text-white text-center cursor-pointer"
>
  Hover Me
</motion.div>`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-6 bg-amber-600 rounded-lg text-white text-center cursor-pointer"
              >
                Hover Me
              </motion.div>
            </CodePreview>

            <CodePreview
              title="Pulse Animation"
              description="Continuous pulse effect"
              code={`<motion.div
  animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
  transition={{ duration: 1.5, repeat: Infinity }}
  className="h-12 w-12 bg-red-500 rounded-full"
/>`}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-12 w-12 bg-red-500 rounded-full mx-auto"
              />
            </CodePreview>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Icons */}
        <section id="icons" className="mb-12 scroll-mt-8">
          <h2 className="text-xl font-semibold mb-4">Icons</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <CodePreview
              title="Lucide Icons Grid"
              description="30 commonly used Lucide icons"
              code={`<div className="grid grid-cols-6 gap-4">
  <div className="flex flex-col items-center gap-1">
    <Home className="h-5 w-5" />
    <span className="text-xs">Home</span>
  </div>
  <div className="flex flex-col items-center gap-1">
    <User className="h-5 w-5" />
    <span className="text-xs">User</span>
  </div>
  {/* ... more icons */}
</div>`}
            >
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
                {lucideIcons.slice(0, 18).map(({ name, icon: Icon }) => (
                  <div key={name} className="flex flex-col items-center gap-1">
                    <Icon className="h-5 w-5" />
                    <span className="text-xs text-muted-foreground">{name}</span>
                  </div>
                ))}
              </div>
            </CodePreview>

            <CodePreview
              title="Icon Size Variants"
              description="Small, medium, and large icons"
              code={`<div className="flex items-center gap-4">
  <Home className="h-4 w-4" />
  <Home className="h-6 w-6" />
  <Home className="h-8 w-8" />
  <Home className="h-10 w-10" />
</div>`}
            >
              <div className="flex items-center gap-4">
                <Home className="h-4 w-4" />
                <Home className="h-6 w-6" />
                <Home className="h-8 w-8" />
                <Home className="h-10 w-10" />
              </div>
            </CodePreview>

            <CodePreview
              title="Icon Buttons"
              description="Circular and square icon buttons"
              code={`<div className="flex gap-2">
  <Button size="icon" variant="default">
    <Home className="h-4 w-4" />
  </Button>
  <Button size="icon" variant="outline">
    <Settings className="h-4 w-4" />
  </Button>
  <Button size="icon" variant="secondary">
    <User className="h-4 w-4" />
  </Button>
  <Button size="icon" variant="ghost">
    <Mail className="h-4 w-4" />
  </Button>
  <Button size="icon" variant="destructive">
    <Trash2 className="h-4 w-4" />
  </Button>
</div>`}
            >
              <div className="flex gap-2">
                <Button size="icon" variant="default">
                  <Home className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary">
                  <User className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CodePreview>

            <CodePreview
              title="More Icons"
              description="Additional icon examples"
              code={`<div className="grid grid-cols-6 gap-4">
  {lucideIcons.slice(18).map(({ name, icon: Icon }) => (
    <div key={name} className="flex flex-col items-center gap-1">
      <Icon className="h-5 w-5" />
      <span className="text-xs text-muted-foreground">{name}</span>
    </div>
  ))}
</div>`}
            >
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
                {lucideIcons.slice(18).map(({ name, icon: Icon }) => (
                  <div key={name} className="flex flex-col items-center gap-1">
                    <Icon className="h-5 w-5" />
                    <span className="text-xs text-muted-foreground">{name}</span>
                  </div>
                ))}
              </div>
            </CodePreview>
          </div>
        </section>

        <div className="h-12" />
      </main>
    </div>
  );
}
