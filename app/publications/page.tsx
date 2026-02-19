export default function Publications() {
  return (
    <main className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold text-primary mb-4">Production et Publications</h1>
      <ul className="space-y-4">
        <li>
          <h2 className="text-xl font-semibold">Revue des Études Économiques et Management (REEM)</h2>
          <p>Description de la revue.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Ouvrages et Publications Spéciales</h2>
          <p>Description des ouvrages.</p>
        </li>
        {/* Add more */}
      </ul>
    </main>
  )
}