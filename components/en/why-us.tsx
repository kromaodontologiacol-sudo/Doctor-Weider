import { Shield, Cpu, Heart, CheckCircle, Award, Sparkles, DollarSign, Globe } from "lucide-react"

const reasons = [
  {
    icon: DollarSign,
    title: "Save 60-70% vs US Prices",
    description:
      "Get premium dental care at a fraction of US costs. Our prices start from $380 USD per implant, including high-quality materials.",
  },
  {
    icon: Cpu,
    title: "Digital Treatment Planning",
    description:
      "We use 3D simulation software and CT scans to plan each treatment with millimetric precision for optimal results.",
  },
  {
    icon: Shield,
    title: "Biosecurity Protocols",
    description:
      "We comply with the strictest sterilization and biosecurity protocols for your peace of mind and safety.",
  },
  {
    icon: Award,
    title: "Advanced Technology",
    description:
      "State-of-the-art equipment including intraoral scanner, digital radiography, and CAD/CAM system.",
  },
  {
    icon: Globe,
    title: "International Patient Care",
    description:
      "English-speaking staff, assistance with travel planning, and personalized care for international patients.",
  },
  {
    icon: Sparkles,
    title: "Proven Experience",
    description:
      "Over 15 years of experience transforming smiles and more than 500 successful implants placed.",
  },
]

export function WhyUsEN() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Why patients choose <span className="text-primary">Cali for dental treatment</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining experience, technology, and exceptional human care 
            to offer you the best dental attention in Cali, Colombia.
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
