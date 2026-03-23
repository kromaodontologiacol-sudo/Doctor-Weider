import { Metadata } from "next"
import { HeaderEN } from "@/components/en/header"
import { FooterEN } from "@/components/en/footer"
import { WhatsAppButtonEN } from "@/components/en/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, CheckCircle, Info, DollarSign } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dental Implants Cost in Cali, Colombia | From $380 USD | Dr. Weider",
  description: "Affordable dental implants in Cali, Colombia. Implant starting from $380 USD. Zirconia crown from $380 USD. Save 60-70% compared to US prices. Get a free quote today.",
  keywords: "dental implants cost colombia, dental implants price cali, affordable dental implants, cheap dental implants colombia, dental tourism prices",
}

const pricingItems = [
  {
    title: "Dental Implant",
    price: "From $380 USD",
    description: "High-quality titanium implant placement",
    includes: [
      "Premium titanium implant",
      "3D CT scan evaluation",
      "Surgical procedure",
      "Post-operative care",
      "Follow-up appointments",
    ],
  },
  {
    title: "Zirconia Crown on Implant",
    price: "From $380 USD",
    description: "Natural-looking permanent crown",
    includes: [
      "Custom zirconia crown",
      "Digital impression",
      "Abutment connection",
      "Color matching",
      "Perfect fit guarantee",
    ],
  },
  {
    title: "Complete Single Tooth Implant",
    price: "From $760 USD",
    description: "Implant + Crown package",
    includes: [
      "Titanium implant",
      "Zirconia crown",
      "All consultations",
      "Digital planning",
      "Warranty included",
    ],
    featured: true,
  },
]

const comparisonData = [
  { procedure: "Single Dental Implant", us: "$3,000 - $5,000", cali: "From $760", savings: "Up to 75%" },
  { procedure: "Implant Only (no crown)", us: "$1,500 - $3,000", cali: "From $380", savings: "Up to 75%" },
  { procedure: "Zirconia Crown", us: "$1,000 - $2,500", cali: "From $380", savings: "Up to 70%" },
  { procedure: "All-on-4 Implants", us: "$20,000 - $30,000", cali: "Contact us", savings: "Up to 65%" },
]

export default function DentalImplantsPricePage() {
  return (
    <>
      <HeaderEN />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <DollarSign className="w-4 h-4 text-accent" />
                <span className="text-white/90 text-sm font-medium">Transparent Pricing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Dental Implants Cost in Cali, Colombia
              </h1>
              <p className="mt-6 text-xl text-white/85 leading-relaxed">
                High-quality dental implants at affordable prices. 
                Save 60-70% compared to US costs without compromising on quality.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide uppercase">
                Our Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Transparent <span className="text-primary">implant pricing</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingItems.map((item, index) => (
                <Card 
                  key={index} 
                  className={`relative overflow-hidden ${item.featured ? 'border-accent border-2 shadow-xl' : 'border-border'}`}
                >
                  {item.featured && (
                    <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold">
                      Best Value
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-serif">{item.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-4xl font-bold text-primary mb-6">{item.price}</p>
                    <ul className="space-y-3 text-left mb-6">
                      {item.includes.map((include, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>{include}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full ${item.featured ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}`}
                      variant={item.featured ? 'default' : 'outline'}
                    >
                      <a
                        href={`https://wa.me/573235944931?text=Hi,%20I%20would%20like%20a%20quote%20for%20${encodeURIComponent(item.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get a Quote
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Important Note */}
        <section className="py-12 bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="p-6 flex gap-4">
                <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Important Note</h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    Prices may vary depending on your clinical condition. Factors such as bone density, 
                    need for bone grafting, number of implants, and overall oral health can affect the 
                    final cost. A precise quote will be provided after your initial consultation and 
                    diagnostic evaluation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
                What's Included
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Your treatment <span className="text-primary">includes</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Complete evaluation",
                "3D CT scan and X-rays",
                "Personalized treatment plan",
                "Implant placement surgery",
                "Post-operative care",
                "Follow-up appointments",
                "Digital planning",
                "Local anesthesia",
                "Medications prescription",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price Comparison Table */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide uppercase">
                Price Comparison
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Compare <span className="text-primary">US vs Colombia</span> prices
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-border">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-foreground">Procedure</th>
                    <th className="text-center p-4 font-semibold text-foreground">US Price</th>
                    <th className="text-center p-4 font-semibold text-primary">Cali Price</th>
                    <th className="text-center p-4 font-semibold text-accent">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-border last:border-0">
                      <td className="p-4 text-foreground">{row.procedure}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.us}</td>
                      <td className="p-4 text-center font-semibold text-primary">{row.cali}</td>
                      <td className="p-4 text-center font-semibold text-accent">{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">
              Get your personalized quote today
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Contact us for a free consultation. We'll evaluate your case and provide an accurate quote based on your specific needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 font-semibold"
              >
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20a%20price%20quote%20for%20dental%20implants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Get Your Free Quote
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-base px-8 py-6"
              >
                <Link href="/en/dental-implants-cali">
                  Learn About Implants
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
