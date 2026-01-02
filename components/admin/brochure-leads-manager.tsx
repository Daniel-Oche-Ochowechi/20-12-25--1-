"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, Calendar, Globe, FileText, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { format } from "date-fns"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface BrochureLead {
  id: string
  full_name: string
  email: string
  phone: string
  brochure_type: "citizenship" | "residency"
  country: string | null
  created_at: string
}

interface BrochureLeadsManagerProps {
  initialData: BrochureLead[]
}

export function BrochureLeadsManager({ initialData }: BrochureLeadsManagerProps) {
  const [leads, setLeads] = useState<BrochureLead[]>(initialData)
  const [leadToDelete, setLeadToDelete] = useState<string | null>(null)
  const { toast } = useToast()

  console.log("[v0] BrochureLeadsManager - Rendering with data:", {
    initialDataLength: initialData.length,
    leadsLength: leads.length,
    leads: leads.slice(0, 2), // Log first 2 for debugging
  })

  const exportToCSV = () => {
    if (leads.length === 0) {
      toast({
        title: "No Data",
        description: "There are no leads to export",
      })
      return
    }

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

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/brochure-leads/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete lead")
      }

      setLeads(leads.filter((lead) => lead.id !== id))
      toast({
        title: "Success",
        description: "Lead deleted successfully",
      })
    } catch (error) {
      console.error("[v0] Error deleting brochure lead:", error)
      toast({
        title: "Error",
        description: "Failed to delete lead",
        variant: "destructive",
      })
    } finally {
      setLeadToDelete(null)
    }
  }

  const citizenshipCount = leads.filter((l) => l.brochure_type === "citizenship").length
  const residencyCount = leads.filter((l) => l.brochure_type === "residency").length

  return (
    <div className="space-y-6">
      {/* Stats and Export */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex gap-4">
          <div className="bg-primary/10 rounded-lg px-4 py-2 border border-primary/20">
            <p className="text-sm text-muted-foreground">Citizenship</p>
            <p className="text-2xl font-bold text-primary">{citizenshipCount}</p>
          </div>
          <div className="bg-accent/10 rounded-lg px-4 py-2 border border-accent/20">
            <p className="text-sm text-muted-foreground">Residency</p>
            <p className="text-2xl font-bold text-accent">{residencyCount}</p>
          </div>
        </div>
        <Button onClick={exportToCSV} className="bg-primary hover:bg-primary/90" disabled={leads.length === 0}>
          <Download className="w-4 h-4 mr-2" />
          Export to CSV
        </Button>
      </div>

      {/* Leads List */}
      {leads.length === 0 ? (
        <Card className="border-0 shadow-lg">
          <CardContent className="py-12 text-center">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">No brochure leads yet</p>
            <p className="text-sm text-muted-foreground mt-2">Leads will appear here when users download brochures</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {leads.map((lead) => (
            <Card key={lead.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
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
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLeadToDelete(lead.id)}
                      className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!leadToDelete} onOpenChange={() => setLeadToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the brochure lead from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => leadToDelete && handleDelete(leadToDelete)}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
