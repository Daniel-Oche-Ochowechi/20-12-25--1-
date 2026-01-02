import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { TeamSection } from "@/components/team-section"
import { ProcessSection } from "@/components/process-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ExpertsSection } from "@/components/experts-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ProcessSection />
      <ComparisonSection />
      <ExpertsSection />
      <TestimonialsSection />
      <StatsSection />
      <BlogSection />
      <Footer />
      <ScrollToTop />
      <WhatsAppWidget />
    </main>
  )
}
