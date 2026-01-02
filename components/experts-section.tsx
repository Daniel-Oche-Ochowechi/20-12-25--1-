"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Calendar, Sparkles, MessageCircle, ArrowRight } from "lucide-react"
import { useState } from "react"

export function ExpertsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Citizenship by Investment",
  })

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-3xl animate-parallax-float"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 glass-gold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-xl border border-primary/20">
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-primary">Expert Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance font-space-grotesk px-4">
            Speak with Our{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
              Experts
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-pretty leading-relaxed px-4">
            Get personalized guidance from our experienced team of citizenship and residency specialists
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border-0 glass-card backdrop-blur-xl shadow-2xl overflow-hidden relative group">
            {/* Animated luxury border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 opacity-60 animate-gradient-shift"></div>
            <div className="absolute inset-[1px] sm:inset-[2px] bg-card/98 backdrop-blur-xl rounded-lg"></div>

            <CardContent className="p-0 relative z-10">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground p-6 sm:p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden order-2 md:order-1">
                  {/* Luxury decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-white/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-white/5 rounded-full blur-3xl"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial-gold opacity-10"></div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-xl rounded-2xl mb-4 sm:mb-6 animate-pulse-glow">
                      <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 animate-pulse" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-balance leading-tight">
                      Ready to Start Your Journey?
                    </h3>
                    <p className="text-primary-foreground/90 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                      Book a free consultation with our experts and discover the best citizenship and residency options
                      tailored to your needs.
                    </p>

                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-center gap-3 sm:gap-4 group/item">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white/15 backdrop-blur-xl rounded-xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-white/25 transition-all duration-300 shadow-lg">
                          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm opacity-90 font-medium">Call Us</div>
                          <div className="font-bold text-base sm:text-lg">(+234) 708-500-3333</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 sm:gap-4 group/item">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white/15 backdrop-blur-xl rounded-xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-white/25 transition-all duration-300 shadow-lg">
                          <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm opacity-90 font-medium">Email Us</div>
                          <div className="font-bold text-sm sm:text-lg break-all">contact@orientheight.com</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 sm:gap-4 group/item">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white/15 backdrop-blur-xl rounded-xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-white/25 transition-all duration-300 shadow-lg">
                          <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm opacity-90 font-medium">Business Hours</div>
                          <div className="font-bold text-sm sm:text-base">Mon-Fri: 8 AM - 5 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-card/60 via-card/50 to-card/60 backdrop-blur-xl relative order-1 md:order-2">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6 sm:mb-8">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold">Schedule a Consultation</h3>
                    </div>

                    <form className="space-y-4 sm:space-y-6">
                      <div className="group">
                        <label className="block text-xs sm:text-sm font-semibold mb-2 text-foreground/90 uppercase tracking-wide">
                          Full Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 sm:py-4 rounded-xl border-2 border-primary/20 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-sm sm:text-base group-hover:border-primary/40"
                            placeholder="John Doe"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-xs sm:text-sm font-semibold mb-2 text-foreground/90 uppercase tracking-wide">
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 sm:py-4 rounded-xl border-2 border-primary/20 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-sm sm:text-base group-hover:border-primary/40"
                            placeholder="john@example.com"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-xs sm:text-sm font-semibold mb-2 text-foreground/90 uppercase tracking-wide">
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 sm:py-4 rounded-xl border-2 border-primary/20 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-sm sm:text-base group-hover:border-primary/40"
                            placeholder="+1 (555) 000-0000"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-xs sm:text-sm font-semibold mb-2 text-foreground/90 uppercase tracking-wide">
                          Interested In
                        </label>
                        <div className="relative">
                          <select
                            value={formData.interest}
                            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                            className="w-full px-4 py-3 sm:py-4 rounded-xl border-2 border-primary/20 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-sm sm:text-base appearance-none cursor-pointer group-hover:border-primary/40"
                          >
                            <option>Citizenship by Investment</option>
                            <option>Residency Programs</option>
                            <option>Real Estate Investment</option>
                            <option>Tax Optimization</option>
                          </select>
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-white py-5 sm:py-6 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl relative overflow-hidden group/btn">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span>Book Free Consultation</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>

                      <p className="text-xs sm:text-sm text-muted-foreground text-center mt-3 sm:mt-4">
                        🔒 Your information is secure and confidential
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
