import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Building, TrendingUp, MapPin, Shield, Users, DollarSign, Award } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Real Estate Investment - OrientHeight Global Solutions",
  description:
    "Discover premium real estate options that secure your residency and grow your investment portfolio in top global destinations.",
}

const realEstatePrograms = [
  {
    country: "Portugal",
    location: "Lisbon & Porto",
    investment: "€280,000+",
    returns: "4-6% annually",
    benefits: ["Golden Visa eligibility", "EU residency rights", "Strong rental yields", "Capital appreciation"],
    image: "/portugal-golden-visa-residency.jpg",
  },
  {
    country: "Greece",
    location: "Athens & Islands",
    investment: "€250,000+",
    returns: "5-8% annually",
    benefits: ["Lowest EU threshold", "Tourism hotspots", "High rental demand", "Mediterranean lifestyle"],
    image: "/greece-golden-visa-residency.jpg",
  },
  {
    country: "Dubai",
    location: "Premium Districts",
    investment: "$200,000+",
    returns: "6-10% annually",
    benefits: ["Tax-free environment", "High rental yields", "Growing expat community", "Strategic location"],
    image: "/placeholder.svg?key=dubai1",
  },
]

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-amber-500/5"></div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-primary/20">
                <Building className="w-4 h-4" />
                Real Estate Investment
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance text-slate-900 leading-tight">
                Premium Real Estate Opportunities
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 mb-12 text-pretty leading-relaxed max-w-3xl mx-auto">
                Discover premium real estate options that not only secure your residency but also grow your investment
                portfolio in top global destinations.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Why Invest in Global Real Estate?</h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Real estate investment through residency programs offers dual benefits: securing your global mobility
                while building wealth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Building,
                  title: "Residency Qualification",
                  description: "Many properties qualify for Golden Visa and residency by investment programs.",
                },
                {
                  icon: TrendingUp,
                  title: "Capital Appreciation",
                  description: "Benefit from long-term property value growth in prime international markets.",
                },
                {
                  icon: DollarSign,
                  title: "Rental Income",
                  description: "Generate steady rental yields from high-demand locations and tourist destinations.",
                },
                {
                  icon: Shield,
                  title: "Asset Protection",
                  description: "Diversify your portfolio with tangible assets in stable, regulated markets.",
                },
                {
                  icon: MapPin,
                  title: "Prime Locations",
                  description: "Access to premium properties in world-class cities and resort destinations.",
                },
                {
                  icon: Users,
                  title: "Family Benefits",
                  description: "Secure residency rights for your entire family through strategic property investment.",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-white border-2 border-slate-200 hover:border-primary hover:shadow-2xl transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 border border-primary/20">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{benefit.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Featured Investment Opportunities</h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Explore our curated selection of premium real estate investments that qualify for residency programs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realEstatePrograms.map((program, index) => (
                <Card
                  key={index}
                  className="bg-white border-2 border-slate-200 hover:border-primary hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                >
                  <CardHeader className="p-0">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={`${program.country} real estate`}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <CardTitle className="text-3xl font-bold text-slate-900">{program.country}</CardTitle>
                      <p className="text-primary font-semibold text-lg mt-2">{program.location}</p>
                      <div className="flex gap-3 mt-4">
                        <Badge className="bg-primary/10 text-primary border border-primary/20 px-4 py-2">
                          From {program.investment}
                        </Badge>
                        <Badge className="bg-green-600/10 text-green-700 border border-green-600/20 px-4 py-2">
                          {program.returns}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <div className="space-y-3 mb-6">
                      {program.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span className="text-slate-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-white to-amber-500/10">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Award className="w-20 h-20 mx-auto mb-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">Ready to Invest in Your Future?</h2>
              <p className="text-xl md:text-2xl mb-12 text-slate-700 leading-relaxed">
                Our real estate experts will help you find the perfect property that meets both your investment goals
                and residency requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
