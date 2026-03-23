import type { Metadata } from "next"
import { HeaderEN } from "@/components/en/header"
import { FooterEN } from "@/components/en/footer"
import { WhatsAppButtonEN } from "@/components/en/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MessageCircle, Star, AlertTriangle, CreditCard, Shield, HelpCircle, ArrowRight, Phone, DollarSign, Plane, MapPin, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dental Implant Cost in Cali, Colombia 2024 | From $380 USD | Dr Weider",
  description: "Dental implant prices in Cali, Colombia. Single implant from $380 USD. Zirconia crown from $380 USD. Save 60-70% vs US prices. Schedule your free consultation with Dr Weider, implant specialist.",
  keywords: "dental implant cost colombia, dental implant price cali, cheap dental implants colombia, affordable dental implants cali, dental tourism colombia cost, how much are dental implants in colombia",
}

const faqs = [
  {
    question: "Do you offer financing or payment plans?",
    answer: "Yes, we offer flexible payment options for international patients. During your consultation, we'll explain all available payment alternatives so you can access the treatment you need.",
  },
  {
    question: "How long do dental implants last?",
    answer: "With proper care, dental implants can last a lifetime. They are the most durable solution for replacing missing teeth, unlike dentures that need replacement every few years.",
  },
  {
    question: "Is the procedure safe?",
    answer: "Yes. Dental implants have a 95-98% success rate. We use internationally recognized implant brands and proven protocols to ensure your safety.",
  },
  {
    question: "Does the price include the crown?",
    answer: "The implant and crown have separate costs. Implant from $380 USD and zirconia crown from $380 USD. During your evaluation, we provide the complete quote with no hidden fees.",
  },
  {
    question: "How much can I save compared to the US?",
    answer: "Most patients save 60-70% compared to US prices. A single implant with crown that costs $3,000-$5,000 in the US typically costs $760-$1,200 in Cali, Colombia.",
  },
  {
    question: "How long do I need to stay in Cali?",
    answer: "For a single implant, plan for 2 visits: the first trip (3-5 days) for evaluation and implant placement, then return in 3-4 months (2-3 days) for the crown. We can coordinate timing with your schedule.",
  },
]

