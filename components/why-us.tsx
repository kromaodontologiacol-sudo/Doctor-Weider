import { Shield, Cpu, Heart, CheckCircle, Award, Sparkles } from "lucide-react"

const reasons = [
  {
    icon: Cpu,
    title: "Planeación Digital Personalizada",
    description:
      "Utilizamos software de simulación 3D y tomografía computarizada para planificar cada tratamiento con precisión milimétrica.",
  },
  {
    icon: Shield,
    title: "Protocolos de Bioseguridad",
    description:
      "Cumplimos con los más estrictos protocolos de esterilización y bioseguridad para tu tranquilidad.",
  },
  {
    icon: Award,
    title: "Tecnología Avanzada",
    description:
      "Equipos de última generación incluyendo scanner intraoral, radiografía digital y sistema CAD/CAM.",
  },
  {
    icon: CheckCircle,
    title: "Resultados Funcionales y Estéticos",
    description:
      "Cada tratamiento busca no solo la funcionalidad sino también la estética natural de tu sonrisa.",
  },
  {
    icon: Heart,
    title: "Atención Cálida y Profesional",
    description:
      "Un equipo humano comprometido con tu bienestar, que te acompaña en cada paso de tu tratamiento.",
  },
  {
    icon: Sparkles,
    title: "Experiencia Comprobada",
    description:
      "Más de 15 años de experiencia transformando sonrisas y más de 500 implantes exitosos.",
  },
]

export function WhyUs() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide uppercase">
            Nuestra Diferencia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            ¿Por qué <span className="text-primary">elegirnos</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Combinamos experiencia, tecnología y un trato humano excepcional 
            para ofrecerte la mejor atención odontológica en Cali.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
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
