"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, Calendar, Globe, FileText, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { format } from "date-fns"

interface BrochureLead {
  id: string
  full_name: string
  email: string
  phone: string
  brochure_type: "citizenship" | "residency"
  country: string | null
  created_at: string
}

export default function BrochureLeadsPage() {
  const [leads, setLeads] = useState<BrochureLead[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      const response = await fetch("/api/brochure-leads")
      if (!response.ok) {
        throw new Error("Failed to fetch leads")
      }
      const data = await response.json()
      setLeads(data.leads || [])
    } catch (error) {
      console.error("[v0] Error fetching brochure leads:", error)
      toast({
        title: "Error",
        description: "Failed to load brochure leads",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const exportToCSV = () => {
    if (leads.length === 0) {
      toast({
        title: "No Data",
        description: "There are no leads to export",
      })
      return
    }

    // Create CSV content
    const headers = ["Full Name", "Email", "Phone", "Brochure Type", "Country", "Date"]
    const rows = leads.map((lead) => [
      lead.full_name,
      lead.email,
      lead.phone,
      lead.brochure_type,
      lead.country || "N/A",
      format(new Date(lead.created_at), "MMM dd, yyyy HH:mm"),
    ])

    const csvContent = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n")

    // Create and download file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = `brochure-leads-${format(new Date(), "yyyy-MM-dd")}.csv`
    link.click()

    toast({
      title: "Success",
      description: "Leads exported successfully",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Brochure Download Leads</h1>
              <p className="text-lg text-muted-foreground">Manage and view all brochure download submissions</p>
            </div>
            <Button onClick={exportToCSV} className="bg-primary hover:bg-primary/90" disabled={leads.length === 0}>
              <Download className="w-4 h-4 mr-2" />
              Export to CSV
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{leads.length}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Citizenship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">
                  {leads.filter((l) => l.brochure_type === "citizenship").length}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Residency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">
                  {leads.filter((l) => l.brochure_type === "residency").length}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Leads List */}
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : leads.length === 0 ? (
            <Card className="border-0 shadow-lg">
              <CardContent className="py-12 text-center">
                <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">No brochure leads yet</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Leads will appear here when users download brochures
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {leads.map((lead) => (
                <Card key={lead.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-semibold">{lead.full_name}</h3>
                          <Badge
                            variant="outline"
                            className={
                              lead.brochure_type === "citizenship"
                                ? "border-primary text-primary"
                                : "border-accent text-accent"
                            }
                          >
                            {lead.brochure_type === "citizenship" ? (
                              <>
                                <Globe className="w-3 h-3 mr-1" />
                                Citizenship
                              </>
                            ) : (
                              <>
                                <FileText className="w-3 h-3 mr-1" />
                                Residency
                              </>
                            )}
                          </Badge>
                          {lead.country && (
                            <Badge variant="secondary" className="bg-muted">
                              {lead.country}
                            </Badge>
                          )}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <a href={`mailto:${lead.email}`} className="hover:text-primary transition-colors">
                              {lead.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <a href={`tel:${lead.phone}`} className="hover:text-primary transition-colors">
                              {lead.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{format(new Date(lead.created_at), "MMM dd, yyyy 'at' HH:mm")}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                        >
                          <a href={`mailto:${lead.email}`}>
                            <Mail className="w-4 h-4 mr-1" />
                            Email
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                        >
                          <a href={`tel:${lead.phone}`}>
                            <Phone className="w-4 h-4 mr-1" />
                            Call
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
