import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Shield, Users, DollarSign, Building, Star } from "lucide-react"
import Link from "next/link"

export default function UAEResidencyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Golden Visa Program</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">UAE Golden Visa Residency</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Secure long-term residency in one of the world's most dynamic economies with the UAE Golden Visa program,
              offering 5 or 10-year renewable residence permits.
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
              <Link href="/services/residency/uae/learn-more">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose UAE Golden Visa?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              The UAE Golden Visa offers exceptional benefits for investors, entrepreneurs, and skilled professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Long-term Validity</h3>
                <p className="text-sm text-muted-foreground">5 or 10-year renewable residence permits</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Family Inclusion</h3>
                <p className="text-sm text-muted-foreground">Include spouse, children, and parents</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">No Sponsor Required</h3>
                <p className="text-sm text-muted-foreground">100% ownership of UAE companies</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Tax Benefits</h3>
                <p className="text-sm text-muted-foreground">0% personal income tax</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment Pathways</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Multiple investment options to qualify for UAE Golden Visa residency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Building className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Real Estate Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">AED 2M+</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Purchase property worth AED 2 million or more in approved areas.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 5-year Golden Visa</li>
                  <li>• Renewable visa</li>
                  <li>• Include family members</li>
                  <li>• No minimum stay requirement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <DollarSign className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Business Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">AED 10M+</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Invest in new or existing business with specific capital requirements.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 10-year Golden Visa</li>
                  <li>• Business ownership</li>
                  <li>• Job creation potential</li>
                  <li>• Multiple entry visa</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Star className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Exceptional Talent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">Varies</div>
                <p className="text-sm text-muted-foreground mb-4">
                  For professionals in medicine, engineering, science, and other fields.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 10-year Golden Visa</li>
                  <li>• No investment required</li>
                  <li>• Government endorsement</li>
                  <li>• Career advancement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Application Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Streamlined process to secure your UAE Golden Visa residency.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Consultation</h3>
              <p className="text-sm text-muted-foreground">Initial assessment and pathway selection</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Investment</h3>
              <p className="text-sm text-muted-foreground">Complete qualifying investment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Application</h3>
              <p className="text-sm text-muted-foreground">Submit Golden Visa application</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Approval</h3>
              <p className="text-sm text-muted-foreground">Receive Golden Visa approval</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your UAE Journey</h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              Take advantage of the UAE's Golden Visa program and secure your future in one of the world's most dynamic
              economies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold"
                >
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/services/residency/uae/learn-more">
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
