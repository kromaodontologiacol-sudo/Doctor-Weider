import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { Calendar, Clock, ArrowRight, ArrowLeft, CheckCircle, X } from "lucide-react"

export const metadata: Metadata = {
  title: "Implante Dental vs Prótesis: ¿Cuál es Mejor? Comparación 2026 | Dr. Weider Cali",
  description: "Comparación completa entre implantes dentales y prótesis removibles. Ventajas, desventajas, precios y cuál elegir según tu caso. Dr. Weider, especialista en Cali.",
  keywords: "implante vs prótesis, implante dental o prótesis, diferencia implante prótesis, qué es mejor implante o prótesis, implantes dentales Cali",
  alternates: {
    canonical: "https://doctorweider.com/blog/implante-dental-vs-protesis-cual-mejor"
  },
  openGraph: {
    title: "Implante Dental vs Prótesis: ¿Cuál es Mejor?",
    description: "Comparación detallada entre implantes dentales y prótesis. Descubre cuál es la mejor opción para ti.",
    url: "https://doctorweider.com/blog/implante-dental-vs-protesis-cual-mejor",
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
              Comparativa
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Implante Dental vs Prótesis: ¿Cuál es Mejor?
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Comparación completa y honesta entre implantes dentales y prótesis removibles. Te ayudamos a tomar la mejor decisión según tu situación específica.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                12 Marzo 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                12 min de lectura
              </span>
            </div>
          </header>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-foreground font-medium mb-4">
                Si estás buscando la mejor solución para reemplazar dientes perdidos en Cali, agenda una valoración y te asesoramos según tu caso específico.
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
              Cuando perdemos uno o más dientes, enfrentamos una decisión importante: ¿qué opción de reemplazo es mejor para nosotros? Las dos alternativas más comunes son los <strong>implantes dentales</strong> y las <strong>prótesis removibles</strong>. Cada opción tiene sus ventajas y desventajas, y la mejor elección depende de tu situación particular. En este artículo analizaremos ambas opciones en detalle para ayudarte a tomar una decisión informada.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              ¿Qué son los Implantes Dentales?
            </h2>
            
            <p>
              Un implante dental es una raíz artificial de titanio que se inserta quirúrgicamente en el hueso de la mandíbula. Sobre este implante se coloca una corona de porcelana o zirconio que replica la apariencia y función de un diente natural.
            </p>

            <p>
              Los implantes son una solución <strong>fija y permanente</strong> que no requiere ser removida para limpieza y que funciona exactamente como un diente natural.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              ¿Qué son las Prótesis Removibles?
            </h2>

            <p>
              Las prótesis removibles, comúnmente conocidas como "dentaduras postizas" o "placas", son aparatos que reemplazan los dientes perdidos y que el paciente puede quitar y poner. Existen dos tipos principales:
            </p>

            <ul>
              <li><strong>Prótesis parciales:</strong> Reemplazan algunos dientes y se sujetan a los dientes naturales restantes</li>
              <li><strong>Prótesis totales:</strong> Reemplazan todos los dientes de una arcada y se sostienen por succión en la encía</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Tabla Comparativa: Implantes vs Prótesis
            </h2>

            <div className="bg-card rounded-xl border border-border overflow-hidden my-8 not-prose">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Aspecto</th>
                    <th className="text-center p-4 font-semibold text-foreground">Implantes</th>
                    <th className="text-center p-4 font-semibold text-foreground">Prótesis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground font-medium">Durabilidad</td>
                    <td className="p-4 text-center text-green-600">Toda la vida</td>
                    <td className="p-4 text-center text-muted-foreground">5-10 años</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-foreground font-medium">Comodidad</td>
                    <td className="p-4 text-center text-green-600">Alta</td>
                    <td className="p-4 text-center text-muted-foreground">Moderada</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground font-medium">Estética</td>
                    <td className="p-4 text-center text-green-600">Natural</td>
                    <td className="p-4 text-center text-muted-foreground">Aceptable</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-foreground font-medium">Función masticatoria</td>
                    <td className="p-4 text-center text-green-600">100%</td>
                    <td className="p-4 text-center text-muted-foreground">40-60%</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground font-medium">Preservación ósea</td>
                    <td className="p-4 text-center text-green-600">Sí</td>
                    <td className="p-4 text-center text-red-600">No</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-foreground font-medium">Mantenimiento</td>
                    <td className="p-4 text-center text-green-600">Mínimo</td>
                    <td className="p-4 text-center text-muted-foreground">Diario</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground font-medium">Inversión inicial</td>
                    <td className="p-4 text-center text-muted-foreground">Mayor</td>
                    <td className="p-4 text-center text-green-600">Menor</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-foreground font-medium">Costo a largo plazo</td>
                    <td className="p-4 text-center text-green-600">Menor</td>
                    <td className="p-4 text-center text-muted-foreground">Mayor</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Ventajas de los Implantes Dentales
            </h2>

            <div className="bg-card rounded-xl border border-border p-6 my-8 not-prose">
              <h3 className="font-bold text-foreground mb-4">Beneficios principales:</h3>
              <ul className="space-y-3">
                {[
                  "Sienten y funcionan como dientes naturales",
                  "No se mueven ni causan incomodidad",
                  "Permiten comer cualquier alimento sin restricciones",
                  "Preservan el hueso de la mandíbula",
                  "No afectan a los dientes adyacentes",
                  "Duran toda la vida con el cuidado adecuado",
                  "Mejoran la confianza y autoestima",
                  "Mantenimiento igual que dientes naturales"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Desventajas de los Implantes Dentales
            </h2>

            <div className="bg-card rounded-xl border border-border p-6 my-8 not-prose">
              <ul className="space-y-3">
                {[
                  "Mayor inversión inicial",
                  "Requieren cirugía (procedimiento ambulatorio)",
                  "Proceso de tratamiento más largo (3-6 meses)",
                  "No todos son candidatos (se requiere suficiente hueso)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Ventajas de las Prótesis Removibles
            </h2>

            <div className="bg-card rounded-xl border border-border p-6 my-8 not-prose">
              <ul className="space-y-3">
                {[
                  "Menor costo inicial",
                  "Proceso de elaboración más rápido",
                  "No requieren cirugía",
                  "Opción válida cuando hay poco hueso"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Desventajas de las Prótesis Removibles
            </h2>

            <div className="bg-card rounded-xl border border-border p-6 my-8 not-prose">
              <ul className="space-y-3">
                {[
                  "Se mueven y pueden causar incomodidad",
                  "Reducen significativamente la capacidad de masticación",
                  "Pueden causar irritación y llagas en las encías",
                  "Necesitan adhesivos para mantenerse en su lugar",
                  "Deben removerse para limpieza diaria",
                  "Aceleran la pérdida ósea de la mandíbula",
                  "Necesitan reemplazo cada 5-10 años",
                  "Pueden afectar el habla",
                  "Limitan qué alimentos puedes comer"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Comparación de Costos: Inversión a Largo Plazo
            </h2>

            <p>
              Aunque los implantes dentales tienen un costo inicial mayor, son más económicos a largo plazo. Veamos un ejemplo comparativo para 20 años:
            </p>

            <div className="bg-card rounded-xl border border-border overflow-hidden my-8 not-prose">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Concepto</th>
                    <th className="text-right p-4 font-semibold text-foreground">Implante</th>
                    <th className="text-right p-4 font-semibold text-foreground">Prótesis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Inversión inicial</td>
                    <td className="p-4 text-right">$1.500.000</td>
                    <td className="p-4 text-right">$400.000</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-foreground">Reemplazos (20 años)</td>
                    <td className="p-4 text-right">$0</td>
                    <td className="p-4 text-right">$800.000 (2 reemplazos)</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Adhesivos/mantenimiento</td>
                    <td className="p-4 text-right">$0</td>
                    <td className="p-4 text-right">$600.000</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-foreground">Ajustes y reparaciones</td>
                    <td className="p-4 text-right">$0</td>
                    <td className="p-4 text-right">$400.000</td>
                  </tr>
                  <tr className="border-t border-border bg-primary/10">
                    <td className="p-4 text-foreground font-bold">Total 20 años</td>
                    <td className="p-4 text-right font-bold text-primary">$1.500.000</td>
                    <td className="p-4 text-right font-bold">$2.200.000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Como puedes ver, aunque la prótesis tiene un costo inicial menor, los gastos acumulados a lo largo del tiempo hacen que los implantes sean la opción más económica a largo plazo.
            </p>

            {/* Mid CTA */}
            <div className="bg-primary rounded-xl p-8 my-12 not-prose text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                ¿Quieres Saber Cuál es la Mejor Opción para Ti?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                En tu valoración evaluaremos tu caso y te recomendaremos la mejor solución.
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
              ¿Cuándo Elegir Implantes Dentales?
            </h2>

            <p>
              Los implantes dentales son la mejor opción cuando:
            </p>

            <ul>
              <li>Buscas una solución permanente y de por vida</li>
              <li>Quieres mantener la funcionalidad completa de tu mordida</li>
              <li>Te preocupa la pérdida ósea</li>
              <li>No quieres depender de adhesivos o productos especiales</li>
              <li>Valoras la comodidad y naturalidad</li>
              <li>Puedes hacer una inversión mayor inicial</li>
              <li>Tienes suficiente hueso (o puedes hacer injerto)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              ¿Cuándo Considerar Prótesis Removibles?
            </h2>

            <p>
              Las prótesis removibles pueden ser una opción válida cuando:
            </p>

            <ul>
              <li>El presupuesto es muy limitado</li>
              <li>Hay condiciones médicas que contraindican la cirugía</li>
              <li>Hay pérdida ósea severa sin posibilidad de injerto</li>
              <li>Se necesita una solución temporal</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              La Opción Intermedia: Prótesis sobre Implantes
            </h2>

            <p>
              Existe una tercera opción que combina lo mejor de ambos mundos: las <strong>prótesis sobre implantes</strong> o <strong>sobredentaduras</strong>. En este caso, se colocan 2-4 implantes que sirven como anclaje para una prótesis removible.
            </p>

            <p>
              Esta opción ofrece:
            </p>

            <ul>
              <li>Mayor estabilidad que una prótesis convencional</li>
              <li>Menor costo que implantes individuales</li>
              <li>Mejor preservación del hueso</li>
              <li>Mayor comodidad y confianza</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-6 not-prose">
              {[
                {
                  q: "¿Puedo cambiar de prótesis a implantes más adelante?",
                  a: "Sí, es posible en la mayoría de casos. Sin embargo, es importante actuar cuanto antes porque la prótesis acelera la pérdida ósea, lo que puede complicar la colocación de implantes en el futuro."
                },
                {
                  q: "¿Los implantes son aptos para personas mayores?",
                  a: "Sí, la edad no es una contraindicación para los implantes dentales. Lo que importa es el estado de salud general y la calidad del hueso. Tenemos pacientes de 70+ años con implantes exitosos."
                },
                {
                  q: "¿Qué pasa si no tengo suficiente hueso para implantes?",
                  a: "Existen técnicas como el injerto óseo o los implantes cigomáticos que permiten colocar implantes incluso en casos de pérdida ósea severa. En la valoración evaluamos tu caso específico."
                },
                {
                  q: "¿Puedo comer normalmente con prótesis removibles?",
                  a: "Las prótesis removibles limitan significativamente la dieta. Alimentos duros, pegajosos o fibrosos pueden ser difíciles o imposibles de masticar. Los implantes permiten comer cualquier alimento sin restricciones."
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
              Aunque las prótesis removibles pueden ser una solución temporal válida en ciertos casos, los implantes dentales son claramente superiores en términos de funcionalidad, comodidad, durabilidad y costo a largo plazo. Si tienes la posibilidad de elegir, los implantes dentales son la mejor inversión que puedes hacer en tu salud bucal y calidad de vida.
            </p>

            <p>
              En nuestra clínica en Cali ofrecemos ambas opciones y te asesoramos honestamente sobre cuál es la mejor para tu caso particular. Nuestra prioridad es tu bienestar y satisfacción a largo plazo.
            </p>
          </div>

          {/* Final CTA */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-primary rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Agenda tu Valoración por WhatsApp
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Te ayudamos a elegir la mejor opción para tu caso.
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
