import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, FileText, Shield, Plane } from "lucide-react"
import Image from "next/image"

export default function StKittsCitizenshipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/stkitts-citizenship-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Oldest CBI Program - Since 1984
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                St. Kitts & Nevis Citizenship by Investment
              </h1>
              <p className="text-xl text-slate-300 mb-8 text-pretty">
                The world's first and most established citizenship by investment program. Experience enhanced global
                mobility and international opportunities with no residency requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Your Application
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/stkitts-citizenship-documents.jpg"
                alt="St. Kitts citizenship documents"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose St. Kitts & Nevis?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The most trusted and established citizenship by investment program with over 40 years of experience since
              1984.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-slate-900">Platinum Standard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">World's first and most respected CBI program established in 1984</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-slate-900">Global Mobility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Enhanced international travel and business opportunities worldwide</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-slate-900">Extensive Family Inclusion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Include spouse, children up to 30, parents/grandparents 65+, siblings under 30
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-slate-900">Zero Tax Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">No personal income, gift, inheritance, or net worth tax</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Investment Options</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Choose from multiple investment routes to obtain your St. Kitts & Nevis citizenship.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-primary bg-white">
              <CardHeader>
                <Badge className="w-fit mx-auto mb-2 bg-primary text-white">Most Popular</Badge>
                <CardTitle className="text-2xl text-center text-slate-900">
                  Sustainable Island State Contribution (SISC)
                </CardTitle>
                <CardDescription className="text-center text-lg text-slate-600">
                  Government fund contribution
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$250,000</div>
                  <p className="text-slate-600">Single applicant</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">$250,000 for single applicant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">+$25,000 per dependent under 18</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">+$50,000 per dependent over 18</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Non-refundable contribution</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-slate-900">Real Estate Investment</CardTitle>
                <CardDescription className="text-center text-lg text-slate-600">
                  Approved development projects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$400,000</div>
                  <p className="text-slate-600">Minimum investment</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">$400,000 condominium or approved project</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">$800,000 single-family private dwelling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Hold for minimum 7 years</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Potential rental income & resale after holding period</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-white lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-slate-900">Approved Public Benefit Project</CardTitle>
                <CardDescription className="text-center text-lg text-slate-600">
                  Support national development initiatives
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$250,000</div>
                  <p className="text-slate-600">Starting contribution</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Contribute to government-approved projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Support national infrastructure development</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900">Additional Program Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">International travel opportunities for business and leisure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Citizenship transferable to descendants for life</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Free tuition at University of the West Indies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Favorable study conditions at UK institutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">No limitations on dual citizenship</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Established program with professional processing standards</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
