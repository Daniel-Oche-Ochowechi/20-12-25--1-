"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, TrendingUp } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { citizenshipPrograms } from "@/lib/citizenship-data"
import { residencyPrograms } from "@/lib/residency-data"

export function ComparisonSection() {
  const [country1, setCountry1] = useState(citizenshipPrograms[0])
  const [country2, setCountry2] = useState(citizenshipPrograms[1])
  const [residency1, setResidency1] = useState(residencyPrograms[0])
  const [residency2, setResidency2] = useState(residencyPrograms[1])

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-background via-primary/5 via-30% to-accent/5 relative overflow-hidden">
      {/* Primary glow - top left */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-3xl animate-parallax-float"></div>

      {/* Accent glow - bottom right */}
      <div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-accent/30 to-accent/10 rounded-full blur-3xl animate-parallax-float"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Additional accent glow - middle left */}
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-3xl"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Additional primary glow - middle right */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-gradient-to-l from-primary/20 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 glass-gold px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6 backdrop-blur-xl border border-primary/20">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-primary">Compare Programs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-balance font-space-grotesk px-4">
            Compare{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
              Investment Programs
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed px-4">
            Select two countries to compare their citizenship or residency programs side by side
          </p>
        </div>

        <Tabs defaultValue="citizenship" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8 md:mb-12 glass-card backdrop-blur-xl">
            <TabsTrigger value="citizenship" className="text-xs sm:text-sm md:text-base">
              Citizenship Programs
            </TabsTrigger>
            <TabsTrigger value="residency" className="text-xs sm:text-sm md:text-base">
              Residency Programs
            </TabsTrigger>
          </TabsList>

          {/* Citizenship Comparison */}
          <TabsContent value="citizenship">
            <div className="mb-6 sm:mb-8 md:mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <Select
                  value={country1.country}
                  onValueChange={(value) =>
                    setCountry1(citizenshipPrograms.find((c) => c.country === value) || citizenshipPrograms[0])
                  }
                >
                  <SelectTrigger className="h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg glass-card backdrop-blur-xl border-primary/20 hover:border-primary/40 transition-colors">
                    <SelectValue placeholder="Select first country" />
                  </SelectTrigger>
                  <SelectContent className="glass-card backdrop-blur-xl">
                    {citizenshipPrograms.map((country) => (
                      <SelectItem key={country.id} value={country.country} className="text-sm sm:text-base">
                        {country.country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={country2.country}
                  onValueChange={(value) =>
                    setCountry2(citizenshipPrograms.find((c) => c.country === value) || citizenshipPrograms[1])
                  }
                >
                  <SelectTrigger className="h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg glass-card backdrop-blur-xl border-primary/20 hover:border-primary/40 transition-colors">
                    <SelectValue placeholder="Select second country" />
                  </SelectTrigger>
                  <SelectContent className="glass-card backdrop-blur-xl">
                    {citizenshipPrograms.map((country) => (
                      <SelectItem key={country.id} value={country.country} className="text-sm sm:text-base">
                        {country.country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {[country1, country2].map((country, index) => (
                <Card
                  key={index}
                  className="group border-0 glass-card backdrop-blur-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift"></div>
                  <div className="absolute inset-[2px] bg-card rounded-lg"></div>

                  <CardContent className="p-4 sm:p-6 md:p-8 relative z-10">
                    <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {country.country}
                      </h3>
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary animate-pulse" />
                    </div>

                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                      <div className="flex justify-between items-center py-2 sm:py-3 md:py-4 border-b border-primary/10 hover:border-primary/30 transition-colors">
                        <span className="text-muted-foreground font-medium text-xs sm:text-sm md:text-base">
                          Minimum Investment
                        </span>
                        <span className="font-bold text-sm sm:text-base md:text-lg text-primary">
                          {country.minInvestment}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2 sm:py-3 md:py-4 border-b border-primary/10 hover:border-primary/30 transition-colors">
                        <span className="text-muted-foreground font-medium text-xs sm:text-sm md:text-base">
                          Processing Time
                        </span>
                        <span className="font-bold text-sm sm:text-base md:text-lg">{country.processingTime}</span>
                      </div>

                      <div className="flex justify-between items-center py-2 sm:py-3 md:py-4 border-b border-primary/10 hover:border-primary/30 transition-colors">
                        <span className="text-muted-foreground font-medium text-xs sm:text-sm md:text-base">
                          Global Mobility
                        </span>
                        <span className="font-bold text-sm sm:text-base md:text-lg text-primary">
                          {country.visaFree}
                        </span>
                      </div>
                    </div>

                    <Link href={`/services/citizenship/${country.slug}`}>
                      <Button className="w-full mt-4 sm:mt-6 md:mt-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="residency">
            <div className="mb-6 sm:mb-8 md:mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <Select
                  value={residency1.country}
                  onValueChange={(value) =>
                    setResidency1(residencyPrograms.find((c) => c.country === value) || residencyPrograms[0])
                  }
                >
                  <SelectTrigger className="h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg glass-card backdrop-blur-xl border-primary/20 hover:border-primary/40 transition-colors">
                    <SelectValue placeholder="Select first country" />
                  </SelectTrigger>
                  <SelectContent className="glass-card backdrop-blur-xl">
                    {residencyPrograms.map((country) => (
                      <SelectItem key={country.id} value={country.country} className="text-sm sm:text-base">
                        {country.country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={residency2.country}
                  onValueChange={(value) =>
                    setResidency2(residencyPrograms.find((c) => c.country === value) || residencyPrograms[1])
                  }
                >
                  <SelectTrigger className="h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg glass-card backdrop-blur-xl border-primary/20 hover:border-primary/40 transition-colors">
                    <SelectValue placeholder="Select second country" />
                  </SelectTrigger>
                  <SelectContent className="glass-card backdrop-blur-xl">
                    {residencyPrograms.map((country) => (
                      <SelectItem key={country.id} value={country.country} className="text-sm sm:text-base">
                        {country.country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {[residency1, residency2].map((country, index) => (
                <Card
                  key={index}
                  className="group border-0 glass-card backdrop-blur-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift"></div>
                  <div className="absolute inset-[2px] bg-card rounded-lg"></div>

                  <CardContent className="p-4 sm:p-6 md:p-8 relative z-10">
                    <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {country.country}
                      </h3>
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary animate-pulse" />
                    </div>

                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                      <div className="flex justify-between items-start py-2 sm:py-3 md:py-4 border-b border-primary/10 hover:border-primary/30 transition-colors">
                        <span className="text-muted-foreground font-medium text-xs sm:text-sm md:text-base">
                          Investment
                        </span>
                        <span className="font-bold text-sm sm:text-base md:text-lg text-primary text-right max-w-[60%]">
                          {country.investment}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2 sm:py-3 md:py-4 border-b border-primary/10 hover:border-primary/30 transition-colors">
                        <span className="text-muted-foreground font-medium text-xs sm:text-sm md:text-base">
                          Processing Time
                        </span>
                        <span className="font-bold text-sm sm:text-base md:text-lg">{country.processingTime}</span>
                      </div>

                      <div className="flex justify-between items-start py-2 sm:py-3 md:py-4 border-b border-primary/10 hover:border-primary/30 transition-colors">
                        <span className="text-muted-foreground font-medium text-xs sm:text-sm md:text-base">
                          Mobility
                        </span>
                        <span className="font-bold text-sm sm:text-base md:text-lg text-primary text-right max-w-[60%]">
                          {country.mobility}
                        </span>
                      </div>

                      <div className="flex justify-between items-start py-2 sm:py-3 md:py-4 border-b border-primary/10 hover:border-primary/30 transition-colors">
                        <span className="text-muted-foreground font-medium text-xs sm:text-sm md:text-base">
                          Path to Citizenship
                        </span>
                        <span className="font-bold text-sm sm:text-base md:text-lg text-right max-w-[60%]">
                          {country.path}
                        </span>
                      </div>
                    </div>

                    <Link href={`/services/residency/${country.slug}`}>
                      <Button className="w-full mt-4 sm:mt-6 md:mt-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
