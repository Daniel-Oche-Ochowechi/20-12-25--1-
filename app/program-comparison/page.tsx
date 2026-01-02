"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Check,
  Clock,
  DollarSign,
  Globe,
  Users,
  Plane,
  Filter,
  ArrowUpDown,
  Search,
  FileText,
  Home,
  Building2,
} from "lucide-react"
import Link from "next/link"
import { citizenshipPrograms } from "@/lib/citizenship-data"
import { residencyPrograms } from "@/lib/residency-data"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProgramComparison() {
  const [activeTab, setActiveTab] = useState<"citizenship" | "residency">("citizenship")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"investment" | "time" | "mobility">("investment")
  const [regionFilter, setRegionFilter] = useState<string>("all")

  const citizenshipData = useMemo(
    () =>
      citizenshipPrograms.map((program) => ({
        name: program.country,
        type: "Citizenship" as const,
        region:
          program.country.includes("Kitts") ||
          program.country.includes("Lucia") ||
          program.country.includes("Grenada") ||
          program.country.includes("Dominica") ||
          program.country.includes("Antigua")
            ? "Caribbean"
            : program.country === "Vanuatu" || program.country === "Nauru"
              ? "Pacific"
              : program.country === "Turkey"
                ? "Europe/Asia"
                : program.country === "Egypt"
                  ? "Africa"
                  : "Other",
        minInvestment: program.minInvestment,
        timeframe: program.processingTime,
        visaFreeCountries: program.visaFree,
        familyInclusion: "Yes",
        residencyRequirement: program.country === "Antigua and Barbuda" ? "5 days in 5 years" : "Varies by program",
        href: `/services/citizenship/${program.slug}`,
        summary: program.summary,
      })),
    [],
  )

  const residencyData = useMemo(
    () =>
      residencyPrograms.map((program) => ({
        name: program.country,
        type: "Residency" as const,
        region: program.region,
        minInvestment: program.investment.split("|")[0].replace(/.*?:/, "").trim(),
        timeframe: program.processingTime,
        visaFreeCountries: program.mobility.includes("countries")
          ? program.mobility.match(/\d+/)?.[0] + " countries"
          : program.mobility,
        familyInclusion: "Yes",
        residencyRequirement: program.path.split(",")[0],
        href: `/services/residency/${program.slug}`,
        summary: program.summary,
      })),
    [],
  )

  const allPrograms = activeTab === "citizenship" ? citizenshipData : residencyData

  // Get unique regions for filter
  const regions = useMemo(() => {
    const uniqueRegions = new Set(allPrograms.map((p) => p.region))
    return ["all", ...Array.from(uniqueRegions)]
  }, [allPrograms])

  // Filter and sort programs
  const filteredPrograms = useMemo(() => {
    let filtered = allPrograms

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter((program) => program.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    // Apply region filter
    if (regionFilter !== "all") {
      filtered = filtered.filter((program) => program.region === regionFilter)
    }

    // Apply sorting
    filtered = [...filtered].sort((a, b) => {
      if (sortBy === "investment") {
        const aNum = Number.parseInt(a.minInvestment.replace(/[^0-9]/g, ""))
        const bNum = Number.parseInt(b.minInvestment.replace(/[^0-9]/g, ""))
        return aNum - bNum
      } else if (sortBy === "time") {
        const aMonths = Number.parseInt(a.timeframe.match(/\d+/)?.[0] || "0")
        const bMonths = Number.parseInt(b.timeframe.match(/\d+/)?.[0] || "0")
        return aMonths - bMonths
      } else {
        const aVisa = Number.parseInt(a.visaFreeCountries.replace(/[^0-9]/g, "") || "0")
        const bVisa = Number.parseInt(b.visaFreeCountries.replace(/[^0-9]/g, "") || "0")
        return bVisa - aVisa
      }
    })

    return filtered
  }, [allPrograms, searchQuery, regionFilter, sortBy])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                Compare Programs
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
                Find Your Perfect <span className="text-primary">Global Mobility</span> Solution
              </h1>
              <p className="text-xl text-slate-300 mb-8 text-pretty leading-relaxed">
                Compare citizenship and residency programs side by side with our interactive comparison tool. Filter,
                sort, and discover the ideal program for your family's future.
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Controls Section */}
        <section className="pb-8">
          <div className="container mx-auto px-4 lg:px-6">
            <Card className="border-slate-700 bg-slate-900/50 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-6">
                <Tabs
                  value={activeTab}
                  onValueChange={(v) => setActiveTab(v as "citizenship" | "residency")}
                  className="mb-6"
                >
                  <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-slate-800/50">
                    <TabsTrigger
                      value="citizenship"
                      className="data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Citizenship
                    </TabsTrigger>
                    <TabsTrigger
                      value="residency"
                      className="data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      <Home className="w-4 h-4 mr-2" />
                      Residency
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="grid md:grid-cols-3 gap-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      placeholder="Search countries..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
                    />
                  </div>

                  {/* Region Filter */}
                  <Select value={regionFilter} onValueChange={setRegionFilter}>
                    <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Filter by region" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      {regions.map((region) => (
                        <SelectItem key={region} value={region} className="text-white hover:bg-slate-700">
                          {region === "all" ? "All Regions" : region}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Sort By */}
                  <Select value={sortBy} onValueChange={(v) => setSortBy(v as typeof sortBy)}>
                    <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
                      <ArrowUpDown className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="investment" className="text-white hover:bg-slate-700">
                        Investment Amount
                      </SelectItem>
                      <SelectItem value="time" className="text-white hover:bg-slate-700">
                        Processing Time
                      </SelectItem>
                      <SelectItem value="mobility" className="text-white hover:bg-slate-700">
                        Global Mobility
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mt-4 text-sm text-slate-400 text-center">
                  Showing {filteredPrograms.length} {activeTab} {filteredPrograms.length === 1 ? "program" : "programs"}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Comparison Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((program, index) => (
                <Card
                  key={index}
                  className="border-slate-700 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 group"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <Badge
                        variant={program.type === "Citizenship" ? "default" : "secondary"}
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {program.type}
                      </Badge>
                      <Badge variant="outline" className="border-slate-600 text-slate-300">
                        {program.region}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-white group-hover:text-primary transition-colors">
                      {program.name}
                    </CardTitle>
                    {program.summary && (
                      <p className="text-sm text-slate-400 mt-2 leading-relaxed line-clamp-3">{program.summary}</p>
                    )}
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Investment */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-5 h-5 text-primary" />
                        <span className="text-sm text-slate-300">Min. Investment</span>
                      </div>
                      <span className="font-semibold text-primary">{program.minInvestment}</span>
                    </div>

                    {/* Processing Time */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-blue-400" />
                        <span className="text-sm text-slate-300">Processing</span>
                      </div>
                      <span className="font-medium text-white">{program.timeframe}</span>
                    </div>

                    {/* Global Mobility */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                      <div className="flex items-center space-x-2">
                        <Plane className="w-5 h-5 text-green-400" />
                        <span className="text-sm text-slate-300">Global Mobility</span>
                      </div>
                      <span className="font-medium text-white">{program.visaFreeCountries}</span>
                    </div>

                    {/* Family Inclusion */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-purple-400" />
                        <span className="text-sm text-slate-300">Family</span>
                      </div>
                      <Check className="w-5 h-5 text-green-500" />
                    </div>

                    {/* Residency Requirement */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-5 h-5 text-orange-400" />
                        <span className="text-sm text-slate-300">Residency</span>
                      </div>
                      <span className="text-xs text-slate-400 text-right max-w-[120px]">
                        {program.residencyRequirement}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <Link href={program.href} className="block mt-4">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/50">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPrograms.length === 0 && (
              <Card className="border-slate-700 bg-slate-900/50 backdrop-blur-sm p-12">
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No programs found</h3>
                  <p className="text-slate-400">Try adjusting your filters or search query</p>
                </div>
              </Card>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

          <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance leading-tight">
                Need Help Choosing the <span className="text-primary">Right Program?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-10 text-pretty leading-relaxed">
                Our expert advisors will analyze your unique situation and recommend the perfect citizenship or
                residency program tailored to your goals and requirements.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-xl font-semibold shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 hover:scale-105"
                >
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
