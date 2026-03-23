import Link from "next/link"
import { Instagram, Youtube } from "lucide-react"

// TikTok icon component
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

const services = [
  { name: "Implantes Dentales", href: "#servicios" },
  { name: "Diseño de Sonrisa", href: "#servicios" },
  { name: "Prótesis Dental", href: "#servicios" },
  { name: "Ortodoncia", href: "#servicios" },
  { name: "Rehabilitación Oral", href: "#servicios" },
]

const quickLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Proceso", href: "#proceso" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "El Doctor", href: "#doctor" },
  { name: "Contacto", href: "#contacto" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-serif font-bold text-white">
                Doctor Weider
              </span>
              <span className="block text-xs tracking-widest text-accent uppercase mt-1">
                Odontología y Tecnología
              </span>
            </Link>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Especialista en implantología oral y reconstructiva. 
              Transformando sonrisas en Cali con tecnología de punta.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.tiktok.com/@doctorweider"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/doctorweiderr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/c/WeiderGutierrez"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="tel:+573235944931" className="hover:text-accent transition-colors">
                  Tel: 323 594 4931
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/573235944931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp: 323 594 4931
                </a>
              </li>
              <li className="pt-2">
                <span className="text-accent font-medium">Horario:</span>
              </li>
              <li>Lun - Sáb: 8am - 6pm</li>
              <li className="pt-2">
                C.C. Cañaveralejo
              </li>
              <li>Local 27 - Pampa Linda</li>
              <li>Cali, Valle del Cauca</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © 2024 Doctor Weider Gutiérrez. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <Link href="#" className="hover:text-accent transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
