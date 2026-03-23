import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { EmotionalSection } from "@/components/emotional-section"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { Process } from "@/components/process"
import { CandidateSection } from "@/components/candidate-section"
import { Testimonials } from "@/components/testimonials"
import { Doctor } from "@/components/doctor"
import { UrgencyCta } from "@/components/urgency-cta"
import { SocialMedia } from "@/components/social-media"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getDictionary } from "@/lib/i18n/dictionaries"

export default function EnglishHome() {
  const dictionary = getDictionary("en")

  return (
    <>
      <Header dictionary={dictionary} locale="en" />
      <main>
        {/* Hero with visible pricing, features and CTAs */}
        <Hero dictionary={dictionary} />
        
        {/* Emotional Section - Have you lost a tooth? */}
        <EmotionalSection dictionary={dictionary} />
        
        {/* Services with CTAs */}
        <Services dictionary={dictionary} />
        
        {/* Why Choose Us */}
        <WhyUs dictionary={dictionary} />
        
        {/* Step by Step Process */}
        <Process dictionary={dictionary} />
        
        {/* Are you a candidate? */}
        <CandidateSection dictionary={dictionary} />
        
        {/* Testimonials and Before/After */}
        <Testimonials dictionary={dictionary} />
        
        {/* Doctor - Authority */}
        <Doctor dictionary={dictionary} />
        
        {/* Final Urgency CTA */}
        <UrgencyCta dictionary={dictionary} />
        
        {/* Social Media */}
        <SocialMedia dictionary={dictionary} />
        
        {/* Contact */}
        <Contact dictionary={dictionary} />
      </main>
      <Footer dictionary={dictionary} locale="en" />
      <WhatsAppButton dictionary={dictionary} />
    </>
  )
}
