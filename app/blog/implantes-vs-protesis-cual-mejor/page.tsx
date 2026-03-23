import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageCircle, Calendar, CheckCircle, XCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Implantes vs Prótesis: ¿Cuál es Mejor? Comparativa | Dr Weider",
  description: "Comparamos implantes dentales y prótesis removibles. Ventajas, desventajas, durabilidad y precio. Descubre cuál es mejor para ti en Cali.",
  keywords: "implantes vs protesis, que es mejor implante o protesis, comparacion implantes protesis, implantes dentales protesis removible",
}

export default function ImplantesVsProtesis() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <article className="py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                Comparativas
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                5 de enero, 2024
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
              Implantes vs Prótesis: ¿Cuál es Mejor?
            </h1>

            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protesis-removible-completa-EyWUDXxp4ySIYKOQp9Fobw9cjgJovW.jpg"
              alt="Comparación implantes y prótesis"
              className="w-full rounded-xl my-8 shadow-lg"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cuando pierdes uno o varios dientes, tienes principalmente dos opciones para reemplazarlos: 
                <strong>implantes dentales o prótesis removibles</strong>. Ambas opciones tienen sus ventajas 
                y situaciones ideales. En este artículo te ayudamos a entender cuál puede ser mejor para ti.
              </p>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                ¿Qué son los Implantes Dentales?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Los implantes dentales son pequeños tornillos de titanio que se colocan en el hueso maxilar 
                para reemplazar la raíz del diente perdido. Sobre el implante se coloca una corona de cerámica 
                que luce y funciona como un diente natural. Son una solución fija y permanente.
              </p>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                ¿Qué son las Prótesis Removibles?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Las prótesis removibles (dentaduras postizas) son aparatos que reemplazan los dientes perdidos 
                y que puedes quitar para limpiar. Pueden ser parciales (algunos dientes) o completas 
                (todos los dientes). Se apoyan en las encías y/o dientes restantes.
              </p>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                Comparación Detallada
              </h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="p-4 text-left">Aspecto</th>
                      <th className="p-4 text-left">Implantes</th>
                      <th className="p-4 text-left">Prótesis</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="p-4 font-medium">Durabilidad</td>
                      <td className="p-4">Toda la vida</td>
                      <td className="p-4">5-7 años</td>
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4 font-medium">Comodidad</td>
                      <td className="p-4">Alta (fijos)</td>
                      <td className="p-4">Media (pueden moverse)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Masticación</td>
                      <td className="p-4">100%</td>
                      <td className="p-4">60-70%</td>
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4 font-medium">Preservación ósea</td>
                      <td className="p-4">Sí</td>
                      <td className="p-4">No</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Precio inicial</td>
                      <td className="p-4">Mayor</td>
                      <td className="p-4">Menor</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="p-4 font-medium">Costo a largo plazo</td>
                      <td className="p-4">Menor</td>
                      <td className="p-4">Mayor (reemplazos)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                Ventajas de los Implantes Dentales
              </h2>
              <ul className="space-y-3 my-4">
                {[
                  "Se sienten y funcionan como dientes naturales",
                  "No necesitan adhesivos ni mantenimiento especial",
                  "Preservan el hueso de la mandíbula",
                  "Duran toda la vida con el cuidado adecuado",
                  "No afectan los dientes vecinos",
                  "Permiten comer cualquier tipo de alimento",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                Ventajas de las Prótesis Removibles
              </h2>
              <ul className="space-y-3 my-4">
                {[
                  "Menor costo inicial",
                  "No requieren cirugía",
                  "Proceso más rápido",
                  "Opción cuando no hay suficiente hueso",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                ¿Cuándo Elegir Cada Opción?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Elige Implantes si:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>- Buscas la mejor solución a largo plazo</li>
                    <li>- Valoras la comodidad máxima</li>
                    <li>- Quieres preservar tu hueso</li>
                    <li>- Tienes buena salud general</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Elige Prótesis si:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>- Tienes un presupuesto limitado</li>
                    <li>- No eres candidato para cirugía</li>
                    <li>- Necesitas una solución inmediata</li>
                    <li>- Prefieres evitar procedimientos invasivos</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">
                Nuestra Recomendación
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Si la salud y el presupuesto lo permiten, los <strong>implantes dentales son la mejor 
                opción</strong> para reemplazar dientes perdidos. Sin embargo, cada caso es único y la 
                mejor decisión es la que se toma después de una valoración profesional.
              </p>
            </div>

            <div className="mt-12 p-8 bg-primary rounded-xl text-white text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">
                ¿Cuál es la Mejor Opción para Ti?
              </h3>
              <p className="text-white/90 mb-6">
                Agenda una valoración gratuita y te ayudamos a decidir.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <a
                  href="https://wa.me/573235944931?text=Hola,%20quiero%20saber%20si%20me%20conviene%20implantes%20o%20prótesis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Agendar Valoración Gratuita
                </a>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
