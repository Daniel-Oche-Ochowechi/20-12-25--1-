"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface LeadCaptureModalProps {
  isOpen: boolean
  onClose: () => void
  brochureType: "citizenship" | "residency"
  brochureUrl: string
  country?: string
}

export function LeadCaptureModal({ isOpen, onClose, brochureType, brochureUrl, country }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/brochure-leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          brochureType,
          country: country || null,
          brochureUrl, // Send URL for server-side validation
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Failed to submit form" }))
        throw new Error(errorData.error || "Failed to submit form")
      }

      // Show success message
      toast({
        title: "Success!",
        description: "Your brochure download will begin shortly.",
      })

      // Reset form
      setFormData({ fullName: "", email: "", phone: "" })

      // Close modal
      onClose()

      // Open brochure URL in new tab
      window.open(brochureUrl, "_blank")
    } catch (error) {
      console.error("[v0] Error submitting lead capture form:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Download Your Brochure</DialogTitle>
          <DialogDescription className="text-slate-300">
            Please provide your contact information to access the {country ? `${country} ` : ""}
            {brochureType === "citizenship" ? "Citizenship" : "Residency"} {country ? "Program" : "Programs"} brochure.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-white">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="John Doe"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-slate-700 text-white hover:bg-slate-800 bg-transparent"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Download Now
                </>
              )}
            </Button>
          </div>
        </form>

        <p className="text-xs text-slate-500 text-center mt-4">
          Your information will be kept confidential and used only for this service.
        </p>
      </DialogContent>
    </Dialog>
  )
}
