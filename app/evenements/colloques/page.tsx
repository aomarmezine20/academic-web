'use client';

export default function Colloques() {
  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-accent-primary mb-8">Colloques et Conférences</h1>
        
        <div className="prose-lg text-text-secondary space-y-6">
          <p>
            Les colloques et conférences du RCEME sont des événements majeurs rassemblant la communauté académique autour de lès enjeux clés en économie et management.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-8">Prochains Colloques</h2>
          
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-surface border border-border-color rounded-lg p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">Colloque {i}: Titre à définir</h3>
                <p className="text-text-muted mb-3">Date: à annoncer | Lieu: à définir</p>
                <p className="text-text-secondary">Description du colloque et des thèmes traités...</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-text-primary mt-8">Information Pratique</h2>
          <ul className="list-disc pl-6 space-y-2 text-text-secondary">
            <li>Durée: Généralement 2-3 jours</li>
            <li>Format: Présentations, tables rondes, discussions</li>
            <li>Public: Chercheurs, académiques, praticiens</li>
            <li>Inscription: Obligatoire (gratuit ou payant selon l&apos;événement)</li>
            <li>Publications: Sélection des meilleures communications en revue</li>
          </ul>
        </div>

        <div className="mt-12 bg-accent-light border border-accent-primary rounded-lg p-6 text-center">
          <p className="text-accent-primary font-semibold">Pour plus d&apos;informations: contact@rceme.org</p>
        </div>
      </section>
    </div>
  );
}
