import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { Calendar, Clock, ArrowRight, ArrowLeft, CheckCircle, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "¿Cuánto Dura un Implante Dental? Vida Útil Real 2026 | Dr. Weider Cali",
  description: "Descubre cuántos años puede durar un implante dental. Factores que afectan su vida útil, cuidados para maximizar durabilidad. Implantes dentales en Cali.",
  keywords: "cuánto dura implante dental, vida útil implante dental, durabilidad implantes dentales, implantes dentales Cali",
  alternates: {
    canonical: "https://doctorweider.com/blog/cuanto-dura-implante-dental"
  },
  openGraph: {
    title: "¿Cuánto Dura un Implante Dental? Vida Útil Real",
    description: "Todo sobre la durabilidad de los implantes dentales y cómo maximizar su vida útil.",
    url: "https://doctorweider.com/blog/cuanto-dura-implante-dental",
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
              Durabilidad
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              ¿Cuánto Dura un Implante Dental? Vida Útil Real
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Descubre la durabilidad real de los implantes dentales, qué factores afectan su vida útil y cómo cuidarlos para que duren toda la vida.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                10 Marzo 2026
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
                Si estás buscando implantes dentales en Cali, conoce nuestra garantía y los materiales que utilizamos para asegurar la máxima durabilidad.
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
              Una de las preguntas más frecuentes que recibimos sobre <strong>implantes dentales en Cali</strong> es: "¿Cuánto van a durar?" Es una pregunta válida, especialmente considerando la inversión que representan. La respuesta corta es que los implantes dentales pueden durar <strong>toda la vida</strong> con el cuidado adecuado. Pero veamos en detalle qué significa esto y qué factores influyen en su durabilidad.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              La Respuesta: Los Implantes Pueden Durar Toda la Vida
            </h2>
            
            <p>
              Los estudios científicos a largo plazo muestran que los implantes dentales tienen una <strong>tasa de éxito superior al 95% a los 20 años</strong>. Muchos pacientes con implantes colocados hace 30 o 40 años siguen disfrutando de ellos sin problemas.
            </p>

            <p>
              Sin embargo, es importante distinguir entre las diferentes partes del implante:
            </p>

            <div className="bg-card rounded-xl border border-border p-6 my-8 not-prose">
              <h3 className="font-bold text-foreground mb-4">Durabilidad por Componente:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <strong className="text-foreground">El implante (tornillo de titanio):</strong>
                    <p className="text-muted-foreground">Toda la vida. Una vez integrado con el hueso, el implante de titanio permanece de forma permanente. Es extremadamente raro que falle después de la osteointegración completa.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <strong className="text-foreground">El pilar (abutment):</strong>
                    <p className="text-muted-foreground">15-25 años típicamente. Puede necesitar reemplazo por desgaste, aunque muchos duran toda la vida.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <strong className="text-foreground">La corona:</strong>
                    <p className="text-muted-foreground">10-20 años. Es la parte que más desgaste sufre por la masticación. Es normal que necesite reemplazo eventualmente, pero el procedimiento es simple y no afecta al implante.</p>
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Factores que Afectan la Durabilidad del Implante
            </h2>

            <p>
              La longevidad de tus implantes dentales depende de varios factores. Algunos están bajo tu control y otros dependen de la calidad del tratamiento recibido.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">1. Higiene Oral</h3>
            <p>
              Este es el factor MÁS importante. Aunque los implantes no pueden tener caries, sí pueden desarrollar una condición llamada <strong>periimplantitis</strong>, que es una infección del tejido alrededor del implante causada por acumulación de bacterias.
            </p>
            <p>
              La periimplantitis puede llevar a la pérdida del implante si no se trata. La buena noticia es que se previene fácilmente con:
            </p>
            <ul>
              <li>Cepillado adecuado 2-3 veces al día</li>
              <li>Uso de hilo dental o cepillos interdentales</li>
              <li>Limpiezas profesionales cada 6 meses</li>
              <li>Irrigador bucal (opcional pero recomendado)</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">2. Tabaquismo</h3>
            <p>
              El tabaco es el enemigo número uno de los implantes dentales. Los fumadores tienen:
            </p>
            <ul>
              <li>Mayor riesgo de fallo del implante durante la osteointegración</li>
              <li>Mayor probabilidad de desarrollar periimplantitis</li>
              <li>Peor cicatrización de tejidos</li>
              <li>Reducción de la vida útil del implante</li>
            </ul>
            <p>
              Si fumas, te recomendamos encarecidamente dejar el hábito antes del tratamiento. Incluso reducir el consumo mejora significativamente las probabilidades de éxito.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">3. Calidad del Hueso</h3>
            <p>
              Un hueso denso y de buena calidad proporciona mejor soporte para el implante. Factores que afectan la calidad del hueso incluyen:
            </p>
            <ul>
              <li>Osteoporosis</li>
              <li>Tiempo transcurrido desde la pérdida del diente</li>
              <li>Edad del paciente</li>
              <li>Nutrición y nivel de calcio</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">4. Bruxismo (Rechinar de Dientes)</h3>
            <p>
              El bruxismo ejerce presión excesiva sobre los implantes y puede acelerar el desgaste de la corona o incluso dañar el implante mismo. Si tienes bruxismo, es importante usar una férula de descarga nocturna para proteger tus implantes.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">5. Enfermedades Sistémicas</h3>
            <p>
              Ciertas condiciones médicas pueden afectar la durabilidad de los implantes:
            </p>
            <ul>
              <li><strong>Diabetes:</strong> Especialmente si no está bien controlada, aumenta el riesgo de infecciones</li>
              <li><strong>Enfermedades autoinmunes:</strong> Pueden afectar la cicatrización</li>
              <li><strong>Tratamientos de quimioterapia o radioterapia:</strong> Pueden comprometer el hueso</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">6. Experiencia del Implantólogo</h3>
            <p>
              La habilidad y experiencia del especialista que coloca el implante es fundamental. Una colocación correcta en la posición, ángulo y profundidad adecuados asegura:
            </p>
            <ul>
              <li>Mejor distribución de las fuerzas de masticación</li>
              <li>Menor riesgo de complicaciones</li>
              <li>Mayor durabilidad a largo plazo</li>
            </ul>

            {/* Mid CTA */}
            <div className="bg-primary rounded-xl p-8 my-12 not-prose text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                ¿Tienes Preguntas sobre la Durabilidad de los Implantes?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                En tu valoración te explicamos nuestra garantía y los cuidados necesarios.
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
              Cómo Maximizar la Vida Útil de tus Implantes
            </h2>

            <p>
              Siguiendo estas recomendaciones puedes asegurar que tus implantes duren toda la vida:
            </p>

            <div className="bg-card rounded-xl border border-border p-6 my-8 not-prose">
              <h3 className="font-bold text-foreground mb-4">Cuidados Esenciales:</h3>
              <ul className="space-y-3">
                {[
                  "Cepilla tus dientes 2-3 veces al día con cepillo suave",
                  "Usa hilo dental o cepillos interdentales diariamente",
                  "Visita al dentista cada 6 meses para limpieza profesional",
                  "No fumes o reduce el consumo al mínimo",
                  "Usa férula de descarga si tienes bruxismo",
                  "Evita morder objetos duros (hielo, huesos, bolígrafos)",
                  "Mantén controladas enfermedades como la diabetes",
                  "Reporta cualquier molestia o inflamación inmediatamente"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Señales de Alerta: Cuándo Consultar al Dentista
            </h2>

            <p>
              Aunque los implantes son muy duraderos, debes estar atento a estas señales que indican que algo no está bien:
            </p>

            <div className="bg-card rounded-xl border border-border p-6 my-8 not-prose">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Señales de Alerta:
              </h3>
              <ul className="space-y-3">
                {[
                  "Encías rojas, hinchadas o sangrantes alrededor del implante",
                  "Dolor o molestia persistente",
                  "Sensación de que el implante se mueve",
                  "Mal aliento persistente o sabor desagradable",
                  "Pus o secreción alrededor del implante",
                  "Corona floja o que se siente diferente"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Comparación de Durabilidad: Implantes vs Otras Opciones
            </h2>

            <div className="bg-card rounded-xl border border-border overflow-hidden my-8 not-prose">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Tratamiento</th>
                    <th className="text-center p-4 font-semibold text-foreground">Durabilidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border bg-primary/5">
                    <td className="p-4 text-foreground font-semibold">Implante dental</td>
                    <td className="p-4 text-center text-primary font-semibold">Toda la vida</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Puente dental fijo</td>
                    <td className="p-4 text-center">10-15 años</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-foreground">Prótesis removible</td>
                    <td className="p-4 text-center">5-10 años</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Prótesis total (dentadura)</td>
                    <td className="p-4 text-center">5-8 años</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-6 not-prose">
              {[
                {
                  q: "¿Qué pasa si mi corona se daña?",
                  a: "Reemplazar la corona es un procedimiento simple que no requiere cirugía. El implante permanece en su lugar y solo se cambia la corona dañada por una nueva. Es similar a reemplazar una corona sobre un diente natural."
                },
                {
                  q: "¿Los implantes tienen garantía?",
                  a: "Sí, en nuestra clínica ofrecemos garantía en los implantes. La garantía cubre posibles fallos del implante durante el periodo de osteointegración y defectos de fabricación. Los términos específicos se discuten durante la valoración."
                },
                {
                  q: "¿Puedo hacerme resonancia magnética con implantes dentales?",
                  a: "Sí, los implantes de titanio son seguros para resonancias magnéticas. No son ferromagnéticos y no se ven afectados por los campos magnéticos. Siempre informa al técnico que tienes implantes dentales."
                },
                {
                  q: "¿Los implantes se oscurecen o manchan con el tiempo?",
                  a: "El implante en sí está dentro del hueso y no cambia. La corona de porcelana o zirconio es muy resistente a las manchas, pero puede acumular algo de tinción superficial con el tiempo. Las limpiezas profesionales mantienen la corona como nueva."
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
              Los implantes dentales son una inversión para toda la vida. Con tasas de éxito superiores al 95% a largo plazo y la posibilidad de durar décadas, representan la mejor opción disponible para reemplazar dientes perdidos.
            </p>

            <p>
              La clave para maximizar su durabilidad está en elegir un especialista experimentado, usar materiales de calidad y mantener una excelente higiene oral. En nuestra clínica en Cali combinamos todos estos factores para ofrecerte implantes que realmente duren toda la vida.
            </p>
          </div>

          {/* Final CTA */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-primary rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Agenda tu Valoración por WhatsApp
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Conoce nuestros implantes de calidad premium y garantía incluida.
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
