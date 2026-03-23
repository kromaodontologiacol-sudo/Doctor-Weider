import { Button } from "@/components/ui/button"
import { MessageCircle, Search, FileText, Stethoscope, Smile } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Valoración y Diagnóstico",
    description:
      "Evaluación completa con radiografías digitales y scanner 3D. Analizamos tu caso y te explicamos todas las opciones de tratamiento.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Planeación Personalizada",
    description:
      "Diseñamos tu plan de tratamiento a medida usando tecnología de simulación digital. Podrás ver tu resultado antes de comenzar.",
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "Procedimiento Clínico",
    description:
      "Realizamos el tratamiento con técnicas mínimamente invasivas, anestesia efectiva y protocolos que garantizan tu comodidad.",
  },
  {
    number: "04",
    icon: Smile,
    title: "Seguimiento y Mantenimiento",
    description:
      "Te acompañamos en tu recuperación con controles programados y te enseñamos cómo mantener tu sonrisa perfecta.",
  },
]

export function Process() {
  return (
    <section id="proceso" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide uppercase">
            Tu Experiencia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Un proceso <span className="text-primary">paso a paso</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde tu primera consulta hasta tu sonrisa renovada, te guiamos 
            en cada etapa de tu transformación dental.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
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
              href="https://wa.me/573235944931?text=Hola,%20quiero%20iniciar%20mi%20valoración"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Inicia tu proceso hoy
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
