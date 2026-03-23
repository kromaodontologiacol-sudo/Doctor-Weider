import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { Check, ChevronRight } from "lucide-react"
import { DatosEnvioForm } from "@/components/datos-envio-form"

export const metadata: Metadata = {
  title: "Datos de Envío - Prótesis Dental | Doctor Weider",
  description: "Completa tus datos para recibir el kit de impresión dental en tu domicilio.",
  robots: "noindex, nofollow",
}

export default function DatosEnvioPage() {
  const dictionary = getDictionary("es")

  return (
    <>
      <Header dictionary={dictionary} locale="es" />
      <main className="min-h-screen bg-muted/30">
        <section className="pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
              {/* Success banner */}
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-semibold text-green-800">Pago recibido correctamente</h2>
                  <p className="text-sm text-green-700 mt-1">
                    Ahora necesitamos tus datos para enviarte el kit de impresión.
                  </p>
                </div>
              </div>

              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
                <Link href="/" className="hover:text-primary">Inicio</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/protesis-domicilio" className="hover:text-primary">Prótesis a Domicilio</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground">Datos de Envío</span>
              </nav>

              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                Completa tus datos para{" "}
                <span className="text-primary">enviarte el kit</span>
              </h1>
              <p className="text-muted-foreground mb-8">
                Ingresa tu dirección completa para que podamos enviar el kit de impresión dental a tu domicilio.
              </p>

              <DatosEnvioForm />
            </div>
          </div>
        </section>
      </main>
      <Footer dictionary={dictionary} locale="es" />
    </>
  )
}
