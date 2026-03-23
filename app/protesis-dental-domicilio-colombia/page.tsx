import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X, Package, Camera, ClipboardCheck, Factory, Home, MessageCircle, ChevronRight } from "lucide-react"
import { ProthesisForm } from "./components/prothesis-form"

export const metadata: Metadata = {
  title: "Prótesis dental personalizada en Colombia desde casa",
  description: "Reemplaza 1 a 3 dientes sin salir de casa. Solicita tu kit de impresión dental en Colombia. Fácil, accesible y personalizado.",
  keywords: "prótesis dental colombia, prótesis a domicilio, kit de impresión dental, prótesis tipo acker, dientes removibles colombia",
  alternates: {
    canonical: "https://doctorweider.com/protesis-dental-domicilio-colombia",
  },
  openGraph: {
    title: "Prótesis dental personalizada en Colombia desde casa",
    description: "Reemplaza 1 a 3 dientes sin salir de casa. Solicita tu kit de impresión dental en Colombia.",
    type: "website",
    locale: "es_CO",
    url: "https://doctorweider.com/protesis-dental-domicilio-colombia"
  },
}

const processSteps = [
  {
    icon: Package,
    title: "Recibe tu kit en casa",
    description: "Te enviamos todo lo necesario para tomar tu impresión dental"
  },
  {
    icon: Camera,
    title: "Toma tu impresión",
    description: "Sigue nuestra guía paso a paso con video tutorial"
  },
  {
    icon: ClipboardCheck,
    title: "Evaluamos tu caso",
    description: "Un odontólogo especializado analiza tu impresión"
  },
  {
    icon: Factory,
    title: "Fabricamos tu prótesis",
    description: "Creamos una prótesis 100% personalizada para ti"
  },
  {
    icon: Home,
    title: "La recibes en casa",
    description: "Tu prótesis lista para usar, sin salir de casa"
  },
]

export default function ProtesisDomicilioPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Sticky CTA Button - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background to-transparent md:hidden">
        <Button
          asChild
          size="lg"
          className="w-full bg-[#C9A227] hover:bg-[#B8922A] text-white font-semibold text-lg py-6 shadow-lg"
        >
          <a href="#formulario">
            Solicitar kit ahora
          </a>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-br from-[#0066B3] via-[#0077CC] to-[#0088DD]">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/70 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/protesis-dental-cali" className="hover:text-white transition-colors">Prótesis Dental</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">A Domicilio</span>
          </nav>
          
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight text-balance">
              Recupera tus dientes sin salir de casa en{" "}
              <span className="text-[#C9A227]">Colombia</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-white/90 font-medium">
              Prótesis dentales totalmente personalizadas para reemplazar 1, 2 o 3 dientes consecutivos.
            </p>
            <p className="mt-4 text-lg text-white/70">
              Sin múltiples citas. Sin tratamientos costosos.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#C9A227] hover:bg-[#B8922A] text-white font-semibold text-lg px-8 py-6"
              >
                <a href="#formulario">
                  Solicitar kit ahora
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/60">
              Primer paso desde $115.000 COP
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciador Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#0066B3]/10 text-[#0066B3] rounded-full text-sm font-medium mb-4">
              100% Personalizada
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
              Prótesis totalmente personalizada{" "}
              <span className="text-[#0066B3]">para ti</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Cada prótesis se diseña de forma individual según tu caso, logrando mejor ajuste, estética y comodidad.
            </p>
            <p className="mt-4 text-lg text-foreground font-medium">
              No es un producto genérico. Es una solución adaptada a tu boca.
            </p>
          </div>
        </div>
      </section>

      {/* Filtro Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground text-center mb-8">
              Este servicio es ideal si:
            </h2>
            <Card className="border-[#0066B3]/20">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-foreground">Te faltan 1, 2 o 3 dientes consecutivos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-foreground">No presentas dolor ni infección activa</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-foreground">Buscas una solución accesible</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <p className="text-muted-foreground">
                      <strong className="text-red-600">No aplica</strong> para casos complejos o con dolor
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#C9A227]/10 text-[#C9A227] rounded-full text-sm font-medium mb-4">
              Proceso Simple
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
              ¿Cómo funciona?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-[#0066B3]/10 hover:border-[#0066B3]/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#0066B3]/10 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-[#0066B3]" />
                    </div>
                    <span className="inline-block w-8 h-8 rounded-full bg-[#C9A227] text-white text-sm font-bold flex items-center justify-center mx-auto mb-3">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-5 h-5 text-[#0066B3]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#C9A227] hover:bg-[#B8922A] text-white font-semibold px-8"
            >
              <a href="#formulario">
                Quiero empezar
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Precio Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0066B3] to-[#004C8C]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-8">
              Empieza hoy con una inversión mínima
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <span className="text-sm text-white/70 uppercase tracking-wide">Paso 1</span>
                  <h3 className="text-lg font-semibold text-white mt-2">Kit de impresión + evaluación</h3>
                  <p className="text-3xl font-bold text-[#C9A227] mt-3">$115.000</p>
                  <p className="text-sm text-white/60 mt-1">COP</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <span className="text-sm text-white/70 uppercase tracking-wide">Paso 2</span>
                  <h3 className="text-lg font-semibold text-white mt-2">Prótesis personalizada</h3>
                  <p className="text-3xl font-bold text-[#C9A227] mt-3">$465.000</p>
                  <p className="text-sm text-white/60 mt-1">COP</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-white/80 text-sm mb-2">Total del tratamiento</p>
              <p className="text-4xl font-bold text-white">$580.000 <span className="text-lg font-normal text-white/70">COP</span></p>
              <p className="mt-4 text-sm text-white/60">
                El segundo pago solo se realiza después de evaluar tu caso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario Section */}
      <section id="formulario" className="py-16 md:py-20 bg-white scroll-mt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-[#0066B3]/10 text-[#0066B3] rounded-full text-sm font-medium mb-4">
                Solicita tu kit
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                Completa tus datos
              </h2>
              <p className="mt-2 text-muted-foreground">
                Te contactaremos para confirmar tu pedido
              </p>
            </div>
            
            <ProthesisForm />
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
            Este servicio incluye evaluación odontológica remota y aplica únicamente para casos seleccionados. 
            No reemplaza consulta presencial en situaciones complejas.
          </p>
        </div>
      </section>

      {/* WhatsApp CTA - Desktop */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/573161994757?text=Hola,%20tengo%20una%20pregunta%20sobre%20la%20prótesis%20dental%20a%20domicilio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">¿Tienes dudas?</span>
        </a>
      </div>
      
      {/* Bottom padding for mobile sticky button */}
      <div className="h-24 md:hidden" />
    </main>
  )
}
