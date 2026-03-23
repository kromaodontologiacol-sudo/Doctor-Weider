"use client"

import Link from "next/link"
import { Globe } from "lucide-react"
import type { Locale } from "@/lib/i18n/dictionaries"

interface LanguageSwitcherProps {
  currentLocale: Locale
  isScrolled?: boolean
}

export function LanguageSwitcher({ currentLocale, isScrolled = false }: LanguageSwitcherProps) {
  const alternateLocale = currentLocale === "es" ? "en" : "es"
  const alternatePath = currentLocale === "es" ? "/en" : "/"

  return (
    <div className={`flex items-center gap-1 text-sm font-medium ${
      isScrolled ? "text-foreground" : "text-white"
    }`}>
      <Globe className="h-4 w-4 mr-1" />
      <Link
        href="/"
        className={`px-2 py-1 rounded transition-colors ${
          currentLocale === "es"
            ? "bg-accent text-accent-foreground"
            : isScrolled 
              ? "hover:bg-muted" 
              : "hover:bg-white/10"
        }`}
      >
        ES
      </Link>
      <span className={isScrolled ? "text-muted-foreground" : "text-white/50"}>|</span>
      <Link
        href="/en"
        className={`px-2 py-1 rounded transition-colors ${
          currentLocale === "en"
            ? "bg-accent text-accent-foreground"
            : isScrolled 
              ? "hover:bg-muted" 
              : "hover:bg-white/10"
        }`}
      >
        EN
      </Link>
    </div>
  )
}
