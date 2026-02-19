/* eslint-disable react/no-unescaped-entities */

export default function Evenements() {
  return (
    <main className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold text-primary mb-4">Événements Scientifiques</h1>
      <ul className="space-y-4">
        <li>
          <h2 className="text-xl font-semibold">Colloques et Conférences</h2>
          <p>Description des colloques.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Journées d'Étude</h2>
          <p>Description des journées d'étude.</p>
        </li>
        {/* Add more */}
      </ul>
    </main>
  )
}