"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ExternalLink } from "lucide-react"
import { LeadCaptureModal } from "@/components/lead-capture-modal"

interface BrochureDownloadFormProps {
  country: string
  type: "citizenship" | "residency"
  brochureUrl: string // Made required instead of optional
}

export function BrochureDownloadForm({ country, type, brochureUrl }: BrochureDownloadFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDownload = () => {
    setIsModalOpen(true)
  }

  const url = brochureUrl

  return (
    <>
      <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Download className="w-5 h-5 text-primary" />
            Download Program Brochure
          </CardTitle>
          <CardDescription className="text-slate-300">
            Get detailed information about the {country} {type} program
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <h4 className="font-semibold text-white mb-2">What's Included:</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Detailed program requirements and investment options
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Benefits and advantages of the program
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Step-by-step application process
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Processing timelines and fees
              </li>
            </ul>
          </div>

          <Button
            onClick={handleDownload}
            className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Download className="w-5 h-5 mr-2" />
            Download {type === "citizenship" ? "Citizenship" : "Residency"} Brochure
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>

          <p className="text-xs text-slate-400 text-center">Fill in your details to access the brochure</p>
        </CardContent>
      </Card>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        brochureType={type}
        brochureUrl={url}
        country={country}
      />
    </>
  )
}
