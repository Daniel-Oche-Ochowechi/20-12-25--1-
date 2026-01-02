"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import { DownloadBrochureModal } from "@/components/download-brochure-modal"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-900/98 backdrop-blur-md supports-[backdrop-filter]:bg-slate-900/95 border-b border-slate-700/60 shadow-lg">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="OrientHeight Logo"
                width={90}
                height={30}
                className="h-7 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-primary transition-all duration-300 font-medium">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-slate-200 shadow-xl w-80">
                <DropdownMenuLabel className="text-primary font-semibold">CITIZENSHIP</DropdownMenuLabel>
                <Link href="/services/citizenship/antigua">
                  <DropdownMenuItem className="text-slate-700 hover:bg-primary hover:text-white">
                    <div className="flex flex-col">
                      <span>Antigua</span>
                      <span className="text-xs text-muted-foreground">Caribbean</span>
                    </div>
                  </DropdownMenuItem>
                </Link>
                <Link href="/services/citizenship/turkiye">
                  <DropdownMenuItem className="text-slate-700 hover:bg-primary hover:text-white">
                    <div className="flex flex-col">
                      <span>Turkiye</span>
                      <span className="text-xs text-muted-foreground">Asia</span>
                    </div>
                  </DropdownMenuItem>
                </Link>
                <Link href="/services/citizenship/stkitts">
                  <DropdownMenuItem className="text-slate-700 hover:bg-primary hover:text-white">
                    <div className="flex flex-col">
                      <span>St. Kitts</span>
                      <span className="text-xs text-muted-foreground">Caribbean</span>
                    </div>
                  </DropdownMenuItem>
                </Link>
                <Link href="/services/citizenship/salvador">
                  <DropdownMenuItem className="text-slate-700 hover:bg-primary hover:text-white">
                    <div className="flex flex-col">
                      <span>El Salvador</span>
                      <span className="text-xs text-muted-foreground">Central America</span>
                    </div>
                  </DropdownMenuItem>
                </Link>
                <Link href="/services/citizenship/dominica">
                  <DropdownMenuItem className="text-slate-700 hover:bg-primary hover:text-white">
                    <div className="flex flex-col">
                      <span>Dominica</span>
                      <span className="text-xs text-muted-foreground">Caribbean</span>
                    </div>
                  </DropdownMenuItem>
                </Link>
                <Link href="/services/citizenship/grenada">
                  <DropdownMenuItem className="text-slate-700 hover:bg-primary hover:text-white">
                    <div className="flex flex-col">
                      <span>Grenada</span>
                      <span className="text-xs text-muted-foreground">Caribbean</span>
                    </div>
                  </DropdownMenuItem>
                </Link>
                <Link href="/services/citizenship/view-all">
                  <DropdownMenuItem className="text-slate-700 hover:bg-primary hover:text-white font-medium">
                    View All Citizenship Programs
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />

                <DropdownMenuLabel className="text-primary font-semibold">RESIDENCY</DropdownMenuLabel>
                <Link href="/services/residency/uae">
                  <DropdownMenuItem className="text-slate-700 hover:bg-primary hover:text-white">
                    <div className="flex flex-col">
                      <span>UAE</span>
                      <span className="text-xs text-muted-foreground">Asia</span>
                    </div>
                  </DropdownMenuItem>
                </Link>
                <Link href="/services/residency/uk">
                  <DropdownMenuItem className="text-slate-700 hover:bg-primary hover:text-white">
                    <div className="flex flex-col">
                      <span>United Kingdom</span>
                      <span className="text-xs text-muted-foreground">Europe</span>
                    </div>
                  </DropdownMenuItem>
                </Link>
                <Link href="/services/residency/italy">
                  <DropdownMenuItem className="text-slate-700 hover:bg-primary hover:text-white">
                    <div className="flex flex-col">
                      <span>Italy</span>
                      <span className="text-xs text-muted-foreground">Europe</span>
                    </div>
                  </DropdownMenuItem>
                </Link>
                <Link href="/services/residency/view-all">
                  <DropdownMenuItem className="text-slate-700 hover:bg-primary hover:text-white font-medium">
                    View All Residency Programs
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />

                <DropdownMenuLabel className="text-primary font-semibold">OTHER SERVICES</DropdownMenuLabel>
                <Link href="/services/tax">
                  <DropdownMenuItem className="text-slate-700 hover:bg-primary hover:text-white">
                    Tax Optimization
                  </DropdownMenuItem>
                </Link>
                <Link href="/services/real-estate">
                  <DropdownMenuItem className="text-slate-700 hover:bg-primary hover:text-white">
                    Property Investment
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className="text-white hover:text-primary transition-all duration-300 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/program-comparison"
              className="text-white hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Program Comparison
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-primary transition-all duration-300 font-medium">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-slate-200 shadow-xl">
                <Link href="/resources">
                  <DropdownMenuItem className="text-slate-700 hover:bg-primary hover:text-white">
                    Resource Center
                  </DropdownMenuItem>
                </Link>
                <Link href="/faq">
                  <DropdownMenuItem className="text-slate-700 hover:bg-primary hover:text-white">FAQ</DropdownMenuItem>
                </Link>
                <Link href="/process">
                  <DropdownMenuItem className="text-slate-700 hover:bg-primary hover:text-white">
                    Our Process
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/team"
              className="text-white hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/contact"
              className="text-white hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <DownloadBrochureModal />
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Free Quote
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-slate-700/60 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              {/* Services Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-white hover:text-primary transition-colors duration-300 py-2 font-medium"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-primary/30 pl-4">
                    <div className="text-primary font-semibold text-sm mb-2">CITIZENSHIP</div>
                    <Link
                      href="/services/citizenship/antigua"
                      className="block text-sm text-slate-300 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Antigua (Caribbean)
                    </Link>
                    <Link
                      href="/services/citizenship/turkiye"
                      className="block text-sm text-slate-300 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Turkiye (Asia)
                    </Link>
                    <Link
                      href="/services/citizenship/stkitts"
                      className="block text-sm text-slate-300 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      St. Kitts (Caribbean)
                    </Link>
                    <Link
                      href="/services/citizenship/salvador"
                      className="block text-sm text-slate-300 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      El Salvador (Central America)
                    </Link>
                    <Link
                      href="/services/citizenship/dominica"
                      className="block text-sm text-slate-300 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dominica (Caribbean)
                    </Link>
                    <Link
                      href="/services/citizenship/grenada"
                      className="block text-sm text-slate-300 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Grenada (Caribbean)
                    </Link>
                    <Link
                      href="/services/citizenship/view-all"
                      className="block text-sm font-medium text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      View All Citizenship
                    </Link>

                    <div className="text-primary font-semibold text-sm mb-2 mt-4">RESIDENCY</div>
                    <Link
                      href="/services/residency/uae"
                      className="block text-sm text-slate-300 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      UAE (Asia)
                    </Link>
                    <Link
                      href="/services/residency/uk"
                      className="block text-sm text-slate-300 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      United Kingdom (Europe)
                    </Link>
                    <Link
                      href="/services/residency/italy"
                      className="block text-sm text-slate-300 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Italy (Europe)
                    </Link>
                    <Link
                      href="/services/residency/view-all"
                      className="block text-sm font-medium text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      View All Residency
                    </Link>

                    <div className="text-primary font-semibold text-sm mb-2 mt-4">OTHER SERVICES</div>
                    <Link
                      href="/services/tax"
                      className="block text-sm text-slate-300 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Tax Optimization
                    </Link>
                    <Link
                      href="/services/real-estate"
                      className="block text-sm text-slate-300 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Property Investment
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-white hover:text-primary transition-colors duration-300 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/program-comparison"
                className="text-white hover:text-primary transition-colors duration-300 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Program Comparison
              </Link>

              {/* Resources Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-white hover:text-primary transition-colors duration-300 py-2 font-medium"
                  onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isMobileResourcesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isMobileResourcesOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-primary/30 pl-4">
                    <Link
                      href="/resources"
                      className="block text-sm text-slate-300 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Resource Center
                    </Link>
                    <Link
                      href="/faq"
                      className="block text-sm text-slate-300 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/process"
                      className="block text-sm text-slate-300 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Our Process
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/team"
                className="text-white hover:text-primary transition-colors duration-300 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-primary transition-colors duration-300 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 space-y-3">
                <DownloadBrochureModal />
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full py-3 rounded-xl font-semibold">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
