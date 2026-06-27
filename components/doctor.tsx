import { Button } from "@/components/ui/button"
import { MessageCircle, GraduationCap, Users, Sparkles, Shield } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries"

const credentialIcons = [GraduationCap, Shield, Users, Sparkles]

interface DoctorProps {
  dictionary: Dictionary
}

export function Doctor({ dictionary }: DoctorProps) {
  const t = dictionary.doctor
  const whatsappMessage = encodeURIComponent(dictionary.whatsapp.scheduleMessage)

  return (
    <section id="doctor" className="py-20 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide uppercase">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            {t.title}{" "}
            <span className="text-primary">{t.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Doctor Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC05019-LJEfAuhcjABM1x44xouovrgNqeS6zQ.jpg"
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC04054-ycMkmDFGxRiAzl0HAQwAYWD89W4uqu.jpg"
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground leading-tight">
              {t.name}
            </h3>
            <p className="mt-2 text-lg text-primary font-medium">
              {t.role}
            </p>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t.bio}
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {t.credentials.map((credential, index) => {
                const Icon = credentialIcons[index]
                return (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border/60">
                    <div className={`w-10 h-10 rounded-full ${index % 2 === 0 ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{credential.title}</p>
                      <p className="text-xs text-muted-foreground">{credential.subtitle}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Team stats */}
            <div className="mt-8 flex items-center gap-8 flex-wrap">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{t.stats.patients.value}</p>
                <p className="text-sm text-muted-foreground">{t.stats.patients.label}</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">{t.stats.rating.value}</p>
                <p className="text-sm text-muted-foreground">{t.stats.rating.label}</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{t.stats.reviews.value}</p>
                <p className="text-sm text-muted-foreground">{t.stats.reviews.label}</p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 font-semibold shadow-lg"
            >
              <a
                href={`https://wa.me/573235944931?text=${whatsappMessage}`}
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
      </div>
    </section>
  )
}
