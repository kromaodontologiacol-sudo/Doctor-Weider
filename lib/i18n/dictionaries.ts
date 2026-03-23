import { es, type Dictionary } from "./es"
import { en } from "./en"

export type Locale = "es" | "en"

const dictionaries: Record<Locale, Dictionary> = {
  es,
  en,
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.es
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es"
}

export function getLocalePath(locale: Locale): string {
  return locale === "en" ? "/en" : ""
}

export { type Dictionary }
