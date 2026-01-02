import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Globe, Shield, Clock, Users, TrendingUp } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"
import { citizenshipPrograms } from "@/lib/citizenship-data"

export const metadata: Metadata = {
  title: "Second Citizenship Programs - OrientHeight Global Solutions",
  description:
    "Secure second citizenship through investment programs. Gain global mobility, tax efficiency, and generational freedom for your family.",
}

export default function CitizenshipPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image src="/images/orientheight-passport.jpg" alt="Citizenship Documents" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 px-4 py-2">
                Second Citizenship Programs
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                Unlock Global <span className="text-primary">Freedom</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
                Gain second citizenship through investment and secure visa-free travel, tax efficiency, and generational
                wealth for your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-slate-950 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-slate-950 font-semibold px-8 py-6 text-lg bg-transparent shadow-lg"
                >
                  Download Program Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Why Choose <span className="text-primary">Second Citizenship</span>?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Second citizenship provides unparalleled benefits for global mobility, business opportunities, and
                family security.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Global Mobility",
                  description:
                    "Visa-free travel to 140+ countries worldwide, opening doors to business and leisure opportunities.",
                },
                {
                  icon: Shield,
                  title: "Security & Stability",
                  description: "Political and economic stability with a backup plan for uncertain times.",
                },
                {
                  icon: TrendingUp,
                  title: "Tax Optimization",
                  description: "Access to favorable tax jurisdictions and international tax planning opportunities.",
                },
                {
                  icon: Users,
                  title: "Family Benefits",
                  description: "Include spouse, children, and sometimes parents in your citizenship application.",
                },
                {
                  icon: Clock,
                  title: "Fast Processing",
                  description: "Obtain citizenship in as little as 3-6 months through established investment programs.",
                },
                {
                  icon: CheckCircle,
                  title: "No Residency Required",
                  description: "Most programs don't require you to live in the country to maintain citizenship.",
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

        {/* Programs Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Popular <span className="text-primary">Citizenship Programs</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Choose from our carefully selected citizenship by investment programs, each offering unique advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {citizenshipPrograms.map((program, index) => (
                <Card
                  key={index}
                  className="bg-white border-slate-200 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <CardHeader className="p-6">
                    <div className="aspect-video rounded-xl overflow-hidden mb-5 shadow-lg">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={`${program.country} citizenship`}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 mb-3">{program.country}</CardTitle>
                    <div className="flex gap-3 text-sm flex-wrap">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
                        From {program.minInvestment}
                      </Badge>
                      <Badge variant="outline" className="border-slate-300 text-slate-700 px-3 py-1">
                        {program.processingTime}
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/30 px-3 py-1">
                        {program.visaFree}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="space-y-3 mb-6">
                      {program.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600 leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-slate-950 font-semibold shadow-md hover:shadow-lg py-6">
                      Learn More About {program.country}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-4 lg:px-6">
            <Card className="bg-slate-800/50 backdrop-blur-xl border-slate-700 shadow-2xl">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Start Your <span className="text-primary">Citizenship Journey</span>?
                </h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Our expert team will guide you through every step of the process, from initial consultation to
                  passport delivery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-slate-950 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl"
                  >
                    Schedule Free Consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-slate-950 font-semibold px-8 py-6 text-lg bg-transparent shadow-lg"
                  >
                    Download Comparison Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
