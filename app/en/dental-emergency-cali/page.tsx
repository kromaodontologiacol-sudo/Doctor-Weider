import { Metadata } from "next"
import { HeaderEN } from "@/components/en/header"
import { FooterEN } from "@/components/en/footer"
import { WhatsAppButtonEN } from "@/components/en/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, AlertTriangle, Clock, Zap, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Emergency Dentist in Cali, Colombia | Same-Day Care | Dr. Weider",
  description: "Emergency dental care in Cali, Colombia. Immediate attention for tooth pain, infection, broken teeth, and dental trauma. Contact us now for urgent dental care.",
  keywords: "emergency dentist cali, dental emergency colombia, tooth pain cali, urgent dental care, same day dentist cali",
}

const emergencies = [
  {
    title: "Severe Tooth Pain",
    description: "Intense, persistent toothache that may indicate infection, cavity, or abscess. Don't wait - pain is your body's signal that something is wrong.",
    icon: AlertTriangle,
  },
  {
    title: "Dental Infection / Abscess",
    description: "Swelling, pus, fever, or a bad taste in your mouth can indicate a serious infection that needs immediate treatment to prevent spread.",
    icon: Shield,
  },
  {
    title: "Broken or Chipped Teeth",
    description: "Cracked, chipped, or fractured teeth from accidents or biting hard objects. Save any pieces and contact us immediately.",
    icon: Zap,
  },
  {
    title: "Knocked-Out Tooth",
    description: "A completely knocked-out tooth can often be saved if treated within 1 hour. Keep it moist and come in immediately.",
    icon: Clock,
  },
  {
    title: "Lost Filling or Crown",
    description: "Lost restorations leave teeth vulnerable to damage and sensitivity. We can replace them quickly to protect your tooth.",
    icon: AlertTriangle,
  },
  {
    title: "Bleeding or Swollen Gums",
    description: "Excessive bleeding or swelling can indicate gum disease or trauma that requires professional attention.",
    icon: Shield,
  },
]

const whatToDo = [
  {
    emergency: "Toothache",
    steps: ["Rinse mouth with warm water", "Gently floss to remove trapped food", "Apply cold compress outside cheek", "Take over-the-counter pain relief", "Contact us immediately"],
  },
  {
    emergency: "Knocked-Out Tooth",
    steps: ["Pick up tooth by the crown (not root)", "Rinse gently if dirty - don't scrub", "Try to place back in socket or keep in milk", "Come to our office within 1 hour", "Time is critical for saving the tooth"],
  },
  {
    emergency: "Broken Tooth",
    steps: ["Rinse mouth with warm water", "Save any broken pieces", "Apply gauze to stop bleeding", "Use cold compress to reduce swelling", "Contact us for same-day repair"],
  },
]

export default function DentalEmergencyPage() {
  return (
    <>
      <HeaderEN />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-700 via-red-600 to-red-700">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <AlertTriangle className="w-4 h-4 text-yellow-300" />
                <span className="text-white/90 text-sm font-medium">Same-Day Emergency Care</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Emergency Dentist in Cali - Fast and Reliable Care
              </h1>
              <p className="mt-6 text-xl text-white/85 leading-relaxed">
                Experiencing dental pain or emergency? We provide immediate care for all dental emergencies.
              </p>
              <p className="mt-4 text-2xl font-semibold text-yellow-300">
                Same-day appointments available - Don't wait!
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-red-700 hover:bg-white/90 text-base px-8 py-6 font-semibold shadow-xl"
                >
                  <a
                    href="https://wa.me/573235944931?text=URGENT:%20I%20have%20a%20dental%20emergency%20and%20need%20immediate%20help"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 text-base px-8 py-6"
                >
                  <a href="tel:+573235944931" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call: +57 323 594 4931
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Types */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold tracking-wide uppercase">
                We Treat
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Common <span className="text-red-600">dental emergencies</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                If you're experiencing any of these conditions, don't wait - contact us immediately.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergencies.map((emergency, index) => {
                const Icon = emergency.icon
                return (
                  <Card key={index} className="border-border hover:border-red-300 transition-colors">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{emergency.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{emergency.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* What To Do */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
                First Aid
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                What to do <span className="text-primary">before you arrive</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {whatToDo.map((item, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{item.emergency}</h3>
                    <ol className="space-y-3">
                      {item.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 font-semibold">
                            {i + 1}
                          </span>
                          <span className="text-muted-foreground text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us for Emergencies */}
        <section className="py-20 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">
                Why choose us for your emergency?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Same-Day Care</h3>
                <p className="text-white/70 text-sm">We prioritize emergencies and provide same-day appointments</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quick Response</h3>
                <p className="text-white/70 text-sm">Fast WhatsApp and phone response for urgent cases</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Expert Care</h3>
                <p className="text-white/70 text-sm">Experienced team trained in emergency procedures</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Modern Equipment</h3>
                <p className="text-white/70 text-sm">Advanced technology for fast diagnosis and treatment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent CTA */}
        <section className="py-20 bg-red-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <AlertTriangle className="w-16 h-16 mx-auto text-red-600 mb-6" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Don't wait - dental emergencies can get worse
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The sooner you get treatment, the better the outcome. Contact us immediately for emergency dental care.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-base px-8 py-6 font-semibold"
              >
                <a
                  href="https://wa.me/573235944931?text=URGENT:%20I%20have%20a%20dental%20emergency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Emergency WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-red-300 text-red-700 hover:bg-red-100 text-base px-8 py-6"
              >
                <a href="tel:+573235944931" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
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
