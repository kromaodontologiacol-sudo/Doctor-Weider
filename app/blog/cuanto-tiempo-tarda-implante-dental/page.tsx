import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { Calendar, Clock, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "¿Cuánto Tiempo Tarda un Implante Dental? Proceso Completo 2026 | Dr. Weider Cali",
  description: "Cronograma completo del proceso de implantes dentales: desde la valoración hasta la corona final. Tiempos de cicatrización y qué esperar en cada fase. Cali.",
  keywords: "cuánto tarda implante dental, tiempo implante dental, proceso implante dental, fases implante dental, implantes dentales Cali",
  alternates: {
    canonical: "https://doctorweider.com/blog/cuanto-tiempo-tarda-implante-dental"
  },
  openGraph: {
    title: "¿Cuánto Tiempo Tarda un Implante Dental? Proceso Completo",
    description: "Cronograma detallado del proceso de implantes dentales desde la primera cita hasta la corona.",
    url: "https://doctorweider.com/blog/cuanto-tiempo-tarda-implante-dental",
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
              Proceso
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              ¿Cuánto Tiempo Tarda un Implante Dental? Proceso Completo
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Cronograma detallado del proceso de implantes dentales. Desde tu primera cita hasta que sonríes con tu diente nuevo. Qué esperar en cada fase.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                5 Marzo 2026
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
                Si estás buscando implantes dentales en Cali, agenda tu valoración y te explicaremos el cronograma específico para tu caso.
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
              "¿Cuánto tiempo voy a tardar en tener mi diente nuevo?" Es una de las preguntas más frecuentes que recibimos sobre <strong>implantes dentales en Cali</strong>. La respuesta depende de varios factores, pero en general el proceso completo toma entre <strong>3 y 6 meses</strong>. En este artículo te explicamos cada fase del proceso, los tiempos involucrados y qué opciones existen para acelerar el tratamiento.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Resumen: Línea de Tiempo del Implante Dental
            </h2>
            
            <div className="bg-card rounded-xl border border-border overflow-hidden my-8 not-prose">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Fase</th>
                    <th className="text-right p-4 font-semibold text-foreground">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Valoración y diagnóstico</td>
                    <td className="p-4 text-right">1 cita (1 hora)</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-foreground">Cirugía de colocación</td>
                    <td className="p-4 text-right">30-60 min por implante</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Osteointegración (cicatrización)</td>
                    <td className="p-4 text-right font-semibold text-primary">3-6 meses</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-foreground">Colocación de corona</td>
                    <td className="p-4 text-right">2 citas (1-2 semanas)</td>
                  </tr>
                  <tr className="border-t border-border bg-primary/10">
                    <td className="p-4 text-foreground font-bold">TOTAL PROCESO CONVENCIONAL</td>
                    <td className="p-4 text-right font-bold text-primary">3-6 meses</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Fase 1: Valoración y Diagnóstico (1 Cita)
            </h2>

            <p>
              Todo comienza con una consulta de valoración que típicamente dura aproximadamente 1 hora. Durante esta cita:
            </p>

            <ul>
              <li>Realizamos un examen completo de tu boca</li>
              <li>Tomamos radiografías panorámicas y/o tomografía 3D</li>
              <li>Evaluamos la cantidad y calidad de hueso disponible</li>
              <li>Revisamos tu historial médico</li>
              <li>Discutimos tus opciones de tratamiento</li>
              <li>Te entregamos un presupuesto detallado</li>
            </ul>

            <p>
              En algunos casos, si vienes con exámenes previos y el caso es sencillo, podemos programar la cirugía para la siguiente semana. En otros casos, puede ser necesario realizar tratamientos previos (como extracciones o tratamiento de enfermedad periodontal) antes de proceder con el implante.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Fase 2: Cirugía de Colocación del Implante
            </h2>

            <p>
              La cirugía de colocación es un procedimiento ambulatorio que se realiza con anestesia local. El tiempo depende del número de implantes:
            </p>

            <div className="bg-card rounded-xl border border-border p-6 my-8 not-prose">
              <h3 className="font-bold text-foreground mb-4">Tiempo de cirugía:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>1 implante:</strong> 30-45 minutos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>2-3 implantes:</strong> 45-90 minutos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>All-on-4:</strong> 2-3 horas</span>
                </li>
              </ul>
            </div>

            <p>
              Después de la cirugía, podrás irte a casa el mismo día. La mayoría de pacientes pueden retomar actividades normales (trabajo de oficina, tareas ligeras) al día siguiente, aunque recomendamos evitar ejercicio intenso durante la primera semana.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Fase 3: Osteointegración (El Tiempo de Espera)
            </h2>

            <p>
              Esta es la fase más larga del proceso. La <strong>osteointegración</strong> es el proceso mediante el cual el implante de titanio se fusiona con el hueso de tu mandíbula, creando una base sólida y permanente para tu diente nuevo.
            </p>

            <p>
              Los tiempos de osteointegración varían según la ubicación:
            </p>

            <ul>
              <li><strong>Maxilar inferior (mandíbula):</strong> 3-4 meses. El hueso de la mandíbula es más denso y la integración es más rápida.</li>
              <li><strong>Maxilar superior:</strong> 4-6 meses. El hueso del maxilar superior es más poroso y requiere más tiempo.</li>
            </ul>

            <p>
              Durante este tiempo, el implante está cubierto por la encía o tiene un tapón de cicatrización. No puedes masticar sobre él, pero en la mayoría de casos no es visible ni molesto.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">¿Qué hago mientras espero?</h3>

            <p>
              Si el diente perdido está en una zona visible, hay varias opciones temporales:
            </p>

            <ul>
              <li><strong>Prótesis parcial removible temporal:</strong> Opción económica y efectiva</li>
              <li><strong>Flipper dental:</strong> Aparato ligero para uso cosmético</li>
              <li><strong>Provisional adhesivo:</strong> Se adhiere a los dientes vecinos</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Fase 4: Colocación de la Corona
            </h2>

            <p>
              Una vez completada la osteointegración, procedemos a colocar la corona definitiva. Este proceso típicamente requiere 2 citas separadas por 1-2 semanas:
            </p>

            <div className="bg-card rounded-xl border border-border p-6 my-8 not-prose">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <strong className="text-foreground">Primera cita:</strong>
                    <p className="text-muted-foreground">Colocamos el pilar de conexión y tomamos impresiones para fabricar tu corona personalizada.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <strong className="text-foreground">Segunda cita (1-2 semanas después):</strong>
                    <p className="text-muted-foreground">Colocamos la corona definitiva. Hacemos ajustes finos de mordida si es necesario.</p>
                  </div>
                </li>
              </ul>
            </div>

            <p>
              Después de esta cita, tu tratamiento está completo y puedes usar tu nuevo diente con normalidad.
            </p>

            {/* Mid CTA */}
            <div className="bg-primary rounded-xl p-8 my-12 not-prose text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                ¿Quieres Conocer el Cronograma para tu Caso?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Cada caso es diferente. En tu valoración te explicamos exactamente cuánto tiempo tomará tu tratamiento.
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
              ¿Se Puede Acelerar el Proceso? Implantes de Carga Inmediata
            </h2>

            <p>
              Sí, existe una opción llamada <strong>implantes de carga inmediata</strong> donde puedes salir con dientes el mismo día de la cirugía. Sin embargo, no todos los pacientes son candidatos.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Requisitos para carga inmediata:</h3>

            <ul>
              <li>Buena calidad y cantidad de hueso</li>
              <li>Ausencia de infecciones activas</li>
              <li>No fumador o fumador muy leve</li>
              <li>Buena salud general</li>
              <li>Estabilidad primaria adecuada del implante</li>
            </ul>

            <p>
              En la carga inmediata, se coloca una corona provisional el mismo día de la cirugía. Esta corona es más delicada que la definitiva y tiene algunas restricciones de uso. Después del periodo de osteointegración, se reemplaza por la corona definitiva.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Factores que Pueden Alargar el Tratamiento
            </h2>

            <p>
              En algunos casos, el proceso puede tomar más tiempo debido a:
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">1. Necesidad de Injerto Óseo</h3>
            <p>
              Si no tienes suficiente hueso, puede ser necesario realizar un injerto óseo previo. Esto añade 4-6 meses adicionales al tratamiento para que el injerto cicatrice antes de colocar el implante.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">2. Extracciones Previas</h3>
            <p>
              Si el diente aún está en boca y necesita ser extraído, hay dos opciones:
            </p>
            <ul>
              <li><strong>Implante inmediato:</strong> Se coloca el implante el mismo día de la extracción (si las condiciones lo permiten)</li>
              <li><strong>Esperar cicatrización:</strong> 2-3 meses de espera entre extracción e implante</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">3. Tratamientos Periodontales</h3>
            <p>
              Si tienes enfermedad de las encías, es necesario tratarla primero antes de colocar implantes. Esto puede añadir varias semanas o meses al proceso.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-6 not-prose">
              {[
                {
                  q: "¿Cuántas citas necesitaré en total?",
                  a: "En un caso típico sin complicaciones, necesitarás aproximadamente 4-5 citas: valoración, cirugía, control post-operatorio, impresiones y colocación de corona. Estas citas están distribuidas a lo largo de 3-6 meses."
                },
                {
                  q: "¿Puedo hacer todo el proceso en una sola semana si vengo de viaje?",
                  a: "No es posible completar el proceso tradicional en una semana debido al tiempo de osteointegración. Sin embargo, podemos realizar la valoración, cirugía y colocación de provisional (en casos aptos) en tu primera visita, y programar la corona definitiva para una segunda visita meses después."
                },
                {
                  q: "¿Qué pasa si no puedo venir a todas las citas?",
                  a: "La mayoría de citas de control pueden ser flexibles. Las citas críticas son la cirugía y la colocación de la corona. Trabajamos contigo para adaptar el cronograma a tus necesidades."
                },
                {
                  q: "¿Por qué no se puede acelerar la osteointegración?",
                  a: "La osteointegración es un proceso biológico natural donde el hueso crece alrededor del implante. No puede acelerarse artificialmente sin comprometer la estabilidad del implante. Saltarse este tiempo puede resultar en fracaso del implante."
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
              El proceso completo de implantes dentales en Cali típicamente toma entre 3 y 6 meses, con la mayor parte del tiempo dedicada a la cicatrización natural del hueso. Aunque puede parecer largo, es importante respetar estos tiempos para asegurar el éxito a largo plazo de tu implante.
            </p>

            <p>
              En nuestra clínica, te mantenemos informado en cada paso del proceso y trabajamos para hacer el tratamiento lo más eficiente posible sin comprometer la calidad o seguridad.
            </p>
          </div>

          {/* Final CTA */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-primary rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Agenda tu Valoración por WhatsApp
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Conoce el cronograma exacto para tu caso específico.
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
