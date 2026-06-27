import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { MessageCircle, Check, ChevronRight, Star, Clock, Shield, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Implants in Cali, Colombia - Board-Certified Specialist | Dr. Weider",
  description: "Everything about dental implants in Cali: procedure, benefits, prices from $380 USD. Dr. Weider, oral implantology specialist. Book your free consultation.",
  keywords: "dental implants cali colombia, titanium implants colombia, oral implantology cali, implant specialist colombia, dental implant cost colombia",
  openGraph: {
    title: "Dental Implants in Cali, Colombia - Board-Certified Specialist",
    description: "Dental implants from $380 USD. Implantology specialist with 3D technology.",
    type: "website",
  },
}

const benefits = [
  "Permanent solution that can last a lifetime",
  "Look and function like natural teeth",
  "Preserve jawbone density",
  "Don't affect adjacent teeth",
  "Improve chewing and speech",
  "Boost confidence and self-esteem",
]

const faqs = [
  {
    question: "How long does a dental implant procedure take?",
    answer: "The implant placement surgery takes approximately 30-60 minutes per implant. The complete process, including healing and crown placement, can take 3 to 6 months.",
  },
  {
    question: "Is the procedure painful?",
    answer: "No. It's performed with local anesthesia and minimally invasive techniques. Most patients report less discomfort than expected during recovery.",
  },
  {
    question: "How long do dental implants last?",
    answer: "With proper care, implants can last a lifetime. The crown on the implant typically lasts 10-15 years before needing replacement.",
  },
  {
    question: "Am I a candidate for dental implants?",
    answer: "Most adults with good general health are candidates. During the evaluation, we assess bone density and systemic conditions to determine the best treatment.",
  },
]

export default function DentalImplantsPage() {
  const dictionary = getDictionary("en")

  return (
    <>
      <Header dictionary={dictionary} locale="en" />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <nav className="flex items-center gap-2 text-white/70 text-sm mb-6">
                  <Link href="/en" className="hover:text-white">Home</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">Dental Implants</span>
                </nav>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/90 rounded-full mb-4">
                  <span className="text-accent-foreground font-semibold">Save 70% vs US prices</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Dental Implants in{" "}
                  <span className="text-accent">Cali, Colombia</span>
                </h1>
                <p className="mt-6 text-xl text-white/90 leading-relaxed">
                  Restore your smile with premium titanium implants. 
                  3D technology for precise and lasting results.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    <a
                      href="https://wa.me/573181898143?text=Hi,%20I%20would%20like%20information%20about%20dental%20implants"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Book Free Consultation
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    <Link href="/en/dental-implants-price-cali">
                      View 2026 Prices
                    </Link>
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-white font-medium">5.0 on Google</span>
                  </div>
                  <div className="text-white/80">+500 successful implants</div>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png"
                  alt="Titanium dental implants"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Benefits of <span className="text-primary">Dental Implants</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Dental implants are the most advanced and natural solution for 
                replacing missing teeth.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                The <span className="text-accent">Implant Process</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">1. Assessment</h3>
                  <p className="text-muted-foreground">
                    Complete evaluation with 3D CT scan and digital treatment planning.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">2. Surgery</h3>
                  <p className="text-muted-foreground">
                    Titanium implant placement with minimally invasive techniques.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">3. Crown</h3>
                  <p className="text-muted-foreground">
                    Ceramic crown installation for a natural and functional result.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Ready to restore your smile?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your free consultation and discover your options.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/573181898143?text=Hi,%20I%20would%20like%20to%20schedule%20a%20consultation%20for%20dental%20implants"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Book via WhatsApp
              </a>
            </Button>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <Link href="/en/dental-implants-price-cali" className="group">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      2026 Implant Prices
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Check our updated prices for dental implants.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/en/smile-design-cali" className="group">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Smile Design
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Combine implants with smile design for perfect results.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/en/dental-tourism-colombia" className="group">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Dental Tourism
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Complete guide to dental tourism in Colombia.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer dictionary={dictionary} locale="en" />
      <WhatsAppButton dictionary={dictionary} />
    </>
  )
}
