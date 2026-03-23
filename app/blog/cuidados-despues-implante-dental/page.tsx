import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { Calendar, Clock, User, ArrowLeft, CheckCircle2, XCircle, MessageCircle, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Cuidados Después de un Implante Dental: Guía Completa de Recuperación | Dr. Weider",
  description: "Aprende los cuidados esenciales después de un implante dental. Qué comer, qué evitar, higiene, medicamentos y señales de alerta. Guía del Dr. Weider en Cali.",
  keywords: ["cuidados implante dental", "recuperación implante dental", "postoperatorio implante", "qué comer después implante", "implantes dentales Cali"],
  openGraph: {
    title: "Cuidados Después de un Implante Dental: Guía Completa de Recuperación",
    description: "Aprende los cuidados esenciales después de un implante dental para una recuperación exitosa.",
    type: "article",
    locale: "es_CO",
  },
  alternates: {
    canonical: "/blog/cuidados-despues-implante-dental",
  },
}

export default function ArticlePage() {
  const dictionary = getDictionary("es")

  const whatsappNumber = "573162233076"
  const whatsappMessage = encodeURIComponent("Hola, tengo dudas sobre los cuidados postoperatorios de implantes")

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
                10 de Marzo, 2026
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-4 h-4" />
                10 min de lectura
              </span>
              <span className="inline-flex items-center gap-1">
                <User className="w-4 h-4" />
                Dr. Weider Gutiérrez
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Cuidados Después de un Implante Dental: Guía Completa de Recuperación
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Una recuperación exitosa después de un implante dental depende en gran medida de los cuidados que tengas en casa. Esta guía te ayudará a tener una cicatrización óptima.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              Has tomado la decisión de mejorar tu sonrisa con implantes dentales. Ahora, el éxito a largo plazo depende tanto del procedimiento como de los cuidados postoperatorios. Con las indicaciones correctas, la recuperación es cómoda y predecible.
            </p>

            <h2>Primeras 24 Horas: Fase Crítica</h2>

            <p>
              Las primeras horas después del procedimiento son las más importantes. Sigue estas indicaciones al pie de la letra:
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-xl font-semibold text-foreground mb-4">Indicaciones Inmediatas (0-24 horas)</h3>
              <ul className="space-y-3">
                {[
                  "Muerde la gasa por 30-60 minutos para controlar el sangrado",
                  "Aplica hielo en la mejilla: 20 minutos sí, 20 minutos no",
                  "No te enjuagues la boca durante las primeras 24 horas",
                  "No escupas con fuerza (puede desalojar el coágulo)",
                  "Mantén la cabeza elevada al dormir",
                  "No uses pitillo/popote para beber",
                  "Toma los medicamentos según lo indicado",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2>Alimentación Durante la Recuperación</h2>

            <h3>Primeros 3-5 Días: Dieta Blanda</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Alimentos Recomendados
                </h4>
                <ul className="space-y-2 text-green-700">
                  <li>Sopas tibias (no calientes)</li>
                  <li>Purés de papa, zanahoria</li>
                  <li>Yogurt y batidos</li>
                  <li>Huevos revueltos</li>
                  <li>Pescado suave</li>
                  <li>Avena</li>
                  <li>Helado (sin nueces)</li>
                  <li>Plátano maduro</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Alimentos a Evitar
                </h4>
                <ul className="space-y-2 text-red-700">
                  <li>Alimentos duros o crujientes</li>
                  <li>Comidas muy calientes</li>
                  <li>Alimentos picantes</li>
                  <li>Nueces y semillas</li>
                  <li>Palomitas de maíz</li>
                  <li>Carnes duras</li>
                  <li>Pan tostado</li>
                  <li>Alimentos ácidos (limón, naranja)</li>
                </ul>
              </div>
            </div>

            <h3>Semana 2 en Adelante</h3>

            <p>
              Gradualmente puedes incorporar alimentos más sólidos, pero siempre masticando del lado opuesto al implante. Evita morder directamente sobre el área tratada hasta que tu odontólogo lo autorice.
            </p>

            <h2>Higiene Oral Después del Implante</h2>

            <p>
              Mantener una buena higiene es crucial para prevenir infecciones, pero debes hacerlo con cuidado:
            </p>

            <div className="bg-muted/30 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-xl font-semibold text-foreground mb-4">Protocolo de Higiene</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground">Primeras 24 horas</p>
                  <p className="text-muted-foreground">No cepilles el área del implante. Puedes cepillar suavemente los demás dientes.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground">Día 2-7</p>
                  <p className="text-muted-foreground">Enjuagues suaves con agua salada tibia (1/2 cucharadita de sal en un vaso de agua) después de cada comida. Cepillado suave evitando la zona operada.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground">Semana 2 en adelante</p>
                  <p className="text-muted-foreground">Cepillado normal con cepillo suave. Puedes usar enjuague bucal sin alcohol si lo indica tu odontólogo.</p>
                </div>
              </div>
            </div>

            <h2>Medicamentos Típicos</h2>

            <p>
              Generalmente se prescriben los siguientes medicamentos (siempre sigue las indicaciones específicas de tu odontólogo):
            </p>

            <ul>
              <li><strong>Antibiótico:</strong> Previene infecciones. Completa todo el tratamiento aunque te sientas bien.</li>
              <li><strong>Antiinflamatorio:</strong> Reduce la hinchazón y el dolor (ibuprofeno, naproxeno).</li>
              <li><strong>Analgésico:</strong> Para el dolor (acetaminofén). Tómalo antes de que pase la anestesia.</li>
              <li><strong>Enjuague con clorhexidina:</strong> A partir del día 2, ayuda a mantener la zona limpia.</li>
            </ul>

            <h2>Qué es Normal Durante la Recuperación</h2>

            <p>
              Es importante saber qué esperar para no preocuparte innecesariamente:
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Síntomas Normales</h3>
              <ul className="space-y-2 text-blue-700">
                <li><strong>Hinchazón:</strong> Máxima al día 2-3, luego disminuye. Puede durar hasta una semana.</li>
                <li><strong>Moretón:</strong> Puede aparecer en la mejilla o cuello. Se resuelve en 7-10 días.</li>
                <li><strong>Sangrado leve:</strong> Normal las primeras 24-48 horas. La saliva puede verse rosada.</li>
                <li><strong>Molestia/Dolor leve:</strong> Controlable con analgésicos. Mejora cada día.</li>
                <li><strong>Rigidez mandibular:</strong> Dificultad temporal para abrir completamente la boca.</li>
              </ul>
            </div>

            <h2>Señales de Alerta: Cuándo Llamar al Odontólogo</h2>

            <p>
              Aunque las complicaciones son raras, debes contactarnos inmediatamente si presentas:
            </p>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Señales de Alerta
              </h3>
              <ul className="space-y-2 text-red-700">
                <li>Sangrado abundante que no para con presión</li>
                <li>Dolor intenso que no mejora con medicamentos</li>
                <li>Fiebre mayor a 38°C</li>
                <li>Hinchazón que empeora después del día 3</li>
                <li>Pus o mal olor en la zona</li>
                <li>Sensación de que el implante se mueve</li>
                <li>Adormecimiento que persiste más de 24 horas</li>
              </ul>
            </div>

            <h2>Actividades y Estilo de Vida</h2>

            <h3>Primeros 3-5 Días</h3>

            <ul>
              <li><strong>Reposo relativo:</strong> No es necesario estar en cama, pero evita esfuerzos</li>
              <li><strong>No fumar:</strong> El tabaco es el principal enemigo de los implantes. Idealmente, no fumes por 2 semanas mínimo</li>
              <li><strong>No alcohol:</strong> Evítalo al menos 72 horas, especialmente si tomas antibióticos</li>
              <li><strong>No ejercicio intenso:</strong> Evita gimnasio, correr, levantar pesas por 5-7 días</li>
            </ul>

            <h3>Primera Semana en Adelante</h3>

            <ul>
              <li>Puedes retomar actividades normales gradualmente</li>
              <li>Evita deportes de contacto por 2-3 semanas</li>
              <li>No nades en piscinas por 2 semanas (riesgo de infección)</li>
            </ul>

            <h2>Línea de Tiempo de Recuperación</h2>

            <div className="bg-muted/30 rounded-xl p-6 my-8 not-prose">
              <div className="space-y-4">
                {[
                  { time: "Día 1-3", desc: "Máxima hinchazón y molestia. Dieta líquida/blanda. Reposo." },
                  { time: "Día 4-7", desc: "Hinchazón disminuye. Puedes retomar actividades ligeras." },
                  { time: "Semana 2", desc: "Molestias mínimas. Alimentación casi normal." },
                  { time: "Semana 3-4", desc: "Recuperación casi completa. Cita de control." },
                  { time: "Mes 2-4", desc: "Osteointegración en progreso. El implante se fusiona con el hueso." },
                  { time: "Mes 4-6", desc: "Colocación de la corona definitiva." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-sm font-semibold text-primary">{item.time}</span>
                    </div>
                    <div className="flex-1 border-l-2 border-primary/20 pl-4">
                      <p className="text-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2>Cuidados a Largo Plazo</h2>

            <p>
              Una vez que tu implante está completamente integrado y con su corona, los cuidados son similares a los de tus dientes naturales:
            </p>

            <ul>
              <li>Cepillado 2-3 veces al día con cepillo suave</li>
              <li>Uso de hilo dental o cepillos interdentales diariamente</li>
              <li>Visitas de control cada 6 meses</li>
              <li>Limpiezas profesionales regulares</li>
              <li>Evitar morder objetos duros (hielo, huesos, bolígrafos)</li>
            </ul>

            <h2>Preguntas Frecuentes sobre la Recuperación</h2>

            <div className="space-y-4 my-8">
              {[
                { q: "¿Puedo trabajar al día siguiente?", a: "Depende del trabajo. Actividades de oficina generalmente sí. Trabajos físicos, mejor esperar 2-3 días." },
                { q: "¿Puedo manejar después del procedimiento?", a: "Si fue con anestesia local, sí. Si hubo sedación, necesitas acompañante." },
                { q: "¿Cuándo puedo usar mi prótesis temporal?", a: "Generalmente se ajusta el mismo día o al día siguiente. Tu odontólogo te indicará." },
                { q: "¿Es normal que el implante se sienta raro?", a: "Sí, habrá una sensación diferente mientras te acostumbras. Esto es normal." },
              ].map((item, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground">{item.q}</p>
                  <p className="text-muted-foreground mt-2">{item.a}</p>
                </div>
              ))}
            </div>

            <p>
              Recuerda: cada paciente es diferente y tu recuperación puede variar. Siempre sigue las indicaciones específicas que te dio tu odontólogo y no dudes en contactarnos si tienes cualquier duda o inquietud.
            </p>
          </div>

          {/* CTA Box */}
          <div className="mt-12 bg-primary rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              ¿Tienes Dudas Sobre tu Recuperación?
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Estamos aquí para ayudarte en cada paso del proceso. Contáctanos si tienes cualquier pregunta.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Artículos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/blog/duele-ponerse-implante-dental"
                className="block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <h4 className="font-semibold text-foreground mb-2">¿Duele Ponerse un Implante Dental?</h4>
                <p className="text-sm text-muted-foreground">La verdad sobre el dolor en los procedimientos de implantes.</p>
              </Link>
              <Link 
                href="/blog/cuanto-dura-implante-dental"
                className="block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <h4 className="font-semibold text-foreground mb-2">¿Cuánto Dura un Implante Dental?</h4>
                <p className="text-sm text-muted-foreground">Vida útil y factores que influyen en la durabilidad.</p>
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
