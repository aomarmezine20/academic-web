'use client';

import { Check } from 'lucide-react';

export default function Adhesion() {
  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-accent-primary mb-8">Adhésion au Réseau</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {/* Membership Types */}
          <div className="bg-surface border border-border-color rounded-lg p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Types de Membre</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-accent-primary pl-4 py-2">
                <h3 className="font-semibold text-text-primary">Chercheur/Académique</h3>
                <p className="text-sm text-text-secondary">Pour les enseignants-chercheurs et chercheurs</p>
              </div>
              <div className="border-l-4 border-accent-primary pl-4 py-2">
                <h3 className="font-semibold text-text-primary">Professionnel</h3>
                <p className="text-sm text-text-secondary">Pour les praticiens et experts du secteur</p>
              </div>
              <div className="border-l-4 border-accent-primary pl-4 py-2">
                <h3 className="font-semibold text-text-primary">Doctorant</h3>
                <p className="text-sm text-text-secondary">Pour les étudiants en doctorat</p>
              </div>
              <div className="border-l-4 border-accent-primary pl-4 py-2">
                <h3 className="font-semibold text-text-primary">Étudiant</h3>
                <p className="text-sm text-text-secondary">Pour les étudiants Master et supérieur</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-accent-light border border-accent-primary rounded-lg p-6">
            <h2 className="text-2xl font-bold text-accent-primary mb-6">Avantages de l'Adhésion</h2>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="text-accent-primary" size={20} />
                <span className="text-text-secondary">Accès aux publications et revues REEM</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-accent-primary" size={20} />
                <span className="text-text-secondary">Participation aux événements scientifiques</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-accent-primary" size={20} />
                <span className="text-text-secondary">Formations et ateliers spécialisés</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-accent-primary" size={20} />
                <span className="text-text-secondary">Réseau de collaborateurs et experts</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-accent-primary" size={20} />
                <span className="text-text-secondary">Opportunités de partenariat</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg p-8 text-center my-12">
          <h2 className="text-2xl font-bold mb-4">Prêt à Rejoindre Notre Réseau?</h2>
          <p className="mb-6">Remplissez le formulaire d&apos;adhésion et devenez member de notre communauté académique</p>
          <a href="/contact" className="inline-block bg-white text-accent-primary px-8 py-3 rounded-lg font-semibold hover:bg-surface transitions-smooth">
            Formulaire d'Adhésion
          </a>
        </div>

        <div className="bg-surface border border-border-color rounded-lg p-6">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Processus d&apos;Adhésion</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-accent-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-text-primary">Remplissez le Formulaire</h3>
                <p className="text-text-secondary">Complétez votre profil et vos informations</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-accent-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-text-primary">Vérification</h3>
                <p className="text-text-secondary">Nous examinerons votre candidature</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-accent-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-text-primary">Confirmation</h3>
                <p className="text-text-secondary">Vous recevrez une confirmation d&apos;adhésion</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
