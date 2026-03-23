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
import Link from "next/link"

const services = [
  {
    title: "Dental Implants",
    shortDesc: "Restore missing teeth with high-quality titanium implants.",
    fullDesc: "Dental implants are the most advanced solution to replace missing teeth. We use medical-grade titanium implants with 3D digital planning technology to guarantee precise, durable, and aesthetic results. The procedure is minimally invasive and offers a permanent solution.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png",
    link: "/en/dental-implants-cali",
  },
  {
    title: "Smile Design",
    shortDesc: "Transform your smile with personalized digital design.",
    fullDesc: "Smile design combines art and dental science to create the perfect smile for you. We use digital simulation software that allows you to see the result before treatment. Each design considers facial harmony, the shape of your lips, and your personality.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-26%20at%205.08.27%20PM-60psGi6opt0KmYH3ojIgtlMMb8lv7A.jpeg",
    link: "/en/smile-design-cali",
  },
  {
    title: "Dental Prosthesis",
    shortDesc: "Fixed and removable prostheses of maximum quality and comfort.",
    fullDesc: "We offer fixed and removable dental prostheses with the highest quality standards. From individual crowns to bridges and complete dentures, each prosthesis is digitally designed and manufactured with state-of-the-art materials to guarantee comfort and natural aesthetics.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protesis-removible-completa-EyWUDXxp4ySIYKOQp9Fobw9cjgJovW.jpg",
    link: "/en/dental-prosthesis-cali",
  },
  {
    title: "High-Suction Prosthesis",
    shortDesc: "Flexible dentures with superior retention without adhesives.",
    fullDesc: "High-suction prostheses are dentures designed with special techniques that provide exceptional retention without the need for adhesives. Made with high-quality flexible materials, they are ideal for patients seeking comfort and security when speaking and eating.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%284%29-3RqbuwkL4JIyfDMMgjtZODhSS36MUo.jpg",
  },
  {
    title: "Crowns on Implants",
    shortDesc: "Fixed rehabilitation on implants with natural aesthetics.",
    fullDesc: "Crowns on implants are the ideal solution to permanently restore missing teeth. We combine titanium implants with high-aesthetic ceramic crowns that look and function like natural teeth. CAD/CAM technology for maximum precision.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2983.JPG-Uq8RpwOmPxRm6G2zNO5kX76aAvEqYf.jpeg",
  },
  {
    title: "Full Mouth Rehabilitation",
    shortDesc: "Comprehensive restoration of your oral health and chewing function.",
    fullDesc: "Oral rehabilitation is a comprehensive treatment that restores the function and aesthetics of your mouth. We combine different specialties such as implants, prostheses, aesthetics, and periodontics to give you a complete and functional smile. Ideal for patients who have lost several teeth.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2993.JPG-WO713zMc9atFAEDO1oyLAHgpUhrb9Z.jpeg",
  },
  {
    title: "Traditional Orthodontics",
    shortDesc: "Metal and aesthetic brackets to align your smile.",
    fullDesc: "Traditional orthodontics corrects the position of your teeth with high-quality brackets. We offer metal and aesthetic (ceramic) options with modern techniques that reduce treatment time. Includes monthly follow-up and adjustments for optimal results.",
    image: "/images/ortodoncia-brackets.jpg",
  },
  {
    title: "Clear Aligners",
    shortDesc: "Discreet and removable transparent aligners.",
    fullDesc: "Clear aligners use custom transparent trays that are virtually invisible. You can remove them to eat and brush. Through 3D digital planning, you can see your final smile before starting treatment. Ideal for adults and teenagers.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A4ncnPhwgN3upauMkQfCLxOQjwqOZl.png",
  },
  {
    title: "Wisdom Teeth Removal",
    shortDesc: "Safe and painless extraction of wisdom teeth.",
    fullDesc: "Wisdom teeth extraction is performed with minimally invasive techniques and under local anesthesia or sedation as needed. Our protocol includes 3D radiographic evaluation, procedure planning, and postoperative follow-up to ensure rapid recovery.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jhC4VczPzJAWhPoFgTxDfTwIJJgZnh.png",
  },
  {
    title: "Teeth Whitening",
    shortDesc: "Whiter teeth with professional LED technology.",
    fullDesc: "Professional LED teeth whitening can lighten your teeth up to 8 shades in a single session. We use high-concentration gels applied by professionals to guarantee safe and long-lasting results. The procedure is quick and painless.",
    image: "/images/blanqueamiento-antes-despues.jpg",
  },
  {
    title: "Ceramic Veneers",
    shortDesc: "Ultra-thin laminates for a perfect smile.",
    fullDesc: "Ceramic veneers are ultra-thin laminates that adhere to the surface of your teeth to correct color, shape, and size. Made with high-aesthetic ceramic, they look completely natural and are highly resistant. Minimal tooth preparation for maximum results.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AvGQsTOt9F7sT7DwzkvMG98VHonQUt.png",
  },
  {
    title: "Root Canal Treatment",
    shortDesc: "Root canal treatment to save your tooth.",
    fullDesc: "Root canal treatment saves damaged or infected teeth. We use canal location technology and state-of-the-art rotary files for a faster, more precise, and comfortable procedure. We eliminate the infection while preserving your natural tooth.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oeXrlCif4wPM2JnD6gUD2c023KOF0w.png",
  },
  {
    title: "Periodontics",
    shortDesc: "Specialized treatment of gums and supporting tissues.",
    fullDesc: "Periodontics treats diseases of the gums and tissues that support your teeth. From deep cleanings to periodontal surgery, our treatments stop the disease and regenerate damaged tissues. Essential for keeping your teeth healthy for life.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2hYLNHpMeFeJXnPuhrniTgXzIku8Ei.png",
  },
]

export function ServicesEN() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Discover our{" "}
            <span className="text-accent">dental services</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of dental treatments with cutting-edge technology 
            and personalized care in Cali, Colombia.
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
                      View more details
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
                    <div className="mt-4 flex flex-col gap-2">
                      {service.link && (
                        <Button asChild variant="outline" className="w-full">
                          <Link href={service.link}>
                            Learn more about this treatment
                          </Link>
                        </Button>
                      )}
                      <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                        <a
                          href={`https://wa.me/573235944931?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Inquire via WhatsApp
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
