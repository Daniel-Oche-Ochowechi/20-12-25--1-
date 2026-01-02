"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Mail,
  Phone,
  User,
  MapPin,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Filter,
  Download,
  Trash2,
} from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

interface Consultation {
  id: string
  country: string
  program_type: string
  full_name: string
  email: string
  phone: string
  preferred_date: string
  status: "pending" | "scheduled" | "completed" | "cancelled"
  scheduled_date: string | null
  notes: string | null
  created_at: string
}

interface ConsultationsManagerProps {
  initialData: Consultation[]
}

export function ConsultationsManager({ initialData }: ConsultationsManagerProps) {
  const [consultations, setConsultations] = useState<Consultation[]>(initialData)
  const [filteredConsultations, setFilteredConsultations] = useState<Consultation[]>(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [scheduledDate, setScheduledDate] = useState("")
  const [notes, setNotes] = useState("")
  const [newStatus, setNewStatus] = useState<string>("")

  console.log("[v0] ConsultationsManager - Rendering with data:", {
    initialDataLength: initialData.length,
    consultationsLength: consultations.length,
    filteredLength: filteredConsultations.length,
    consultations: consultations.slice(0, 2), // Log first 2 for debugging
  })

  useEffect(() => {
    setConsultations(initialData)
    setFilteredConsultations(initialData)
  }, [initialData])

  useEffect(() => {
    filterConsultations()
  }, [searchTerm, statusFilter, consultations])

  const filterConsultations = () => {
    let filtered = consultations

    if (searchTerm) {
      filtered = filtered.filter(
        (c) =>
          c.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.country.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((c) => c.status === statusFilter)
    }

    setFilteredConsultations(filtered)
  }

  const refetchConsultations = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/consultations")
      if (!response.ok) throw new Error("Failed to fetch consultations")

      const data = await response.json()
      setConsultations(data.consultations)
    } catch (error) {
      console.error("Error fetching consultations:", error)
      toast.error("Failed to refresh consultations")
    } finally {
      setIsLoading(false)
    }
  }

  const handleUpdateConsultation = async () => {
    if (!selectedConsultation) return

    try {
      const response = await fetch(`/api/consultations/${selectedConsultation.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: newStatus || selectedConsultation.status,
          scheduledDate: scheduledDate || selectedConsultation.scheduled_date,
          notes: notes,
        }),
      })

      if (response.ok) {
        toast.success("Consultation updated successfully")
        setIsDialogOpen(false)
        refetchConsultations()
      } else {
        toast.error("Failed to update consultation")
      }
    } catch (error) {
      console.error("Error updating consultation:", error)
      toast.error("Error updating consultation")
    }
  }

  const handleDeleteConsultation = async (id: string) => {
    if (!confirm("Are you sure you want to delete this consultation request?")) return

    try {
      const response = await fetch(`/api/consultations/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        toast.success("Consultation deleted successfully")
        refetchConsultations()
      } else {
        toast.error("Failed to delete consultation")
      }
    } catch (error) {
      console.error("Error deleting consultation:", error)
      toast.error("Error deleting consultation")
    }
  }

  const exportToCSV = () => {
    const headers = ["Date", "Name", "Email", "Phone", "Country", "Program Type", "Preferred Date", "Status"]
    const csvData = filteredConsultations.map((c) => [
      new Date(c.created_at).toLocaleDateString(),
      c.full_name,
      c.email,
      c.phone,
      c.country,
      c.program_type,
      c.preferred_date,
      c.status,
    ])

    const csv = [headers, ...csvData].map((row) => row.join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `consultations_${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  const openEditDialog = (consultation: Consultation) => {
    setSelectedConsultation(consultation)
    setNewStatus(consultation.status)
    setScheduledDate(consultation.scheduled_date ? consultation.scheduled_date.split("T")[0] : "")
    setNotes(consultation.notes || "")
    setIsDialogOpen(true)
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20", icon: Clock },
      scheduled: { color: "bg-blue-500/10 text-blue-600 border-blue-500/20", icon: Calendar },
      completed: { color: "bg-green-500/10 text-green-600 border-green-500/20", icon: CheckCircle },
      cancelled: { color: "bg-red-500/10 text-red-600 border-red-500/20", icon: XCircle },
    }

    const config = statusConfig[status as keyof typeof statusConfig]
    const Icon = config.icon

    return (
      <Badge className={`${config.color} border`}>
        <Icon className="w-3 h-3 mr-1" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  const stats = {
    total: consultations.length,
    pending: consultations.filter((c) => c.status === "pending").length,
    scheduled: consultations.filter((c) => c.status === "scheduled").length,
    completed: consultations.filter((c) => c.status === "completed").length,
  }

  if (consultations.length === 0 && isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-muted-foreground">Loading consultations...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Requests</CardDescription>
            <CardTitle className="text-3xl">{stats.total}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Pending</CardDescription>
            <CardTitle className="text-3xl text-yellow-600">{stats.pending}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Scheduled</CardDescription>
            <CardTitle className="text-3xl text-blue-600">{stats.scheduled}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Completed</CardDescription>
            <CardTitle className="text-3xl text-green-600">{stats.completed}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Consultation Requests</CardTitle>
              <CardDescription>Manage and schedule consultation appointments</CardDescription>
            </div>
            <Button onClick={exportToCSV} variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Consultations List */}
          <div className="space-y-4">
            {filteredConsultations.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">No consultations found</div>
            ) : (
              filteredConsultations.map((consultation) => (
                <Card key={consultation.id} className="border">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-lg flex items-center gap-2">
                              <User className="w-4 h-4 text-muted-foreground" />
                              {consultation.full_name}
                            </h4>
                            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Mail className="w-4 h-4" />
                                {consultation.email}
                              </span>
                              <span className="flex items-center gap-1">
                                <Phone className="w-4 h-4" />
                                {consultation.phone}
                              </span>
                            </div>
                          </div>
                          {getStatusBadge(consultation.status)}
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="font-medium">{consultation.country}</span>
                          </div>
                          <Badge variant="outline">{consultation.program_type}</Badge>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            Preferred: {new Date(consultation.preferred_date).toLocaleDateString()}
                          </div>
                        </div>

                        {consultation.scheduled_date && (
                          <div className="text-sm text-green-600 font-medium">
                            Scheduled: {new Date(consultation.scheduled_date).toLocaleString()}
                          </div>
                        )}

                        {consultation.notes && (
                          <div className="text-sm text-muted-foreground bg-muted/50 p-2 rounded">
                            <strong>Notes:</strong> {consultation.notes}
                          </div>
                        )}

                        <div className="text-xs text-muted-foreground">
                          Submitted: {new Date(consultation.created_at).toLocaleString()}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button onClick={() => openEditDialog(consultation)} size="sm" className="w-full md:w-auto">
                          <Calendar className="w-4 h-4 mr-2" />
                          Manage
                        </Button>
                        <Button
                          onClick={() => (window.location.href = `mailto:${consultation.email}`)}
                          variant="outline"
                          size="sm"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </Button>
                        <Button
                          onClick={() => handleDeleteConsultation(consultation.id)}
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Manage Consultation</DialogTitle>
            <DialogDescription>Update consultation status and schedule appointment</DialogDescription>
          </DialogHeader>

          {selectedConsultation && (
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-2 block">Client Name</label>
                  <Input value={selectedConsultation.full_name} disabled />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Program</label>
                  <Input value={`${selectedConsultation.country} - ${selectedConsultation.program_type}`} disabled />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-2 block">Status</label>
                  <Select value={newStatus} onValueChange={setNewStatus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Scheduled Date & Time</label>
                  <Input
                    type="datetime-local"
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Notes</label>
                <Textarea
                  placeholder="Add notes about this consultation..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleUpdateConsultation}>Save Changes</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
