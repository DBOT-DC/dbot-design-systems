"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Copy, Check, Code, Eye } from "lucide-react";

interface CodePreviewProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
}

export function CodePreview({ title, description, code, children }: CodePreviewProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("preview");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base">{title}</CardTitle>
            {description && <CardDescription className="mt-1">{description}</CardDescription>}
          </div>
          <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8 px-2">
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-1 text-green-500" />
                <span className="text-xs text-green-500">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-1" />
                <span className="text-xs">Copy</span>
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pb-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-8">
            <TabsTrigger value="preview" className="text-xs h-7">
              <Eye className="h-3 w-3 mr-1" />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="text-xs h-7">
              <Code className="h-3 w-3 mr-1" />
              Code
            </TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-3">
            <div className="flex flex-wrap items-center gap-3 p-6 bg-muted/30 rounded-lg min-h-[80px]">
              {children}
            </div>
          </TabsContent>
          <TabsContent value="code" className="mt-3">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono leading-relaxed">
              <code>{code}</code>
            </pre>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
