import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Globe, Shield, Users, DollarSign, FileText, Calendar, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MaltaLearnMorePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">European Union Citizenship</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Malta Citizenship by Investment</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Gain EU citizenship through Malta's exceptional program, offering access to all 27 EU member states and
              visa-free travel to 180+ destinations worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold"
                >
                  Start Your Application
                </Button>
              </Link>
              <Link href="/program-comparison">
                <Button variant="outline" size="lg" className="px-8 py-4 rounded-xl font-semibold bg-transparent">
                  Compare Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Program Overview</h2>
              <p className="text-muted-foreground mb-6 text-pretty">
                Malta's Citizenship by Investment Program offers a unique pathway to European Union citizenship. As the
                only program providing direct access to EU citizenship, it combines rigorous due diligence with
                exceptional benefits for qualified investors.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">EU Citizenship</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-sm">180+ Visa-Free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm">Family Included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-5 h-5 text-primary" />
                  <span className="text-sm">Residency Required</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/luxury-coastal-villa-with-ocean-view-and-modern-ar.jpg"
                alt="Malta coastline"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Requirements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment Requirements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Malta's program requires a combination of investments including contribution, real estate, and government
              bonds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <DollarSign className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Government Contribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">€650,000</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Non-refundable contribution to the National Development and Social Fund.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Main applicant: €650,000</li>
                  <li>• Spouse: €25,000</li>
                  <li>• Minor children: €25,000 each</li>
                  <li>• Other dependents: €50,000 each</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Building className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Real Estate Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">€350,000</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Purchase or lease residential property in Malta for minimum period.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Purchase: €350,000 minimum</li>
                  <li>• Lease: €16,000/year minimum</li>
                  <li>• 5-year holding period</li>
                  <li>• Must be primary residence</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <FileText className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Government Bonds</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">€150,000</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Investment in approved government bonds or securities.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 5-year holding period</li>
                  <li>• Government-approved securities</li>
                  <li>• Interest earnings allowed</li>
                  <li>• Refundable after 5 years</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-xl">Total Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">€1,150,000+</div>
                <p className="text-sm text-muted-foreground">
                  Minimum total investment for single applicant (excluding due diligence and processing fees)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exceptional Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Malta citizenship provides unparalleled access to European opportunities and global mobility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">EU Citizenship</h3>
              <p className="text-muted-foreground text-pretty">
                Full European Union citizenship with right to live, work, and study in all 27 EU member states.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visa-Free Travel</h3>
              <p className="text-muted-foreground text-pretty">
                Access to 180+ destinations including USA, Canada, Australia, and all EU countries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Inclusion</h3>
              <p className="text-muted-foreground text-pretty">
                Include spouse, children, parents, and grandparents in your citizenship application.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tax Advantages</h3>
              <p className="text-muted-foreground text-pretty">
                Favorable tax regime for non-domiciled residents and various tax planning opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Opportunities</h3>
              <p className="text-muted-foreground text-pretty">
                Access to EU single market and Malta's strategic location for business expansion.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dual Citizenship</h3>
              <p className="text-muted-foreground text-pretty">
                Malta allows dual citizenship with no requirement to renounce existing nationality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Residency Requirements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Residency Requirements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Malta requires genuine residence before citizenship can be granted, ensuring program integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>12-Month Path</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-4">€750,000</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Accelerated path with higher contribution and 12-month residency requirement.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 12 months continuous residence</li>
                  <li>• Higher government contribution</li>
                  <li>• Faster processing timeline</li>
                  <li>• Same investment requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>36-Month Path</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-4">€600,000</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Standard path with lower contribution and 36-month residency requirement.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 36 months continuous residence</li>
                  <li>• Standard government contribution</li>
                  <li>• More flexible timeline</li>
                  <li>• Same investment requirements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Application Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our comprehensive process ensures successful navigation of Malta's rigorous citizenship requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Eligibility Assessment & Strategy</h3>
                  <p className="text-muted-foreground text-pretty">
                    Comprehensive evaluation of eligibility, investment capacity, and development of personalized
                    citizenship strategy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Residency Establishment</h3>
                  <p className="text-muted-foreground text-pretty">
                    Secure residence permit, establish genuine residence in Malta, and begin fulfilling residency
                    requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Investment Completion</h3>
                  <p className="text-muted-foreground text-pretty">
                    Complete all required investments including government contribution, real estate, and government
                    bonds.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Citizenship Application</h3>
                  <p className="text-muted-foreground text-pretty">
                    Submit citizenship application after fulfilling residency requirements and completing all
                    investments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Citizenship Grant & Passport</h3>
                  <p className="text-muted-foreground text-pretty">
                    Receive citizenship certificate and Malta passport, gaining full EU citizenship rights and benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your EU Future</h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              Malta citizenship opens doors to unlimited opportunities across Europe. Let our experts guide you through
              this prestigious program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold"
                >
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/program-comparison">
                <Button variant="outline" size="lg" className="px-8 py-4 rounded-xl font-semibold bg-transparent">
                  Compare Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
