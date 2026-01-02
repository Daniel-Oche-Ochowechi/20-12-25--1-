import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Globe, Shield, Users, DollarSign, Building } from "lucide-react"
import Link from "next/link"

export default function USAResidencyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">EB-5 Investor Visa</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">USA EB-5 Investment Visa</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Secure permanent residency in the United States through the EB-5 Immigrant Investor Program, leading to a
              pathway to US citizenship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold"
                >
                  Apply Now
                </Button>
              </Link>
              <Link href="/services/residency/usa/learn-more">
                <Button variant="outline" size="lg" className="px-8 py-4 rounded-xl font-semibold bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EB-5?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              The EB-5 program offers a direct path to US permanent residency and eventual citizenship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Permanent Residency</h3>
                <p className="text-sm text-muted-foreground">Direct path to US Green Card</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Family Inclusion</h3>
                <p className="text-sm text-muted-foreground">Include spouse and unmarried children under 21</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Citizenship Path</h3>
                <p className="text-sm text-muted-foreground">Eligible for US citizenship after 5 years</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">No Management</h3>
                <p className="text-sm text-muted-foreground">Passive investment option available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment Requirements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Two main investment pathways for the EB-5 program with different capital requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Building className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Targeted Employment Area (TEA)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-4">$800,000</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Investment in rural areas or areas with high unemployment rates.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Lower investment threshold</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Create 10 full-time jobs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Rural or high unemployment areas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Regional Center projects available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <DollarSign className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Standard Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-4">$1,050,000</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Investment in non-targeted employment areas or direct investment.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Higher investment threshold</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Create 10 full-time jobs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>More location flexibility</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Direct or Regional Center</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Application Timeline</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Understanding the EB-5 process timeline and key milestones.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">I-526E Petition (12-18 months)</h3>
                  <p className="text-muted-foreground text-pretty">
                    File I-526E petition with USCIS, including investment documentation and business plan.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Conditional Green Card (6-12 months)</h3>
                  <p className="text-muted-foreground text-pretty">
                    Upon I-526E approval, apply for conditional permanent residency through consular processing or
                    adjustment of status.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Conditional Period (2 years)</h3>
                  <p className="text-muted-foreground text-pretty">
                    Live in the US as conditional permanent resident while investment creates required jobs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">I-829 Petition (12-18 months)</h3>
                  <p className="text-muted-foreground text-pretty">
                    File I-829 petition to remove conditions and obtain permanent Green Card.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">US Citizenship (5+ years)</h3>
                  <p className="text-muted-foreground text-pretty">
                    Eligible to apply for US citizenship after 5 years as permanent resident.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your American Dream</h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              The EB-5 program offers a proven path to US permanent residency. Let our experts guide you through the
              process.
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
              <Link href="/services/residency/usa/learn-more">
                <Button variant="outline" size="lg" className="px-8 py-4 rounded-xl font-semibold bg-transparent">
                  Learn More Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
