"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, CheckCircle, UserCheck } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface CandidateSectionProps {
  dictionary: Dictionary
}

export function CandidateSection({ dictionary }: CandidateSectionProps) {
  const locale = dictionary.locale
  const whatsappMessage = encodeURIComponent(dictionary.whatsapp.scheduleMessage)
  
  const content = locale === "es" ? {
    badge: "Descubre si eres candidato",
    title: "¿Eres candidato para implantes dentales?",
    subtitle: "Si te identificas con alguna de estas situaciones, los implantes pueden ser la solución ideal para ti:",
    criteria: [
      "Has perdido uno o más dientes",
      "Usas prótesis removible y quieres algo fijo",
      "Tienes dificultad para comer o masticar",
      "Te sientes incómodo al sonreír",
      "Tu dentadura actual te causa molestias",
      "Quieres una solución permanente y duradera"
    ],
    note: "La única forma de confirmarlo es con una valoración personalizada. En tu cita evaluamos tu caso específico y te explicamos las mejores opciones.",
    cta: "Solicitar mi valoración"
  } : {
    badge: "Find out if you're a candidate",
    title: "Are you a candidate for dental implants?",
    subtitle: "If you identify with any of these situations, implants may be the ideal solution for you:",
    criteria: [
      "You have lost one or more teeth",
      "You wear removable dentures and want something fixed",
      "You have difficulty eating or chewing",
      "You feel uncomfortable when smiling",
      "Your current dentures cause discomfort",
      "You want a permanent and lasting solution"
    ],
    note: "The only way to confirm is with a personalized consultation. During your appointment, we evaluate your specific case and explain the best options.",
    cta: "Request my consultation"
  }

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <UserCheck className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium text-sm">{content.badge}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              {content.title}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              {content.subtitle}
            </p>
            
            <div className="space-y-4 mb-8">
              {content.criteria.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-muted-foreground italic mb-8 p-4 bg-muted/50 rounded-xl border-l-4 border-accent">
              {content.note}
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 font-semibold"
            >
              <a
                href={`https://wa.me/573235944931?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="h-6 w-6" />
                {content.cta}
              </a>
            </Button>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC06506-uv6FbyGz9WGMzhA4Li03ACBG7VoO7y.jpg"
                alt={locale === "es" ? "Consulta dental" : "Dental consultation"}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">+2000</p>
              <p className="text-sm">{locale === "es" ? "Pacientes felices" : "Happy patients"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
