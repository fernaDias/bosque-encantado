import type { Metadata } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import Providers from './providers'

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-fredoka',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Colônia de Férias Bosque Encantado — Julho 2026',
  description:
    'Experiências ao ar livre para crianças em Julho de 2026. Transporte incluso, equipe especializada, bosque real, atividades incríveis. Vagas limitadas!',
  keywords: [
    'colônia de férias',
    'bosque encantado',
    'atividades infantis',
    'férias crianças',
    'recreação infantil',
    'natureza crianças',
    'julho 2026',
  ],
  authors: [{ name: 'Bosque Encantado' }],
  openGraph: {
    title: 'Colônia de Férias Bosque Encantado 🍄',
    description:
      'Experiências ao ar livre para crianças. Transporte incluso, natureza, diversão e memórias inesquecíveis!',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Bosque Encantado',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colônia de Férias Bosque Encantado 🍄',
    description: 'Experiências ao ar livre para crianças — Julho 2026. Vagas limitadas!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: 'Colônia de Férias Bosque Encantado',
              description:
                'Experiências ao ar livre para crianças com transporte incluso, monitores especializados e atividades em bosque real.',
              startDate: '2026-07-01',
              endDate: '2026-07-31',
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              location: {
                '@type': 'Place',
                name: 'Bosque Encantado / Loja Ciranda',
              },
              organizer: {
                '@type': 'Organization',
                name: 'Bosque Encantado',
                telephone: '+5543991147316',
              },
              audience: {
                '@type': 'Audience',
                audienceType: 'Crianças de 4 a 12 anos',
              },
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
