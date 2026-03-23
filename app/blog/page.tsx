import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog Odontológico | Dr. Weider - Implantes Dentales Cali",
  description: "Artículos informativos sobre implantes dentales, cuidado bucal, diseño de sonrisa y más. Información actualizada del Dr. Weider, especialista en Cali.",
  keywords: "blog dental, artículos implantes dentales, cuidado bucal, odontología Cali, consejos dentales",
  alternates: {
    canonical: "https://doctorweider.com/blog",
    languages: {
      "es": "https://doctorweider.com/blog",
      "en": "https://doctorweider.com/en/blog"
    }
  },
  openGraph: {
    title: "Blog Odontológico | Dr. Weider",
    description: "Artículos informativos sobre implantes dentales y cuidado bucal",
    url: "https://doctorweider.com/blog",
    locale: "es_CO",
    type: "website"
  }
}

const blogPosts = [
  {
    slug: "cuanto-duran-implantes-dentales",
    title: "¿Cuánto Duran los Implantes Dentales? Guía Completa 2026",
    excerpt: "Descubre la durabilidad real de los implantes dentales, factores que afectan su vida útil y cómo cuidarlos para que duren toda la vida. Información actualizada del Dr. Weider.",
    date: "15 Marzo 2026",
    readTime: "8 min",
    category: "Implantes Dentales",
    image: "/blog/duracion-implantes.jpg"
  },
  {
    slug: "implantes-vs-protesis-cual-elegir",
    title: "Implantes vs Prótesis Dental: ¿Cuál es Mejor para Ti?",
    excerpt: "Comparación detallada entre implantes dentales y prótesis removibles. Ventajas, desventajas, costos y recomendaciones según tu caso específico.",
    date: "10 Marzo 2026",
    readTime: "10 min",
    category: "Comparativas",
    image: "/blog/implantes-vs-protesis.jpg"
  },
  {
    slug: "cuidados-despues-implante-dental",
    title: "Cuidados Después de un Implante Dental: Guía Paso a Paso",
    excerpt: "Todo lo que necesitas saber sobre el postoperatorio de implantes dentales. Alimentación, higiene, medicamentos y señales de alerta que debes conocer.",
    date: "5 Marzo 2026",
    readTime: "7 min",
    category: "Cuidados",
    image: "/blog/cuidados-postoperatorio.jpg"
  },
  {
    slug: "miedo-al-dentista-como-superarlo",
    title: "Miedo al Dentista: Técnicas Efectivas para Superarlo",
    excerpt: "La ansiedad dental es más común de lo que crees. Conoce las técnicas modernas de sedación y estrategias psicológicas para una experiencia dental sin estrés.",
    date: "28 Febrero 2026",
    readTime: "6 min",
    category: "Bienestar",
    image: "/blog/miedo-dentista.jpg"
  },
  {
    slug: "precio-implantes-dentales-colombia-2026",
    title: "Precio de Implantes Dentales en Colombia 2026: Guía Actualizada",
    excerpt: "Análisis completo de costos de implantes dentales en Colombia. Por qué Cali es una excelente opción y cómo comparamos con precios internacionales.",
    date: "20 Febrero 2026",
    readTime: "9 min",
    category: "Precios",
    image: "/blog/precios-2026.jpg"
  }
]

export default function BlogPage() {
  const dictionary = getDictionary("es")

  return (
    <main className="min-h-screen bg-background">
      <Header dictionary={dictionary} locale="es" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Blog Odontológico
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Artículos sobre Salud Dental e Implantes
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Información actualizada y consejos del Dr. Weider para cuidar tu sonrisa. 
              Aprende sobre implantes dentales, tratamientos estéticos y salud bucal.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-6xl">🦷</span>
                  <p className="text-muted-foreground mt-4">Artículo Destacado</p>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 w-fit">
                  Destacado
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  ¿Cuánto Duran los Implantes Dentales? Guía Completa 2026
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Descubre la durabilidad real de los implantes dentales, factores que afectan su vida útil 
                  y cómo cuidarlos para que duren toda la vida. Información actualizada del Dr. Weider.
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    15 Marzo 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    8 min de lectura
                  </span>
                </div>
                <Link
                  href="/blog/cuanto-duran-implantes-dentales"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Leer artículo completo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Artículos Recientes
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article 
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Categorías
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Implantes Dentales", "Diseño de Sonrisa", "Prótesis", "Cuidados", "Precios", "Testimonios"].map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-card border border-border rounded-full text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            ¿Tienes Preguntas sobre tu Salud Dental?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            El Dr. Weider está listo para resolver todas tus dudas y ayudarte a recuperar tu sonrisa.
          </p>
          <a
            href="https://wa.me/573000000000?text=Hola,%20quiero%20información%20sobre%20implantes%20dentales%20en%20Cali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-background/90 transition-colors shadow-lg"
          >
            Agendar Valoración por WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/implantes-dentales-cali" className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors text-center">
              <span className="text-3xl mb-3 block">🦷</span>
              <h3 className="font-semibold text-foreground">Implantes Dentales</h3>
            </Link>
            <Link href="/diseno-de-sonrisa-cali" className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors text-center">
              <span className="text-3xl mb-3 block">✨</span>
              <h3 className="font-semibold text-foreground">Diseño de Sonrisa</h3>
            </Link>
            <Link href="/protesis-dental-cali" className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors text-center">
              <span className="text-3xl mb-3 block">🔧</span>
              <h3 className="font-semibold text-foreground">Prótesis Dental</h3>
            </Link>
            <Link href="/urgencias-odontologicas-cali" className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors text-center">
              <span className="text-3xl mb-3 block">🚨</span>
              <h3 className="font-semibold text-foreground">Urgencias</h3>
            </Link>
          </div>
        </div>
      </section>

      <Footer dictionary={dictionary} locale="es" />
      <WhatsAppButton dictionary={dictionary} />
    </main>
  )
}
