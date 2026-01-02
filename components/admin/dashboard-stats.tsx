"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Users, TrendingUp, FileDown, Calendar } from "lucide-react"

interface DashboardStatsProps {
  contactCount: number
  newsletterCount: number
  brochureLeadsCount: number
  consultationsCount: number
}

export function DashboardStats({
  contactCount,
  newsletterCount,
  brochureLeadsCount,
  consultationsCount,
}: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
      <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold text-muted-foreground">Contact Submissions</CardTitle>
            <Mail className="w-4 h-4 text-blue-500" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-blue-600">{contactCount}</p>
          <p className="text-xs text-muted-foreground mt-1">Total inquiries</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold text-muted-foreground">Subscribers</CardTitle>
            <Users className="w-4 h-4 text-purple-500" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-purple-600">{newsletterCount}</p>
          <p className="text-xs text-muted-foreground mt-1">Active subscriptions</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-amber-500/20">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold text-muted-foreground">Brochure Leads</CardTitle>
            <FileDown className="w-4 h-4 text-amber-500" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-amber-600">{brochureLeadsCount}</p>
          <p className="text-xs text-muted-foreground mt-1">Total downloads</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-500/20">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold text-muted-foreground">Consultations</CardTitle>
            <Calendar className="w-4 h-4 text-emerald-500" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-emerald-600">{consultationsCount}</p>
          <p className="text-xs text-muted-foreground mt-1">Scheduled requests</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold text-muted-foreground">Total Data</CardTitle>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-green-600">
            {contactCount + newsletterCount + brochureLeadsCount + consultationsCount}
          </p>
          <p className="text-xs text-muted-foreground mt-1">Entries collected</p>
        </CardContent>
      </Card>
    </div>
  )
}
