"use client"

import { MessageCircle } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface WhatsAppButtonProps {
  dictionary: Dictionary
}

export function WhatsAppButton({ dictionary }: WhatsAppButtonProps) {
  const message = encodeURIComponent(dictionary.whatsapp.message)

  return (
    <a
      href={`https://wa.me/573235944931?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-medium">{dictionary.whatsapp.helpText}</span>
    </a>
  )
}
