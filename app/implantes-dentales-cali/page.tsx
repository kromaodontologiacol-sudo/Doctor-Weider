import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MessageCircle, Shield, Clock, Award, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Implantes Dentales en Cali | Precio y Especialista | Dr Weider",
  description: "Implantes dentales en Cali con el Dr Weider, especialista en implantología oral. Recupera tu sonrisa con seguridad. Conoce el proceso, beneficios y precio de implantes dentales en Cali.",
  keywords: "implantes dentales cali, precio implante dental cali, especialista en implantes cali, implantología oral cali, implantes de titanio cali",
}

const benefits = [
  {
    icon: Shield,
    title: "Solución Permanente",
    description: "Los implantes dentales duran toda la vida con el cuidado adecuado, a diferencia de las prótesis removibles.",
  },
  {
    icon: Award,
    title: "Estética Natural",
    description: "Lucen y se sienten como dientes naturales. Nadie notará la diferencia.",
  },
  {
    icon: Zap,
    title: "Funcionalidad Completa",
    description: "Come, habla y sonríe con total confianza. Recupera el 100% de tu función masticatoria.",
  },
  {
    icon: Clock,
    title: "Preserva el Hueso",
    description: "Evitan la pérdida ósea que ocurre cuando faltan dientes, manteniendo tu estructura facial.",
  },
]

const processSteps = [
  {
    step: "1",
    title: "Valoración Inicial",
    description: "Evaluación completa con radiografía 3D para planificar tu tratamiento de implantes dentales en Cali.",
  },
  {
    step: "2",
    title: "Planificación Digital",
    description: "Diseñamos tu tratamiento con software especializado para garantizar resultados precisos.",
  },
  {
    step: "3",
    title: "Colocación del Implante",
    description: "Procedimiento mínimamente invasivo con anestesia local. Sin dolor ni molestias.",
  },
  {
    step: "4",
    title: "Período de Integración",
    description: "El implante se integra con tu hueso en 3-6 meses para una base sólida.",
  },
  {
    step: "5",
    title: "Corona Final",
    description: "Colocamos la corona de cerámica personalizada. Tu sonrisa completa y natural.",
  },
]

const faqs = [
  {
    question: "¿Cuánto cuesta un implante dental en Cali?",
    answer: "El precio de un implante dental en Cali varía según el caso, el tipo de implante y si se requieren procedimientos adicionales como injerto de hueso. En nuestra clínica ofrecemos valoración gratuita para darte un presupuesto personalizado. Los implantes son una inversión a largo plazo que dura toda la vida.",
  },
  {
    question: "¿Duele ponerse un implante dental?",
    answer: "El procedimiento de implantes dentales se realiza con anestesia local, por lo que no sentirás dolor durante la cirugía. Después del procedimiento, es normal tener una leve molestia que se controla fácilmente con medicamentos. La mayoría de pacientes reportan menos molestia de la esperada.",
  },
  {
    question: "¿Quién es candidato para implantes dentales?",
    answer: "La mayoría de adultos con buena salud general son candidatos para implantes dentales en Cali. Se requiere tener suficiente hueso en la mandíbula, aunque esto se puede solucionar con injertos. Condiciones como diabetes controlada no impiden el tratamiento.",
  },
  {
    question: "¿Cuánto tiempo dura el tratamiento de implantes?",
    answer: "El tratamiento completo de implantes dentales dura entre 3 y 6 meses, dependiendo de cada caso. La cirugía de colocación toma aproximadamente 1 hora por implante. Durante el período de integración, puedes llevar una prótesis temporal.",
  },
]

