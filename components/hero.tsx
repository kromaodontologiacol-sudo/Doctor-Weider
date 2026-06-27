import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronDown, Star, CheckCircle, Phone } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface HeroProps {
  dictionary: Dictionary
}

export function Hero({ dictionary }: HeroProps) {
  const t = dictionary.hero
  const whatsappMessage = encodeURIComponent(dictionary.whatsapp.scheduleMessage)

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background with doctor image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(30, 58, 95, 0.95), rgba(30, 58, 95, 0.7)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC06506-uv6FbyGz9WGMzhA4Li03ACBG7VoO7y.jpg')",
        }}
      />
      
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">{t.badge}</span>
            </div>
            
            {/* H1 Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight">
              {t.title}{" "}
              <span className="text-accent">{t.titleHighlight}</span>
            </h1>
            
            {/* Subheadline */}
            <p className="mt-6 text-xl sm:text-2xl text-white/90 max-w-xl leading-relaxed font-medium">
              {t.subtitle}
            </p>
            
            {/* Features con checkmarks - MUY VISIBLE */}
            {t.features && (
              <div className="mt-6 flex flex-col gap-2">
                {t.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            )}
            
            {/* Precio visible */}
            {t.price && (
              <div className="mt-6 p-4 bg-accent/20 border border-accent/30 rounded-xl inline-block">
                <p className="text-2xl sm:text-3xl font-bold text-accent">{t.price}</p>
                <p className="text-white/80 text-sm">{t.priceUsd}</p>
              </div>
            )}
            
            {/* Urgencia */}
            {t.urgency && (
              <p className="mt-4 text-accent font-semibold text-lg animate-pulse">
                {t.urgency}
              </p>
            )}
            
            {/* CTAs - Principal y Secundario */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-7 font-semibold shadow-xl text-lg w-full sm:w-auto"
              >
                <a
                  href={`https://wa.me/573235944931?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  {t.cta}
                </a>
              </Button>
              
              {t.ctaSecondary && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 hover:bg-white/20 text-white text-base px-8 py-7 font-semibold text-lg w-full sm:w-auto"
                >
                  <a
                    href={`https://wa.me/573235944931?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <Phone className="h-6 w-6" />
                    {t.ctaSecondary}
                  </a>
                </Button>
              )}
            </div>
            
            {/* Stats */}
            <div className="mt-12 flex items-center gap-6 text-white/80 lg:justify-start justify-center flex-wrap">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">{t.stats.patients.value}</p>
                <p className="text-sm text-white/70">{t.stats.patients.label}</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">{t.stats.rating.value}</p>
                <p className="text-sm text-white/70">{t.stats.rating.label}</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">{t.stats.procedures.value}</p>
                <p className="text-sm text-white/70">{t.stats.procedures.label}</p>
              </div>
            </div>
          </div>
          
          {/* Doctor Image Card */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC05019-LJEfAuhcjABM1x44xouovrgNqeS6zQ.jpg"
                alt={t.doctorName}
                className="w-full h-[500px] object-cover"
                style={{ objectPosition: "center 30%" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pb-8">
                <p className="text-white font-serif text-2xl font-bold">{t.doctorName}</p>
                <p className="text-accent font-medium">{t.doctorTitle}</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 z-20 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg">
              <p className="font-bold text-lg">{t.teamBadge}</p>
              <p className="text-sm">{t.teamSubtitle}</p>
            </div>
          </div>
        </div>
      </div>
      
      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  )
}
