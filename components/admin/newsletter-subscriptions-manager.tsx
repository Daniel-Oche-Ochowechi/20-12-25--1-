"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Search, Mail, Copy, Download } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { format } from "date-fns"

interface NewsletterSubscription {
  id: string
  email: string
  created_at: string
}

interface NewsletterSubscriptionsManagerProps {
  initialData: NewsletterSubscription[]
}

export function NewsletterSubscriptionsManager({ initialData }: NewsletterSubscriptionsManagerProps) {
  const [data, setData] = useState<NewsletterSubscription[]>(initialData)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const supabase = createClient()

  const filteredData = useMemo(() => {
    return data.filter((item) => item.email.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [data, searchQuery])

  const handleDelete = async (id: string) => {
    setIsDeleting(id)
    try {
      await supabase.from("newsletter_subscriptions").delete().eq("id", id)
      setData(data.filter((item) => item.id !== id))
    } catch (error) {
      console.error("Error deleting subscription:", error)
    } finally {
      setIsDeleting(null)
    }
  }

  const handleBulkDelete = async () => {
    if (confirm(`Delete ${filteredData.length} subscription(s)?`)) {
      setIsDeleting("bulk")
      try {
        const ids = filteredData.map((item) => item.id)
        await supabase.from("newsletter_subscriptions").delete().in("id", ids)
        setData(data.filter((item) => !ids.includes(item.id)))
      } catch (error) {
        console.error("Error bulk deleting:", error)
      } finally {
        setIsDeleting(null)
      }
    }
  }

  const handleExportCSV = () => {
    const csv = [
      "Email,Subscribed Date",
      ...filteredData.map((item) => `${item.email},${format(new Date(item.created_at), "yyyy-MM-dd HH:mm:ss")}`),
    ].join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `newsletter-subscribers-${format(new Date(), "yyyy-MM-dd")}.csv`
    a.click()
  }

  const handleCopyAllEmails = () => {
    const emails = filteredData.map((item) => item.email).join("\n")
    navigator.clipboard.writeText(emails)
    alert("Emails copied to clipboard!")
  }

  return (
    <Card className="bg-card/80 backdrop-blur-md border-primary/20">
      <CardHeader>
        <div className="flex flex-col gap-4">
          <CardTitle className="text-lg font-semibold">Newsletter Subscribers</CardTitle>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/60 border-primary/20"
              />
            </div>

            {filteredData.length > 0 && (
              <div className="flex gap-2">
                <Button onClick={handleCopyAllEmails} variant="outline" size="sm" className="text-xs bg-transparent">
                  <Copy className="w-4 h-4 mr-1" />
                  Copy All
                </Button>

                <Button onClick={handleExportCSV} variant="outline" size="sm" className="text-xs bg-transparent">
                  <Download className="w-4 h-4 mr-1" />
                  Export
                </Button>

                <Button
                  onClick={handleBulkDelete}
                  disabled={isDeleting === "bulk"}
                  variant="destructive"
                  size="sm"
                  className="text-xs"
                >
                  Delete All ({filteredData.length})
                </Button>
              </div>
            )}
          </div>

          <p className="text-xs text-muted-foreground">
            Showing {filteredData.length} of {data.length} subscribers
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-2 max-h-[600px] overflow-y-auto">
          {filteredData.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No subscribers found</p>
          ) : (
            filteredData.map((subscription) => (
              <div
                key={subscription.id}
                className="border border-primary/20 rounded-lg p-3 bg-background/40 hover:bg-background/60 transition-colors flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{subscription.email}</p>
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(subscription.created_at), "MMM dd, yyyy hh:mm a")}
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() => handleDelete(subscription.id)}
                  disabled={isDeleting === subscription.id}
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:bg-red-500/10 hover:text-red-600 flex-shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
