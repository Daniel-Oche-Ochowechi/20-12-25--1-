"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2, Mail } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useState } from "react"
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

interface ContactSubmissionsTableProps {
  data: ContactSubmission[]
}

export function ContactSubmissionsTable({ data: initialData }: ContactSubmissionsTableProps) {
  const [data, setData] = useState<ContactSubmission[]>(initialData)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const supabase = createClient()

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

  return (
    <Card className="bg-card/80 backdrop-blur-md border-primary/20">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Mail className="w-5 h-5 text-primary" />
          Contact Submissions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-[500px] overflow-y-auto">
          {data.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No submissions yet</p>
          ) : (
            data.map((submission) => (
              <div
                key={submission.id}
                className="border border-primary/20 rounded-lg p-4 bg-background/40 hover:bg-background/60 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">
                        {submission.first_name} {submission.last_name}
                      </h4>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        {submission.service_interest}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{submission.email}</p>
                    <p className="text-sm text-muted-foreground mb-2">{submission.phone}</p>
                    <p className="text-sm text-foreground line-clamp-2">{submission.message}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {format(new Date(submission.created_at), "MMM dd, yyyy hh:mm a")}
                    </p>
                  </div>
                  <Button
                    onClick={() => handleDelete(submission.id)}
                    disabled={isDeleting === submission.id}
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:bg-red-500/10 hover:text-red-600 flex-shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
