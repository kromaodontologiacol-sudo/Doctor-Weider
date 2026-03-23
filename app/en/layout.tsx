import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dental Implants in Cali, Colombia - Dr. Weider | Save 70% vs US Prices',
  description: 'Dental implants starting from $380 USD in Cali, Colombia. Board-certified implant specialist. Smile design, prosthetics, and full mouth rehabilitation. Book your free consultation.',
  keywords: 'dental implants cali colombia, dental tourism colombia, dentist cali, smile design cali, dental prosthesis colombia, doctor weider, cheap dental implants',
  alternates: {
    canonical: 'https://doctorweider.com/en',
    languages: {
      'es': 'https://doctorweider.com',
      'en': 'https://doctorweider.com/en',
    },
  },
  openGraph: {
    title: 'Dental Implants in Cali, Colombia - Save 70% vs US Prices',
    description: 'Dental implants starting from $380 USD. Board-certified specialist. Your smile in the best hands.',
    locale: 'en_US',
    alternateLocale: 'es_CO',
    type: 'website',
    url: 'https://doctorweider.com/en',
    siteName: 'Doctor Weider - Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Implants in Cali, Colombia - Dr. Weider',
    description: 'Dental implants starting from $380 USD. Board-certified specialist.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
