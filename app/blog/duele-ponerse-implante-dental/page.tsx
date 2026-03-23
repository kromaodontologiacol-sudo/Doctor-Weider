import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { Calendar, Clock, ArrowRight, ArrowLeft, CheckCircle, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "¿Duele Ponerse un Implante Dental? La Verdad Completa | Dr. Weider Cali",
  description: "Descubre la verdad sobre el dolor en implantes dentales. Qué sentirás durante y después del procedimiento, técnicas de anestesia y cómo manejamos el dolor en Cali.",
  keywords: "duele implante dental, dolor implante dental, anestesia implante dental, implantes dentales Cali sin dolor",
  alternates: {
    canonical: "https://doctorweider.com/blog/duele-ponerse-implante-dental"
  },
  openGraph: {
    title: "¿Duele Ponerse un Implante Dental? La Verdad Completa",
    description: "Todo sobre el dolor en implantes dentales: qué esperar antes, durante y después del procedimiento.",
    url: "https://doctorweider.com/blog/duele-ponerse-implante-dental",
    locale: "es_CO",
    type: "article"
  }
}

export default function ArticlePage() {
  const dictionary = getDictionary("es")

  return (
    <main className="min-h-screen bg-background">
      <Header dictionary={dictionary} locale="es" />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <nav className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Volver al Blog
            </Link>
          </nav>

          <header className="max-w-4xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Preguntas Frecuentes
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              ¿Duele Ponerse un Implante Dental? La Verdad Completa
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Una de las preguntas más comunes que recibimos. Te contamos exactamente qué sentirás antes, durante y después del procedimiento de implante dental.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                15 Marzo 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                10 min de lectura
              </span>
            </div>
          </header>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-foreground font-medium mb-4">
                Si estás buscando implantes dentales en Cali y el miedo al dolor te detiene, agenda una valoración. Te explicaremos todo el proceso y las opciones de sedación disponibles.
              </p>
              <a
                href="https://wa.me/573000000000?text=Hola,%20quiero%20información%20sobre%20implantes%20dentales%20en%20Cali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Agendar Valoración por WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="lead text-xl text-muted-foreground">
              El miedo al dolor es una de las principales razones por las que muchas personas posponen el tratamiento de implantes dentales. Es completamente comprensible: nadie quiere someterse a un procedimiento doloroso. Pero aquí viene la buena noticia: <strong>los implantes dentales modernos son mucho menos dolorosos de lo que la mayoría de la gente imagina</strong>. En este artículo te explicaremos exactamente qué esperar en cada etapa del proceso.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              La Respuesta Corta: No, No Duele Durante el Procedimiento
            </h2>
            
            <p>
              Vamos directo al grano: <strong>durante la cirugía de colocación del implante dental no sentirás dolor</strong>. El procedimiento se realiza bajo anestesia local que adormece completamente la zona, similar a lo que experimentas cuando te hacen un empaste o extracción dental.
            </p>

            <p>
              De hecho, muchos pacientes se sorprenden de lo tranquilo que es el procedimiento. Algunos incluso nos dicen que fue menos incómodo que una extracción dental convencional. ¿Por qué? Porque al colocar el implante, trabajamos directamente sobre el hueso, que tiene menos terminaciones nerviosas que el diente en sí.
            </p>

            <div className="bg-card rounded-xl border border-border p-6 my-8 not-prose">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Lo que sentirás durante el procedimiento:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Presión leve (no dolor) cuando se trabaja en el hueso</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Vibraciones de los instrumentos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Sonidos del procedimiento (se pueden usar audífonos)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Agua y succión en la boca</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Antes del Procedimiento: Preparación sin Estrés
            </h2>

            <p>
              La ansiedad antes de cualquier procedimiento dental es normal. Aquí te explicamos cómo te preparamos para una experiencia tranquila:
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Opciones de Anestesia y Sedación</h3>

            <p>
              Dependiendo de tu nivel de ansiedad y la complejidad del procedimiento, ofrecemos diferentes opciones:
            </p>

            <ul>
              <li><strong>Anestesia local:</strong> La opción estándar. Se aplica directamente en la zona a tratar y adormece completamente el área. Estarás despierto pero no sentirás dolor.</li>
              <li><strong>Sedación consciente:</strong> Para pacientes con mayor ansiedad. Combina anestesia local con medicación oral o intravenosa que te mantiene relajado y ligeramente adormecido.</li>
              <li><strong>Óxido nitroso (gas de la risa):</strong> Opción intermedia que reduce la ansiedad y produce una sensación de bienestar durante el procedimiento.</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">La Inyección de Anestesia: El Único Momento de Molestia</h3>

            <p>
              Seamos honestos: el único momento donde podrías sentir algo de molestia es durante la inyección de la anestesia local. Sin embargo, este pinchazo es breve (segundos) y lo minimizamos de varias formas:
            </p>

            <ul>
              <li>Aplicamos gel anestésico tópico antes de la inyección</li>
              <li>Usamos agujas ultra finas</li>
              <li>Inyectamos lentamente para reducir la molestia</li>
              <li>Distracción conversacional durante la aplicación</li>
            </ul>

            <p>
              Una vez que la anestesia hace efecto (1-2 minutos), no sentirás absolutamente nada de dolor durante el resto del procedimiento.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Durante el Procedimiento: Qué Esperar
            </h2>

            <p>
              El procedimiento de colocación de un implante dental unitario típicamente dura entre 30 minutos y 1 hora. Aquí te describimos paso a paso qué sentirás:
            </p>

            <div className="bg-card rounded-xl border border-border p-6 my-8 not-prose">
              <h3 className="font-bold text-foreground mb-4">Cronología del Procedimiento:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <strong className="text-foreground">Minutos 0-5: Anestesia</strong>
                    <p className="text-muted-foreground">Aplicación de anestesia local. Sentirás un pequeño pinchazo y luego la zona se adormece.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <strong className="text-foreground">Minutos 5-10: Incisión</strong>
                    <p className="text-muted-foreground">Pequeña apertura en la encía. No sentirás dolor, solo quizás algo de presión.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <strong className="text-foreground">Minutos 10-25: Preparación y Colocación</strong>
                    <p className="text-muted-foreground">Preparación del hueso y colocación del implante. Sentirás vibración y presión, pero no dolor.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <strong className="text-foreground">Minutos 25-30: Sutura</strong>
                    <p className="text-muted-foreground">Cierre de la encía con puntos. Indoloro gracias a la anestesia.</p>
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Después del Procedimiento: La Recuperación
            </h2>

            <p>
              Aquí es donde la mayoría de la gente tiene más preguntas. Una vez que pasa el efecto de la anestesia (2-3 horas después del procedimiento), ¿qué sentirás?
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Las Primeras 24-48 Horas</h3>

            <p>
              Es normal experimentar:
            </p>

            <ul>
              <li><strong>Molestia leve a moderada:</strong> Comparable a la que sentirías después de una extracción dental. Se controla bien con analgésicos como ibuprofeno o acetaminofén.</li>
              <li><strong>Hinchazón:</strong> La inflamación alcanza su pico a las 48-72 horas y luego disminuye gradualmente.</li>
              <li><strong>Sangrado leve:</strong> Algo de sangrado o manchado es normal durante las primeras 24 horas.</li>
              <li><strong>Sensibilidad:</strong> La zona estará sensible al tacto durante algunos días.</li>
            </ul>

            <p>
              La mayoría de nuestros pacientes describe el dolor postoperatorio como un 3-4 en una escala del 1 al 10. Muchos se sorprenden de lo manejable que es y algunos nos dicen que tuvieron menos molestias de las que esperaban.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Días 3-7: Mejora Rápida</h3>

            <p>
              A partir del tercer día, la mayoría de pacientes experimentan una mejora significativa. La hinchazón comienza a reducirse y el dolor disminuye considerablemente. Muchos vuelven a sus actividades normales después de 2-3 días.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Semana 2 en Adelante: Normalidad</h3>

            <p>
              A las dos semanas, la gran mayoría de pacientes ya no tienen ninguna molestia. La encía está cicatrizando bien y puedes comer normalmente (evitando solo masticar directamente sobre el implante).
            </p>

            {/* Mid CTA */}
            <div className="bg-primary rounded-xl p-8 my-12 not-prose text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                ¿Tienes Más Preguntas sobre el Procedimiento?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                En tu valoración te explicaremos todo con detalle y resolveremos todas tus dudas.
              </p>
              <a
                href="https://wa.me/573000000000?text=Hola,%20quiero%20información%20sobre%20implantes%20dentales%20en%20Cali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-full font-semibold hover:bg-background/90 transition-colors"
              >
                Agendar Valoración por WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Cómo Minimizamos el Dolor en Nuestra Clínica
            </h2>

            <p>
              En nuestra clínica en Cali, utilizamos varias técnicas y protocolos para asegurar que tu experiencia sea lo más cómoda posible:
            </p>

            <ul>
              <li><strong>Tecnología de punta:</strong> Equipos modernos y técnicas mínimamente invasivas que reducen el trauma quirúrgico</li>
              <li><strong>Planificación digital:</strong> Usamos guías quirúrgicas 3D para procedimientos más precisos y rápidos</li>
              <li><strong>Protocolo analgésico preventivo:</strong> Te damos medicación antes del procedimiento para que el dolor postoperatorio sea mínimo</li>
              <li><strong>Instrucciones claras:</strong> Te proporcionamos un kit postoperatorio con todo lo que necesitas y instrucciones detalladas</li>
              <li><strong>Seguimiento cercano:</strong> Estamos disponibles por WhatsApp para cualquier pregunta o inquietud después del procedimiento</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Comparación: Dolor de Implante vs Otros Procedimientos Dentales
            </h2>

            <p>
              Para poner las cosas en perspectiva, así se compara el dolor de un implante dental con otros procedimientos dentales comunes:
            </p>

            <div className="bg-card rounded-xl border border-border overflow-hidden my-8 not-prose">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Procedimiento</th>
                    <th className="text-center p-4 font-semibold text-foreground">Nivel de Dolor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Extracción de muela del juicio</td>
                    <td className="p-4 text-center">Alto</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-foreground">Tratamiento de conducto</td>
                    <td className="p-4 text-center">Moderado-Alto</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground font-semibold">Implante dental</td>
                    <td className="p-4 text-center text-primary font-semibold">Bajo-Moderado</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-foreground">Extracción simple</td>
                    <td className="p-4 text-center">Bajo-Moderado</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Limpieza profunda</td>
                    <td className="p-4 text-center">Bajo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Preguntas Frecuentes sobre el Dolor en Implantes
            </h2>

            <div className="space-y-6 not-prose">
              {[
                {
                  q: "¿Puedo tomar analgésicos antes del procedimiento?",
                  a: "Te daremos instrucciones específicas sobre qué medicamentos tomar antes del procedimiento. Generalmente, te recomendamos tomar ibuprofeno 1 hora antes de la cita para que haga efecto antes de que pase la anestesia."
                },
                {
                  q: "¿Qué pasa si siento dolor durante el procedimiento?",
                  a: "Solo levanta la mano y pausaremos inmediatamente para aplicar más anestesia. Tu comodidad es nuestra prioridad y siempre podemos agregar anestesia adicional si es necesario."
                },
                {
                  q: "¿Cuánto tiempo tendré que tomar analgésicos después?",
                  a: "La mayoría de pacientes solo necesitan analgésicos durante los primeros 2-3 días. Muchos los dejan después del primer o segundo día porque la molestia es muy leve."
                },
                {
                  q: "¿Es peor el dolor si me ponen varios implantes?",
                  a: "Sorprendentemente, no hay una gran diferencia. La zona permanece adormecida de todas formas y el procedimiento para múltiples implantes no aumenta significativamente el dolor postoperatorio."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-bold text-foreground mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Conclusión
            </h2>

            <p>
              El miedo al dolor no debería impedirte recuperar tu sonrisa. Los implantes dentales modernos son un procedimiento muy bien tolerado, con un nivel de dolor mucho menor al que la mayoría de personas imagina. La cirugía es completamente indolora gracias a la anestesia, y las molestias postoperatorias son manejables y de corta duración.
            </p>

            <p>
              En nuestra clínica en Cali, nos especializamos en hacer que tu experiencia sea lo más cómoda posible. Utilizamos las técnicas más modernas, ofrecemos opciones de sedación para pacientes ansiosos, y te acompañamos durante todo el proceso de recuperación.
            </p>
          </div>

          {/* Final CTA */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-primary rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Agenda tu Valoración por WhatsApp
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Ven a conocernos, resolvemos todas tus dudas sobre el procedimiento.
              </p>
              <a
                href="https://wa.me/573000000000?text=Hola,%20quiero%20información%20sobre%20implantes%20dentales%20en%20Cali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-full font-semibold hover:bg-background/90 transition-colors"
              >
                Agendar Valoración Ahora
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Related Links */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-xl font-bold text-foreground mb-6">Artículos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/implantes-dentales-cali" className="bg-card p-4 rounded-xl border border-border hover:border-primary transition-colors group">
                <span className="text-primary font-semibold group-hover:underline">Implantes Dentales en Cali</span>
                <p className="text-sm text-muted-foreground">Todo sobre el procedimiento</p>
              </Link>
              <Link href="/precio-implante-dental-cali" className="bg-card p-4 rounded-xl border border-border hover:border-primary transition-colors group">
                <span className="text-primary font-semibold group-hover:underline">Precios de Implantes</span>
                <p className="text-sm text-muted-foreground">Precios actualizados 2026</p>
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
