'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NewAnnouncementPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    let serverErrorMessage = '';

    try {
      const token = localStorage.getItem('adminToken')
      const res = await fetch('/api/announcements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': token || '',
        },
        body: JSON.stringify({ title, content }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        console.error('Create announcement error', err)
        serverErrorMessage = err.error || err.message || 'Failed to create'
        throw new Error(serverErrorMessage)
      }

      alert('Annonce créée avec succès!')
      router.push('/admin/announcements')
    } catch (error) {
      console.error('Failed to create announcement', error)
      const msg = serverErrorMessage || (error instanceof Error ? error.message : 'Erreur lors de la création')
      alert(msg)
    } finally {
      setLoading(false)
    }
  };

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-surface p-8">
      <div className="max-w-2xl mx-auto">
        <Link href="/admin/announcements" className="flex items-center gap-2 text-accent-primary hover:text-accent-secondary mb-8">
          <ArrowLeft size={20} />
          Retour aux Annonces
        </Link>
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-text-primary mb-8">Nouvelle Annonce</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Titre</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Titre de l'annonce"
                className="w-full px-4 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Contenu</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                placeholder="Contenu de l'annonce"
                rows={10}
                className="w-full px-4 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-accent-primary text-white py-2 rounded-lg font-semibold hover:bg-accent-secondary transition disabled:opacity-50"
              >
                {loading ? 'Création...' : 'Créer'}
              </button>
              <Link
                href="/admin/announcements"
                className="flex-1 bg-surface text-text-primary py-2 rounded-lg font-semibold hover:bg-gray-200 transition text-center"
              >
                Annuler
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
