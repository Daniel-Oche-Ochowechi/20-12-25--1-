import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Clock, User } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/blog-data"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 glass-gold px-6 py-3 rounded-full text-sm font-semibold mb-6 backdrop-blur-xl border border-primary/30 shadow-lg shadow-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Latest Insights & Expert Advice
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              <span className="text-white">Insights &</span>{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
                Knowledge Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Stay informed with expert insights on global citizenship, residency programs, tax optimization, and
              international investment opportunities
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl overflow-hidden transform hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg shadow-primary/50 backdrop-blur-sm">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-accent" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors leading-tight text-balance">
                      {post.title}
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed text-sm line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm text-slate-300 font-medium">{post.author}</span>
                      </div>

                      <Link href={`/blog/${post.id}`}>
                        <Button
                          variant="ghost"
                          className="p-0 h-auto text-primary hover:text-accent group/btn transition-colors"
                        >
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
