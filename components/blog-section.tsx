import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Top 5 Citizenship by Investment Programs in 2024",
    excerpt: "Discover the most sought-after citizenship programs offering visa-free travel and tax benefits.",
    image: "/luxury-passport-travel.jpg",
    date: "March 15, 2024",
    category: "Citizenship",
  },
  {
    title: "Portugal Golden Visa: Complete Guide",
    excerpt: "Everything you need to know about obtaining Portuguese residency through investment.",
    image: "/portugal-lisbon-architecture.jpg",
    date: "March 10, 2024",
    category: "Residency",
  },
  {
    title: "Tax Optimization Strategies for Global Citizens",
    excerpt: "Learn how to legally minimize your tax burden while maintaining multiple residencies.",
    image: "/financial-planning-documents.png",
    date: "March 5, 2024",
    category: "Tax Planning",
  },
]

export function BlogSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-card/15 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            Latest Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Latest Blog Posts</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Stay informed with the latest news and insights on global citizenship and investment migration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 glass-card backdrop-blur-xl overflow-hidden hover:bg-card/40"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold border border-primary/40">
                    {post.category}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>

                  <Button variant="link" className="p-0 h-auto text-primary group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
