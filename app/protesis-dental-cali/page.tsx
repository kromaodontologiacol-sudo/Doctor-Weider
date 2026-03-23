import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { MessageCircle, Check, ChevronRight, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Prótesis Dental en Cali - Fijas y Removibles | Dr. Weider",
  description: "Prótesis dentales en Cali: coronas, puentes, dentaduras de alta succión. Materiales premium y tecnología CAD/CAM. Recupera tu función masticatoria y estética.",
  keywords: "prótesis dental cali, coronas dentales cali, puentes dentales cali, dentaduras cali, prótesis removible cali",
  openGraph: {
    title: "Prótesis Dental en Cali - Fijas y Removibles",
    description: "Prótesis dentales de alta calidad. Coronas, puentes y dentaduras con tecnología CAD/CAM.",
    type: "website",
  },
}

const types = [
  {
    title: "Coronas de Zirconia",
    description: "Restauración individual que cubre un diente dañado. Alta estética y resistencia.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2983.JPG-Uq8RpwOmPxRm6G2zNO5kX76aAvEqYf.jpeg",
  },
  {
    title: "Puentes Dentales",
    description: "Reemplazo de uno o más dientes usando los dientes adyacentes como soporte.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2993.JPG-WO713zMc9atFAEDO1oyLAHgpUhrb9Z.jpeg",
  },
  {
    title: "Prótesis de Alta Succión",
    description: "Dentaduras con retención superior sin necesidad de adhesivos.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%284%29-3RqbuwkL4JIyfDMMgjtZODhSS36MUo.jpg",
  },
  {
    title: "Prótesis Removibles",
    description: "Dentaduras parciales o completas de alta calidad y confort.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protesis-removible-completa-EyWUDXxp4ySIYKOQp9Fobw9cjgJovW.jpg",
  },
]

const benefits = [
  "Diseño digital CAD/CAM de alta precisión",
  "Materiales biocompatibles premium",
  "Estética natural indistinguible",
  "Ajuste perfecto y cómodo",
  "Durabilidad garantizada",
  "Funcionalidad masticatoria completa",
]

export default function ProtesisDentalPage() {
  const dictionary = getDictionary("es")

  return (
    <>
      <Header dictionary={dictionary} locale="es" />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-white/70 text-sm mb-6">
              <Link href="/" className="hover:text-white">Inicio</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Prótesis Dental</span>
            </nav>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Prótesis Dental en{" "}
                <span className="text-accent">Cali</span>
              </h1>
              <p className="mt-6 text-xl text-white/90 leading-relaxed">
                Coronas, puentes y dentaduras de alta calidad con tecnología CAD/CAM. 
                Recupera tu sonrisa y función masticatoria.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  <a
                    href="https://wa.me/573235944931?text=Hola,%20quiero%20información%20sobre%20prótesis%20dental"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Agenda tu valoración
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-white font-medium">5.0 en Google</span>
              </div>
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Tipos de <span className="text-primary">Prótesis</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {types.map((type, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Ventajas de Nuestras <span className="text-accent">Prótesis</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Recupera tu sonrisa hoy
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agenda una valoración y conoce la mejor opción para tu caso.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/573235944931?text=Hola,%20quiero%20agendar%20una%20valoración%20para%20prótesis%20dental"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Agendar valoración por WhatsApp
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
                      Coronas sobre implantes para una solución permanente.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/diseno-de-sonrisa-cali" className="group">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Diseño de Sonrisa
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Combina prótesis con diseño estético completo.
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
                      Conoce nuestros precios actualizados.
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
