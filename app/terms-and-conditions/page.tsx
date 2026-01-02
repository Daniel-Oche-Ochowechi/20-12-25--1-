import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Scale, FileText, Users, DollarSign, Clock, Shield, AlertCircle, Globe, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />

      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-primary/30">
              <Scale className="w-5 h-5" />
              Legal Agreement
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">Terms and Conditions</h1>
            <p className="text-xl text-slate-400">Legal framework governing our services</p>
          </div>

          <div className="space-y-8">
            {/* Introduction and Acceptance */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-white">Introduction and Acceptance</h2>
                  <p className="text-slate-300 leading-relaxed mb-5 text-lg">
                    Welcome to Orientheight, a premier global mobility and investment migration consultancy. These Terms
                    and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you
                    (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) and Orientheight Ltd.
                    (&quot;Orientheight,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), governing your
                    access to and use of our services, website, and related platforms.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-5 text-lg">
                    By engaging our services, accessing our website at www.orientheight.com, or utilizing any of our
                    digital platforms, you acknowledge that you have read, understood, and agree to be bound by these
                    Terms. If you do not agree with any part of these Terms, please refrain from using our services or
                    accessing our platforms.
                  </p>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    We may modify these Terms at our discretion. Any modifications will be effective immediately upon
                    posting the updated Terms on our website. Your continued use of our services following such
                    modifications constitutes your acceptance of the revised Terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-white">Our Services</h2>
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                    Orientheight provides specialized consultancy services in the fields of investment migration,
                    citizenship by investment, residency by investment, and global mobility solutions. Our services
                    include, but are not limited to:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Citizenship and residency program consultation and application processing",
                      "Strategic investment advisory for migration purposes",
                      "Document preparation and submission",
                      "Application monitoring and status updates",
                      "Post-approval services and support",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    The specific services provided to you will be detailed in a personalized Service Agreement. In the
                    event of any inconsistency between these Terms and your Service Agreement, the provisions of your
                    Service Agreement shall prevail to the extent of the inconsistency.
                  </p>
                </div>
              </div>
            </div>

            {/* Client Eligibility and Responsibility */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-white">Client Eligibility and Responsibility</h2>

                  <h3 className="text-2xl font-semibold mb-4 text-white">Eligibility Requirements</h3>
                  <p className="text-slate-300 leading-relaxed mb-4 text-lg">To engage our services, you must:</p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Be at least 18 years of age",
                      "Possess the legal capacity to enter into binding contracts",
                      "Provide accurate, complete, and current information as required for your application",
                      "Meet the eligibility criteria for your chosen investment migration program",
                      "Comply with all applicable laws and regulations in your current jurisdiction and the target jurisdiction",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4 text-white">Client Responsibilities</h3>
                  <p className="text-slate-300 leading-relaxed mb-4 text-lg">As our client, you agree to:</p>
                  <ul className="space-y-3">
                    {[
                      "Provide complete, accurate, and truthful information about yourself and any accompanying family members",
                      "Promptly respond to requests for additional information or documentation",
                      "Disclose any circumstances that may affect your eligibility for your chosen program",
                      "Inform us of any changes to your personal circumstances that may impact your application",
                      "Make all required payments in accordance with the agreed payment schedule",
                      "Conduct appropriate due diligence regarding your chosen program and investment",
                      "Adhere to all applicable laws and regulations",
                      "Cooperate fully throughout the application process",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Fees and Payment Terms */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-white">Fees and Payment Terms</h2>

                  <h3 className="text-2xl font-semibold mb-4 text-white">Service Fees</h3>
                  <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                    Our fee structure will be clearly outlined in your Service Agreement. Fees may vary based on the
                    complexity of your case, the number of applicants, and the specific services required.
                  </p>

                  <h3 className="text-2xl font-semibold mb-4 text-white">Payment Schedule</h3>
                  <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                    Unless otherwise specified in your Service Agreement:
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "An initial consultation fee may be required, which may be credited towards your total service fee upon engagement",
                      "A non-refundable retainer is due upon signing the Service Agreement",
                      "Subsequent payments will be required at predetermined milestones throughout the application process",
                      "All government fees, due diligence fees, and third-party costs are separate from our service fees and are your responsibility",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4 text-white">Payment Methods</h3>
                  <p className="text-slate-300 leading-relaxed mb-4 text-lg">We accept payment via:</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Bank wire transfer",
                      "Approved credit cards",
                      "Other methods as specified in your Service Agreement",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                    All payments must be made from accounts in your name or from sources that you can verify as
                    legitimate and compliant with international anti-money laundering regulations.
                  </p>

                  <h3 className="text-2xl font-semibold mb-4 text-white">Fee Adjustments and Additional Costs</h3>
                  <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                    While we strive to maintain our fee structure as outlined in your Service Agreement, circumstances
                    beyond our control may necessitate additional fees. These may include:
                  </p>
                  <ul className="space-y-3 mb-4">
                    {[
                      "Changes in government fees or requirements",
                      "Additional services requested by you",
                      "Complications arising during the application process",
                      "Extended processing times requiring additional work",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Any additional fees will be communicated to you in advance for your approval.
                  </p>
                </div>
              </div>
            </div>

            {/* Duration and Termination */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-white">Duration and Termination</h2>

                  <h3 className="text-2xl font-semibold mb-4 text-white">Duration</h3>
                  <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                    Our service relationship commences upon execution of your Service Agreement and continues until:
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Your application process is completed, including any post-approval services specified in your Service Agreement",
                      "The service relationship is terminated in accordance with these Terms or your Service Agreement",
                      "A period of inactivity exceeding 12 months with no response to our communications",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4 text-white">Termination by Client</h3>
                  <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                    You may terminate our services by providing written notice. Upon termination:
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "You remain liable for all fees incurred up to the termination date",
                      "Any non-refundable fees as specified in your Service Agreement will not be returned",
                      "Refunds for pre-paid services will be calculated on a pro-rata basis for work not yet performed, less administrative costs",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4 text-white">Termination by Orientheight</h3>
                  <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                    We reserve the right to terminate our services if:
                  </p>
                  <ul className="space-y-3 mb-4">
                    {[
                      "You breach any provision of these Terms or your Service Agreement",
                      "You provide false, misleading, or incomplete information",
                      "You fail to make payments as required",
                      "You fail to respond to requests for information or documentation for more than 60 days",
                      "We determine that continuing to represent you would violate any laws, regulations, or ethical standards",
                      "We determine that your application has limited prospects of success",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    In such cases, any fees paid for services not rendered may be forfeited as liquidated damages,
                    subject to applicable laws.
                  </p>
                </div>
              </div>
            </div>

            {/* Confidentiality and Privacy */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-white">Confidentiality and Privacy</h2>

                  <h3 className="text-2xl font-semibold mb-4 text-white">Confidentiality Commitment</h3>
                  <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                    We treat all client information with the utmost confidentiality. We will not disclose your
                    information to any third party except:
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "As necessary to provide our services",
                      "To comply with legal obligations, court orders, or government requests",
                      "With your express written consent",
                      "To protect our rights, privacy, safety, or property",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4 text-white">Data Protection</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Our collection, use, storage, and processing of your personal information is governed by our Privacy
                    Policy, which is incorporated by reference into these Terms. Please review our Privacy Policy at{" "}
                    <Link href="/privacy-policy" className="text-primary hover:underline">
                      www.orientheight.com/privacy-policy
                    </Link>{" "}
                    for a comprehensive understanding of our data practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <AlertCircle className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-white">Limitation of Liability</h2>

                  <h3 className="text-2xl font-semibold mb-4 text-white">Scope of Our Services</h3>
                  <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                    While we provide expert guidance and support throughout the investment migration process, we cannot
                    and do not guarantee:
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "The approval of your application by government authorities",
                      "Processing times or specific outcomes",
                      "Changes in government policies, laws, or program requirements",
                      "The investment performance of any recommended or selected investment",
                      "Future political, economic, or social conditions in any jurisdiction",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4 text-white">Liability Limitations</h3>
                  <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                    To the maximum extent permitted by applicable law:
                  </p>
                  <ul className="space-y-3 mb-4">
                    {[
                      "Our total liability arising out of or related to these Terms or your Service Agreement shall not exceed the total amount of service fees paid by you to Orientheight",
                      "We shall not be liable for any indirect, incidental, special, consequential, or punitive damages",
                      "We shall not be liable for any losses resulting from circumstances beyond our reasonable control",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    This limitation of liability applies regardless of whether the liability is based on breach of
                    contract, tort, strict liability, breach of warranties, or otherwise, even if we have been advised
                    of the possibility of such damages.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Terms */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-white">Additional Legal Provisions</h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">Indemnification</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        You agree to defend, indemnify, and hold harmless Orientheight, its officers, directors,
                        employees, and agents from and against any claims, liabilities, damages, judgments, awards,
                        losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or
                        relating to your violation of these Terms, provision of false information, violation of any
                        third-party right or applicable law, or any misuse of our services.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">Intellectual Property</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        All content on our website and platforms, including but not limited to text, graphics, logos,
                        images, audio clips, digital downloads, data compilations, and software, is the property of
                        Orientheight or its content suppliers and is protected by international copyright laws. You may
                        not reproduce, duplicate, copy, sell, resell, or exploit any portion of our website or its
                        content without our express written permission.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">Force Majeure</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        Neither party shall be liable for any failure or delay in performing its obligations under these
                        Terms if such failure or delay results from circumstances beyond that party&apos;s reasonable
                        control, including but not limited to acts of God, governmental actions, war or national
                        emergency, acts of terrorism, protests, riot, civil commotion, fire, explosion, flood, epidemic,
                        pandemic, lock-outs, strikes or other labor disputes, or restraints or delays affecting
                        carriers.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">Governing Law and Dispute Resolution</h3>
                      <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                        These Terms shall be governed by and construed in accordance with the laws of the Federal
                        Republic of Nigeria, without regard to its conflict of law provisions.
                      </p>
                      <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                        Any dispute arising out of or relating to these Terms or your Service Agreement shall first be
                        resolved through good faith negotiation. If negotiation fails, the dispute shall be submitted to
                        mediation in accordance with the rules of the Lagos Court of Arbitration. If mediation fails to
                        resolve the dispute within 90 days, the dispute shall be resolved by binding arbitration
                        conducted in Abuja, Nigeria, by a single arbitrator in accordance with the Arbitration and
                        Conciliation Act, Cap A18, Laws of the Federation of Nigeria, 2004.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">Severability</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        If any provision of these Terms is found to be unenforceable or invalid under any applicable
                        law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid
                        as a whole, and such provisions shall be deleted without affecting the remaining provisions
                        herein.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">Waiver</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        No waiver of any term or condition set forth in these Terms shall be deemed a further or
                        continuing waiver of such term or condition or a waiver of any other term or condition, and any
                        failure to assert a right or provision under these Terms shall not constitute a waiver of such
                        right or provision.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">Assignment</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        You may not assign your rights or obligations under these Terms without our prior written
                        consent. We may assign our rights and obligations under these Terms without your consent to an
                        affiliate or in connection with a merger, acquisition, corporate reorganization, or sale of all
                        or substantially all of our assets.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">Entire Agreement</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        These Terms, together with your Service Agreement and our Privacy Policy, constitute the entire
                        agreement between you and Orientheight concerning your use of our services and supersede all
                        prior or contemporaneous communications and proposals, whether electronic, oral, or written,
                        between you and Orientheight.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Questions About These Terms?</h2>
              <p className="text-slate-300 leading-relaxed mb-8 text-lg max-w-2xl mx-auto">
                If you have any questions or concerns about these Terms and Conditions, please don&apos;t hesitate to
                contact us.
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppWidget />
    </main>
  )
}
