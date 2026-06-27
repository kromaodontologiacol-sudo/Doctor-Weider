"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, MessageCircle, Building } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface ContactProps {
  dictionary: Dictionary
}

export function Contact({ dictionary }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const t = dictionary.contact
  const locale = dictionary.locale

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = locale === "en" 
      ? `Hi, I'm ${formData.name}. ${formData.message}. My email is ${formData.email} and my phone is ${formData.phone}.`
      : `Hola, soy ${formData.name}. ${formData.message}. Mi correo es ${formData.email} y mi teléfono ${formData.phone}.`
    window.open(
      `https://wa.me/573181898143?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    )
  }

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide uppercase">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            {t.title} <span className="text-primary">{t.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {t.formTitle}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background"
                  />
                  <Input
                    type="tel"
                    placeholder={t.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                    className="bg-background"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  {t.submitButton}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-border hover:border-accent/40 transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.phone}</h4>
                    <a
                      href="tel:+573181898143"
                      className="text-primary hover:underline"
                    >
                      318 189 8143
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-accent/40 transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.whatsapp}</h4>
                    <a
                      href="https://wa.me/573181898143"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      318 189 8143
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-accent/40 transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.schedule}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.scheduleTime}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-accent/40 transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.location}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.locationDetail}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t.locationDetail2}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.fullAddress}</h4>
                    <p className="text-muted-foreground">
                      {t.address}
                    </p>
                  </div>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.654!2d-76.5339!3d3.4048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a40c3a25a5f1%3A0x7e0c1f0a0f8e8e8e!2sCentro%20Comercial%20Ca%C3%B1averalejo!5e0!3m2!1ses!2sco!4v1650000000000!5m2!1ses!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={locale === "en" ? "Office location" : "Ubicación del consultorio"}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
