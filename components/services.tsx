"use client"

import Link from "next/link"
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
import type { Dictionary } from "@/lib/i18n/dictionaries"

const serviceImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent_Portfolio_Key_Visual-gi1i4cWtYpEBOJ2R0leY0uE2wIVpPt.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-26%20at%205.08.27%20PM-60psGi6opt0KmYH3ojIgtlMMb8lv7A.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protesis-removible-completa-EyWUDXxp4ySIYKOQp9Fobw9cjgJovW.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protesis-removible-completa-EyWUDXxp4ySIYKOQp9Fobw9cjgJovW.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%284%29-3RqbuwkL4JIyfDMMgjtZODhSS36MUo.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2983.JPG-Uq8RpwOmPxRm6G2zNO5kX76aAvEqYf.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2993.JPG-WO713zMc9atFAEDO1oyLAHgpUhrb9Z.jpeg",
  "/images/ortodoncia-brackets.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A4ncnPhwgN3upauMkQfCLxOQjwqOZl.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jhC4VczPzJAWhPoFgTxDfTwIJJgZnh.png",
  "/images/blanqueamiento-antes-despues.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AvGQsTOt9F7sT7DwzkvMG98VHonQUt.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oeXrlCif4wPM2JnD6gUD2c023KOF0w.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2hYLNHpMeFeJXnPuhrniTgXzIku8Ei.png",
]

interface ServicesProps {
  dictionary: Dictionary
}

export function Services({ dictionary }: ServicesProps) {
  const t = dictionary.services
  const whatsappServiceMessage = dictionary.whatsapp.serviceMessage

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            {t.title}{" "}
            <span className="text-accent">{t.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {t.items.map((service, index) => (
            <Card
              key={index}
              className="group bg-white hover:shadow-xl transition-all duration-300 border border-border/60 hover:border-primary/40 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted/30">
                <img
                  src={serviceImages[index]}
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
                      {t.viewMore}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <img
                          src={serviceImages[index]}
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
                      {service.href && (
                        <Button asChild variant="outline" className="w-full font-semibold">
                          <Link href={service.href}>
                            {t.viewMore}
                          </Link>
                        </Button>
                      )}
                      <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                        <a
                          href={`https://wa.me/573235944931?text=${encodeURIComponent(`${whatsappServiceMessage} ${service.title}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t.consultWhatsApp}
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
