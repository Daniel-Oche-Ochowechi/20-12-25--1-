import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Camera } from "lucide-react"

const galleryImages = [
  {
    src: "/luxury-coastal-villa-with-ocean-view-and-modern-ar.jpg",
    title: "Luxury Coastal Villa",
    category: "Real Estate",
  },
  {
    src: "/modern-passport-and-citizenship-documents.jpg",
    title: "Citizenship Documents",
    category: "Citizenship",
  },
  {
    src: "/luxury-office-consultation-meeting.jpg",
    title: "Client Consultation",
    category: "Services",
  },
  {
    src: "/beautiful-european-city-architecture.jpg",
    title: "European Residency",
    category: "Residency",
  },
  {
    src: "/luxury-caribbean-beach-resort.jpg",
    title: "Caribbean Paradise",
    category: "Real Estate",
  },
  {
    src: "/professional-business-handshake.jpg",
    title: "Partnership Success",
    category: "Services",
  },
  {
    src: "/modern-luxury-apartment.png",
    title: "Premium Properties",
    category: "Real Estate",
  },
  {
    src: "/international-travel-passport-stamps.jpg",
    title: "Global Mobility",
    category: "Citizenship",
  },
  {
    src: "/office-professionals.png",
    title: "Our Expert Team",
    category: "Team",
  },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-gradient-to-b from-slate-900 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-slate-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Camera className="w-4 h-4" />
              Our Gallery
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">
              Explore Our Success Stories
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto text-pretty">
              A visual journey through our premium citizenship programs, luxury properties, and successful client
              partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3]"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-2">
                      {image.category}
                    </div>
                    <h3 className="text-white text-xl font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppWidget />
    </main>
  )
}
