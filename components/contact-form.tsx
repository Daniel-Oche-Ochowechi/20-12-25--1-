"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createClient } from "@/lib/supabase/client"
import { ArrowRight, AlertCircle, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceInterest: "Second Citizenship",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const supabase = createClient()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const { error: insertError } = await supabase.from("contact_submissions").insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        service_interest: formData.serviceInterest,
        message: formData.message,
      })

      if (insertError) throw insertError

      setSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceInterest: "Second Citizenship",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while submitting the form")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="text-sm font-semibold text-slate-900 mb-3 block uppercase tracking-wide">First Name</label>
          <Input
            name="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="bg-slate-50 border-slate-300 h-12 rounded-lg text-slate-900 focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-900 mb-3 block uppercase tracking-wide">Last Name</label>
          <Input
            name="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="bg-slate-50 border-slate-300 h-12 rounded-lg text-slate-900 focus:border-primary focus:ring-primary"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-semibold text-slate-900 mb-3 block uppercase tracking-wide">Email</label>
        <Input
          name="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-slate-50 border-slate-300 h-12 rounded-lg text-slate-900 focus:border-primary focus:ring-primary"
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-slate-900 mb-3 block uppercase tracking-wide">Phone</label>
        <Input
          name="phone"
          type="tel"
          placeholder="(+234) 708-500-3333"
          value={formData.phone}
          onChange={handleChange}
          required
          className="bg-slate-50 border-slate-300 h-12 rounded-lg text-slate-900 focus:border-primary focus:ring-primary"
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-slate-900 mb-3 block uppercase tracking-wide">
          Service Interest
        </label>
        <select
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleChange}
          className="w-full p-3 h-12 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        >
          <option>Second Citizenship</option>
          <option>Residency Programs</option>
          <option>Real Estate Investment</option>
          <option>Tax Optimization</option>
          <option>General Inquiry</option>
        </select>
      </div>
      <div>
        <label className="text-sm font-semibold text-slate-900 mb-3 block uppercase tracking-wide">Message</label>
        <Textarea
          name="message"
          placeholder="Tell us about your goals and how we can help..."
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-slate-50 border-slate-300 min-h-[140px] rounded-lg resize-none focus:ring-2 focus:ring-primary focus:border-primary text-slate-900"
        />
      </div>

      {error && (
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5 flex gap-4 shadow-sm">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700 font-medium">{error}</p>
        </div>
      )}

      {success && (
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5 flex gap-4 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-green-700 font-medium">
            Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-slate-900 py-6 text-base font-bold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
      >
        {isLoading ? "Sending..." : "Send Message"}
        {!isLoading && <ArrowRight className="w-5 h-5" />}
      </Button>
    </form>
  )
}
