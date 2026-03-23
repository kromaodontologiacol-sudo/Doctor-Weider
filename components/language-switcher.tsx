"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface LanguageSwitcherProps {
  isScrolled?: boolean
}

export function LanguageSwitcher({ isScrolled = true }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith("/en")

  // Get the equivalent path in the other language
  const getAlternatePath = () => {
    if (isEnglish) {
      // Switch to Spanish
      if (pathname === "/en") return "/"
      // Remove /en prefix for service pages
      return pathname.replace("/en", "") || "/"
    } else {
      // Switch to English
      if (pathname === "/") return "/en"
      return `/en${pathname}`
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-2 ${
            isScrolled
              ? "text-muted-foreground hover:text-foreground"
              : "text-white/90 hover:text-white hover:bg-white/10"
          }`}
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">
            {isEnglish ? "EN" : "ES"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem asChild>
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <span className="text-base">ES</span>
            <span className="text-muted-foreground">Espanol</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/en" className="flex items-center gap-2 cursor-pointer">
            <span className="text-base">EN</span>
            <span className="text-muted-foreground">English</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
