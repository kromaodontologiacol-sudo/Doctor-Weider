import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { MessageCircle, Check, ChevronRight, Star, Clock, Shield, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Implantes Dentales en Cali - Especialista Certificado | Dr. Weider",
  description: "Todo sobre implantes dentales en Cali: procedimiento, beneficios, precios desde $1.500.000 COP. Dr. Weider, especialista en implantología oral. Agenda tu valoración gratis.",
  keywords: "implantes dentales cali, implantes de titanio cali, implantología oral cali, especialista implantes cali, precio implante dental cali",
  openGraph: {
    title: "Implantes Dentales en Cali - Especialista Certificado",
    description: "Implantes dentales desde $1.500.000 COP. Especialista en implantología con tecnología 3D.",
    type: "website",
  },
}

const benefits = [
  "Solución permanente que puede durar toda la vida",
  "Lucen y funcionan como dientes naturales",
  "Preservan el hueso de la mandíbula",
  "No afectan los dientes adyacentes",
  "Mejoran la masticación y el habla",
  "Aumentan la confianza y autoestima",
]

const faqs = [
  {
    question: "¿Cuánto dura el procedimiento de un implante dental?",
    answer: "La cirugía de colocación del implante dura aproximadamente 30-60 minutos por implante. El proceso completo, incluyendo la cicatrización y la corona, puede tomar de 3 a 6 meses.",
  },
  {
    question: "¿Es doloroso el procedimiento?",
    answer: "No. Se realiza con anestesia local y técnicas mínimamente invasivas. La mayoría de pacientes reportan menos molestias de las esperadas durante la recuperación.",
  },
  {
    question: "¿Cuánto duran los implantes dentales?",
    answer: "Con el cuidado adecuado, los implantes pueden durar toda la vida. La corona sobre el implante típicamente dura 10-15 años antes de necesitar reemplazo.",
  },
  {
    question: "¿Soy candidato para implantes dentales?",
    answer: "La mayoría de adultos con buena salud general son candidatos. Durante la valoración evaluamos la densidad ósea y condiciones sistémicas para determinar el mejor tratamiento.",
  },
]

export default function ImplantesDentalesPage() {
  const dictionary = getDictionary("es")

  return (
    <>
      <Header dictionary={dictionary} locale="es" />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <nav className="flex items-center gap-2 text-white/70 text-sm mb-6">
                  <Link href="/" className="hover:text-white">Inicio</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">Implantes Dentales</span>
                </nav>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Implantes Dentales en{" "}
                  <span className="text-accent">Cali</span>
                </h1>
                <p className="mt-6 text-xl text-white/90 leading-relaxed">
                  Recupera tu sonrisa con implantes de titanio de alta calidad. 
                  Tecnología 3D para resultados precisos y duraderos.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    <a
                      href="https://wa.me/573235944931?text=Hola,%20quiero%20información%20sobre%20implantes%20dentales"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Agenda tu valoración
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    <Link href="/precio-implante-dental-cali">
                      Ver precios 2026
                    </Link>
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
                  <div className="text-white/80">+500 implantes exitosos</div>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png"
                  alt="Implantes dentales de titanio"
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
                Beneficios de los <span className="text-primary">Implantes Dentales</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Los implantes dentales son la solución más avanzada y natural para 
                reemplazar dientes perdidos.
              </p>
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

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Proceso del <span className="text-accent">Implante Dental</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">1. Valoración</h3>
                  <p className="text-muted-foreground">
                    Evaluación completa con tomografía 3D y planeación digital del tratamiento.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">2. Cirugía</h3>
                  <p className="text-muted-foreground">
                    Colocación del implante de titanio con técnicas mínimamente invasivas.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">3. Corona</h3>
                  <p className="text-muted-foreground">
                    Instalación de la corona de cerámica para un resultado natural y funcional.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Preguntas <span className="text-primary">Frecuentes</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              ¿Listo para recuperar tu sonrisa?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agenda tu valoración sin costo y conoce las opciones para tu caso.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/573235944931?text=Hola,%20quiero%20agendar%20una%20valoración%20para%20implantes%20dentales"
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
              <Link href="/precio-implante-dental-cali" className="group">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Precios Implantes 2026
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Conoce nuestros precios actualizados para implantes dentales.
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
                      Combina implantes con diseño de sonrisa para resultados perfectos.
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
                      Coronas y puentes sobre implantes para rehabilitación completa.
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
