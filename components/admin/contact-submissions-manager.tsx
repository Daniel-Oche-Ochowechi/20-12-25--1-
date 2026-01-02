"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Search, ChevronDown, Filter, Download } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { format } from "date-fns"

interface ContactSubmission {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  service_interest: string
  message: string
  created_at: string
}

interface ContactSubmissionsManagerProps {
  initialData: ContactSubmission[]
}

export function ContactSubmissionsManager({ initialData }: ContactSubmissionsManagerProps) {
  const [data, setData] = useState<ContactSubmission[]>(initialData)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const [isExporting, setIsExporting] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterService, setFilterService] = useState<string>("all")
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const supabase = createClient()

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch =
        item.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.message.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesService = filterService === "all" || item.service_interest === filterService

      return matchesSearch && matchesService
    })
  }, [data, searchQuery, filterService])

  const services = useMemo(() => {
    return [...new Set(data.map((item) => item.service_interest))]
  }, [data])

  const exportToCSV = () => {
    setIsExporting(true)
    try {
      const headers = ["First Name", "Last Name", "Email", "Phone", "Service Interest", "Message", "Submitted Date"]
      const rows = filteredData.map((item) => [
        item.first_name,
        item.last_name,
        item.email,
        item.phone,
        item.service_interest,
        `"${item.message.replace(/"/g, '""')}"`, // Escape quotes in message
        format(new Date(item.created_at), "MMMM dd, yyyy 'at' hh:mm a"),
      ])

      const csvContent = [headers, ...rows].map((row) => row.join(",")).join("\n")
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
      const link = document.createElement("a")
      const url = URL.createObjectURL(blob)
      link.setAttribute("href", url)
      link.setAttribute("download", `contact_submissions_${format(new Date(), "yyyy-MM-dd")}.csv`)
      link.style.visibility = "hidden"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error exporting CSV:", error)
    } finally {
      setIsExporting(false)
    }
  }

  const exportToJSON = () => {
    setIsExporting(true)
    try {
      const jsonData = filteredData.map((item) => ({
        firstName: item.first_name,
        lastName: item.last_name,
        email: item.email,
        phone: item.phone,
        serviceInterest: item.service_interest,
        message: item.message,
        submittedDate: item.created_at,
      }))

      const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: "application/json;charset=utf-8;" })
      const link = document.createElement("a")
      const url = URL.createObjectURL(blob)
      link.setAttribute("href", url)
      link.setAttribute("download", `contact_submissions_${format(new Date(), "yyyy-MM-dd")}.json`)
      link.style.visibility = "hidden"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error exporting JSON:", error)
    } finally {
      setIsExporting(false)
    }
  }

  const handleDelete = async (id: string) => {
    setIsDeleting(id)
    try {
      await supabase.from("contact_submissions").delete().eq("id", id)
      setData(data.filter((item) => item.id !== id))
    } catch (error) {
      console.error("Error deleting submission:", error)
    } finally {
      setIsDeleting(null)
    }
  }

  const handleBulkDelete = async () => {
    if (confirm(`Delete ${filteredData.length} submission(s)?`)) {
      setIsDeleting("bulk")
      try {
        const ids = filteredData.map((item) => item.id)
        await supabase.from("contact_submissions").delete().in("id", ids)
        setData(data.filter((item) => !ids.includes(item.id)))
      } catch (error) {
        console.error("Error bulk deleting:", error)
      } finally {
        setIsDeleting(null)
      }
    }
  }

  return (
    <Card className="bg-card/80 backdrop-blur-md border-primary/20">
      <CardHeader>
        <div className="flex flex-col gap-4">
          <CardTitle className="text-lg font-semibold">Contact Submissions</CardTitle>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or message..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/60 border-primary/20"
              />
            </div>

            <div className="relative">
              <select
                value={filterService}
                onChange={(e) => setFilterService(e.target.value)}
                className="appearance-none pl-10 pr-3 py-2 bg-background/60 border border-primary/20 rounded-md text-sm text-foreground cursor-pointer"
              >
                <option value="all">All Services</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>

            {filteredData.length > 0 && (
              <div className="flex gap-2">
                <Button
                  onClick={exportToCSV}
                  disabled={isExporting}
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap bg-transparent"
                  title="Export as CSV"
                >
                  <Download className="w-4 h-4 mr-2" />
                  CSV
                </Button>
                <Button
                  onClick={exportToJSON}
                  disabled={isExporting}
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap bg-transparent"
                  title="Export as JSON"
                >
                  <Download className="w-4 h-4 mr-2" />
                  JSON
                </Button>
              </div>
            )}

            {filteredData.length > 0 && (
              <Button
                onClick={handleBulkDelete}
                disabled={isDeleting === "bulk"}
                variant="destructive"
                size="sm"
                className="sm:w-auto"
              >
                Delete All ({filteredData.length})
              </Button>
            )}
          </div>

          <p className="text-xs text-muted-foreground">
            Showing {filteredData.length} of {data.length} submissions
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3 max-h-[600px] overflow-y-auto">
          {filteredData.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No submissions found</p>
          ) : (
            filteredData.map((submission) => (
              <div
                key={submission.id}
                className="border border-primary/20 rounded-lg bg-background/40 hover:bg-background/60 transition-all"
              >
                <button
                  onClick={() => setExpandedId(expandedId === submission.id ? null : submission.id)}
                  className="w-full text-left p-4 flex items-start justify-between gap-4 hover:bg-background/40"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">
                        {submission.first_name} {submission.last_name}
                      </h4>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded whitespace-nowrap">
                        {submission.service_interest}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{submission.email}</p>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform ${
                      expandedId === submission.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedId === submission.id && (
                  <div className="border-t border-primary/20 p-4 bg-background/20 space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold">Email</p>
                        <p className="text-sm text-foreground break-all">{submission.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold">Phone</p>
                        <p className="text-sm text-foreground">{submission.phone}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs text-muted-foreground font-semibold">Message</p>
                        <p className="text-sm text-foreground whitespace-pre-wrap">{submission.message}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs text-muted-foreground">
                          Submitted {format(new Date(submission.created_at), "MMMM dd, yyyy 'at' hh:mm a")}
                        </p>
                      </div>
                    </div>

                    <Button
                      onClick={() => handleDelete(submission.id)}
                      disabled={isDeleting === submission.id}
                      variant="destructive"
                      size="sm"
                      className="w-full"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      {isDeleting === submission.id ? "Deleting..." : "Delete Submission"}
                    </Button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
