import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Association Scientifique',
  description: 'Site web de l\'association scientifique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navigation />
        {children}
        <footer className="bg-primary text-white p-4 text-center">
          <p>&copy; 2026 Association Scientifique. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  )
}