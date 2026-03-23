import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { Doctor } from "@/components/doctor"
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
        <Hero dictionary={dictionary} />
        <Services dictionary={dictionary} />
        <WhyUs dictionary={dictionary} />
        <Process dictionary={dictionary} />
        <Doctor dictionary={dictionary} />
        <Testimonials dictionary={dictionary} />
        <SocialMedia dictionary={dictionary} />
        <Contact dictionary={dictionary} />
      </main>
      <Footer dictionary={dictionary} locale="es" />
      <WhatsAppButton dictionary={dictionary} />
    </>
  )
}
