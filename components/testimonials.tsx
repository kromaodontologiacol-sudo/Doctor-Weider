"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries"

const beforeAfterImages = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2415%20%281%29.PNG-9ntEn8M3I0TiX9rW9HFFG748TjueqG.png",
  },
  {
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2965.JPG-G5YpDxyreX0kecmisUbzigqTkRLWN4.jpeg",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2993.JPG-WO713zMc9atFAEDO1oyLAHgpUhrb9Z.jpeg",
  },
]

interface TestimonialsProps {
  dictionary: Dictionary
}

export function Testimonials({ dictionary }: TestimonialsProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const t = dictionary.testimonials

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % t.items.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + t.items.length) % t.items.length)
  }

  return (
    <section id="testimonios" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide uppercase">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            {t.title} <span className="text-primary">{t.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Google Reviews Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-card rounded-xl border border-border shadow-sm">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-foreground">5.0</span>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="font-semibold text-foreground">{t.googleReviews}</p>
              <p className="text-sm text-muted-foreground">{t.verifiedReviews}</p>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <Card className="border-none shadow-lg bg-card">
            <CardContent className="p-8 sm:p-12">
              <Quote className="w-12 h-12 text-accent/30 mb-6" />
              <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-8">
                {t.items[currentTestimonial].text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold">
                  {t.items[currentTestimonial].initial}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {t.items[currentTestimonial].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t.items[currentTestimonial].treatment}
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: t.items[currentTestimonial].rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-accent text-accent"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {t.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-accent w-6"
                      : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Before/After Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-8">
            {t.beforeAfter}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Combined before/after image */}
            <div className="group">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={beforeAfterImages[0].image}
                  alt={t.beforeAfterImages[0].treatment}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-foreground">{t.beforeAfterImages[0].treatment}</p>
                <p className="text-sm text-muted-foreground">{t.beforeAfterImages[0].description}</p>
              </div>
            </div>
            
            {/* Side by side before/after */}
            <div className="group">
              <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
                <div className="relative">
                  <img
                    src={beforeAfterImages[1].before}
                    alt={t.before}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <span className="absolute bottom-2 left-2 px-3 py-1 bg-foreground/80 text-background text-sm rounded-full font-medium">
                    {t.before}
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={beforeAfterImages[1].after}
                    alt={t.after}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <span className="absolute bottom-2 right-2 px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full font-medium">
                    {t.after}
                  </span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-foreground">{t.beforeAfterImages[1].treatment}</p>
                <p className="text-sm text-muted-foreground">{t.beforeAfterImages[1].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
