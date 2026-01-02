"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Michael",
    country: "Singapore",
    program: "Portugal Golden Visa",
    rating: 5,
    text: "OrientHeight made the entire process seamless. Their expertise and attention to detail gave us complete confidence throughout our journey to Portuguese residency.",
    image: "/professional-asian-man.pg",
  },
  {
    name: "Sarah",
    country: "United Kingdom",
    program: "Grenada Citizenship",
    rating: 5,
    text: "Exceptional service from start to finish. The team's professionalism and knowledge of citizenship programs is unmatched. Highly recommended!",
    image: "/professional-british-woman.pg",
  },
  {
    name: "Ahmed",
    country: "UAE",
    program: "St. Kitts & Nevis",
    rating: 5,
    text: "Working with OrientHeight was the best decision we made. They guided us through every step and delivered results beyond our expectations.",
    image: "/professional-middle-eastern-man.pg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-primary/30 shadow-lg shadow-primary/10">
            <Star className="w-4 h-4 fill-primary text-primary" />
            Client Success Stories
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Hear from families who have successfully achieved their global mobility goals with OrientHeight
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border border-slate-700/50 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl hover:border-primary/50 hover:scale-105"
            >
              <CardContent className="p-10 relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl flex items-center justify-center border border-primary/30 shadow-lg shadow-primary/10 rotate-6 group-hover:rotate-12 transition-transform duration-500">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                <div className="flex gap-1 mb-6 mt-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"
                    />
                  ))}
                </div>

                <p className="text-gray-200 mb-8 leading-relaxed text-base font-light italic">"{testimonial.text}"</p>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-700/50">
                  <div className="relative">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/30 shadow-lg shadow-primary/10"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-slate-900 flex items-center justify-center">
                      <Star className="w-3 h-3 fill-white text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.program}</div>
                    <div className="text-xs text-gray-400 mt-1">{testimonial.country}</div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
