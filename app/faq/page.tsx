import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - OrientHeight Global Solutions",
  description:
    "Find answers to common questions about citizenship by investment, residency programs, and global mobility solutions.",
}

const faqCategories = [
  {
    category: "Citizenship Programs",
    questions: [
      {
        question: "What is citizenship by investment?",
        answer:
          "Citizenship by investment (CBI) is a legal process where individuals can obtain citizenship of a country by making a significant economic contribution, typically through donations to government funds, real estate investments, or business investments.",
      },
      {
        question: "How long does the application process take?",
        answer:
          "Application timelines vary by country and program. Each citizenship program has its own processing standards. Contact our experts for specific information about your chosen program.",
      },
      {
        question: "Can I include my family in the application?",
        answer:
          "Yes, most citizenship programs allow you to include your spouse, dependent children under 18 (sometimes up to 30), and in some cases, dependent parents or grandparents. Each program has specific eligibility criteria for dependents.",
      },
      {
        question: "Do I need to live in the country to maintain citizenship?",
        answer:
          "Most citizenship by investment programs have minimal or no residency requirements to maintain citizenship. However, some countries may require a brief visit during the application process or for the oath ceremony.",
      },
    ],
  },
  {
    category: "Residency Programs",
    questions: [
      {
        question: "What is the difference between residency and citizenship?",
        answer:
          "Residency gives you the right to live in a country but you remain a citizen of your home country. Citizenship grants you full rights including voting, passport, and permanent status. Many residency programs offer a path to citizenship after several years.",
      },
      {
        question: "What are the minimum investment amounts?",
        answer:
          "Investment amounts vary significantly by country and program type. European Golden Visa programs range from €250,000 (Greece) to €500,000+ (Spain, Portugal). The US EB-5 program requires $800,000-$1,050,000.",
      },
      {
        question: "Can I work in the country with residency?",
        answer:
          "Most residency by investment programs grant you the right to work, study, and conduct business in the country. Some programs may have initial restrictions that are lifted after a certain period.",
      },
      {
        question: "How often do I need to visit to maintain residency?",
        answer:
          "Requirements vary by program. Some have no physical presence requirements, while others may require spending a minimum number of days per year (typically 7-14 days) to maintain your residency status.",
      },
    ],
  },
  {
    category: "Investment & Process",
    questions: [
      {
        question: "What types of investments qualify?",
        answer:
          "Qualifying investments typically include: government fund donations, real estate purchases, business investments, government bonds, or job creation investments. Each program has specific approved investment options.",
      },
      {
        question: "Are the investments refundable?",
        answer:
          "This depends on the investment type. Government fund donations are typically non-refundable. Real estate investments can be sold after a holding period (usually 3-7 years). Business investments may be recoverable depending on performance.",
      },
      {
        question: "What documents do I need to provide?",
        answer:
          "Standard requirements include: passport copies, birth certificates, marriage certificates, police clearance certificates, medical certificates, bank statements, proof of funds, and completed application forms. All documents must be apostilled and translated if necessary.",
      },
      {
        question: "How much do the programs cost beyond the investment?",
        answer:
          "Additional costs typically include: government processing fees ($5,000-$50,000), due diligence fees ($5,000-$15,000 per applicant), legal and professional fees ($15,000-$50,000), and document preparation costs ($2,000-$5,000).",
      },
    ],
  },
  {
    category: "Tax & Legal",
    questions: [
      {
        question: "Will I have tax obligations in the new country?",
        answer:
          "Tax obligations depend on the country's tax system and your residency status. Some countries tax worldwide income for residents, while others have territorial tax systems. We provide comprehensive tax planning to optimize your situation.",
      },
      {
        question: "Can I keep my current citizenship?",
        answer:
          "Most countries allow dual citizenship, but you should check your home country's laws. Some countries like Singapore and Germany have restrictions on dual citizenship. We advise on the implications for your specific situation.",
      },
      {
        question: "Are these programs legal?",
        answer:
          "Yes, all citizenship and residency by investment programs we offer are fully legal and established by government legislation. These programs are designed to attract foreign investment and are regulated by government authorities.",
      },
      {
        question: "What happens if my application is rejected?",
        answer:
          "Rejection rates are very low when applications are properly prepared. If rejected, government fees are typically non-refundable, but investment funds held in escrow are usually returned. We conduct thorough pre-screening to minimize rejection risk.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-primary/20 text-slate-900 border-primary/30 mb-6">Frequently Asked Questions</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white">
                Get Your <span className="text-primary">Questions</span> Answered
              </h1>
              <p className="text-xl text-slate-300 text-pretty">
                Find comprehensive answers to the most common questions about citizenship by investment, residency
                programs, and global mobility solutions.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
                    <span className="text-primary">{category.category}</span>
                  </h2>

                  <Card className="bg-white backdrop-blur-sm border-slate-200">
                    <CardContent className="p-6">
                      <Accordion type="single" collapsible className="space-y-4">
                        {category.questions.map((faq, index) => (
                          <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border-slate-200">
                            <AccordionTrigger className="text-left text-slate-900 hover:text-primary transition-colors">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed">{faq.answer}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4 lg:px-6">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Still Have <span className="text-primary">Questions</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our expert team is ready to provide personalized answers to your specific situation and goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="inline-block">
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                      Contact Our Experts
                    </button>
                  </a>
                  <a href="/services" className="inline-block">
                    <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 bg-transparent">
                      Explore Our Services
                    </button>
                  </a>
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
