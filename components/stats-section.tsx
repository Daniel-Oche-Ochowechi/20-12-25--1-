"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Building, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  {
    icon: Users,
    number: 20,
    suffix: "+",
    label: "Countries Covered",
  },
  {
    icon: Award,
    number: 87,
    suffix: "",
    label: "Clients Served",
  },
  {
    icon: Building,
    number: 87,
    suffix: "",
    label: "Successful Applications",
  },
  {
    icon: TrendingUp,
    number: 17,
    suffix: "",
    label: "Strategic Partnerships",
  },
]

function CountingNumber({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = end / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, hasAnimated])

  return (
    <div ref={ref} className="text-4xl font-bold text-gray-900 mb-2">
      {count}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/80 border border-gray-200 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-10">
                <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <CountingNumber end={stat.number} suffix={stat.suffix} />
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
