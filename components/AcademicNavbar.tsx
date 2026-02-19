'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function AcademicNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = [
    {
      name: 'Accueil',
      href: '/',
      submenu: [
        { name: 'Qui sommes-nous', href: '/accueil/qui-sommes-nous' },
        { name: 'Mot du Directeur', href: '/accueil/mot-directeur' },
        { name: 'Objectifs', href: '/accueil/objectifs' },
        { name: 'Adhésion', href: '/accueil/adhesion' },
      ]
    },
    {
      name: 'Événements',
      href: '/evenements',
      submenu: [
        { name: 'Colloques & Conférences', href: '/evenements/colloques' },
        { name: 'Journées d\'Étude', href: '/evenements/journees' },
        { name: 'Séminaires Doctoraux', href: '/evenements/seminaires' },
        { name: 'Webinaires & Tables Rondes', href: '/evenements/webinaires' },
      ]
    },
    {
      name: 'Publications',
      href: '/publications',
      submenu: [
        { name: 'Revue REEM', href: '/publications/reem' },
        { name: 'Ouvrages & Publications', href: '/publications/ouvrages' },
        { name: 'Rapports de Recherche', href: '/publications/rapports' },
      ]
    },
    {
      name: 'Formations',
      href: '/formations',
      submenu: [
        { name: 'Formations Thématiques', href: '/formations/thematiques' },
        { name: 'Ateliers Méthodologiques', href: '/formations/ateliers' },
        { name: 'Formations Transversales', href: '/formations/transversales' },
        { name: 'Accompagnement Doctorants', href: '/formations/doctorants' },
      ]
    },
    {
      name: 'Partenariats',
      href: '/partenariats',
      submenu: [
        { name: 'Coopération Universitaire', href: '/partenariats/cooperation' },
        { name: 'Partenariats Public-Privé', href: '/partenariats/public-prive' },
        { name: 'Réseaux de Recherche', href: '/partenariats/reseaux' },
      ]
    },
    {
      name: 'Gouvernance',
      href: '/gouvernance',
      submenu: [
        { name: 'Bureau Exécutif', href: '/gouvernance/bureau' },
        { name: 'Organigramme', href: '/gouvernance/organigramme' },
        { name: 'Annuaire', href: '/gouvernance/annuaire' },
      ]
    },
    {
      name: 'Médiathèque',
      href: '/mediatheque',
      submenu: [
        { name: 'Galeries Photos', href: '/mediatheque/photos' },
        { name: 'Archives Vidéo', href: '/mediatheque/videos' },
        { name: 'Reportages', href: '/mediatheque/reportages' },
        { name: 'Supports Visuels', href: '/mediatheque/supports' },
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
    }
  ];

  return (
    <nav className="bg-white border-b border-border-color shadow-subtle sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-accent-primary font-serif text-2xl font-bold">
              RCEME
            </div>
            <div className="ml-2 text-xs text-text-muted max-w-xs">
              Réseau Collectif d&apos;Études Économiques et Management
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {sections.map((section) => (
              <div key={section.name} className="group relative">
                <button className="px-3 py-2 rounded-md text-sm font-medium text-text-primary hover:text-accent-primary hover:bg-surface transitions-smooth">
                  {section.href === '/' ? 'Accueil' : section.name}
                </button>
                
                {section.submenu && (
                  <div className="hidden group-hover:block absolute left-0 mt-0 w-48 bg-white border border-border-color shadow-card rounded-md py-2">
                    {section.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-text-primary hover:text-accent-primary hover:bg-accent-light transitions-smooth"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Admin Login Button */}
          <Link
            href="/login"
            className="hidden lg:inline-block ml-8 px-4 py-2 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-secondary transitions-smooth"
          >
            Admin
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-text-primary hover:text-accent-primary hover:bg-surface"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {sections.map((section) => (
              <div key={section.name}>
                <Link
                  href={section.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-accent-primary hover:bg-surface transitions-smooth"
                  onClick={() => setMobileOpen(false)}
                >
                  {section.name}
                </Link>
                {section.submenu && (
                  <div className="ml-4 space-y-1">
                    {section.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-1 rounded text-sm text-text-secondary hover:text-accent-primary hover:bg-accent-light transitions-smooth"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-accent-primary hover:bg-accent-secondary transitions-smooth"
              onClick={() => setMobileOpen(false)}
            >
              Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
