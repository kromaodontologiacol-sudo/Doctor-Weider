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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Doctor />
        <Testimonials />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
