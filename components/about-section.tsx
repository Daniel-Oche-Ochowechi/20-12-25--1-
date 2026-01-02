import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-28 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/8 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div
        className="absolute bottom-40 left-20 w-96 h-96 bg-accent/8 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/30 bg-slate-700/80">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-white font-semibold">Why Choose Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-balance leading-tight text-white">
              Why Choose <span className="text-primary">OrientHeight?</span>
            </h2>

            <div className="space-y-6 mb-12">
              <div className="group glass-card backdrop-blur-xl border border-primary/20 p-7 rounded-2xl hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-slate-800/60 hover:bg-slate-800/80">
                <div className="flex items-start space-x-5">
                  <div className="bg-gradient-to-br from-primary/50 to-primary/30 p-3 rounded-xl group-hover:from-primary/70 group-hover:to-primary/50 transition-all duration-300 flex-shrink-0 mt-1">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-white">Advanced AI</h3>
                    <p className="text-gray-300 leading-relaxed">
                      International Mobility Solutions powered by cutting-edge technology and expert guidance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group glass-card backdrop-blur-xl border border-primary/20 p-7 rounded-2xl hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-slate-800/60 hover:bg-slate-800/80">
                <div className="flex items-start space-x-5">
                  <div className="bg-gradient-to-br from-primary/50 to-primary/30 p-3 rounded-xl group-hover:from-primary/70 group-hover:to-primary/50 transition-all duration-300 flex-shrink-0 mt-1">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-white">Mission & Vision</h3>
                    <p className="text-gray-300 leading-relaxed">
                      OrientHeight delivers world-class, secure pathways for citizenship, residency, and tax
                      optimization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group glass-card backdrop-blur-xl border border-primary/20 p-7 rounded-2xl hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-slate-800/60 hover:bg-slate-800/80">
                <div className="flex items-start space-x-5">
                  <div className="bg-gradient-to-br from-primary/50 to-primary/30 p-3 rounded-xl group-hover:from-primary/70 group-hover:to-primary/50 transition-all duration-300 flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-white">Expert Guidance</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Get personalized guidance for your global mobility journey from our experienced team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              Contact us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          <div className="relative animate-fade-in-up">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl transform group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative glass-card overflow-hidden border border-white/20 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                <img
                  src="/images/about-4.png"
                  alt="OrientHeight Team"
                  className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass-card backdrop-blur-xl border border-primary/20 text-primary-foreground p-6 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-xl font-bold">ORIENTHEIGHT</div>
                <div className="text-xs opacity-90 font-medium mt-1">Global Solutions</div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/15 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
