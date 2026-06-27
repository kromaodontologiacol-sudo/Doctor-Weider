import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { MessageCircle, Check, ChevronRight, Star, DollarSign, Plane } from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Implant Prices Cali Colombia 2026 - From $380 USD | Dr. Weider",
  description: "Dental implant prices in Cali, Colombia 2026. Implant from $380 USD. Zirconia crown from $380. Save 70% vs US prices. Free consultation available.",
  keywords: "dental implant price colombia, dental implant cost cali, cheap dental implants colombia, affordable dental implants, dental tourism colombia prices",
  openGraph: {
    title: "Dental Implant Prices Cali Colombia 2026 - From $380 USD",
    description: "Dental implants from $380 USD. Save 70% vs US prices. Free consultation.",
    type: "website",
  },
}

const prices = [
  {
    name: "Titanium Implant",
    price: "$380",
    cop: "~$1,500,000 COP",
    description: "Medical-grade titanium implant with conical connection",
    includes: [
      "Premium titanium implant",
      "Placement surgery",
      "Post-operative check-ups",
      "Lifetime implant warranty",
    ],
  },
  {
    name: "Implant Crown",
    price: "$380",
    cop: "~$1,500,000 COP",
    description: "High-aesthetic ceramic or zirconia crown",
    includes: [
      "Ceramic/zirconia crown",
      "Titanium abutment",
      "CAD/CAM digital design",
      "Occlusion adjustments",
    ],
  },
  {
    name: "Complete Package",
    price: "$710",
    cop: "~$2,800,000 COP",
    description: "Implant + Crown: The complete solution",
    includes: [
      "Premium titanium implant",
      "Zirconia crown",
      "All check-ups included",
      "Extended warranty",
    ],
    featured: true,
  },
]

const usComparison = [
  { procedure: "Single Dental Implant (Complete)", us: "$3,000 - $5,000", colombia: "$710" },
  { procedure: "Full Mouth Implants (All-on-4)", us: "$20,000 - $30,000", colombia: "$8,000 - $12,000" },
  { procedure: "Porcelain Veneer (per tooth)", us: "$1,000 - $2,500", colombia: "$300 - $500" },
  { procedure: "Full Smile Design (8 veneers)", us: "$8,000 - $20,000", colombia: "$2,400 - $4,000" },
]

export default function DentalImplantPricesPage() {
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
              <Link href="/en/dental-implants-cali" className="hover:text-white">Implants</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Prices</span>
            </nav>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/90 rounded-full mb-4">
                <span className="text-accent-foreground font-semibold">Save up to 70% vs US prices</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Dental Implant Prices{" "}
                <span className="text-accent">Colombia 2026</span>
              </h1>
              <p className="mt-6 text-xl text-white/90 leading-relaxed">
                Transparent and competitive pricing. Premium quality implants 
                with cutting-edge technology.
              </p>
              <div className="mt-8 flex items-center justify-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-white font-medium">22 verified Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {prices.map((item, index) => (
                <Card 
                  key={index} 
                  className={`relative ${item.featured ? 'border-accent border-2 shadow-xl' : 'border-border'}`}
                >
                  {item.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">{item.price}</span>
                      <span className="text-lg text-muted-foreground"> USD</span>
                      <span className="text-muted-foreground block text-sm mt-1">{item.cop}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {item.includes.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full mt-6 ${item.featured ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}`}
                      variant={item.featured ? "default" : "outline"}
                    >
                      <a
                        href={`https://wa.me/573235944931?text=Hi,%20I%20would%20like%20information%20about%20${encodeURIComponent(item.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Inquire
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* US Comparison Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground">
                US vs Colombia Price Comparison
              </h2>
              <p className="mt-4 text-muted-foreground">
                See how much you can save with dental tourism in Colombia
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="text-left p-4">Procedure</th>
                        <th className="text-right p-4">US Price</th>
                        <th className="text-right p-4">Our Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usComparison.map((row, index) => (
                        <tr key={index} className="border-b border-border">
                          <td className="p-4">{row.procedure}</td>
                          <td className="p-4 text-right text-muted-foreground">{row.us}</td>
                          <td className="p-4 text-right font-bold text-accent">{row.colombia}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                * Prices in USD. Savings of 50-70% compared to US prices.
              </p>
            </div>
          </div>
        </section>

        {/* Dental Tourism CTA */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Plane className="w-16 h-16 text-accent" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                    Planning Dental Tourism?
                  </h2>
                  <p className="text-white/90">
                    We help international patients with treatment planning, 
                    hotel recommendations, and transportation.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    <Link href="/en/dental-tourism-colombia">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Free Consultation
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Know exactly what treatment you need and its cost. 
              No commitment required.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20to%20schedule%20a%20free%20consultation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Book Free Consultation
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
