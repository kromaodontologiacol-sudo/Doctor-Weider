"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Package } from "lucide-react"

const WHATSAPP_NUMBER = "573161994757"

export function ShippingForm() {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    direccion: "",
    ciudad: "",
    telefono: "",
    referencias: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Pre-fill data from sessionStorage if available
  useEffect(() => {
    const storedData = sessionStorage.getItem("prothesisFormData")
    if (storedData) {
      const parsed = JSON.parse(storedData)
      setFormData(prev => ({
        ...prev,
        nombreCompleto: parsed.nombre || "",
        ciudad: parsed.ciudad || "",
        telefono: parsed.whatsapp || ""
      }))
    }
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const isFormValid = () => {
    return (
      formData.nombreCompleto.trim() !== "" &&
      formData.direccion.trim() !== "" &&
      formData.ciudad.trim() !== "" &&
      formData.telefono.trim() !== ""
    )
  }

  const generateWhatsAppMessage = () => {
    const message = `Hola, ya realicé el pago del kit de prótesis dental.
Mis datos son:

Nombre: ${formData.nombreCompleto}
Dirección: ${formData.direccion}
Ciudad: ${formData.ciudad}
Teléfono: ${formData.telefono}
${formData.referencias ? `Referencias: ${formData.referencias}` : ""}

Quedo atento.`
    
    return encodeURIComponent(message)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isFormValid()) return
    
    setIsSubmitting(true)
    
    // Clear stored form data
    sessionStorage.removeItem("prothesisFormData")
    
    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`
    window.open(whatsappUrl, "_blank")
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-green-800 mb-2">
            ¡Datos enviados!
          </h2>
          <p className="text-green-700 mb-6">
            Hemos recibido tus datos. Te enviaremos el kit de impresión pronto.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-green-600">
            <Package className="w-4 h-4" />
            <span>Recibirás tu kit en 3-5 días hábiles</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-[#0066B3]/20 shadow-lg">
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nombreCompleto" className="text-foreground font-medium">
              Nombre completo
            </Label>
            <Input
              id="nombreCompleto"
              type="text"
              placeholder="Tu nombre completo"
              value={formData.nombreCompleto}
              onChange={(e) => handleInputChange("nombreCompleto", e.target.value)}
              required
              className="border-border focus:border-[#0066B3] focus:ring-[#0066B3]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="direccion" className="text-foreground font-medium">
              Dirección completa
            </Label>
            <Input
              id="direccion"
              type="text"
              placeholder="Calle, número, barrio, conjunto"
              value={formData.direccion}
              onChange={(e) => handleInputChange("direccion", e.target.value)}
              required
              className="border-border focus:border-[#0066B3] focus:ring-[#0066B3]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ciudad" className="text-foreground font-medium">
              Ciudad
            </Label>
            <Input
              id="ciudad"
              type="text"
              placeholder="¿En qué ciudad te encuentras?"
              value={formData.ciudad}
              onChange={(e) => handleInputChange("ciudad", e.target.value)}
              required
              className="border-border focus:border-[#0066B3] focus:ring-[#0066B3]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefono" className="text-foreground font-medium">
              Número de teléfono
            </Label>
            <Input
              id="telefono"
              type="tel"
              placeholder="Ej: 3161234567"
              value={formData.telefono}
              onChange={(e) => handleInputChange("telefono", e.target.value)}
              required
              className="border-border focus:border-[#0066B3] focus:ring-[#0066B3]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="referencias" className="text-foreground font-medium">
              Referencias de ubicación <span className="text-muted-foreground font-normal">(opcional)</span>
            </Label>
            <Textarea
              id="referencias"
              placeholder="Ej: Al lado de la farmacia, portería azul..."
              value={formData.referencias}
              onChange={(e) => handleInputChange("referencias", e.target.value)}
              rows={3}
              className="border-border focus:border-[#0066B3] focus:ring-[#0066B3] resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={!isFormValid() || isSubmitting}
            className="w-full bg-[#C9A227] hover:bg-[#B8922A] text-white font-semibold text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar datos"}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Al enviar, tus datos serán compartidos por WhatsApp para coordinar el envío
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
