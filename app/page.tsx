/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section className="p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">Association Scientifique</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">Qui sommes-nous</h2>
              <p className="text-gray-700">Description de l'association...</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">Mot du Directeur</h2>
              <p className="text-gray-700">Message du directeur...</p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Objectifs</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Objectif 1</li>
              <li>Objectif 2</li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Adhésion</h2>
            <p className="text-gray-700">Informations sur l'adhésion...</p>
          </div>
        </div>
      </section>
    </main>
  )
}