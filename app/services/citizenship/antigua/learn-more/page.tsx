import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Globe, Shield, Users, DollarSign, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AntiguaLearnMorePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Citizenship by Investment</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Antigua & Barbuda Citizenship Program</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Discover the comprehensive details of one of the Caribbean's most established citizenship by investment
              programs, offering visa-free travel to 150+ destinations.
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
                The Antigua and Barbuda Citizenship by Investment Program was established in 2013 and has become one of
                the most respected programs in the Caribbean. It offers a pathway to citizenship through various
                investment options while maintaining strict due diligence standards.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Established 2013</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-sm">150+ Visa-Free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm">Family Included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm">No Residency Required</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/luxury-coastal-villa-with-ocean-view-and-modern-ar.jpg"
                alt="Antigua coastline"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose from four distinct investment pathways, each designed to meet different investor preferences and
              goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <DollarSign className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">National Development Fund</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">$100,000</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Non-refundable contribution to support national development projects.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Single applicant: $100,000</li>
                  <li>• Family of 4: $100,000</li>
                  <li>• Additional dependents: $25,000 each</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <FileText className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Real Estate Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">$200,000</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Investment in approved real estate projects with potential returns.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Minimum 5-year holding period</li>
                  <li>• Pre-approved projects only</li>
                  <li>• Potential rental income</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Business Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">$400,000</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Investment in approved business ventures or joint ventures.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Job creation requirements</li>
                  <li>• Government approval needed</li>
                  <li>• Active business participation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Globe className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">University of West Indies Fund</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">$150,000</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Contribution to UWI Fund plus one-year scholarship for family member.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Family of 6 maximum</li>
                  <li>• Includes scholarship</li>
                  <li>• Educational benefits</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Antigua & Barbuda citizenship offers numerous advantages for global mobility and lifestyle enhancement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visa-Free Travel</h3>
              <p className="text-muted-foreground text-pretty">
                Access to 150+ destinations including UK, EU Schengen Area, Singapore, and Hong Kong.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Residency Requirement</h3>
              <p className="text-muted-foreground text-pretty">
                No requirement to reside in Antigua & Barbuda before or after citizenship approval.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Inclusion</h3>
              <p className="text-muted-foreground text-pretty">
                Include spouse, children under 30, parents over 65, and unmarried siblings.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tax Benefits</h3>
              <p className="text-muted-foreground text-pretty">
                No taxes on worldwide income, capital gains, inheritance, or wealth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
              <p className="text-muted-foreground text-pretty">
                Citizenship typically granted within 3-4 months from complete application submission.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dual Citizenship</h3>
              <p className="text-muted-foreground text-pretty">
                Antigua & Barbuda allows dual citizenship with no requirement to renounce existing citizenship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Application Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our streamlined process ensures efficient handling of your citizenship application from start to finish.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Consultation & Assessment</h3>
                  <p className="text-muted-foreground text-pretty">
                    Free consultation to assess eligibility, discuss investment options, and create a customized
                    strategy for your application.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Document Preparation & Due Diligence</h3>
                  <p className="text-muted-foreground text-pretty">
                    Comprehensive document collection, preparation, and preliminary due diligence review to ensure
                    application completeness.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Investment & Application Submission</h3>
                  <p className="text-muted-foreground text-pretty">
                    Complete investment transaction and submit application to the Citizenship by Investment Unit (CIU)
                    for processing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Government Processing & Approval</h3>
                  <p className="text-muted-foreground text-pretty">
                    Government conducts thorough due diligence and reviews application. Processing typically takes 3-4
                    months.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Citizenship Certificate & Passport</h3>
                  <p className="text-muted-foreground text-pretty">
                    Receive citizenship certificate and apply for Antigua & Barbuda passport. Begin enjoying the
                    benefits of your new citizenship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Eligibility Requirements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ensure you meet all requirements before beginning your citizenship application process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Basic Requirements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Must be at least 18 years old</li>
                  <li>• Clean criminal background check</li>
                  <li>• Good health certificate</li>
                  <li>• Proof of source of funds</li>
                  <li>• No adverse immigration history</li>
                  <li>• Pass due diligence checks</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Family Members</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Spouse of main applicant</li>
                  <li>• Children under 30 years old</li>
                  <li>• Parents and grandparents over 65</li>
                  <li>• Unmarried siblings under 30</li>
                  <li>• Physically or mentally challenged dependents</li>
                  <li>• Additional fees apply for each dependent</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              Take the first step towards Antigua & Barbuda citizenship. Our expert team is ready to guide you through
              every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold"
                >
                  Schedule Free Consultation
                </Button>
              </Link>
              <Link href="/program-comparison">
                <Button variant="outline" size="lg" className="px-8 py-4 rounded-xl font-semibold bg-transparent">
                  Compare All Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
