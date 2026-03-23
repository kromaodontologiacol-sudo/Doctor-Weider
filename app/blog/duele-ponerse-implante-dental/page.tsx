import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageCircle, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "¿Duele Ponerse un Implante Dental? La Verdad | Dr Weider Cali",
  description: "¿Te da miedo el dolor de los implantes dentales? Te contamos la verdad sobre el procedimiento, la anestesia y la recuperación. Sin dolor en Cali.",
  keywords: "duele implante dental, dolor implante dental, anestesia implante dental, recuperacion implante dental",
}

export default function DueleImplante() {
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
                10 de enero, 2024
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
              ¿Duele Ponerse un Implante Dental?
            </h1>

            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2983.JPG-Uq8RpwOmPxRm6G2zNO5kX76aAvEqYf.jpeg"
              alt="Implante dental procedimiento"
              className="w-full rounded-xl my-8 shadow-lg"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                El miedo al dolor es una de las principales razones por las que muchas personas postergan 
                el tratamiento de <strong>implantes dentales</strong>. Es completamente normal tener esta 
                preocupación. En este artículo te contamos toda la verdad sobre lo que puedes esperar 
                durante y después del procedimiento.
              </p>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                Durante el Procedimiento: Sin Dolor
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                La respuesta corta es: <strong>no, no duele ponerse un implante dental</strong>. El procedimiento 
                se realiza con anestesia local, la misma que se usa para una extracción dental o un relleno. 
                Una vez que la anestesia hace efecto, no sentirás ningún dolor.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Lo que podrías sentir durante la cirugía es:
              </p>
              <ul className="text-muted-foreground space-y-2 my-4">
                <li>Presión leve mientras se coloca el implante</li>
                <li>Vibraciones de los instrumentos</li>
                <li>El sonido de los equipos (puedes usar audífonos si te incomoda)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Para pacientes con mucha ansiedad, también ofrecemos opciones de sedación consciente 
                que te permiten estar más relajado durante el procedimiento.
              </p>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                Después del Procedimiento: Molestia Controlable
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Una vez que pasa el efecto de la anestesia (3-4 horas después), es normal experimentar 
                cierta molestia. Sin embargo, la mayoría de nuestros pacientes reportan que el dolor 
                es mucho menor de lo que esperaban.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Lo que puedes esperar los primeros días:
              </p>
              <ul className="text-muted-foreground space-y-2 my-4">
                <li><strong>Día 1-2:</strong> Molestia moderada que se controla con analgésicos</li>
                <li><strong>Día 3-5:</strong> La molestia disminuye significativamente</li>
                <li><strong>Día 7:</strong> La mayoría de pacientes ya no necesitan analgésicos</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                Comparación: ¿Duele Más que una Extracción?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Curiosamente, la mayoría de pacientes reportan que un implante dental causa <strong>menos 
                molestia que una extracción dental</strong>. Esto se debe a que durante la colocación 
                del implante no se extrae tejido, sino que se crea cuidadosamente un espacio en el hueso.
              </p>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                Consejos para una Recuperación Sin Dolor
              </h2>
              <ul className="text-muted-foreground space-y-2 my-4">
                <li>Toma los medicamentos según las indicaciones</li>
                <li>Aplica hielo las primeras 24 horas</li>
                <li>Evita alimentos duros o calientes</li>
                <li>No fumes durante la recuperación</li>
                <li>Descansa el día del procedimiento</li>
                <li>Sigue todas las instrucciones postoperatorias</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                Nuestra Experiencia en Cali
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                En nuestra clínica en Cali, el Dr. Weider utiliza técnicas mínimamente invasivas y 
                protocolos de última generación que minimizan el trauma quirúrgico. Esto se traduce 
                en menos inflamación, menos dolor y una recuperación más rápida.
              </p>
            </div>

            <div className="mt-12 p-8 bg-primary rounded-xl text-white text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">
                ¿Tienes Más Preguntas sobre Implantes?
              </h3>
              <p className="text-white/90 mb-6">
                Agenda tu valoración y resolvemos todas tus dudas personalmente.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <a
                  href="https://wa.me/573235944931?text=Hola,%20tengo%20dudas%20sobre%20el%20procedimiento%20de%20implantes%20dentales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Resolver Dudas por WhatsApp
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
