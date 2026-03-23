import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { MessageCircle, Check, ChevronRight, Star, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Precio Implante Dental Cali 2026 - Desde $1.500.000 COP | Dr. Weider",
  description: "Precios de implantes dentales en Cali 2026. Implante desde $1.500.000 COP (~$380 USD). Corona en zirconia desde $1.500.000. Financiación disponible. Valoración gratis.",
  keywords: "precio implante dental cali, cuanto cuesta implante dental cali, implantes dentales baratos cali, costo implante dental colombia",
  openGraph: {
    title: "Precio Implante Dental Cali 2026 - Desde $1.500.000 COP",
    description: "Implantes dentales desde $1.500.000 COP. Corona en zirconia desde $1.500.000. Valoración gratis.",
    type: "website",
  },
}

const prices = [
  {
    name: "Implante de Titanio",
    price: "$1.500.000",
    usd: "~$380 USD",
    description: "Implante de titanio grado médico con conexión cónica",
    includes: [
      "Implante de titanio premium",
      "Cirugía de colocación",
      "Controles post-operatorios",
      "Garantía de por vida del implante",
    ],
  },
  {
    name: "Corona sobre Implante",
    price: "$1.500.000",
    usd: "~$380 USD",
    description: "Corona de cerámica o zirconia de alta estética",
    includes: [
      "Corona en cerámica/zirconia",
      "Pilar de titanio",
      "Diseño digital CAD/CAM",
      "Ajustes de oclusión",
    ],
  },
  {
    name: "Paquete Completo",
    price: "$2.800.000",
    usd: "~$710 USD",
    description: "Implante + Corona: La solución completa",
    includes: [
      "Implante de titanio premium",
      "Corona de zirconia",
      "Todos los controles",
      "Garantía extendida",
    ],
    featured: true,
  },
]

const additionalServices = [
  { name: "Tomografía 3D", price: "$150.000" },
  { name: "Injerto óseo (si es necesario)", price: "Desde $800.000" },
  { name: "Elevación de seno maxilar", price: "Desde $1.500.000" },
  { name: "Extracción simple", price: "$80.000" },
]

export default function PreciosImplantesPage() {
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
              <Link href="/implantes-dentales-cali" className="hover:text-white">Implantes</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Precios</span>
            </nav>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Precio Implante Dental{" "}
                <span className="text-accent">Cali 2026</span>
              </h1>
              <p className="mt-6 text-xl text-white/90 leading-relaxed">
                Precios transparentes y competitivos. Implantes de alta calidad 
                con tecnología de punta.
              </p>
              <div className="mt-8 flex items-center justify-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-white font-medium">22 opiniones verificadas en Google</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {prices.map((item, index) => (
                <Card 
                  key={index} 
                  className={`relative ${item.featured ? 'border-accent border-2 shadow-xl' : 'border-border'}`}
                >
                  {item.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">{item.price}</span>
                      <span className="text-muted-foreground block text-sm mt-1">{item.usd}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {item.includes.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full mt-6 ${item.featured ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}`}
                      variant={item.featured ? "default" : "outline"}
                    >
                      <a
                        href={`https://wa.me/573235944931?text=Hola,%20quiero%20información%20sobre%20${encodeURIComponent(item.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Consultar
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Services */}
            <div className="mt-16">
              <h2 className="text-2xl font-serif font-bold text-foreground text-center mb-8">
                Servicios Adicionales
              </h2>
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardContent className="p-6">
                    <table className="w-full">
                      <tbody>
                        {additionalServices.map((service, index) => (
                          <tr key={index} className="border-b border-border last:border-0">
                            <td className="py-4 text-foreground">{service.name}</td>
                            <td className="py-4 text-right font-semibold text-primary">{service.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground">
                Comparación de Precios
              </h2>
              <p className="mt-4 text-muted-foreground">
                Nuestros precios vs. promedio en otras ciudades y países
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-accent/10 rounded-lg">
                      <span className="font-medium">Doctor Weider (Cali)</span>
                      <span className="font-bold text-accent">$2.800.000 COP</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                      <span>Promedio Bogotá</span>
                      <span className="font-semibold">$4.500.000 COP</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                      <span>Promedio Medellín</span>
                      <span className="font-semibold">$4.000.000 COP</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                      <span>Estados Unidos</span>
                      <span className="font-semibold">$3.000 - $5.000 USD</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                      <span>España</span>
                      <span className="font-semibold">€1.500 - €3.000 EUR</span>
                    </div>
                  </div>
                  <p className="mt-6 text-center text-sm text-muted-foreground">
                    Ahorra hasta un 70% comparado con precios en EE.UU.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Financing Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Opciones de Financiación
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Ofrecemos planes de pago flexibles para que puedas acceder al 
                tratamiento que necesitas. Consulta nuestras opciones de financiación 
                sin intereses.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <a
                  href="https://wa.me/573235944931?text=Hola,%20quiero%20información%20sobre%20opciones%20de%20financiación"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consultar financiación
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Valoración Gratuita
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Conoce exactamente qué tratamiento necesitas y su costo. 
              Sin compromiso.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/573235944931?text=Hola,%20quiero%20agendar%20una%20valoración%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Agendar valoración gratis
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer dictionary={dictionary} locale="es" />
      <WhatsAppButton dictionary={dictionary} />
    </>
  )
}
