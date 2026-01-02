import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, MapPin, Users, DollarSign, ArrowRight, MessageCircle, Globe, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { residencyPrograms } from "@/lib/residency-data"
import { BrochureDownloadForm } from "@/components/brochure-download-form"
import { ScheduleConsultationForm } from "@/components/schedule-consultation-form"
import { notFound } from "next/navigation"

export const dynamicParams = true

export async function generateStaticParams() {
  return residencyPrograms.map((program) => ({
    slug: program.slug,
  }))
}

export default async function ResidencyProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const program = residencyPrograms.find((p) => p.slug === slug)

  if (!program) {
    notFound()
  }

  const whatsappNumber = "2347085003333"
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${program.country} Residency by Investment program. Can you provide more information?`,
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const residencyBrochureUrl = program.brochureUrl

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
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Residency by Investment</Badge>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-5xl">{program.flag}</div>
                <h1 className="text-4xl lg:text-5xl font-bold">{program.country}</h1>
              </div>
              <p className="text-xl mb-8">
                Secure your residency with one of the world's most attractive investment programs.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-medium">{program.mobility.split(" ")[0]}</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium">{program.processingTime}</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="font-medium">{program.investment.split(" ")[0]}</span>
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                {program.image !== "/placeholder.svg" ? (
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={`${program.country} residency`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-9xl">{program.flag}</div>
                )}
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
                Investment Details
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
                          <h4 className="font-semibold mb-1">Mobility</h4>
                          <p>{program.mobility}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Processing Time</h4>
                          <p>{program.processingTime}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Family Inclusion</h4>
                          <p>{program.family}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <DollarSign className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Investment Required</h4>
                          <p>{program.investment}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Home className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Path to Citizenship</h4>
                          <p>{program.path}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="investment" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Investment Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                      <DollarSign className="w-10 h-10 text-primary mb-4" />
                      <h4 className="font-semibold text-lg mb-2">Investment Amount</h4>
                      <p>{program.investment}</p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                      <Users className="w-10 h-10 text-accent mb-4" />
                      <h4 className="font-semibold text-lg mb-2">Family Members</h4>
                      <p>{program.family}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                        description: "Submit your application to the immigration authorities for processing.",
                      },
                      {
                        step: 4,
                        title: "Investment Completion",
                        description: "Complete your investment as per program requirements.",
                      },
                      {
                        step: 5,
                        title: "Approval & Residency",
                        description: "Receive approval and obtain your residency permit.",
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

          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            <BrochureDownloadForm country={program.country} type="residency" brochureUrl={residencyBrochureUrl} />
            <ScheduleConsultationForm country={program.country} type="residency" />
          </div>

          {/* CTA Section */}
          <Card className="mt-12 border-0 shadow-xl bg-gradient-to-br from-primary/10 to-accent/10">
            <CardContent className="p-8 lg:p-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Contact our experts today to begin your residency journey. We'll guide you through every step of the
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
