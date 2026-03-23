import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { MessageCircle, Check, ChevronRight, Star, Sparkles, Eye, Palette } from "lucide-react"

export const metadata: Metadata = {
  title: "Diseño de Sonrisa en Cali - Transformación Digital | Dr. Weider",
  description: "Diseño de sonrisa en Cali con tecnología digital. Carillas en cerámica, blanqueamiento y contorneado. Ve tu resultado antes del tratamiento. Agenda tu valoración.",
  keywords: "diseño de sonrisa cali, carillas dentales cali, sonrisa perfecta cali, estética dental cali, blanqueamiento dental cali",
  openGraph: {
    title: "Diseño de Sonrisa en Cali - Transformación Digital",
    description: "Diseño de sonrisa con tecnología digital. Ve tu resultado antes del tratamiento.",
    type: "website",
  },
}

const benefits = [
  "Simulación digital 3D antes del tratamiento",
  "Carillas de cerámica de alta estética",
  "Resultados naturales y duraderos",
  "Procedimiento mínimamente invasivo",
  "Diseño personalizado según tu rostro",
  "Mejora inmediata de tu imagen",
]

const treatments = [
  {
    icon: Sparkles,
    title: "Carillas de Cerámica",
    description: "Láminas ultrafinas que transforman color, forma y tamaño de tus dientes.",
  },
  {
    icon: Eye,
    title: "Blanqueamiento Profesional",
    description: "Aclara tus dientes hasta 8 tonos con tecnología LED en una sola sesión.",
  },
  {
    icon: Palette,
    title: "Contorneado Dental",
    description: "Remodelación estética de bordes y superficies para armonía perfecta.",
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <nav className="flex items-center gap-2 text-white/70 text-sm mb-6">
                  <Link href="/" className="hover:text-white">Inicio</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">Diseño de Sonrisa</span>
                </nav>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Diseño de Sonrisa en{" "}
                  <span className="text-accent">Cali</span>
                </h1>
                <p className="mt-6 text-xl text-white/90 leading-relaxed">
                  Transforma tu sonrisa con tecnología digital. Visualiza tu resultado 
                  antes de comenzar el tratamiento.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    <a
                      href="https://wa.me/573235944931?text=Hola,%20quiero%20información%20sobre%20diseño%20de%20sonrisa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Agenda tu simulación
                    </a>
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-white font-medium">5.0 en Google</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-26%20at%205.08.27%20PM-60psGi6opt0KmYH3ojIgtlMMb8lv7A.jpeg"
                  alt="Diseño de sonrisa resultado"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Beneficios del <span className="text-primary">Diseño de Sonrisa</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Tratamientos <span className="text-accent">Incluidos</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {treatments.map((treatment, index) => {
                const Icon = treatment.icon
                return (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{treatment.title}</h3>
                      <p className="text-muted-foreground">{treatment.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Antes y <span className="text-primary">Después</span>
              </h2>
              <p className="mt-4 text-muted-foreground">Resultados reales de nuestros pacientes</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2415%20%281%29.PNG-9ntEn8M3I0TiX9rW9HFFG748TjueqG.png"
                alt="Antes y después diseño de sonrisa"
                className="rounded-xl shadow-lg w-full"
              />
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
              Agenda tu simulación digital y visualiza cómo lucirá tu nueva sonrisa.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/573235944931?text=Hola,%20quiero%20agendar%20una%20simulación%20de%20diseño%20de%20sonrisa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Agendar simulación gratis
              </a>
            </Button>
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
                      Combina implantes con diseño de sonrisa para resultados completos.
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
                      Coronas y carillas de alta estética para tu diseño de sonrisa.
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
                      Conoce nuestros precios actualizados y opciones de financiación.
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
