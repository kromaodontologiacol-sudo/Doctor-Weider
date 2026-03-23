import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MessageCircle, Calendar, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Opciones para Reemplazar Dientes Perdidos en Cali | Dr Weider",
  description: "Conoce todas las opciones para reemplazar dientes perdidos: implantes, prótesis fijas, removibles y puentes. Descubre cuál es mejor para ti en Cali.",
  keywords: "reemplazar dientes perdidos, opciones dientes perdidos, alternativas dientes faltantes, rehabilitacion oral cali",
}

const options = [
  {
    title: "Implantes Dentales",
    description: "La solución más avanzada. Un tornillo de titanio reemplaza la raíz y sostiene una corona de cerámica.",
    pros: ["Duran toda la vida", "Lucen naturales", "Preservan el hueso", "Comen cualquier alimento"],
    cons: ["Mayor inversión inicial", "Requiere cirugía", "Proceso de varios meses"],
    ideal: "Pacientes que buscan la mejor solución a largo plazo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png",
  },
  {
    title: "Puente Dental Fijo",
    description: "Coronas unidas que se apoyan en los dientes vecinos. No se remueve.",
    pros: ["No requiere cirugía", "Resultado rápido", "Buena estética", "Menor costo que implantes"],
    cons: ["Desgasta dientes sanos", "No previene pérdida ósea", "Dura 10-15 años"],
    ideal: "Cuando hay dientes sanos a los lados y no se desea cirugía",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2983.JPG-Uq8RpwOmPxRm6G2zNO5kX76aAvEqYf.jpeg",
  },
  {
    title: "Prótesis Removible Parcial",
    description: "Aparato con dientes artificiales que puedes quitar para limpiar.",
    pros: ["Económica", "Sin cirugía", "Proceso rápido", "Fácil reparación"],
    cons: ["Menos cómoda", "Puede moverse", "Requiere adhesivo", "Hay que quitarla para dormir"],
    ideal: "Presupuesto limitado o contraindicación para cirugía",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protesis-removible-completa-EyWUDXxp4ySIYKOQp9Fobw9cjgJovW.jpg",
  },
  {
    title: "Dentadura Completa",
    description: "Reemplaza todos los dientes de una arcada. Puede ser convencional o de alta succión.",
    pros: ["Solución completa", "Económica", "Rápida"],
    cons: ["Menos retención", "Puede requerir adhesivo", "Pérdida ósea progresiva"],
    ideal: "Pérdida total de dientes sin opción de implantes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%284%29-3RqbuwkL4JIyfDMMgjtZODhSS36MUo.jpg",
  },
]

export default function OpcionesReemplazarDientes() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <article className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                Rehabilitación
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                28 de diciembre, 2023
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
              Opciones para Reemplazar Dientes Perdidos
            </h1>

            <div className="prose prose-lg max-w-none mt-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Perder un diente no solo afecta tu sonrisa, sino también tu salud bucal general. Los dientes 
                vecinos pueden moverse, el hueso se pierde gradualmente y la masticación se ve afectada. 
                La buena noticia es que hoy existen múltiples opciones para <strong>reemplazar dientes perdidos 
                en Cali</strong>. Te explicamos cada una.
              </p>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                ¿Por Qué es Importante Reemplazar un Diente Perdido?
              </h2>
              <ul className="text-muted-foreground space-y-2 my-4">
                <li><strong>Los dientes vecinos se mueven:</strong> Buscando ocupar el espacio vacío</li>
                <li><strong>El hueso se pierde:</strong> Sin la raíz, el hueso se reabsorbe</li>
                <li><strong>Cambios en la mordida:</strong> Puede causar dolor en la mandíbula</li>
                <li><strong>Problemas de masticación:</strong> Afecta la digestión</li>
                <li><strong>Impacto estético:</strong> Afecta la confianza al sonreír</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mt-12 mb-8">
              Todas las Opciones Disponibles
            </h2>

            <div className="space-y-8">
              {options.map((option, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg">
                  <div className="grid md:grid-cols-3">
                    <div className="md:col-span-1">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-cover min-h-[200px]"
                      />
                    </div>
                    <CardContent className="md:col-span-2 p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{option.title}</h3>
                      <p className="text-muted-foreground mb-4">{option.description}</p>
                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold text-green-600 mb-2">Ventajas:</h4>
                          <ul className="space-y-1">
                            {option.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-amber-600 mb-2">Consideraciones:</h4>
                          <ul className="space-y-1">
                            {option.cons.map((con, i) => (
                              <li key={i} className="text-sm text-muted-foreground">• {con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <p className="text-sm bg-muted/50 p-3 rounded-lg">
                        <strong>Ideal para:</strong> {option.ideal}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-none mt-12">
              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                ¿Cuál Opción es Mejor para Ti?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                La mejor opción depende de varios factores: cuántos dientes faltan, dónde están ubicados, 
                el estado de tu hueso, tu salud general y tu presupuesto. Lo ideal es una valoración 
                profesional donde el odontólogo pueda examinar tu caso específico.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                En nuestra clínica en Cali ofrecemos <strong>valoración gratuita</strong> donde evaluamos 
                tu caso, tomamos radiografías y te explicamos todas las opciones disponibles con sus 
                respectivos presupuestos. Así puedes tomar una decisión informada.
              </p>
            </div>

            <div className="mt-12 p-8 bg-primary rounded-xl text-white text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Recupera tu Sonrisa Completa
              </h3>
              <p className="text-white/90 mb-6">
                Agenda tu valoración gratuita y conoce la mejor opción para reemplazar tus dientes perdidos.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <a
                  href="https://wa.me/573235944931?text=Hola,%20quiero%20conocer%20mis%20opciones%20para%20reemplazar%20dientes%20perdidos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Agendar Valoración Gratuita
                </a>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
