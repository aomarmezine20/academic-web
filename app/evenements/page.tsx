'use client';

export default function Evenements() {
  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-accent-primary mb-4">Événements Scientifiques</h1>
        <p className="text-xl text-text-secondary mb-12">Découvrez nos colloques, séminaires, journées d'étude et webinaires</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Event Types */}
          <div className="bg-surface border border-border-color rounded-lg p-6 hover:shadow-hover transitions-smooth">
            <h2 className="text-2xl font-bold text-accent-primary mb-4">Colloques & Conférences</h2>
            <p className="text-text-secondary mb-4">
              Événements majeurs rassemblant chercheurs et experts pour débattre des enjeux contemporains en économie et management.
            </p>
            <a href="/evenements/colloques" className="text-accent-primary font-semibold hover:text-accent-secondary">
              En Savoir Plus →
            </a>
          </div>

          <div className="bg-surface border border-border-color rounded-lg p-6 hover:shadow-hover transitions-smooth">
            <h2 className="text-2xl font-bold text-accent-primary mb-4">Journées d'Étude</h2>
            <p className="text-text-secondary mb-4">
              Événements thématiques approfondis, moins formels que les colloques, favorisant l'échange et le dialogue.
            </p>
            <a href="/evenements/journees" className="text-accent-primary font-semibold hover:text-accent-secondary">
              En Savoir Plus →
            </a>
          </div>

          <div className="bg-surface border border-border-color rounded-lg p-6 hover:shadow-hover transitions-smooth">
            <h2 className="text-2xl font-bold text-accent-primary mb-4">Séminaires Doctoraux</h2>
            <p className="text-text-secondary mb-4">
              Espace dédié à la formation et au développement des doctorants, avec présentations et retours d'experts.
            </p>
            <a href="/evenements/seminaires" className="text-accent-primary font-semibold hover:text-accent-secondary">
              En Savoir Plus →
            </a>
          </div>

          <div className="bg-surface border border-border-color rounded-lg p-6 hover:shadow-hover transitions-smooth">
            <h2 className="text-2xl font-bold text-accent-primary mb-4">Webinaires & Tables Rondes</h2>
            <p className="text-text-secondary mb-4">
              Événements virtuels accessibles à distance, facilitant la participation et les échanges internationaux.
            </p>
            <a href="/evenements/webinaires" className="text-accent-primary font-semibold hover:text-accent-secondary">
              En Savoir Plus →
            </a>
          </div>
        </div>

        <div className="bg-accent-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Calendrier des Événements</h2>
          <p className="mb-6">Consultez notre calendrier complet pour les dates et inscriptions</p>
          <button className="bg-white text-accent-primary px-6 py-2 rounded font-semibold hover:bg-surface transitions-smooth">
            Voir le Calendrier
          </button>
        </div>
      </section>
    </div>
  );
}