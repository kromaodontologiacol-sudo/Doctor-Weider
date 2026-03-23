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
  title: 'Doctor Weider | Odontología Integral en Cali | Implantes, Diseño de Sonrisa y más',
  description: 'Odontólogo especialista en Cali. Implantes dentales, diseño de sonrisa, prótesis, ortodoncia, rehabilitación oral y más. Tecnología digital y atención personalizada.',
  keywords: 'odontólogo cali, implantes dentales cali, diseño de sonrisa cali, prótesis dental, ortodoncia cali, rehabilitación oral, doctor weider',
  openGraph: {
    title: 'Doctor Weider | Odontología Integral en Cali',
    description: 'Tu sonrisa en las mejores manos. Implantes, diseño de sonrisa, prótesis, ortodoncia y rehabilitación oral con tecnología de punta.',
    locale: 'es_CO',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
