import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { CheckCircle, ArrowRight, Phone, Star, Sparkles, Camera, Palette, Shield, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Smile Design in Cali, Colombia | Dr. Weider - Transform Your Smile",
  description: "Professional smile design in Cali, Colombia. Veneers, teeth whitening, and complete smile makeovers. Save up to 70% on cosmetic dentistry. Free consultation.",
  keywords: "smile design Cali, cosmetic dentistry Colombia, dental veneers Cali, teeth whitening, smile makeover Colombia",
  alternates: {
    canonical: "https://doctorweider.com/en/smile-design-cali",
    languages: {
      "es": "https://doctorweider.com/diseno-de-sonrisa-cali",
      "en": "https://doctorweider.com/en/smile-design-cali"
    }
  },
  openGraph: {
    title: "Smile Design in Cali, Colombia | Dr. Weider",
    description: "Transform your smile with professional cosmetic dentistry. Save up to 70%.",
    url: "https://doctorweider.com/en/smile-design-cali",
    locale: "en_US",
    type: "website"
  }
}

export default function SmileDesignCaliPage() {
  const dictionary = getDictionary("en")

  return (
    <main className="min-h-screen bg-background">
      <Header dictionary={dictionary} locale="en" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Cosmetic Dentistry Specialist
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Smile Design in Cali, Colombia
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your smile with personalized cosmetic dentistry. Dr. Weider combines artistry 
              and dental expertise to create the beautiful, natural-looking smile you have always dreamed of.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://wa.me/573000000000?text=Hi,%20I%20want%20information%20about%20smile%20design%20in%20Cali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg"
              >
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+573000000000"
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground border-2 border-border px-8 py-4 rounded-full font-semibold text-lg hover:border-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Digital Smile Preview</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Save Up to 70%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Natural-Looking Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Smile Design */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              What is Smile Design?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Smile design, also known as smile makeover, is a comprehensive approach to cosmetic dentistry 
                that considers all aspects of your smile to create harmony between your teeth, gums, lips, 
                and facial features.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Unlike individual cosmetic treatments, smile design takes a holistic view of your dental 
                aesthetics. Dr. Weider analyzes your face shape, skin tone, lip line, and personal preferences 
                to design a smile that is uniquely yours - one that looks natural and enhances your overall appearance.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Using advanced digital technology, you can preview your new smile before any treatment begins. 
                This ensures you are completely satisfied with the planned result before we start the transformation.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you want to correct minor imperfections or completely transform your smile, our 
                personalized smile design service in Cali, Colombia offers world-class results at a fraction 
                of US prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smile Design Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Smile Design Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to creating your perfect smile
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Camera,
                  step: "1",
                  title: "Digital Analysis",
                  description: "We take high-resolution photos, X-rays, and digital impressions of your teeth. Using specialized software, we analyze your facial proportions, tooth alignment, and smile dynamics."
                },
                {
                  icon: Palette,
                  step: "2",
                  title: "Design Preview",
                  description: "You will see a digital preview of your new smile before any treatment begins. We can make adjustments together until you are completely satisfied with the planned result."
                },
                {
                  icon: Sparkles,
                  step: "3",
                  title: "Mock-Up Trial",
                  description: "We create a temporary mock-up so you can actually try your new smile. This allows you to see and feel how your final result will look in real life."
                },
                {
                  icon: Award,
                  step: "4",
                  title: "Final Transformation",
                  description: "Once approved, we proceed with the definitive treatment. Using premium materials and precise techniques, we create your beautiful new smile exactly as designed."
                }
              ].map((item, index) => (
                <div key={index} className="bg-card p-8 rounded-2xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">Step {item.step}</span>
                      <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Included */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Treatments We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your smile design may include one or more of these cosmetic treatments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Dental Veneers */}
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Dental Veneers</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Ultra-thin porcelain or composite shells that cover the front surface of teeth. 
                Perfect for correcting color, shape, size, or minor alignment issues.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Porcelain or composite options
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Last 10-15+ years
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Stain-resistant
                </li>
              </ul>
            </div>

            {/* Zirconia Crowns */}
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">👑</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Zirconia Crowns</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Premium tooth-colored crowns made from high-strength zirconia ceramic. 
                Ideal for damaged teeth that need full coverage while maintaining a natural appearance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Strongest ceramic material
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Natural translucency
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Metal-free
                </li>
              </ul>
            </div>

            {/* Teeth Whitening */}
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🦷</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Teeth Whitening</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Professional whitening treatments that can lighten your teeth by several shades 
                in a single session. Safe, effective, and long-lasting results.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  In-office or take-home
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Up to 8 shades whiter
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Results in 1 hour
                </li>
              </ul>
            </div>

            {/* Gum Contouring */}
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">💗</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Gum Contouring</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Reshape your gum line to create better proportions between your teeth and gums. 
                Ideal for gummy smiles or uneven gum lines.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Laser treatment available
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Minimal discomfort
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Quick recovery
                </li>
              </ul>
            </div>

            {/* Dental Bonding */}
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Dental Bonding</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Tooth-colored composite resin applied to repair chips, cracks, gaps, or 
                discoloration. A quick, affordable option for minor cosmetic improvements.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Same-day treatment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  No tooth reduction
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Budget-friendly
                </li>
              </ul>
            </div>

            {/* Orthodontics */}
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">😁</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Clear Aligners</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Invisible orthodontic treatment to straighten teeth without traditional braces. 
                For cases where alignment is part of the smile design plan.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Virtually invisible
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Removable
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Faster than braces
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Benefits of Smile Design
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Star,
                title: "Boosted Confidence",
                description: "Feel proud of your smile in every situation"
              },
              {
                icon: Sparkles,
                title: "Natural Results",
                description: "Enhancements that look like your real teeth"
              },
              {
                icon: Shield,
                title: "Long-Lasting",
                description: "Premium materials that stand the test of time"
              },
              {
                icon: Award,
                title: "Personalized",
                description: "Designed uniquely for your face and features"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Save Up to 70% on Cosmetic Dentistry
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              World-class smile design at Colombian prices
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-primary text-primary-foreground">
                <div className="p-4 font-semibold">Treatment</div>
                <div className="p-4 font-semibold text-center">US Price</div>
                <div className="p-4 font-semibold text-center">Colombia Price</div>
              </div>
              {[
                ["Porcelain Veneer (per tooth)", "$1,000 - $2,500", "From $350"],
                ["Zirconia Crown", "$1,200 - $3,000", "From $380"],
                ["Professional Whitening", "$500 - $1,000", "From $150"],
                ["Complete Smile Design (8 veneers)", "$8,000 - $20,000", "From $2,800"],
              ].map(([treatment, usPrice, colombiaPrice], index) => (
                <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
                  <div className="p-4 font-medium text-foreground">{treatment}</div>
                  <div className="p-4 text-center text-muted-foreground line-through">{usPrice}</div>
                  <div className="p-4 text-center text-primary font-semibold">{colombiaPrice}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground text-sm mt-6">
              *Prices are estimates in USD. Final price depends on your specific treatment plan.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How long does a complete smile design take?",
                a: "A complete smile design typically requires 2-3 visits over 7-14 days. The first visit includes consultation and mock-up, while subsequent visits involve preparation and final placement of restorations."
              },
              {
                q: "Are veneers permanent?",
                a: "Veneers are considered an irreversible treatment because a small amount of enamel is removed to place them. However, they are extremely durable and with proper care can last 15-20 years before needing replacement."
              },
              {
                q: "Will my new smile look natural?",
                a: "Absolutely. Dr. Weider specializes in creating natural-looking results. We carefully match the color, shape, and translucency of your restorations to complement your facial features and existing teeth."
              },
              {
                q: "Can I preview my new smile before treatment?",
                a: "Yes! We create a digital smile design and temporary mock-up so you can see and approve your new smile before any permanent treatment begins. This ensures you love the result."
              },
              {
                q: "Is smile design painful?",
                a: "Most procedures are performed under local anesthesia, so you wont feel pain during treatment. Some patients experience mild sensitivity afterward, which typically resolves within a few days."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and discover how smile design can change your life. 
            See your new smile before you commit to treatment.
          </p>
          <a
            href="https://wa.me/573000000000?text=Hi,%20I%20want%20information%20about%20smile%20design%20in%20Cali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-background/90 transition-colors shadow-lg"
          >
            Get Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Explore Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/en/dental-implants-cali" className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors text-center">
              <h3 className="font-semibold text-foreground mb-2">Dental Implants</h3>
              <p className="text-sm text-muted-foreground">Replace missing teeth</p>
            </Link>
            <Link href="/en/dental-prosthesis-cali" className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors text-center">
              <h3 className="font-semibold text-foreground mb-2">Dental Prosthesis</h3>
              <p className="text-sm text-muted-foreground">Restore your smile</p>
            </Link>
            <Link href="/en/dental-tourism-colombia" className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors text-center">
              <h3 className="font-semibold text-foreground mb-2">Dental Tourism</h3>
              <p className="text-sm text-muted-foreground">Plan your trip</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer dictionary={dictionary} locale="en" />
      <WhatsAppButton dictionary={dictionary} />
    </main>
  )
}
