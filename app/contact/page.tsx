import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - OrientHeight Global Citizenship Consultants",
  description:
    "Get in touch with OrientHeight for personalized consultation on global citizenship, residency programs, and investment opportunities.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Header />
      <div className="pt-20">
        {/* Contact Hero Section */}
        <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight text-white">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-slate-300 text-pretty leading-relaxed max-w-2xl mx-auto">
                Ready to unlock global opportunities? Our expert team is here to guide you through your citizenship and
                investment journey with personalized, professional service.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 -mt-32 relative z-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
              {/* Contact Form */}
              <div className="space-y-8">
                <Card className="bg-white shadow-2xl border-slate-200 hover:shadow-3xl transition-shadow duration-300">
                  <CardHeader className="border-b border-slate-200 pb-8 pt-8">
                    <CardTitle className="text-3xl font-bold text-slate-900">Send us a Message</CardTitle>
                    <p className="text-slate-600 text-base mt-3">We'll get back to you within 24 hours</p>
                  </CardHeader>
                  <CardContent className="pt-8 pb-8">
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="bg-white shadow-xl border-slate-200 hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Mail className="w-7 h-7 text-slate-900" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-slate-900">Email Us</h3>
                        <p className="text-slate-600 mb-3">Get in touch via email</p>
                        <p className="text-primary font-semibold text-lg">contact@orientheight.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-xl border-slate-200 hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Phone className="w-7 h-7 text-slate-900" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-slate-900">Call Us</h3>
                        <p className="text-slate-600 mb-3">Speak with our experts</p>
                        <p className="text-primary font-semibold text-lg">(+234) 708-500-3333</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-xl border-slate-200 hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MapPin className="w-7 h-7 text-slate-900" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-slate-900">Visit Us</h3>
                        <p className="text-slate-600 mb-3">Our office location</p>
                        <p className="text-slate-700 leading-relaxed">
                          5th Floor, Elizade Towers
                          <br />
                          Plot 596, Independence Avenue
                          <br />
                          Central Business District
                          <br />
                          Abuja, Nigeria
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-xl border-slate-200 hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Clock className="w-7 h-7 text-slate-900" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-slate-900">Business Hours</h3>
                        <p className="text-slate-600 mb-3">When we're available</p>
                        <p className="text-slate-700 leading-relaxed">
                          Monday - Friday: 8 AM - 5:00 PM
                          <br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
