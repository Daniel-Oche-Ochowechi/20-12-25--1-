import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - OrientHeight Global Citizenship Solutions",
  description:
    "Learn about OrientHeight's expertise in global citizenship, investment migration, and residency programs. Meet our experienced team of professionals.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <AboutSection />
        <StatsSection />
        <TeamSection />
      </div>
      <Footer />
    </main>
  )
}
