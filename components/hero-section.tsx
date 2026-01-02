"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Shield, TrendingUp, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/luxury-coastal-villa-with-ocean-view-and-modern-ar.jpg"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80"></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-parallax-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-parallax-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-parallax-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div
        className={`relative z-10 container mx-auto px-4 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-10">
            <div
              className={`flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 mb-8 text-xs sm:text-sm transition-all duration-700 delay-100 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            >
              <div className="flex items-center gap-2 glass-gold px-3 sm:px-4 py-2 rounded-full backdrop-blur-xl border border-primary/30">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
                <span className="whitespace-nowrap text-white font-medium">Trusted by 100+ Clients</span>
              </div>
              <div className="flex items-center gap-2 glass-gold px-3 sm:px-4 py-2 rounded-full backdrop-blur-xl border border-primary/30">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
                <span className="whitespace-nowrap text-white font-medium">10+ Countries</span>
              </div>
              <div className="flex items-center gap-2 glass-gold px-3 sm:px-4 py-2 rounded-full backdrop-blur-xl border border-primary/30">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
                <span className="whitespace-nowrap text-white font-medium">100% Success</span>
              </div>
            </div>

            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-10 text-balance leading-tight transition-all duration-700 delay-200 ${isVisible ? "animate-scale-in" : "opacity-0"} text-white`}
            >
              <span className="text-foreground">Unlock the World of</span>{" "}
              <span className="relative inline-block">
                <span className="text-primary relative z-10 animate-pulse-glow">Global</span>
                <Sparkles
                  className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 text-primary animate-spin"
                  style={{ animationDuration: "3s" }}
                />
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-primary/50 rounded-full animate-pulse"></div>
              </span>{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
                Citizenship
              </span>
            </h1>

            <p
              className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-10 sm:mb-14 text-gray-200 max-w-3xl mx-auto lg:mx-0 text-pretty leading-relaxed transition-all duration-700 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            >
              Transform your lifestyle with elite citizenship programs designed to give you and your family unmatched
              global mobility and freedom.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-10 sm:mb-14 transition-all duration-700 delay-400 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            >
              <Link href="/services">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group animate-pulse-glow"
                >
                  Our Services
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto glass-gold border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 bg-transparent backdrop-blur-xl"
                >
                  Get Free Quote
                </Button>
              </Link>
            </div>

            <div
              className={`flex justify-center lg:justify-start transition-all duration-700 delay-500 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
            >
              <div className="glass-card rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-xl border border-primary/30">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-gold flex items-center justify-center animate-pulse-glow">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm text-gray-300 font-medium">Certified by</div>
                    <div className="text-sm sm:text-base font-semibold text-white">OrientHeight Expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div
            className={`hidden lg:flex justify-center items-center transition-all duration-700 delay-600 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500 animate-pulse-glow"></div>
              <div className="relative z-10 transform -rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
                <Image
                  src="/images/orientheight-passport.jpg"
                  alt="OrientHeight Citizenship Documents"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 glass rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center glass-gold backdrop-blur-xl">
          <div className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
