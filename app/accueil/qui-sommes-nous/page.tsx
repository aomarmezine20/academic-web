'use client';

export default function QuiSommesNous() {
  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-accent-primary mb-8">Qui Sommes-Nous</h1>
        
        <div className="prose-lg text-text-secondary space-y-6">
          <p>
            Le Réseau Collectif d&apos;Études Économiques et Management (RCEME) est une plateforme académique dédiée à l&apos;excellence en recherche et à l&apos;innovation scientifique dans les domaines de l&apos;économie et du management.
          </p>
          
          <h2 className="text-2xl font-bold text-text-primary mt-8">Notre Mission</h2>
          <p>
            Promouvoir la recherche de haut niveau et faciliter les échanges scientifiques entre chercheurs, experts et praticiens dans un environnement collaboratif et inclusif.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-8">Notre Vision</h2>
          <p>
            Devenir un centre d&apos;excellence reconnu à l&apos;échelle nationale et internationale pour la production de connaissances pertinentes et applicables en économie et management.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-8">Nos Valeurs</h2>
          <ul className="list-disc pl-6 space-y-2 text-text-secondary">
            <li><strong>Excellence académique</strong> : Rigueur scientifique et qualité des recherches</li>
            <li><strong>Collaboration</strong> : Échange et coopération entre membres</li>
            <li><strong>Innovation</strong> : Développement de nouvelles approches de recherche</li>
            <li><strong>Pertinence</strong> : Application pratique des connaissances</li>
            <li><strong>Inclusivité</strong> : Accessibilité à tous les niveaux académiques</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
