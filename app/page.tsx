'use client';

export default function Home() {
  return (
    <div className="bg-white text-text-primary">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-primary to-accent-secondary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Réseau Collectif d'Études Économiques et Management
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Plateforme de recherche, publications et événements scientifiques de haut niveau
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/accueil/qui-sommes-nous" className="bg-white text-accent-primary px-8 py-3 rounded-lg font-semibold hover:bg-surface transitions-smooth">
              En Savoir Plus
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transitions-smooth">
              Nous Contacter
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-surface py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-primary mb-2">500+</div>
            <p className="text-text-secondary">Chercheurs et Experts</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-primary mb-2">50+</div>
            <p className="text-text-secondary">Publications par An</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-primary mb-2">100+</div>
            <p className="text-text-secondary">Événements Scientifiques</p>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-text-primary">
            Nos Activités Principales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Section Card 1 */}
            <div className="bg-surface border border-border-color rounded-lg p-6 card-shadow hover:shadow-hover transitions-smooth hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-accent-primary mb-3">
                Événements Scientifiques
              </h3>
              <p className="text-text-secondary mb-4">
                Colloques, séminaires, journées d'étude et webinaires de niveau international
              </p>
              <a href="/evenements" className="text-accent-primary hover:text-accent-secondary font-semibold">
                Découvrir →
              </a>
            </div>

            {/* Section Card 2 */}
            <div className="bg-surface border border-border-color rounded-lg p-6 card-shadow hover:shadow-hover transitions-smooth hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-accent-primary mb-3">
                Publications
              </h3>
              <p className="text-text-secondary mb-4">
                Revue REEM, ouvrages collectifs et rapports de recherche spécialisés
              </p>
              <a href="/publications" className="text-accent-primary hover:text-accent-secondary font-semibold">
                Découvrir →
              </a>
            </div>

            {/* Section Card 3 */}
            <div className="bg-surface border border-border-color rounded-lg p-6 card-shadow hover:shadow-hover transitions-smooth hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-accent-primary mb-3">
                Formations
              </h3>
              <p className="text-text-secondary mb-4">
                Ateliers méthodologiques, formations transversales et accompagnement doctoral
              </p>
              <a href="/formations" className="text-accent-primary hover:text-accent-secondary font-semibold">
                Découvrir →
              </a>
            </div>

            {/* Section Card 4 */}
            <div className="bg-surface border border-border-color rounded-lg p-6 card-shadow hover:shadow-hover transitions-smooth hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-accent-primary mb-3">
                Partenariats
              </h3>
              <p className="text-text-secondary mb-4">
                Collaborations universitaires, publiques et privées à l'échelle nationale et internationale
              </p>
              <a href="/partenariats" className="text-accent-primary hover:text-accent-secondary font-semibold">
                Découvrir →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-surface py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-text-primary">
              Actualités Récentes
            </h2>
            <a href="/evenements" className="text-accent-primary hover:text-accent-secondary font-semibold">
              Voir tous les événements →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white border border-border-color rounded-lg overflow-hidden card-shadow hover:shadow-hover transitions-smooth">
                <div className="h-40 bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
                <div className="p-6">
                  <p className="text-sm text-text-muted mb-2">Février 2026</p>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    Titre de l'événement {item}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Description courte de l'événement ou de l'actualité importante...
                  </p>
                  <a href="#" className="text-accent-primary hover:text-accent-secondary font-semibold text-sm">
                    Lire plus →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Devenir Membre
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Rejoignez notre réseau de chercheurs, experts et praticiens engagés dans l'excellence académique
          </p>
          <a href="/accueil/adhesion" className="inline-block bg-white text-accent-primary px-8 py-3 rounded-lg font-semibold hover:bg-surface transitions-smooth">
            Savoir Comment S'Adhérer
          </a>
        </div>
      </section>
    </div>
  );
}