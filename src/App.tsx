import { Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-8 p-6">
      <div className="flex max-w-lg flex-col items-center gap-3 text-center">
        <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Sparkles className="size-6" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">JiyoungAn</h1>
        <p className="text-muted-foreground">
          React, Tailwind CSS, and ShadCN UI — ready to build.
        </p>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>
            Your project is set up with Vite, TypeScript, and the Radix Nova
            design preset.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">
            Run the dev server, edit <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">src/App.tsx</code>, and add more components with the ShadCN CLI.
          </p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button>Get started</Button>
          <Button variant="outline" asChild>
            <a
              href="https://ui.shadcn.com/docs"
              target="_blank"
              rel="noreferrer"
            >
              ShadCN docs
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
