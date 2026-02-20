import Link from 'next/link'

export default function AdminSectionsPage() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Admin — Sections</h1>
        <p className="text-text-secondary mb-6">Page placeholder — gestion des sections à implémenter.</p>
  <Link href="/admin" className="text-accent-primary">Retour à l&apos;admin</Link>
      </div>
    </main>
  )
}
