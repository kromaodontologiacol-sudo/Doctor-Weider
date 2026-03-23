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

export default function Home() {
  const dictionary = getDictionary("es")

  return (
    <>
      <Header dictionary={dictionary} locale="es" />
      <main>
        {/* Hero con precio visible, features y CTAs */}
        <Hero dictionary={dictionary} />
        
        {/* Sección Emocional - ¿Has perdido un diente? */}
        <EmotionalSection dictionary={dictionary} />
        
        {/* Servicios con CTAs */}
        <Services dictionary={dictionary} />
        
        {/* Por qué elegirnos */}
        <WhyUs dictionary={dictionary} />
        
        {/* Proceso paso a paso */}
        <Process dictionary={dictionary} />
        
        {/* ¿Eres candidato? */}
        <CandidateSection dictionary={dictionary} />
        
        {/* Testimonios y Antes/Después */}
        <Testimonials dictionary={dictionary} />
        
        {/* Doctor - Autoridad */}
        <Doctor dictionary={dictionary} />
        
        {/* Urgencia Final CTA */}
        <UrgencyCta dictionary={dictionary} />
        
        {/* Redes Sociales */}
        <SocialMedia dictionary={dictionary} />
        
        {/* Contacto */}
        <Contact dictionary={dictionary} />
      </main>
      <Footer dictionary={dictionary} locale="es" />
      <WhatsAppButton dictionary={dictionary} />
    </>
  )
}
