import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, TrendingUp, Shield, Globe, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tailored Tax Planning - OrientHeight Global Solutions",
  description: "Maximize tax efficiency with bespoke strategies for high-net-worth individuals and global enterprises.",
}

export default function TaxPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-primary/30">
                <TrendingUp className="w-4 h-4" />
                Tailored Tax Planning
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                Tailored Tax Planning for a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
                  Secure Financial Future
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Maximize tax efficiency with bespoke strategies designed for high-net-worth individuals, families, and
                global enterprises.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-24 bg-slate-950">
          <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 mb-16">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold mb-8 text-white">Maximize Tax Efficiency with Bespoke Strategies</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Orientheight's bespoke tax planning services are designed to meet the unique financial goals of
                  high-net-worth individuals, families, and global enterprises. Our expertise spans across income tax
                  deferral, capital gains optimization, and estate planning, ensuring every financial decision aligns
                  with both personal aspirations and regulatory requirements. Leveraging a deep understanding of
                  international tax treaties, including CRS and FATCA regulations, our solutions streamline the
                  complexity of cross-border financial obligations, giving clients the freedom to focus on their
                  wealth-building priorities.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Whether you're looking to protect generational wealth, establish offshore trusts, or minimize
                  liabilities through strategic investments, Orientheight provides actionable, innovative solutions.
                  From analyzing double taxation agreements to structuring corporate entities for maximum efficiency,
                  our approach is rooted in precision and confidentiality. Partner with Orientheight for personalized
                  tax strategies that safeguard your assets while unlocking new opportunities for growth.
                </p>
              </CardContent>
            </Card>

            {/* Global Tax Expertise Section */}
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 mb-16">
              <CardContent className="p-12">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold mb-6 text-white">
                      Global Tax Expertise: Navigating Complexity with Ease
                    </h2>
                  </div>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Our team at Orientheight combines decades of experience in tax planning with cutting-edge strategies
                  to address the challenges of an increasingly globalized economy. We specialize in crafting tax
                  solutions that minimize liabilities while ensuring full compliance with local and international
                  regulations. From income tax optimization to the creation of hybrid corporate structures like trusts
                  and holding companies, our advisors deliver insights that transform financial challenges into
                  opportunities.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  With a focus on high-net-worth individuals and corporate clients, our solutions are tailored to
                  address cross-border complexities. This includes tax residency planning, intellectual property
                  protection, and offshore asset management.
                </p>
              </CardContent>
            </Card>

            {/* Key Services Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: Shield,
                  title: "Asset Protection & Wealth Preservation",
                  description:
                    "Secure your financial legacy with comprehensive strategies that protect generational wealth through offshore trusts, succession planning, and inheritance tax minimization.",
                },
                {
                  icon: TrendingUp,
                  title: "International Tax Optimization",
                  description:
                    "Navigate cross-border complexities with expertise in tax treaties, double taxation agreements, and multi-jurisdiction compliance for optimal efficiency.",
                },
                {
                  icon: Users,
                  title: "Corporate Tax Structuring",
                  description:
                    "Maximize business efficiency through strategic corporate entity structuring, transfer pricing optimization, and hybrid structures like trusts and holding companies.",
                },
                {
                  icon: Globe,
                  title: "Tax Residency Planning",
                  description:
                    "Strategic planning for tax residency optimization, helping entrepreneurs and families benefit from favorable jurisdictions while maintaining full compliance.",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 border border-primary/30 group-hover:bg-primary/30 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-slate-300 text-base leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Financial Freedom Section */}
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 mb-16">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold mb-8 text-white">
                  Achieve Financial Freedom Through Expert Tax Planning
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Effective tax planning goes beyond compliance—it's a strategic approach to safeguarding your financial
                  legacy. Orientheight's solutions address the multifaceted needs of high-net-worth clients, offering
                  services like inheritance tax minimization, succession planning, and offshore investment structuring.
                  Our expertise extends to navigating the nuances of international tax treaties, ensuring you benefit
                  from the full spectrum of opportunities available in jurisdictions worldwide.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Whether you're an entrepreneur expanding into new markets or a family office seeking to optimize
                  wealth preservation strategies, Orientheight's tailored tax solutions deliver measurable results. Our
                  process involves detailed financial analyses, personalized consultations, and ongoing support,
                  ensuring your plan adapts to an ever-changing global tax landscape. Let us simplify the complexities,
                  so you can enjoy the benefits of financial flexibility and peace of mind.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Detailed financial analyses and personalized consultations",
                    "Ongoing support that adapts to changing global tax landscapes",
                    "Full compliance with CRS and FATCA regulations",
                    "Strategic investment structuring for maximum efficiency",
                    "Confidential and discrete wealth management services",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-slate-300 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary/20 via-slate-900 to-slate-950 border-t border-primary/20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to Optimize Your Tax Strategy?</h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Let our expert advisors develop a comprehensive tax strategy tailored to your unique financial goals and
                global aspirations.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
