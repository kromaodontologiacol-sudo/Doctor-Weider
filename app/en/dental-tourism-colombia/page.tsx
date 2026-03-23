import type { Metadata } from "next"
import Link from "next/link"
import { HeaderEN } from "@/components/en/header"
import { FooterEN } from "@/components/en/footer"
import { WhatsAppButtonEN } from "@/components/en/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CheckCircle, MessageCircle, Star, Shield, Clock, Award, 
  Plane, MapPin, DollarSign, Globe, Sun, Users, Heart,
  Smile, Stethoscope, AlertTriangle, Phone, Send, FileImage, Calendar, ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Tourism in Colombia | Save 60-70% | High Quality Care | Dr Weider",
  description: "Dental tourism in Colombia: high-quality dental implants, smile design, and prosthesis at affordable prices. Save up to 70% compared to US prices. Travel to Cali and restore your smile.",
  keywords: "dental tourism colombia, dental implants colombia cost, affordable dental implants colombia, dentist in cali colombia, dental tourism cali, dental vacation colombia",
}

const whyColombiaReasons = [
  {
    icon: DollarSign,
    title: "Affordable Treatments",
    description: "Save 60-70% compared to US prices without compromising on quality"
  },
  {
    icon: Award,
    title: "Highly Trained Professionals",
    description: "Colombian dentists receive world-class education and continuous training"
  },
  {
    icon: Stethoscope,
    title: "Modern Clinics",
    description: "State-of-the-art facilities with the latest dental technology"
  },
  {
    icon: Sun,
    title: "Beautiful Destination",
    description: "Combine your dental treatment with a vacation in beautiful Colombia"
  },
]

const whyCaliReasons = [
  {
    icon: Plane,
    title: "Strategic Location",
    description: "Direct flights from Miami, Houston, New York, and other major US cities"
  },
  {
    icon: Sun,
    title: "Warm Weather",
    description: "Enjoy warm, spring-like weather year-round (average 75°F/24°C)"
  },
  {
    icon: MapPin,
    title: "Easy Access",
    description: "Modern airport, safe neighborhoods, and excellent hotels near our clinic"
  },
  {
    icon: Users,
    title: "Personalized Care",
    description: "Small practice with direct attention from Dr Weider in English"
  },
]

const services = [
  {
    title: "Dental Implants",
    description: "Single implants from $380 USD. Full arch solutions available.",
    link: "/en/dental-implants-cali",
    savings: "Save $2,000-$4,000 per implant"
  },
  {
    title: "Smile Design",
    description: "Porcelain veneers, whitening, and complete smile makeovers.",
    link: "/en/smile-design-cali",
    savings: "Save 60-70% on veneers"
  },
  {
    title: "Dental Prosthesis",
    description: "Crowns, bridges, dentures, and high-suction prosthesis.",
    link: "/en/dental-prosthesis-cali",
    savings: "Premium materials at affordable prices"
  },
  {
    title: "Emergency Care",
    description: "Same-day appointments for dental emergencies.",
    link: "/en/dental-emergency-cali",
    savings: "Immediate care when you need it"
  },
]

const process = [
  {
    step: "1",
    icon: Send,
    title: "Contact Us",
    description: "Send a WhatsApp message with your dental concern. We respond in English within hours."
  },
  {
    step: "2",
    icon: FileImage,
    title: "Online Evaluation",
    description: "Share your X-rays or photos. We provide a preliminary treatment plan and quote."
  },
  {
    step: "3",
    icon: Calendar,
    title: "Travel Planning",
    description: "We help coordinate your appointment dates. Combine treatment with your vacation."
  },
  {
    step: "4",
    icon: Stethoscope,
    title: "Treatment",
    description: "Arrive in Cali, receive your treatment, and enjoy the city while you heal."
  },
  {
    step: "5",
    icon: Heart,
    title: "Follow-up",
    description: "We stay in contact for post-treatment support. Return visits coordinated as needed."
  },
]

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "Texas, USA",
    text: "I saved over $8,000 on my dental implants compared to quotes I got in Houston. Dr Weider was professional, the clinic was modern, and Cali is a beautiful city. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Roberts",
    location: "Florida, USA",
    text: "Was nervous about getting dental work abroad but Dr Weider made me feel completely at ease. He speaks perfect English and explains everything clearly. Great experience overall.",
    rating: 5,
  },
  {
    name: "Jennifer Davis",
    location: "California, USA",
    text: "Got 4 implants and veneers done in Cali. The quality is excellent and I saved enough to pay for my entire trip plus more. Will definitely come back for any future dental work.",
    rating: 5,
  },
]

