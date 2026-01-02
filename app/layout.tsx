import type React from "react"
import type { Metadata } from "next"
import { Lexend } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LoadingIndicator } from "@/components/loading-indicator"
import { ThemeToggle } from "@/components/theme-toggle"
import "./globals.css"

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://orientheight.com"),
  title: "OrientHeight - Global Citizenship & Investment Solutions",
  description:
    "Transform your lifestyle with elite citizenship programs designed to give you and your family unmatched global mobility and freedom.",
  generator: "Next.js",
  keywords:
    "global citizenship, second citizenship, residency programs, investment migration, tax optimization, real estate investment",
  authors: [{ name: "OrientHeight" }],
  openGraph: {
    title: "OrientHeight - Global Citizenship & Investment Solutions",
    description:
      "Transform your lifestyle with elite citizenship programs designed to give you and your family unmatched global mobility and freedom.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/images/orientheight-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/orientheight-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/orientheight-logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/images/orientheight-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lexend.variable}`}>
      <body className="font-sans antialiased">
        <LoadingIndicator />
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
