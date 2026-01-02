import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Video, BookOpen, ExternalLink } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources & Downloads - OrientHeight Global Solutions",
  description:
    "Access comprehensive guides, country profiles, and resources for citizenship by investment and residency programs.",
}

const resources = [
  {
    category: "Program Guides",
    items: [
      {
        title: "Complete Citizenship by Investment Guide 2024",
        description: "Comprehensive overview of all major CBI programs with comparison charts and requirements.",
        type: "PDF Guide",
        icon: FileText,
        downloadUrl: "#",
      },
      {
        title: "European Golden Visa Comparison",
        description: "Detailed comparison of all European residency by investment programs.",
        type: "PDF Report",
        icon: FileText,
        downloadUrl: "#",
      },
      {
        title: "Caribbean Citizenship Programs Overview",
        description: "Complete guide to Caribbean citizenship options with investment requirements.",
        type: "PDF Guide",
        icon: FileText,
        downloadUrl: "#",
      },
    ],
  },
  {
    category: "Country Profiles",
    items: [
      {
        title: "Portugal Golden Visa Complete Guide",
        description: "Everything you need to know about Portugal's residency by investment program.",
        type: "Country Profile",
        icon: BookOpen,
        downloadUrl: "#",
      },
      {
        title: "Dominica Citizenship Program Profile",
        description: "Detailed analysis of Dominica's citizenship by investment program.",
        type: "Country Profile",
        icon: BookOpen,
        downloadUrl: "#",
      },
      {
        title: "UAE Residency Options Guide",
        description: "Comprehensive guide to UAE Golden Visa and residency programs.",
        type: "Country Profile",
        icon: BookOpen,
        downloadUrl: "#",
      },
    ],
  },
  {
    category: "Tax & Legal",
    items: [
      {
        title: "International Tax Planning Guide",
        description: "Strategic tax planning for global citizens and investors.",
        type: "Tax Guide",
        icon: FileText,
        downloadUrl: "#",
      },
      {
        title: "Dual Citizenship Legal Considerations",
        description: "Legal implications and considerations for holding multiple citizenships.",
        type: "Legal Guide",
        icon: FileText,
        downloadUrl: "#",
      },
      {
        title: "Asset Protection Strategies",
        description: "Protecting your wealth through international structures and jurisdictions.",
        type: "Strategy Guide",
        icon: FileText,
        downloadUrl: "#",
      },
    ],
  },
  {
    category: "Video Resources",
    items: [
      {
        title: "Citizenship by Investment Explained",
        description: "30-minute webinar explaining the basics of citizenship by investment.",
        type: "Video",
        icon: Video,
        downloadUrl: "#",
      },
      {
        title: "European Golden Visa Webinar",
        description: "Expert panel discussion on European residency programs.",
        type: "Webinar",
        icon: Video,
        downloadUrl: "#",
      },
      {
        title: "Tax Optimization Masterclass",
        description: "Advanced strategies for international tax planning and optimization.",
        type: "Masterclass",
        icon: Video,
        downloadUrl: "#",
      },
    ],
  },
]

const tools = [
  {
    title: "Citizenship Program Comparison Tool",
    description: "Interactive tool to compare different citizenship programs based on your criteria.",
    icon: ExternalLink,
    url: "#",
  },
  {
    title: "Investment Calculator",
    description: "Calculate total costs and timeline for your chosen program.",
    icon: ExternalLink,
    url: "#",
  },
  {
    title: "Visa-Free Travel Checker",
    description: "Check visa-free travel destinations for different passports.",
    icon: ExternalLink,
    url: "#",
  },
  {
    title: "Tax Residency Analyzer",
    description: "Analyze your tax residency status across different jurisdictions.",
    icon: ExternalLink,
    url: "#",
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-primary/20 text-slate-900 border-primary/30 mb-6">Resources & Downloads</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white">
                Knowledge <span className="text-primary">Center</span>
              </h1>
              <p className="text-xl text-slate-300 text-pretty">
                Access our comprehensive library of guides, country profiles, and tools to help you make informed
                decisions about your global mobility journey.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            {resources.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
                  <span className="text-primary">{category.category}</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, index) => (
                    <Card
                      key={index}
                      className="bg-white backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300 group"
                    >
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                          {item.title}
                        </CardTitle>
                        <Badge variant="secondary" className="w-fit bg-slate-100 text-slate-700">
                          {item.type}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed">{item.description}</p>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                          <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                          Download Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Interactive <span className="text-primary">Tools</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Use our interactive tools to analyze and compare different programs and options.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <tool.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {tool.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">{tool.description}</p>
                        <Button
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                        >
                          Launch Tool
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Stay <span className="text-primary">Updated</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter for the latest updates on citizenship programs, policy changes, and new
                  opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground"
                  />
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
