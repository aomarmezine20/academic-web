import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AcademicNavbar from '@/components/AcademicNavbar'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RCEME - Réseau Collectif d\'Études Économiques et Management',
  description: 'Plateforme universitaire de recherche, publications et événements scientifiques.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <style>{`
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animation-delay-1s { animation-delay: 0.1s; }
          .animation-delay-2s { animation-delay: 0.2s; }
          .animation-delay-3s { animation-delay: 0.3s; }
          .animation-delay-4s { animation-delay: 0.4s; }
        `}</style>
      </head>
      <body className={`${inter.className} bg-background text-text-primary`}>
        <AcademicNavbar />
        <main className="bg-white min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}