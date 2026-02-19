'use client';

export default function Objectifs() {
  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-accent-primary mb-8">Nos Objectifs</h1>
        
        <div className="space-y-8">
          <div className="bg-surface border border-border-color rounded-lg p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-3">Objectifs Stratégiques</h2>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-accent-primary font-bold mt-1">→</span>
                <span>Produire des recherches de haut niveau pertinentes pour les défis économiques et managériaux contemporains</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary font-bold mt-1">→</span>
                <span>Créer des synergies entre chercheurs, praticiens et décideurs politiques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary font-bold mt-1">→</span>
                <span>Contribuer au développement de talents et de futurs leaders académiques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary font-bold mt-1">→</span>
                <span>Établir des partenariats strategiques nationaux et internationaux</span>
              </li>
            </ul>
          </div>

          <div className="bg-surface border border-border-color rounded-lg p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-3">Domaines de Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-accent-light rounded">
                <h3 className="font-semibold text-accent-primary mb-2">Économie Appliquée</h3>
                <p className="text-sm text-text-secondary">Études macroéconomiques et sectorielles</p>
              </div>
              <div className="p-4 bg-accent-light rounded">
                <h3 className="font-semibold text-accent-primary mb-2">Management Stratégique</h3>
                <p className="text-sm text-text-secondary">Gouvernance et stratégie d'entreprise</p>
              </div>
              <div className="p-4 bg-accent-light rounded">
                <h3 className="font-semibold text-accent-primary mb-2">Entrepreneuriat & Innovation</h3>
                <p className="text-sm text-text-secondary">Création de valeur et innovation</p>
              </div>
              <div className="p-4 bg-accent-light rounded">
                <h3 className="font-semibold text-accent-primary mb-2">Développement Durable</h3>
                <p className="text-sm text-text-secondary">Responsabilité et durabilité</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
