import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog de Odontología | Implantes, Prótesis y Salud Dental | Dr Weider",
  description: "Artículos sobre implantes dentales, prótesis, diseño de sonrisa y salud bucal en Cali. Consejos del Dr Weider para cuidar tu sonrisa.",
  keywords: "blog odontología cali, artículos implantes dentales, consejos salud dental, información prótesis dental",
}

const articles = [
  {
    slug: "cuanto-cuesta-implante-dental-cali",
    title: "¿Cuánto Cuesta un Implante Dental en Cali?",
    excerpt: "Conoce los factores que determinan el precio de un implante dental en Cali y qué incluye el tratamiento completo.",
    date: "2024-01-15",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png",
    category: "Implantes",
  },
  {
    slug: "duele-ponerse-implante-dental",
    title: "¿Duele Ponerse un Implante Dental?",
    excerpt: "Resolvemos tus dudas sobre el dolor durante y después del procedimiento de implantes dentales.",
    date: "2024-01-10",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2983.JPG-Uq8RpwOmPxRm6G2zNO5kX76aAvEqYf.jpeg",
    category: "Implantes",
  },
  {
    slug: "implantes-vs-protesis-cual-mejor",
    title: "Implantes vs Prótesis: ¿Cuál es Mejor?",
    excerpt: "Comparamos las ventajas y desventajas de implantes dentales y prótesis removibles para ayudarte a elegir.",
    date: "2024-01-05",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protesis-removible-completa-EyWUDXxp4ySIYKOQp9Fobw9cjgJovW.jpg",
    category: "Comparativas",
  },
  {
    slug: "que-hacer-dolor-dental-intenso",
    title: "¿Qué Hacer Ante un Dolor Dental Intenso?",
    excerpt: "Guía de primeros auxilios para el dolor de muelas y cuándo acudir a urgencias odontológicas en Cali.",
    date: "2024-01-01",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oeXrlCif4wPM2JnD6gUD2c023KOF0w.png",
    category: "Urgencias",
  },
  {
    slug: "opciones-reemplazar-dientes-perdidos",
    title: "Opciones para Reemplazar Dientes Perdidos",
    excerpt: "Conoce todas las alternativas disponibles en Cali para recuperar tu sonrisa completa.",
    date: "2023-12-28",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2993.JPG-WO713zMc9atFAEDO1oyLAHgpUhrb9Z.jpeg",
    category: "Rehabilitación",
  },
]

export default function Blog() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
              Blog de Odontología
            </h1>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              Artículos informativos sobre implantes dentales, prótesis, diseño de sonrisa y 
              consejos para mantener tu salud bucal. Por el Dr. Weider en Cali.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(article.date).toLocaleDateString("es-CO", { 
                          year: "numeric", 
                          month: "short", 
                          day: "numeric" 
                        })}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Leer artículo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
