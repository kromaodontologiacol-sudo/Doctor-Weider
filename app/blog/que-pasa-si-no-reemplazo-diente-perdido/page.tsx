import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { Calendar, Clock, ArrowRight, ArrowLeft, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "¿Qué Pasa Si No Reemplazo un Diente Perdido? Consecuencias Reales | Dr. Weider Cali",
  description: "Descubre las consecuencias de no reemplazar un diente perdido: pérdida ósea, movimiento dental, problemas de mordida. Por qué es importante actuar rápido. Implantes en Cali.",
  keywords: "diente perdido consecuencias, no reemplazar diente, pérdida ósea dental, implantes dentales Cali",
  alternates: {
    canonical: "https://doctorweider.com/blog/que-pasa-si-no-reemplazo-diente-perdido"
  },
  openGraph: {
    title: "¿Qué Pasa Si No Reemplazo un Diente Perdido?",
    description: "Consecuencias reales de no reemplazar un diente y por qué actuar rápido es importante.",
    url: "https://doctorweider.com/blog/que-pasa-si-no-reemplazo-diente-perdido",
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
              Salud Bucal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              ¿Qué Pasa Si No Reemplazo un Diente Perdido?
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Las consecuencias reales de postergar el reemplazo de un diente. Por qué cada mes que pasa hace el tratamiento más difícil y costoso.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                8 Marzo 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                11 min de lectura
              </span>
            </div>
          </header>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-foreground font-medium mb-4">
                Si estás buscando implantes dentales en Cali para reemplazar un diente perdido, no esperes más. Agenda tu valoración hoy.
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
              Perder un diente es más común de lo que crees. Ya sea por una extracción, un accidente o una enfermedad periodontal, muchas personas se encuentran con un espacio vacío en su boca. Y aunque es tentador ignorarlo, especialmente si está en una zona poco visible, <strong>no reemplazar un diente perdido tiene consecuencias serias</strong> que van mucho más allá de lo estético. En este artículo te explicamos exactamente qué sucede y por qué actuar rápido es tan importante.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Consecuencia #1: Pérdida del Hueso Mandibular
            </h2>
            
            <p>
              Esta es probablemente la consecuencia más seria y menos conocida. Cuando pierdes un diente, el hueso que lo sostenía comienza a <strong>reabsorberse</strong> porque ya no recibe estímulo de la raíz del diente durante la masticación.
            </p>

            <div className="bg-card rounded-xl border border-border p-6 my-8 not-prose">
              <h3 className="font-bold text-foreground mb-4">Línea de tiempo de pérdida ósea:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Primeros 6 meses:</strong>
                    <p className="text-muted-foreground">Se pierde aproximadamente el 25% del ancho del hueso</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Primer año:</strong>
                    <p className="text-muted-foreground">La pérdida puede alcanzar el 40-60% del volumen original</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Años 2-5:</strong>
                    <p className="text-muted-foreground">La atrofia continúa, haciendo más difícil colocar implantes sin injerto óseo</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Largo plazo:</strong>
                    <p className="text-muted-foreground">Puede haber pérdida tan severa que afecta la estructura facial</p>
                  </div>
                </li>
              </ul>
            </div>

            <p>
              ¿Por qué importa esto? Porque si decides colocar un implante después de varios años, es muy probable que necesites un <strong>injerto óseo</strong> previo, lo que aumenta el costo, el tiempo de tratamiento y la complejidad del procedimiento.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Consecuencia #2: Los Dientes Vecinos Se Mueven
            </h2>

            <p>
              Tus dientes están en un equilibrio constante. Cada diente mantiene su posición gracias a la presencia de los dientes vecinos. Cuando uno falta, los dientes adyacentes comienzan a <strong>inclinarse hacia el espacio vacío</strong>, y el diente de arriba (o de abajo) comienza a <strong>extruirse</strong> (salirse de su posición).
            </p>

            <p>
              Este movimiento dental puede causar:
            </p>

            <ul>
              <li><strong>Problemas de mordida:</strong> Los dientes ya no encajan correctamente</li>
              <li><strong>Dolor de mandíbula:</strong> Tensión en la articulación temporomandibular (ATM)</li>
              <li><strong>Acumulación de comida:</strong> Entre los dientes inclinados</li>
              <li><strong>Mayor riesgo de caries:</strong> En las nuevas superficies expuestas</li>
              <li><strong>Tratamiento más complejo:</strong> Puede requerirse ortodoncia antes de colocar implantes</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Consecuencia #3: Problemas de Masticación y Digestión
            </h2>

            <p>
              Cada diente tiene una función específica en el proceso de masticación. Cuando falta uno (o varios), el resto de los dientes deben compensar, lo que puede llevar a:
            </p>

            <ul>
              <li>Masticación ineficiente de los alimentos</li>
              <li>Sobrecarga en otros dientes, acelerando su desgaste</li>
              <li>Problemas digestivos por no masticar adecuadamente</li>
              <li>Cambios en la dieta (evitar alimentos duros o fibrosos)</li>
              <li>Deficiencias nutricionales a largo plazo</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Consecuencia #4: Cambios en la Apariencia Facial
            </h2>

            <p>
              La pérdida ósea no solo afecta tu boca, sino que puede cambiar la apariencia de tu rostro con el tiempo:
            </p>

            <ul>
              <li><strong>Hundimiento de mejillas:</strong> El hueso que soporta los tejidos faciales se reduce</li>
              <li><strong>Labios hundidos:</strong> Especialmente notable con la pérdida de dientes frontales</li>
              <li><strong>Arrugas prematuras:</strong> Alrededor de la boca por falta de soporte</li>
              <li><strong>Aspecto de envejecimiento:</strong> Puede hacerte lucir años mayor</li>
              <li><strong>Asimetría facial:</strong> Si la pérdida es de un solo lado</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Consecuencia #5: Impacto Psicológico y Social
            </h2>

            <p>
              No podemos ignorar el impacto emocional de la pérdida de dientes. Muchas personas experimentan:
            </p>

            <ul>
              <li><strong>Baja autoestima:</strong> Especialmente si la pérdida es visible</li>
              <li><strong>Ansiedad social:</strong> Evitar sonreír, hablar o comer en público</li>
              <li><strong>Aislamiento:</strong> Reducción de vida social por vergüenza</li>
              <li><strong>Impacto profesional:</strong> Puede afectar entrevistas de trabajo o relaciones laborales</li>
              <li><strong>Problemas de relación:</strong> Afecta la intimidad y la confianza</li>
            </ul>

            {/* Mid CTA */}
            <div className="bg-primary rounded-xl p-8 my-12 not-prose text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                No Esperes Más: Cada Mes Cuenta
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Mientras más pronto actúes, más simple y económico será el tratamiento.
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
              Consecuencia #6: Pérdida de Más Dientes
            </h2>

            <p>
              Un fenómeno poco conocido es que <strong>la pérdida de un diente puede llevar a la pérdida de más dientes</strong>. Esto ocurre por varias razones:
            </p>

            <ul>
              <li>Los dientes vecinos se debilitan al moverse e inclinarse</li>
              <li>La sobrecarga en otros dientes acelera su deterioro</li>
              <li>Los espacios nuevos acumulan bacterias y causan enfermedad periodontal</li>
              <li>La pérdida ósea puede afectar las raíces de dientes adyacentes</li>
            </ul>

            <p>
              Estadísticamente, las personas que pierden un diente y no lo reemplazan tienen mayor probabilidad de perder más dientes en los siguientes años.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              ¿Por Qué los Implantes Son la Mejor Solución?
            </h2>

            <p>
              A diferencia de otras opciones como puentes o prótesis removibles, los <strong>implantes dentales en Cali</strong> son la única opción que:
            </p>

            <ul>
              <li><strong>Detiene la pérdida ósea:</strong> El implante estimula el hueso igual que una raíz natural</li>
              <li><strong>No afecta dientes vecinos:</strong> Es autoportante, no depende de otros dientes</li>
              <li><strong>Restaura la función al 100%:</strong> Come cualquier alimento sin restricciones</li>
              <li><strong>Es permanente:</strong> Dura toda la vida con el cuidado adecuado</li>
              <li><strong>Mantiene tu apariencia:</strong> Preserva la estructura facial</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              ¿Cuál es el Mejor Momento para Colocar un Implante?
            </h2>

            <p>
              La respuesta simple es: <strong>lo antes posible</strong>. Idealmente, un implante debería colocarse dentro de los primeros 3-6 meses después de la pérdida del diente, cuando:
            </p>

            <ul>
              <li>El hueso todavía tiene buen volumen</li>
              <li>Los dientes vecinos no han comenzado a moverse significativamente</li>
              <li>No se requieren procedimientos adicionales como injertos</li>
              <li>El tratamiento es más simple, rápido y económico</li>
            </ul>

            <p>
              Sin embargo, <strong>nunca es demasiado tarde</strong>. Incluso si han pasado años, existen técnicas modernas como injertos óseos que permiten colocar implantes exitosamente en la mayoría de casos.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              El Costo de Esperar vs. El Costo de Actuar
            </h2>

            <p>
              Muchas personas postergan el tratamiento por razones económicas. Pero considera esto:
            </p>

            <div className="bg-card rounded-xl border border-border overflow-hidden my-8 not-prose">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Escenario</th>
                    <th className="text-right p-4 font-semibold text-foreground">Costo Aproximado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border bg-green-50">
                    <td className="p-4 text-foreground">Implante dentro de los primeros 6 meses</td>
                    <td className="p-4 text-right font-semibold text-green-600">$1.500.000</td>
                  </tr>
                  <tr className="border-t border-border bg-amber-50">
                    <td className="p-4 text-foreground">Implante + injerto óseo (1-2 años después)</td>
                    <td className="p-4 text-right font-semibold text-amber-600">$2.300.000 - $3.000.000</td>
                  </tr>
                  <tr className="border-t border-border bg-red-50">
                    <td className="p-4 text-foreground">Implante + injerto + ortodoncia (años después)</td>
                    <td className="p-4 text-right font-semibold text-red-600">$4.000.000+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Como puedes ver, actuar rápido no solo es mejor para tu salud, sino también para tu bolsillo.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-6 not-prose">
              {[
                {
                  q: "¿Y si mi diente perdido no se ve?",
                  a: "Las consecuencias ocurren igual independientemente de si el diente es visible o no. La pérdida ósea, el movimiento dental y los problemas de mordida suceden aunque sea una muela trasera. De hecho, perder molares puede ser especialmente problemático porque son los dientes que más trabajan durante la masticación."
                },
                {
                  q: "¿Cuánto tiempo puedo esperar antes de que sea demasiado tarde?",
                  a: "Nunca es técnicamente 'demasiado tarde', pero mientras más tiempo esperes, más complejo y costoso será el tratamiento. Lo ideal es actuar dentro de los primeros 6 meses. Después de un año, probablemente necesitarás algún tipo de injerto óseo."
                },
                {
                  q: "¿Un puente dental es buena alternativa mientras ahorro para el implante?",
                  a: "Un puente puede ser una solución temporal, pero tiene desventajas: requiere tallar (dañar) los dientes sanos adyacentes y no previene la pérdida ósea. Si estás ahorrando para un implante, una prótesis removible temporal es mejor opción que un puente."
                },
                {
                  q: "¿Qué pasa si perdí el diente hace muchos años?",
                  a: "Aún puedes ser candidato para implantes. En tu valoración evaluamos el estado del hueso mediante radiografías. Aunque necesites injerto óseo, las técnicas modernas permiten restaurar el hueso perdido y colocar implantes exitosamente en la mayoría de casos."
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
              No reemplazar un diente perdido tiene consecuencias que van mucho más allá de lo estético. La pérdida ósea, el movimiento dental, los problemas de mordida y el impacto psicológico son razones de peso para actuar lo antes posible.
            </p>

            <p>
              Los implantes dentales en Cali son la mejor solución porque son la única opción que realmente reemplaza tanto la raíz como la corona del diente, deteniendo la pérdida ósea y restaurando la función completa.
            </p>

            <p>
              Si has perdido un diente recientemente, o si llevas tiempo postergando el tratamiento, te invitamos a agendar una valoración. Mientras más pronto actúes, más simple, rápido y económico será recuperar tu sonrisa.
            </p>
          </div>

          {/* Final CTA */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-primary rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Agenda tu Valoración por WhatsApp
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                No dejes pasar más tiempo. Recupera tu sonrisa ahora.
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