export default function DentalImplantsPriceCali() {
  return (
    <>
      <HeaderEN />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                <DollarSign className="h-4 w-4" />
                Save 60-70% vs US Prices
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Dental Implant Cost in Cali, Colombia
              </h1>
              <p className="mt-6 text-xl text-white/90 leading-relaxed">
                Discover affordable, high-quality dental implants and schedule your free consultation with Dr Weider
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-xl">
                  <a
                    href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20a%20free%20quote%20for%20dental%20implants%20in%20Cali,%20Colombia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Get a Free Quote via WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6">
                  <a href="tel:+573235944931" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* PRICE COMPARISON BAR */}
        <section className="py-12 bg-accent/10 border-b">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Why Choose Cali, Colombia for Dental Implants?
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <p className="text-3xl font-bold text-destructive line-through">$3,000 - $5,000</p>
                  <p className="text-sm text-muted-foreground mt-1">US Price per implant + crown</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border-2 border-primary">
                  <p className="text-3xl font-bold text-primary">$760 - $1,000</p>
                  <p className="text-sm text-muted-foreground mt-1">Cali Price (implant + crown)</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <p className="text-3xl font-bold text-accent">60-70%</p>
                  <p className="text-sm text-muted-foreground mt-1">Your Savings</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLEAR PRICING */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-4">
                Transparent Pricing - No Hidden Fees
              </h2>
              <p className="text-center text-muted-foreground mb-10">
                We believe in honest, upfront pricing so you can plan your treatment with confidence
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-primary shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                      Dental Implant
                    </h3>
                    <div className="my-6">
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <p className="text-5xl font-bold text-primary">$380</p>
                      <span className="text-muted-foreground">USD</span>
                      <p className="text-lg text-accent font-semibold mt-2">~$1,500,000 COP</p>
                    </div>
                    <ul className="text-left space-y-2 text-muted-foreground mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        Premium titanium implant (Neodent/Straumann)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        Surgical placement procedure
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        Post-operative care included
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <Star className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                      Crown on Implant
                    </h3>
                    <div className="my-6">
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <p className="text-5xl font-bold text-accent">$380</p>
                      <span className="text-muted-foreground">USD</span>
                      <p className="text-lg text-primary font-semibold mt-2">~$1,500,000 COP</p>
                    </div>
                    <ul className="text-left space-y-2 text-muted-foreground mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        Premium zirconia or porcelain crown
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        Abutment connection included
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        Natural aesthetics guaranteed
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
                <p className="text-center text-foreground">
                  <strong>Complete Single Tooth Replacement:</strong> Implant + Crown from <strong className="text-primary">$760 USD</strong> (vs $3,000-$5,000 in the US)
                </p>
              </div>

              <div className="mt-6 p-6 bg-muted/50 rounded-xl border border-muted">
                <p className="text-center text-muted-foreground">
                  <strong className="text-foreground">Important note:</strong> Final cost may vary based on your clinical case, 
                  number of implants needed, and any additional procedures required. During your free evaluation, we assess your 
                  situation and provide a personalized quote with no obligation.
                </p>
              </div>

              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-6">
                  <a
                    href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20to%20schedule%20a%20free%20evaluation%20for%20dental%20implants%20in%20Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Get Your Personalized Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-10">
                What's Included in Your Treatment?
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-white border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Clinical Evaluation</h3>
                    <p className="text-sm text-muted-foreground mt-2">Complete diagnosis with 3D CT scan</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Treatment Planning</h3>
                    <p className="text-sm text-muted-foreground mt-2">Personalized digital treatment plan</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Implant Surgery</h3>
                    <p className="text-sm text-muted-foreground mt-2">Procedure with local anesthesia</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Follow-up Care</h3>
                    <p className="text-sm text-muted-foreground mt-2">Post-operative appointments</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT CAN CHANGE THE PRICE */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-10">
                What Can Affect the Final Price?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border border-muted">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="h-6 w-6 text-accent" />
                      <h3 className="font-semibold text-foreground">Number of implants</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Multiple implants increase total cost, but volume discounts are available for 2+ implants.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-muted">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="h-6 w-6 text-accent" />
                      <h3 className="font-semibold text-foreground">Bone grafts</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      If you lack sufficient bone density, a graft may be needed before implant placement.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-muted">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="h-6 w-6 text-accent" />
                      <h3 className="font-semibold text-foreground">Type of restoration</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Single crowns, bridges, or full-arch restorations (All-on-4) have different costs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* DENTAL TOURISM - PLAN YOUR TRIP */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Plane className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  Plan Your Dental Trip to Cali
                </h2>
              </div>
              <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
                Many international patients combine their dental treatment with a vacation in beautiful Colombia. 
                Cali is known for its warm weather year-round, friendly people, salsa dancing, and delicious cuisine.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-white border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <Plane className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Direct Flights</h3>
                    <p className="text-sm text-muted-foreground">From Miami, Houston, New York, Fort Lauderdale, and more</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Affordable Hotels</h3>
                    <p className="text-sm text-muted-foreground">Quality 4-star hotels from $40-$80/night near our clinic</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">English Support</h3>
                    <p className="text-sm text-muted-foreground">We communicate in English throughout your entire treatment</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Trip Coordination</h3>
                    <p className="text-sm text-muted-foreground">We help you plan appointments around your travel schedule</p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <a
                    href="https://wa.me/573235944931?text=Hi,%20I%20am%20interested%20in%20dental%20tourism%20in%20Cali,%20Colombia.%20Can%20you%20help%20me%20plan%20my%20trip?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Plan My Dental Trip
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* PAYMENT OPTIONS */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Flexible Payment Options
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand this is an important investment in your health. We offer various payment methods 
                to make your treatment accessible and convenient.
              </p>
              <div className="grid sm:grid-cols-4 gap-6 mb-8">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground">Cash (USD)</p>
                  <p className="text-sm text-muted-foreground">Special discounts</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground">Cash (COP)</p>
                  <p className="text-sm text-muted-foreground">Local currency accepted</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground">Credit Cards</p>
                  <p className="text-sm text-muted-foreground">Visa, Mastercard, Amex</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground">Wire Transfer</p>
                  <p className="text-sm text-muted-foreground">International transfers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-10">
                Frequently Asked Questions About Pricing
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="bg-white border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* URGENCY CTA */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                Start Your Smile Transformation Today
              </h2>
              <p className="text-xl text-white/90 mb-4">
                Get your personalized diagnosis and treatment plan with exact pricing
              </p>
              <p className="text-white/80 mb-8">
                We respond within minutes - Free consultation with no obligation
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-12 py-8 shadow-2xl">
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20to%20schedule%20a%20free%20evaluation%20to%20know%20the%20price%20of%20my%20dental%20implant%20treatment%20in%20Cali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  Schedule Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* INTERLINKING */}
        <section className="py-12 bg-white border-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground mb-4">
                Learn more about our dental implant services and what to expect
              </p>
              <Link 
                href="/en/dental-implants-cali" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Everything about dental implants in Cali, Colombia
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterEN />
      <WhatsAppButtonEN />
    </>
  )
}
