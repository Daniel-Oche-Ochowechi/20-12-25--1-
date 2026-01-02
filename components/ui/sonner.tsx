"use client"

import type React from "react"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group-[.toaster]:bg-white group-[.toaster]:text-slate-900 group-[.toaster]:border-slate-200 group-[.toaster]:shadow-2xl group-[.toaster]:rounded-xl",
          description: "group-[.toast]:text-slate-600",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-slate-900 group-[.toast]:font-semibold",
          cancelButton: "group-[.toast]:bg-slate-100 group-[.toast]:text-slate-900",
          success: "group-[.toaster]:bg-green-50 group-[.toaster]:text-green-900 group-[.toaster]:border-green-200",
          error: "group-[.toaster]:bg-red-50 group-[.toaster]:text-red-900 group-[.toaster]:border-red-200",
          info: "group-[.toaster]:bg-blue-50 group-[.toaster]:text-blue-900 group-[.toaster]:border-blue-200",
        },
      }}
      style={
        {
          "--normal-bg": "white",
          "--normal-text": "#0f172a",
          "--normal-border": "#e2e8f0",
          "--success-bg": "#f0fdf4",
          "--success-text": "#14532d",
          "--success-border": "#bbf7d0",
          "--error-bg": "#fef2f2",
          "--error-text": "#7f1d1d",
          "--error-border": "#fecaca",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
