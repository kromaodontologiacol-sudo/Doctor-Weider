import { Shield, Cpu, Heart, CheckCircle, Award, Sparkles } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries"

const icons = [Cpu, Shield, Award, CheckCircle, Heart, Sparkles]

interface WhyUsProps {
  dictionary: Dictionary
}

export function WhyUs({ dictionary }: WhyUsProps) {
  const t = dictionary.whyUs

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide uppercase">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            {t.title} <span className="text-primary">{t.titleHighlight}</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.reasons.map((reason, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all group"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
