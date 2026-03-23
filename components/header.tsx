"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import type { Dictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/dictionaries"

interface HeaderProps {
  dictionary: Dictionary
  locale: Locale
}

export function Header({ dictionary, locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const basePath = locale === "en" ? "/en" : ""

  const servicePages = locale === "en" ? [
    { href: `${basePath}/dental-implants-cali`, label: "Dental Implants" },
    { href: `${basePath}/dental-implants-price-cali`, label: "Implant Prices" },
    { href: `${basePath}/dental-prosthesis-cali`, label: "Dental Prosthesis" },
    { href: "/protesis-domicilio", label: "Home Prosthesis" },
    { href: `${basePath}/smile-design-cali`, label: "Smile Design" },
    { href: `${basePath}/dental-emergency-cali`, label: "Dental Emergency" },
    { href: `${basePath}/dental-tourism-colombia`, label: "Dental Tourism" },
  ] : [
    { href: "/implantes-dentales-cali", label: "Implantes Dentales" },
    { href: "/precio-implante-dental-cali", label: "Precios Implantes" },
    { href: "/protesis-dental-cali", label: "Prótesis Dental" },
    { href: "/protesis-domicilio", label: "Prótesis a Domicilio" },
    { href: "/diseno-de-sonrisa-cali", label: "Diseño de Sonrisa" },
    { href: "/urgencias-odontologicas-cali", label: "Urgencias" },
  ]

  const navItems = [
    { href: `${basePath}/#inicio`, label: dictionary.nav.home },
    { href: "services", label: dictionary.nav.services, hasDropdown: true },
    { href: `${basePath}/#proceso`, label: dictionary.nav.process },
    { href: `${basePath}/#testimonios`, label: dictionary.nav.testimonials },
    { href: `${basePath}/#doctor`, label: dictionary.nav.doctor },
    { href: `${basePath}/blog`, label: "Blog" },
    { href: `${basePath}/#contacto`, label: dictionary.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const whatsappMessage = encodeURIComponent(dictionary.whatsapp.scheduleMessage)

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/98 backdrop-blur-md shadow-sm border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href={basePath || "/"} className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className={`text-xl font-serif font-bold tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}>
                Doctor Weider
              </span>
              <span className={`text-[10px] tracking-wider uppercase ${isScrolled ? "text-accent" : "text-accent"}`}>
                {locale === "en" ? "Dental Clinic" : "Clínica Odontológica"}
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      isScrolled 
                        ? "text-muted-foreground hover:text-primary" 
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 pt-2 w-56">
                      <div className="bg-background rounded-lg shadow-lg border border-border py-2">
                        {servicePages.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled 
                      ? "text-muted-foreground hover:text-primary" 
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher currentLocale={locale} isScrolled={isScrolled} />
            <a
              href="tel:+573235944931"
              className={`flex items-center gap-2 text-sm font-medium ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              <Phone className="h-4 w-4" />
              323 594 4931
            </a>
            <Button 
              asChild 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <a
                href={`https://wa.me/573235944931?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dictionary.nav.schedule}
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col px-4 py-4">
            {navItems.filter(item => !item.hasDropdown).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors border-b border-border"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Services submenu mobile */}
            <div className="py-3 border-b border-border">
              <span className="text-base font-medium text-foreground">{dictionary.nav.services}</span>
              <div className="mt-2 pl-4 flex flex-col gap-2">
                {servicePages.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <div className="flex justify-center py-2">
                <LanguageSwitcher currentLocale={locale} isScrolled={true} />
              </div>
              <a
                href="tel:+573235944931"
                className="flex items-center justify-center gap-2 text-base font-medium text-primary"
              >
                <Phone className="h-5 w-5" />
                323 594 4931
              </a>
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <a
                  href={`https://wa.me/573235944931?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dictionary.nav.schedule}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
