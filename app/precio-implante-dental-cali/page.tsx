import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MessageCircle, Star, AlertTriangle, CreditCard, Shield, Clock, HelpCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Precio Implante Dental en Cali 2024 | Desde $1.500.000 | Dr Weider",
  description: "Conoce el precio de implantes dentales en Cali. Desde $1.500.000 COP (aprox. 380 USD). Corona en zirconia desde $1.500.000. Agenda tu valoración con el Dr Weider, especialista en implantología.",
  keywords: "precio implante dental cali, cuanto cuesta implante dental cali, costo implante dental cali, implante dental barato cali, implante dental economico cali",
}

const faqs = [
  {
    question: "¿Se puede financiar el tratamiento?",
    answer: "Sí, contamos con opciones de financiamiento. Durante la valoración te explicamos las alternativas de pago disponibles para que puedas acceder al tratamiento.",
  },
  {
    question: "¿Cuánto dura un implante dental?",
    answer: "Con el cuidado adecuado, los implantes dentales pueden durar toda la vida. Son la solución más duradera para reemplazar dientes perdidos.",
  },
  {
    question: "¿Es seguro el procedimiento?",
    answer: "Sí. Los implantes dentales tienen una tasa de éxito del 95-98%. Utilizamos implantes de alta calidad y protocolos seguros.",
  },
  {
    question: "¿El precio incluye la corona?",
    answer: "El implante y la corona tienen costos separados. El implante desde $1.500.000 y la corona en zirconia desde $1.500.000. En la valoración te damos el presupuesto completo.",
  },
]

export default function PrecioImplanteDentalCali() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                Precios Actualizados 2024
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Precio de Implante Dental en Cali
              </h1>
              <p className="mt-6 text-xl text-white/90 leading-relaxed">
                Conoce el valor aproximado y agenda tu valoración personalizada con el Dr Weider
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-xl">
                  <a
                    href="https://wa.me/573235944931?text=Hola,%20quiero%20cotizar%20un%20implante%20dental%20en%20Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Cotizar por WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6">
                  <a href="tel:+573235944931" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Llamar ahora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* PRECIO CLARO */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-primary shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                      Implante Dental
                    </h2>
                    <div className="my-6">
                      <span className="text-sm text-muted-foreground">Desde</span>
                      <p className="text-5xl font-bold text-primary">$1.500.000</p>
                      <span className="text-muted-foreground">COP</span>
                      <p className="text-lg text-accent font-semibold mt-2">Aprox. 380 USD</p>
                    </div>
                    <ul className="text-left space-y-2 text-muted-foreground mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        Implante de titanio de alta calidad
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        Cirugía de colocación
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        Control post-operatorio
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <Star className="h-8 w-8 text-accent" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                      Corona sobre Implante
                    </h2>
                    <div className="my-6">
                      <span className="text-sm text-muted-foreground">Desde</span>
                      <p className="text-5xl font-bold text-accent">$1.500.000</p>
                      <span className="text-muted-foreground">COP</span>
                      <p className="text-lg text-primary font-semibold mt-2">Aprox. 380 USD</p>
                    </div>
                    <ul className="text-left space-y-2 text-muted-foreground mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        Corona en zirconia o porcelana
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        Pilar de conexión
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        Estética natural garantizada
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-muted/50 rounded-xl border border-muted">
                <p className="text-center text-muted-foreground">
                  <strong className="text-foreground">Nota importante:</strong> El costo puede variar según cada caso clínico, 
                  cantidad de implantes y necesidad de procedimientos adicionales. En la valoración evaluamos tu situación 
                  y te damos un presupuesto personalizado sin compromiso.
                </p>
              </div>

              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-6">
                  <a
                    href="https://wa.me/573235944931?text=Hola,%20quiero%20agendar%20una%20valoración%20para%20implantes%20dentales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Solicitar presupuesto personalizado
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-10">
                ¿Qué incluye el tratamiento?
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-white border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Evaluación clínica</h3>
                    <p className="text-sm text-muted-foreground mt-2">Diagnóstico completo con radiografía</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Planeación</h3>
                    <p className="text-sm text-muted-foreground mt-2">Plan de tratamiento personalizado</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Colocación</h3>
                    <p className="text-sm text-muted-foreground mt-2">Cirugía con anestesia local</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Seguimiento</h3>
                    <p className="text-sm text-muted-foreground mt-2">Controles post-operatorios</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ PUEDE CAMBIAR EL PRECIO */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-10">
                ¿Qué puede variar el precio?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border border-muted">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="h-6 w-6 text-accent" />
                      <h3 className="font-semibold text-foreground">Cantidad de implantes</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Si necesitas varios implantes, el costo total aumenta pero hay descuentos por cantidad.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-muted">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="h-6 w-6 text-accent" />
                      <h3 className="font-semibold text-foreground">Injertos óseos</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Si no tienes suficiente hueso, puede requerirse un injerto antes del implante.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-muted">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="h-6 w-6 text-accent" />
                      <h3 className="font-semibold text-foreground">Tipo de rehabilitación</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Coronas unitarias, puentes o prótesis completas tienen costos diferentes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ NO TODOS CUESTAN LO MISMO */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                ¿Por qué no todos los implantes cuestan lo mismo?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                El precio de un implante dental varía según varios factores: la marca del implante, 
                el material de la corona, la complejidad del caso y si se requieren procedimientos 
                adicionales como injertos de hueso.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                En nuestra consulta utilizamos implantes de marcas reconocidas mundialmente, 
                lo que garantiza calidad y durabilidad. El Dr Weider evaluará tu caso específico 
                y te explicará todas las opciones disponibles con sus respectivos costos.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <a
                  href="https://wa.me/573235944931?text=Hola,%20tengo%20dudas%20sobre%20el%20precio%20de%20implantes%20dentales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Resolver mis dudas por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* OPCIONES DE PAGO */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Opciones de pago flexibles
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Entendemos que es una inversión importante. Por eso ofrecemos diferentes 
                opciones de pago para que puedas acceder al tratamiento que necesitas.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground">Efectivo</p>
                  <p className="text-sm text-muted-foreground">Descuentos especiales</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground">Tarjetas</p>
                  <p className="text-sm text-muted-foreground">Débito y crédito</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground">Transferencia</p>
                  <p className="text-sm text-muted-foreground">Bancolombia, Nequi</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-10">
                Preguntas frecuentes sobre precios
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="bg-white border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA URGENCIA */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                Agenda hoy tu valoración
              </h2>
              <p className="text-xl text-white/90 mb-4">
                Recibe tu diagnóstico y plan de tratamiento personalizado con precios exactos
              </p>
              <p className="text-white/80 mb-8">
                Te responderemos en minutos - Sin compromiso
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-12 py-8 shadow-2xl">
                <a
                  href="https://wa.me/573235944931?text=Hola,%20quiero%20agendar%20una%20valoración%20para%20conocer%20el%20precio%20de%20mi%20tratamiento%20con%20implantes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  Agendar valoración por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* INTERLINKING */}
        <section className="py-12 bg-white border-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground mb-4">
                Conoce más sobre nuestros tratamientos de implantología
              </p>
              <Link 
                href="/implantes-dentales-cali" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Ver todo sobre implantes dentales en Cali
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
