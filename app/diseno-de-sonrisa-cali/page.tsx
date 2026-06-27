import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { MessageCircle, Check, ChevronRight, Star, Sparkles, Eye, Palette, ArrowRight, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Diseño de Sonrisa en Cali: Transforma tu Sonrisa | Dr. Weider",
  description: "Diseño de sonrisa en Cali con tecnología digital. Carillas de cerámica, blanqueamiento LED y contorneado estético. Ve tu resultado antes del tratamiento. Agenda tu simulación gratis.",
  keywords: "diseño de sonrisa cali, estética dental cali, carillas dentales cali, blanqueamiento dental cali, sonrisa perfecta cali",
  alternates: {
    canonical: "https://doctorweider.com/diseno-de-sonrisa-cali",
    languages: {
      "es": "https://doctorweider.com/diseno-de-sonrisa-cali",
      "en": "https://doctorweider.com/en/smile-design-cali"
    }
  },
  openGraph: {
    title: "Diseño de Sonrisa en Cali - Transformación Digital",
    description: "Diseño de sonrisa con tecnología digital. Ve tu resultado antes del tratamiento.",
    type: "website",
    locale: "es_CO",
    url: "https://doctorweider.com/diseno-de-sonrisa-cali"
  },
}

const whatIncludes = [
  {
    icon: Eye,
    title: "Simulación Digital 3D",
    description: "Ve cómo lucirá tu sonrisa antes de iniciar el tratamiento. Tecnología de diseño digital que permite visualizar y ajustar el resultado final.",
  },
  {
    icon: Sparkles,
    title: "Carillas de Cerámica",
    description: "Láminas ultrafinas de porcelana que transforman color, forma y tamaño de tus dientes. Alta estética y durabilidad excepcional.",
  },
  {
    icon: Palette,
    title: "Blanqueamiento Profesional",
    description: "Tecnología LED que aclara tus dientes hasta 8 tonos en una sola sesión. Procedimiento seguro y resultados inmediatos.",
  },
]

const idealCases = [
  {
    title: "Dientes manchados o amarillentos",
    description: "El blanqueamiento y las carillas pueden devolver la blancura natural a tu sonrisa."
  },
  {
    title: "Dientes pequeños o desgastados",
    description: "Las carillas alargan y dan forma a dientes que han perdido estructura."
  },
  {
    title: "Espacios entre dientes (diastemas)",
    description: "Cerramos los espacios con carillas sin necesidad de ortodoncia."
  },
  {
    title: "Dientes desalineados leves",
    description: "Corregimos la apariencia de dientes torcidos sin brackets."
  },
  {
    title: "Sonrisa gingival",
    description: "Remodelamos la línea de las encías para mostrar menos encía al sonreír."
  },
  {
    title: "Forma irregular de dientes",
    description: "Creamos simetría y armonía en dientes de formas diferentes."
  },
]

const benefits = [
  "Resultados visibles desde la primera cita",
  "Procedimiento mínimamente invasivo",
  "Diseño personalizado según tu rostro",
  "Mejora inmediata de autoestima",
  "Materiales de máxima calidad",
  "Durabilidad de 10-15 años",
]

const faqs = [
  {
    question: "¿Cuánto dura un diseño de sonrisa?",
    answer: "Las carillas de cerámica de alta calidad duran entre 10-15 años con el cuidado adecuado. El blanqueamiento profesional mantiene resultados por 1-2 años dependiendo de tus hábitos alimenticios."
  },
  {
    question: "¿Es doloroso el procedimiento?",
    answer: "No, el diseño de sonrisa es mínimamente invasivo. Para las carillas, solo se desgasta una capa mínima del esmalte (0.3-0.5mm). Todo se realiza con anestesia local y no sentirás dolor."
  },
  {
    question: "¿Cuántas citas necesito?",
    answer: "Generalmente 2-3 citas: la primera para diagnóstico y simulación digital, la segunda para preparación y provisionales, y la tercera para cementación final de las carillas definitivas."
  },
  {
    question: "¿Puedo ver cómo quedará mi sonrisa antes?",
    answer: "¡Sí! Usamos software de simulación 3D que te permite ver el resultado antes de iniciar. Además, colocamos carillas provisionales para que pruebes tu nueva sonrisa antes de las definitivas."
  },
  {
    question: "¿Cuál es el precio del diseño de sonrisa?",
    answer: "El precio varía según el número de carillas y tratamientos incluidos. Agenda tu valoración gratuita y te daremos un presupuesto personalizado sin compromiso."
  },
]

