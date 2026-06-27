import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { MessageCircle, Check, ChevronRight, Star, Plane, Hotel, Car, MapPin, DollarSign, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Tourism Colombia 2026 - Save 70% on Dental Care | Dr. Weider",
  description: "Complete guide to dental tourism in Cali, Colombia. Save 50-70% on implants, smile design, and full mouth rehabilitation. American-quality care at Colombian prices.",
  keywords: "dental tourism colombia, dental vacation cali, affordable dental care colombia, dental implants abroad, dental travel colombia",
  openGraph: {
    title: "Dental Tourism Colombia 2026 - Save 70% on Dental Care",
    description: "Save 50-70% on dental procedures. Complete guide to dental tourism in Cali.",
    type: "website",
  },
}

const whyChooseCali = [
  {
    icon: DollarSign,
    title: "Save 50-70%",
    description: "Same quality procedures at a fraction of US prices.",
  },
  {
    icon: Shield,
    title: "Board-Certified Specialists",
    description: "Trained professionals using international protocols.",
  },
  {
    icon: Plane,
    title: "Easy to Reach",
    description: "Direct flights from major US cities to Cali.",
  },
  {
    icon: Hotel,
    title: "Affordable Stay",
    description: "Quality hotels from $40-80 USD per night.",
  },
]

const process = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "Send us your X-rays and photos via WhatsApp. We'll provide a free treatment plan and quote.",
  },
  {
    step: 2,
    title: "Plan Your Trip",
    description: "We help coordinate your travel dates with your treatment schedule. Most procedures take 1-2 visits.",
  },
  {
    step: 3,
    title: "Arrive in Cali",
    description: "We can arrange airport pickup and hotel recommendations near our clinic.",
  },
  {
    step: 4,
    title: "Treatment",
    description: "Receive world-class dental care in our modern, fully-equipped facility.",
  },
  {
    step: 5,
    title: "Follow-up",
    description: "We provide detailed aftercare instructions and remote follow-up support.",
  },
]

const packages = [
  {
    name: "Implant Package",
    description: "Single dental implant with crown",
    price: "From $710 USD",
    includes: ["Titanium implant", "Zirconia crown", "All consultations", "1-year warranty"],
  },
  {
    name: "Smile Design Package",
    description: "8 porcelain veneers",
    price: "From $3,200 USD",
    includes: ["8 porcelain veneers", "Digital smile design", "Teeth whitening", "Follow-up care"],
  },
  {
    name: "Full Mouth Rehabilitation",
    description: "Complete smile restoration",
    price: "From $8,000 USD",
    includes: ["Multiple implants", "Full arch restoration", "All procedures included", "Extended warranty"],
  },
]

export default function DentalTourismPage() {
  const dictionary = getDictionary("en")

  return (
    <>
      <Header dictionary={dictionary} locale="en" />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-white/70 text-sm mb-6">
              <Link href="/en" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Dental Tourism</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/90 rounded-full mb-4">
                  <Plane className="w-5 h-5 text-accent-foreground" />
                  <span className="text-accent-foreground font-semibold">Your Dental Vacation Awaits</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Dental Tourism in{" "}
                  <span className="text-accent">Colombia</span>
                </h1>
                <p className="mt-6 text-xl text-white/90 leading-relaxed">
                  Save up to 70% on dental procedures while enjoying beautiful Cali, Colombia. 
                  World-class care at a fraction of US prices.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    <a
                      href="https://wa.me/573235944931?text=Hi,%20I'm%20interested%20in%20dental%20tourism%20to%20Colombia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    <Link href="/en/dental-implants-price-cali">
                      View All Prices
                    </Link>
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-white font-medium">Trusted by international patients</span>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC04054-ycMkmDFGxRiAzl0HAQwAYWD89W4uqu.jpg"
                  alt="Dr. Weider dental clinic"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Cali */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Why Choose <span className="text-primary">Cali, Colombia?</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseCali.map((item, index) => {
                const Icon = item.icon
                return (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                How It <span className="text-accent">Works</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {process.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Popular <span className="text-primary">Packages</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                    <p className="text-2xl font-bold text-primary mb-4">{pkg.price}</p>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full mt-6"
                      variant="outline"
                    >
                      <a
                        href={`https://wa.me/573235944931?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Quote
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  About <span className="text-primary">Cali, Colombia</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Cali is Colombia's third-largest city, known for its warm climate, 
                    salsa dancing, and excellent medical facilities. It's becoming a 
                    popular destination for medical tourism.
                  </p>
                  <p>
                    The city offers modern infrastructure, affordable accommodation, 
                    and a wide range of activities for visitors. English is spoken 
                    at most hotels and our clinic.
                  </p>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>3-4 hour flight from Miami</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Hotel className="w-5 h-5 text-primary" />
                    <span>Quality hotels from $40-80/night</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-primary" />
                    <span>Airport pickup available</span>
                  </div>
                </div>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39280573585!2d-76.6356!3d3.4516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae6168!2sCali%2C%20Valle%20del%20Cauca%2C%20Colombia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cali, Colombia location"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-white font-medium">Limited availability for international patients</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Ready to Start Your Dental Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Send us your X-rays and photos for a free, no-obligation treatment plan and quote.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/573235944931?text=Hi,%20I'd%20like%20a%20free%20quote%20for%20dental%20treatment%20in%20Colombia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Get Your Free Quote
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer dictionary={dictionary} locale="en" />
      <WhatsAppButton dictionary={dictionary} />
    </>
  )
}
