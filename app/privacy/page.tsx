import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - OrientHeight Global Solutions",
  description: "Our commitment to protecting your privacy and personal information.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Privacy Policy</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Your <span className="text-primary">Privacy</span> Matters
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 prose prose-lg max-w-none">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        We collect information you provide directly to us, such as when you create an account, request
                        information about our services, or communicate with us. This may include your name, email
                        address, phone number, and other contact information.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        We use the information we collect to:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>Provide, maintain, and improve our services</li>
                        <li>Process transactions and send related information</li>
                        <li>Send you technical notices, updates, and support messages</li>
                        <li>Respond to your comments, questions, and requests</li>
                        <li>Communicate with you about products, services, and events</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-primary mb-4">Information Sharing</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        We do not sell, trade, or otherwise transfer your personal information to third parties without
                        your consent, except as described in this policy. We may share your information with trusted
                        partners who assist us in operating our website and conducting our business.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        We implement appropriate security measures to protect your personal information against
                        unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                        over the internet is 100% secure.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-primary mb-4">Your Rights</h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>Access and update your personal information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Request a copy of your personal information</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        If you have any questions about this Privacy Policy, please contact us at
                        privacy@orientheight.com or through our contact page.
                      </p>
                    </div>

                    <div className="border-t border-border pt-8">
                      <p className="text-sm text-muted-foreground">Last updated: January 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
