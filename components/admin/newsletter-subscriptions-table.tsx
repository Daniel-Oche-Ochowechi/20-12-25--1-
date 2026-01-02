"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2, Users } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useState } from "react"
import { format } from "date-fns"

interface NewsletterSubscription {
  id: string
  email: string
  created_at: string
}

interface NewsletterSubscriptionsTableProps {
  data: NewsletterSubscription[]
}

export function NewsletterSubscriptionsTable({ data: initialData }: NewsletterSubscriptionsTableProps) {
  const [data, setData] = useState<NewsletterSubscription[]>(initialData)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const supabase = createClient()

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

  return (
    <Card className="bg-card/80 backdrop-blur-md border-primary/20">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          Newsletter Subscribers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 max-h-[500px] overflow-y-auto">
          {data.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No subscribers yet</p>
          ) : (
            data.map((subscription) => (
              <div
                key={subscription.id}
                className="border border-primary/20 rounded-lg p-3 bg-background/40 hover:bg-background/60 transition-colors flex items-center justify-between"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{subscription.email}</p>
                  <p className="text-xs text-muted-foreground">
                    {format(new Date(subscription.created_at), "MMM dd, yyyy")}
                  </p>
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
