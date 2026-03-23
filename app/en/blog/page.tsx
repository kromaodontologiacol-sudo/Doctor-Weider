import { Metadata } from "next"
import { HeaderEN } from "@/components/en/header"
import { FooterEN } from "@/components/en/footer"
import { WhatsAppButtonEN } from "@/components/en/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Blog | Dental Care Tips & Information | Dr. Weider - Cali, Colombia",
  description: "Expert dental advice and information about dental implants, smile design, and oral health. Learn about dental treatments in Cali, Colombia.",
  keywords: "dental blog, dental implants information, dental care tips, oral health, dental tourism colombia",
}

const blogPosts = [
  {
    slug: "dental-implants-cost-colombia",
    title: "Dental Implants Cost in Colombia: Complete 2024 Guide",
    excerpt: "Learn why thousands of patients choose Colombia for dental implants. Compare prices, quality, and understand what affects the cost of your treatment.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png",
    readTime: "8 min read",
    category: "Dental Implants",
  },
  {
    slug: "is-dental-implant-painful",
    title: "Is It Painful to Get Dental Implants? What to Really Expect",
    excerpt: "One of the most common questions we hear. Learn about pain management, what to expect during and after the procedure, and recovery tips.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2983.JPG-Uq8RpwOmPxRm6G2zNO5kX76aAvEqYf.jpeg",
    readTime: "6 min read",
    category: "Dental Implants",
  },
  {
    slug: "dental-implants-vs-dentures",
    title: "Dental Implants vs Dentures: Which Is Right for You?",
    excerpt: "A comprehensive comparison of dental implants and dentures. Understand the pros, cons, costs, and long-term considerations of each option.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protesis-removible-completa-EyWUDXxp4ySIYKOQp9Fobw9cjgJovW.jpg",
    readTime: "7 min read",
    category: "Dental Prosthesis",
  },
  {
    slug: "dental-emergency-what-to-do",
    title: "Dental Emergency: What to Do Before Reaching the Dentist",
    excerpt: "Quick first-aid tips for common dental emergencies including toothaches, knocked-out teeth, and broken crowns. Know what to do when it matters.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oeXrlCif4wPM2JnD6gUD2c023KOF0w.png",
    readTime: "5 min read",
    category: "Emergency Care",
  },
  {
    slug: "best-dental-treatments",
    title: "Best Dental Treatment Options for Missing Teeth",
    excerpt: "From implants to bridges to dentures - explore all your options for replacing missing teeth and find the best solution for your situation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2993.JPG-WO713zMc9atFAEDO1oyLAHgpUhrb9Z.jpeg",
    readTime: "9 min read",
    category: "Treatment Options",
  },
]

export default function BlogPage() {
  return (
    <>
      <HeaderEN />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Dental Health Blog
              </h1>
              <p className="mt-6 text-xl text-white/85 leading-relaxed">
                Expert advice, treatment information, and tips for maintaining a healthy smile. 
                Stay informed about the latest in dental care.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/en/blog/${post.slug}`}>
                  <Card className="h-full overflow-hidden border-border hover:border-primary/30 hover:shadow-lg transition-all group">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                        Read more <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterEN />
      <WhatsAppButtonEN />
    </>
  )
}
