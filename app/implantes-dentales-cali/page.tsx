import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { MessageCircle, Check, ChevronRight, Star, Clock, Shield, Award, Heart, Smile, AlertCircle, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Implantes Dentales en Cali con el Dr. Weider - Especialista Certificado",
  description: "Implantes dentales en Cali: procedimiento, beneficios, precios. Dr. Weider, especialista en implantes con +15 años de experiencia. Recupera tu sonrisa fija, estética y funcional. Agenda tu valoración gratis.",
  keywords: "implantes dentales en cali, implante dental cali, especialista en implantes cali, implantes de titanio cali, implantología oral cali",
  openGraph: {
    title: "Implantes Dentales en Cali con el Dr. Weider",
    description: "Recupera tu sonrisa fija, estética y funcional. Especialista en implantes con tecnología 3D.",
    type: "website",
  },
}

const emotionalProblems = [
  {
    icon: Heart,
    title: "Vergüenza al sonreír",
    description: "Ocultas tu sonrisa en fotos y reuniones sociales porque sientes inseguridad por los espacios vacíos.",
  },
  {
    icon: AlertCircle,
    title: "Dificultad para comer",
    description: "Evitas ciertos alimentos porque no puedes masticar bien, afectando tu nutrición y disfrute de la comida.",
  },
  {
    icon: Users,
    title: "Impacto en tu vida social",
    description: "Te sientes cohibido en reuniones, citas o entrevistas de trabajo por la apariencia de tu boca.",
  },
]

const whatAreImplants = [
  "Un implante dental es una raíz artificial de titanio que se coloca en el hueso maxilar para reemplazar un diente perdido.",
  "El titanio es biocompatible, lo que significa que se integra naturalmente con tu hueso en un proceso llamado osteointegración.",
  "Sobre el implante se coloca una corona de cerámica que luce y funciona exactamente como un diente natural.",
  "A diferencia de puentes o dentaduras, los implantes no afectan los dientes adyacentes y preservan el hueso de tu mandíbula.",
]

const benefits = [
  {
    title: "Solución permanente",
    description: "Los implantes pueden durar toda la vida con el cuidado adecuado, a diferencia de puentes que duran 10-15 años.",
  },
  {
    title: "Aspecto 100% natural",
    description: "Las coronas de cerámica son indistinguibles de los dientes naturales en color, forma y brillo.",
  },
  {
    title: "Preservan el hueso",
    description: "Estimulan el hueso como un diente natural, previniendo la pérdida ósea que ocurre con dentaduras.",
  },
  {
    title: "No afectan dientes vecinos",
    description: "A diferencia de los puentes, no es necesario tallar los dientes adyacentes para colocar un implante.",
  },
  {
    title: "Masticación completa",
    description: "Recuperas el 100% de tu fuerza masticatoria, pudiendo comer cualquier alimento sin restricciones.",
  },
  {
    title: "Confianza renovada",
    description: "Vuelves a sonreír, hablar y comer con total seguridad, mejorando tu calidad de vida.",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Valoración y Diagnóstico",
    description: "Realizamos una tomografía 3D para evaluar tu hueso y planificar digitalmente la posición ideal del implante. Revisamos tu historia clínica y respondemos todas tus preguntas.",
    duration: "1 cita - 45 min",
  },
  {
    step: 2,
    title: "Cirugía de Colocación",
    description: "Con anestesia local y técnicas mínimamente invasivas, colocamos el implante de titanio en el hueso. El procedimiento es más cómodo de lo que imaginas.",
    duration: "30-60 min por implante",
  },
  {
    step: 3,
    title: "Periodo de Integración",
    description: "El implante se fusiona con tu hueso en un proceso llamado osteointegración. Durante este tiempo, puedes llevar un diente provisional si es necesario.",
    duration: "3-4 meses",
  },
  {
    step: 4,
    title: "Corona Final",
    description: "Tomamos impresiones digitales y diseñamos tu corona de cerámica personalizada. Se instala y ajusta para lograr una oclusión perfecta.",
    duration: "2 citas",
  },
]

const candidateFactors = {
  ideal: [
    "Adultos con dientes perdidos o que no pueden salvarse",
    "Personas con buena salud general",
    "No fumadores o dispuestos a dejar de fumar",
    "Hueso maxilar adecuado (o candidatos a injerto)",
    "Comprometidos con la higiene oral",
  ],
  conditions: [
    "Diabetes controlada: Sí, es posible con control adecuado",
    "Fumadores: Pueden recibir implantes, pero el éxito es mayor si dejan de fumar",
    "Poco hueso: Existen técnicas de injerto óseo que lo hacen posible",
    "Edad avanzada: La edad no es limitante si hay buena salud general",
  ],
}

