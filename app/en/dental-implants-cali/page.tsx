import { Metadata } from "next"
import { HeaderEN } from "@/components/en/header"
import { FooterEN } from "@/components/en/footer"
import { WhatsAppButtonEN } from "@/components/en/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, CheckCircle, Star, Shield, Award, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dental Implants in Cali, Colombia | Save 60-70% | Dr. Weider",
  description: "Get high-quality dental implants in Cali, Colombia. Save 60-70% compared to US prices. Starting from $380 USD per implant. Expert care with Dr. Weider, implantology specialist.",
  keywords: "dental implants cali colombia, dental implants cost colombia, affordable dental implants, dental tourism colombia, best dental implants cali",
}

const benefits = [
  "Permanent solution for missing teeth",
  "Looks and feels like natural teeth",
  "Preserves jawbone and facial structure",
  "No adhesives or removable parts",
  "Improved speech and comfort",
  "Easy maintenance like natural teeth",
  "Long-lasting results (20+ years)",
  "Improved confidence and self-esteem",
]

const candidates = [
  "Adults with one or more missing teeth",
  "People with adequate jawbone density",
  "Those in good overall health",
  "Non-smokers or willing to quit",
  "Patients seeking a permanent solution",
  "Those who want to avoid dentures",
]

const process = [
  {
    step: "1",
    title: "Initial Consultation",
    description: "Complete evaluation with 3D CT scan and digital X-rays. We assess your bone density, oral health, and create a personalized treatment plan.",
  },
  {
    step: "2",
    title: "Treatment Planning",
    description: "Using digital simulation, we plan the exact position of your implant for optimal results. You'll see the expected outcome before treatment.",
  },
  {
    step: "3",
    title: "Implant Placement",
    description: "The titanium implant is surgically placed in your jawbone. The procedure is minimally invasive and performed under local anesthesia.",
  },
  {
    step: "4",
    title: "Healing Period",
    description: "The implant integrates with your bone over 3-6 months. During this time, you may wear a temporary crown for aesthetics.",
  },
  {
    step: "5",
    title: "Crown Placement",
    description: "Once healed, a custom ceramic crown is attached to the implant. Your new tooth matches your natural teeth perfectly.",
  },
]

export default function DentalImplantsPage() {
  return (
    <>
      <HeaderEN />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <DollarSign className="w-4 h-4 text-accent" />
                <span className="text-white/90 text-sm font-medium">Save up to 60-70% compared to US prices</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Dental Implants in Cali, Colombia
              </h1>
              <p className="mt-6 text-xl text-white/85 leading-relaxed">
                Restore your smile with high-quality dental implants at a fraction of US costs. 
                Expert care from Dr. Weider, a certified implantology specialist with over 500 successful implants.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 font-semibold shadow-xl"
                >
                  <a
                    href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20information%20about%20dental%20implants%20in%20Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Get a Free Quote
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 text-base px-8 py-6"
                >
                  <Link href="/en/dental-implants-price-cali">
                    View Pricing
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What Are Dental Implants */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
                  What Are Dental Implants?
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  The gold standard for <span className="text-primary">replacing missing teeth</span>
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Dental implants are titanium posts that are surgically placed into your jawbone to serve as 
                  artificial tooth roots. Once healed, they provide a stable foundation for replacement teeth 
                  that look, feel, and function like natural teeth.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Unlike dentures or bridges, implants fuse with your jawbone through a process called 
                  osseointegration, creating a permanent solution that can last a lifetime with proper care.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-muted/30 rounded-xl">
                    <p className="text-2xl font-bold text-primary">98%</p>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-xl">
                    <p className="text-2xl font-bold text-accent">20+</p>
                    <p className="text-sm text-muted-foreground">Years Lifespan</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-xl">
                    <p className="text-2xl font-bold text-primary">500+</p>
                    <p className="text-sm text-muted-foreground">Implants Placed</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png"
                  alt="Dental implant illustration"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide uppercase">
                Benefits
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Why choose <span className="text-primary">dental implants?</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Is a Candidate */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2983.JPG-Uq8RpwOmPxRm6G2zNO5kX76aAvEqYf.jpeg"
                  alt="Successful implant case"
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
                  Candidacy
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  Are you a <span className="text-primary">good candidate?</span>
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Most adults with missing teeth are good candidates for dental implants. 
                  During your consultation, Dr. Weider will evaluate your specific situation.
                </p>
                <ul className="mt-6 space-y-3">
                  {candidates.map((candidate, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="text-foreground">{candidate}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  <a
                    href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20to%20know%20if%20I%20am%20a%20candidate%20for%20dental%20implants"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Check Your Eligibility
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Step by Step Process */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide uppercase">
                The Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Step-by-step <span className="text-primary">implant procedure</span>
              </h2>
            </div>
            <div className="space-y-6">
              {process.map((item, index) => (
                <Card key={index} className="border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold tracking-wide uppercase">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">
                Why choose Dr. Weider for your implants?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Save 60-70%</h3>
                <p className="text-white/70 text-sm">Compared to US prices without compromising quality</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Expert Specialist</h3>
                <p className="text-white/70 text-sm">Certified implantologist with 500+ successful implants</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Premium Materials</h3>
                <p className="text-white/70 text-sm">High-quality titanium implants and ceramic crowns</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">5.0 Rating</h3>
                <p className="text-white/70 text-sm">Perfect Google rating from happy patients</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Ready to restore your smile?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contact us today for a free consultation. We'll evaluate your case and provide a personalized treatment plan.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 font-semibold"
              >
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20information%20about%20dental%20implants%20in%20Cali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Book Your Consultation
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 py-6"
              >
                <Link href="/en/dental-implants-price-cali">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterEN />
      <WhatsAppButtonEN />
    </>
  )
}
