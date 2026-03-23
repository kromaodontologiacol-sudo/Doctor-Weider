import { Metadata } from "next"
import { HeaderEN } from "@/components/en/header"
import { FooterEN } from "@/components/en/footer"
import { WhatsAppButtonEN } from "@/components/en/whatsapp-button"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowLeft, Clock, User, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dental Implants vs Dentures: Which Is Right for You? | Dr. Weider",
  description: "Compare dental implants and dentures. Understand the pros, cons, costs, and long-term considerations to make the best choice for your situation.",
  keywords: "dental implants vs dentures, implants or dentures, denture vs implant cost, best tooth replacement option",
}

export default function ImplantsVsDenturesArticle() {
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
                Dental Prosthesis
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
                Dental Implants vs Dentures: Which Is Right for You?
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Dr. Weider Gutierrez
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  7 min read
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protesis-removible-completa-EyWUDXxp4ySIYKOQp9Fobw9cjgJovW.jpg"
              alt="Dental prosthesis comparison"
              className="w-full rounded-2xl shadow-lg mb-8"
            />

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                If you're missing teeth, you've probably wondered whether dental implants or dentures 
                are the better choice. Both options have their place in modern dentistry - here's how 
                to decide which is right for you.
              </p>

              <h2>Quick Comparison</h2>
              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-primary/5 rounded-xl">
                  <h3 className="font-bold text-lg mb-4">Dental Implants</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Permanent solution</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Feels like natural teeth</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Preserves jawbone</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>No dietary restrictions</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Higher initial cost</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Requires surgery</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-accent/5 rounded-xl">
                  <h3 className="font-bold text-lg mb-4">Dentures</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Lower initial cost</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>No surgery required</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Quick solution</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>May slip or move</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Bone loss over time</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Needs replacement every 5-10 years</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2>Cost Comparison</h2>
              <p>
                While dentures have a lower upfront cost, it's important to consider the long-term 
                expenses. Dentures need to be replaced every 5-10 years, require adhesives and 
                cleaners, and may need adjustments as your jaw changes.
              </p>
              <p>
                Dental implants, while more expensive initially, are a one-time investment that can 
                last a lifetime with proper care. When you calculate the total cost over 20-30 years, 
                implants often come out similar or even cheaper than dentures.
              </p>

              <h2>Comfort and Function</h2>
              <p>
                Implants win here hands down. Because they're anchored in your jawbone, they feel 
                and function like natural teeth. You can eat anything, speak clearly, and never 
                worry about your teeth slipping.
              </p>
              <p>
                Modern dentures are better than ever, but they still can't match the stability of 
                implants. Many denture wearers avoid certain foods and feel self-conscious about 
                their teeth moving while speaking.
              </p>

              <h2>Bone Health</h2>
              <p>
                This is a critical difference that many people don't consider. When you lose teeth, 
                your jawbone begins to shrink because it's no longer being stimulated by tooth roots.
              </p>
              <p>
                Dental implants prevent this bone loss by providing the same stimulation as natural 
                teeth. Dentures, unfortunately, can actually accelerate bone loss because they put 
                pressure on the gums rather than the bone.
              </p>

              <h2>Which Should You Choose?</h2>
              <p><strong>Consider implants if:</strong></p>
              <ul>
                <li>You want a permanent, long-term solution</li>
                <li>You're in good overall health</li>
                <li>You have adequate jawbone (or are willing to get bone grafts)</li>
                <li>You want to eat without restrictions</li>
              </ul>

              <p><strong>Consider dentures if:</strong></p>
              <ul>
                <li>You need an immediate solution</li>
                <li>You have health conditions that prevent surgery</li>
                <li>Budget is your primary concern</li>
                <li>You have significant bone loss and prefer not to have grafts</li>
              </ul>

              <h2>The Best of Both Worlds: Implant-Supported Dentures</h2>
              <p>
                Can't decide? Implant-supported dentures offer a middle ground. A few implants are 
                placed to anchor a denture, giving you much better stability than traditional 
                dentures at a lower cost than replacing all teeth with individual implants.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-muted/30 rounded-2xl text-center">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Not sure which option is right for you?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let us evaluate your situation and help you make the best decision.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20need%20help%20deciding%20between%20implants%20and%20dentures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Get Expert Advice
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
