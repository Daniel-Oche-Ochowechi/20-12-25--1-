import { Card, CardContent } from "@/components/ui/card"
import { Calendar, FileSearch, Shield } from "lucide-react"

const processSteps = [
  {
    icon: Calendar,
    title: "Initial Consultation",
    description: "Personalized advisory session to understand your needs and recommend the best solutions.",
  },
  {
    icon: FileSearch,
    title: "Program Selection & Application",
    description:
      "Guidance through the application process, ensuring efficiency and confidentiality every step of the way.",
  },
  {
    icon: Shield,
    title: "Secure Your Status",
    description: "Finalize your citizenship or residency with ongoing support and peace of mind.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-primary/30 shadow-lg shadow-primary/10">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Work Process
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            HOW IT WORKS?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Our streamlined three-step process makes achieving your global mobility goals simple and efficient
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border border-slate-700/50 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl hover:border-primary/50 hover:scale-105"
            >
              <CardContent className="p-10 text-center relative">
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-primary/30 via-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-8 group-hover:from-primary/40 group-hover:to-accent/30 transition-all duration-500 border border-primary/30 group-hover:border-primary/50 shadow-lg shadow-primary/10 group-hover:shadow-primary/20 group-hover:rotate-6">
                  <step.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>

                <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-base group-hover:text-gray-200 transition-colors duration-300">
                  {step.description}
                </p>

                <div className="absolute -top-5 -right-5 w-12 h-12 bg-gradient-to-br from-primary to-accent border-2 border-slate-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>

                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-8">
          <div className="relative h-1">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
