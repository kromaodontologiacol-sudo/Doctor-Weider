import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { CheckCircle, ArrowRight, Phone, Clock, Shield, Award, Star, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Prosthesis in Cali, Colombia | Dr. Weider - Quality & Affordable",
  description: "High-quality dental prosthesis in Cali, Colombia. Removable, fixed, and implant-supported prosthetics. Save up to 70% compared to US prices. Free consultation.",
  keywords: "dental prosthesis Cali, dentures Colombia, removable dentures, fixed prosthesis, dental prosthetics Cali",
  alternates: {
    canonical: "https://doctorweider.com/en/dental-prosthesis-cali",
    languages: {
      "es": "https://doctorweider.com/protesis-dental-cali",
      "en": "https://doctorweider.com/en/dental-prosthesis-cali"
    }
  },
  openGraph: {
    title: "Dental Prosthesis in Cali, Colombia | Dr. Weider",
    description: "High-quality dental prosthesis at affordable prices. Save up to 70%.",
    url: "https://doctorweider.com/en/dental-prosthesis-cali",
    locale: "en_US",
    type: "website"
  }
}

export default function DentalProsthesisCaliPage() {
  const dictionary = getDictionary("en")

  return (
    <main className="min-h-screen bg-background">
      <Header dictionary={dictionary} locale="en" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Dental Prosthesis Specialist in Cali
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Dental Prosthesis in Cali, Colombia
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Restore your smile with high-quality dental prosthetics. From removable dentures to 
              implant-supported solutions, we offer personalized treatments at affordable prices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://wa.me/573000000000?text=Hi,%20I%20want%20information%20about%20dental%20prosthesis%20in%20Cali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg"
              >
                Get Free Consultation
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
                <span className="text-muted-foreground">Custom-Made Prosthetics</span>
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

      {/* Understanding the Problem */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Living Without Teeth Affects Your Quality of Life
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Missing teeth is not just an aesthetic problem. It affects how you eat, speak, and feel about yourself. 
                Many patients come to our clinic in Cali after years of struggling with these issues, feeling embarrassed 
                to smile or avoiding social situations.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The good news is that modern dental prosthetics can restore not just your smile, but your confidence 
                and quality of life. Whether you have lost one tooth, several teeth, or all your teeth, there is a 
                solution designed specifically for your needs.
              </p>
              <p className="text-lg leading-relaxed">
                At Dr. Weiders clinic in Cali, Colombia, we specialize in creating custom dental prosthetics that 
                look natural, feel comfortable, and allow you to eat, speak, and smile with confidence again. And 
                the best part? You can save up to 70% compared to prices in the United States or Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Prosthesis */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Types of Dental Prosthetics We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide a comprehensive range of dental prosthetic solutions to meet every patients needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Removable Partial Dentures */}
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🦷</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Removable Partial Dentures</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Ideal for patients missing several teeth but not all. These prosthetics attach to your 
                remaining natural teeth using metal clasps or precision attachments.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Affordable option
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Easy to clean
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Preserves remaining teeth
                </li>
              </ul>
            </div>

            {/* Complete Dentures */}
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">😁</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Complete Dentures</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Full arch replacement for patients who have lost all their teeth. Modern complete dentures 
                are more comfortable and natural-looking than ever before.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Full smile restoration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Custom-fitted for comfort
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Natural appearance
                </li>
              </ul>
            </div>

            {/* Flexible Dentures */}
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Flexible Dentures</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Made from a flexible, lightweight material that adapts to your mouth movements. No metal 
                clasps means a more aesthetic and comfortable fit.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Metal-free design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Highly aesthetic
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Hypoallergenic
                </li>
              </ul>
            </div>

            {/* Fixed Bridges */}
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Fixed Dental Bridges</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Permanent solution that bridges the gap left by one or more missing teeth. Anchored to 
                adjacent natural teeth or implants for a secure, stable fit.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Permanent solution
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  No removal needed
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Feels like natural teeth
                </li>
              </ul>
            </div>

            {/* Implant-Supported Dentures */}
            <div className="bg-card p-8 rounded-2xl border border-primary border-2 hover:border-primary transition-colors relative">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                Most Popular
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Implant-Supported Dentures</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The gold standard in prosthetic dentistry. Dentures secured by dental implants for maximum 
                stability, comfort, and function. No slipping or adhesives needed.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Maximum stability
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Prevents bone loss
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Eat anything you want
                </li>
              </ul>
            </div>

            {/* All-on-4 */}
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">All-on-4 / All-on-6</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Complete arch restoration using just 4 or 6 implants. Get a full set of fixed teeth in 
                as little as one day with this revolutionary technique.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Same-day results
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Minimal implants needed
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Fixed, permanent teeth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prosthesis vs Implants Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dental Prosthesis vs. Dental Implants
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding your options to make the best decision for your oral health
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-primary text-primary-foreground">
                <div className="p-4 font-semibold">Feature</div>
                <div className="p-4 font-semibold text-center">Removable Prosthesis</div>
                <div className="p-4 font-semibold text-center">Dental Implants</div>
              </div>
              {[
                ["Initial Cost", "Lower", "Higher"],
                ["Long-term Value", "May need replacement", "Lifetime solution"],
                ["Comfort", "Good", "Excellent"],
                ["Stability", "May shift", "Completely stable"],
                ["Bone Preservation", "Bone loss continues", "Preserves bone"],
                ["Maintenance", "Daily removal", "Like natural teeth"],
                ["Eating Ability", "Some restrictions", "Eat anything"],
                ["Appearance", "Good", "Most natural"],
              ].map(([feature, prosthesis, implants], index) => (
                <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
                  <div className="p-4 font-medium text-foreground">{feature}</div>
                  <div className="p-4 text-center text-muted-foreground">{prosthesis}</div>
                  <div className="p-4 text-center text-muted-foreground">{implants}</div>
                </div>
              ))}
            </div>
            
            <p className="text-center text-muted-foreground mt-8">
              Not sure which option is best for you? 
              <Link href="/en/dental-implants-cali" className="text-primary hover:underline ml-1">
                Learn more about dental implants
              </Link> or schedule a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Prosthetic Treatment Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From consultation to your new smile, heres what to expect
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Free Initial Consultation",
                  description: "We examine your oral health, discuss your goals, and take digital impressions and X-rays to determine the best prosthetic solution for your needs."
                },
                {
                  step: "2",
                  title: "Custom Treatment Plan",
                  description: "Dr. Weider creates a personalized treatment plan, explaining all options, costs, and timelines. You will know exactly what to expect before we begin."
                },
                {
                  step: "3",
                  title: "Preparation & Impressions",
                  description: "If needed, we prepare any remaining teeth and take precise digital impressions to ensure your prosthetic fits perfectly."
                },
                {
                  step: "4",
                  title: "Prosthetic Fabrication",
                  description: "Your custom prosthetic is crafted in our partner laboratory using the highest quality materials. We ensure natural appearance and perfect fit."
                },
                {
                  step: "5",
                  title: "Fitting & Adjustments",
                  description: "We fit your new prosthetic, make any necessary adjustments, and ensure you are completely comfortable before you leave."
                },
                {
                  step: "6",
                  title: "Follow-Up Care",
                  description: "We schedule follow-up appointments to ensure everything is working perfectly and make any fine-tuning adjustments needed."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Dr. Weider for Your Dental Prosthesis?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">15+ Years Experience</h3>
              <p className="text-muted-foreground text-sm">Specialized expertise in prosthodontics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Quality Materials</h3>
              <p className="text-muted-foreground text-sm">Premium prosthetics that last</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">1000+ Happy Patients</h3>
              <p className="text-muted-foreground text-sm">Trusted by patients worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">5-Star Reviews</h3>
              <p className="text-muted-foreground text-sm">Consistently excellent results</p>
            </div>
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
                q: "How long do dental prosthetics last?",
                a: "With proper care, removable dentures typically last 5-7 years before needing replacement. Fixed bridges and implant-supported prosthetics can last 15-20 years or more."
              },
              {
                q: "Will my dental prosthesis look natural?",
                a: "Absolutely. We use high-quality materials and precise techniques to create prosthetics that match the color, shape, and size of natural teeth. Most people wont be able to tell the difference."
              },
              {
                q: "Can I eat normally with dental prosthetics?",
                a: "Yes, though there may be a short adjustment period. Removable dentures may have some restrictions with very hard or sticky foods, while implant-supported prosthetics allow you to eat anything."
              },
              {
                q: "How much can I save by getting dental prosthetics in Colombia?",
                a: "International patients typically save 60-70% compared to US prices. A complete denture that costs $1,500-2,500 in the US can cost as little as $400-800 in Cali."
              },
              {
                q: "How long will I need to stay in Cali for treatment?",
                a: "Depending on your treatment, most patients need 3-7 days in Cali. Removable dentures may require 2-3 visits, while implant-supported prosthetics may require a longer stay or a second visit."
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Restore Your Smile?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and discover how dental prosthetics can 
            transform your life. Save up to 70% on quality dental care in Cali, Colombia.
          </p>
          <a
            href="https://wa.me/573000000000?text=Hi,%20I%20want%20information%20about%20dental%20prosthesis%20in%20Cali"
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
              <p className="text-sm text-muted-foreground">Permanent tooth replacement</p>
            </Link>
            <Link href="/en/smile-design-cali" className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors text-center">
              <h3 className="font-semibold text-foreground mb-2">Smile Design</h3>
              <p className="text-sm text-muted-foreground">Complete smile makeover</p>
            </Link>
            <Link href="/en/dental-tourism-colombia" className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors text-center">
              <h3 className="font-semibold text-foreground mb-2">Dental Tourism</h3>
              <p className="text-sm text-muted-foreground">Plan your trip to Cali</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer dictionary={dictionary} locale="en" />
      <WhatsAppButton dictionary={dictionary} />
    </main>
  )
}
