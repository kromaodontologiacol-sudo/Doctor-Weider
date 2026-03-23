import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronDown, Star, DollarSign, Award, Globe, CheckCircle } from "lucide-react"

export function HeroEN() {
  return (
    <section
      id="home"
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
              <span className="text-white/90 text-sm font-medium">Trusted by local and international patients</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight">
              Dental Implants in{" "}
              <span className="text-accent">Cali, Colombia</span>
            </h1>
            
            <p className="mt-6 text-xl sm:text-2xl text-white/90 max-w-xl leading-relaxed font-medium">
              Save up to 70% on dental implants compared to the US
            </p>

            {/* Price comparison - highly visible */}
            <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl max-w-lg lg:mx-0 mx-auto">
              <div className="flex items-center justify-between gap-4 text-center">
                <div>
                  <p className="text-sm text-white/70">In the US</p>
                  <p className="text-xl font-bold text-white/60 line-through">$3,000 - $5,000</p>
                </div>
                <div className="text-accent font-bold text-xl">vs</div>
                <div>
                  <p className="text-sm text-white/70">In Cali, Colombia</p>
                  <p className="text-xl font-bold text-accent">from $380 USD</p>
                </div>
              </div>
              <p className="text-xs text-white/60 text-center mt-2">*Approximate price, updated for 2026</p>
            </div>

            {/* Highly visible bullets */}
            <ul className="mt-6 space-y-3 max-w-lg lg:mx-0 mx-auto">
              <li className="flex items-center gap-3 text-white">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-lg">Starting from $380 USD (approximate price, updated for 2026)</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-lg">High-quality materials and techniques</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-lg">Personalized treatment plan</span>
              </li>
            </ul>

            {/* International Focus Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg lg:mx-0 mx-auto">
              <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <DollarSign className="w-6 h-6 text-accent mb-1" />
                <span className="text-white text-xs font-medium">Save 60-70%</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Award className="w-6 h-6 text-accent mb-1" />
                <span className="text-white text-xs font-medium">High Quality</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Globe className="w-6 h-6 text-accent mb-1" />
                <span className="text-white text-xs font-medium">English Support</span>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-10 py-7 font-semibold shadow-xl text-lg"
              >
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20information%20about%20dental%20implants%20in%20Cali%20and%20a%20personalized%20treatment%20plan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  Get your personalized treatment plan now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-base px-8 py-7 font-semibold"
              >
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20to%20speak%20about%20dental%20tourism%20in%20Cali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  Contact us via WhatsApp
                </a>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-white/80 lg:justify-start justify-center flex-wrap">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">+2000</p>
                <p className="text-sm text-white/70">Happy patients</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">5.0</p>
                <p className="text-sm text-white/70">Google Rating</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">+5000</p>
                <p className="text-sm text-white/70">Successful procedures</p>
              </div>
            </div>
          </div>
          
          {/* Doctor Image Card */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC05019-LJEfAuhcjABM1x44xouovrgNqeS6zQ.jpg"
                alt="Doctor Weider Gutierrez - Dental Implant Specialist in Cali"
                className="w-full h-[500px] object-cover"
                style={{ objectPosition: "center 30%" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pb-8">
                <p className="text-white font-serif text-2xl font-bold">Dr. Weider Gutierrez</p>
                <p className="text-accent font-medium">Implantology Specialist</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 z-20 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg">
              <p className="font-bold text-lg">Team of Professionals</p>
              <p className="text-sm">Personalized care in English</p>
            </div>
          </div>
        </div>
      </div>
      
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  )
}
