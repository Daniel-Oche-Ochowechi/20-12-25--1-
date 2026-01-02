import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Shield, Lock, Eye, Users, FileText, Globe, Mail, CheckCircle, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />

      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-primary/30">
              <Shield className="w-5 h-5" />
              Privacy & Security
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">Privacy Policy</h1>
            <p className="text-xl text-slate-400">Your privacy is our priority</p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Introduction</h2>
                  <p className="text-slate-300 leading-relaxed mb-5 text-lg">
                    At Orientheight, we recognize that privacy is paramount, particularly for our distinguished
                    clientele seeking global mobility solutions. We have crafted this Privacy Policy with meticulous
                    attention to detail, ensuring complete transparency about how we handle your personal information
                    throughout your investment migration journey.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-5 text-lg">
                    This Privacy Policy outlines our commitment to protecting your data with the same level of
                    excellence and discretion that defines all our services. It explains how we collect, use, and
                    safeguard your information, and details the rights you maintain over your personal data.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4 text-lg font-semibold">
                    This Policy governs all interactions with Orientheight, including:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Your engagement with our digital platforms, including our website, microsites, and social media presence",
                      "Our communications across all channels",
                      "The provision of our premium citizenship and residency by investment services",
                      "Your participation in our exclusive events and programs",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-5 text-lg">
                    We may periodically update this Privacy Policy to reflect regulatory changes or enhancements to our
                    practices. Any revisions will be effective from the date of publication on our website.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Information We Collect */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-white">Personal Information We Collect</h2>

                  <h3 className="text-2xl font-semibold mb-4 mt-8 text-white">When You Visit Our Digital Platforms</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                    We gather information that enables us to provide a personalized, seamless experience for discerning
                    individuals exploring global citizenship and residency options:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/30">
                      <h4 className="font-bold mb-4 text-white text-xl">Information You Provide Directly:</h4>
                      <ul className="space-y-2">
                        {[
                          "Contact details including your name, email address, and telephone number",
                          "Communication preferences and investment interests",
                          "Inquiries submitted through our digital platforms",
                          "Testimonials or referrals you choose to share",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/30">
                      <h4 className="font-bold mb-4 text-white text-xl">Information Collected Automatically:</h4>
                      <ul className="space-y-2">
                        {[
                          "Technical data such as device specifications, browser type, and IP address",
                          "Navigation patterns and interaction with our content",
                          "Geographical location data (when permitted)",
                          "Preference indicators based on your browsing behavior",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/30">
                      <h4 className="font-bold mb-4 text-white text-xl">Information From Third-Party Sources:</h4>
                      <ul className="space-y-2">
                        {[
                          "Analytics data from trusted partners",
                          "Information shared through our secure social media integrations",
                          "Market research insights relevant to investment migration",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 mt-8 text-white">When You Engage Our Services</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                    The provision of our bespoke citizenship and residency by investment services necessitates
                    comprehensive information to ensure compliance with international regulations and to deliver
                    tailored solutions:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/30">
                      <h4 className="font-bold mb-4 text-white text-xl">Personal Identifiers:</h4>
                      <ul className="space-y-2">
                        {[
                          "Full legal name and contact information",
                          "Passport details and citizenship status",
                          "Date and place of birth",
                          "Residential history and current address",
                          "Tax residency information",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/30">
                      <h4 className="font-bold mb-4 text-white text-xl">Family Information:</h4>
                      <ul className="space-y-2">
                        {[
                          "Spouse or partner details",
                          "Dependent family members' information",
                          "Family structure and relationships",
                          "Ancestry information relevant to citizenship claims",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/30">
                      <h4 className="font-bold mb-4 text-white text-xl">Financial Information:</h4>
                      <ul className="space-y-2">
                        {[
                          "Investment capacity and preferences",
                          "Source of funds and wealth documentation",
                          "Banking and transaction details",
                          "Financial objectives and planning",
                          "Investment portfolio information",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/30">
                      <h4 className="font-bold mb-4 text-white text-xl">Professional Background:</h4>
                      <ul className="space-y-2">
                        {[
                          "Career history and achievements",
                          "Business ownership and activities",
                          "Professional qualifications and expertise",
                          "Industry affiliations and networks",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/30">
                      <h4 className="font-bold mb-4 text-white text-xl">Compliance Information:</h4>
                      <ul className="space-y-2">
                        {[
                          "Background verification results",
                          "Political exposure status",
                          "Legal status clearances",
                          "Identity verification documentation",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Basis */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Legal Basis and Purposes for Processing</h2>
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                    Orientheight processes your personal information with strict adherence to applicable data protection
                    regulations. We only collect and use information where we have a proper legal foundation:
                  </p>
                  <ul className="space-y-4">
                    {[
                      {
                        title: "Delivery of Investment Migration Services",
                        desc: "Performance of our service agreement",
                      },
                      {
                        title: "Personalized Consultation",
                        desc: "Performance of agreement and legitimate interest in providing tailored solutions",
                      },
                      {
                        title: "Compliance with Immigration Requirements",
                        desc: "Legal obligation and performance of contract",
                      },
                      {
                        title: "Relationship Management",
                        desc: "Legitimate interest in maintaining our professional relationship",
                      },
                      {
                        title: "Security and Fraud Prevention",
                        desc: "Legal obligation and legitimate interest in maintaining security",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/20">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-white font-semibold text-lg mb-1">{item.title}</p>
                            <p className="text-slate-400">{item.desc}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-white">Information Sharing and Transfers</h2>
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                    Orientheight operates with the utmost discretion. Your information is shared only when essential to
                    delivering our services or when legally required:
                  </p>

                  <h3 className="text-2xl font-semibold mb-4 mt-8 text-white">Service Delivery Partners</h3>
                  <ul className="space-y-2 mb-8">
                    {[
                      "Legal experts specializing in investment migration",
                      "Government authorities processing citizenship or residency applications",
                      "Trusted financial institutions facilitating investments",
                      "Property specialists for real estate investment options",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4 mt-8 text-white">Professional Service Providers</h3>
                  <ul className="space-y-2 mb-8">
                    {[
                      "Technology providers maintaining our secure digital infrastructure",
                      "Specialized compliance and due diligence firms",
                      "Administrative support professionals bound by confidentiality agreements",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4 mt-8 text-white">Strategic Partners</h3>
                  <ul className="space-y-2 mb-8">
                    {[
                      "Investment program representatives in destination countries",
                      "Carefully selected luxury lifestyle and relocation specialists",
                      "International tax and wealth management advisors",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4 mt-8 text-white">Corporate Transfers</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                    In the event of organizational restructuring, merger, or acquisition, your information may be
                    transferred as part of the corporate assets, subject to the continuation of protections equal to or
                    greater than those outlined in this Policy.
                  </p>

                  <h3 className="text-2xl font-semibold mb-4 mt-8 text-white">International Data Transfers</h3>
                  <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                    As a global firm specializing in international mobility, Orientheight may transfer your information
                    across borders. We implement comprehensive safeguards including:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Standard contractual clauses",
                      "Encryption and security protocols",
                      "Rigorous vendor assessment and management",
                      "Compliance with regional data protection frameworks",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-white">Data Security</h2>
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                    Orientheight employs sophisticated security measures to protect your information throughout its
                    lifecycle:
                  </p>
                  <ul className="space-y-3">
                    {[
                      {
                        title: "Advanced Encryption",
                        desc: "Utilizing industry-leading protocols for data in transit and at rest",
                      },
                      {
                        title: "Access Controls",
                        desc: "Stringent authentication and authorization systems limiting data access",
                      },
                      {
                        title: "Secure Infrastructure",
                        desc: "Continuous monitoring and regular security assessments",
                      },
                      { title: "Staff Training", desc: "Comprehensive data protection education for all personnel" },
                      {
                        title: "Incident Response",
                        desc: "Robust procedures for addressing potential security events",
                      },
                      {
                        title: "Retention Management",
                        desc: "Systematic review and secure disposal of outdated information",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-lg">
                          <strong className="text-white">{item.title}:</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-white">Your Data Protection Rights</h2>
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                    As a valued client of Orientheight, you maintain control over your personal information through
                    extensive rights provided under applicable data protection laws:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      {
                        title: "Right to Access",
                        desc: "Obtain confirmation of what personal information we hold and receive a copy",
                      },
                      {
                        title: "Right to Rectification",
                        desc: "Request correction of inaccurate information or completion of incomplete details",
                      },
                      {
                        title: "Right to Erasure",
                        desc: "Request deletion of your information under specific circumstances",
                      },
                      {
                        title: "Right to Restriction",
                        desc: "Temporarily limit how we use your information while addressing your concerns",
                      },
                      {
                        title: "Right to Data Portability",
                        desc: "Receive your information in a structured, machine-readable format",
                      },
                      {
                        title: "Right to Object",
                        desc: "Contest our processing of your information based on legitimate interests",
                      },
                      {
                        title: "Automated Decision-Making Rights",
                        desc: "Request human intervention for decisions based solely on automated processing",
                      },
                      {
                        title: "Right to Withdraw Consent",
                        desc: "Revoke previously provided consent for specific processing activities",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-lg">
                          <strong className="text-white">{item.title}:</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    To exercise any of these rights, please contact our dedicated Privacy Office at
                    privacy@orientheight.com. We will respond to your request within 30 days, in accordance with
                    applicable regulations.
                  </p>
                </div>
              </div>
            </div>

            {/* Communication Preferences */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Communication Preferences</h2>
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                    Orientheight respects your communication preferences:
                  </p>
                  <ul className="space-y-3">
                    {[
                      {
                        title: "Email Communications",
                        desc: "Manage subscription preferences through your profile settings or by clicking the 'manage preferences' link in any email",
                      },
                      {
                        title: "Direct Communications",
                        desc: "Specify your preferred contact methods and frequency during onboarding",
                      },
                      {
                        title: "Digital Advertising",
                        desc: "Control personalized advertising through your browser settings and our cookie management tool",
                      },
                      {
                        title: "Service Notifications",
                        desc: "While you may opt out of marketing communications, service-critical notifications related to your application or investment process will continue",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-lg">
                          <strong className="text-white">{item.title}:</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookie Policy */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Cookie Policy</h2>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Our website uses cookies and similar technologies to enhance your experience and provide
                    personalized service. For detailed information about these technologies and your control options,
                    please refer to our comprehensive Cookie Policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Connections */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Third-Party Connections</h2>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Our digital platforms may contain links to third-party websites and services that operate under
                    their own privacy policies. While we carefully select our partners, Orientheight is not responsible
                    for the privacy practices of these external entities. We encourage you to review the privacy
                    policies of any third-party services before providing your information.
                  </p>
                </div>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Children's Privacy</h2>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Orientheight services are designed exclusively for adults. We do not knowingly collect information
                    from individuals under the age of 18. If we become aware that we have inadvertently collected
                    information from a minor, we will promptly delete it.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-primary/20 via-slate-900 to-slate-800 rounded-3xl p-10 border border-primary/50 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/30 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/40">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-white">Contact Us</h2>
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                    For any questions regarding this Privacy Policy or our data practices, please contact:
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/30">
                      <p className="font-semibold text-white text-xl mb-2">Privacy Office</p>
                      <p className="text-slate-300 text-lg mb-1">OrientHeight</p>
                      <p className="text-slate-300 text-base leading-relaxed">
                        5th Floor, Elizade Towers, Plot 596, Independence Avenue, Central Business District, Abuja,
                        Nigeria
                      </p>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-800/50 rounded-2xl p-5 border border-slate-700/30">
                      <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-slate-400 text-sm">Email</p>
                        <a
                          href="mailto:privacy@orientheight.com"
                          className="text-white hover:text-primary transition-colors text-lg font-semibold"
                        >
                          privacy@orientheight.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-800/50 rounded-2xl p-5 border border-slate-700/30">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-slate-400 text-sm">Telephone</p>
                        <a
                          href="tel:+2347085003333"
                          className="text-white hover:text-primary transition-colors text-lg font-semibold"
                        >
                          +234 708 500 3333
                        </a>
                      </div>
                    </div>
                  </div>
                  <Link href="/contact">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
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
