import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { MessageCircle, Check, ChevronRight, Star, DollarSign, AlertCircle, HelpCircle, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Precio de Implante Dental en Cali (2026) - Desde $1.500.000 COP | Dr. Weider",
  description: "Precio implante dental Cali 2026: Implante desde $1.500.000 COP (~$380 USD). Corona zirconia desde $1.500.000 COP. Conoce qué incluye, qué puede variar y por qué. Cotiza gratis por WhatsApp.",
  keywords: "precio implante dental cali 2026, cuanto cuesta implante dental cali, implantes dentales precio colombia, costo implante dental cali",
  openGraph: {
    title: "Precio de Implante Dental en Cali (2026)",
    description: "Implante desde $1.500.000 COP (~$380 USD). Corona zirconia desde $1.500.000. Cotización personalizada gratis.",
    type: "website",
  },
}

const mainPrices = [
  {
    name: "Implante Dental",
    price: "$1.500.000",
    usd: "~$380 USD",
    description: "Implante de titanio grado médico de primera calidad",
    includes: [
      "Implante de titanio premium (marca reconocida)",
      "Cirugía de colocación",
      "Anestesia local",
      "Controles post-operatorios",
      "Garantía de por vida del implante",
    ],
  },
  {
    name: "Corona de Zirconia",
    price: "$1.500.000",
    usd: "~$380 USD",
    description: "Corona de alta estética sobre implante",
    includes: [
      "Corona de zirconia premium",
      "Pilar de conexión",
      "Diseño digital CAD/CAM",
      "Color personalizado",
      "Ajustes de oclusión incluidos",
    ],
  },
]

const whatCanChange = [
  {
    icon: AlertCircle,
    title: "Necesidad de injerto óseo",
    description: "Si el hueso no tiene suficiente volumen, puede requerirse un injerto previo para asegurar el éxito del implante.",
    impact: "Desde +$800.000 COP",
  },
  {
    icon: TrendingUp,
    title: "Elevación de seno maxilar",
    description: "En implantes superiores posteriores, a veces es necesario elevar el seno para ganar altura ósea.",
    impact: "Desde +$1.500.000 COP",
  },
  {
    icon: HelpCircle,
    title: "Extracciones previas",
    description: "Si hay dientes que deben extraerse antes de colocar el implante, esto tiene un costo adicional.",
    impact: "Desde +$80.000 COP",
  },
  {
    icon: AlertCircle,
    title: "Tipo de corona",
    description: "Las coronas de zirconia son más estéticas y duraderas que las de metal-porcelana.",
    impact: "Variable según material",
  },
]

const whyVaries = [
  {
    title: "Calidad del implante",
    description: "Utilizamos implantes de marcas reconocidas mundialmente con tasas de éxito superiores al 98%.",
  },
  {
    title: "Condición del paciente",
    description: "Cada caso es único. Algunos pacientes requieren procedimientos adicionales para garantizar el éxito.",
  },
  {
    title: "Tecnología utilizada",
    description: "Usamos tomografía 3D, planificación digital y cirugía guiada para máxima precisión.",
  },
  {
    title: "Experiencia del especialista",
    description: "El Dr. Weider tiene más de 15 años de experiencia y miles de implantes exitosos.",
  },
]

