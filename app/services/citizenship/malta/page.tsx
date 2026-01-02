import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, FileText, Shield, Plane } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MaltaCitizenshipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/malta-citizenship-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">European Union Citizenship</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Malta Citizenship by Investment Program
              </h1>
              <p className="text-xl text-slate-300 mb-8 text-pretty">
                Obtain EU citizenship through Malta's Individual Investor Programme (IIP). Gain access to 184+
                destinations visa-free and enjoy the benefits of European Union membership.
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
                src="/images/malta-citizenship-documents.jpg"
                alt="Malta citizenship documents"
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Malta Citizenship?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Malta offers one of the most prestigious citizenship programs in the world, providing access to the
              European Union and exceptional global mobility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Visa-Free Travel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Access to 184+ destinations worldwide without visa requirements</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">EU Membership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Full rights to live, work, and study anywhere in the European Union</p>
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
                <p className="text-slate-600">Include spouse, children, and dependent parents in your application</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">No Residency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  No requirement to reside in Malta before or after obtaining citizenship
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Investment Requirements</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Choose from flexible investment options designed to meet your needs and timeline.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Standard Route</CardTitle>
                <CardDescription className="text-center text-lg">36-month residency requirement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">€600,000</div>
                  <p className="text-slate-600">Government contribution</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>€600,000 government contribution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>€700,000 property purchase or €16,000/year rental</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>€10,000 charity donation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>36 months residency before citizenship</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardHeader>
                <Badge className="w-fit mx-auto mb-2 bg-primary text-white">Most Popular</Badge>
                <CardTitle className="text-2xl text-center">Exceptional Route</CardTitle>
                <CardDescription className="text-center text-lg">12-month residency requirement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">€750,000</div>
                  <p className="text-slate-600">Government contribution</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>€750,000 government contribution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>€700,000 property purchase or €16,000/year rental</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>€10,000 charity donation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>12 months residency before citizenship</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Application Process</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our streamlined process ensures your application is handled efficiently and professionally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "Free assessment of your eligibility and requirements",
                duration: "1 week",
              },
              {
                step: "2",
                title: "Document Preparation",
                description: "Gather and prepare all required documentation",
                duration: "4-6 weeks",
              },
              {
                step: "3",
                title: "Application Submission",
                description: "Submit complete application to Malta authorities",
                duration: "2 weeks",
              },
              {
                step: "4",
                title: "Citizenship Granted",
                description: "Receive your Malta passport and EU citizenship",
                duration: "12-36 months",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-2">{item.description}</p>
                <Badge variant="outline" className="text-primary border-primary">
                  {item.duration}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Malta Citizenship Journey?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact our experts today for a free consultation and personalized assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              <Link href="/program-comparison">Compare Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
