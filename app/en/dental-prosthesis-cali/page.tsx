import { Metadata } from "next"
import { HeaderEN } from "@/components/en/header"
import { FooterEN } from "@/components/en/footer"
import { WhatsAppButtonEN } from "@/components/en/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dental Prosthesis in Cali, Colombia | Dentures & Crowns | Dr. Weider",
  description: "High-quality dental prosthesis in Cali, Colombia. Fixed and removable dentures, crowns, bridges, and high-suction prosthesis. Affordable prices with expert care.",
  keywords: "dental prosthesis cali, dentures colombia, dental crowns cali, bridges colombia, high suction dentures",
}

const prosthesisTypes = [
  {
    title: "Fixed Prosthesis (Crowns & Bridges)",
    description: "Permanent restorations cemented to existing teeth or implants. Includes ceramic crowns and bridges that look and function like natural teeth.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2983.JPG-Uq8RpwOmPxRm6G2zNO5kX76aAvEqYf.jpeg",
    benefits: ["Permanent solution", "Natural appearance", "No removal needed", "Long-lasting results"],
  },
  {
    title: "Removable Prosthesis (Dentures)",
    description: "Complete or partial dentures that can be removed for cleaning. Custom-made for comfort and natural appearance.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protesis-removible-completa-EyWUDXxp4ySIYKOQp9Fobw9cjgJovW.jpg",
    benefits: ["Affordable option", "Easy maintenance", "Restore smile quickly", "Adjustable fit"],
  },
  {
    title: "High-Suction Prosthesis",
    description: "Advanced dentures with superior retention without adhesives. Flexible materials provide exceptional comfort and security.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%284%29-3RqbuwkL4JIyfDMMgjtZODhSS36MUo.jpg",
    benefits: ["No adhesives needed", "Superior retention", "Flexible & comfortable", "Eat with confidence"],
  },
  {
    title: "Implant-Supported Prosthesis",
    description: "The most stable option combining implants with fixed or removable prostheses. Ideal for full mouth rehabilitation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2993.JPG-WO713zMc9atFAEDO1oyLAHgpUhrb9Z.jpeg",
    benefits: ["Maximum stability", "Preserves bone", "Most natural feel", "Lifetime solution"],
  },
]

export default function DentalProsthesisPage() {
  return (
    <>
      <HeaderEN />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Affordable Solutions for Missing Teeth in Cali, Colombia
              </h1>
              <p className="mt-6 text-xl text-white/85 leading-relaxed">
                Restore your smile with high-quality dental prostheses at up to 70% lower cost than in the US. 
                From crowns and bridges to dentures and implant-supported restorations, we offer solutions for every need and budget.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 font-semibold shadow-xl"
              >
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20information%20about%20dental%20prosthesis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Get a Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Prosthesis Types */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
                Our Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Types of <span className="text-primary">dental prosthesis</span>
              </h2>
            </div>
            <div className="space-y-12">
              {prosthesisTypes.map((type, index) => (
                <Card key={index} className="overflow-hidden border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-0">
                    <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <img
                          src={type.image}
                          alt={type.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                      </div>
                      <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{type.title}</h3>
                        <p className="text-muted-foreground mb-6">{type.description}</p>
                        <ul className="space-y-2 mb-6">
                          {type.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-accent" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          asChild
                          className="w-fit bg-accent hover:bg-accent/90 text-accent-foreground"
                        >
                          <a
                            href={`https://wa.me/573235944931?text=Hi,%20I%20would%20like%20information%20about%20${encodeURIComponent(type.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Learn More
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Find the right solution for you
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Not sure which prosthesis is right for you? Contact us for a free consultation 
              and we'll help you find the best option for your needs and budget.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 font-semibold"
              >
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20need%20help%20choosing%20the%20right%20dental%20prosthesis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Get Expert Advice
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 py-6"
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
