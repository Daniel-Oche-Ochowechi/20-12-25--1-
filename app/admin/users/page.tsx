import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AdminHeader } from "@/components/admin/admin-header"
import { AdminUsersManager } from "@/components/admin/admin-users-manager"

export default async function AdminUsersPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  const { data: adminUser, error: adminError } = await supabase
    .from("admin_users")
    .select("*")
    .eq("id", user.id)
    .single()

  if (adminError || !adminUser || !adminUser.is_approved || adminUser.role !== "super_admin") {
    redirect("/admin/dashboard")
  }

  // Fetch all admin users (approved and pending)
  const { data: allAdmins } = await supabase.from("admin_users").select("*").order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader user={user} />
      <div className="container mx-auto px-4 py-8">
        <AdminUsersManager admins={allAdmins || []} currentUserId={user.id} />
      </div>
    </div>
  )
}
