"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createClient } from "@/lib/supabase/client"
import { AlertCircle, CheckCircle } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const { error: insertError } = await supabase.from("newsletter_subscriptions").insert({
        email,
      })

      if (insertError) {
        if (insertError.message.includes("duplicate")) {
          setError("This email is already subscribed")
        } else {
          throw insertError
        }
      } else {
        setSuccess(true)
        setEmail("")
        setTimeout(() => setSuccess(false), 3000)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex space-x-2">
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
          className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
        />
        <Button
          size="sm"
          type="submit"
          disabled={isLoading}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {isLoading ? "..." : "Subscribe"}
        </Button>
      </div>
      {error && (
        <div className="flex gap-2 text-xs text-background/80">
          <AlertCircle className="w-3 h-3 flex-shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}
      {success && (
        <div className="flex gap-2 text-xs text-background/80">
          <CheckCircle className="w-3 h-3 flex-shrink-0 mt-0.5" />
          <p>Successfully subscribed!</p>
        </div>
      )}
    </form>
  )
}
