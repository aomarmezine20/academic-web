'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white py-12 px-4 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent-primary">RCEME</h3>
            <p className="text-gray-300 text-sm">
              Réseau Collectif d&apos;Études Économiques et Management - Centre d&apos;excellence académique
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accès Rapide</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/accueil/qui-sommes-nous" className="text-gray-300 hover:text-white transition">Qui sommes-nous</Link></li>
              <li><Link href="/evenements" className="text-gray-300 hover:text-white transition">Événements</Link></li>
              <li><Link href="/publications" className="text-gray-300 hover:text-white transition">Publications</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent-primary flex-shrink-0" />
                <a href="mailto:contact@rceme.org" className="text-gray-300 hover:text-white transition">contact@rceme.org</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-accent-primary flex-shrink-0" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-white transition">+33 (0) 1 23 45 67 89</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-accent-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">Paris, France</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-accent-primary transition"><Facebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-accent-primary transition"><Twitter size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-accent-primary transition"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2026 RCEME. Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition">Mentions légales</Link>
              <Link href="#" className="hover:text-white transition">Politique de confidentialité</Link>
              <Link href="/login" className="hover:text-accent-primary transition">Admin</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
