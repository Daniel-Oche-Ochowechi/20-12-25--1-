"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Download, FileText, Globe } from "lucide-react"
import { LeadCaptureModal } from "@/components/lead-capture-modal"

export function DownloadBrochureModal() {
  const [selectedType, setSelectedType] = useState<"citizenship" | "residency" | null>(null)
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false)
  const [isMainModalOpen, setIsMainModalOpen] = useState(false)

  const brochureLinks = {
    citizenship: "https://drive.google.com/file/d/1yHONR7vUB7SFVZP_Duc4cOlCEJbUtRWa/view?usp=sharing",
    residency: "https://drive.google.com/file/d/1a6r9D5sTiwZ7hVyiBKD4kfVFwdxvR0_h/view?usp=sharing",
  }

  const handleDownload = (type: "citizenship" | "residency") => {
    setSelectedType(type)
    setIsMainModalOpen(false)
    setIsLeadModalOpen(true)
  }

  return (
    <>
      <Dialog open={isMainModalOpen} onOpenChange={setIsMainModalOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Brochure
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">Choose Your Brochure</DialogTitle>
            <p className="text-slate-300 mt-2">Select the program type you're interested in</p>
          </DialogHeader>

          <div className="space-y-4 mt-6">
            <button
              onClick={() => handleDownload("citizenship")}
              className="w-full group relative overflow-hidden rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-6 text-left transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                    Citizenship Programs
                  </h3>
                  <p className="text-sm text-slate-400">
                    Explore citizenship by investment opportunities in Caribbean and global destinations
                  </p>
                </div>
                <Download className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>

            <button
              onClick={() => handleDownload("residency")}
              className="w-full group relative overflow-hidden rounded-xl border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5 p-6 text-left transition-all hover:border-accent hover:shadow-xl hover:shadow-accent/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all" />
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-all">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                    Residency Programs
                  </h3>
                  <p className="text-sm text-slate-400">
                    Discover residency by investment programs in Europe, Americas, and beyond
                  </p>
                </div>
                <Download className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          </div>

          <p className="text-xs text-slate-500 text-center mt-4">Fill in your details to access the brochure</p>
        </DialogContent>
      </Dialog>

      {selectedType && (
        <LeadCaptureModal
          isOpen={isLeadModalOpen}
          onClose={() => {
            setIsLeadModalOpen(false)
            setSelectedType(null)
          }}
          brochureType={selectedType}
          brochureUrl={brochureLinks[selectedType]}
        />
      )}
    </>
  )
}
