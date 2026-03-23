"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"

const navItems = [
  { href: "/en", label: "Home" },
  { href: "/en/dental-implants-cali", label: "Implants" },
  { href: "/en/dental-tourism-colombia", label: "Dental Tourism" },
  { href: "/en/smile-design-cali", label: "Smile Design" },
  { href: "/en/dental-implants-price-cali", label: "Pricing" },
  { href: "/en#contact", label: "Contact" },
]

export function HeaderEN() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          <Link href="/en" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className={`text-xl font-serif font-bold tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}>
                Doctor Weider
              </span>
              <span className={`text-[10px] tracking-wider uppercase ${isScrolled ? "text-accent" : "text-accent"}`}>
                Dental Clinic
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
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
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher isScrolled={isScrolled} />
            <a
              href="tel:+573235944931"
              className={`flex items-center gap-2 text-sm font-medium ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              <Phone className="h-4 w-4" />
              +57 323 594 4931
            </a>
            <Button 
              asChild 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <a
                href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20to%20schedule%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Appointment
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
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors border-b border-border last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <LanguageSwitcher isScrolled={true} />
              <a
                href="tel:+573235944931"
                className="flex items-center justify-center gap-2 text-base font-medium text-primary"
              >
                <Phone className="h-5 w-5" />
                +57 323 594 4931
              </a>
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <a
                  href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20to%20schedule%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Appointment
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
