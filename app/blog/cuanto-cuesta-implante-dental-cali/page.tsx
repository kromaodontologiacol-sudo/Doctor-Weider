import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageCircle, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "¿Cuánto Cuesta un Implante Dental en Cali? Precio 2024 | Dr Weider",
  description: "Conoce el precio de implantes dentales en Cali. Factores que determinan el costo, qué incluye el tratamiento y opciones de financiamiento con el Dr Weider.",
  keywords: "precio implante dental cali, cuanto cuesta implante dental, costo implantes dentales cali, implante dental economico cali",
}

export default function CuantoCuestaImplante() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <article className="py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                Implantes
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                15 de enero, 2024
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
              ¿Cuánto Cuesta un Implante Dental en Cali?
            </h1>

            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png"
              alt="Implantes dentales en Cali"
              className="w-full rounded-xl my-8 shadow-lg"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Una de las preguntas más frecuentes que recibimos en nuestra clínica es sobre el <strong>precio 
                de los implantes dentales en Cali</strong>. Es comprensible, ya que los implantes representan 
                una inversión importante en tu salud bucal. En este artículo te explicaremos todos los factores 
                que determinan el costo y qué puedes esperar.
              </p>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                Factores que Determinan el Precio de un Implante Dental
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                El costo de un implante dental en Cali puede variar significativamente dependiendo de varios factores:
              </p>
              <ul className="text-muted-foreground space-y-2 my-4">
                <li><strong>Marca del implante:</strong> Existen diferentes marcas con distintos niveles de calidad y precio. En nuestra clínica trabajamos con marcas reconocidas mundialmente como Neodent y Straumann.</li>
                <li><strong>Tipo de corona:</strong> La corona que va sobre el implante puede ser de diferentes materiales (metal-cerámica, cerámica pura, zirconio).</li>
                <li><strong>Procedimientos adicionales:</strong> Algunos pacientes necesitan injerto de hueso o elevación de seno maxilar antes del implante.</li>
                <li><strong>Complejidad del caso:</strong> La ubicación del implante y las condiciones de cada paciente influyen en el precio.</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                ¿Qué Incluye el Precio del Implante Dental?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Cuando te damos un presupuesto de implantes dentales en Cali, este generalmente incluye:
              </p>
              <ul className="text-muted-foreground space-y-2 my-4">
                <li>Valoración inicial y planificación digital</li>
                <li>Radiografías y estudios necesarios</li>
                <li>El implante de titanio</li>
                <li>El pilar o aditamento protésico</li>
                <li>La corona definitiva</li>
                <li>Controles postoperatorios</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                ¿Por Qué los Implantes Son una Buena Inversión?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Aunque el costo inicial puede parecer alto comparado con otras opciones como prótesis removibles, 
                los <strong>implantes dentales son la única solución permanente</strong>. Con el cuidado adecuado, 
                un implante puede durar toda la vida, mientras que una prótesis removible necesita reemplazo 
                cada 5-7 años.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Además, los implantes:
              </p>
              <ul className="text-muted-foreground space-y-2 my-4">
                <li>Preservan el hueso de tu mandíbula</li>
                <li>No dañan los dientes vecinos</li>
                <li>Te permiten comer cualquier alimento</li>
                <li>Lucen y se sienten como dientes naturales</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                Opciones de Financiamiento
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Entendemos que el precio de los implantes dentales puede representar un desafío económico. 
                Por eso ofrecemos diferentes opciones de pago y financiamiento para que puedas acceder 
                al tratamiento que necesitas.
              </p>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                Valoración Gratuita
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                La mejor forma de conocer el <strong>precio exacto de tu implante dental en Cali</strong> es 
                agendando una valoración. En esta cita evaluamos tu caso particular, tomamos radiografías 
                y te damos un presupuesto personalizado sin compromiso.
              </p>
            </div>

            <div className="mt-12 p-8 bg-primary rounded-xl text-white text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">
                ¿Quieres Conocer el Precio de tu Implante?
              </h3>
              <p className="text-white/90 mb-6">
                Agenda tu valoración gratuita y obtén un presupuesto personalizado.
              </p>
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
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
