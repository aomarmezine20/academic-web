'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Edit } from 'lucide-react';

export default function PagesManagement() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const pages = [
    { id: 1, title: 'Accueil', path: '/', status: 'Publié' },
    { id: 2, title: 'Qui sommes-nous', path: '/accueil/qui-sommes-nous', status: 'Publié' },
    { id: 3, title: 'Mot du Directeur', path: '/accueil/mot-directeur', status: 'Publié' },
    { id: 4, title: 'Objectifs', path: '/accueil/objectifs', status: 'Publié' },
    { id: 5, title: 'Adhésion', path: '/accueil/adhesion', status: 'Publié' },
    { id: 6, title: 'Événements', path: '/evenements', status: 'Publié' },
    { id: 7, title: 'Colloques', path: '/evenements/colloques', status: 'Publié' },
    { id: 8, title: 'Publications', path: '/publications', status: 'Publié' },
    { id: 9, title: 'Formations', path: '/formations', status: 'Publié' },
    { id: 10, title: 'Partenariats', path: '/partenariats', status: 'Publié' },
    { id: 11, title: 'Gouvernance', path: '/gouvernance', status: 'Publié' },
    { id: 12, title: 'Médiathèque', path: '/mediatheque', status: 'Publié' },
    { id: 13, title: 'Contact', path: '/contact', status: 'Publié' },
  ];

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-surface p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/admin" className="flex items-center gap-2 text-accent-primary hover:text-accent-secondary mb-8">
          <ArrowLeft size={20} />
          Retour au Panneau Admin
        </Link>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-8 border-b border-border-color">
            <h1 className="text-3xl font-bold text-text-primary">Gestion des Pages</h1>
            <p className="text-text-secondary mt-2">Accédez et modifiez les pages du site</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-surface border-b border-border-color">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-text-primary">Page</th>
                  <th className="px-6 py-4 text-left font-semibold text-text-primary">Chemin</th>
                  <th className="px-6 py-4 text-left font-semibold text-text-primary">Statut</th>
                  <th className="px-6 py-4 text-right font-semibold text-text-primary">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((page) => (
                  <tr key={page.id} className="border-b border-border-color hover:bg-surface transition">
                    <td className="px-6 py-4 font-medium text-text-primary">{page.title}</td>
                    <td className="px-6 py-4 text-text-secondary text-sm font-mono">{page.path}</td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {page.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={page.path}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary mb-2 mr-4"
                      >
                        <Edit size={16} />
                        Voir
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
