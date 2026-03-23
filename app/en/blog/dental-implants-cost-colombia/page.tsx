import { Metadata } from "next"
import { HeaderEN } from "@/components/en/header"
import { FooterEN } from "@/components/en/footer"
import { WhatsAppButtonEN } from "@/components/en/whatsapp-button"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowLeft, Clock, User } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dental Implants Cost in Colombia: Complete 2024 Guide | Dr. Weider",
  description: "Complete guide to dental implant costs in Colombia. Learn why patients save 60-70% compared to US prices, what affects pricing, and what to expect.",
  keywords: "dental implants cost colombia, dental implants price colombia, cheap dental implants, dental tourism colombia, affordable dental implants",
}

export default function DentalImplantsCostArticle() {
  return (
    <>
      <HeaderEN />
      <main className="pt-24">
        <article className="py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <Link href="/en/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-8">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Dental Implants
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
                Dental Implants Cost in Colombia: Complete 2024 Guide
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Dr. Weider Gutierrez
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  8 min read
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png"
              alt="Dental implant illustration"
              className="w-full rounded-2xl shadow-lg mb-8"
            />

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                If you're considering dental implants, you've probably noticed the significant price difference 
                between treatments in the US and Colombia. In this guide, we'll explain everything you need to 
                know about dental implant costs in Colombia.
              </p>

              <h2>Why Are Dental Implants Cheaper in Colombia?</h2>
              <p>
                The lower cost of dental implants in Colombia isn't due to lower quality - it's primarily because 
                of the lower cost of living, different healthcare economics, and favorable exchange rates. 
                Colombian dentists often train at the same international institutions as their US counterparts 
                and use the same premium materials.
              </p>

              <h2>Typical Dental Implant Prices in Cali, Colombia</h2>
              <p>Here's what you can expect to pay for dental implant treatments in Cali:</p>
              <ul>
                <li><strong>Single dental implant (titanium post):</strong> From $380 USD</li>
                <li><strong>Zirconia crown on implant:</strong> From $380 USD</li>
                <li><strong>Complete single tooth implant (implant + crown):</strong> From $760 USD</li>
                <li><strong>All-on-4 implants:</strong> Contact for custom quote</li>
              </ul>

              <h2>Compare: US vs Colombia Prices</h2>
              <p>
                In the United States, a single dental implant with crown typically costs between $3,000 and $5,000. 
                In Colombia, the same procedure starts from $760 - a savings of up to 75%.
              </p>

              <h2>What Affects the Final Cost?</h2>
              <p>Several factors can influence your final treatment cost:</p>
              <ul>
                <li><strong>Bone density:</strong> If you need bone grafting, this adds to the cost</li>
                <li><strong>Number of implants:</strong> Multiple implants may qualify for package pricing</li>
                <li><strong>Crown material:</strong> Zirconia vs. other materials</li>
                <li><strong>Additional treatments:</strong> Extractions, sinus lifts, etc.</li>
              </ul>

              <h2>What's Included in the Price?</h2>
              <p>At our clinic, the quoted price typically includes:</p>
              <ul>
                <li>Initial consultation and evaluation</li>
                <li>3D CT scan and X-rays</li>
                <li>Treatment planning</li>
                <li>The implant surgery</li>
                <li>Follow-up appointments</li>
                <li>Post-operative care instructions</li>
              </ul>

              <h2>Is It Worth Traveling to Colombia for Dental Implants?</h2>
              <p>
                For many patients, absolutely. Even after factoring in travel costs, patients typically save 
                50-60% compared to US prices. Plus, Cali is a beautiful city with pleasant weather year-round, 
                making your dental trip an opportunity to explore Colombia.
              </p>

              <h2>How to Get Started</h2>
              <p>
                The first step is to contact us for a free consultation. We can evaluate your case remotely 
                using photos and X-rays you send us, then provide a detailed quote before you travel.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-muted/30 rounded-2xl text-center">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Ready to learn more about dental implants in Cali?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact us for a free consultation and personalized quote.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20read%20your%20article%20about%20dental%20implant%20costs%20and%20would%20like%20more%20information"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Get Your Free Quote
                </a>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <FooterEN />
      <WhatsAppButtonEN />
    </>
  )
}
