/* eslint-disable react/no-unescaped-entities */

import { Image, Video, Play } from 'lucide-react'

export default function Mediatheque() {
  // Placeholder data - in real app, fetch from Supabase
  const photos = [
    { id: 1, title: 'Colloque 2024', url: '/placeholder-image.jpg' },
    { id: 2, title: 'Séminaire Doctoral', url: '/placeholder-image.jpg' },
    { id: 3, title: 'Journée d\'Étude', url: '/placeholder-image.jpg' },
  ]

  const videos = [
    { id: 1, title: 'Webinaire Économie Digitale', youtubeId: 'dQw4w9WgXcQ' },
    { id: 2, title: 'Table Ronde Management', youtubeId: 'dQw4w9WgXcQ' },
  ]

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">Médiathèque</h1>

        {/* Galeries Photos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
            <Image className="w-8 h-8 mr-3" aria-hidden="true" />
            Galeries Photos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Image className="w-12 h-12 text-gray-400" aria-hidden="true" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-primary">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Archives Vidéo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
            <Video className="w-8 h-8 mr-3" aria-hidden="true" />
            Archives Vidéo
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    className="w-full h-64"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-primary">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reportages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Reportages</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6">
              Découvrez nos reportages sur les événements scientifiques majeurs et les avancées de la recherche.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4 hover:border-primary transition">
                <h3 className="font-semibold text-primary mb-2">Reportage Colloque 2024</h3>
                <p className="text-sm text-gray-600 mb-3">Couverture complète de notre colloque annuel</p>
                <button className="text-accent hover:underline flex items-center">
                  <Play className="w-4 h-4 mr-2" />
                  Voir le reportage
                </button>
              </div>
              <div className="border rounded-lg p-4 hover:border-primary transition">
                <h3 className="font-semibold text-primary mb-2">Interview Experts</h3>
                <p className="text-sm text-gray-600 mb-3">Entretiens avec nos chercheurs</p>
                <button className="text-accent hover:underline flex items-center">
                  <Play className="w-4 h-4 mr-2" />
                  Voir l'interview
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Supports Visuels */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8">Supports Visuels</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6">
              Téléchargez nos présentations, affiches et supports pédagogiques.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 text-center hover:border-primary transition">
                <h3 className="font-semibold text-primary mb-2">Présentations PDF</h3>
                <p className="text-sm text-gray-600 mb-3">Supports de conférences</p>
                <button className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary/90">
                  Télécharger
                </button>
              </div>
              <div className="border rounded-lg p-4 text-center hover:border-primary transition">
                <h3 className="font-semibold text-primary mb-2">Affiches Événements</h3>
                <p className="text-sm text-gray-600 mb-3">Visuels promotionnels</p>
                <button className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary/90">
                  Télécharger
                </button>
              </div>
              <div className="border rounded-lg p-4 text-center hover:border-primary transition">
                <h3 className="font-semibold text-primary mb-2">Infographies</h3>
                <p className="text-sm text-gray-600 mb-3">Données visualisées</p>
                <button className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary/90">
                  Télécharger
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}