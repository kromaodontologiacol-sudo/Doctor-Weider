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
  title: 'Implantes Dentales en Cali | Dr Weider Implantología Oral',
  description: 'Recupera tu sonrisa con implantes dentales en Cali. Especialista en implantología, prótesis dental, urgencias odontológicas y diseño de sonrisa. Agenda tu valoración con el Dr Weider.',
  keywords: 'implantes dentales cali, precio implante dental cali, odontólogo cali, prótesis dental cali, urgencias odontológicas cali, diseño de sonrisa cali, rehabilitación oral cali, doctor weider, especialista en implantes cali',
  openGraph: {
    title: 'Implantes Dentales en Cali | Dr Weider Implantología Oral',
    description: 'Recupera tu sonrisa con implantes dentales en Cali. Agenda tu valoración con el Dr Weider, especialista en implantología oral.',
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
