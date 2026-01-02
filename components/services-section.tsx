"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dessert as Passport, Home, Building, Calculator, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const services = [
  {
    icon: Passport,
    title: "CITIZENSHIP",
    description:
      "Gain Second citizenship through investment, residency, or special programs. Unlock tax efficiency, and generational freedom for you and your family.",
    image: "/passport-and-citizenship-documents-on-elegant-desk.jpg",
    color: "from-primary/20 to-primary/10",
  },
  {
    icon: Home,
    title: "RESIDENCY",
    description:
      "Secure permanent residency in top destinations through investment programs. Access to full citizenship and access to a world-class lifestyle and business benefits.",
    image: "/luxury-residential-property-with-modern-architectu.jpg",
    color: "from-primary/15 to-primary/5",
  },
  {
    icon: Building,
    title: "REAL ESTATE",
    description:
      "Discover premium real estate options that does not only secure your residency but also grow your investment portfolio.",
    image: "/luxury-real-estate-development-with-modern-buildin.jpg",
    color: "from-primary/10 to-primary/5",
  },
  {
    icon: Calculator,
    title: "TAX",
    description:
      "Benefiting from our bespoke tax solution designed to optimize your financial portfolio, ensure compliance, and maximize wealth within global frameworks.",
    image: "/professional-tax-consultation-meeting-in-modern-of.jpg",
    color: "from-primary/25 to-primary/15",
  },
]

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="services"
      className="py-24 sm:py-28 lg:py-32 bg-gradient-to-b from-card/20 to-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/4 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 glass-gold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-xl border border-primary/30">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-white font-semibold">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-balance font-space-grotesk leading-tight px-4 text-white">
            We Provide High Quality{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
              Elite Services
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive solutions for global citizenship, residency, and investment opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={
                service.title === "CITIZENSHIP"
                  ? "/services/citizenship"
                  : service.title === "RESIDENCY"
                    ? "/services/residency"
                    : service.title === "REAL ESTATE"
                      ? "/services/real-estate"
                      : "/services/tax"
              }
            >
              <Card
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group hover:shadow-2xl transition-all duration-500 border-0 glass-card backdrop-blur-xl bg-white hover:bg-gray-50 transform hover:-translate-y-2 overflow-hidden relative h-full cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift"></div>
                <div className="absolute inset-[1px] bg-white rounded-lg backdrop-blur-sm"></div>

                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="mx-auto mb-6 sm:mb-8 relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                    {hoveredIndex === index && (
                      <Sparkles className="absolute top-4 right-4 w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
                    )}
                  </div>

                  <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg border border-primary/30">
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>

                  <CardTitle className="text-lg sm:text-xl font-bold font-space-grotesk text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center relative z-10">
                  <p className="text-gray-700 mb-8 sm:mb-10 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs sm:text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
