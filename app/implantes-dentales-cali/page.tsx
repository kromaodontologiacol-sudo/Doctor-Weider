import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MessageCircle, Star, Shield, Clock, Award, Zap, AlertCircle, Phone, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Implantes Dentales en Cali | Precio y Especialista | Dr Weider",
  description: "Implantes dentales en Cali con el Dr Weider, especialista en implantología oral. Recupera tu sonrisa con seguridad. Conoce el proceso, beneficios y precio de implantes dentales en Cali.",
  keywords: "implantes dentales cali, precio implante dental cali, especialista en implantes cali, implantología oral cali, implante dental cali",
}

const testimonials = [
  {
    name: "María García",
    text: "Después de años con prótesis removible, el Dr Weider me colocó implantes. Ahora como de todo sin preocuparme. ¡Mi vida cambió!",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez", 
    text: "Tenía miedo al procedimiento pero fue mucho más sencillo de lo que esperaba. El doctor explica todo con paciencia.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    text: "Excelente atención y resultados. Mis implantes se ven completamente naturales. Muy recomendado.",
    rating: 5,
  },
]

const faqs = [
  {
    question: "¿Duele ponerse un implante dental?",
    answer: "El procedimiento se realiza con anestesia local, por lo que no sentirás dolor durante la cirugía. Después es normal tener una leve molestia que se controla fácilmente con medicamentos. La mayoría de pacientes reportan menos molestia de la esperada.",
  },
  {
    question: "¿Cuánto duran los implantes dentales?",
    answer: "Con el cuidado adecuado, los implantes dentales pueden durar toda la vida. Son la solución más duradera para reemplazar dientes perdidos, a diferencia de las prótesis que requieren reemplazo cada varios años.",
  },
  {
    question: "¿Es seguro el procedimiento?",
    answer: "Sí. Los implantes dentales tienen una tasa de éxito del 95-98%. Utilizamos implantes de titanio de alta calidad y tecnología de punta para garantizar resultados seguros y predecibles.",
  },
  {
    question: "¿Soy candidato para implantes?",
    answer: "La mayoría de adultos con buena salud general son candidatos. Se requiere tener suficiente hueso, aunque esto se puede solucionar con injertos. En la valoración evaluamos tu caso específico sin compromiso.",
  },
]

