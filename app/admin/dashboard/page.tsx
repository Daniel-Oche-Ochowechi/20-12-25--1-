import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AdminHeader } from "@/components/admin/admin-header"
import type { SearchParams } from "@/types/search-params"
import { DashboardStats } from "@/components/admin/dashboard-stats"
import { DashboardTabs } from "@/components/admin/dashboard-tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

interface AdminDashboardPageProps {
  searchParams: Promise<SearchParams>
}

export default async function AdminDashboardPage({ searchParams }: AdminDashboardPageProps) {
  const params = await searchParams
  const supabase = await createClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  console.log("[v0] Admin dashboard - Auth check:", {
    hasUser: !!user,
    userId: user?.id,
    authError: authError?.message,
  })

  if (authError || !user) {
    console.log("[v0] Admin dashboard - No authenticated user, redirecting to login")
    redirect("/admin/login")
  }

  const contactSort = params.contactSort || "created_at"
  const contactOrder = params.contactOrder || "desc"
  const newsletterSort = params.newsletterSort || "created_at"
  const newsletterOrder = params.newsletterOrder || "desc"

  console.log("[v0] Admin dashboard - Starting data fetch for user:", user.id)

  const [
    { count: contactCount, error: contactCountError },
    { count: newsletterCount, error: newsletterCountError },
    { count: brochureLeadsCount, error: brochureLeadsCountError },
    { count: consultationsCount, error: consultationsCountError },
    { data: allContacts, error: contactsError },
    { data: allSubscribers, error: subscribersError },
    { data: allBrochureLeads, error: brochureLeadsError },
    { data: allConsultations, error: consultationsError },
  ] = await Promise.all([
    supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
    supabase.from("newsletter_subscriptions").select("*", { count: "exact", head: true }),
    supabase.from("brochure_leads").select("*", { count: "exact", head: true }),
    supabase.from("consultations").select("*", { count: "exact", head: true }),
    supabase
      .from("contact_submissions")
      .select("*")
      .order(contactSort, { ascending: contactOrder === "asc" })
      .limit(100),
    supabase
      .from("newsletter_subscriptions")
      .select("*")
      .order(newsletterSort, { ascending: newsletterOrder === "asc" })
      .limit(100),
    supabase.from("brochure_leads").select("*").order("created_at", { ascending: false }).limit(100),
    supabase.from("consultations").select("*").order("created_at", { ascending: false }).limit(100),
  ])

  console.log("[v0] Admin dashboard - Query results:", {
    contactCount,
    contactCountError: contactCountError?.message,
    newsletterCount,
    newsletterCountError: newsletterCountError?.message,
    brochureLeadsCount,
    brochureLeadsCountError: brochureLeadsCountError?.message,
    consultationsCount,
    consultationsCountError: consultationsCountError?.message,
    contactsLength: allContacts?.length,
    contactsError: contactsError?.message,
    subscribersLength: allSubscribers?.length,
    subscribersError: subscribersError?.message,
    brochureLeadsLength: allBrochureLeads?.length,
    brochureLeadsError: brochureLeadsError?.message,
    consultationsLength: allConsultations?.length,
    consultationsError: consultationsError?.message,
  })

  const hasErrors = contactsError || subscribersError || brochureLeadsError || consultationsError

  if (hasErrors) {
    console.error("[v0] Admin dashboard - Errors detected:", {
      contactsError: contactsError?.message,
      subscribersError: subscribersError?.message,
      brochureLeadsError: brochureLeadsError?.message,
      consultationsError: consultationsError?.message,
    })

    return (
      <div className="min-h-screen bg-background">
        <AdminHeader user={user} />
        <div className="container mx-auto px-4 py-8">
          <Card className="border-red-500/50 bg-red-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertCircle className="w-5 h-5" />
                Error Loading Dashboard Data
              </CardTitle>
              <CardDescription>
                There was an error loading some dashboard data. Please check the browser console for details or contact
                support if the issue persists.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              {contactsError && (
                <p className="text-red-600">• Failed to load contact submissions: {contactsError.message}</p>
              )}
              {subscribersError && (
                <p className="text-red-600">• Failed to load newsletter subscribers: {subscribersError.message}</p>
              )}
              {brochureLeadsError && (
                <p className="text-red-600">• Failed to load brochure leads: {brochureLeadsError.message}</p>
              )}
              {consultationsError && (
                <p className="text-red-600">• Failed to load consultations: {consultationsError.message}</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  console.log("[v0] Admin dashboard - Successfully loaded all data, rendering dashboard")

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader user={user} />

      <div className="container mx-auto px-4 py-8">
        {/* Stats Section */}
        <DashboardStats
          contactCount={contactCount || 0}
          newsletterCount={newsletterCount || 0}
          brochureLeadsCount={brochureLeadsCount || 0}
          consultationsCount={consultationsCount || 0}
        />

        {/* Tabs Section */}
        <DashboardTabs
          contacts={allContacts || []}
          subscribers={allSubscribers || []}
          brochureLeads={allBrochureLeads || []}
          consultations={allConsultations || []}
        />
      </div>
    </div>
  )
}
