"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppWidget() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "2347085003333"
    const message = encodeURIComponent("Hello! I'm interested in learning more about OrientHeight services.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-24 right-8 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  )
}
