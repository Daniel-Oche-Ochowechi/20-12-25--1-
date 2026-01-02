import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, MapPin, Users, DollarSign, ArrowRight, Home, Sparkles } from "lucide-react"
import Link from "next/link"
import { residencyPrograms } from "@/lib/residency-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Residency Programs - OrientHeight Global Solutions",
  description:
    "Explore all our residency by investment programs. Compare options and find the perfect residency solution for your global mobility needs.",
}

export default function AllResidencyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('/luxury-coastal-villa-with-ocean-view-and-modern-ar.jpg')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-5 py-2.5 text-base font-semibold">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Global Residency Solutions
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-white">Residency by Investment Programs</h1>
          <p className="text-xl lg:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Compare and choose from our comprehensive selection of residency by investment programs. Each program offers
            unique pathways to permanent residency and eventual citizenship.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-slate-950 font-semibold shadow-xl hover:shadow-2xl transition-all px-8 py-6 text-lg"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/program-comparison">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-slate-950 font-semibold bg-transparent shadow-xl px-8 py-6 text-lg"
              >
                Compare All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
              Available <span className="text-primary">Residency Programs</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive selection of residency by investment programs from around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {residencyPrograms.map((program) => (
              <Card
                key={program.id}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-slate-50 group overflow-hidden hover:-translate-y-2"
              >
                <CardHeader className="pb-4 p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-4xl">
                        {program.flag}
                      </div>
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-2xl font-bold mb-2 break-words">{program.country}</CardTitle>
                        <Badge
                          variant="outline"
                          className="text-xs bg-primary/10 border-primary/30 text-primary font-medium"
                        >
                          {program.region}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl lg:text-3xl font-bold text-primary break-words">
                        {program.investment.split(" ")[0]}
                      </div>
                      <div className="text-sm text-muted-foreground">from</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 p-6 pt-0">
                  {/* Key Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                      <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold break-words">{program.processingTime}</div>
                      <div className="text-xs text-muted-foreground">Processing</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                      <MapPin className="w-6 h-6 text-accent mx-auto mb-2" />
                      <div className="text-sm font-semibold break-words">{program.mobility.split(" ")[0]}</div>
                      <div className="text-xs text-muted-foreground">Mobility</div>
                    </div>
                  </div>

                  {/* Detailed Information */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted-foreground mb-1">Investment Required</p>
                        <p className="text-sm font-medium break-words">{program.investment}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted-foreground mb-1">Family Inclusion</p>
                        <p className="text-sm font-medium break-words">{program.family}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <Home className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted-foreground mb-1">Path to Citizenship</p>
                        <p className="text-sm font-medium break-words">{program.path}</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {program.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="break-words">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Link href={`/services/residency/${program.slug}`} className="flex-1">
                      <Button className="w-full bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/contact" className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Need Help Choosing?</h2>
          <p className="text-xl lg:text-2xl text-slate-200 mb-12 leading-relaxed">
            Our experts can help you compare programs and find the perfect residency solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-slate-950 font-semibold shadow-xl hover:shadow-2xl transition-all px-8 py-6 text-lg"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/program-comparison">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-slate-950 font-semibold bg-transparent shadow-xl px-8 py-6 text-lg"
              >
                View Detailed Comparison
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
