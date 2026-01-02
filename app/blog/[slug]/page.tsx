import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Clock, ArrowLeft, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image" // Added Image import from next/image
import { getBlogPost, blogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />

      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4 max-w-5xl">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="mb-8 group text-slate-300 hover:text-white hover:bg-slate-800/50 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </Button>
          </Link>

          <div className="relative overflow-hidden rounded-3xl mb-12 shadow-2xl shadow-primary/10 border border-slate-700/50">
            <div className="aspect-[21/9] relative">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-primary/50">
                  <TrendingUp className="w-4 h-4" />
                  {post.category}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance leading-tight max-w-4xl">
                  {post.title}
                </h1>
              </div>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white">Related Insights</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                    <div className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-slate-700/50 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-2xl overflow-hidden transform hover:-translate-y-1">
                      <div className="relative overflow-hidden h-48">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                          {relatedPost.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-slate-400 text-sm mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <Clock className="w-4 h-4" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }))
}
