import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Clock } from "lucide-react"
import { XIcon } from "@/components/icons/x-icon"
import { NewsletterForm } from "@/components/newsletter-form"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/images/logo.png" alt="OrientHeight Logo" width={180} height={50} className="h-12 w-auto" />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Transform your lifestyle with elite citizenship programs designed to give you and your family unmatched
              global mobility and freedom.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              <XIcon className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/citizenship" className="text-slate-300 hover:text-primary transition-colors">
                  Second Citizenship
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-primary transition-colors">
                  Global Mobility
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-primary transition-colors">
                  Investment Migration
                </Link>
              </li>
              <li>
                <Link href="/services/residency" className="text-slate-300 hover:text-primary transition-colors">
                  Residency Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/real-estate" className="text-slate-300 hover:text-primary transition-colors">
                  Real Estate Investments
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-slate-300 hover:text-primary transition-colors">
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-slate-300 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-primary transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:contact@orientheight.com"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  contact@orientheight.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+2347085003333" className="text-slate-300 hover:text-primary transition-colors">
                  (+234) 708-500-3333
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  5th Floor, Elizade Towers, Plot 596, Independence Avenue, Central Business District, Abuja, Nigeria
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-slate-300">
                  <p>Monday - Friday: 8 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8 p-5 bg-blue-600/20 rounded-2xl border border-blue-500/30">
              <h4 className="font-bold mb-3 text-white text-lg">Stay Connected</h4>
              <p className="text-sm text-slate-300 mb-4">
                Get the latest updates on global mobility and investment opportunities
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 OrientHeight. All rights reserved. | Designed with excellence for global citizens.
          </p>
        </div>
      </div>
    </footer>
  )
}
