import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, RefreshCw, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Error en el Pago - Prótesis Dental a Domicilio | Dr. Weider",
  description: "Hubo un problema procesando tu pago. Intenta nuevamente.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ErrorPagoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Card className="border-red-200 shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            
            <h1 className="text-2xl font-serif font-bold text-foreground mb-2">
              No se pudo procesar el pago
            </h1>
            <p className="text-muted-foreground mb-8">
              Hubo un problema al procesar tu pago. Por favor, intenta nuevamente.
            </p>
            
            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-[#C9A227] hover:bg-[#B8922A] text-white font-semibold"
              >
                <Link href="/protesis-dental-domicilio-colombia#formulario">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reintentar pago
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-[#0066B3]/30 text-[#0066B3] hover:bg-[#0066B3]/5"
              >
                <a
                  href="https://wa.me/573161994757?text=Hola,%20tuve%20un%20problema%20con%20el%20pago%20del%20kit%20de%20prótesis%20dental"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contactar soporte
                </a>
              </Button>
            </div>
            
            <p className="mt-8 text-xs text-muted-foreground">
              Si el problema persiste, contáctanos por WhatsApp y te ayudaremos a completar tu compra.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
