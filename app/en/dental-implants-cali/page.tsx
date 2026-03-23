import type { Metadata } from "next"
import Link from "next/link"
import { HeaderEN } from "@/components/en/header"
import { FooterEN } from "@/components/en/footer"
import { WhatsAppButtonEN } from "@/components/en/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MessageCircle, Star, Shield, Clock, Award, Zap, AlertCircle, Phone, User, DollarSign, ArrowRight, Globe, Plane, MapPin, Send, FileImage, Calendar, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Implants in Cali, Colombia (2026) | From $380 USD | Dr Weider",
  description: "Dental implants in Cali, Colombia from $380 USD (2026 prices). Save 60-70% vs US prices. Experienced specialist, high-quality materials, personalized treatment in English.",
  keywords: "dental implants colombia cost, affordable dental implants colombia, dental tourism colombia, dentist in cali colombia, dental implants cali, oral implantology cali",
}

const testimonials = [
  {
    name: "Sarah Thompson",
    text: "After years with uncomfortable dentures, Dr Weider placed my implants. Now I eat anything without worry. Life-changing experience!",
    rating: 5,
  },
  {
    name: "Michael Roberts", 
    text: "I was scared about the procedure but it was much simpler than expected. The doctor explains everything patiently. Highly recommended.",
    rating: 5,
  },
  {
    name: "Jennifer Davis",
    text: "Excellent care and results. My implants look completely natural. Saved over 60% compared to US prices. Worth the trip!",
    rating: 5,
  },
]

const faqs = [
  {
    question: "Is it safe to travel for dental treatment?",
    answer: "Absolutely. Colombia has world-class dental professionals and modern facilities. Dr Weider uses the same premium implant brands (Neodent/Straumann) used in the US and Europe. Thousands of international patients travel to Cali each year for dental care.",
  },
  {
    question: "How long do I need to stay in Cali?",
    answer: "For a single implant, plan for 2 visits: the first trip (3-5 days) for evaluation and implant placement, then return in 3-4 months (2-3 days) for the final crown. We can coordinate timing to fit your schedule.",
  },
  {
    question: "Do you speak English?",
    answer: "Yes! Dr Weider and our team provide full support in English. From your first WhatsApp message to post-treatment follow-up, we communicate clearly in English throughout your entire experience.",
  },
  {
    question: "Can I send my X-rays before traveling?",
    answer: "Yes, we encourage this! Send your panoramic X-ray or CT scan via WhatsApp and we'll provide a preliminary evaluation and treatment plan before you book your trip. This helps you plan your budget and schedule.",
  },
  {
    question: "Is getting a dental implant painful?",
    answer: "The procedure is performed under local anesthesia, so you won't feel pain during surgery. Afterwards, it's normal to have mild discomfort that is easily controlled with medication. Most patients report less discomfort than expected.",
  },
  {
    question: "How long do dental implants last?",
    answer: "With proper care, dental implants can last a lifetime. They are the most durable solution for replacing missing teeth, unlike dentures that need replacement every few years.",
  },
]

