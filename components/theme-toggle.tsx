"use client"

import { useState, useEffect } from "react"
import { Palette } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [isWhiteTheme, setIsWhiteTheme] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem("color-theme")
    if (theme === "white") {
      setIsWhiteTheme(true)
      document.documentElement.classList.add("white-theme")
    }
  }, [])

  const toggleTheme = () => {
    if (isWhiteTheme) {
      document.documentElement.classList.remove("white-theme")
      localStorage.setItem("color-theme", "gold")
      setIsWhiteTheme(false)
    } else {
      document.documentElement.classList.add("white-theme")
      localStorage.setItem("color-theme", "white")
      setIsWhiteTheme(true)
    }
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="rounded-full border-2 hover:scale-110 transition-all duration-300 glass-gold shadow-lg hover:shadow-xl bg-transparent"
      title={isWhiteTheme ? "Switch to Gold Theme" : "Switch to White Theme"}
    >
      <Palette className="w-5 h-5" />
    </Button>
  )
}
