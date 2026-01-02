import { Header } from "@/components/header"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team - OrientHeight Global Citizenship Experts",
  description:
    "Meet the experienced professionals at OrientHeight who specialize in global citizenship, investment migration, and residency solutions.",
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Team Hero Section */}
        <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight">
                Meet Our <span className="text-primary">Expert Team</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
                Our experienced professionals are dedicated to helping you achieve your global mobility goals with
                personalized service, expert guidance, and unwavering commitment to your success.
              </p>
            </div>
          </div>
        </section>
        <TeamSection />
      </div>
      <Footer />
    </main>
  )
}
