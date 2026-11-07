/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // SonrisasPass, la membresia, vive en su propio subdominio para que cargue
  // directo y sin pasar por esta app. Dejamos /membresia como puerta de entrada
  // desde la marca principal: es el link corto que se reparte y se dicta de viva voz.
  // Son 307 (permanent: false) a proposito: si algun dia la membresia se muda,
  // nadie queda con la direccion vieja cacheada para siempre en su navegador.
  async redirects() {
    return [
      {
        source: '/membresia',
        destination: 'https://membresia.doctorweider.com/',
        permanent: false,
      },
      {
        source: '/membresia/:path*',
        destination: 'https://membresia.doctorweider.com/:path*',
        permanent: false,
      },
      {
        source: '/sonrisaspass',
        destination: 'https://membresia.doctorweider.com/',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
