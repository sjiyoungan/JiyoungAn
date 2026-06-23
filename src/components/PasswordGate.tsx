import { useState, type FormEvent, type ReactNode } from "react"
import { Lock } from "lucide-react"

import { Button } from "@/components/ui/button"

const AUTH_KEY = "jiyoungan-portfolio-auth"
const PASSWORD = "Mine"

function isAuthenticated(): boolean {
  return sessionStorage.getItem(AUTH_KEY) === "true"
}

type PasswordGateProps = {
  children: ReactNode
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [unlocked, setUnlocked] = useState(isAuthenticated)
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (password === PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "true")
      setUnlocked(true)
      setError(false)
      return
    }
    setError(true)
    setPassword("")
  }

  if (unlocked) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6 rounded-2xl bg-card p-8 shadow-elevation-2 ring-1 ring-border">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Lock className="size-5" aria-hidden />
          </div>
          <h1 className="text-xl font-semibold tracking-tight">Private portfolio</h1>
          <p className="text-sm text-muted-foreground">
            Enter the password to view Jiyoung An&apos;s work.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError(false)
              }}
              placeholder="Password"
              autoComplete="current-password"
              className="h-9 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            />
            {error && (
              <p className="text-sm text-destructive" role="alert">
                Incorrect password. Try again.
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Enter
          </Button>
        </form>
      </div>
    </div>
  )
}
