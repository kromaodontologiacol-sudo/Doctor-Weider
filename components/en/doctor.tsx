import { Button } from "@/components/ui/button"
import { MessageCircle, Award, GraduationCap, Heart, Users, Sparkles, Shield } from "lucide-react"

export function DoctorEN() {
  return (
    <section id="doctor" className="py-20 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide uppercase">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            A team committed to{" "}
            <span className="text-primary">your smile</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized professionals working together to provide you the best 
            dental care in Cali, Colombia.
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
                    alt="Dr. Weider Gutierrez at the clinic"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC04054-ycMkmDFGxRiAzl0HAQwAYWD89W4uqu.jpg"
                    alt="Dr. Weider Gutierrez smiling"
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
              Dr. Weider Gutierrez
            </h3>
            <p className="mt-2 text-lg text-primary font-medium">
              Director - Oral Implantology and Reconstructive Specialist
            </p>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              Dentist specialized in oral and reconstructive implantology, with 
              certification in the dental management of systemically compromised 
              patients. He leads a multidisciplinary team of professionals 
              committed to transforming smiles in Cali, Colombia.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border/60">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Oral Implantology</p>
                  <p className="text-xs text-muted-foreground">Certified Specialist</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border/60">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Systemic Patients</p>
                  <p className="text-xs text-muted-foreground">Specialized Care</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border/60">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Professional Team</p>
                  <p className="text-xs text-muted-foreground">Comprehensive Care</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border/60">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Digital Technology</p>
                  <p className="text-xs text-muted-foreground">Cutting-Edge Equipment</p>
                </div>
              </div>
            </div>

            {/* Team stats */}
            <div className="mt-8 flex items-center gap-8 flex-wrap">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">+2000</p>
                <p className="text-sm text-muted-foreground">Happy patients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">5.0</p>
                <p className="text-sm text-muted-foreground">Google Reviews</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">22+</p>
                <p className="text-sm text-muted-foreground">Positive reviews</p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 font-semibold shadow-lg"
            >
              <a
                href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20to%20schedule%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Schedule your appointment with our team
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
