import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { Calendar, Clock, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Implante Dental en Cali: Precio, Proceso y Beneficios 2026 | Dr. Weider",
  description: "Guía completa sobre implantes dentales en Cali. Precio desde $1.500.000 COP, proceso paso a paso y todos los beneficios. Dr. Weider, especialista en implantología.",
  keywords: "implante dental Cali, implantes dentales Cali precio, proceso implante dental, beneficios implantes dentales",
  alternates: {
    canonical: "https://doctorweider.com/blog/implante-dental-cali-precio-proceso-beneficios"
  },
  openGraph: {
    title: "Implante Dental en Cali: Precio, Proceso y Beneficios",
    description: "Todo lo que necesitas saber sobre implantes dentales en Cali. Precios actualizados 2026.",
    url: "https://doctorweider.com/blog/implante-dental-cali-precio-proceso-beneficios",
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
              Guía Completa
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Implante Dental en Cali: Precio, Proceso y Beneficios
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Todo lo que necesitas saber sobre implantes dentales en Cali. Desde el precio hasta el proceso completo y los beneficios que transformarán tu calidad de vida.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                18 Marzo 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                15 min de lectura
              </span>
            </div>
          </header>

          {/* CTA Top */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-foreground font-medium mb-4">
                Si estás buscando implantes dentales en Cali, agenda tu valoración y conoce el tratamiento ideal para tu caso.
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
              Los <strong>implantes dentales en Cali</strong> se han convertido en la solución preferida por miles de pacientes que buscan recuperar su sonrisa de forma permanente. En esta guía completa te explicaremos absolutamente todo lo que necesitas saber: desde los precios actualizados 2026, pasando por el proceso paso a paso, hasta los beneficios que experimentarás al elegir implantes sobre otras alternativas.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              ¿Qué es un Implante Dental?
            </h2>
            
            <p>
              Un implante dental es una raíz artificial hecha de titanio que se coloca quirúrgicamente en el hueso de tu mandíbula o maxilar. Sobre esta raíz artificial se coloca una corona de porcelana o zirconio que imita perfectamente la apariencia y función de un diente natural.
            </p>

            <p>
              A diferencia de las prótesis removibles o los puentes dentales, los implantes son una solución <strong>permanente y autoportante</strong>, es decir, no dependen de los dientes adyacentes para sostenerse. Esto los convierte en la opción más similar a tener tu diente natural de vuelta.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Componentes de un Implante Dental</h3>
            
            <div className="bg-card rounded-xl border border-border p-6 my-8 not-prose">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <strong className="text-foreground">Implante (raíz artificial):</strong>
                    <p className="text-muted-foreground">Tornillo de titanio que se integra con el hueso mediante un proceso llamado osteointegración.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <strong className="text-foreground">Pilar (abutment):</strong>
                    <p className="text-muted-foreground">Conector que une el implante con la corona. Puede ser de titanio o zirconio.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <strong className="text-foreground">Corona dental:</strong>
                    <p className="text-muted-foreground">Parte visible del implante. Se fabrica a medida para que coincida con el color y forma de tus dientes naturales.</p>
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Precio de Implantes Dentales en Cali 2026
            </h2>

            <p>
              Una de las grandes ventajas de realizar tu tratamiento de implantes dentales en Cali es el precio accesible sin sacrificar calidad. Los precios actualizados para 2026 son:
            </p>

            <div className="bg-card rounded-xl border border-border overflow-hidden my-8 not-prose">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Tipo de Tratamiento</th>
                    <th className="text-right p-4 font-semibold text-foreground">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Implante unitario + corona</td>
                    <td className="p-4 text-right font-semibold text-primary">Desde $1.500.000 COP</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-foreground">Implante carga inmediata</td>
                    <td className="p-4 text-right font-semibold text-primary">Desde $2.200.000 COP</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">All-on-4 (boca completa)</td>
                    <td className="p-4 text-right font-semibold text-primary">Desde $12.000.000 COP</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Comparado con Estados Unidos donde un implante individual puede costar entre $3,000 y $5,000 USD, en Cali puedes obtener el mismo tratamiento con materiales de primera calidad por una fracción del precio.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Proceso del Implante Dental: Paso a Paso
            </h2>

            <p>
              El proceso de colocación de un implante dental en Cali sigue una serie de pasos cuidadosamente planificados para garantizar el éxito del tratamiento. A continuación te explicamos cada fase:
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Fase 1: Valoración y Diagnóstico</h3>
            <p>
              Todo comienza con una consulta de valoración donde evaluamos tu caso de manera integral. Durante esta cita realizamos:
            </p>
            <ul>
              <li>Examen clínico completo de tu boca</li>
              <li>Radiografía panorámica para ver la estructura ósea</li>
              <li>Tomografía 3D (si es necesario) para planificación precisa</li>
              <li>Evaluación de tu historial médico</li>
              <li>Discusión de tus expectativas y opciones de tratamiento</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Fase 2: Planificación del Tratamiento</h3>
            <p>
              Con toda la información recopilada, diseñamos un plan de tratamiento personalizado. Esto incluye determinar la posición exacta del implante, el tipo de implante más adecuado para tu caso y si necesitas algún procedimiento adicional como injerto óseo.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Fase 3: Cirugía de Colocación</h3>
            <p>
              La cirugía de colocación del implante es un procedimiento ambulatorio que se realiza con anestesia local. El procedimiento típico dura entre 30 minutos y 1 hora por implante y sigue estos pasos:
            </p>
            <ol>
              <li>Aplicación de anestesia local (no sentirás dolor)</li>
              <li>Pequeña incisión en la encía para acceder al hueso</li>
              <li>Preparación del lecho óseo con fresas especiales</li>
              <li>Colocación del implante de titanio en la posición planificada</li>
              <li>Sutura de la encía (puntos reabsorbibles o tradicionales)</li>
            </ol>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Fase 4: Osteointegración (Cicatrización)</h3>
            <p>
              Después de la cirugía, comienza el proceso de osteointegración, donde el implante de titanio se fusiona con el hueso de tu mandíbula. Este proceso toma típicamente:
            </p>
            <ul>
              <li><strong>Maxilar superior:</strong> 4-6 meses</li>
              <li><strong>Maxilar inferior:</strong> 3-4 meses</li>
            </ul>
            <p>
              Durante este tiempo, el implante no recibe carga y el hueso crece alrededor de él, creando una base sólida y permanente.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Fase 5: Colocación del Pilar y Corona</h3>
            <p>
              Una vez completada la osteointegración, procedemos a colocar el pilar de conexión y tomar impresiones para fabricar tu corona personalizada. La corona se diseña para que coincida perfectamente con el color, forma y tamaño de tus dientes naturales.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Fase 6: Controles y Mantenimiento</h3>
            <p>
              Después de colocar la corona, programamos citas de control para asegurar que todo está funcionando correctamente. También te damos instrucciones detalladas de cuidado y mantenimiento para garantizar la longevidad de tu implante.
            </p>

            {/* Mid CTA */}
            <div className="bg-primary rounded-xl p-8 my-12 not-prose text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                ¿Listo para Recuperar tu Sonrisa?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Agenda tu valoración y conoce el plan de tratamiento ideal para tu caso.
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
              Beneficios de los Implantes Dentales
            </h2>

            <p>
              Los implantes dentales ofrecen numerosos beneficios que van mucho más allá de la estética. Aquí te explicamos por qué son considerados la mejor solución para reemplazar dientes perdidos:
            </p>

            <div className="bg-card rounded-xl border border-border p-6 my-8 not-prose">
              <h3 className="font-bold text-foreground mb-4">Beneficios Principales:</h3>
              <ul className="space-y-3">
                {[
                  "Función masticatoria completa: Come lo que quieras sin restricciones",
                  "Estética natural: Lucen y se sienten como dientes reales",
                  "Preservación del hueso: Evitan la pérdida ósea que ocurre con dientes faltantes",
                  "Durabilidad: Pueden durar toda la vida con el cuidado adecuado",
                  "Independencia: No afectan a los dientes adyacentes",
                  "Confianza: Habla, ríe y socializa sin preocupaciones",
                  "Fácil mantenimiento: Se limpian como dientes naturales",
                  "Comodidad: No se mueven ni causan irritación como las prótesis"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Beneficio Emocional: Recupera tu Confianza</h3>
            <p>
              Más allá de los beneficios funcionales, los implantes dentales tienen un impacto profundo en la autoestima y bienestar emocional. Muchos de nuestros pacientes reportan:
            </p>
            <ul>
              <li>Mayor confianza al sonreír en público</li>
              <li>Mejor comunicación al poder hablar con claridad</li>
              <li>Disfrute renovado de la comida</li>
              <li>Mejora en las relaciones sociales y profesionales</li>
              <li>Reducción de la ansiedad social relacionada con los dientes</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              ¿Por Qué Elegir Implantes Dentales en Cali?
            </h2>

            <p>
              Cali se ha posicionado como un destino líder en turismo dental por varias razones importantes:
            </p>

            <ul>
              <li><strong>Precios competitivos:</strong> Hasta 70% más económico que en Estados Unidos o Europa</li>
              <li><strong>Especialistas calificados:</strong> Odontólogos con formación internacional y años de experiencia</li>
              <li><strong>Tecnología moderna:</strong> Equipos de última generación para diagnóstico y tratamiento</li>
              <li><strong>Materiales de primera:</strong> Utilizamos las mismas marcas premium que las clínicas internacionales</li>
              <li><strong>Atención personalizada:</strong> Tiempo y dedicación para cada paciente</li>
              <li><strong>Ciudad atractiva:</strong> Clima agradable, buena gastronomía y opciones turísticas</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-6 not-prose">
              {[
                {
                  q: "¿El procedimiento de implante dental es doloroso?",
                  a: "No. La cirugía se realiza con anestesia local, por lo que no sentirás dolor durante el procedimiento. Después de la cirugía, es normal experimentar algo de molestia que se controla fácilmente con analgésicos comunes."
                },
                {
                  q: "¿Cuánto tiempo dura todo el proceso de implante dental?",
                  a: "El proceso completo típicamente toma entre 3 y 6 meses, dependiendo de si necesitas injerto óseo y del tiempo de osteointegración. En casos seleccionados, ofrecemos carga inmediata donde puedes salir con dientes temporales el mismo día."
                },
                {
                  q: "¿Soy candidato para implantes dentales?",
                  a: "La mayoría de adultos con buena salud general son candidatos. Durante la valoración evaluamos factores como la cantidad de hueso disponible, tu salud general y hábitos como el tabaquismo. Incluso si tienes poco hueso, técnicas como el injerto óseo pueden hacerte candidato."
                },
                {
                  q: "¿Cuánto tiempo duran los implantes dentales?",
                  a: "Con el cuidado adecuado, los implantes dentales pueden durar toda la vida. El implante en sí (la raíz de titanio) tiene una tasa de éxito superior al 95% a 20 años. La corona puede necesitar reemplazo después de 10-15 años por desgaste normal."
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
              Los implantes dentales en Cali representan la mejor inversión que puedes hacer en tu salud bucal. Con precios desde $1.500.000 COP, un proceso bien establecido y beneficios que duran toda la vida, no hay mejor momento para recuperar tu sonrisa.
            </p>

            <p>
              En nuestra clínica, el Dr. Weider y su equipo están comprometidos con brindarte la mejor atención, utilizando tecnología de punta y materiales premium para garantizar resultados excepcionales.
            </p>
          </div>

          {/* Final CTA */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-primary rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Agenda tu Valoración por WhatsApp
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Da el primer paso hacia tu nueva sonrisa. Valoración sin compromiso.
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
                <p className="text-sm text-muted-foreground">Información completa del servicio</p>
              </Link>
              <Link href="/precio-implante-dental-cali" className="bg-card p-4 rounded-xl border border-border hover:border-primary transition-colors group">
                <span className="text-primary font-semibold group-hover:underline">Precios de Implantes</span>
                <p className="text-sm text-muted-foreground">Tabla completa de precios 2026</p>
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
