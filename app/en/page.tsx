import { HeaderEN } from "@/components/en/header"
import { HeroEN } from "@/components/en/hero"
import { ServicesEN } from "@/components/en/services"
import { WhyUsEN } from "@/components/en/why-us"
import { ProcessEN } from "@/components/en/process"
import { TestimonialsEN } from "@/components/en/testimonials"
import { DoctorEN } from "@/components/en/doctor"
import { ContactEN } from "@/components/en/contact"
import { FooterEN } from "@/components/en/footer"
import { WhatsAppButtonEN } from "@/components/en/whatsapp-button"

export default function EnglishHome() {
  return (
    <>
      <HeaderEN />
      <main>
        <HeroEN />
        <ServicesEN />
        <WhyUsEN />
        <ProcessEN />
        <DoctorEN />
        <TestimonialsEN />
        <ContactEN />
      </main>
      <FooterEN />
      <WhatsAppButtonEN />
    </>
  )
}
