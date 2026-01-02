"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Users, FileDown, Calendar } from "lucide-react"
import { ContactSubmissionsManager } from "@/components/admin/contact-submissions-manager"
import { NewsletterSubscriptionsManager } from "@/components/admin/newsletter-subscriptions-manager"
import { BrochureLeadsManager } from "@/components/admin/brochure-leads-manager"
import { ConsultationsManager } from "@/components/admin/consultations-manager"

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

interface NewsletterSubscription {
  id: string
  email: string
  created_at: string
}

interface BrochureLead {
  id: string
  full_name: string
  email: string
  phone: string
  brochure_type: "citizenship" | "residency"
  country: string | null
  created_at: string
}

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

interface DashboardTabsProps {
  contacts: ContactSubmission[]
  subscribers: NewsletterSubscription[]
  brochureLeads: BrochureLead[]
  consultations: Consultation[] // Added consultations prop
}

export function DashboardTabs({ contacts, subscribers, brochureLeads, consultations }: DashboardTabsProps) {
  const [activeTab, setActiveTab] = useState("contacts")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-card/50 border border-primary/20">
        <TabsTrigger value="contacts" className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Contact Submissions
        </TabsTrigger>
        <TabsTrigger value="subscribers" className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          Newsletter Subscribers
        </TabsTrigger>
        <TabsTrigger value="brochure-leads" className="flex items-center gap-2">
          <FileDown className="w-4 h-4" />
          Brochure Leads
        </TabsTrigger>
        <TabsTrigger value="consultations" className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Consultations
        </TabsTrigger>
      </TabsList>

      <TabsContent value="contacts" className="mt-6">
        <ContactSubmissionsManager initialData={contacts} />
      </TabsContent>

      <TabsContent value="subscribers" className="mt-6">
        <NewsletterSubscriptionsManager initialData={subscribers} />
      </TabsContent>

      <TabsContent value="brochure-leads" className="mt-6">
        <BrochureLeadsManager initialData={brochureLeads} />
      </TabsContent>

      <TabsContent value="consultations" className="mt-6">
        <ConsultationsManager initialData={consultations} />
      </TabsContent>
    </Tabs>
  )
}