export default function DentalImplantsCali() {
  return (
    <>
      <HeaderEN />
      <main>
        {/* 1. HERO - First Screen */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                  <DollarSign className="h-4 w-4" />
                  Save 60-70% vs US Prices | 2026 Updated Prices
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Dental Implants in Cali with Dr Weider
                </h1>
                <p className="mt-6 text-xl text-white/90 leading-relaxed">
                  Restore your smile with confidence and enjoy life without discomfort
                </p>
                
                {/* Highly visible bullets */}
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-lg">Safe and predictable procedure</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-lg">Aesthetic and functional results</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-lg">Personalized attention in English</span>
                  </li>
                </ul>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-xl">
                    <a
                      href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20information%20about%20dental%20implants%20in%20Cali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Schedule your consultation via WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6">
                    <a
                      href="https://wa.me/573235944931?text=Hi,%20I%20want%20to%20speak%20with%20the%20specialist%20about%20dental%20implants"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Phone className="h-5 w-5" />
                      Talk to the specialist now
                    </a>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png"
                  alt="Dental implants in Cali - Dr Weider"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* NEW: SMILE WITH CONFIDENCE - Emotional Section */}
        <section className="py-12 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="h-12 w-12 mx-auto text-accent mb-4" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Smile with Confidence Again
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Missing teeth can affect your confidence, your ability to eat, and even your facial appearance. 
              Dental implants give you back your smile and your quality of life.
            </p>
          </div>
        </section>

        {/* 2. IMMEDIATE SOCIAL PROOF */}
        <section className="py-12 bg-white border-b">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xl font-semibold text-foreground">
                International patients already restored their smiles in Cali
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-muted/30 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 3. PROBLEM - Emotional connection */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  Have you lost a tooth or feel uncomfortable with your smile?
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">
                      <strong className="text-foreground">Insecurity when smiling:</strong> You avoid showing your teeth in photos or when talking to others.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">
                      <strong className="text-foreground">Difficulty eating:</strong> You can't enjoy your favorite foods because chewing is difficult.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">
                      <strong className="text-foreground">Bone loss:</strong> Every day without replacing the tooth, you lose more jawbone.
                    </p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
                  <p className="text-lg font-semibold text-foreground">
                    Dental implants are the most effective solution to restore your smile and quality of life.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <a
                      href="https://wa.me/573235944931?text=Hi,%20I%20want%20to%20restore%20my%20smile%20with%20dental%20implants"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      I want to restore my smile
                    </a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2983.JPG-Uq8RpwOmPxRm6G2zNO5kX76aAvEqYf.jpeg"
                  alt="Crown on dental implant"
                  className="rounded-xl shadow-lg"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2993.JPG-WO713zMc9atFAEDO1oyLAHgpUhrb9Z.jpeg"
                  alt="Oral rehabilitation with implants"
                  className="rounded-xl shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. SOLUTION - Clear selling point */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Dental implants: the best solution for replacing missing teeth
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                A dental implant is a small titanium screw that is placed in the jawbone 
                to replace the root of a missing tooth. A ceramic crown is placed on top 
                that looks and functions exactly like a natural tooth.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-6 text-left">
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Dental Implants
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Fixed and permanent</li>
                      <li>Feel like natural teeth</li>
                      <li>No adhesives needed</li>
                      <li>Preserve the bone</li>
                      <li>Last a lifetime</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border border-muted">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-muted-foreground mb-4 flex items-center gap-2">
                      Removable Dentures
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Take in and out</li>
                      <li>Can move while eating</li>
                      <li>Require adhesives</li>
                      <li>Don't prevent bone loss</li>
                      <li>Last 5-10 years</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE COLOMBIA FOR DENTAL IMPLANTS */}
        <section className="py-20 bg-accent/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                <Globe className="h-4 w-4" />
                Dental Tourism
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Why Choose Colombia for Dental Implants?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <DollarSign className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Save 60-70%</h3>
                  <p className="text-sm text-muted-foreground">Compared to US prices with the same quality materials</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <Award className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">High-Quality Care</h3>
                  <p className="text-sm text-muted-foreground">Premium implant brands and modern technology</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <Clock className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Faster Timelines</h3>
                  <p className="text-sm text-muted-foreground">No long waiting lists - get treated on your schedule</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <User className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Personalized Attention</h3>
                  <p className="text-sm text-muted-foreground">Direct communication with your specialist in English</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20am%20interested%20in%20dental%20tourism%20in%20Colombia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Learn more about dental tourism
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS FOR INTERNATIONAL PATIENTS */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                <Plane className="h-4 w-4" />
                For International Patients
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                How It Works for International Patients
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We make dental tourism simple and stress-free
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center">
                  <Send className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1. Contact Us</h3>
                <p className="text-muted-foreground text-sm">Send us a WhatsApp message with your dental concern</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center">
                  <FileImage className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2. Send X-rays</h3>
                <p className="text-muted-foreground text-sm">Share your X-rays or photos for a preliminary evaluation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center">
                  <Calendar className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">3. Get Your Plan</h3>
                <p className="text-muted-foreground text-sm">Receive your personalized treatment plan and quote</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center">
                  <Plane className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">4. Travel & Smile</h3>
                <p className="text-muted-foreground text-sm">Book your trip and get your treatment done</p>
              </div>
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20am%20an%20international%20patient%20interested%20in%20dental%20implants.%20Can%20I%20send%20my%20X-rays?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Start your evaluation now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 5. BENEFITS - Scannable */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Benefits of Dental Implants
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Chewing function</h3>
                  <p className="text-sm text-muted-foreground">Eat any food without limitations</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Natural aesthetics</h3>
                  <p className="text-sm text-muted-foreground">Look exactly like natural teeth</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Preserves bone</h3>
                  <p className="text-sm text-muted-foreground">Prevents progressive bone loss</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">High durability</h3>
                  <p className="text-sm text-muted-foreground">Last a lifetime with proper care</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20want%20to%20learn%20more%20about%20the%20benefits%20of%20dental%20implants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Free consultation
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 6. PROCESS - Reduces fear */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                What is the process like?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A simple procedure in 4 steps
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-2xl">
                  1
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Evaluation</h3>
                <p className="text-muted-foreground text-sm">Complete evaluation with digital X-rays to plan your treatment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-2xl">
                  2
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Placement</h3>
                <p className="text-muted-foreground text-sm">Procedure with local anesthesia, no pain or discomfort</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-2xl">
                  3
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Healing</h3>
                <p className="text-muted-foreground text-sm">The implant integrates with your bone in 3-4 months</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-2xl">
                  4
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Final crown</h3>
                <p className="text-muted-foreground text-sm">We place the ceramic crown. Your complete smile</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PRICING */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                How much does a dental implant cost in Cali?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                The price of a dental implant in Cali, Colombia depends on each particular case. 
                During the evaluation we clinically assess your needs and provide you with 
                a personalized quote with no obligation.
              </p>
              <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Dental implants start from $380 USD (approximate price, updated for 2026)
                </p>
                <p className="text-foreground mb-2">
                  Zirconia crowns on implants start from $380 USD (approximate price, updated for 2026)
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  In the US, the same treatment can cost between $3,000-$5,000 USD
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10">
                  <a
                    href="https://wa.me/573235944931?text=Hi,%20I%20want%20to%20know%20the%20price%20of%20dental%20implants%20in%20Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Get a free quote via WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold">
                  <Link href="/en/dental-implants-price-cali" className="flex items-center gap-2">
                    View detailed pricing
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 8. OBJECTIONS - FAQ */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                We answer your questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-muted/30 border-0">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20have%20questions%20about%20dental%20implants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Have more questions? Contact us
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 9. URGENCY / STRONG CTA */}
        <section className="py-16 bg-accent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg font-semibold text-accent-foreground/90 mb-2">
              Limited availability for international patients each month
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-accent-foreground">
              Schedule your evaluation today and receive a personalized treatment plan
            </h2>
            <p className="mt-4 text-lg text-accent-foreground/80">
              The first consultation is free. We evaluate your case and give you options.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-12 py-6 shadow-xl">
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20want%20to%20schedule%20my%20evaluation%20for%20dental%20implants%20in%20Cali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-6 w-6" />
                  Schedule via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 10. CLOSING WITH AUTHORITY - The Doctor */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Your implant specialist
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  Treated by Dr Weider
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Dentist with over 10 years of experience and specialized training in oral implantology. 
                  He has performed hundreds of successful dental implant procedures in Cali.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Oral implantology specialist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Continuous training in the latest techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Focus on minimally invasive procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">English-speaking personalized attention</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <a
                      href="https://wa.me/573235944931?text=Hello%20Dr%20Weider,%20I%20want%20to%20schedule%20an%20appointment%20for%20dental%20implants"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Contact Dr Weider
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-80 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-40 h-40 text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterEN />
      <WhatsAppButtonEN />
    </>
  )
}
