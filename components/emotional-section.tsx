"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, AlertCircle, Frown, Utensils, Bone } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface EmotionalSectionProps {
  dictionary: Dictionary
}

export function EmotionalSection({ dictionary }: EmotionalSectionProps) {
  const locale = dictionary.locale
  const whatsappMessage = encodeURIComponent(dictionary.whatsapp.scheduleMessage)
  
  const content = locale === "es" ? {
    title: "¿Has perdido un diente o te incomoda tu sonrisa?",
    problems: [
      {
        icon: Frown,
        title: "Inseguridad al sonreír",
        description: "Evitas sonreír en fotos o al hablar con otras personas porque te sientes incómodo con tu sonrisa."
      },
      {
        icon: Utensils,
        title: "Dificultad para comer",
        description: "No puedes disfrutar de tus comidas favoritas porque masticar se ha vuelto doloroso o difícil."
      },
      {
        icon: Bone,
        title: "Pérdida de hueso",
        description: "Sin dientes, el hueso maxilar se deteriora con el tiempo, afectando la estructura de tu rostro."
      }
    ],
    solution: "Los implantes dentales son la mejor solución para recuperar tu sonrisa y calidad de vida.",
    cta: "Agenda tu valoración gratuita"
  } : {
    title: "Have you lost a tooth or feel uncomfortable with your smile?",
    problems: [
      {
        icon: Frown,
        title: "Self-conscious when smiling",
        description: "You avoid smiling in photos or when talking to others because you feel uncomfortable with your smile."
      },
      {
        icon: Utensils,
        title: "Difficulty eating",
        description: "You can't enjoy your favorite foods because chewing has become painful or difficult."
      },
      {
        icon: Bone,
        title: "Bone loss",
        description: "Without teeth, the jawbone deteriorates over time, affecting the structure of your face."
      }
    ],
    solution: "Dental implants are the best solution to restore your smile and quality of life.",
    cta: "Schedule your free consultation"
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full mb-6">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <span className="text-destructive font-medium text-sm">
              {locale === "es" ? "Problema común" : "Common problem"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            {content.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {content.problems.map((problem, idx) => {
            const Icon = problem.icon
            return (
              <div 
                key={idx} 
                className="bg-background rounded-2xl p-8 shadow-lg border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
          <p className="text-xl md:text-2xl text-white font-medium mb-6 max-w-3xl mx-auto">
            {content.solution}
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
      </div>
    </section>
  )
}
