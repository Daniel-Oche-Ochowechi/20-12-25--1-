"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Shield, Trash2 } from "lucide-react"

interface AdminUser {
  id: string
  full_name: string
  role: string
  is_approved: boolean
  created_at: string
}

interface AdminUsersManagerProps {
  admins: AdminUser[]
  currentUserId: string
}

export function AdminUsersManager({ admins, currentUserId }: AdminUsersManagerProps) {
  const [adminsList, setAdminsList] = useState(admins)
  const [isLoading, setIsLoading] = useState(false)
  const supabase = createClient()

  const handleApprove = async (userId: string) => {
    setIsLoading(true)
    try {
      const { error } = await supabase.from("admin_users").update({ is_approved: true }).eq("id", userId)

      if (error) throw error

      setAdminsList(adminsList.map((admin) => (admin.id === userId ? { ...admin, is_approved: true } : admin)))
    } catch (error) {
      console.error("Error approving admin:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleRemove = async (userId: string) => {
    if (userId === currentUserId) {
      alert("You cannot remove yourself")
      return
    }

    setIsLoading(true)
    try {
      const { error } = await supabase.from("admin_users").delete().eq("id", userId)

      if (error) throw error

      setAdminsList(adminsList.filter((admin) => admin.id !== userId))
    } catch (error) {
      console.error("Error removing admin:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const pendingAdmins = adminsList.filter((a) => !a.is_approved)
  const approvedAdmins = adminsList.filter((a) => a.is_approved)

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Admin Management</h2>
        <p className="text-muted-foreground">Approve or manage admin user accounts</p>
      </div>

      {/* Pending Approvals */}
      {pendingAdmins.length > 0 && (
        <Card className="border-yellow-500/30 bg-yellow-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-600">
              <Clock className="w-5 h-5" />
              Pending Approvals ({pendingAdmins.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingAdmins.map((admin) => (
                <div
                  key={admin.id}
                  className="flex items-center justify-between p-4 bg-background rounded-lg border border-yellow-500/20"
                >
                  <div>
                    <p className="font-semibold">{admin.full_name}</p>
                    <p className="text-sm text-muted-foreground">
                      Requested {new Date(admin.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <Button
                    onClick={() => handleApprove(admin.id)}
                    disabled={isLoading}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Approved Admins */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Approved Admins ({approvedAdmins.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {approvedAdmins.map((admin) => (
              <div key={admin.id} className="flex items-center justify-between p-4 bg-foreground/5 rounded-lg border">
                <div>
                  <p className="font-semibold">{admin.full_name}</p>
                  <p className="text-sm text-muted-foreground">
                    {admin.role === "super_admin" ? "Super Admin" : "Admin"}
                  </p>
                </div>
                {admin.id !== currentUserId && (
                  <Button
                    onClick={() => handleRemove(admin.id)}
                    disabled={isLoading}
                    variant="ghost"
                    className="text-red-600 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
