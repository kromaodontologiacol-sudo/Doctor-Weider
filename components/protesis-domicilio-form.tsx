"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, Loader2 } from "lucide-react"

interface FormData {
  nombre: string
  ciudad: string
  whatsapp: string
  dientesFaltantes: string
  consecutivos: string
  dolor: string
}

export function ProtesisDomicilioForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    ciudad: "",
    whatsapp: "",
    dientesFaltantes: "",
    consecutivos: "",
    dolor: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isFormValid = 
    formData.nombre.trim() !== "" &&
    formData.ciudad.trim() !== "" &&
    formData.whatsapp.trim() !== "" &&
    formData.dientesFaltantes !== "" &&
    formData.consecutivos !== "" &&
    formData.dolor !== ""

  const isEligible = 
    formData.consecutivos === "si" && 
    formData.dolor === "no" &&
    ["1", "2", "3"].includes(formData.dientesFaltantes)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!isFormValid) {
      setError("Por favor completa todos los campos.")
      return
    }

    if (!isEligible) {
      setError("Lo sentimos, tu caso requiere evaluación presencial. Te recomendamos agendar una cita con el Dr. Weider.")
      return
    }

    setIsSubmitting(true)

    // Store form data in sessionStorage for the shipping page
    sessionStorage.setItem("protesisFormData", JSON.stringify(formData))

    // Redirect to Wompi checkout
    // Replace TU_LINK with actual Wompi checkout link
    window.location.href = "https://checkout.wompi.co/l/TU_LINK"
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setError(null)
  }

  return (
    <Card className="border-2 border-primary/20">
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre completo</Label>
            <Input
              id="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ciudad">Ciudad</Label>
            <Input
              id="ciudad"
              placeholder="Ciudad donde vives"
              value={formData.ciudad}
              onChange={(e) => handleChange("ciudad", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="Número de WhatsApp"
              value={formData.whatsapp}
              onChange={(e) => handleChange("whatsapp", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dientesFaltantes">¿Cuántos dientes te faltan?</Label>
            <Select
              value={formData.dientesFaltantes}
              onValueChange={(value) => handleChange("dientesFaltantes", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 diente</SelectItem>
                <SelectItem value="2">2 dientes</SelectItem>
                <SelectItem value="3">3 dientes</SelectItem>
                <SelectItem value="mas">Más de 3 dientes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label>¿Están consecutivos (uno al lado del otro)?</Label>
            <RadioGroup
              value={formData.consecutivos}
              onValueChange={(value) => handleChange("consecutivos", value)}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="si" id="consecutivos-si" />
                <Label htmlFor="consecutivos-si" className="font-normal cursor-pointer">Sí</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="consecutivos-no" />
                <Label htmlFor="consecutivos-no" className="font-normal cursor-pointer">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label>¿Presentas dolor o infección actualmente?</Label>
            <RadioGroup
              value={formData.dolor}
              onValueChange={(value) => handleChange("dolor", value)}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="si" id="dolor-si" />
                <Label htmlFor="dolor-si" className="font-normal cursor-pointer">Sí</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="dolor-no" />
                <Label htmlFor="dolor-no" className="font-normal cursor-pointer">No</Label>
              </div>
            </RadioGroup>
          </div>

          {error && (
            <div className="flex items-start gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6"
            disabled={isSubmitting || !isFormValid}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Procesando...
              </>
            ) : (
              "Continuar al pago del kit"
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Al continuar, serás redirigido a la pasarela de pago segura de Wompi.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
