import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Prótesis Dental en Cali | Tipos y Precios | Dr Weider",
  description: "Prótesis dental en Cali: removibles, fijas, tipo Acker y de alta succión. Soluciones para reemplazar dientes perdidos con el Dr Weider. Agenda tu valoración.",
  keywords: "prótesis dental cali, prótesis tipo acker cali, dentadura removible cali, prótesis fija cali, prótesis de alta succión cali",
}

const prosthesisTypes = [
  {
    title: "Prótesis Removibles Convencionales",
    description: "Dentaduras completas o parciales que puedes retirar para limpiar. Ideales como solución económica y funcional para reemplazar múltiples dientes.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protesis-removible-completa-EyWUDXxp4ySIYKOQp9Fobw9cjgJovW.jpg",
    features: ["Fácil mantenimiento", "Solución económica", "Adaptación rápida"],
  },
  {
    title: "Prótesis Tipo Acker",
    description: "Prótesis parciales con ganchos metálicos que se sujetan a los dientes naturales. Ofrecen mejor retención y estabilidad que las convencionales.",
    image: "/images/protesis-convencional.jpg",
    features: ["Mayor retención", "Diseño personalizado", "Durabilidad comprobada"],
  },
  {
    title: "Prótesis de Alta Succión",
    description: "Dentaduras diseñadas con técnicas especiales que proporcionan retención excepcional sin adhesivos. La mejor opción en prótesis removibles.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%284%29-3RqbuwkL4JIyfDMMgjtZODhSS36MUo.jpg",
    features: ["Sin adhesivos", "Máxima comodidad", "Retención superior"],
  },
  {
    title: "Prótesis Fijas sobre Implantes",
    description: "Coronas y puentes fijos que se atornillan sobre implantes dentales. La solución más parecida a dientes naturales.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2983.JPG-Uq8RpwOmPxRm6G2zNO5kX76aAvEqYf.jpeg",
    features: ["No se remueven", "Estética natural", "Función completa"],
  },
]

export default function ProtesisDentalCali() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protesis-removible-completa-EyWUDXxp4ySIYKOQp9Fobw9cjgJovW.jpg')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                Rehabilitación Oral en Cali
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Prótesis Dental en Cali: Soluciones para Reemplazar Dientes Perdidos
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                Recupera la función y estética de tu sonrisa con nuestras prótesis dentales en Cali. 
                Ofrecemos opciones removibles, fijas, tipo Acker y de alta succión adaptadas a tus necesidades 
                y presupuesto.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <a
                    href="https://wa.me/573235944931?text=Hola,%20quiero%20información%20sobre%20prótesis%20dental%20en%20Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Agenda tu Valoración
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Prótesis */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Tipos de Prótesis Dental en Cali
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Conoce las diferentes opciones de prótesis dental que ofrecemos en nuestra clínica.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {prosthesisTypes.map((type, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{type.title}</h3>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Prótesis vs Implantes */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  ¿Prótesis Dental o Implantes? ¿Cuál Elegir?
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  La elección entre prótesis dental e implantes depende de varios factores: tu salud bucal, 
                  cantidad de hueso disponible, presupuesto y preferencias personales.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-foreground mb-2">Elige Prótesis Removible si:</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>- Buscas una solución más económica</li>
                      <li>- No eres candidato para cirugía</li>
                      <li>- Necesitas reemplazar muchos dientes</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-foreground mb-2">Elige Implantes si:</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>- Quieres una solución permanente</li>
                      <li>- Valoras la comodidad máxima</li>
                      <li>- Deseas preservar el hueso</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-6 text-lg text-muted-foreground">
                  <strong>Lo mejor:</strong> Agenda una valoración gratuita y el Dr. Weider te recomendará 
                  la mejor opción para tu caso específico.
                </p>
              </div>
              <div className="bg-primary text-white rounded-2xl p-8">
                <h3 className="text-2xl font-serif font-bold mb-4">Valoración Personalizada</h3>
                <p className="text-white/90 mb-6">
                  Cada paciente es único. Evaluamos tu caso particular para recomendarte la mejor solución 
                  de prótesis dental en Cali.
                </p>
                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <a
                    href="https://wa.me/573235944931?text=Hola,%20quiero%20una%20valoración%20para%20prótesis%20dental%20en%20Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Agenda tu Cita por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Proceso para Obtener tu Prótesis Dental
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {[
                  { step: "1", title: "Valoración Inicial", desc: "Examen completo de tu boca, radiografías y evaluación de tus necesidades." },
                  { step: "2", title: "Toma de Impresiones", desc: "Impresiones digitales o convencionales precisas de tu boca." },
                  { step: "3", title: "Diseño y Fabricación", desc: "Tu prótesis se diseña y fabrica en laboratorio dental certificado." },
                  { step: "4", title: "Prueba y Ajustes", desc: "Verificamos el ajuste, color y comodidad de tu prótesis." },
                  { step: "5", title: "Entrega Final", desc: "Recibes tu prótesis lista para usar con instrucciones de cuidado." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Recupera tu Sonrisa con Prótesis Dental en Cali
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              No vivas con espacios vacíos en tu sonrisa. Agenda tu valoración y conoce la mejor 
              opción de prótesis dental para ti.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-6">
                <a
                  href="https://wa.me/573235944931?text=Hola,%20quiero%20información%20sobre%20prótesis%20dental%20en%20Cali"
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
