"use client"

import type { User } from "@supabase/supabase-js"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { LogOut, LayoutDashboard } from "lucide-react"
import Link from "next/link"

interface AdminHeaderProps {
  user: User
}

export function AdminHeader({ user }: AdminHeaderProps) {
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  return (
    <header className="bg-foreground text-background border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/admin/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <p className="text-xs text-background/70">OrientHeight</p>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-sm font-semibold">{user.email}</p>
            <p className="text-xs text-background/70">Administrator</p>
          </div>
          <Button onClick={handleLogout} variant="ghost" className="text-background hover:bg-background/20">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
