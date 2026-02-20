import Link from 'next/link'

export default function AdminMenuPage() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Admin — Menu</h1>
        <p className="text-text-secondary mb-6">Page placeholder — gestion du menu à implémenter.</p>
        <Link href="/admin" className="text-accent-primary">Retour à l'admin</Link>
      </div>
    </main>
  )
}
