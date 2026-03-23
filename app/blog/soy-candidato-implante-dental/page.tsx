import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { Calendar, Clock, User, ArrowLeft, CheckCircle2, XCircle, MessageCircle, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "¿Soy Candidato para un Implante Dental? Requisitos y Evaluación | Dr. Weider Cali",
  description: "Descubre si eres candidato para implantes dentales. Conoce los requisitos, condiciones que lo permiten o no, y cómo es la evaluación inicial con el Dr. Weider en Cali.",
  keywords: ["candidato implante dental", "requisitos implante dental", "evaluación implante", "implantes dentales Cali", "condiciones implante dental"],
  openGraph: {
    title: "¿Soy Candidato para un Implante Dental? Requisitos y Evaluación",
    description: "Descubre si eres candidato para implantes dentales. Conoce los requisitos y cómo es la evaluación inicial.",
    type: "article",
    locale: "es_CO",
  },
  alternates: {
    canonical: "/blog/soy-candidato-implante-dental",
  },
}

export default function ArticlePage() {
  const dictionary = getDictionary("es")

  const whatsappNumber = "573162233076"
  const whatsappMessage = encodeURIComponent("Hola, quiero saber si soy candidato para implantes dentales")

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
                15 de Marzo, 2026
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-4 h-4" />
                9 min de lectura
              </span>
              <span className="inline-flex items-center gap-1">
                <User className="w-4 h-4" />
                Dr. Weider Gutiérrez
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              ¿Soy Candidato para un Implante Dental? Requisitos y Evaluación
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Una de las preguntas más frecuentes que recibimos es: "¿Puedo ponerme un implante dental?" La respuesta depende de varios factores que evaluamos cuidadosamente en cada paciente.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              Los implantes dentales son una excelente solución para reemplazar dientes perdidos, pero no todos los pacientes son candidatos ideales desde el primer momento. La buena noticia es que con los avances actuales, la mayoría de las personas pueden recibir implantes, aunque algunas requieren tratamientos previos.
            </p>

            <h2>Candidatos Ideales para Implantes Dentales</h2>

            <p>
              Un candidato ideal para implantes dentales generalmente cumple con las siguientes características:
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                Características del Candidato Ideal
              </h3>
              <ul className="space-y-3">
                {[
                  "Buena salud general sin enfermedades sistémicas descontroladas",
                  "Encías saludables sin enfermedad periodontal activa",
                  "Suficiente hueso en la mandíbula o maxilar",
                  "No fumador o dispuesto a dejar de fumar",
                  "Buena higiene oral y compromiso con el cuidado dental",
                  "Expectativas realistas sobre el tratamiento",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-green-700">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2>Condiciones que Requieren Evaluación Especial</h2>

            <p>
              Algunas condiciones no impiden recibir implantes, pero requieren un manejo especial o tratamientos previos:
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Condiciones que Requieren Manejo Especial
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { condition: "Diabetes", note: "Debe estar controlada (HbA1c < 7%)" },
                  { condition: "Hipertensión", note: "Controlada con medicamentos" },
                  { condition: "Pérdida ósea", note: "Puede requerir injerto de hueso" },
                  { condition: "Enfermedad periodontal", note: "Tratamiento previo necesario" },
                  { condition: "Fumadores", note: "Mayor riesgo, idealmente dejar de fumar" },
                  { condition: "Medicamentos anticoagulantes", note: "Coordinación con médico tratante" },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-amber-800">{item.condition}</p>
                    <p className="text-sm text-amber-700">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2>Contraindicaciones Relativas y Absolutas</h2>

            <h3>Contraindicaciones Relativas (Temporales)</h3>

            <p>
              Estas condiciones pueden resolverse o controlarse antes del procedimiento:
            </p>

            <ul>
              <li><strong>Embarazo:</strong> Se recomienda esperar hasta después del parto</li>
              <li><strong>Infecciones orales activas:</strong> Deben tratarse primero</li>
              <li><strong>Tratamiento de quimioterapia reciente:</strong> Esperar tiempo prudencial</li>
              <li><strong>Deficiencia ósea:</strong> Puede solucionarse con injertos</li>
            </ul>

            <h3>Contraindicaciones Absolutas (Poco Comunes)</h3>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                Casos donde NO se Recomiendan Implantes
              </h3>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Uso de bifosfonatos intravenosos (para osteoporosis severa o cáncer óseo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Radioterapia reciente en la zona maxilofacial</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Enfermedades autoinmunes severas no controladas</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Adicciones activas a drogas o alcohol</span>
                </li>
              </ul>
              <p className="text-sm text-red-600 mt-4">
                Nota: Incluso estas condiciones pueden tener excepciones. Siempre consulte con un especialista.
              </p>
            </div>

            <h2>El Proceso de Evaluación Inicial</h2>

            <p>
              En nuestra consulta, realizamos una evaluación completa que incluye:
            </p>

            <div className="bg-muted/30 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-xl font-semibold text-foreground mb-4">¿Qué Incluye la Valoración?</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Historia Clínica Completa", desc: "Revisamos su historial médico, medicamentos actuales y condiciones de salud." },
                  { step: "2", title: "Examen Clínico Oral", desc: "Evaluamos encías, dientes existentes y tejidos blandos." },
                  { step: "3", title: "Radiografía Panorámica", desc: "Permite ver la estructura ósea general." },
                  { step: "4", title: "Tomografía 3D (si es necesaria)", desc: "Para casos complejos, medimos exactamente el hueso disponible." },
                  { step: "5", title: "Plan de Tratamiento Personalizado", desc: "Diseñamos el mejor plan para su caso específico." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-semibold">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2>La Edad no es una Limitante</h2>

            <p>
              Una pregunta frecuente es si existe una edad límite para los implantes. La respuesta es no. Hemos colocado implantes exitosamente en pacientes de 70, 80 e incluso más años. Lo importante no es la edad cronológica, sino el estado de salud general y óseo del paciente.
            </p>

            <p>
              De hecho, muchos adultos mayores son excelentes candidatos porque tienen hueso más denso que los jóvenes y están muy motivados a recuperar su calidad de vida.
            </p>

            <h2>¿Qué pasa si no Tengo Suficiente Hueso?</h2>

            <p>
              La falta de hueso ya no es una contraindicación absoluta. Existen varias técnicas para regenerar o aumentar el hueso:
            </p>

            <ul>
              <li><strong>Injerto de hueso:</strong> Puede ser de origen sintético, bovino o del propio paciente</li>
              <li><strong>Elevación de seno maxilar:</strong> Crea espacio adicional en el maxilar superior</li>
              <li><strong>Regeneración ósea guiada:</strong> Estimula el crecimiento de hueso nuevo</li>
              <li><strong>Implantes cigomáticos:</strong> Para casos de pérdida ósea extrema en maxilar superior</li>
            </ul>

            <h2>Checklist: ¿Eres Candidato?</h2>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-xl font-semibold text-foreground mb-4">Autoevaluación Rápida</h3>
              <p className="text-muted-foreground mb-4">Responde mentalmente a estas preguntas:</p>
              <ul className="space-y-3">
                {[
                  "¿Has perdido uno o más dientes?",
                  "¿Tu salud general es estable?",
                  "¿Tus encías están sanas (sin sangrado al cepillarte)?",
                  "¿Estás dispuesto a mantener buena higiene oral?",
                  "¿No fumas o estás dispuesto a reducir/dejar?",
                  "¿Tienes expectativas realistas sobre el tratamiento?",
                ].map((question, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded border-2 border-primary/40"></div>
                    <span className="text-foreground">{question}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Si respondiste "Sí" a la mayoría, probablemente eres un buen candidato. Una valoración profesional confirmará tu elegibilidad.
              </p>
            </div>

            <h2>El Siguiente Paso</h2>

            <p>
              La única forma de saber con certeza si eres candidato para implantes dentales es mediante una valoración profesional. En nuestra consulta, esta valoración incluye:
            </p>

            <ul>
              <li>Examen clínico completo</li>
              <li>Radiografía panorámica</li>
              <li>Plan de tratamiento personalizado</li>
              <li>Presupuesto detallado sin compromiso</li>
            </ul>

            <p>
              No dejes que la incertidumbre te detenga. Agenda tu valoración y obtén respuestas claras sobre tu caso específico.
            </p>
          </div>

          {/* CTA Box */}
          <div className="mt-12 bg-primary rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Descubre si Eres Candidato
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Agenda tu valoración personalizada y recibe un diagnóstico profesional para tu caso.
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
                href="/blog/implante-dental-cali-precio-proceso-beneficios"
                className="block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <h4 className="font-semibold text-foreground mb-2">Implante Dental en Cali: Precio, Proceso y Beneficios</h4>
                <p className="text-sm text-muted-foreground">Guía completa sobre implantes dentales en Cali.</p>
              </Link>
              <Link 
                href="/blog/duele-ponerse-implante-dental"
                className="block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <h4 className="font-semibold text-foreground mb-2">¿Duele Ponerse un Implante Dental?</h4>
                <p className="text-sm text-muted-foreground">La verdad sobre el dolor en los procedimientos de implantes.</p>
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
