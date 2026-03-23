import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { Calendar, Clock, ArrowRight, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "¿Cuánto Cuesta un Implante Dental en Cali en 2026? | Precios Actualizados",
  description: "Precios actualizados de implantes dentales en Cali 2026. Desde $1.500.000 COP. Descubre qué incluye, factores que afectan el precio y opciones de financiamiento.",
  keywords: "cuánto cuesta implante dental Cali, precio implante dental Cali 2026, implantes dentales Cali precio, costo implante dental Cali",
  alternates: {
    canonical: "https://doctorweider.com/blog/cuanto-cuesta-implante-dental-cali-2026"
  },
  openGraph: {
    title: "¿Cuánto Cuesta un Implante Dental en Cali en 2026?",
    description: "Precios actualizados de implantes dentales en Cali. Desde $1.500.000 COP incluye implante y corona.",
    url: "https://doctorweider.com/blog/cuanto-cuesta-implante-dental-cali-2026",
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
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Volver al Blog
            </Link>
          </nav>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Precios 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              ¿Cuánto Cuesta un Implante Dental en Cali en 2026?
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Guía completa y actualizada de precios de implantes dentales en Cali. Conoce exactamente cuánto invertirás, qué incluye cada precio y cómo planificar tu tratamiento.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                20 Marzo 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                12 min de lectura
              </span>
              <span className="flex items-center gap-2">
                Dr. Weider Gutiérrez
              </span>
            </div>
          </header>

          {/* CTA Top */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-foreground font-medium mb-4">
                Si estás buscando implantes dentales en Cali, agenda tu valoración personalizada y recibe un presupuesto exacto para tu caso.
              </p>
              <a
                href="https://wa.me/573000000000?text=Hola,%20quiero%20información%20sobre%20implantes%20dentales%20en%20Cali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Solicitar Cotización por WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="lead text-xl text-muted-foreground">
              Una de las preguntas más frecuentes que recibimos en nuestra clínica es: <strong>¿cuánto cuesta un implante dental en Cali?</strong> Es una pregunta válida y muy importante, ya que se trata de una inversión significativa en tu salud bucal y calidad de vida. En este artículo te explicaremos todo lo que necesitas saber sobre los precios de implantes dentales en Cali en 2026, qué factores influyen en el costo y cómo puedes planificar tu tratamiento de manera inteligente.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Precio de Implantes Dentales en Cali 2026: Tabla de Precios
            </h2>
            
            <p>
              Los precios de implantes dentales en Cali varían según el tipo de tratamiento, la marca del implante y la complejidad del caso. A continuación te presentamos una tabla con los precios actualizados para 2026:
            </p>

            <div className="bg-card rounded-xl border border-border overflow-hidden my-8 not-prose">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Tratamiento</th>
                    <th className="text-right p-4 font-semibold text-foreground">Precio COP</th>
                    <th className="text-right p-4 font-semibold text-foreground">Precio USD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Implante dental + Corona</td>
                    <td className="p-4 text-right font-semibold text-primary">Desde $1.500.000</td>
                    <td className="p-4 text-right text-muted-foreground">~$380 USD</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-foreground">Implante con carga inmediata</td>
                    <td className="p-4 text-right font-semibold text-primary">Desde $2.200.000</td>
                    <td className="p-4 text-right text-muted-foreground">~$550 USD</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">All-on-4 (arcada completa)</td>
                    <td className="p-4 text-right font-semibold text-primary">Desde $12.000.000</td>
                    <td className="p-4 text-right text-muted-foreground">~$3,000 USD</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-foreground">All-on-6 (arcada completa)</td>
                    <td className="p-4 text-right font-semibold text-primary">Desde $15.000.000</td>
                    <td className="p-4 text-right text-muted-foreground">~$3,750 USD</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Injerto óseo (si es necesario)</td>
                    <td className="p-4 text-right font-semibold text-primary">Desde $800.000</td>
                    <td className="p-4 text-right text-muted-foreground">~$200 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Es importante destacar que estos precios son referenciales y pueden variar según cada caso particular. La única forma de obtener un presupuesto exacto es mediante una valoración personalizada donde evaluamos tu situación específica.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              ¿Qué Incluye el Precio del Implante Dental?
            </h2>

            <p>
              Cuando hablamos del precio de un implante dental en Cali, es fundamental entender exactamente qué está incluido. En nuestra clínica, el precio del implante dental incluye:
            </p>

            <div className="bg-card rounded-xl border border-border p-6 my-8 not-prose">
              <h3 className="font-bold text-foreground mb-4">Incluido en el precio:</h3>
              <ul className="space-y-3">
                {[
                  "Implante de titanio de alta calidad (marca premium)",
                  "Corona dental de porcelana o zirconio",
                  "Pilar de conexión (abutment)",
                  "Valoración inicial completa",
                  "Radiografías panorámicas",
                  "Cirugía de colocación del implante",
                  "Anestesia local",
                  "Controles postoperatorios",
                  "Garantía del implante"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Factores que Afectan el Precio del Implante Dental
            </h2>

            <p>
              El precio final de tu tratamiento de implantes dentales en Cali puede variar según varios factores importantes. Entender estos factores te ayudará a comprender por qué los presupuestos pueden diferir:
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">1. Cantidad de Implantes Necesarios</h3>
            <p>
              Si necesitas reemplazar varios dientes, el precio total será mayor. Sin embargo, muchas clínicas ofrecemos descuentos por múltiples implantes. Por ejemplo, si necesitas 3 implantes, el precio por unidad puede ser menor que si solo necesitas uno.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">2. Necesidad de Injerto Óseo</h3>
            <p>
              Si has perdido un diente hace mucho tiempo, es posible que el hueso de tu mandíbula se haya reabsorbido. En estos casos, puede ser necesario realizar un injerto óseo antes de colocar el implante. Este procedimiento adicional tiene un costo extra que varía entre $800.000 y $2.000.000 COP dependiendo de la complejidad.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">3. Tipo de Corona</h3>
            <p>
              La corona que va sobre el implante puede ser de diferentes materiales:
            </p>
            <ul>
              <li><strong>Porcelana sobre metal:</strong> Opción económica y duradera</li>
              <li><strong>Zirconio:</strong> Más estética, especialmente para dientes frontales</li>
              <li><strong>E-max:</strong> Máxima estética, ideal para sonrisas perfectas</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">4. Marca del Implante</h3>
            <p>
              Existen diferentes marcas de implantes dentales en el mercado. Las marcas premium como Straumann, Nobel Biocare o BioHorizons tienen mayor costo pero ofrecen mejor garantía y resultados más predecibles a largo plazo.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">5. Complejidad del Caso</h3>
            <p>
              Algunos casos requieren planificación quirúrgica avanzada, uso de guías quirúrgicas o técnicas especiales que pueden incrementar el precio final del tratamiento.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              ¿Por Qué los Implantes Dentales en Cali Son Más Económicos?
            </h2>

            <p>
              Una de las razones por las que muchos pacientes de Estados Unidos y Europa eligen Cali para sus implantes dentales es el precio significativamente más bajo. Pero, ¿por qué son más económicos los implantes en Colombia?
            </p>

            <div className="bg-card rounded-xl border border-border p-6 my-8 not-prose">
              <h3 className="font-bold text-foreground mb-4">Comparación de Precios:</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-foreground">Estados Unidos</span>
                  <span className="font-semibold text-foreground">$3,000 - $5,000 USD</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-foreground">España</span>
                  <span className="font-semibold text-foreground">$2,000 - $3,500 USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-semibold">Cali, Colombia</span>
                  <span className="font-bold text-primary">$380 - $600 USD</span>
                </div>
              </div>
            </div>

            <p>
              Los precios más bajos en Colombia no significan menor calidad. La diferencia se debe a:
            </p>
            <ul>
              <li>Menores costos operativos y de infraestructura</li>
              <li>Diferencias en el costo de vida</li>
              <li>Sistema de salud con diferentes estructuras de costos</li>
              <li>Competencia saludable entre especialistas</li>
            </ul>

            <p>
              En nuestra clínica utilizamos los mismos materiales e implantes de marcas premium que se usan en clínicas de Estados Unidos y Europa, con la diferencia de que podemos ofrecerlos a precios mucho más accesibles.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              ¿Cómo Puedo Financiar mis Implantes Dentales?
            </h2>

            <p>
              Entendemos que los implantes dentales representan una inversión importante. Por eso, ofrecemos diferentes opciones para que puedas acceder a este tratamiento:
            </p>

            <ul>
              <li><strong>Pago de contado:</strong> Obtén un descuento especial pagando el tratamiento completo</li>
              <li><strong>Pago en cuotas:</strong> Divide tu tratamiento en 2-3 pagos según las fases del procedimiento</li>
              <li><strong>Financiamiento:</strong> Trabajamos con entidades financieras que ofrecen créditos para tratamientos de salud</li>
              <li><strong>Tarjetas de crédito:</strong> Aceptamos todas las tarjetas con opción de diferir</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              ¿Vale la Pena Invertir en Implantes Dentales?
            </h2>

            <p>
              La respuesta corta es: <strong>sí, definitivamente vale la pena</strong>. Los implantes dentales son la mejor inversión que puedes hacer en tu salud bucal porque:
            </p>

            <ul>
              <li>Duran toda la vida con el cuidado adecuado (a diferencia de las prótesis que deben reemplazarse cada 5-10 años)</li>
              <li>Previenen la pérdida ósea que ocurre cuando falta un diente</li>
              <li>Te permiten comer, hablar y sonreír con total confianza</li>
              <li>No afectan a los dientes adyacentes (como los puentes tradicionales)</li>
              <li>Mejoran significativamente tu calidad de vida</li>
            </ul>

            <p>
              Si calculas el costo a largo plazo, los implantes dentales terminan siendo más económicos que las prótesis removibles, que requieren reemplazos frecuentes, ajustes y adhesivos especiales.
            </p>

            {/* Mid CTA */}
            <div className="bg-primary rounded-xl p-8 my-12 not-prose text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                ¿Quieres Saber el Precio Exacto para tu Caso?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Agenda una valoración gratuita y recibe un presupuesto personalizado sin compromiso.
              </p>
              <a
                href="https://wa.me/573000000000?text=Hola,%20quiero%20información%20sobre%20implantes%20dentales%20en%20Cali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-full font-semibold hover:bg-background/90 transition-colors"
              >
                Cotizar por WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Preguntas Frecuentes sobre Precios de Implantes en Cali
            </h2>

            <div className="space-y-6 not-prose">
              {[
                {
                  q: "¿El precio incluye la corona dental?",
                  a: "Sí, en nuestra clínica el precio del implante dental incluye el implante de titanio, el pilar de conexión y la corona de porcelana o zirconio. No hay costos ocultos ni sorpresas."
                },
                {
                  q: "¿Puedo pagar en cuotas mis implantes dentales?",
                  a: "Sí, ofrecemos diferentes opciones de financiamiento. Puedes dividir el pago en 2-3 cuotas según las fases del tratamiento, o utilizar financiamiento externo con entidades aliadas."
                },
                {
                  q: "¿Por qué hay tanta diferencia de precios entre clínicas?",
                  a: "La diferencia de precios se debe principalmente a la marca del implante utilizado, la experiencia del especialista, los equipos tecnológicos de la clínica y los materiales de la corona. Siempre recomendamos preguntar exactamente qué incluye cada presupuesto."
                },
                {
                  q: "¿El injerto óseo siempre es necesario?",
                  a: "No siempre. Solo es necesario cuando hay pérdida significativa de hueso. Esto se determina mediante radiografías y tomografía en la valoración inicial. Aproximadamente el 30% de nuestros pacientes requieren algún tipo de injerto."
                },
                {
                  q: "¿Cuánto cuestan los implantes dentales para turistas extranjeros?",
                  a: "El precio es el mismo para todos nuestros pacientes. No cobramos más a pacientes extranjeros. De hecho, muchos pacientes de Estados Unidos y Europa nos eligen porque pueden ahorrar hasta un 70% comparado con los precios de sus países."
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
              El precio de un implante dental en Cali en 2026 comienza desde $1.500.000 COP (aproximadamente $380 USD), lo que lo convierte en una de las opciones más accesibles del continente sin sacrificar calidad. En nuestra clínica trabajamos con materiales de primera línea y técnicas modernas para garantizar resultados duraderos y naturales.
            </p>

            <p>
              Si estás considerando implantes dentales, el mejor siguiente paso es agendar una valoración. En esta cita evaluaremos tu caso específico, te explicaremos las opciones disponibles y te daremos un presupuesto exacto sin compromiso.
            </p>
          </div>

          {/* Final CTA */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-primary rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Agenda tu Valoración por WhatsApp
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Recibe un presupuesto personalizado para tu caso. Sin compromiso.
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
                <p className="text-sm text-muted-foreground">Todo sobre el procedimiento de implantes</p>
              </Link>
              <Link href="/precio-implante-dental-cali" className="bg-card p-4 rounded-xl border border-border hover:border-primary transition-colors group">
                <span className="text-primary font-semibold group-hover:underline">Precios de Implantes Dentales</span>
                <p className="text-sm text-muted-foreground">Tabla de precios actualizada 2026</p>
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
