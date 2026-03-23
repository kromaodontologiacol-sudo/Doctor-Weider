import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { MessageCircle, ChevronRight, Phone, Clock, AlertTriangle, Zap, ShieldCheck, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Urgencias Odontológicas en Cali - Atención Inmediata 24h | Dr. Weider",
  description: "Urgencias dentales en Cali: dolor dental intenso, infecciones, fracturas dentales, inflamación. Atención prioritaria inmediata. Llama ahora: 323 594 4931.",
  keywords: "urgencias odontológicas cali, dentista urgencia cali, dolor de muela cali, emergencia dental cali, diente roto cali, infección dental cali",
  openGraph: {
    title: "Urgencias Odontológicas en Cali - Atención Inmediata",
    description: "Dolor dental, infección, fracturas, inflamación. Atención prioritaria inmediata.",
    type: "website",
  },
}

const emergencies = [
  {
    title: "Dolor Dental Intenso",
    description: "Alivio inmediato del dolor. Diagnóstico preciso de la causa y tratamiento efectivo para eliminar el dolor de raíz.",
    icon: AlertTriangle,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Infección Dental",
    description: "Tratamiento urgente de abscesos, flemones e infecciones. Drenaje profesional y antibioterapia cuando sea necesario.",
    icon: Zap,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Fracturas Dentales",
    description: "Reconstrucción de emergencia para dientes rotos, astillados o fracturados. Preservamos tu diente natural siempre que sea posible.",
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Inflamación",
    description: "Tratamiento de encías inflamadas, abscesos y cualquier tipo de hinchazón bucal que cause molestia o dolor.",
    icon: Heart,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Diente Avulsionado",
    description: "Reimplantación de dientes que se han salido por trauma. El tiempo es crucial, actúa rápido.",
    icon: AlertTriangle,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Corona o Puente Caído",
    description: "Recementación inmediata de restauraciones dentales. No esperes, evita complicaciones mayores.",
    icon: Zap,
    color: "bg-orange-100 text-orange-600",
  },
]

const symptoms = [
  "Dolor que no cede con analgésicos",
  "Hinchazón en cara o encía",
  "Sangrado que no para",
  "Fiebre asociada a dolor dental",
  "Diente flojo por golpe",
  "Sensibilidad extrema al frío o calor",
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
                <span className="text-white font-semibold">Atención Prioritaria</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Urgencias Odontológicas en{" "}
                <span className="text-yellow-300">Cali</span>
              </h1>
              <p className="mt-6 text-xl text-white/90 leading-relaxed">
                Dolor dental, infección, fracturas e inflamación. 
                Te atendemos con prioridad para resolver tu emergencia dental de inmediato.
              </p>
              
              {/* Emergency Types Pills */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium">
                  Dolor Dental
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium">
                  Infección
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium">
                  Fracturas
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium">
                  Inflamación
                </span>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-6"
                >
                  <a
                    href="https://wa.me/573235944931?text=URGENCIA:%20Necesito%20atención%20dental%20inmediata"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Atención Inmediata por WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 font-semibold"
                >
                  <a href="tel:+573235944931">
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar: 323 594 4931
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
                Atendemos <span className="text-red-600">Todas las Emergencias</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Nuestro equipo está preparado para resolver cualquier urgencia dental
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergencies.map((emergency, index) => {
                const Icon = emergency.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 rounded-full ${emergency.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-bold text-foreground text-lg mb-2">{emergency.title}</h3>
                      <p className="text-muted-foreground">{emergency.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                  ¿Cuándo es una <span className="text-red-600">urgencia dental</span>?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Si presentas alguno de estos síntomas, no esperes. Contacta con nosotros 
                  de inmediato para recibir atención prioritaria.
                </p>
                <div className="space-y-4">
                  {symptoms.map((symptom, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="text-foreground">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-red-50 rounded-2xl p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Atención Prioritaria
                </h3>
                <p className="text-muted-foreground mb-6">
                  En emergencias dentales, el tiempo es crucial. Te atendemos con 
                  prioridad para aliviar tu dolor y resolver el problema rápidamente.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-red-600" />
                    <span className="font-medium">Respuesta inmediata</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-red-600" />
                    <span className="font-medium">Diagnóstico preciso</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-red-600" />
                    <span className="font-medium">Tratamiento efectivo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What To Do Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-10">
                ¿Qué hacer en una emergencia dental?
              </h2>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Mantén la calma</h3>
                    <p className="text-muted-foreground">La mayoría de emergencias dentales tienen solución si se atienden a tiempo. No entres en pánico.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Contáctanos inmediatamente</h3>
                    <p className="text-muted-foreground">Escríbenos por WhatsApp o llámanos para recibir orientación inicial y agendar tu atención prioritaria.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Si hay un diente avulsionado</h3>
                    <p className="text-muted-foreground">Guárdalo en leche o en la boca (entre la mejilla y encía) y ven de inmediato. El tiempo es crucial.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">En caso de sangrado</h3>
                    <p className="text-muted-foreground">Aplica presión con una gasa limpia y ven a consulta lo antes posible.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-white font-semibold">Atención Prioritaria Disponible</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              ¿Tienes una emergencia ahora?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              No esperes más. Contáctanos de inmediato para recibir atención prioritaria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-7"
              >
                <a
                  href="https://wa.me/573235944931?text=URGENCIA:%20Necesito%20atención%20dental%20inmediata"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Atención Inmediata por WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-red-600 font-bold text-lg px-10 py-7"
              >
                <a href="tel:+573235944931">
                  <Phone className="w-6 h-6 mr-2" />
                  323 594 4931
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
              Servicios Relacionados
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <Link href="/implantes-dentales-cali" className="group">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Implantes Dentales
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Si perdiste un diente, podemos reemplazarlo con un implante.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/protesis-dental-cali" className="group">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Prótesis Dental
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Coronas y reconstrucciones para dientes dañados.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/precio-implante-dental-cali" className="group">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Precios 2026
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Conoce nuestros precios transparentes y opciones de pago.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer dictionary={dictionary} locale="es" />
      <WhatsAppButton dictionary={dictionary} />
    </>
  )
}
