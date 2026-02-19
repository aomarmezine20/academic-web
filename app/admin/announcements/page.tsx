'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus } from 'lucide-react';

export default function AnnouncementsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

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
      <div className="max-w-4xl mx-auto">
        <Link href="/admin" className="flex items-center gap-2 text-accent-primary hover:text-accent-secondary mb-8">
          <ArrowLeft size={20} />
          Retour au Panneau Admin
        </Link>

        <div className="bg-white rounded-lg shadow p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-text-primary">Gestion des Annonces</h1>
            <Link
              href="/admin/announcements/new"
              className="flex items-center gap-2 bg-accent-primary text-white px-4 py-2 rounded-lg hover:bg-accent-secondary"
            >
              <Plus size={20} />
              Ajouter une Annonce
            </Link>
          </div>

          <div className="bg-surface rounded-lg p-6 text-center">
            <p className="text-text-muted">Aucune annonce pour le moment.</p>
            <p className="text-text-secondary text-sm mt-2">Cliquez sur &quot;Ajouter une Annonce&quot; pour commencer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
