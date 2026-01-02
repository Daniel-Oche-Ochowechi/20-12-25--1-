"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleStop = () => setIsLoading(false)

    // Listen for route changes
    window.addEventListener("beforeunload", handleStart)

    return () => {
      window.removeEventListener("beforeunload", handleStart)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin"></div>
        </div>
        <p className="text-sm font-medium text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}