const faqs = [
  {
    question: "¿Cuánto cuesta un implante dental en Cali?",
    answer: "En nuestra clínica, el implante de titanio cuesta desde $1.500.000 COP (~$380 USD) y la corona de zirconia desde $1.500.000 COP. El paquete completo está desde $2.800.000 COP. Consulta nuestra página de precios para información detallada.",
  },
  {
    question: "¿Duele el procedimiento de implante dental?",
    answer: "No. La cirugía se realiza con anestesia local y técnicas mínimamente invasivas. La mayoría de pacientes reportan menos molestias de las esperadas. Después de la cirugía, el malestar es manejable con analgésicos comunes.",
  },
  {
    question: "¿Cuánto dura todo el proceso de implante dental?",
    answer: "El proceso completo toma entre 3 y 6 meses, dependiendo del caso. La cirugía en sí dura 30-60 minutos. El tiempo de espera es principalmente para que el implante se integre con el hueso.",
  },
  {
    question: "¿Cuánto duran los implantes dentales?",
    answer: "Con el cuidado adecuado, los implantes de titanio pueden durar toda la vida. La corona sobre el implante típicamente dura 15-20 años antes de necesitar reemplazo. Ofrecemos garantía de por vida en el implante.",
  },
  {
    question: "¿Puedo comer normalmente con implantes?",
    answer: "Sí, una vez que el implante esté completamente integrado y con la corona instalada, podrás comer cualquier alimento sin restricciones, incluyendo manzanas, carnes y todos los alimentos que evitabas.",
  },
  {
    question: "¿Qué marca de implantes utilizan?",
    answer: "Utilizamos implantes de marcas premium reconocidas mundialmente como Neodent, Straumann y Osstem, con tasas de éxito superiores al 98% y respaldo de estudios clínicos.",
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
                  Implantes Dentales en Cali con el{" "}
                  <span className="text-accent">Dr. Weider</span>
                </h1>
                <p className="mt-6 text-xl text-white/90 leading-relaxed">
                  Recupera tu sonrisa fija, estética y funcional. Más de 15 años de experiencia 
                  y cientos de implantes exitosos respaldan nuestro trabajo.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
                  >
                    <a
                      href="https://wa.me/573181898143?text=Hola,%20quiero%20información%20sobre%20implantes%20dentales%20en%20Cali"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Agendar valoración por WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold">
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
                  alt="Implantes dentales de titanio en Cali"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Emotional Problem Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                ¿Te identificas con <span className="text-primary">esto</span>?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Perder un diente no solo afecta tu boca, afecta tu vida.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {emotionalProblems.map((problem, index) => {
                const Icon = problem.icon
                return (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground text-lg mb-2">{problem.title}</h3>
                      <p className="text-muted-foreground">{problem.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <div className="text-center mt-10">
              <p className="text-lg text-foreground font-medium">
                Los implantes dentales son la solución definitiva para recuperar lo que perdiste.
              </p>
            </div>
          </div>
        </section>

        {/* What Are Implants Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                  ¿Qué son los <span className="text-accent">implantes dentales</span>?
                </h2>
                <div className="space-y-4">
                  {whatAreImplants.map((text, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <p className="text-muted-foreground">{text}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-foreground font-medium">
                  En resumen: un implante es la forma más avanzada y natural de reemplazar un diente perdido.
                </p>
              </div>
              <div className="bg-muted/30 rounded-2xl p-8">
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  Componentes de un implante dental:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Implante de titanio</h4>
                      <p className="text-sm text-muted-foreground">La raíz artificial que se integra con el hueso</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Pilar (Abutment)</h4>
                      <p className="text-sm text-muted-foreground">Conecta el implante con la corona</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Corona de cerámica</h4>
                      <p className="text-sm text-muted-foreground">El diente visible, hecho a tu medida</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Beneficios de los <span className="text-primary">implantes dentales</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                      <Smile className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Proceso <span className="text-accent">paso a paso</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Un proceso predecible y cómodo, con tecnología de última generación.
              </p>
            </div>
            <div className="space-y-6 max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-[auto_1fr] gap-0">
                      <div className="bg-primary text-white p-6 flex items-center justify-center md:w-32">
                        <div className="text-center">
                          <div className="text-3xl font-bold">{step.step}</div>
                          <div className="text-xs text-white/70 mt-1">{step.duration}</div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-16 bg-accent/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Precios de Implantes Dentales en Cali
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Implante desde <span className="font-bold text-primary">$1.500.000 COP</span> (~$380 USD). 
                Precios actualizados 2026 con opciones de financiación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-semibold">
                  <Link href="/precio-implante-dental-cali">
                    Ver todos los precios
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold">
                  <a
                    href="https://wa.me/573181898143?text=Hola,%20quiero%20cotizar%20un%20implante%20dental"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Cotizar mi caso
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Are You a Candidate Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                ¿Eres candidato para <span className="text-primary">implantes dentales</span>?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-accent border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Check className="w-6 h-6 text-accent" />
                    Candidatos ideales
                  </h3>
                  <ul className="space-y-3">
                    {candidateFactors.ideal.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-primary" />
                    Casos especiales
                  </h3>
                  <ul className="space-y-3">
                    {candidateFactors.conditions.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-primary">!</span>
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                La única forma de saber con certeza es con una valoración personalizada. 
                <strong> Agenda la tuya sin costo.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Preguntas <span className="text-accent">Frecuentes</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
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
              Sin compromisos, solo información clara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6"
              >
                <a
                  href="https://wa.me/573181898143?text=Hola,%20quiero%20información%20sobre%20implantes%20dentales%20en%20Cali"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Agendar valoración por WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6"
              >
                <a
                  href="https://wa.me/573181898143?text=Hola,%20quiero%20hablar%20con%20el%20especialista%20sobre%20implantes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hablar con el especialista
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
