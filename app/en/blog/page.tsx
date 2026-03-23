import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Blog | Dr. Weider - Dental Implants & Cosmetic Dentistry Cali",
  description: "Informative articles about dental implants, oral care, smile design, and dental tourism in Colombia. Expert insights from Dr. Weider in Cali.",
  keywords: "dental blog, dental implants articles, oral health tips, dental tourism Colombia, cosmetic dentistry blog",
  alternates: {
    canonical: "https://doctorweider.com/en/blog",
    languages: {
      "es": "https://doctorweider.com/blog",
      "en": "https://doctorweider.com/en/blog"
    }
  },
  openGraph: {
    title: "Dental Blog | Dr. Weider",
    description: "Expert articles on dental implants, oral care, and dental tourism",
    url: "https://doctorweider.com/en/blog",
    locale: "en_US",
    type: "website"
  }
}

const blogPosts = [
  {
    slug: "how-long-do-dental-implants-last",
    title: "How Long Do Dental Implants Last? Complete Guide 2026",
    excerpt: "Discover the real durability of dental implants, factors that affect their lifespan, and how to care for them to make them last a lifetime. Updated information from Dr. Weider.",
    date: "March 15, 2026",
    readTime: "8 min",
    category: "Dental Implants",
    image: "/blog/implant-durability.jpg"
  },
  {
    slug: "dental-tourism-colombia-guide",
    title: "Dental Tourism in Colombia: Everything You Need to Know",
    excerpt: "A comprehensive guide to getting dental treatment in Colombia. Why thousands of Americans choose Cali for dental implants and save up to 70%.",
    date: "March 10, 2026",
    readTime: "12 min",
    category: "Dental Tourism",
    image: "/blog/dental-tourism-colombia.jpg"
  },
  {
    slug: "dental-implants-vs-dentures",
    title: "Dental Implants vs. Dentures: Which is Right for You?",
    excerpt: "A detailed comparison between dental implants and removable dentures. Advantages, disadvantages, costs, and recommendations for your specific case.",
    date: "March 5, 2026",
    readTime: "10 min",
    category: "Comparisons",
    image: "/blog/implants-vs-dentures.jpg"
  },
  {
    slug: "dental-implant-aftercare",
    title: "Dental Implant Aftercare: Step-by-Step Recovery Guide",
    excerpt: "Everything you need to know about recovering from dental implant surgery. Diet, hygiene, medications, and warning signs you should know.",
    date: "February 28, 2026",
    readTime: "7 min",
    category: "Care",
    image: "/blog/implant-aftercare.jpg"
  },
  {
    slug: "dental-implant-costs-colombia-2026",
    title: "Dental Implant Costs in Colombia 2026: Updated Price Guide",
    excerpt: "Complete cost analysis of dental implants in Colombia. Why Cali is an excellent option and how we compare with international prices.",
    date: "February 20, 2026",
    readTime: "9 min",
    category: "Prices",
    image: "/blog/costs-2026.jpg"
  }
]

export default function BlogPage() {
  const dictionary = getDictionary("en")

  return (
    <main className="min-h-screen bg-background">
      <Header dictionary={dictionary} locale="en" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Dental Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dental Health & Implant Articles
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert insights and tips from Dr. Weider to help you make informed decisions 
              about your dental health. Learn about implants, cosmetic dentistry, and dental tourism.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-6xl">🦷</span>
                  <p className="text-muted-foreground mt-4">Featured Article</p>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 w-fit">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  How Long Do Dental Implants Last? Complete Guide 2026
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Discover the real durability of dental implants, factors that affect their lifespan, 
                  and how to care for them to make them last a lifetime. Updated information from Dr. Weider.
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    March 15, 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    8 min read
                  </span>
                </div>
                <Link
                  href="/en/blog/how-long-do-dental-implants-last"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Read full article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Recent Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article 
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Dental Implants", "Smile Design", "Prosthesis", "Care", "Prices", "Dental Tourism"].map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-card border border-border rounded-full text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Have Questions About Your Dental Health?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Dr. Weider is ready to answer all your questions and help you achieve the smile of your dreams.
          </p>
          <a
            href="https://wa.me/573000000000?text=Hi,%20I%20want%20information%20about%20dental%20implants%20in%20Cali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-background/90 transition-colors shadow-lg"
          >
            Schedule Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/en/dental-implants-cali" className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors text-center">
              <span className="text-3xl mb-3 block">🦷</span>
              <h3 className="font-semibold text-foreground">Dental Implants</h3>
            </Link>
            <Link href="/en/smile-design-cali" className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors text-center">
              <span className="text-3xl mb-3 block">✨</span>
              <h3 className="font-semibold text-foreground">Smile Design</h3>
            </Link>
            <Link href="/en/dental-prosthesis-cali" className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors text-center">
              <span className="text-3xl mb-3 block">🔧</span>
              <h3 className="font-semibold text-foreground">Dental Prosthesis</h3>
            </Link>
            <Link href="/en/dental-tourism-colombia" className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors text-center">
              <span className="text-3xl mb-3 block">🌴</span>
              <h3 className="font-semibold text-foreground">Dental Tourism</h3>
            </Link>
          </div>
        </div>
      </section>

      <Footer dictionary={dictionary} locale="en" />
      <WhatsAppButton dictionary={dictionary} />
    </main>
  )
}
