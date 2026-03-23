import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronDown, Star } from "lucide-react"

export function Hero() {
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
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">5.0 en Google</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight">
              Tu sonrisa en las{" "}
              <span className="text-accent">mejores manos</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-xl leading-relaxed">
              Odontología con tecnología de punta. Implantes, diseño de sonrisa, 
              prótesis, ortodoncia y rehabilitación oral en Cali.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-10 py-7 font-semibold shadow-xl text-lg"
              >
                <a
                  href="https://wa.me/573235944931?text=Hola,%20quiero%20agendar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  Agendar cita por WhatsApp
                </a>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-white/80 lg:justify-start justify-center flex-wrap">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">+2000</p>
                <p className="text-sm text-white/70">Pacientes felices</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">5.0</p>
                <p className="text-sm text-white/70">Calificación Google</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">+5000</p>
                <p className="text-sm text-white/70">Procedimientos exitosos</p>
              </div>
            </div>
          </div>
          
          {/* Doctor Image Card */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC05019-LJEfAuhcjABM1x44xouovrgNqeS6zQ.jpg"
                alt="Doctor Weider Gutiérrez"
                className="w-full h-[500px] object-cover"
                style={{ objectPosition: "center 30%" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pb-8">
                <p className="text-white font-serif text-2xl font-bold">Dr. Weider Gutiérrez</p>
                <p className="text-accent font-medium">Especialista en Implantología</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 z-20 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg">
              <p className="font-bold text-lg">Equipo de Profesionales</p>
              <p className="text-sm">Atención personalizada</p>
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
