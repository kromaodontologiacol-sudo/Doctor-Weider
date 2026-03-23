import type { Metadata } from "next"
import { ShippingForm } from "./components/shipping-form"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Datos de Envío - Prótesis Dental a Domicilio | Dr. Weider",
  description: "Completa tus datos de envío para recibir tu kit de impresión dental en casa.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function DatosEnvioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0066B3]/5 to-white">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:py-20">
        {/* Success Message */}
        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <span className="text-green-800 font-medium">Pago recibido correctamente</span>
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Completa tus datos para enviarte el kit
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Hemos recibido tu pago correctamente. Ahora necesitamos tus datos para enviarte el kit de impresión.
          </p>
        </div>

        <ShippingForm />
      </div>
    </main>
  )
}
