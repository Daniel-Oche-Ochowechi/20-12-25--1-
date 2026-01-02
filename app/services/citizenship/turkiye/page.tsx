import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, DollarSign, Plane } from "lucide-react"
import Image from "next/image"

export default function TurkiyeCitizenshipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/turkiye-citizenship-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Fast-Track Citizenship</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Türkiye Citizenship by Investment Program
              </h1>
              <p className="text-xl text-slate-300 mb-8 text-pretty">
                Obtain Turkish citizenship in as little as 3-6 months through real estate investment. Bridge between
                Europe and Asia with visa-free access to 110+ destinations.
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
                src="/images/turkiye-citizenship-documents.jpg"
                alt="Türkiye citizenship documents"
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Türkiye Citizenship?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Türkiye offers one of the fastest and most affordable citizenship programs with excellent investment
              opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Fast Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Citizenship in 3-6 months with streamlined application process</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Affordable Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Starting from $400,000 USD real estate investment</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Family Inclusion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Include spouse and children under 18 in your application</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Visa-Free Travel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Access to 110+ destinations without visa requirements</p>
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
              Choose from various investment routes to obtain your Turkish citizenship.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary">
              <CardHeader>
                <Badge className="w-fit mx-auto mb-2 bg-primary text-white">Most Popular</Badge>
                <CardTitle className="text-2xl text-center">Real Estate</CardTitle>
                <CardDescription className="text-center text-lg">Property investment route</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$400,000</div>
                  <p className="text-slate-600">Minimum investment</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Purchase property worth $400,000+</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Hold for minimum 3 years</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Rental income potential</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Capital appreciation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Bank Deposit</CardTitle>
                <CardDescription className="text-center text-lg">Fixed deposit route</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$500,000</div>
                  <p className="text-slate-600">Minimum deposit</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Deposit $500,000 in Turkish bank</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Hold for minimum 3 years</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Earn interest on deposit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Lower risk option</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Business Investment</CardTitle>
                <CardDescription className="text-center text-lg">Job creation route</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$500,000</div>
                  <p className="text-slate-600">+ 50 jobs</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Invest $500,000 in business</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Create 50+ jobs for Turkish citizens</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Active business operations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Economic contribution</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
