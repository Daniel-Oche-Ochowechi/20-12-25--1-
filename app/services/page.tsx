import { Header } from "@/components/header"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services - OrientHeight Global Citizenship & Investment",
  description:
    "Explore our comprehensive range of services including second citizenship, residency programs, real estate investment, and tax optimization solutions.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ServicesSection />
        <ProcessSection />
      </div>
      <Footer />
    </main>
  )
}
