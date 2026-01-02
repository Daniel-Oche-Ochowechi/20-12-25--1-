import { Header } from "@/components/header"
import { ProcessSection } from "@/components/process-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Process - OrientHeight Citizenship & Investment Journey",
  description:
    "Discover our streamlined process for obtaining global citizenship, residency, and investment opportunities. Step-by-step guidance from consultation to completion.",
}

export default function ProcessPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Process Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Our <span className="text-primary">Process</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                We've streamlined the complex world of global citizenship into a clear, step-by-step process that
                ensures your success every step of the way.
              </p>
            </div>
          </div>
        </section>
        <ProcessSection />
      </div>
      <Footer />
    </main>
  )
}
