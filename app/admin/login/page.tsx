"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle, LockKeyhole, Mail, User } from "lucide-react"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (session?.user) {
        router.push("/admin/dashboard")
      }
    }

    checkAuth()
  }, [router, supabase])

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setSuccessMessage(null)

    try {
      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (authError) throw authError

      if (data.user) {
        const { error: adminError } = await supabase.from("admin_users").insert({
          id: data.user.id,
          full_name: fullName,
          role: "admin",
          is_approved: true,
        })

        if (adminError && !adminError.message.includes("duplicate")) {
          throw adminError
        }
      }

      setSuccessMessage("Account created successfully! Sign in with your credentials.")
      setEmail("")
      setPassword("")
      setFullName("")
      setTimeout(() => setIsSignUp(false), 2000)
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred during sign up")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setSuccessMessage(null)

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError) throw authError

      setSuccessMessage("Signed in successfully! Redirecting...")
      setTimeout(() => {
        router.push("/admin/dashboard")
      }, 1000)
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred during sign in")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-black-to-gold p-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>

      <Card className="w-full max-w-md bg-card/85 backdrop-blur-xl border border-primary/30 shadow-2xl relative z-10">
        <CardHeader className="space-y-2 pb-6">
          <div className="flex items-center justify-center mb-2">
            <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center">
              <LockKeyhole className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-center text-3xl font-bold bg-gradient-text-gold">
            {isSignUp ? "Create Admin Account" : "Admin Portal"}
          </CardTitle>
          <CardDescription className="text-center text-sm">
            {isSignUp
              ? "Register to manage submissions and engage with contacts"
              : "Access your admin dashboard to manage submissions"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={isSignUp ? handleSignUp : handleSignIn} className="space-y-5">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-semibold text-foreground">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="pl-10 bg-background/40 border-primary/30 h-11 focus:bg-background/60 transition-all"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-background/40 border-primary/30 h-11 focus:bg-background/60 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-semibold text-foreground">
                Password
              </Label>
              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-background/40 border-primary/30 h-11 focus:bg-background/60 transition-all"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-500/15 border border-red-500/40 rounded-lg p-3 flex gap-3 animate-scale-in">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {successMessage && (
              <div className="bg-green-500/15 border border-green-500/40 rounded-lg p-3 flex gap-3 animate-scale-in">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-600">{successMessage}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-gold hover:bg-primary/90 text-primary-foreground py-3 font-semibold rounded-lg transition-all hover-lift h-11"
            >
              {isLoading
                ? isSignUp
                  ? "Creating account..."
                  : "Signing in..."
                : isSignUp
                  ? "Create Account"
                  : "Sign In"}
            </Button>

            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp)
                setError(null)
                setSuccessMessage(null)
              }}
              className="w-full text-sm text-primary hover:text-accent font-medium transition-colors py-2"
            >
              {isSignUp ? "Already have an account? Sign in" : "Need an account? Sign up"}
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
