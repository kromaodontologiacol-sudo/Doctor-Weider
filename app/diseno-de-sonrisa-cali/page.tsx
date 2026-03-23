import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MessageCircle, Sparkles, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Diseño de Sonrisa en Cali | Carillas y Estética Dental | Dr Weider",
  description: "Diseño de sonrisa en Cali con el Dr Weider. Carillas dentales, blanqueamiento y estética dental para transformar tu sonrisa. Agenda tu valoración.",
  keywords: "diseño de sonrisa cali, carillas dentales cali, estética dental cali, blanqueamiento dental cali, sonrisa perfecta cali",
}

const treatments = [
  {
    title: "Carillas de Cerámica",
    description: "Láminas ultrafinas de porcelana que se adhieren a tus dientes para corregir color, forma y tamaño. Resultados naturales y duraderos.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AvGQsTOt9F7sT7DwzkvMG98VHonQUt.png",
  },
  {
    title: "Blanqueamiento Profesional",
    description: "Aclara tus dientes hasta 8 tonos en una sola sesión con tecnología LED. Resultados inmediatos y seguros.",
    image: "/images/blanqueamiento-antes-despues.jpg",
  },
  {
    title: "Coronas Estéticas",
    description: "Coronas de cerámica de alta estética que restauran dientes dañados luciendo completamente naturales.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2983.JPG-Uq8RpwOmPxRm6G2zNO5kX76aAvEqYf.jpeg",
  },
  {
    title: "Contorneado Dental",
    description: "Remodelamos el esmalte para corregir pequeñas imperfecciones en la forma de tus dientes.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-26%20at%205.08.27%20PM-60psGi6opt0KmYH3ojIgtlMMb8lv7A.jpeg",
  },
]

const benefits = [
  "Sonrisa armoniosa y natural",
  "Mayor confianza al sonreír",
  "Corrección de color y forma",
  "Resultados personalizados",
  "Procedimientos mínimamente invasivos",
  "Durabilidad comprobada",
]

const idealCases = [
  "Dientes manchados o amarillentos",
  "Dientes pequeños o desgastados",
  "Espacios entre los dientes (diastemas)",
  "Dientes torcidos o desalineados leves",
  "Dientes fracturados o astillados",
  "Sonrisa desproporcionada",
]

export default function DisenoSonrisaCali() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-26%20at%205.08.27%20PM-60psGi6opt0KmYH3ojIgtlMMb8lv7A.jpeg')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                  <Sparkles className="h-4 w-4" />
                  Estética Dental en Cali
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Diseño de Sonrisa en Cali: Transforma tu Sonrisa
                </h1>
                <p className="mt-6 text-lg text-white/90 leading-relaxed">
                  El diseño de sonrisa combina arte y ciencia dental para crear la sonrisa perfecta para ti. 
                  Con tecnología digital de última generación, podrás ver tu nueva sonrisa antes de iniciar 
                  el tratamiento.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <a
                      href="https://wa.me/573235944931?text=Hola,%20quiero%20información%20sobre%20diseño%20de%20sonrisa%20en%20Cali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Agenda tu Diseño de Sonrisa
                    </a>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-26%20at%205.08.27%20PM-60psGi6opt0KmYH3ojIgtlMMb8lv7A.jpeg"
                  alt="Diseño de sonrisa en Cali - Dr Weider"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                ¿Qué Incluye el Diseño de Sonrisa?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                El diseño de sonrisa es un tratamiento personalizado que puede incluir diferentes 
                procedimientos según tus necesidades.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatments.map((treatment, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{treatment.title}</h3>
                    <p className="text-muted-foreground text-sm">{treatment.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Casos Ideales y Beneficios */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  ¿Eres Candidato para Diseño de Sonrisa?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  El diseño de sonrisa es ideal para personas que desean mejorar la estética de su sonrisa. 
                  Estos son los casos más comunes que tratamos:
                </p>
                <ul className="space-y-3">
                  {idealCases.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Beneficios del Diseño de Sonrisa
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Transforma no solo tu sonrisa, sino también tu confianza y calidad de vida:
                </p>
                <ul className="space-y-3">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Antes y Después */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Resultados de Diseño de Sonrisa
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Mira la transformación que logramos en nuestros pacientes con diseño de sonrisa en Cali.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-26%20at%205.08.27%20PM-60psGi6opt0KmYH3ojIgtlMMb8lv7A.jpeg"
                  alt="Resultado de diseño de sonrisa"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="font-semibold text-foreground">Diseño de Sonrisa Completo</p>
                  <p className="text-sm text-muted-foreground">Carillas de cerámica + Blanqueamiento</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AvGQsTOt9F7sT7DwzkvMG98VHonQUt.png"
                  alt="Carillas dentales resultado"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="font-semibold text-foreground">Carillas de Porcelana</p>
                  <p className="text-sm text-muted-foreground">Transformación completa de sonrisa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-20 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">
                Proceso de Diseño de Sonrisa
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Consulta Digital", desc: "Tomamos fotos y escaneamos tu sonrisa para diseñar digitalmente." },
                { step: "2", title: "Diseño Virtual", desc: "Ves tu nueva sonrisa en pantalla antes de iniciar el tratamiento." },
                { step: "3", title: "Prueba Temporal", desc: "Probamos el diseño en tu boca para que apruebes el resultado." },
                { step: "4", title: "Sonrisa Final", desc: "Colocamos las carillas o tratamiento definitivo para tu nueva sonrisa." },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-10 text-center text-white">
              <Sparkles className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">
                Transforma tu Sonrisa en Cali
              </h2>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Agenda tu cita de diseño de sonrisa y descubre cómo puedes tener la sonrisa que siempre soñaste.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-6">
                  <a
                    href="https://wa.me/573235944931?text=Hola,%20quiero%20agendar%20mi%20diseño%20de%20sonrisa%20en%20Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-6 w-6" />
                    Agenda tu Diseño de Sonrisa
                  </a>
                </Button>
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