export default function ImplantesDentalesCali() {
  return (
    <>
      <Header />
      <main>
        {/* 1. HERO - Primer pantallazo */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                  Especialista en Implantología Oral
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Implantes Dentales en Cali con el Dr Weider
                </h1>
                <p className="mt-6 text-xl text-white/90 leading-relaxed">
                  Recupera tu sonrisa con confianza y vuelve a disfrutar sin molestias
                </p>
                
                {/* Bullets muy visibles */}
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-lg">Procedimiento seguro y predecible</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-lg">Resultados estéticos y funcionales</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-lg">Atención personalizada</span>
                  </li>
                </ul>

                {/* Botones CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-xl">
                    <a
                      href="https://wa.me/573235944931?text=Hola,%20quiero%20información%20sobre%20implantes%20dentales%20en%20Cali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Agenda tu valoración por WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6">
                    <a
                      href="https://wa.me/573235944931?text=Hola,%20quiero%20hablar%20con%20el%20especialista%20sobre%20implantes%20dentales"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Phone className="h-5 w-5" />
                      Habla con el especialista ahora
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

        {/* 2. PRUEBA SOCIAL INMEDIATA */}
        <section className="py-12 bg-white border-b">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xl font-semibold text-foreground">
                Pacientes en Cali ya recuperaron su sonrisa
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-muted/30 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 3. PROBLEMA - Conexión emocional */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  ¿Has perdido un diente o te incomoda tu sonrisa?
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">
                      <strong className="text-foreground">Inseguridad al sonreír:</strong> Evitas mostrar los dientes en fotos o al hablar con otras personas.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">
                      <strong className="text-foreground">Dificultad para comer:</strong> No puedes disfrutar tus alimentos favoritos porque te cuesta masticar.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">
                      <strong className="text-foreground">Pérdida de hueso:</strong> Cada día que pasa sin reemplazar el diente, pierdes más hueso maxilar.
                    </p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
                  <p className="text-lg font-semibold text-foreground">
                    Los implantes dentales son la solución más efectiva para recuperar tu sonrisa y calidad de vida.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <a
                      href="https://wa.me/573235944931?text=Hola,%20quiero%20recuperar%20mi%20sonrisa%20con%20implantes%20dentales"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Quiero recuperar mi sonrisa
                    </a>
                  </Button>
                </div>
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

        {/* 4. SOLUCIÓN - Venta clara */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Implantes dentales: la mejor solución para reemplazar dientes perdidos
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Un implante dental es un pequeño tornillo de titanio que se coloca en el hueso maxilar 
                para reemplazar la raíz de un diente perdido. Sobre él se coloca una corona de cerámica 
                que luce y funciona exactamente como un diente natural.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-6 text-left">
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Implantes dentales
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Fijos y permanentes</li>
                      <li>Se sienten como dientes naturales</li>
                      <li>No necesitan adhesivos</li>
                      <li>Preservan el hueso</li>
                      <li>Duran toda la vida</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border border-muted">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-muted-foreground mb-4 flex items-center gap-2">
                      Prótesis removibles
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Se quitan y se ponen</li>
                      <li>Se pueden mover al comer</li>
                      <li>Requieren adhesivos</li>
                      <li>No evitan pérdida ósea</li>
                      <li>Duran 5-10 años</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 5. BENEFICIOS - Escaneable */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Beneficios de los Implantes Dentales
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Función masticatoria</h3>
                  <p className="text-sm text-muted-foreground">Come cualquier alimento sin limitaciones</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Estética natural</h3>
                  <p className="text-sm text-muted-foreground">Lucen exactamente como dientes naturales</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Preserva el hueso</h3>
                  <p className="text-sm text-muted-foreground">Evita la pérdida ósea progresiva</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Alta durabilidad</h3>
                  <p className="text-sm text-muted-foreground">Duran toda la vida con buen cuidado</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <a
                  href="https://wa.me/573235944931?text=Hola,%20quiero%20conocer%20más%20sobre%20los%20beneficios%20de%20los%20implantes%20dentales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Consulta sin compromiso
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 6. PROCESO - Reduce miedo */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                ¿Cómo es el proceso?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Un procedimiento sencillo en 4 pasos
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-2xl">
                  1
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Valoración</h3>
                <p className="text-muted-foreground text-sm">Evaluación completa con radiografía digital para planificar tu tratamiento</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-2xl">
                  2
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Colocación</h3>
                <p className="text-muted-foreground text-sm">Procedimiento con anestesia local, sin dolor ni molestias</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-2xl">
                  3
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Cicatrización</h3>
                <p className="text-muted-foreground text-sm">El implante se integra con tu hueso en 3-4 meses</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-2xl">
                  4
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Corona final</h3>
                <p className="text-muted-foreground text-sm">Colocamos la corona de cerámica. Tu sonrisa completa</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PRECIO */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                ¿Cuánto cuesta un implante dental en Cali?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                El precio de un implante dental en Cali depende de cada caso particular. 
                Durante la valoración evaluamos clínicamente tus necesidades y te entregamos 
                un presupuesto personalizado sin compromiso.
              </p>
              <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Implante dental desde $1.500.000 COP (aprox. $380 USD)
                </p>
                <p className="text-muted-foreground">
                  Ofrecemos opciones de pago flexibles para que puedas acceder a tu tratamiento
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10">
                  <a
                    href="https://wa.me/573235944931?text=Hola,%20quiero%20conocer%20el%20precio%20de%20implantes%20dentales%20en%20Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Consultar precio por WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold">
                  <Link href="/precio-implante-dental-cali" className="flex items-center gap-2">
                    Ver precios detallados
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 8. OBJECIONES - FAQ */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Resolvemos tus dudas
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-muted/30 border-0">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <a
                  href="https://wa.me/573235944931?text=Hola,%20tengo%20dudas%20sobre%20implantes%20dentales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  ¿Tienes más preguntas? Escríbenos
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 9. URGENCIA / CTA FUERTE */}
        <section className="py-16 bg-accent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-accent-foreground">
              Agenda tu valoración hoy y recibe un plan de tratamiento personalizado
            </h2>
            <p className="mt-4 text-lg text-accent-foreground/80">
              La primera consulta es sin compromiso. Evaluamos tu caso y te damos opciones.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-12 py-6 shadow-xl">
                <a
                  href="https://wa.me/573235944931?text=Hola,%20quiero%20agendar%20mi%20valoración%20para%20implantes%20dentales%20en%20Cali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-6 w-6" />
                  Agendar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 10. CIERRE CON AUTORIDAD - El Doctor */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Tu especialista en implantes
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  Atendido por el Dr Weider
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Odontólogo con más de 10 años de experiencia y formación especializada en implantología oral. 
                  Ha realizado cientos de procedimientos exitosos de implantes dentales en Cali.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Especialista en implantología oral</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Formación continua en las últimas técnicas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Enfoque en procedimientos mínimamente invasivos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Atención personalizada para cada paciente</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <a
                      href="https://wa.me/573235944931?text=Hola%20Dr%20Weider,%20quiero%20agendar%20una%20cita%20para%20implantes%20dentales"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Contactar al Dr Weider
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-80 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-40 h-40 text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
