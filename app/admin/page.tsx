'use client'

export const dynamic = 'force-dynamic'
export const runtime = 'edge'

/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect } from 'react'
import { Upload, FileText, Calendar, Image as ImageIcon, Video, Plus, Edit, Trash2 } from 'lucide-react'

interface Article {
  id: string
  title: string
  content: string
  created_at: string
}

interface Event {
  id: string
  title: string
  description: string
  date: string
  created_at: string
}

interface Publication {
  id: string
  title: string
  description: string
  file_url: string
  created_at: string
}

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState('articles')

  // Data states
  const [articles, setArticles] = useState<Article[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [publications, setPublications] = useState<Publication[]>([])

  // Form states
  const [articleForm, setArticleForm] = useState({ title: '', content: '' })
  const [eventForm, setEventForm] = useState({ title: '', description: '', date: '' })
  const [publicationForm, setPublicationForm] = useState({ title: '', description: '', file: null as File | null })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [videoUrl, setVideoUrl] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsLoggedIn(true)
      loadData()
    }
  }

  const loadData = async () => {
    try {
      const [articlesRes, eventsRes, publicationsRes] = await Promise.all([
        fetch('/api/articles'),
        fetch('/api/events'),
        fetch('/api/publications')
      ])

      const articlesData = await articlesRes.json()
      const eventsData = await eventsRes.json()
      const publicationsData = await publicationsRes.json()

      setArticles(articlesData)
      setEvents(eventsData)
      setPublications(publicationsData)
    } catch (error) {
      console.error('Error loading data:', error)
    }
  }

  const handleCreateArticle = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(articleForm)
      })
      const newArticle = await res.json()
      setArticles([newArticle, ...articles])
      setArticleForm({ title: '', content: '' })
    } catch (error) {
      console.error('Error creating article:', error)
    }
  }

  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventForm)
      })
      const newEvent = await res.json()
      setEvents([newEvent, ...events])
      setEventForm({ title: '', description: '', date: '' })
    } catch (error) {
      console.error('Error creating event:', error)
    }
  }

  const handleCreatePublication = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!publicationForm.file) return

    try {
      // First upload the file
      const formData = new FormData()
      formData.append('file', publicationForm.file)
      formData.append('type', 'publication') // or just use image for now

      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })
      const { url: fileUrl } = await uploadRes.json()

      // Then create the publication
      const res = await fetch('/api/publications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: publicationForm.title,
          description: publicationForm.description,
          file_url: fileUrl
        })
      })
      const newPublication = await res.json()
      setPublications([newPublication, ...publications])
      setPublicationForm({ title: '', description: '', file: null })
    } catch (error) {
      console.error('Error creating publication:', error)
    }
  }

  const handleImageUpload = async () => {
    if (!imageFile) return

    try {
      const formData = new FormData()
      formData.append('file', imageFile)
      formData.append('type', 'image')

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })
      const { url } = await res.json()
      alert(`Image uploaded: ${url}`)
      setImageFile(null)
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }

  const handleVideoEmbed = async () => {
    if (!videoUrl) return

    try {
      // For YouTube embed, we can store the URL directly
      // In a real app, you might want to validate and store in database
      alert(`Video URL saved: ${videoUrl}`)
      setVideoUrl('')
    } catch (error) {
      console.error('Error saving video:', error)
    }
  }

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-background p-8 flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
          <h1 className="text-2xl font-bold text-primary mb-4">Connexion Admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            className="w-full p-2 border rounded mb-4"
          />
          <button type="submit" className="bg-accent text-white px-4 py-2 rounded">Se connecter</button>
        </form>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Administration</h1>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'articles', label: 'Articles', icon: FileText },
            { id: 'events', label: 'Événements', icon: Calendar },
            { id: 'publications', label: 'Publications', icon: FileText },
            { id: 'images', label: 'Images', icon: ImageIcon },
            { id: 'videos', label: 'Vidéos', icon: Video },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition ${
                activeTab === id
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary border hover:bg-primary/10'
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {label}
            </button>
          ))}
        </div>

        {/* Articles Tab */}
        {activeTab === 'articles' && (
          <div className="space-y-6">
            <form onSubmit={handleCreateArticle} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-primary mb-4">Créer un Article</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Titre"
                  value={articleForm.title}
                  onChange={(e) => setArticleForm({ ...articleForm, title: e.target.value })}
                  className="w-full p-2 border rounded"
                  required
                />
                <textarea
                  placeholder="Contenu"
                  value={articleForm.content}
                  onChange={(e) => setArticleForm({ ...articleForm, content: e.target.value })}
                  className="w-full p-2 border rounded h-32"
                  required
                />
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Créer Article
                </button>
              </div>
            </form>

            <div className="space-y-4">
              {articles.map((article) => (
                <div key={article.id} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-primary">{article.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{article.content.substring(0, 100)}...</p>
                  <div className="flex gap-2 mt-4">
                    <button className="text-accent hover:underline flex items-center">
                      <Edit className="w-4 h-4 mr-1" />
                      Modifier
                    </button>
                    <button className="text-red-500 hover:underline flex items-center">
                      <Trash2 className="w-4 h-4 mr-1" />
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <form onSubmit={handleCreateEvent} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-primary mb-4">Créer un Événement</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Titre"
                  value={eventForm.title}
                  onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="date"
                  value={eventForm.date}
                  onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                  className="w-full p-2 border rounded"
                  required
                />
                <textarea
                  placeholder="Description"
                  value={eventForm.description}
                  onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                  className="w-full p-2 border rounded h-32"
                  required
                />
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Créer Événement
                </button>
              </div>
            </form>

            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-primary">{event.title}</h3>
                  <p className="text-accent text-sm">{new Date(event.date).toLocaleDateString('fr-FR')}</p>
                  <p className="text-sm text-gray-600 mt-2">{event.description.substring(0, 100)}...</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Publications Tab */}
        {activeTab === 'publications' && (
          <div className="space-y-6">
            <form onSubmit={handleCreatePublication} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-primary mb-4">Ajouter une Publication</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Titre"
                  value={publicationForm.title}
                  onChange={(e) => setPublicationForm({ ...publicationForm, title: e.target.value })}
                  className="w-full p-2 border rounded"
                  required
                />
                <textarea
                  placeholder="Description"
                  value={publicationForm.description}
                  onChange={(e) => setPublicationForm({ ...publicationForm, description: e.target.value })}
                  className="w-full p-2 border rounded h-24"
                  required
                />
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setPublicationForm({ ...publicationForm, file: e.target.files?.[0] || null })}
                  className="w-full p-2 border rounded"
                  required
                />
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded flex items-center">
                  <Upload className="w-4 h-4 mr-2" />
                  Ajouter Publication
                </button>
              </div>
            </form>

            <div className="space-y-4">
              {publications.map((pub) => (
                <div key={pub.id} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-primary">{pub.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{pub.description}</p>
                  <a href={pub.file_url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline mt-2 inline-block">
                    Télécharger
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Images Tab */}
        {activeTab === 'images' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-primary mb-4">Uploader des Images</h2>
            <div className="space-y-4">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                className="w-full p-2 border rounded"
              />
              <button
                onClick={handleImageUpload}
                disabled={!imageFile}
                className="bg-primary text-white px-4 py-2 rounded flex items-center disabled:opacity-50"
              >
                <Upload className="w-4 h-4 mr-2" />
                Uploader Image
              </button>
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-primary mb-4">Ajouter des Vidéos</h2>
            <div className="space-y-4">
              <input
                type="url"
                placeholder="URL YouTube (ex: https://www.youtube.com/watch?v=...)"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <button
                onClick={handleVideoEmbed}
                disabled={!videoUrl}
                className="bg-primary text-white px-4 py-2 rounded flex items-center disabled:opacity-50"
              >
                <Video className="w-4 h-4 mr-2" />
                Ajouter Vidéo
              </button>
              <p className="text-sm text-gray-600">
                Pour les vidéos YouTube, copiez l'URL complète de la vidéo.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}