"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

const WOMPI_CHECKOUT_URL = "https://checkout.wompi.co/l/TU_LINK"

export function ProthesisForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    ciudad: "",
    whatsapp: "",
    dientesFaltantes: "",
    dientesSeguidos: "",
    presentaDolor: ""
  })
  const [showWarning, setShowWarning] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    if (field === "presentaDolor") {
      setShowWarning(value === "si")
    }
  }

  const isFormValid = () => {
    return (
      formData.nombre.trim() !== "" &&
      formData.ciudad.trim() !== "" &&
      formData.whatsapp.trim() !== "" &&
      formData.dientesFaltantes !== "" &&
      formData.dientesSeguidos !== "" &&
      formData.presentaDolor !== "" &&
      formData.presentaDolor !== "si"
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isFormValid()) return
    
    setIsSubmitting(true)
    
    // Store form data in sessionStorage for the shipping page
    sessionStorage.setItem("prothesisFormData", JSON.stringify(formData))
    
    // Redirect to Wompi checkout
    window.location.href = WOMPI_CHECKOUT_URL
  }

  return (
    <Card className="border-[#0066B3]/20 shadow-lg">
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nombre" className="text-foreground font-medium">
              Nombre completo
            </Label>
            <Input
              id="nombre"
              type="text"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={(e) => handleInputChange("nombre", e.target.value)}
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
            <Label htmlFor="whatsapp" className="text-foreground font-medium">
              WhatsApp
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="Ej: 3161234567"
              value={formData.whatsapp}
              onChange={(e) => handleInputChange("whatsapp", e.target.value)}
              required
              className="border-border focus:border-[#0066B3] focus:ring-[#0066B3]"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-foreground font-medium">
              ¿Cuántos dientes te faltan?
            </Label>
            <RadioGroup
              value={formData.dientesFaltantes}
              onValueChange={(value) => handleInputChange("dientesFaltantes", value)}
              className="flex gap-4"
            >
              {["1", "2", "3"].map((num) => (
                <div key={num} className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value={num} 
                    id={`dientes-${num}`}
                    className="border-[#0066B3] text-[#0066B3]"
                  />
                  <Label htmlFor={`dientes-${num}`} className="cursor-pointer">
                    {num}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label className="text-foreground font-medium">
              ¿Los dientes faltantes están seguidos (consecutivos)?
            </Label>
            <RadioGroup
              value={formData.dientesSeguidos}
              onValueChange={(value) => handleInputChange("dientesSeguidos", value)}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem 
                  value="si" 
                  id="seguidos-si"
                  className="border-[#0066B3] text-[#0066B3]"
                />
                <Label htmlFor="seguidos-si" className="cursor-pointer">Sí</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem 
                  value="no" 
                  id="seguidos-no"
                  className="border-[#0066B3] text-[#0066B3]"
                />
                <Label htmlFor="seguidos-no" className="cursor-pointer">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label className="text-foreground font-medium">
              ¿Presentas dolor actualmente?
            </Label>
            <RadioGroup
              value={formData.presentaDolor}
              onValueChange={(value) => handleInputChange("presentaDolor", value)}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem 
                  value="si" 
                  id="dolor-si"
                  className="border-[#0066B3] text-[#0066B3]"
                />
                <Label htmlFor="dolor-si" className="cursor-pointer">Sí</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem 
                  value="no" 
                  id="dolor-no"
                  className="border-[#0066B3] text-[#0066B3]"
                />
                <Label htmlFor="dolor-no" className="cursor-pointer">No</Label>
              </div>
            </RadioGroup>
          </div>

          {showWarning && (
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-red-800 font-medium">
                  Este servicio no aplica si presentas dolor
                </p>
                <p className="text-sm text-red-700 mt-1">
                  Te recomendamos consultar con un odontólogo presencialmente para evaluar tu caso.
                </p>
                <a
                  href="https://wa.me/573235944931?text=Hola,%20tengo%20dolor%20dental%20y%20necesito%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-red-700 underline hover:text-red-800"
                >
                  Contactar para consulta presencial
                </a>
              </div>
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={!isFormValid() || isSubmitting}
            className="w-full bg-[#C9A227] hover:bg-[#B8922A] text-white font-semibold text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Procesando..." : "Continuar al pago del kit"}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Al continuar, serás redirigido a la plataforma de pago seguro Wompi
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
