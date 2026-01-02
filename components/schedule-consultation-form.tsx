"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Mail, User, Phone, Sparkles, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface ScheduleConsultationFormProps {
  country: string
  type: "citizenship" | "residency"
}

export function ScheduleConsultationForm({ country, type }: ScheduleConsultationFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!date) {
      toast.error("Please select a preferred date")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          country,
          programType: type,
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          preferredDate: format(date, "yyyy-MM-dd"),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to schedule consultation")
      }

      setShowSuccessDialog(true)

      // Reset form
      setFormData({ name: "", email: "", phone: "" })
      setDate(undefined)
    } catch (error) {
      console.error("[v0] Error scheduling consultation:", error)
      toast.error("Failed to schedule consultation", {
        description: error instanceof Error ? error.message : "Please try again or contact support.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Card className="border-[#d4af37]/20 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-sm shadow-2xl">
        <CardHeader className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#d4af37]/10">
              <Sparkles className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-white">Schedule Your Consultation</CardTitle>
              <CardDescription className="text-slate-300 mt-1">
                Book a complimentary consultation with our expert advisors
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <User className="w-4 h-4 text-[#d4af37]" />
                Full Name
              </label>
              <Input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-[#d4af37] focus:ring-[#d4af37]/20 h-12"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37]" />
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-[#d4af37] focus:ring-[#d4af37]/20 h-12"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                Phone Number
              </label>
              <Input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-[#d4af37] focus:ring-[#d4af37]/20 h-12"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-[#d4af37]" />
                Preferred Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    type="button"
                    className={cn(
                      "w-full h-12 justify-start text-left font-normal bg-slate-900/50 border-slate-700 hover:bg-slate-800/50 hover:border-[#d4af37]",
                      !date && "text-slate-500",
                      date && "text-white",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-[#d4af37]" />
                    {date ? format(date, "PPP") : "Select your preferred date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-slate-900 border-slate-700" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="bg-slate-900 text-white"
                    classNames={{
                      day_selected: "bg-[#d4af37] text-slate-900 hover:bg-[#d4af37] hover:text-slate-900",
                      day_today: "bg-slate-800 text-[#d4af37]",
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-[#d4af37] to-[#c9a961] hover:from-[#c9a961] hover:to-[#d4af37] text-slate-900 font-bold text-base shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin mr-2" />
                  Scheduling...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </>
              )}
            </Button>

            <p className="text-xs text-slate-400 text-center mt-4">
              We respect your privacy. Your information will be kept confidential.
            </p>
          </form>
        </CardContent>
      </Card>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md bg-slate-900 border-[#d4af37]/30">
          <DialogHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-[#d4af37]" />
            </div>
            <DialogTitle className="text-2xl font-bold text-white">Consultation Request Received!</DialogTitle>
            <div className="text-slate-300 text-base space-y-3">
              <p>Thank you for scheduling a consultation with OrientHeight.</p>
              <p className="font-semibold text-[#d4af37]">
                Our expert advisors will contact you within 24 hours to confirm your appointment and discuss your
                {type === "citizenship" ? " citizenship " : " residency "}
                goals.
              </p>
              <p className="text-sm text-slate-400 mt-4">
                Check your email for a confirmation message with next steps.
              </p>
            </div>
          </DialogHeader>
          <div className="mt-4">
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="w-full bg-gradient-to-r from-[#d4af37] to-[#c9a961] hover:from-[#c9a961] hover:to-[#d4af37] text-slate-900 font-semibold"
            >
              Got it, thanks!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
