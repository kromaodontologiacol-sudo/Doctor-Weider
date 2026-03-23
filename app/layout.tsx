import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Implantes Dentales en Cali - Dr. Weider Gutiérrez | Odontología Especializada',
  description: 'Implantes dentales desde $1.500.000 COP en Cali. Especialista en implantología oral. Diseño de sonrisa, prótesis y rehabilitación oral. Agenda tu valoración gratis.',
  keywords: 'implantes dentales cali, odontólogo cali, diseño de sonrisa cali, prótesis dental cali, implantología cali, doctor weider',
  alternates: {
    canonical: 'https://doctorweider.com',
    languages: {
      'es': 'https://doctorweider.com',
      'en': 'https://doctorweider.com/en',
    },
  },
  openGraph: {
    title: 'Implantes Dentales en Cali - Dr. Weider Gutiérrez',
    description: 'Implantes dentales desde $1.500.000 COP. Especialista en implantología oral. Tu sonrisa en las mejores manos.',
    locale: 'es_CO',
    alternateLocale: 'en_US',
    type: 'website',
    url: 'https://doctorweider.com',
    siteName: 'Doctor Weider - Clínica Odontológica',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Implantes Dentales en Cali - Dr. Weider',
    description: 'Implantes dentales desde $1.500.000 COP. Especialista en implantología oral.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="alternate" hrefLang="es" href="https://doctorweider.com" />
        <link rel="alternate" hrefLang="en" href="https://doctorweider.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://doctorweider.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
