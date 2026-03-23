import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { Check, X, ChevronRight, Shield, Package, Send, CreditCard, Truck, FileCheck } from "lucide-react"
import { ProtesisDomicilioForm } from "@/components/protesis-domicilio-form"

export const metadata: Metadata = {
  title: "Prótesis dental personalizada en Colombia | Doctor Weider",
  description: "Reemplaza 1 a 3 dientes sin salir de casa. Solicita tu kit de impresión dental con Doctor Weider. Solución accesible y personalizada.",
  keywords: "prótesis dental Colombia, prótesis dental a domicilio, prótesis removible precio Colombia, reemplazar dientes sin implantes",
  openGraph: {
    title: "Prótesis dental personalizada en Colombia | Doctor Weider",
    description: "Reemplaza 1 a 3 dientes sin salir de casa. Solicita tu kit de impresión dental con Doctor Weider.",
    type: "website",
  },
}

const processSteps = [
  {
    step: 1,
    icon: Package,
    title: "Solicitas tu kit de impresión",
    description: "Completas el formulario y realizas el pago del kit.",
  },
  {
    step: 2,
    icon: Truck,
    title: "Lo recibes en casa",
    description: "Enviamos el kit a cualquier ciudad de Colombia.",
  },
  {
    step: 3,
    icon: FileCheck,
    title: "Tomas tu impresión guiado paso a paso",
    description: "Te enviamos instrucciones detalladas y video tutorial.",
  },
  {
    step: 4,
    icon: Shield,
    title: "Evaluamos tu caso",
    description: "Nuestro equipo odontológico revisa tu impresión y fotos.",
  },
  {
    step: 5,
    icon: Send,
    title: "Fabricamos tu prótesis personalizada",
    description: "Diseñada específicamente para tu boca y necesidades.",
  },
  {
    step: 6,
    icon: Truck,
    title: "La recibes en casa",
    description: "Envío seguro con instrucciones de uso y cuidado.",
  },
]

const candidateCriteria = {
  yes: [
    "Te faltan 1, 2 o 3 dientes consecutivos",
    "No presentas dolor ni infección activa",
    "Buscas una solución accesible y sin cirugía",
  ],
  no: [
    "No aplica para casos complejos o con dolor activo",
    "No es para reemplazar todos los dientes",
    "Requiere evaluación presencial en casos especiales",
  ],
}

export default function ProtesisDomicilioPage() {
  const dictionary = getDictionary("es")

  return (
    <>
      <Header dictionary={dictionary} locale="es" />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <nav className="flex items-center justify-center gap-2 text-white/70 text-sm mb-6">
                <Link href="/" className="hover:text-white">Inicio</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Prótesis a Domicilio</span>
              </nav>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight text-balance">
                Prótesis dental personalizada{" "}
                <span className="text-accent">sin salir de casa</span>
              </h1>
              <p className="mt-6 text-xl text-white/90 leading-relaxed">
                Servicio exclusivo de Doctor Weider para reemplazar 1, 2 o 3 dientes consecutivos 
                de forma accesible y sin múltiples citas.
              </p>
              <p className="mt-4 text-white/70 text-sm">
                Odontología estética e implantológica en Cali – ahora con soluciones digitales a nivel nacional.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6"
                >
                  <a href="#solicitar-kit">
                    Solicitar kit ahora
                  </a>
                </Button>
                <p className="mt-3 text-white/80 text-sm">
                  Primer paso: <span className="font-semibold text-accent">$115.000 COP</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
                Respaldado por el <span className="text-primary">Dr. Weider Gutiérrez</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Este servicio está respaldado por el Dr. Weider Gutiérrez, odontólogo con experiencia 
                en rehabilitación oral e implantología. Se realiza bajo criterios clínicos y 
                evaluación odontológica remota.
              </p>
            </div>
          </div>
        </section>

        {/* Differentiator Section */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
                No es una prótesis genérica.{" "}
                <span className="text-accent">Es totalmente personalizada.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada prótesis se diseña según tu caso, buscando mejor ajuste, estética y comodidad. 
                Utilizamos materiales de alta calidad y técnicas profesionales para garantizar 
                un resultado natural y duradero.
              </p>
            </div>
          </div>
        </section>

        {/* Candidate Filter Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                ¿Eres candidato para <span className="text-primary">este servicio</span>?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-green-500/30 bg-green-50/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    Sí aplica si:
                  </h3>
                  <ul className="space-y-3">
                    {candidateCriteria.yes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 border-red-500/30 bg-red-50/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                      <X className="w-5 h-5 text-white" />
                    </div>
                    No aplica si:
                  </h3>
                  <ul className="space-y-3">
                    {candidateCriteria.no.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                ¿Cómo <span className="text-accent">funciona</span>?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {processSteps.map((step) => {
                const Icon = step.icon
                return (
                  <Card key={step.step} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <div className="text-center mt-10">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
              >
                <a href="#solicitar-kit">
                  Empezar ahora
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Empieza con una{" "}
                <span className="text-accent">inversión mínima</span>
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-accent/30 overflow-hidden">
                <div className="bg-primary p-6 text-center">
                  <h3 className="text-2xl font-serif font-bold text-white">Precio Total</h3>
                  <div className="text-5xl font-bold text-accent mt-2">$580.000</div>
                  <p className="text-white/80 mt-1">COP</p>
                </div>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                      <div>
                        <p className="font-semibold text-foreground">Kit de impresión + evaluación</p>
                        <p className="text-sm text-muted-foreground">Primer paso para iniciar</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary text-lg">$115.000</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">2</div>
                      <div>
                        <p className="font-semibold text-foreground">Prótesis personalizada</p>
                        <p className="text-sm text-muted-foreground">Solo después de aprobar tu caso</p>
                      </div>
                    </div>
                    <span className="font-bold text-accent text-lg">$465.000</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground text-center">
                      El segundo pago solo se realiza después de aprobar tu caso.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="solicitar-kit" className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Solicita tu <span className="text-primary">kit de impresión</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Completa el formulario para verificar que eres candidato y continuar al pago.
              </p>
            </div>
            <div className="max-w-xl mx-auto">
              <ProtesisDomicilioForm />
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-white border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
              Este servicio incluye evaluación odontológica remota y aplica únicamente para casos seleccionados. 
              No reemplaza consulta presencial en situaciones complejas.
            </p>
          </div>
        </section>
      </main>
      <Footer dictionary={dictionary} locale="es" />
      <WhatsAppButton dictionary={dictionary} phoneNumber="3161994757" />
      
      {/* Sticky CTA */}
      <div className="fixed bottom-20 left-0 right-0 p-4 bg-gradient-to-t from-background via-background to-transparent pointer-events-none lg:hidden z-40">
        <Button
          asChild
          size="lg"
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg pointer-events-auto"
        >
          <a href="#solicitar-kit">
            Solicitar kit - $115.000 COP
          </a>
        </Button>
      </div>
    </>
  )
}
