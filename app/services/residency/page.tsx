import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Home, MapPin, Calendar, DollarSign, Users } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"
import { residencyPrograms } from "@/lib/residency-data"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Residency Programs - OrientHeight Global Solutions",
  description:
    "Secure permanent residency in top destinations through investment programs. Access world-class lifestyle and business benefits.",
}

export default function ResidencyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 px-4 py-2">
                Residency by Investment
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                Secure Your Global <span className="text-primary">Residency</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
                Obtain permanent residency in top destinations through strategic investment programs and unlock a world
                of opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-slate-950 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl"
                >
                  Explore Programs
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-slate-950 font-semibold px-8 py-6 text-lg bg-transparent shadow-lg"
                >
                  Get Free Assessment
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Benefits of <span className="text-primary">Residency Programs</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Residency by investment offers a pathway to permanent residency and eventual citizenship in desirable
                countries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Home,
                  title: "Permanent Residency",
                  description:
                    "Secure long-term residency rights with the ability to live, work, and study in your chosen country.",
                },
                {
                  icon: MapPin,
                  title: "Strategic Location",
                  description:
                    "Access to prime locations with excellent infrastructure, healthcare, and education systems.",
                },
                {
                  icon: Calendar,
                  title: "Path to Citizenship",
                  description:
                    "Most programs offer a clear pathway to full citizenship after meeting residency requirements.",
                },
                {
                  icon: DollarSign,
                  title: "Investment Returns",
                  description: "Many programs involve real estate or business investments that can generate returns.",
                },
                {
                  icon: Users,
                  title: "Family Inclusion",
                  description: "Include your spouse, children, and sometimes parents in your residency application.",
                },
                {
                  icon: CheckCircle,
                  title: "Quality of Life",
                  description:
                    "Access to world-class healthcare, education, and social services in developed countries.",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-slate-50 border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Popular <span className="text-primary">Residency Programs</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Discover our selection of proven residency by investment programs in top global destinations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {residencyPrograms.map((program) => (
                <Card
                  key={program.id}
                  className="bg-white border-slate-200 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 flex flex-col"
                >
                  <CardHeader className="p-4 sm:p-6">
                    <div className="aspect-video rounded-lg overflow-hidden mb-3 sm:mb-4">
                      <Image
                        src={program.image || "/placeholder.svg?height=200&width=400"}
                        alt={`${program.country} residency`}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-bold">{program.country}</CardTitle>
                    <div className="flex gap-2 text-xs sm:text-sm flex-wrap mt-2">
                      <Badge variant="outline" className="text-xs">
                        {program.processingTime}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 flex-1 flex flex-col">
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-muted-foreground">Mobility</p>
                          <p className="text-xs sm:text-sm font-medium break-words">{program.mobility}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-muted-foreground">Investment</p>
                          <p className="text-xs sm:text-sm font-medium break-words">{program.investment}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-muted-foreground">Family</p>
                          <p className="text-xs sm:text-sm font-medium break-words">{program.family}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-muted-foreground">Path to Citizenship</p>
                          <p className="text-xs sm:text-sm font-medium break-words">{program.path}</p>
                        </div>
                      </div>
                    </div>
                    <Link href={`/services/residency/${program.slug}`} className="w-full">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-slate-950 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl">
                        Learn More About {program.country}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
