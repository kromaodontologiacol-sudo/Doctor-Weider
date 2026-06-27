import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { MessageCircle, Check, ChevronRight, Star, ArrowRight, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Prótesis Dental en Cali: Soluciones para Reemplazar Dientes Perdidos | Dr. Weider",
  description: "Prótesis dental en Cali: prótesis tipo Acker, removibles, fijas, coronas y puentes. Recupera tu función masticatoria y estética. Agenda tu valoración con el Dr. Weider.",
  keywords: "prótesis dental cali, prótesis tipo acker cali, dentadura removible cali, coronas dentales cali, puentes dentales cali, prótesis fijas cali",
  alternates: {
    canonical: "https://doctorweider.com/protesis-dental-cali",
    languages: {
      "es": "https://doctorweider.com/protesis-dental-cali",
      "en": "https://doctorweider.com/en/dental-prosthesis-cali"
    }
  },
  openGraph: {
    title: "Prótesis Dental en Cali - Soluciones Completas",
    description: "Prótesis tipo Acker, removibles y fijas. Recupera tu sonrisa con el Dr. Weider.",
    type: "website",
    locale: "es_CO",
    url: "https://doctorweider.com/protesis-dental-cali"
  },
}

const prosthesisTypes = [
  {
    title: "Prótesis Tipo Acker (Esqueléticas)",
    description: "Prótesis parciales removibles con estructura metálica de cromo-cobalto. Ideales cuando aún conservas algunos dientes naturales. Los ganchos tipo Acker ofrecen excelente retención y son discretos.",
    benefits: ["Alta durabilidad", "Menor volumen", "Mejor estabilidad", "Fácil higiene"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%284%29-3RqbuwkL4JIyfDMMgjtZODhSS36MUo.jpg",
    ideal: "Pacientes con pérdida parcial de dientes que buscan una solución duradera y cómoda."
  },
  {
    title: "Prótesis Removibles Completas",
    description: "Dentaduras completas para pacientes que han perdido todos sus dientes. Fabricadas con resinas de alta calidad y dientes de cerámica o acrílico que lucen completamente naturales.",
    benefits: ["Estética natural", "Recuperación funcional", "Costo accesible", "Fácil mantenimiento"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protesis-removible-completa-EyWUDXxp4ySIYKOQp9Fobw9cjgJovW.jpg",
    ideal: "Pacientes edéntulos que buscan recuperar su sonrisa completa."
  },
  {
    title: "Prótesis de Alta Succión",
    description: "Dentaduras con diseño especial que crea un efecto de vacío para máxima retención sin adhesivos. Técnica especializada que garantiza estabilidad superior al hablar y comer.",
    benefits: ["Sin adhesivos", "Máxima retención", "Mayor confianza", "Confort superior"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%284%29-3RqbuwkL4JIyfDMMgjtZODhSS36MUo.jpg",
    ideal: "Pacientes que han tenido problemas de retención con prótesis convencionales."
  },
  {
    title: "Prótesis Fijas (Coronas y Puentes)",
    description: "Restauraciones cementadas permanentemente sobre dientes naturales o implantes. Las coronas cubren un diente individual mientras los puentes reemplazan uno o más dientes usando los adyacentes como soporte.",
    benefits: ["Fijas y permanentes", "Máxima estética", "Función natural", "Larga duración"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2983.JPG-Uq8RpwOmPxRm6G2zNO5kX76aAvEqYf.jpeg",
    ideal: "Pacientes que prefieren una solución fija y tienen dientes de soporte saludables."
  },
]

const comparisonTable = [
  { feature: "Retención", protesis: "Buena a excelente", implantes: "Excelente" },
  { feature: "Comodidad", protesis: "Buena", implantes: "Excelente" },
  { feature: "Preserva hueso", protesis: "No", implantes: "Sí" },
  { feature: "Tiempo tratamiento", protesis: "2-4 semanas", implantes: "3-6 meses" },
  { feature: "Inversión inicial", protesis: "Menor", implantes: "Mayor" },
  { feature: "Durabilidad", protesis: "5-10 años", implantes: "15+ años" },
  { feature: "Mantenimiento", protesis: "Diario", implantes: "Normal" },
]

const processSteps = [
  {
    number: "01",
    title: "Valoración Inicial",
    description: "Evaluación completa de tu boca, encías y hueso disponible. Tomamos fotografías, radiografías y moldes para diseñar tu prótesis ideal."
  },
  {
    number: "02",
    title: "Diseño Personalizado",
    description: "Seleccionamos juntos el color, forma y tamaño de los dientes. Usamos tecnología CAD/CAM para crear un diseño digital preciso."
  },
  {
    number: "03",
    title: "Prueba y Ajuste",
    description: "Realizamos pruebas intermedias para verificar la estética, oclusión y comodidad. Hacemos los ajustes necesarios para un ajuste perfecto."
  },
  {
    number: "04",
    title: "Entrega Final",
    description: "Te entregamos tu prótesis terminada con instrucciones de uso y cuidado. Programamos controles de seguimiento para garantizar tu satisfacción."
  },
]

const faqs = [
  {
    question: "¿Cuánto tiempo dura una prótesis dental?",
    answer: "Las prótesis removibles bien cuidadas duran entre 5-10 años. Las prótesis fijas (coronas y puentes) pueden durar 15-20 años o más con buen mantenimiento. La durabilidad depende del cuidado diario y los controles periódicos."
  },
  {
    question: "¿Es doloroso usar prótesis dental?",
    answer: "Al principio puede haber un período de adaptación de 1-2 semanas donde sentirás la prótesis 'extraña'. Esto es normal. Si hay dolor persistente, hacemos ajustes sin costo adicional hasta lograr tu comodidad total."
  },
  {
    question: "¿Puedo comer normalmente con prótesis?",
    answer: "Sí, pero recomendamos empezar con alimentos blandos y gradualmente incorporar texturas más duras. Las prótesis de alta succión y las fijas ofrecen mayor capacidad masticatoria que las removibles convencionales."
  },
  {
    question: "¿Qué es mejor, prótesis o implantes?",
    answer: "Depende de tu caso específico. Los implantes ofrecen mayor comodidad y preservan el hueso, pero requieren mayor inversión inicial. Las prótesis son más accesibles económicamente y el tratamiento es más rápido. En tu valoración te explicamos cuál es mejor para ti."
  },
  {
    question: "¿Cómo cuido mi prótesis removible?",
    answer: "Retírala cada noche para limpiarla con cepillo suave y jabón neutro. Sumérgela en solución limpiadora. Nunca uses agua caliente. Guárdala húmeda. Cepilla tus encías y paladar antes de colocarla nuevamente."
  },
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Prótesis Dental en{" "}
                  <span className="text-accent">Cali</span>
                </h1>
                <p className="mt-4 text-2xl text-white/90 font-medium">
                  Soluciones para reemplazar dientes perdidos
                </p>
                <p className="mt-6 text-lg text-white/80 leading-relaxed">
                  Recupera tu sonrisa y función masticatoria con prótesis dentales de alta calidad. 
                  Ofrecemos prótesis tipo Acker, removibles, de alta succión y fijas con tecnología CAD/CAM.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    <a
                      href="https://wa.me/573235944931?text=Hola,%20quiero%20información%20sobre%20prótesis%20dental%20en%20Cali"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Agendar valoración
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2993.JPG-WO713zMc9atFAEDO1oyLAHgpUhrb9Z.jpeg"
                  alt="Prótesis dental en Cali - Dr. Weider"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Opciones de Tratamiento
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Tipos de <span className="text-primary">Prótesis Dental</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Cada tipo de prótesis tiene ventajas específicas. Te ayudamos a elegir la mejor opción para tu caso.
              </p>
            </div>
            
            <div className="space-y-12">
              {prosthesisTypes.map((type, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`relative aspect-video lg:aspect-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <Image
                        src={type.image}
                        alt={type.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{type.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{type.description}</p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {type.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-accent flex-shrink-0" />
                            <span className="text-sm text-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-primary font-medium">
                        Ideal para: {type.ideal}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Prótesis vs <span className="text-accent">Implantes</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                ¿No sabes cuál elegir? Esta comparación te ayudará a entender las diferencias.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-xl overflow-hidden border border-border">
                <div className="grid grid-cols-3 bg-primary text-white p-4">
                  <span className="font-semibold">Característica</span>
                  <span className="font-semibold text-center">Prótesis</span>
                  <span className="font-semibold text-center">Implantes</span>
                </div>
                {comparisonTable.map((row, index) => (
                  <div key={index} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}`}>
                    <span className="text-foreground font-medium">{row.feature}</span>
                    <span className="text-muted-foreground text-center">{row.protesis}</span>
                    <span className="text-muted-foreground text-center">{row.implantes}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  ¿Quieres saber cuál es mejor para tu caso específico?
                </p>
                <Button asChild variant="outline" size="lg">
                  <Link href="/implantes-dentales-cali">
                    Ver información de implantes
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Tu Tratamiento
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Proceso de <span className="text-primary">Elaboración</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-card p-6 rounded-xl border border-border h-full">
                    <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
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
              Recupera tu sonrisa hoy
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agenda una valoración gratuita y conoce la mejor opción de prótesis para tu caso.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
              >
                <a
                  href="https://wa.me/573235944931?text=Hola,%20quiero%20agendar%20una%20valoración%20para%20prótesis%20dental%20en%20Cali"
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
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <a href="tel:+573235944931">
                  Llamar: 323 594 4931
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
                      Solución permanente para dientes perdidos con coronas sobre implantes.
                    </p>
                    <span className="text-primary text-sm font-medium mt-4 inline-flex items-center gap-1">
                      Ver más <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/diseno-de-sonrisa-cali" className="group">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Diseño de Sonrisa en Cali
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Combina prótesis con carillas para un diseño estético completo.
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
                      Conoce nuestros precios de prótesis e implantes dentales.
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
