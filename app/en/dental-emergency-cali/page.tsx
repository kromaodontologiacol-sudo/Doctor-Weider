import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CheckCircle, ArrowRight, Phone, Clock, AlertTriangle, Shield, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Emergency in Cali, Colombia | Dr. Weider - 24/7 Urgent Care",
  description: "Dental emergency in Cali? Get immediate attention for tooth pain, infections, fractures, and urgent dental problems. Dr. Weider provides fast, professional emergency care.",
  keywords: "dental emergency Cali, emergency dentist Colombia, tooth pain Cali, urgent dental care, 24/7 dentist Cali",
  alternates: {
    canonical: "https://doctorweider.com/en/dental-emergency-cali",
    languages: {
      "es": "https://doctorweider.com/urgencias-odontologicas-cali",
      "en": "https://doctorweider.com/en/dental-emergency-cali"
    }
  },
  openGraph: {
    title: "Dental Emergency in Cali | Dr. Weider - Urgent Care",
    description: "Immediate dental emergency care in Cali, Colombia. Fast response for tooth pain and dental trauma.",
    url: "https://doctorweider.com/en/dental-emergency-cali",
    locale: "en_US",
    type: "website"
  }
}

export default function DentalEmergencyCaliPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header lang="en" />
      
      {/* Hero Section - Urgent Design */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-red-500/10 to-background overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-600 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              Emergency Dental Care Available
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Dental Emergency in Cali?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Do not suffer in silence. Dr. Weider provides urgent dental care for severe pain, infections, 
              broken teeth, and other dental emergencies. Get the help you need now.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://wa.me/573000000000?text=URGENT:%20I%20have%20a%20dental%20emergency%20in%20Cali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors shadow-lg animate-pulse"
              >
                <Zap className="w-5 h-5" />
                Get Immediate Help
              </a>
              <a
                href="tel:+573000000000"
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground border-2 border-border px-8 py-4 rounded-full font-semibold text-lg hover:border-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Emergency Line
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-600" />
                <span className="text-muted-foreground">Priority Appointments</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-600" />
                <span className="text-muted-foreground">Professional Emergency Care</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-red-600" />
                <span className="text-muted-foreground">Same-Day Treatment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Dental Emergencies We Treat
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              If you are experiencing any of these symptoms, contact us immediately
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Severe Tooth Pain */}
            <div className="bg-card p-8 rounded-2xl border border-red-200 hover:border-red-400 transition-colors">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Severe Tooth Pain</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Intense, throbbing toothache that does not go away with over-the-counter pain relievers. 
                May indicate infection, abscess, or nerve damage requiring immediate attention.
              </p>
              <p className="text-red-600 font-medium text-sm">Requires immediate evaluation</p>
            </div>

            {/* Dental Infection */}
            <div className="bg-card p-8 rounded-2xl border border-red-200 hover:border-red-400 transition-colors">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Dental Infection / Abscess</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Swelling, pus, fever, or bad taste in mouth. Dental infections can spread quickly and 
                become life-threatening if not treated promptly.
              </p>
              <p className="text-red-600 font-medium text-sm">Urgent - Can spread to other areas</p>
            </div>

            {/* Broken or Chipped Tooth */}
            <div className="bg-card p-8 rounded-2xl border border-red-200 hover:border-red-400 transition-colors">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Broken or Chipped Tooth</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Fractured tooth from trauma, accident, or biting on something hard. May expose the 
                nerve causing extreme sensitivity and pain.
              </p>
              <p className="text-red-600 font-medium text-sm">Save any tooth fragments</p>
            </div>

            {/* Knocked-Out Tooth */}
            <div className="bg-card p-8 rounded-2xl border border-red-200 hover:border-red-400 transition-colors">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Knocked-Out Tooth</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Complete tooth avulsion from trauma. Time is critical - the tooth may be saved if you 
                act within 30-60 minutes. Keep tooth moist in milk or saliva.
              </p>
              <p className="text-red-600 font-medium text-sm">Time-sensitive - Act immediately</p>
            </div>

            {/* Lost Crown or Filling */}
            <div className="bg-card p-8 rounded-2xl border border-orange-200 hover:border-orange-400 transition-colors">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Lost Crown or Filling</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Fallen crown or filling leaves the tooth exposed and vulnerable. Can cause sensitivity, 
                pain, and risk of further damage or infection.
              </p>
              <p className="text-orange-600 font-medium text-sm">Seek care within 24-48 hours</p>
            </div>

            {/* Wisdom Tooth Pain */}
            <div className="bg-card p-8 rounded-2xl border border-orange-200 hover:border-orange-400 transition-colors">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Wisdom Tooth Pain</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Impacted or infected wisdom teeth can cause severe pain, swelling, and difficulty 
                opening your mouth. May require extraction.
              </p>
              <p className="text-orange-600 font-medium text-sm">Evaluation and possible extraction</p>
            </div>
          </div>
        </div>
      </section>

      {/* What To Do */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              What To Do in a Dental Emergency
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 dark:bg-green-950/30 p-8 rounded-2xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  DO
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Contact us immediately via WhatsApp or phone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Save any knocked-out teeth or fragments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Keep knocked-out tooth moist in milk or saliva</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Apply cold compress to reduce swelling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Take over-the-counter pain relief if needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Rinse gently with warm salt water</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-950/30 p-8 rounded-2xl border border-red-200">
                <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  DO NOT
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Wait and hope it goes away on its own</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Touch the root of a knocked-out tooth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Apply aspirin directly to gums (causes burns)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Use alcohol or peroxide on open wounds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Ignore swelling or fever (signs of infection)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Try to push a knocked-out tooth back in forcefully</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Emergency Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Emergency Response Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fast, professional care when you need it most
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Contact Us",
                  description: "Reach out via WhatsApp or call our emergency line. Describe your symptoms.",
                  time: "Immediate"
                },
                {
                  step: "2",
                  title: "Rapid Assessment",
                  description: "We evaluate your situation and provide immediate first-aid guidance.",
                  time: "5-10 min"
                },
                {
                  step: "3",
                  title: "Priority Appointment",
                  description: "Get seen the same day or next available slot for emergency cases.",
                  time: "Same day"
                },
                {
                  step: "4",
                  title: "Treatment",
                  description: "Receive professional care to relieve pain and address the emergency.",
                  time: "As needed"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                  <span className="text-primary text-sm font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For International Visitors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Dental Emergency While Traveling in Colombia?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                If you are visiting Cali or traveling in Colombia and experience a dental emergency, 
                we are here to help. Dr. Weider speaks English and has extensive experience treating 
                international patients.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">English-speaking staff</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Modern, sterile facilities</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Affordable emergency care</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Documentation for travel insurance claims</span>
                </li>
              </ul>
              <a
                href="https://wa.me/573000000000?text=Hi,%20I%20am%20a%20tourist%20with%20a%20dental%20emergency%20in%20Cali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Us for Emergency Care
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <AlertTriangle className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Do Not Wait - Get Help Now
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Dental emergencies can get worse quickly. The sooner you seek treatment, 
            the better the outcome. Contact us now for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573000000000?text=URGENT:%20I%20have%20a%20dental%20emergency"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Zap className="w-5 h-5" />
              WhatsApp Emergency Line
            </a>
            <a
              href="tel:+573000000000"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Our Dental Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/en/dental-implants-cali" className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors text-center">
              <h3 className="font-semibold text-foreground mb-2">Dental Implants</h3>
              <p className="text-sm text-muted-foreground">Replace missing teeth permanently</p>
            </Link>
            <Link href="/en/dental-prosthesis-cali" className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors text-center">
              <h3 className="font-semibold text-foreground mb-2">Dental Prosthesis</h3>
              <p className="text-sm text-muted-foreground">Restore your smile</p>
            </Link>
            <Link href="/en/smile-design-cali" className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors text-center">
              <h3 className="font-semibold text-foreground mb-2">Smile Design</h3>
              <p className="text-sm text-muted-foreground">Transform your appearance</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer lang="en" />
      <WhatsAppButton lang="en" />
    </main>
  )
}
