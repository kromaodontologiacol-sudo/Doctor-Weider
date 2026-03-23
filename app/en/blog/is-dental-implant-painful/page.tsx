import { Metadata } from "next"
import { HeaderEN } from "@/components/en/header"
import { FooterEN } from "@/components/en/footer"
import { WhatsAppButtonEN } from "@/components/en/whatsapp-button"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowLeft, Clock, User } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Is It Painful to Get Dental Implants? What to Really Expect | Dr. Weider",
  description: "Worried about dental implant pain? Learn what to expect during and after the procedure, pain management options, and recovery tips from an implant specialist.",
  keywords: "dental implant pain, is dental implant painful, dental implant procedure, dental implant recovery, dental implant experience",
}

export default function DentalImplantPainArticle() {
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
                Is It Painful to Get Dental Implants? What to Really Expect
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Dr. Weider Gutierrez
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  6 min read
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2983.JPG-Uq8RpwOmPxRm6G2zNO5kX76aAvEqYf.jpeg"
              alt="Dental implant procedure"
              className="w-full rounded-2xl shadow-lg mb-8"
            />

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Fear of pain is one of the most common reasons people hesitate to get dental implants. 
                Let's address this concern honestly and explain what you can really expect.
              </p>

              <h2>The Short Answer</h2>
              <p>
                <strong>During the procedure:</strong> You shouldn't feel any pain. Local anesthesia 
                completely numbs the area, and many patients report the procedure is more comfortable 
                than they expected - often easier than a tooth extraction.
              </p>
              <p>
                <strong>After the procedure:</strong> Some discomfort is normal, but it's typically 
                manageable with over-the-counter pain medication and usually subsides within a few days.
              </p>

              <h2>What Happens During the Procedure?</h2>
              <p>
                Before we begin, we administer local anesthesia to completely numb the treatment area. 
                Most patients feel only pressure, not pain, during the implant placement. The procedure 
                typically takes 30-60 minutes per implant.
              </p>
              <p>
                For anxious patients, we offer sedation options to help you relax completely during 
                the procedure. Many patients don't remember anything about the surgery afterward.
              </p>

              <h2>Pain After the Procedure: What to Expect</h2>
              <p>Here's a realistic timeline of what most patients experience:</p>
              <ul>
                <li><strong>Day 1-2:</strong> Some swelling and discomfort, managed with prescribed medication</li>
                <li><strong>Day 3-4:</strong> Swelling peaks then begins to subside</li>
                <li><strong>Day 5-7:</strong> Most patients are back to normal activities</li>
                <li><strong>Week 2:</strong> Any residual discomfort usually gone</li>
              </ul>

              <h2>Pain Management Tips</h2>
              <ul>
                <li>Take prescribed medications as directed</li>
                <li>Apply ice packs to reduce swelling (20 minutes on, 20 off)</li>
                <li>Eat soft foods for the first few days</li>
                <li>Avoid hot beverages and alcohol</li>
                <li>Don't smoke - this significantly impairs healing</li>
                <li>Sleep with your head elevated</li>
              </ul>

              <h2>When to Contact Your Dentist</h2>
              <p>While some discomfort is normal, contact us immediately if you experience:</p>
              <ul>
                <li>Severe pain that doesn't respond to medication</li>
                <li>Increasing swelling after day 3</li>
                <li>Fever</li>
                <li>Pus or unusual discharge</li>
                <li>Numbness that persists beyond 24 hours</li>
              </ul>

              <h2>The Bottom Line</h2>
              <p>
                Most patients are surprised by how manageable the dental implant experience is. The 
                temporary discomfort is far outweighed by the lifetime benefits of having a permanent, 
                natural-looking tooth replacement.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-muted/30 rounded-2xl text-center">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Have more questions about dental implants?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're happy to answer any concerns you have about the procedure.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20have%20questions%20about%20dental%20implant%20pain%20and%20recovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Ask Us Anything
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
