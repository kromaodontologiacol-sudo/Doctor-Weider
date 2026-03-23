"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Clock, Shield } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface UrgencyCtaProps {
  dictionary: Dictionary
}

export function UrgencyCta({ dictionary }: UrgencyCtaProps) {
  const locale = dictionary.locale
  const whatsappMessage = encodeURIComponent(dictionary.whatsapp.scheduleMessage)
  
  const content = locale === "es" ? {
    title: "Agenda hoy tu valoración",
    features: [
      { icon: Clock, text: "Te responderemos en minutos" },
      { icon: Shield, text: "Sin compromiso" }
    ],
    cta: "Agendar por WhatsApp ahora"
  } : {
    title: "Schedule your consultation today",
    features: [
      { icon: Clock, text: "We'll respond within minutes" },
      { icon: Shield, text: "No commitment required" }
    ],
    cta: "Schedule via WhatsApp now"
  }

  return (
    <section className="py-16 bg-primary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-8">
          {content.title}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {content.features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="flex items-center gap-2 text-white/90">
                <Icon className="h-5 w-5 text-accent" />
                <span className="text-lg">{feature.text}</span>
              </div>
            )
          })}
        </div>
        
        <Button
          asChild
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-8 font-bold shadow-2xl"
        >
          <a
            href={`https://wa.me/573235944931?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <MessageCircle className="h-7 w-7" />
            {content.cta}
          </a>
        </Button>
      </div>
    </section>
  )
}
