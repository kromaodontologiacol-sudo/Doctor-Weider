import { Instagram, Youtube } from "lucide-react"

// TikTok icon component since lucide doesn't have it
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

const socialLinks = [
  {
    name: "TikTok",
    handle: "@doctorweider",
    url: "https://www.tiktok.com/@doctorweider",
    icon: TikTokIcon,
    color: "bg-black hover:bg-gray-800",
    followers: "Contenido educativo",
  },
  {
    name: "Instagram",
    handle: "@doctorweiderr",
    url: "https://www.instagram.com/doctorweiderr/",
    icon: Instagram,
    color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:opacity-90",
    followers: "Casos y novedades",
  },
  {
    name: "YouTube",
    handle: "Weider Gutiérrez",
    url: "https://www.youtube.com/c/WeiderGutierrez",
    icon: Youtube,
    color: "bg-red-600 hover:bg-red-700",
    followers: "Videos informativos",
  },
]

export function SocialMedia() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
            Redes Sociales
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Síguenos en{" "}
            <span className="text-accent">nuestras redes</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Mantente informado con contenido educativo, casos de éxito y las últimas 
            novedades en odontología.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl p-6 bg-white border border-border hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full ${social.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {social.name}
                </h3>
                <p className="text-primary font-medium mb-2">{social.handle}</p>
                <p className="text-sm text-muted-foreground">{social.followers}</p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            ¡Únete a nuestra comunidad y descubre tips para cuidar tu sonrisa!
          </p>
        </div>
      </div>
    </section>
  )
}
