import { Metadata } from "next"
import { HeaderEN } from "@/components/en/header"
import { FooterEN } from "@/components/en/footer"
import { WhatsAppButtonEN } from "@/components/en/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, CheckCircle, Star, Sparkles, Eye, Palette } from "lucide-react"

export const metadata: Metadata = {
  title: "Smile Design in Cali, Colombia | Digital Smile Makeover | Dr. Weider",
  description: "Transform your smile with digital smile design in Cali, Colombia. Preview your new smile before treatment. Veneers, whitening, and complete smile makeovers at affordable prices.",
  keywords: "smile design cali, smile makeover colombia, dental veneers cali, teeth whitening colombia, cosmetic dentistry cali",
}

const process = [
  {
    step: "1",
    title: "Digital Analysis",
    description: "We analyze your facial features, lip shape, and dental proportions using advanced software to create the perfect smile for you.",
  },
  {
    step: "2",
    title: "Virtual Preview",
    description: "See your new smile before any treatment begins. Our digital simulation shows you exactly how your smile will look.",
  },
  {
    step: "3",
    title: "Treatment Planning",
    description: "Based on your approval, we create a detailed plan that may include veneers, whitening, orthodontics, or other treatments.",
  },
  {
    step: "4",
    title: "Smile Transformation",
    description: "Your new smile is carefully created using premium materials and techniques, ensuring natural and lasting results.",
  },
]

const treatments = [
  {
    title: "Porcelain Veneers",
    description: "Ultra-thin ceramic shells that cover the front of your teeth, correcting color, shape, and alignment.",
    icon: Sparkles,
  },
  {
    title: "Teeth Whitening",
    description: "Professional LED whitening that can lighten your teeth up to 8 shades in a single session.",
    icon: Star,
  },
  {
    title: "Dental Bonding",
    description: "Tooth-colored resin applied to repair chips, cracks, or gaps for a quick smile improvement.",
    icon: Palette,
  },
  {
    title: "Gum Contouring",
    description: "Reshape your gumline to create a more balanced and aesthetically pleasing smile.",
    icon: Eye,
  },
]

export default function SmileDesignPage() {
  return (
    <>
      <HeaderEN />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-26%20at%205.08.27%20PM-60psGi6opt0KmYH3ojIgtlMMb8lv7A.jpeg')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-white/90 text-sm font-medium">Preview Your New Smile</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Smile Design in Cali
              </h1>
              <p className="mt-6 text-xl text-white/85 leading-relaxed">
                Transform your smile with our digital smile design process. 
                See your results before treatment begins and achieve the smile of your dreams.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 font-semibold shadow-xl"
              >
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20information%20about%20smile%20design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Start Your Transformation
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What is Smile Design */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
                  What is Smile Design?
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  A personalized approach to your <span className="text-primary">perfect smile</span>
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Smile design is a comprehensive approach to cosmetic dentistry that considers your unique 
                  facial features, personality, and aesthetic goals. Using digital technology, we create 
                  a customized plan to transform your smile.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Unlike traditional cosmetic dentistry, smile design lets you preview your results before 
                  any treatment begins. This ensures you're completely satisfied with the planned outcome.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Digital preview of your new smile</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Personalized to your facial features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Combination of treatments for best results</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Natural-looking, lasting results</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-26%20at%205.08.27%20PM-60psGi6opt0KmYH3ojIgtlMMb8lv7A.jpeg"
                  alt="Smile design result"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide uppercase">
                The Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Your smile design <span className="text-primary">journey</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-accent text-accent-foreground flex items-center justify-center font-bold text-2xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatments */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
                Treatments
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Treatments included in <span className="text-primary">smile design</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatments.map((treatment, index) => {
                const Icon = treatment.icon
                return (
                  <Card key={index} className="border-border hover:border-primary/30 transition-colors text-center">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{treatment.title}</h3>
                      <p className="text-muted-foreground text-sm">{treatment.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide uppercase">
                Results
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Real <span className="text-primary">transformations</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2415%20%281%29.PNG-9ntEn8M3I0TiX9rW9HFFG748TjueqG.png"
                alt="Smile design before and after"
                className="rounded-2xl shadow-xl"
              />
              <p className="mt-4 text-center text-muted-foreground">
                Complete smile transformation with porcelain veneers
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Sparkles className="w-16 h-16 mx-auto text-accent mb-6" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">
              Ready to design your perfect smile?
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Contact us today for a free consultation and digital smile preview. 
              See your transformation before you commit.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 font-semibold"
            >
              <a
                href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20a%20smile%20design%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Book Your Consultation
              </a>
            </Button>
          </div>
        </section>
      </main>
      <FooterEN />
      <WhatsAppButtonEN />
    </>
  )
}