export default function ImplantesDentalesCali() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                  Especialista en Implantología Oral
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Implantes Dentales en Cali: Recupera tu Sonrisa con Seguridad
                </h1>
                <p className="mt-6 text-lg text-white/90 leading-relaxed">
                  Los implantes dentales son la solución más avanzada y duradera para reemplazar dientes perdidos. 
                  En nuestra clínica en Cali, el Dr. Weider utiliza tecnología de punta y técnicas mínimamente 
                  invasivas para devolverte tu sonrisa con total seguridad.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <a
                      href="https://wa.me/573235944931?text=Hola,%20quiero%20información%20sobre%20implantes%20dentales%20en%20Cali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Agenda tu Valoración Gratis
                    </a>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png"
                  alt="Implantes dentales en Cali - Dr Weider"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Qué son los implantes */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  ¿Qué son los Implantes Dentales?
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Los implantes dentales son pequeños tornillos de titanio que se colocan en el hueso maxilar 
                  para reemplazar la raíz de un diente perdido. Sobre el implante se coloca una corona de 
                  cerámica que luce y funciona exactamente como un diente natural.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  El titanio es un material biocompatible que se integra perfectamente con el hueso en un 
                  proceso llamado osteointegración. Esto hace que los implantes dentales sean la solución 
                  más estable y duradera para reemplazar dientes perdidos en Cali.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  A diferencia de las prótesis removibles, los implantes dentales no se mueven, no requieren 
                  adhesivos y te permiten comer cualquier tipo de alimento con total comodidad. Son la opción 
                  preferida por odontólogos en todo el mundo para la rehabilitación oral.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2983.JPG-Uq8RpwOmPxRm6G2zNO5kX76aAvEqYf.jpeg"
                  alt="Corona sobre implante dental"
                  className="rounded-xl shadow-lg"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2993.JPG-WO713zMc9atFAEDO1oyLAHgpUhrb9Z.jpeg"
                  alt="Rehabilitación oral con implantes"
                  className="rounded-xl shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Beneficios de los Implantes Dentales
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Descubre por qué los implantes dentales son la mejor inversión para tu salud bucal en Cali.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <benefit.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Proceso de Implantes Dentales Paso a Paso
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Conoce cómo realizamos el tratamiento de implantes dentales en nuestra clínica de Cali.
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-accent/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Candidatos */}
        <section className="py-20 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold">
                  ¿Quién es Candidato para Implantes Dentales en Cali?
                </h2>
                <p className="mt-6 text-lg text-white/90 leading-relaxed">
                  La mayoría de adultos con buena salud general son candidatos ideales para implantes dentales. 
                  Nuestro especialista en implantes en Cali evaluará tu caso particular para determinar el 
                  mejor plan de tratamiento.
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    "Personas que han perdido uno o varios dientes",
                    "Quienes usan prótesis removibles incómodas",
                    "Pacientes con suficiente hueso maxilar (o candidatos a injerto)",
                    "Personas con diabetes controlada",
                    "No fumadores o dispuestos a dejar de fumar",
                    "Adultos con encías saludables",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-serif font-bold mb-4">Agenda tu Valoración</h3>
                <p className="text-white/90 mb-6">
                  La primera consulta es gratuita. Evaluamos tu caso y te damos un presupuesto personalizado 
                  sin compromiso.
                </p>
                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <a
                    href="https://wa.me/573235944931?text=Hola,%20quiero%20agendar%20una%20valoración%20para%20implantes%20dentales%20en%20Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Agendar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Precio */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Precio de Implantes Dentales en Cali
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                El costo de un implante dental en Cali depende de varios factores: el tipo de implante, 
                si necesitas procedimientos adicionales como injerto de hueso, y el tipo de corona que elijas.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                En nuestra clínica trabajamos con implantes de marcas reconocidas mundialmente que garantizan 
                la mejor calidad y durabilidad. Ofrecemos planes de financiamiento flexibles para que puedas 
                acceder a este tratamiento.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                <strong>La valoración inicial es gratuita.</strong> Durante esta consulta, el Dr. Weider 
                evaluará tu caso, tomará radiografías digitales y te entregará un presupuesto detallado 
                sin ningún compromiso.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <a
                    href="https://wa.me/573235944931?text=Hola,%20quiero%20conocer%20el%20precio%20de%20implantes%20dentales%20en%20Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Consultar Precio por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Preguntas Frecuentes sobre Implantes Dentales
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-white border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Recupera tu Sonrisa con Implantes Dentales en Cali
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              No dejes pasar más tiempo. Agenda tu valoración gratuita con el Dr. Weider, 
              especialista en implantes dentales en Cali.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-6">
                <a
                  href="https://wa.me/573235944931?text=Hola,%20quiero%20agendar%20mi%20valoración%20gratuita%20para%20implantes%20dentales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-6 w-6" />
                  Agenda tu Valoración por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
