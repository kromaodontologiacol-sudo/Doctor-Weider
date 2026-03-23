import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog Implantes Dentales Cali | Dr. Weider - Artículos SEO",
  description: "Blog especializado en implantes dentales en Cali. Precios, duración, proceso, cuidados y más. Información actualizada 2026 del Dr. Weider, especialista en implantología.",
  keywords: "implantes dentales Cali, implante dental Cali, precio implante Cali, blog dental Cali, odontología Cali",
  alternates: {
    canonical: "https://doctorweider.com/blog",
    languages: {
      "es": "https://doctorweider.com/blog",
      "en": "https://doctorweider.com/en/blog"
    }
  },
  openGraph: {
    title: "Blog Implantes Dentales Cali | Dr. Weider",
    description: "Artículos especializados sobre implantes dentales en Cali. Precios, proceso, beneficios y más.",
    url: "https://doctorweider.com/blog",
    locale: "es_CO",
    type: "website"
  }
}

const blogPosts = [
  {
    slug: "cuanto-cuesta-implante-dental-cali-2026",
    title: "¿Cuánto Cuesta un Implante Dental en Cali en 2026?",
    excerpt: "Guía completa de precios actualizados de implantes dentales en Cali. Desde $1.500.000 COP. Descubre qué incluye, factores que afectan el precio y cómo ahorrar.",
    date: "20 Marzo 2026",
    readTime: "12 min",
    category: "Precios"
  },
  {
    slug: "implante-dental-cali-precio-proceso-beneficios",
    title: "Implante Dental en Cali: Precio, Proceso y Beneficios",
    excerpt: "Todo lo que necesitas saber sobre implantes dentales en Cali. Proceso paso a paso, precios actualizados 2026 y beneficios para tu salud bucal.",
    date: "18 Marzo 2026",
    readTime: "15 min",
    category: "Implantes Dentales"
  },
  {
    slug: "duele-ponerse-implante-dental",
    title: "¿Duele Ponerse un Implante Dental? La Verdad Completa",
    excerpt: "Resolvemos todas tus dudas sobre el dolor en implantes dentales. Qué sentirás durante y después del procedimiento. Técnicas de anestesia y sedación.",
    date: "15 Marzo 2026",
    readTime: "10 min",
    category: "Procedimiento"
  },
  {
    slug: "implante-dental-vs-protesis-cual-mejor",
    title: "Implante Dental vs Prótesis: ¿Cuál es Mejor?",
    excerpt: "Comparación detallada entre implantes dentales y prótesis removibles. Ventajas, desventajas, costos y cuál es mejor según tu situación.",
    date: "12 Marzo 2026",
    readTime: "12 min",
    category: "Comparativas"
  },
  {
    slug: "cuanto-dura-implante-dental",
    title: "¿Cuánto Dura un Implante Dental? Vida Útil Real",
    excerpt: "Descubre cuántos años puede durar un implante dental con los cuidados adecuados. Factores que afectan su durabilidad y cómo maximizar su vida útil.",
    date: "10 Marzo 2026",
    readTime: "10 min",
    category: "Durabilidad"
  },
  {
    slug: "que-pasa-si-no-reemplazo-diente-perdido",
    title: "¿Qué Pasa Si No Reemplazo un Diente Perdido?",
    excerpt: "Consecuencias reales de no reemplazar un diente perdido: pérdida ósea, movimiento dental, problemas de mordida. Por qué actuar rápido es importante.",
    date: "8 Marzo 2026",
    readTime: "11 min",
    category: "Salud Bucal"
  },
  {
    slug: "cuanto-tiempo-tarda-implante-dental",
    title: "¿Cuánto Tiempo Tarda un Implante Dental? Proceso Completo",
    excerpt: "Cronograma completo del proceso de implantes dentales: desde la valoración hasta la corona final. Tiempos de cicatrización y qué esperar.",
    date: "5 Marzo 2026",
    readTime: "10 min",
    category: "Proceso"
  },
  {
    slug: "tipos-implantes-dentales-cual-mejor",
    title: "Tipos de Implantes Dentales: ¿Cuál es la Mejor Opción?",
    excerpt: "Guía completa de tipos de implantes dentales: convencionales, carga inmediata, cigomáticos. Cuál elegir según tu caso y presupuesto.",
    date: "3 Marzo 2026",
    readTime: "13 min",
    category: "Tipos"
  },
  {
    slug: "soy-candidato-implante-dental",
    title: "¿Soy Candidato para un Implante Dental? Checklist Completo",
    excerpt: "Descubre si eres candidato ideal para implantes dentales. Requisitos, contraindicaciones, condiciones médicas y cómo prepararte.",
    date: "1 Marzo 2026",
    readTime: "11 min",
    category: "Candidatos"
  },
  {
    slug: "cuidados-despues-implante-dental",
    title: "Cuidados Después de un Implante Dental: Guía Completa",
    excerpt: "Todo sobre el postoperatorio de implantes dentales: alimentación, higiene, medicamentos, actividad física. Garantiza el éxito de tu implante.",
    date: "28 Febrero 2026",
    readTime: "12 min",
    category: "Cuidados"
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
              Blog Especializado en Implantes Dentales
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Implantes Dentales en Cali: Guías y Artículos
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Información completa y actualizada sobre implantes dentales en Cali. 
              Precios, proceso, beneficios, cuidados y más del Dr. Weider.
            </p>
            <a
              href="https://wa.me/573000000000?text=Hola,%20quiero%20información%20sobre%20implantes%20dentales%20en%20Cali"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Si buscas implantes dentales en Cali, agenda tu valoración
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center min-h-[300px]">
                <div className="text-center p-8">
                  <span className="text-8xl">💰</span>
                  <p className="text-muted-foreground mt-4 font-medium">Precios Actualizados 2026</p>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4 w-fit">
                  Artículo Destacado
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  ¿Cuánto Cuesta un Implante Dental en Cali en 2026?
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Guía completa de precios actualizados. Desde $1.500.000 COP incluye implante y corona. 
                  Descubre qué factores afectan el precio y cómo planificar tu inversión.
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    20 Marzo 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    12 min de lectura
                  </span>
                </div>
                <Link
                  href="/blog/cuanto-cuesta-implante-dental-cali-2026"
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
            Todos los Artículos sobre Implantes Dentales
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg hover:border-primary/50 transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <span className="text-5xl">
                    {post.category === "Precios" && "💰"}
                    {post.category === "Implantes Dentales" && "🦷"}
                    {post.category === "Procedimiento" && "💉"}
                    {post.category === "Comparativas" && "⚖️"}
                    {post.category === "Durabilidad" && "⏰"}
                    {post.category === "Salud Bucal" && "🏥"}
                    {post.category === "Proceso" && "📋"}
                    {post.category === "Tipos" && "🔧"}
                    {post.category === "Candidatos" && "✅"}
                    {post.category === "Cuidados" && "🩺"}
                  </span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            ¿Tienes Preguntas sobre Implantes Dentales?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            El Dr. Weider está listo para resolver todas tus dudas y ayudarte a recuperar tu sonrisa en Cali.
          </p>
          <a
            href="https://wa.me/573000000000?text=Hola,%20quiero%20información%20sobre%20implantes%20dentales%20en%20Cali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-background/90 transition-colors shadow-lg"
          >
            Agenda tu Valoración por WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Servicios Relacionados
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link href="/implantes-dentales-cali" className="bg-card p-6 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all text-center group">
              <span className="text-4xl mb-3 block">🦷</span>
              <h3 className="font-bold text-foreground text-lg mb-2">Implantes Dentales en Cali</h3>
              <p className="text-muted-foreground text-sm">Información completa sobre el procedimiento</p>
              <span className="text-primary text-sm font-medium mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Ver más <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/precio-implante-dental-cali" className="bg-card p-6 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all text-center group">
              <span className="text-4xl mb-3 block">💰</span>
              <h3 className="font-bold text-foreground text-lg mb-2">Precios de Implantes en Cali</h3>
              <p className="text-muted-foreground text-sm">Precios actualizados 2026</p>
              <span className="text-primary text-sm font-medium mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Ver precios <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer dictionary={dictionary} locale="es" />
      <WhatsAppButton dictionary={dictionary} />
    </main>
  )
}
