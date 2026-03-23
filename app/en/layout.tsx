import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dental Implants in Cali, Colombia | Dr. Weider - Affordable High-Quality Dental Care',
  description: 'Save 60-70% on dental implants in Cali, Colombia. High-quality dental care at affordable prices. Dental implants from $380 USD. English-speaking staff. Dr. Weider - Implantology Specialist.',
  keywords: 'dental implants cali colombia, dental implants cost colombia, affordable dental implants colombia, dentist in cali colombia, dental tourism colombia, smile design cali, dental prosthesis cali',
  openGraph: {
    title: 'Dental Implants in Cali, Colombia | Dr. Weider',
    description: 'Restore your smile with safe, aesthetic and long-lasting dental implants. Save 60-70% compared to US prices. High-quality care with English-speaking staff.',
    locale: 'en_US',
    type: 'website',
  },
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en">
      {children}
    </div>
  )
}
