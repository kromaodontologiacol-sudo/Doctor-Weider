import { Metadata } from "next"
import { HeaderEN } from "@/components/en/header"
import { FooterEN } from "@/components/en/footer"
import { WhatsAppButtonEN } from "@/components/en/whatsapp-button"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowLeft, Clock, User, AlertTriangle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dental Emergency: What to Do Before Reaching the Dentist | Dr. Weider",
  description: "Quick first-aid tips for dental emergencies. Learn what to do for toothaches, knocked-out teeth, broken teeth, and other urgent dental situations.",
  keywords: "dental emergency first aid, toothache emergency, knocked out tooth, broken tooth what to do, dental emergency tips",
}

export default function DentalEmergencyArticle() {
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
              <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
                Emergency Care
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
                Dental Emergency: What to Do Before Reaching the Dentist
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Dr. Weider Gutierrez
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  5 min read
                </span>
              </div>
            </header>

            {/* Emergency Notice */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8 flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-red-800 mb-1">Having a dental emergency right now?</h3>
                <p className="text-red-700 text-sm mb-3">Contact us immediately for same-day care.</p>
                <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                  <a href="https://wa.me/573235944931?text=URGENT:%20I%20have%20a%20dental%20emergency" target="_blank" rel="noopener noreferrer">
                    Emergency WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Dental emergencies can be scary, but knowing what to do in those first crucial moments 
                can make a big difference in the outcome. Here's your quick guide to handling common 
                dental emergencies.
              </p>

              <h2>Severe Toothache</h2>
              <p><strong>What to do:</strong></p>
              <ol>
                <li>Rinse your mouth with warm salt water</li>
                <li>Gently floss around the tooth to remove any trapped food</li>
                <li>Apply a cold compress to the outside of your cheek</li>
                <li>Take over-the-counter pain medication (ibuprofen works well)</li>
                <li>Do NOT apply aspirin directly to the gum - it can burn tissue</li>
              </ol>
              <p>
                <strong>Important:</strong> A severe toothache often indicates infection. Don't wait - 
                seek dental care as soon as possible.
              </p>

              <h2>Knocked-Out Tooth</h2>
              <p><strong>Time is critical!</strong> A knocked-out tooth can often be saved if you act within 1 hour.</p>
              <ol>
                <li>Pick up the tooth by the crown (white part), never the root</li>
                <li>If dirty, rinse gently with water - don't scrub or remove tissue</li>
                <li>Try to place the tooth back in its socket if possible</li>
                <li>If you can't reinsert it, keep it moist in milk or saliva</li>
                <li>Get to a dentist immediately</li>
              </ol>

              <h2>Chipped or Broken Tooth</h2>
              <ol>
                <li>Save any broken pieces</li>
                <li>Rinse your mouth with warm water</li>
                <li>Apply gauze to stop any bleeding</li>
                <li>Use a cold compress to reduce swelling</li>
                <li>Cover sharp edges with dental wax or sugar-free gum to protect your mouth</li>
              </ol>

              <h2>Lost Filling or Crown</h2>
              <ol>
                <li>Keep the crown if you find it</li>
                <li>Apply clove oil to the exposed area for pain relief</li>
                <li>Use dental cement (available at pharmacies) as a temporary fix</li>
                <li>Don't use regular glue to reattach a crown</li>
                <li>Schedule an appointment as soon as possible</li>
              </ol>

              <h2>Dental Abscess</h2>
              <p>Signs of an abscess include:</p>
              <ul>
                <li>Severe, throbbing pain</li>
                <li>Swelling in your face or cheek</li>
                <li>Fever</li>
                <li>Tender lymph nodes</li>
                <li>A bad taste in your mouth</li>
              </ul>
              <p>
                <strong>This is serious.</strong> An untreated abscess can spread to other parts of 
                your body. Rinse with salt water and seek emergency dental care immediately.
              </p>

              <h2>When to Go to the Emergency Room</h2>
              <p>Go to the ER if you have:</p>
              <ul>
                <li>Difficulty breathing or swallowing</li>
                <li>Facial swelling affecting your eye or neck</li>
                <li>High fever with dental pain</li>
                <li>Uncontrollable bleeding</li>
                <li>Trauma to the face with possible jaw fracture</li>
              </ul>

              <h2>Prevention is Key</h2>
              <p>
                The best way to handle dental emergencies is to prevent them. Regular check-ups, 
                wearing mouthguards during sports, and avoiding chewing on hard objects can help 
                you avoid many common emergencies.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-red-50 rounded-2xl text-center">
              <AlertTriangle className="w-12 h-12 mx-auto text-red-600 mb-4" />
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Having a dental emergency?
              </h3>
              <p className="text-muted-foreground mb-6">
                Don't wait - contact us now for immediate assistance.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold"
              >
                <a
                  href="https://wa.me/573235944931?text=URGENT:%20I%20have%20a%20dental%20emergency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Emergency Contact
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