export default function DentalTourismColombia() {
  return (
    <>
      <HeaderEN />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC06506-uv6FbyGz9WGMzhA4Li03ACBG7VoO7y.jpg')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                <Globe className="h-4 w-4" />
                Dental Tourism
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Dental Tourism in Colombia - High Quality Care at Affordable Prices
              </h1>
              <p className="mt-6 text-xl text-white/90 leading-relaxed">
                Travel to Cali and restore your smile while saving thousands of dollars
              </p>
              
              {/* Key stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto">
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-3xl font-bold text-accent">60-70%</p>
                  <p className="text-sm text-white/80">Savings</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-3xl font-bold text-accent">+2000</p>
                  <p className="text-sm text-white/80">Patients</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-3xl font-bold text-accent">5.0</p>
                  <p className="text-sm text-white/80">Rating</p>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-xl">
                  <a
                    href="https://wa.me/573235944931?text=Hi,%20I%20am%20interested%20in%20dental%20tourism%20in%20Colombia.%20Can%20you%20help%20me%20plan%20my%20treatment?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Plan Your Treatment
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6">
                  <a href="tel:+573235944931" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call: +57 323 594 4931
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* WHY COLOMBIA */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                <Globe className="h-4 w-4" />
                Why Colombia?
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Why Choose Colombia for Dental Care?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyColombiaReasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <Card key={index} className="bg-muted/30 border-0 text-center">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground">{reason.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* WHY CALI */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                <MapPin className="h-4 w-4" />
                Why Cali?
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Why Cali is Perfect for Dental Tourism
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Known as the "Salsa Capital of the World," Cali offers the perfect blend of excellent dental care, warm hospitality, and vibrant culture.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyCaliReasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <Card key={index} className="bg-white border-0 shadow-lg text-center">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground">{reason.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                <Stethoscope className="h-4 w-4" />
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Dental Services for International Patients
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border border-muted hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                    <p className="text-accent font-semibold text-sm mb-4">{service.savings}</p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={service.link} className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 text-accent rounded-full text-sm font-semibold">
                <Calendar className="h-4 w-4" />
                How It Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">
                Your Dental Tourism Journey
              </h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                From first contact to follow-up, we make dental tourism simple and stress-free
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-8">
              {process.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="text-sm font-semibold text-accent mb-1">Step {step.step}</div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </div>
                )
              })}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20want%20to%20start%20my%20dental%20tourism%20journey.%20Can%20I%20send%20my%20X-rays?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Start Your Journey Today
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* COST ADVANTAGE */}
        <section className="py-20 bg-accent/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                <DollarSign className="h-4 w-4" />
                Cost Comparison
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                See How Much You Can Save
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary shadow-xl">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <h3 className="text-lg font-semibold text-muted-foreground mb-2">US Prices</h3>
                      <p className="text-4xl font-bold text-destructive line-through">$3,000 - $5,000</p>
                      <p className="text-sm text-muted-foreground mt-1">Per implant with crown</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-accent-foreground">VS</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Cali, Colombia</h3>
                      <p className="text-4xl font-bold text-primary">$760 - $1,000</p>
                      <p className="text-sm text-muted-foreground mt-1">Per implant with crown</p>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-primary/5 rounded-xl text-center">
                    <p className="text-2xl font-bold text-primary">
                      Save $2,000 - $4,000 per implant
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Even including flights and hotels, you save thousands on your dental care
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-10">
                  <a
                    href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20a%20free%20quote%20for%20dental%20treatment%20in%20Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Get Your Free Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                <Star className="h-4 w-4" />
                Patient Stories
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                What Our International Patients Say
              </h2>
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
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* URGENCY */}
        <section className="py-12 bg-destructive/10 border-y border-destructive/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <span className="text-lg font-semibold text-destructive">Limited Availability</span>
            </div>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              We can only accept a limited number of international patients each month to ensure personalized care. 
              Contact us early to secure your appointment.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Smile className="w-16 h-16 mx-auto text-accent mb-6" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Get Your Personalized Treatment Plan Today
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Send us a message with your dental concern and we'll create a customized plan just for you. 
              No obligation, no pressure - just honest guidance from Dr Weider.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-6">
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20to%20get%20a%20personalized%20treatment%20plan%20for%20dental%20tourism%20in%20Colombia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-6 w-6" />
                  Get Your Treatment Plan via WhatsApp
                </a>
              </Button>
            </div>
            <p className="mt-6 text-white/60 text-sm">
              We respond within hours - usually much faster!
            </p>
          </div>
        </section>
      </main>
      <FooterEN />
      <WhatsAppButtonEN />
    </>
  )
}
