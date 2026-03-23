"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButtonEN() {
  return (
    <a
      href="https://wa.me/573235944931?text=Hi,%20I%20would%20like%20information%20about%20dental%20implants%20in%20Cali"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-medium">Need help?</span>
    </a>
  )
}
