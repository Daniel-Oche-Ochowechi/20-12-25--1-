import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, MapPin, Users, DollarSign, ArrowRight, MessageCircle, Globe, Home, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { citizenshipPrograms } from "@/lib/citizenship-data"
import { BrochureDownloadForm } from "@/components/brochure-download-form"
import { ScheduleConsultationForm } from "@/components/schedule-consultation-form"
import { notFound } from "next/navigation"

export default async function CitizenshipProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // If slug is "view-all", redirect to the proper view-all page
  if (slug === "view-all") {
    // This shouldn't happen due to route priority, but handle it gracefully
    console.log("[v0] Detected view-all slug in dynamic route, this indicates a routing issue")
  }

  console.log("[v0] Searching for citizenship program with slug:", slug)
  console.log(
    "[v0] Available slugs:",
    citizenshipPrograms.map((p) => p.slug),
  )

  const program = citizenshipPrograms.find((p) => p.slug === slug)

  if (!program) {
    console.log("[v0] Program not found for slug:", slug)
    notFound()
  }

  const whatsappNumber = "2347085003333"
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${program.country} Citizenship by Investment program. Can you provide more information?`,
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const citizenshipBrochureUrl = program.brochureUrl

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Citizenship by Investment</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">{program.country}</h1>
              <p className="text-xl mb-8">
                Secure your second citizenship with one of the world's most prestigious investment programs.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-medium">{program.visaFree}</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="font-medium">From {program.minInvestment}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start Your Application
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={`${program.country} citizenship`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2">
              <TabsTrigger value="overview" className="py-3">
                Overview
              </TabsTrigger>
              <TabsTrigger value="investment" className="py-3">
                Investment Options
              </TabsTrigger>
              <TabsTrigger value="benefits" className="py-3">
                Benefits
              </TabsTrigger>
              <TabsTrigger value="process" className="py-3">
                Application Process
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Program Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Global Mobility</h4>
                          <p>{program.visaFree}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <DollarSign className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Minimum Investment</h4>
                          <p>{program.minInvestment}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Family Inclusion</h4>
                          <p>Spouse and dependent children included</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="investment" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {program.investment.realEstate && (
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <Home className="w-10 h-10 text-primary mb-2" />
                      <CardTitle>Real Estate Investment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-primary mb-4">{program.investment.realEstate}</p>
                      <p>Invest in approved real estate projects and secure your citizenship.</p>
                    </CardContent>
                  </Card>
                )}
                {program.investment.donation && (
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <DollarSign className="w-10 h-10 text-primary mb-2" />
                      <CardTitle>Government Donation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-primary mb-4">{program.investment.donation}</p>
                      <p>Make a non-refundable contribution to the national development fund.</p>
                    </CardContent>
                  </Card>
                )}
                {program.investment.business && (
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <Briefcase className="w-10 h-10 text-primary mb-2" />
                      <CardTitle>Business Investment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-primary mb-4">{program.investment.business}</p>
                      <p>Invest in an approved business venture and create local employment.</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Application Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        step: 1,
                        title: "Initial Consultation",
                        description: "Meet with our experts to discuss your eligibility and investment options.",
                      },
                      {
                        step: 2,
                        title: "Document Preparation",
                        description: "Gather and prepare all required documents with our guidance.",
                      },
                      {
                        step: 3,
                        title: "Application Submission",
                        description: "Submit your application to the citizenship unit for processing.",
                      },
                      {
                        step: 4,
                        title: "Due Diligence",
                        description: "Undergo background checks and due diligence procedures.",
                      },
                      {
                        step: 5,
                        title: "Investment & Approval",
                        description: "Complete your investment and receive citizenship approval.",
                      },
                      {
                        step: 6,
                        title: "Passport Issuance",
                        description: "Receive your new passport and citizenship certificate.",
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Forms Section */}
          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            <BrochureDownloadForm country={program.country} type="citizenship" brochureUrl={citizenshipBrochureUrl} />
            <ScheduleConsultationForm country={program.country} type="citizenship" />
          </div>

          {/* CTA Section */}
          <Card className="mt-12 border-0 shadow-xl bg-gradient-to-br from-primary/10 to-accent/10">
            <CardContent className="p-8 lg:p-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Contact our experts today to begin your citizenship journey. We'll guide you through every step of the
                process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat with Us on WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Link href="/contact">
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return citizenshipPrograms.map((program) => ({
    slug: program.slug,
  }))
}
