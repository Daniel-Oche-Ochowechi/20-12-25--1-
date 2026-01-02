import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, DollarSign, Globe, Users, Plane, Shield, Building, AlertCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AntiguaCitizenship() {
  const benefits = [
    "Enhanced global mobility and international travel opportunities",
    "Minimal residency requirement - only 5 days within first 5 years",
    "Dual citizenship allowed with no limitations",
    "No income, capital gains, inheritance, or foreign income tax",
    "Established program with professional processing standards",
    "Include spouse, children under 30, parents over 55, and unmarried siblings",
    "Lifetime citizenship with no renewal required",
    "Access to reduced tuition rates at UK universities",
    "Becoming a citizen does not automatically make you a tax resident",
  ]

  const requirements = [
    "Must be over 18 years old",
    "Clean criminal background (no custodial sentence over 6 months)",
    "Proof of funds and source of wealth",
    "Medical certificate showing good health",
    "Due diligence clearance",
    "Investment commitment",
    "Must spend at least 5 days in Antigua within first 5 years",
  ]

  const investmentOptions = [
    {
      title: "National Development Fund",
      amount: "$230,000",
      description: "Non-refundable contribution to government fund",
      family: "Minimum contribution for single applicant or family up to 4",
    },
    {
      title: "Real Estate Investment",
      amount: "$300,000",
      description: "Approved real estate project with 5-year holding period",
      family: "Same property can include family members",
    },
    {
      title: "University of West Indies Fund",
      amount: "$260,000",
      description: "Non-refundable contribution to UWI development",
      family: "Supports education and includes one free UWI scholarship",
    },
  ]

  const restrictedCountries = [
    "Afghanistan",
    "Belarus",
    "North Korea",
    "Russia",
    "Somalia",
    "Sudan",
    "Ukraine",
    "Yemen",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary text-slate-900 hover:bg-primary/90">Caribbean Citizenship</Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                  Antigua & Barbuda <span className="text-primary">Citizenship</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 text-pretty leading-relaxed">
                  The land of 365 beaches. Obtain Caribbean citizenship with enhanced global mobility, minimal residency
                  requirements, and comprehensive tax benefits since 2013.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-slate-900 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      Get Free Assessment
                    </Button>
                  </Link>
                  <Link href="/program-comparison">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-6 text-lg rounded-xl border-2 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                    >
                      Compare Programs
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/antigua-barbuda-flag-caribbean.jpg"
                  alt="Antigua and Barbuda Citizenship Program"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Program Highlights</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Enhance your global opportunities with one of the Caribbean's premier citizenship programs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-slate-200">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Global Mobility</h3>
                <p className="text-slate-600">International travel opportunities</p>
              </Card>
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-slate-200">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">$230,000</h3>
                <p className="text-slate-600">Minimum investment</p>
              </Card>
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-slate-200">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">5 Days in 5 Years</h3>
                <p className="text-slate-600">Minimal residency requirement</p>
              </Card>
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-slate-200">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Since 2013</h3>
                <p className="text-slate-600">Established program</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Program Overview Section */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Program Overview</h2>
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  In the heart of the Eastern Caribbean's Leeward Islands, Antigua and Barbuda gained independence from
                  Britain in 1981. Known as 'the land of 365 beaches,' it's a favored tourist destination with main
                  target markets being the US, Canada, and Europe. Tourism is the dominant income source, making up
                  about 60% of their GDP, and the nation is home to a campus of the prestigious University of West
                  Indies.
                </p>
                <p>
                  The Citizenship-by-Investment Programme was introduced in 2013, offering foreign investors and their
                  families a pathway to obtain citizenship in this beautiful Eastern Caribbean nation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Options */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Investment Options</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose from three flexible investment routes to obtain your Antigua & Barbuda citizenship.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {investmentOptions.map((option, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-white"
                >
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {index === 0 && <Shield className="w-8 h-8 text-primary" />}
                      {index === 1 && <Building className="w-8 h-8 text-primary" />}
                      {index === 2 && <Globe className="w-8 h-8 text-primary" />}
                    </div>
                    <CardTitle className="text-2xl mb-2 text-slate-900">{option.title}</CardTitle>
                    <div className="text-4xl font-bold text-primary mb-4">{option.amount}</div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 mb-4">{option.description}</p>
                    <p className="text-sm text-slate-500 font-medium">{option.family}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Requirements */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Program Benefits</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                      <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Requirements</h2>
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                      <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-amber-200 bg-amber-50/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-8 h-8 text-amber-600" />
                    <CardTitle className="text-2xl text-slate-900">Restricted Nationalities</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    Nationals from the following countries are restricted from applying:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {restrictedCountries.map((country) => (
                      <Badge key={country} variant="outline" className="text-slate-700 border-amber-300 bg-white">
                        {country}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 space-y-3 text-sm text-slate-600">
                    <p>
                      <strong className="text-slate-900">Exceptions:</strong> May apply if migrated before the age of
                      majority or maintained permanent residency elsewhere for 10+ years with no economic ties to the
                      restricted country.
                    </p>
                    <p>
                      <strong className="text-slate-900">Strict Bar:</strong> The above exception does NOT apply to
                      Russian, Belarusian, and Ukrainian nationals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Application?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation with our citizenship experts and begin your journey to Antigua & Barbuda
              citizenship today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-slate-900 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/resources">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-xl border-2 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  Download Brochure
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
