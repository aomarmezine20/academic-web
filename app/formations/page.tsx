export default function Formations() {
  return (
    <main className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold text-primary mb-4">Formations et Animation</h1>
      <ul className="space-y-4">
        <li>
          <h2 className="text-xl font-semibold">Formations thématiques</h2>
          <p>Description des formations.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Ateliers Méthodologiques et Logiciels</h2>
          <p>Description des ateliers.</p>
        </li>
        {/* Add more */}
      </ul>
    </main>
  )
}