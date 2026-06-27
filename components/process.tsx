import { Button } from "@/components/ui/button"
import { MessageCircle, Search, FileText, Stethoscope, Smile } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries"

const stepIcons = [Search, FileText, Stethoscope, Smile]

interface ProcessProps {
  dictionary: Dictionary
}

export function Process({ dictionary }: ProcessProps) {
  const t = dictionary.process
  const whatsappMessage = encodeURIComponent(dictionary.whatsapp.startProcess)

  return (
    <section id="proceso" className="py-20 bg-background">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.steps.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < t.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
                )}
                
                <div className="text-center group">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-lg">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 font-semibold shadow-lg"
          >
            <a
              href={`https://wa.me/573181898143?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              {t.cta}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
