'use client';

export default function MotDirecteur() {
  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-accent-primary mb-8">Mot du Directeur</h1>
        
        <div className="bg-surface border border-border-color rounded-lg p-8 my-8">
          <p className="text-lg text-text-secondary italic mb-4 leading-relaxed">
            "Bienvenue au sein du Réseau Collectif d'Études Économiques et Management. Nous sommes fiers de maintenir une plateforme où l'excellence académique rencontre l'innovation appliquée. À travers nos publications, événements et formations, nous contribuons activement à l'avancement de la connaissance et au développement professionnel de nos membres."
          </p>
          <p className="font-semibold text-text-primary">
            Directeur du Réseau<br/>
            <span className="text-text-muted">Février 2026</span>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">Nos Engagements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-l-4 border-accent-primary pl-4 py-2">
            <h3 className="font-semibold text-text-primary">Qualité de la Recherche</h3>
            <p className="text-text-secondary">Assurer des standards élevés dans tous les projets</p>
          </div>
          <div className="border-l-4 border-accent-primary pl-4 py-2">
            <h3 className="font-semibold text-text-primary">Impact Social</h3>
            <p className="text-text-secondary">Contribuer au développement économique et social</p>
          </div>
          <div className="border-l-4 border-accent-primary pl-4 py-2">
            <h3 className="font-semibold text-text-primary">Collaboration Internationale</h3>
            <p className="text-text-secondary">Renforcer les partenariats académiques mondiaux</p>
          </div>
          <div className="border-l-4 border-accent-primary pl-4 py-2">
            <h3 className="font-semibold text-text-primary">Formation Continue</h3>
            <p className="text-text-secondary">Soutenir le développement professionnel des membres</p>
          </div>
        </div>
      </section>
    </div>
  );
}
