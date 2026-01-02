import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MapPin, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { citizenshipPrograms } from "@/lib/citizenship-data"

export default function AllCitizenshipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('/world-map-citizenship.jpg')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-5 py-2.5 text-base font-semibold">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Global Citizenship Solutions
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-white">Citizenship by Investment Programs</h1>
          <p className="text-xl lg:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Compare and choose from our carefully selected citizenship by investment programs. Each program offers
            unique benefits and investment opportunities tailored to your needs.
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
              Available <span className="text-primary">Citizenship Programs</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive selection of citizenship by investment programs from around the world.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {citizenshipPrograms.map((program) => (
              <Card
                key={program.id}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-slate-50 group overflow-hidden hover:-translate-y-2"
              >
                <CardHeader className="pb-5 p-8">
                  <div className="aspect-video rounded-xl overflow-hidden mb-6 relative shadow-lg">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={`${program.country} citizenship`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  </div>
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <CardTitle className="text-3xl font-bold text-slate-900">{program.country}</CardTitle>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-primary">{program.minInvestment}</div>
                      <div className="text-sm text-slate-600 font-medium">from</div>
                    </div>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary border-primary/30 font-semibold px-3 py-1.5"
                    >
                      <MapPin className="w-4 h-4 mr-1.5" />
                      {program.visaFree}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8 p-8 pt-0">
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg text-slate-900">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 pt-3">
                    <Button
                      asChild
                      className="flex-1 bg-primary hover:bg-primary/90 text-slate-950 font-semibold shadow-lg hover:shadow-xl transition-all py-6"
                    >
                      <Link href={`/services/citizenship/${program.slug}`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-slate-950 font-semibold py-6"
                    >
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">Need Help Choosing?</h2>
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed">
            Our experts can help you compare programs and find the perfect citizenship solution for your needs.
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
