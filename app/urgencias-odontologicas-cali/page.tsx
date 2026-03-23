import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { MessageCircle, ChevronRight, Phone, Clock, AlertTriangle, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Urgencias Odontológicas Cali - Atención Inmediata | Dr. Weider",
  description: "Urgencias dentales en Cali. Dolor de muela, diente roto, absceso dental. Atención rápida y profesional. Llama ahora: 323 594 4931.",
  keywords: "urgencias odontológicas cali, dentista urgencia cali, dolor de muela cali, emergencia dental cali, diente roto cali",
  openGraph: {
    title: "Urgencias Odontológicas Cali - Atención Inmediata",
    description: "Urgencias dentales con atención rápida. Dolor de muela, diente roto, absceso.",
    type: "website",
  },
}

const emergencies = [
  {
    title: "Dolor de Muela Intenso",
    description: "Alivio inmediato del dolor y diagnóstico de la causa.",
    icon: AlertTriangle,
  },
  {
    title: "Diente Roto o Fracturado",
    description: "Reconstrucción de emergencia para preservar tu diente.",
    icon: Zap,
  },
  {
    title: "Absceso Dental",
    description: "Drenaje y tratamiento de infecciones dentales.",
    icon: AlertTriangle,
  },
  {
    title: "Diente Avulsionado",
    description: "Reimplantación de dientes que se han salido por trauma.",
    icon: Zap,
  },
  {
    title: "Corona o Puente Caído",
    description: "Recementación inmediata de restauraciones.",
    icon: AlertTriangle,
  },
  {
    title: "Sangrado de Encías",
    description: "Control de sangrado y tratamiento periodontal de emergencia.",
    icon: Zap,
  },
]

export default function UrgenciasPage() {
  const dictionary = getDictionary("es")

  return (
    <>
      <Header dictionary={dictionary} locale="es" />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-700 via-red-600 to-red-500">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-white/70 text-sm mb-6">
              <Link href="/" className="hover:text-white">Inicio</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Urgencias Odontológicas</span>
            </nav>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                <Clock className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Atención Prioritaria</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Urgencias Odontológicas en{" "}
                <span className="text-yellow-300">Cali</span>
              </h1>
              <p className="mt-6 text-xl text-white/90 leading-relaxed">
                Dolor dental, dientes rotos, infecciones. Te atendemos con prioridad 
                para aliviar tu emergencia.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg"
                >
                  <a href="tel:+573235944931">
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar Ahora: 323 594 4931
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600"
                >
                  <a
                    href="https://wa.me/573235944931?text=URGENCIA:%20Necesito%20atención%20dental%20inmediata"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Urgencias
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Types */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Atendemos <span className="text-primary">Emergencias</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Nuestro equipo está preparado para resolver tu urgencia dental
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergencies.map((emergency, index) => {
                const Icon = emergency.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-red-600" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{emergency.title}</h3>
                      <p className="text-sm text-muted-foreground">{emergency.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* What To Do Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-8">
                ¿Qué hacer en una emergencia dental?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Mantén la calma</h3>
                    <p className="text-muted-foreground">La mayoría de emergencias dentales tienen solución si se atienden a tiempo.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Contáctanos inmediatamente</h3>
                    <p className="text-muted-foreground">Llama o escríbenos por WhatsApp para recibir orientación inicial.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Si hay un diente avulsionado</h3>
                    <p className="text-muted-foreground">Guárdalo en leche o en la boca (entre la mejilla y encía) y ven de inmediato.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              ¿Tienes una emergencia ahora?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              No esperes más, contáctanos de inmediato
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-6"
              >
                <a href="tel:+573235944931">
                  <Phone className="w-6 h-6 mr-2" />
                  323 594 4931
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-red-600 font-semibold text-lg px-8 py-6"
              >
                <a
                  href="https://wa.me/573235944931?text=URGENCIA:%20Necesito%20atención%20dental%20inmediata"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  WhatsApp Urgencias
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer dictionary={dictionary} locale="es" />
      <WhatsAppButton dictionary={dictionary} />
    </>
  )
}
