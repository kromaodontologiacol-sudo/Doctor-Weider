import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { Calendar, Clock, User, ArrowLeft, CheckCircle2, Star, MessageCircle, Award, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Implantes Dentales en Cali: Cómo Elegir al Mejor Especialista | Dr. Weider 2026",
  description: "Guía para elegir al mejor especialista en implantes dentales en Cali. Qué buscar, preguntas clave, certificaciones importantes y por qué elegir al Dr. Weider.",
  keywords: ["mejor especialista implantes Cali", "implantólogo Cali", "cómo elegir odontólogo implantes", "Dr. Weider Cali", "implantes dentales Cali"],
  openGraph: {
    title: "Implantes Dentales en Cali: Cómo Elegir al Mejor Especialista",
    description: "Guía completa para elegir al especialista ideal para tus implantes dentales en Cali.",
    type: "article",
    locale: "es_CO",
  },
  alternates: {
    canonical: "/blog/implantes-dentales-cali-mejor-especialista",
  },
}

export default function ArticlePage() {
  const dictionary = getDictionary("es")

  const whatsappNumber = "573162233076"
  const whatsappMessage = encodeURIComponent("Hola, quiero agendar una valoración para implantes dentales con el Dr. Weider")

  return (
    <main className="min-h-screen bg-background">
      <Header dictionary={dictionary} locale="es" />

      <article className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al Blog
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                5 de Marzo, 2026
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-4 h-4" />
                11 min de lectura
              </span>
              <span className="inline-flex items-center gap-1">
                <User className="w-4 h-4" />
                Equipo Dr. Weider
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Implantes Dentales en Cali: Cómo Elegir al Mejor Especialista
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Elegir al especialista adecuado para tus implantes dentales es una de las decisiones más importantes que tomarás. Esta guía te ayudará a tomar una decisión informada.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              Los implantes dentales son una inversión significativa en tu salud y calidad de vida. El éxito del procedimiento depende en gran medida del profesional que lo realice. En Cali hay muchas opciones, pero ¿cómo saber cuál es la mejor para ti?
            </p>

            <h2>¿Qué Especialista Debe Colocar Implantes Dentales?</h2>

            <p>
              En Colombia, los implantes dentales pueden ser colocados por odontólogos generales con entrenamiento adicional o por especialistas. Sin embargo, lo ideal es buscar un profesional con formación específica en implantología.
            </p>

            <p>Las especialidades más relacionadas con implantes son:</p>

            <ul>
              <li><strong>Periodoncista:</strong> Especialista en encías y tejidos que soportan los dientes. Excelente opción para implantes.</li>
              <li><strong>Cirujano Oral y Maxilofacial:</strong> Ideal para casos complejos que requieren cirugía avanzada.</li>
              <li><strong>Prostodoncista:</strong> Especialista en restauraciones, incluyendo coronas sobre implantes.</li>
              <li><strong>Implantólogo:</strong> Odontólogo con formación específica en implantes (diplomado, fellowship, maestría).</li>
            </ul>

            <h2>7 Criterios para Elegir a tu Especialista</h2>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-xl font-semibold text-foreground mb-6">Checklist del Especialista Ideal</h3>
              <div className="space-y-4">
                {[
                  { 
                    icon: Award,
                    title: "1. Formación y Credenciales", 
                    desc: "Verifica que tenga título de odontólogo registrado, especialización o diplomado en implantología, y educación continua actualizada." 
                  },
                  { 
                    icon: Users,
                    title: "2. Experiencia Comprobable", 
                    desc: "Pregunta cuántos implantes ha colocado, pide ver casos similares al tuyo, y busca testimonios de pacientes reales." 
                  },
                  { 
                    icon: Shield,
                    title: "3. Tecnología e Instalaciones", 
                    desc: "Debe contar con radiografía panorámica, idealmente tomografía 3D, y un consultorio con normas de bioseguridad." 
                  },
                  { 
                    icon: Star,
                    title: "4. Marcas de Implantes Reconocidas", 
                    desc: "Usa marcas con respaldo científico (Straumann, Nobel Biocare, Neodent, BioHorizons, Mis). Evita marcas desconocidas." 
                  },
                  { 
                    icon: CheckCircle2,
                    title: "5. Transparencia en Precios", 
                    desc: "Debe explicar claramente qué incluye el precio, costos adicionales posibles, y dar todo por escrito." 
                  },
                  { 
                    icon: MessageCircle,
                    title: "6. Comunicación Clara", 
                    desc: "¿Te explica el procedimiento? ¿Responde tus dudas? ¿Te sientes cómodo? La comunicación es clave." 
                  },
                  { 
                    icon: Shield,
                    title: "7. Garantía y Seguimiento", 
                    desc: "Ofrece garantía por escrito, tiene protocolo de seguimiento, y está disponible para emergencias." 
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2>Preguntas Clave para Hacer en tu Primera Cita</h2>

            <p>
              No tengas miedo de preguntar. Un buen profesional agradecerá tu interés y responderá con transparencia:
            </p>

            <div className="bg-muted/30 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-xl font-semibold text-foreground mb-4">Preguntas Esenciales</h3>
              <ul className="space-y-3">
                {[
                  "¿Cuál es su formación específica en implantes?",
                  "¿Cuántos implantes ha colocado en su carrera?",
                  "¿Qué marca de implantes utiliza y por qué?",
                  "¿Cuál es la tasa de éxito de sus implantes?",
                  "¿Qué incluye exactamente el precio que me da?",
                  "¿Qué garantía ofrece?",
                  "¿Qué pasa si hay alguna complicación?",
                  "¿Puedo ver fotos de casos anteriores similares al mío?",
                  "¿Cuánto tiempo durará mi tratamiento completo?",
                  "¿Necesitaré algún procedimiento adicional (injerto de hueso, etc.)?",
                ].map((question, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2>Señales de Alerta: Cuándo Buscar Otra Opción</h2>

            <p>
              Confía en tu instinto. Si algo no se siente bien, probablemente no lo está. Estas son algunas señales de alerta:
            </p>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Red Flags</h3>
              <ul className="space-y-2 text-red-700">
                <li>Presiona para que tomes una decisión inmediata</li>
                <li>No quiere mostrar credenciales o casos anteriores</li>
                <li>Precio muy por debajo del mercado sin explicación clara</li>
                <li>No realiza evaluación completa antes de dar un presupuesto</li>
                <li>No explica claramente el procedimiento ni responde preguntas</li>
                <li>Consultorio sin normas básicas de higiene y bioseguridad</li>
                <li>No ofrece ningún tipo de garantía</li>
                <li>Usa marcas de implantes desconocidas o no las menciona</li>
              </ul>
            </div>

            <h2>¿Por Qué los Precios Varían Tanto en Cali?</h2>

            <p>
              Es normal encontrar diferencias de precio significativas entre profesionales. Estas diferencias se explican por:
            </p>

            <ul>
              <li><strong>Marca del implante:</strong> Implantes premium vs. económicos</li>
              <li><strong>Experiencia del profesional:</strong> Años de práctica y especialización</li>
              <li><strong>Tecnología utilizada:</strong> Equipos de diagnóstico y planificación</li>
              <li><strong>Ubicación del consultorio:</strong> Zonas comerciales vs. residenciales</li>
              <li><strong>Qué incluye el precio:</strong> Algunos incluyen todo, otros cobran por separado</li>
            </ul>

            <p>
              Recuerda: lo más barato puede salir caro si hay complicaciones. Busca la mejor relación calidad-precio, no solo el precio más bajo.
            </p>

            <h2>Conoce al Dr. Weider Gutiérrez</h2>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8 not-prose">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Dr. Weider Gutiérrez
                  </h3>
                  <p className="text-lg text-primary font-medium mb-4">Especialista en Implantología Oral</p>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      "Odontólogo graduado de la Universidad del Valle",
                      "Especialización en Implantología Oral",
                      "Más de 15 años de experiencia",
                      "+2000 pacientes satisfechos",
                      "+5000 procedimientos realizados",
                      "Actualización continua en congresos internacionales",
                      "Uso de implantes premium (marcas reconocidas mundialmente)",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-foreground font-medium ml-2">5.0 en Google Reviews</span>
                  </div>
                </div>
              </div>
            </div>

            <h2>Lo Que Nos Diferencia</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
              {[
                { title: "Diagnóstico Completo", desc: "Evaluación con radiografía panorámica y/o tomografía 3D incluida" },
                { title: "Plan Personalizado", desc: "Cada caso es único. Diseñamos el tratamiento ideal para ti" },
                { title: "Tecnología Avanzada", desc: "Equipos de última generación para máxima precisión" },
                { title: "Precios Transparentes", desc: "Todo incluido, sin sorpresas. Presupuesto detallado por escrito" },
                { title: "Garantía por Escrito", desc: "Respaldamos nuestro trabajo con garantía documentada" },
                { title: "Seguimiento Continuo", desc: "Te acompañamos en cada etapa de tu tratamiento" },
              ].map((item, index) => (
                <div key={index} className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2>Testimonios de Nuestros Pacientes</h2>

            <div className="space-y-4 my-8 not-prose">
              {[
                { name: "María C.", text: "Tenía mucho miedo de los implantes, pero el Dr. Weider me explicó todo con paciencia. El procedimiento fue mucho mejor de lo que esperaba. ¡Ya puedo comer de todo!" },
                { name: "Carlos R.", text: "Visité varios odontólogos antes de decidirme. El Dr. Weider fue el único que me dio un diagnóstico completo y un presupuesto claro. 100% recomendado." },
                { name: "Ana M.", text: "Me pusieron 4 implantes y quedaron perfectos. El seguimiento ha sido excelente. Ya pasó un año y estoy feliz con el resultado." },
              ].map((testimonial, index) => (
                <div key={index} className="bg-muted/30 rounded-xl p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground italic mb-3">"{testimonial.text}"</p>
                  <p className="text-sm text-muted-foreground font-medium">{testimonial.name}</p>
                </div>
              ))}
            </div>

            <h2>Tu Siguiente Paso</h2>

            <p>
              La mejor forma de saber si somos el equipo indicado para ti es conocernos. En tu primera cita de valoración:
            </p>

            <ul>
              <li>Evaluamos tu caso de forma completa</li>
              <li>Respondemos todas tus preguntas</li>
              <li>Te explicamos las opciones disponibles</li>
              <li>Te damos un presupuesto detallado por escrito</li>
              <li>Sin presión, sin compromiso</li>
            </ul>

            <p>
              Toma tu tiempo para decidir. Estamos aquí cuando estés listo.
            </p>
          </div>

          {/* CTA Box */}
          <div className="mt-12 bg-primary rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Agenda tu Valoración con el Dr. Weider
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Conoce al equipo, resuelve tus dudas y recibe un diagnóstico completo para tu caso.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Valoración por WhatsApp
            </a>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Artículos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/blog/cuanto-cuesta-implante-dental-cali-2026"
                className="block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <h4 className="font-semibold text-foreground mb-2">¿Cuánto Cuesta un Implante Dental en Cali? (2026)</h4>
                <p className="text-sm text-muted-foreground">Precios actualizados y qué factores afectan el costo.</p>
              </Link>
              <Link 
                href="/blog/soy-candidato-implante-dental"
                className="block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <h4 className="font-semibold text-foreground mb-2">¿Soy Candidato para un Implante Dental?</h4>
                <p className="text-sm text-muted-foreground">Requisitos y condiciones para recibir implantes.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer dictionary={dictionary} locale="es" />
      <WhatsAppButton dictionary={dictionary} />
    </main>
  )
}
