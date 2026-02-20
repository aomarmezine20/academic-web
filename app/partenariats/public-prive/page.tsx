import Link from 'next/link'

export default function PublicPrivePage() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Partenariats Public-Privé</h1>
        <p className="text-text-secondary mb-6">Page placeholder — contenu à ajouter.</p>
        <Link href="/partenariats" className="text-accent-primary">Retour aux partenariats</Link>
      </div>
    </main>
  )
}
