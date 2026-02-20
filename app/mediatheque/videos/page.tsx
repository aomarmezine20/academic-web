import Link from 'next/link'

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Archives Vidéo</h1>
        <p className="text-text-secondary mb-6">Page placeholder — contenu à ajouter.</p>
        <Link href="/mediatheque" className="text-accent-primary">Retour à la médiathèque</Link>
      </div>
    </main>
  )
}
