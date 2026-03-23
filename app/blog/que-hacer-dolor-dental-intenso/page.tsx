import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageCircle, Calendar, AlertTriangle, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "¿Qué Hacer Ante un Dolor Dental Intenso? Guía de Urgencias | Dr Weider",
  description: "Guía de primeros auxilios para dolor de muelas severo. Qué hacer, qué evitar y cuándo ir a urgencias odontológicas en Cali.",
  keywords: "dolor dental intenso, dolor de muelas que hacer, urgencia dental cali, primeros auxilios dolor dental",
}

export default function DolorDentalIntenso() {
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
              <span className="text-sm font-semibold px-3 py-1 bg-red-100 text-red-600 rounded-full">
                Urgencias
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                1 de enero, 2024
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
              ¿Qué Hacer Ante un Dolor Dental Intenso?
            </h1>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-8 flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-red-800 mb-2">¿Tienes una emergencia dental ahora?</h3>
                <p className="text-red-700 text-sm mb-3">
                  Si tienes dolor severo, hinchazón facial o fiebre, contáctanos inmediatamente.
                </p>
                <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                  <a href="https://wa.me/573235944931?text=URGENCIA:%20Tengo%20dolor%20dental%20intenso" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Atención Urgente
                  </a>
                </Button>
              </div>
            </div>

            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oeXrlCif4wPM2JnD6gUD2c023KOF0w.png"
              alt="Dolor dental intenso"
              className="w-full rounded-xl my-8 shadow-lg"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                El <strong>dolor dental intenso</strong> puede ser una de las experiencias más desagradables. 
                Puede aparecer de repente en mitad de la noche o ir aumentando gradualmente hasta volverse 
                insoportable. En este artículo te explicamos qué hacer mientras consigues atención profesional.
              </p>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                Causas Comunes del Dolor Dental Severo
              </h2>
              <ul className="text-muted-foreground space-y-2 my-4">
                <li><strong>Caries profunda:</strong> Cuando la caries llega al nervio del diente</li>
                <li><strong>Absceso dental:</strong> Infección con acumulación de pus</li>
                <li><strong>Diente fracturado:</strong> Puede exponer el nervio</li>
                <li><strong>Enfermedad de las encías:</strong> Periodontitis avanzada</li>
                <li><strong>Bruxismo:</strong> Desgaste por apretar los dientes</li>
                <li><strong>Muela del juicio:</strong> Impactada o en erupción</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                Primeros Auxilios para el Dolor Dental
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Mientras consigues cita con el odontólogo, puedes hacer lo siguiente:
              </p>
              <ol className="text-muted-foreground space-y-4 my-4">
                <li>
                  <strong>1. Toma un analgésico</strong>
                  <p>Ibuprofeno (400-600mg) o acetaminofén según tu tolerancia. Sigue las indicaciones del empaque.</p>
                </li>
                <li>
                  <strong>2. Aplica compresas frías</strong>
                  <p>Coloca hielo envuelto en tela en la mejilla del lado afectado. 15 minutos sí, 15 minutos no.</p>
                </li>
                <li>
                  <strong>3. Enjuaga con agua tibia y sal</strong>
                  <p>Media cucharadita de sal en un vaso de agua tibia. Enjuaga suavemente.</p>
                </li>
                <li>
                  <strong>4. Mantén la cabeza elevada</strong>
                  <p>Al acostarte, usa almohadas extra para reducir la presión en la zona.</p>
                </li>
                <li>
                  <strong>5. Evita alimentos extremos</strong>
                  <p>Nada muy frío, muy caliente, muy dulce o muy ácido.</p>
                </li>
              </ol>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                Lo que NO Debes Hacer
              </h2>
              <ul className="text-muted-foreground space-y-2 my-4">
                <li><strong>NO apliques aspirina directamente en la encía</strong> - Puede quemar el tejido</li>
                <li><strong>NO ignores el dolor</strong> - Puede empeorar significativamente</li>
                <li><strong>NO uses calor</strong> - Puede aumentar la inflamación si hay infección</li>
                <li><strong>NO te automediques con antibióticos</strong> - Necesitan prescripción</li>
                <li><strong>NO consumas alcohol para "adormecer"</strong> - No funciona y puede interactuar con medicamentos</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                ¿Cuándo es una Emergencia Real?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Debes buscar atención de <strong>urgencias odontológicas en Cali</strong> inmediatamente si tienes:
              </p>
              <ul className="text-muted-foreground space-y-2 my-4">
                <li>Hinchazón en la cara o cuello</li>
                <li>Fiebre junto con el dolor dental</li>
                <li>Dificultad para respirar o tragar</li>
                <li>Dolor que no cede con analgésicos</li>
                <li>Sangrado que no para</li>
                <li>Trauma dental (diente roto o caído)</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                Tratamientos para el Dolor Dental
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                El tratamiento definitivo depende de la causa del dolor:
              </p>
              <ul className="text-muted-foreground space-y-2 my-4">
                <li><strong>Caries profunda:</strong> Endodoncia (tratamiento de conducto) o extracción</li>
                <li><strong>Absceso:</strong> Drenaje, antibióticos y tratamiento del diente</li>
                <li><strong>Fractura:</strong> Corona o extracción según el caso</li>
                <li><strong>Cordales:</strong> Extracción quirúrgica</li>
              </ul>
            </div>

            <div className="mt-12 p-8 bg-red-600 rounded-xl text-white text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">
                ¿Tienes Dolor Dental Ahora?
              </h3>
              <p className="text-white/95 mb-6">
                No esperes a que empeore. Contáctanos para atención prioritaria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-red-600 hover:bg-white/90 font-semibold">
                  <a
                    href="https://wa.me/573235944931?text=URGENCIA:%20Tengo%20dolor%20dental%20intenso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Urgente
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <a href="tel:+573235944931" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Llamar: 323 594 4931
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
