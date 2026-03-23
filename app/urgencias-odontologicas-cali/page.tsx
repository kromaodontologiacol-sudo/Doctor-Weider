import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, AlertTriangle, Clock, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Urgencias Odontológicas en Cali | Atención Inmediata | Dr Weider",
  description: "Urgencias odontológicas en Cali: dolor dental, infecciones, dientes fracturados. Atención rápida y efectiva con el Dr Weider. Agenda tu atención prioritaria ahora.",
  keywords: "urgencias odontológicas cali, odontólogo urgente cali, dolor dental cali, emergencia dental cali, infección dental cali",
}

const emergencies = [
  {
    icon: AlertTriangle,
    title: "Dolor Dental Intenso",
    description: "Dolor de muelas severo que no cede con analgésicos. Puede indicar infección o daño en el nervio del diente.",
    action: "Requiere atención inmediata para diagnosticar la causa y aliviar el dolor.",
  },
  {
    icon: AlertTriangle,
    title: "Infección Dental (Absceso)",
    description: "Hinchazón de la cara o encía, fiebre, mal sabor en la boca. Es una emergencia que puede complicarse.",
    action: "Necesita tratamiento con antibióticos y drenaje del absceso lo antes posible.",
  },
  {
    icon: AlertTriangle,
    title: "Diente Fracturado o Roto",
    description: "Trauma dental por golpe o mordida. El diente puede tener fracturas visibles o dolor al morder.",
    action: "Evaluación urgente para determinar si el diente puede salvarse.",
  },
  {
    icon: AlertTriangle,
    title: "Diente Caído (Avulsión)",
    description: "El diente completo se sale de su lugar por un golpe. El tiempo es crítico para reimplantarlo.",
    action: "Acude inmediatamente. Guarda el diente en leche y no lo limpies.",
  },
  {
    icon: AlertTriangle,
    title: "Sangrado Persistente",
    description: "Sangrado que no para después de una extracción u otro procedimiento dental.",
    action: "Presiona con gasa y acude a valoración si no cede en 30 minutos.",
  },
  {
    icon: AlertTriangle,
    title: "Corona o Prótesis Suelta",
    description: "Tu corona, puente o prótesis se cayó o aflojó. Puede causar molestia o daño al diente.",
    action: "Guarda la pieza y agenda cita para recementarla correctamente.",
  },
]

export default function UrgenciasOdontologicasCali() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-700 via-red-600 to-red-500">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold">
                  <Clock className="h-4 w-4" />
                  Atención Prioritaria en Cali
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Urgencias Odontológicas en Cali: Atención Rápida y Efectiva
                </h1>
                <p className="mt-6 text-lg text-white/95 leading-relaxed">
                  ¿Tienes dolor dental intenso, infección o un diente fracturado? No esperes. 
                  El Dr. Weider y su equipo están preparados para atender tu urgencia odontológica 
                  en Cali de manera inmediata y profesional.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-red-600 hover:bg-white/90 font-semibold">
                    <a
                      href="https://wa.me/573235944931?text=URGENCIA:%20Necesito%20atención%20odontológica%20urgente%20en%20Cali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Atención Urgente por WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <a href="tel:+573235944931" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Llamar: 323 594 4931
                    </a>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <AlertTriangle className="h-24 w-24 text-white mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-2">¿Es una Emergencia?</h2>
                  <p className="text-white/90 mb-4">
                    Si tienes dolor severo, hinchazón o un diente caído, contáctanos inmediatamente.
                  </p>
                  <p className="text-3xl font-bold text-white">323 594 4931</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Urgencias */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Tipos de Urgencias Odontológicas que Atendemos
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Identificar tu urgencia dental te ayudará a actuar rápidamente. Conoce las emergencias 
                más comunes que tratamos en nuestra clínica de Cali.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergencies.map((emergency, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <emergency.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{emergency.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{emergency.description}</p>
                    <p className="text-sm font-medium text-primary">{emergency.action}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Qué hacer */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  ¿Qué Hacer Ante una Urgencia Dental en Cali?
                </h2>
                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Mantén la Calma</h3>
                      <p className="text-muted-foreground">Respira profundo. Las urgencias dentales tienen solución cuando se atienden a tiempo.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Contáctanos Inmediatamente</h3>
                      <p className="text-muted-foreground">Escríbenos por WhatsApp o llámanos. Describe tu situación para preparar tu atención.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Primeros Auxilios</h3>
                      <p className="text-muted-foreground">Si hay sangrado, presiona con gasa. Si un diente se cayó, guárdalo en leche.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Acude a la Clínica</h3>
                      <p className="text-muted-foreground">Te atenderemos de forma prioritaria para resolver tu urgencia dental en Cali.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-red-600 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-serif font-bold mb-4">Atención Prioritaria</h3>
                <p className="text-white/95 mb-6">
                  Las urgencias odontológicas no esperan. Contáctanos ahora y te atenderemos lo más 
                  pronto posible.
                </p>
                <div className="space-y-4">
                  <Button asChild size="lg" className="w-full bg-white text-red-600 hover:bg-white/90 font-semibold">
                    <a
                      href="https://wa.me/573235944931?text=URGENCIA:%20Necesito%20atención%20odontológica%20urgente%20en%20Cali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Agenda Atención Prioritaria
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/10">
                    <a href="tel:+573235944931" className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      Llamar Ahora: 323 594 4931
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                ¿Por Qué Elegir Nuestra Clínica para Urgencias Dentales?
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Atención Rápida</h3>
                <p className="text-muted-foreground">
                  Priorizamos las urgencias. Te atendemos el mismo día cuando es una emergencia real.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Diagnóstico Preciso</h3>
                <p className="text-muted-foreground">
                  Contamos con radiografía digital para un diagnóstico rápido y preciso de tu urgencia.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Comunicación Directa</h3>
                <p className="text-muted-foreground">
                  Contáctanos por WhatsApp 24/7. Te respondemos rápidamente para coordinar tu atención.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-red-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              ¿Tienes una Urgencia Odontológica en Cali?
            </h2>
            <p className="mt-4 text-lg text-white/95 max-w-2xl mx-auto">
              No esperes a que empeore. Contáctanos ahora y recibe atención profesional inmediata 
              para tu emergencia dental.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-white/90 font-semibold text-lg px-10 py-6">
                <a
                  href="https://wa.me/573235944931?text=URGENCIA:%20Necesito%20atención%20odontológica%20urgente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-6 w-6" />
                  Atención Urgente por WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-10 py-6">
                <a href="tel:+573235944931" className="flex items-center gap-2">
                  <Phone className="h-6 w-6" />
                  Llamar: 323 594 4931
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
