import { Metadata } from "next"
import { HeaderEN } from "@/components/en/header"
import { FooterEN } from "@/components/en/footer"
import { WhatsAppButtonEN } from "@/components/en/whatsapp-button"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowLeft, Clock, User } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Best Dental Treatment Options for Missing Teeth | Dr. Weider",
  description: "Explore all your options for replacing missing teeth - from dental implants to bridges to dentures. Find the best solution for your situation and budget.",
  keywords: "missing teeth treatment options, replace missing teeth, dental implants bridges dentures, tooth replacement options",
}

export default function BestTreatmentsArticle() {
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
                Treatment Options
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
                Best Dental Treatment Options for Missing Teeth
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Dr. Weider Gutierrez
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  9 min read
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2993.JPG-WO713zMc9atFAEDO1oyLAHgpUhrb9Z.jpeg"
              alt="Dental treatment options"
              className="w-full rounded-2xl shadow-lg mb-8"
            />

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Missing teeth affect more than just your smile - they can impact your ability to eat, 
                speak, and even your self-confidence. The good news is there are several excellent 
                options for replacing missing teeth today.
              </p>

              <h2>Why You Should Replace Missing Teeth</h2>
              <p>Beyond aesthetics, there are important health reasons to replace missing teeth:</p>
              <ul>
                <li><strong>Prevent bone loss:</strong> Without tooth roots, your jawbone begins to shrink</li>
                <li><strong>Maintain alignment:</strong> Remaining teeth can shift into gaps</li>
                <li><strong>Preserve bite function:</strong> Missing teeth affect how you chew</li>
                <li><strong>Protect remaining teeth:</strong> Other teeth take on more stress</li>
                <li><strong>Support facial structure:</strong> Teeth help maintain your facial appearance</li>
              </ul>

              <h2>Option 1: Dental Implants</h2>
              <p>
                <strong>Best for:</strong> Most patients wanting a permanent, natural-feeling solution
              </p>
              <p>
                Dental implants are titanium posts surgically placed in your jawbone. They serve as 
                artificial tooth roots and can support crowns, bridges, or even full dentures.
              </p>
              <p><strong>Pros:</strong></p>
              <ul>
                <li>Most natural look and feel</li>
                <li>Preserve jawbone</li>
                <li>Last a lifetime with care</li>
                <li>Don't affect adjacent teeth</li>
                <li>Eat anything you want</li>
              </ul>
              <p><strong>Cons:</strong></p>
              <ul>
                <li>Higher initial cost</li>
                <li>Requires surgery</li>
                <li>Healing time needed (3-6 months)</li>
              </ul>

              <h2>Option 2: Dental Bridges</h2>
              <p>
                <strong>Best for:</strong> Patients with healthy teeth on either side of the gap
              </p>
              <p>
                A bridge uses the teeth on either side of the gap as anchors (abutments) to hold 
                one or more false teeth in place. The adjacent teeth are crowned to support the bridge.
              </p>
              <p><strong>Pros:</strong></p>
              <ul>
                <li>Fixed in place (not removable)</li>
                <li>Lower cost than implants</li>
                <li>No surgery required</li>
                <li>Completed in 2-3 visits</li>
              </ul>
              <p><strong>Cons:</strong></p>
              <ul>
                <li>Requires altering healthy teeth</li>
                <li>Doesn't prevent bone loss</li>
                <li>May need replacement in 10-15 years</li>
              </ul>

              <h2>Option 3: Partial Dentures</h2>
              <p>
                <strong>Best for:</strong> Multiple missing teeth when implants aren't feasible
              </p>
              <p>
                Partial dentures are removable appliances that replace some missing teeth. They 
                attach to remaining teeth with clasps or precision attachments.
              </p>
              <p><strong>Pros:</strong></p>
              <ul>
                <li>Lowest cost option</li>
                <li>No surgery needed</li>
                <li>Easy to adjust</li>
                <li>Can add more teeth later</li>
              </ul>
              <p><strong>Cons:</strong></p>
              <ul>
                <li>Must be removed for cleaning</li>
                <li>Can feel bulky</li>
                <li>May affect speech initially</li>
                <li>Clasps may be visible</li>
              </ul>

              <h2>Option 4: Complete Dentures</h2>
              <p>
                <strong>Best for:</strong> Patients missing all teeth in upper or lower arch
              </p>
              <p>
                Complete dentures replace all teeth in the upper, lower, or both arches. Modern 
                dentures are more comfortable and natural-looking than ever.
              </p>

              <h2>Option 5: Implant-Supported Dentures</h2>
              <p>
                <strong>Best for:</strong> Full arch replacement with maximum stability
              </p>
              <p>
                This option combines the stability of implants with the convenience of dentures. 
                Typically 2-4 implants support a full denture that clicks into place.
              </p>

              <h2>How to Choose the Right Option</h2>
              <p>The best choice depends on several factors:</p>
              <ul>
                <li><strong>Number of missing teeth:</strong> Single tooth vs. multiple teeth</li>
                <li><strong>Location:</strong> Front teeth vs. back teeth</li>
                <li><strong>Bone density:</strong> Enough bone for implants?</li>
                <li><strong>Overall health:</strong> Any conditions affecting healing?</li>
                <li><strong>Budget:</strong> Initial cost vs. long-term value</li>
                <li><strong>Timeline:</strong> How quickly do you need a solution?</li>
              </ul>

              <h2>Our Recommendation</h2>
              <p>
                While every case is different, we generally recommend dental implants whenever 
                possible. They provide the closest experience to natural teeth and offer the best 
                long-term value. However, the right choice is always the one that fits your specific 
                situation, health, and goals.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-muted/30 rounded-2xl text-center">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Need help choosing the right treatment?
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a free consultation and we'll evaluate your options together.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20need%20help%20choosing%20the%20right%20treatment%20for%20my%20missing%20teeth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Get Personalized Advice
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
