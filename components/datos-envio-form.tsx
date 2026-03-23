"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, MessageCircle } from "lucide-react"

interface ShippingData {
  nombreCompleto: string
  direccion: string
  ciudad: string
  telefono: string
  referencias: string
}

export function DatosEnvioForm() {
  const [formData, setFormData] = useState<ShippingData>({
    nombreCompleto: "",
    direccion: "",
    ciudad: "",
    telefono: "",
    referencias: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Pre-fill name and city from sessionStorage if available
  useEffect(() => {
    const storedData = sessionStorage.getItem("protesisFormData")
    if (storedData) {
      const parsed = JSON.parse(storedData)
      setFormData(prev => ({
        ...prev,
        nombreCompleto: parsed.nombre || "",
        ciudad: parsed.ciudad || "",
        telefono: parsed.whatsapp || "",
      }))
    }
  }, [])

  const isFormValid = 
    formData.nombreCompleto.trim() !== "" &&
    formData.direccion.trim() !== "" &&
    formData.ciudad.trim() !== "" &&
    formData.telefono.trim() !== ""

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormValid) return

    setIsSubmitting(true)

    // Build WhatsApp message
    const message = `Hola, ya realicé el pago del kit de prótesis dental en Doctor Weider.
Mis datos de envío son:

Nombre: ${formData.nombreCompleto}
Dirección: ${formData.direccion}
Ciudad: ${formData.ciudad}
Teléfono: ${formData.telefono}
${formData.referencias ? `Referencias: ${formData.referencias}` : ""}

Quedo atento.`

    // Clear session storage
    sessionStorage.removeItem("protesisFormData")

    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/573161994757?text=${encodeURIComponent(message)}`
    window.location.href = whatsappUrl
  }

  const handleChange = (field: keyof ShippingData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="border-2 border-primary/20">
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nombreCompleto">Nombre completo</Label>
            <Input
              id="nombreCompleto"
              placeholder="Tu nombre completo"
              value={formData.nombreCompleto}
              onChange={(e) => handleChange("nombreCompleto", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="direccion">Dirección completa</Label>
            <Input
              id="direccion"
              placeholder="Calle, número, barrio, edificio/casa"
              value={formData.direccion}
              onChange={(e) => handleChange("direccion", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ciudad">Ciudad</Label>
            <Input
              id="ciudad"
              placeholder="Ciudad de destino"
              value={formData.ciudad}
              onChange={(e) => handleChange("ciudad", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefono">Teléfono de contacto</Label>
            <Input
              id="telefono"
              type="tel"
              placeholder="Número de teléfono"
              value={formData.telefono}
              onChange={(e) => handleChange("telefono", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="referencias">Referencias (opcional)</Label>
            <Textarea
              id="referencias"
              placeholder="Indicaciones adicionales para la entrega"
              value={formData.referencias}
              onChange={(e) => handleChange("referencias", e.target.value)}
              rows={3}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6"
            disabled={isSubmitting || !isFormValid}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <MessageCircle className="w-5 h-5 mr-2" />
                Enviar datos por WhatsApp
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Al enviar, se abrirá WhatsApp con tus datos para confirmar el envío del kit.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