export default function DisenoDeSonrisaPage() {
  const dictionary = getDictionary("es")

  return (
    <>
      <Header dictionary={dictionary} locale="es" />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-26%20at%205.08.27%20PM-60psGi6opt0KmYH3ojIgtlMMb8lv7A.jpeg')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-white/70 text-sm mb-6">
              <Link href="/" className="hover:text-white">Inicio</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Diseño de Sonrisa</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Diseño de Sonrisa en{" "}
                  <span className="text-accent">Cali</span>
                </h1>
                <p className="mt-4 text-2xl text-white/90 font-medium">
                  Transforma tu sonrisa con tecnología digital
                </p>
                <p className="mt-6 text-lg text-white/80 leading-relaxed">
                  Visualiza tu nueva sonrisa antes de comenzar el tratamiento. Carillas de cerámica, 
                  blanqueamiento profesional y contorneado estético para una transformación completa.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    <a
                      href="https://wa.me/573181898143?text=Hola,%20quiero%20información%20sobre%20diseño%20de%20sonrisa%20en%20Cali"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Agendar simulación gratis
                    </a>
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-white font-medium">5.0 en Google - Más de 20 opiniones</span>
                </div>
              </div>
              <div className="hidden lg:block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-26%20at%205.08.27%20PM-60psGi6opt0KmYH3ojIgtlMMb8lv7A.jpeg"
                  alt="Diseño de sonrisa resultado - Dr. Weider Cali"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What Includes Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Tratamiento Completo
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                ¿Qué Incluye el <span className="text-primary">Diseño de Sonrisa</span>?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {whatIncludes.map((item, index) => {
                const Icon = item.icon
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-8">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Ideal Cases Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                ¿Es para ti?
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Casos <span className="text-accent">Ideales</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                El diseño de sonrisa es perfecto para personas que desean transformar estos aspectos:
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {idealCases.map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Ventajas
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                  Beneficios <span className="text-primary">Estéticos</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-accent-foreground" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    <a
                      href="https://wa.me/573181898143?text=Hola,%20quiero%20agendar%20una%20simulación%20de%20diseño%20de%20sonrisa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Agendar simulación
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2415%20%281%29.PNG-9ntEn8M3I0TiX9rW9HFFG748TjueqG.png"
                  alt="Antes y después diseño de sonrisa"
                  width={600}
                  height={450}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Gallery */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Resultados Reales
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Antes y <span className="text-accent">Después</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Transformaciones reales de nuestros pacientes en Cali
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="relative group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2415%20%281%29.PNG-9ntEn8M3I0TiX9rW9HFFG748TjueqG.png"
                  alt="Antes y después diseño de sonrisa caso 1"
                  width={600}
                  height={450}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-foreground">Diseño de Sonrisa Completo</h3>
                  <p className="text-sm text-muted-foreground">8 carillas de porcelana + blanqueamiento</p>
                </div>
              </div>
              <div className="relative group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-26%20at%205.08.27%20PM-60psGi6opt0KmYH3ojIgtlMMb8lv7A.jpeg"
                  alt="Antes y después diseño de sonrisa caso 2"
                  width={600}
                  height={450}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-foreground">Transformación Natural</h3>
                  <p className="text-sm text-muted-foreground">Carillas + contorneado estético</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Preguntas Frecuentes
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Resolvemos tus <span className="text-accent">Dudas</span>
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              ¿Listo para transformar tu sonrisa?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agenda tu simulación digital gratuita y visualiza cómo lucirá tu nueva sonrisa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
              >
                <a
                  href="https://wa.me/573181898143?text=Hola,%20quiero%20agendar%20una%20simulación%20de%20diseño%20de%20sonrisa%20en%20Cali"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Agendar simulación gratis
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <a href="tel:+573181898143">
                  Llamar: 318 189 8143
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
              Servicios Relacionados
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <Link href="/implantes-dentales-cali" className="group">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Implantes Dentales en Cali
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Combina implantes con diseño de sonrisa para resultados completos.
                    </p>
                    <span className="text-primary text-sm font-medium mt-4 inline-flex items-center gap-1">
                      Ver más <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/protesis-dental-cali" className="group">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Prótesis Dental en Cali
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Coronas y carillas de alta estética para tu diseño de sonrisa.
                    </p>
                    <span className="text-primary text-sm font-medium mt-4 inline-flex items-center gap-1">
                      Ver más <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/precio-implante-dental-cali" className="group">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Precios Actualizados 2026
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Conoce nuestros precios y opciones de financiación.
                    </p>
                    <span className="text-primary text-sm font-medium mt-4 inline-flex items-center gap-1">
                      Ver más <ArrowRight className="w-4 h-4" />
                    </span>
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
