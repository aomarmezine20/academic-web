'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, Plus, FileText, Megaphone, Settings, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/login');
  };

  if (loading) return <div className="flex items-center justify-center min-h-screen">Chargement...</div>;
  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <nav className="bg-white border-b border-border-color shadow-subtle sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-accent-primary">Panneau Admin RCEME</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            <LogOut size={18} />
            Déconnexion
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-muted text-sm">Pages Actives</p>
                <p className="text-3xl font-bold text-accent-primary">14</p>
              </div>
              <FileText size={40} className="text-accent-light" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-muted text-sm">Annonces</p>
                <p className="text-3xl font-bold text-accent-primary">0</p>
              </div>
              <Megaphone size={40} className="text-accent-light" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-muted text-sm">Visites (mois)</p>
                <p className="text-3xl font-bold text-accent-primary">1.2K</p>
              </div>
              <BarChart3 size={40} className="text-accent-light" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pages Management */}
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
              <FileText size={24} className="text-accent-primary" />
              Gestion des Pages
            </h2>

            <div className="space-y-3">
              <Link
                href="/admin/pages"
                className="block p-4 bg-surface rounded-lg hover:bg-accent-light hover:shadow transition border border-border-color"
              >
                <h3 className="font-semibold text-text-primary mb-1">Éditer les Pages</h3>
                <p className="text-sm text-text-muted">Accueil, Qui sommes-nous, Mot du directeur, etc.</p>
              </Link>

              <Link
                href="/admin/sections"
                className="block p-4 bg-surface rounded-lg hover:bg-accent-light hover:shadow transition border border-border-color"
              >
                <h3 className="font-semibold text-text-primary mb-1">Gérer les Sections</h3>
                <p className="text-sm text-text-muted">Ajouter/modifier les 8 sections principales</p>
              </Link>

              <Link
                href="/admin/menu"
                className="block p-4 bg-surface rounded-lg hover:bg-accent-light hover:shadow transition border border-border-color"
              >
                <h3 className="font-semibold text-text-primary mb-1">Menu Navigation</h3>
                <p className="text-sm text-text-muted">Configurer les liens du menu</p>
              </Link>
            </div>
          </div>

          {/* Announcements */}
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
              <Megaphone size={24} className="text-accent-primary" />
              Annonces & Actualités
            </h2>

            <div className="space-y-3">
              <Link
                href="/admin/announcements/new"
                className="block p-4 bg-accent-primary text-white rounded-lg hover:bg-accent-secondary transition text-center font-semibold"
              >
                <div className="flex items-center justify-center gap-2">
                  <Plus size={20} />
                  Ajouter une Annonce
                </div>
              </Link>

              <Link
                href="/admin/announcements"
                className="block p-4 bg-surface rounded-lg hover:bg-accent-light hover:shadow transition border border-border-color"
              >
                <h3 className="font-semibold text-text-primary mb-1">Toutes les Annonces</h3>
                <p className="text-sm text-text-muted">Voir, modifier, supprimer les annonces</p>
              </Link>

              <Link
                href="/admin/events"
                className="block p-4 bg-surface rounded-lg hover:bg-accent-light hover:shadow transition border border-border-color"
              >
                <h3 className="font-semibold text-text-primary mb-1">Événements</h3>
                <p className="text-sm text-text-muted">Gérer colloques, séminaires, journées d&apos;étude</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="mt-8 bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Settings size={24} className="text-accent-primary" />
            Paramètres
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/admin/settings/general"
              className="p-4 bg-surface rounded-lg hover:bg-accent-light hover:shadow transition border border-border-color"
            >
              <h3 className="font-semibold text-text-primary mb-1">Paramètres Généraux</h3>
              <p className="text-sm text-text-muted">Nom, logo, coordonnées</p>
            </Link>

            <Link
              href="/admin/settings/users"
              className="p-4 bg-surface rounded-lg hover:bg-accent-light hover:shadow transition border border-border-color"
            >
              <h3 className="font-semibold text-text-primary mb-1">Utilisateurs</h3>
              <p className="text-sm text-text-muted">Gérer les comptes administrateurs</p>
            </Link>

            <Link
              href="/admin/settings/backup"
              className="p-4 bg-surface rounded-lg hover:bg-accent-light hover:shadow transition border border-border-color"
            >
              <h3 className="font-semibold text-text-primary mb-1">Sauvegarde</h3>
              <p className="text-sm text-text-muted">Exporter/importer les données</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