const comparison = [
  { location: "Dr. Weider (Cali)", price: "~$760 USD", highlight: true },
  { location: "Promedio Colombia", price: "$1,000 - $1,500 USD", highlight: false },
  { location: "Estados Unidos", price: "$3,000 - $5,000 USD", highlight: false },
  { location: "España", price: "€1,500 - €3,000 EUR", highlight: false },
  { location: "México", price: "$1,200 - $2,500 USD", highlight: false },
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
              <span className="text-white">Precios 2026</span>
            </nav>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
                <span className="text-accent font-semibold">Precios Actualizados 2026</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Precio de Implante Dental en{" "}
                <span className="text-accent">Cali (2026)</span>
              </h1>
              <p className="mt-6 text-xl text-white/90 leading-relaxed">
                Precios transparentes y competitivos. Conoce exactamente qué incluye 
                y qué puede hacer variar el precio de tu tratamiento.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6"
                >
                  <a
                    href="https://wa.me/573235944931?text=Hola,%20quiero%20saber%20el%20precio%20de%20implante%20dental%20en%20Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Cotizar por WhatsApp
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-white font-medium">5.0 en Google - 22 opiniones verificadas</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Prices */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Precios Base <span className="text-accent">(Actualizado 2026)</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {mainPrices.map((item, index) => (
                <Card key={index} className="border-2 border-accent/20 hover:border-accent transition-colors">
                  <CardHeader className="text-center pb-4 bg-accent/5">
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-5xl font-bold text-primary">{item.price}</span>
                      <span className="text-muted-foreground block text-lg mt-2">{item.usd}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-4 text-foreground">¿Qué incluye?</h4>
                    <ul className="space-y-3">
                      {item.includes.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Total Package */}
            <div className="mt-12 max-w-2xl mx-auto">
              <Card className="border-2 border-primary bg-primary/5">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    Paquete Completo: Implante + Corona
                  </h3>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-primary">$2.800.000</span>
                    <span className="text-muted-foreground block text-lg mt-2">~$710 USD (actualizado 2026)</span>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    Solución completa para reemplazar un diente perdido con garantía incluida.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    <a
                      href="https://wa.me/573235944931?text=Hola,%20quiero%20cotizar%20el%20paquete%20completo%20de%20implante%20%2B%20corona"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Cotizar Paquete Completo
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Can Change the Price */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                ¿Qué puede <span className="text-primary">cambiar el precio</span>?
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                Cada caso es único. Estos factores pueden influir en el costo final de tu tratamiento.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whatCanChange.map((item, index) => {
                const Icon = item.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                          <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                          <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-medium rounded-full text-sm">
                            {item.impact}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Price Varies */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                  ¿Por qué varía el precio de los <span className="text-accent">implantes dentales</span>?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  No todos los implantes cuestan lo mismo, y hay buenas razones para ello. 
                  Aquí te explicamos los factores que influyen en el precio.
                </p>
                <div className="space-y-6">
                  {whyVaries.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-muted/30 rounded-2xl p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Comparación de Precios
                </h3>
                <div className="space-y-4">
                  {comparison.map((item, index) => (
                    <div 
                      key={index} 
                      className={`flex justify-between items-center p-4 rounded-lg ${
                        item.highlight 
                          ? 'bg-accent/20 border-2 border-accent' 
                          : 'bg-background border border-border'
                      }`}
                    >
                      <span className={`font-medium ${item.highlight ? 'text-accent' : 'text-foreground'}`}>
                        {item.location}
                      </span>
                      <span className={`font-bold ${item.highlight ? 'text-accent' : 'text-muted-foreground'}`}>
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-center text-sm text-muted-foreground">
                  Ahorra hasta un 70% comparado con precios en EE.UU.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Financing Section */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <DollarSign className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Opciones de Financiación
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                No dejes que el precio sea un obstáculo. Ofrecemos planes de pago flexibles 
                para que puedas acceder al tratamiento que necesitas. Consulta nuestras 
                opciones de financiación sin intereses.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold"
              >
                <a
                  href="https://wa.me/573235944931?text=Hola,%20quiero%20información%20sobre%20opciones%20de%20financiación%20para%20implantes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consultar opciones de pago
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              ¿Listo para conocer tu precio exacto?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Cada caso es diferente. Envíanos tu radiografía o ven a valoración 
              para darte un presupuesto exacto sin compromiso.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7"
            >
              <a
                href="https://wa.me/573235944931?text=Hola,%20quiero%20saber%20el%20precio%20de%20implante%20dental%20en%20Cali"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Cotizar por WhatsApp
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
                      Conoce todo sobre el proceso de implantes dentales.
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
                      Coronas, puentes y dentaduras de alta calidad.
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
                      Transforma tu sonrisa con carillas y blanqueamiento.
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
