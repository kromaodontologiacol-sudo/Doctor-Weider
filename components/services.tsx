"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const services = [
  {
    title: "Implantes Dentales",
    shortDesc: "Recupera dientes perdidos con implantes de titanio de alta calidad.",
    fullDesc: "Los implantes dentales son la solución más avanzada para reemplazar dientes perdidos. Utilizamos implantes de titanio de grado médico con tecnología de planeación digital 3D para garantizar resultados precisos, duraderos y estéticos. El procedimiento es mínimamente invasivo y ofrece una solución permanente.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png",
  },
  {
    title: "Diseño de Sonrisa",
    shortDesc: "Transforma tu sonrisa con un diseño digital personalizado.",
    fullDesc: "El diseño de sonrisa combina arte y ciencia dental para crear la sonrisa perfecta para ti. Utilizamos software de simulación digital que te permite ver el resultado antes del tratamiento. Cada diseño considera la armonía facial, la forma de tus labios y tu personalidad.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-26%20at%205.08.27%20PM-60psGi6opt0KmYH3ojIgtlMMb8lv7A.jpeg",
  },
  {
    title: "Prótesis Convencionales",
    shortDesc: "Prótesis fijas y removibles de máxima calidad y confort.",
    fullDesc: "Ofrecemos prótesis dentales fijas y removibles con los más altos estándares de calidad. Desde coronas individuales hasta puentes y dentaduras completas, cada prótesis es diseñada digitalmente y fabricada con materiales de última generación para garantizar comodidad y estética natural.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protesis-removible-completa-EyWUDXxp4ySIYKOQp9Fobw9cjgJovW.jpg",
  },
  {
    title: "Prótesis de Alta Succión",
    shortDesc: "Dentaduras flexibles con retención superior sin adhesivos.",
    fullDesc: "Las prótesis de alta succión son dentaduras diseñadas con técnicas especiales que proporcionan una retención excepcional sin necesidad de adhesivos. Fabricadas con materiales flexibles de alta calidad, son ideales para pacientes que buscan comodidad y seguridad al hablar y comer.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%284%29-3RqbuwkL4JIyfDMMgjtZODhSS36MUo.jpg",
  },
  {
    title: "Coronas sobre Implantes",
    shortDesc: "Rehabilitación fija sobre implantes con estética natural.",
    fullDesc: "Las coronas sobre implantes son la solución ideal para restaurar dientes perdidos de forma permanente. Combinamos implantes de titanio con coronas de cerámica de alta estética que lucen y funcionan como dientes naturales. Tecnología CAD/CAM para máxima precisión.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2983.JPG-Uq8RpwOmPxRm6G2zNO5kX76aAvEqYf.jpeg",
  },
  {
    title: "Rehabilitación Oral Completa",
    shortDesc: "Restauración integral de tu salud bucal y función masticatoria.",
    fullDesc: "La rehabilitación oral es un tratamiento integral que restaura la función y estética de tu boca. Combinamos diferentes especialidades como implantes, prótesis, estética y periodoncia para devolverte una sonrisa completa y funcional. Ideal para pacientes que han perdido varios dientes.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2993.JPG-WO713zMc9atFAEDO1oyLAHgpUhrb9Z.jpeg",
  },
  {
    title: "Ortodoncia Convencional",
    shortDesc: "Brackets metálicos y estéticos para alinear tu sonrisa.",
    fullDesc: "La ortodoncia convencional corrige la posición de tus dientes con brackets de alta calidad. Ofrecemos opciones metálicas y estéticas (cerámicos) con técnicas modernas que reducen el tiempo de tratamiento. Incluye seguimiento mensual y ajustes para lograr resultados óptimos.",
    image: "/images/ortodoncia-brackets.jpg",
  },
  {
    title: "Ortodoncia Invisible",
    shortDesc: "Alineadores transparentes discretos y removibles.",
    fullDesc: "La ortodoncia invisible utiliza alineadores transparentes personalizados que son prácticamente imperceptibles. Puedes removerlos para comer y cepillarte. Mediante planeación digital 3D, podrás ver tu sonrisa final antes de iniciar el tratamiento. Ideal para adultos y adolescentes.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A4ncnPhwgN3upauMkQfCLxOQjwqOZl.png",
  },
  {
    title: "Cirugía de Cordales",
    shortDesc: "Extracción segura y sin dolor de muelas del juicio.",
    fullDesc: "La extracción de cordales se realiza con técnicas mínimamente invasivas y bajo anestesia local o sedación según el caso. Nuestro protocolo incluye evaluación radiográfica 3D, planeación del procedimiento y seguimiento postoperatorio para garantizar una recuperación rápida.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jhC4VczPzJAWhPoFgTxDfTwIJJgZnh.png",
  },
  {
    title: "Blanqueamiento Dental",
    shortDesc: "Dientes más blancos con tecnología LED profesional.",
    fullDesc: "El blanqueamiento dental con tecnología LED profesional puede aclarar tus dientes hasta 8 tonos en una sola sesión. Utilizamos geles de alta concentración aplicados por profesionales para garantizar resultados seguros y duraderos. El procedimiento es rápido e indoloro.",
    image: "/images/blanqueamiento-antes-despues.jpg",
  },
  {
    title: "Carillas en Cerámica",
    shortDesc: "Láminas ultrafinas para una sonrisa perfecta.",
    fullDesc: "Las carillas de cerámica son láminas ultrafinas que se adhieren a la superficie de tus dientes para corregir color, forma y tamaño. Fabricadas con cerámica de alta estética, lucen completamente naturales y son altamente resistentes. Mínima preparación dental para máximos resultados.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AvGQsTOt9F7sT7DwzkvMG98VHonQUt.png",
  },
  {
    title: "Endodoncia",
    shortDesc: "Tratamiento de conductos para salvar tu diente.",
    fullDesc: "La endodoncia es el tratamiento que salva dientes dañados o infectados. Utilizamos tecnología de localización de conductos y limas rotatorias de última generación para un procedimiento más rápido, preciso y cómodo. Eliminamos la infección preservando tu diente natural.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oeXrlCif4wPM2JnD6gUD2c023KOF0w.png",
  },
  {
    title: "Periodoncia",
    shortDesc: "Tratamiento especializado de encías y tejidos de soporte.",
    fullDesc: "La periodoncia trata las enfermedades de las encías y los tejidos que sostienen tus dientes. Desde limpiezas profundas hasta cirugía periodontal, nuestros tratamientos detienen la enfermedad y regeneran los tejidos dañados. Fundamental para mantener tus dientes sanos de por vida.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2hYLNHpMeFeJXnPuhrniTgXzIku8Ei.png",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Conoce nuestros{" "}
            <span className="text-accent">servicios</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de tratamientos odontológicos con tecnología 
            de vanguardia y atención personalizada en Cali.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-white hover:shadow-xl transition-all duration-300 border border-border/60 hover:border-primary/40 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted/30">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-5 bg-white">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {service.shortDesc}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-primary hover:text-primary/80 font-semibold"
                    >
                      Ver más detalles
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <DialogTitle className="text-xl font-serif">
                        {service.title}
                      </DialogTitle>
                      <DialogDescription className="text-base leading-relaxed pt-2">
                        {service.fullDesc}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                        <a
                          href={`https://wa.me/573235944931?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Consultar por WhatsApp
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
