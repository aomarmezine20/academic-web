/* eslint-disable react/no-unescaped-entities */

import { Building, Users, Award, Mail } from 'lucide-react'

export default function Gouvernance() {
  const bureauExecutif = [
    { nom: 'Dr. Ahmed Bennani', poste: 'Président', specialite: 'Économie Internationale' },
    { nom: 'Pr. Fatima Alaoui', poste: 'Vice-Présidente', specialite: 'Management Stratégique' },
    { nom: 'Dr. Mohamed Tazi', poste: 'Secrétaire Général', specialite: 'Finance d\'Entreprise' },
    { nom: 'Pr. Amina Rachid', poste: 'Trésorière', specialite: 'Comptabilité' },
  ]

  const experts = [
    { nom: 'Pr. Hassan El Ghazi', domaine: 'Économie du Développement' },
    { nom: 'Dr. Leila Mansouri', domaine: 'Marketing Digital' },
    { nom: 'Pr. Karim Alaoui', domaine: 'Ressources Humaines' },
    { nom: 'Dr. Nadia Bennani', domaine: 'Économie Numérique' },
  ]

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">Gouvernance et Structure</h1>

        {/* Bureau Exécutif */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
            <Building className="w-8 h-8 mr-3" />
            Bureau Exécutif
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bureauExecutif.map((membre, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-1">{membre.nom}</h3>
                <p className="text-accent font-medium mb-2">{membre.poste}</p>
                <p className="text-sm text-gray-600">{membre.specialite}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Organigramme */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Organigramme</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <div className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold">
                Assemblée Générale
              </div>
            </div>
            <div className="flex justify-center mb-8">
              <div className="text-center">
                <div className="inline-block bg-accent text-primary px-6 py-3 rounded-lg font-semibold mb-4">
                  Bureau Exécutif
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-primary/10 px-4 py-2 rounded">Président</div>
                  <div className="bg-primary/10 px-4 py-2 rounded">Vice-Président</div>
                  <div className="bg-primary/10 px-4 py-2 rounded">Secrétaire</div>
                  <div className="bg-primary/10 px-4 py-2 rounded">Trésorier</div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Commissions</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Scientifique</li>
                  <li>• Formation</li>
                  <li>• Communication</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Groupes de Travail</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Recherche</li>
                  <li>• Événements</li>
                  <li>• Publications</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Membres</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Actifs</li>
                  <li>• Associés</li>
                  <li>• Honoraires</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Annuaire des Experts */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
            <Award className="w-8 h-8 mr-3" />
            Annuaire des Experts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {experts.map((expert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-primary text-lg mb-1">{expert.nom}</h3>
                    <p className="text-accent mb-3">{expert.domaine}</p>
                    <p className="text-sm text-gray-600 mb-4">
                      Expert reconnu dans son domaine avec de nombreuses publications et interventions.
                    </p>
                  </div>
                  <Mail className="w-5 h-5 text-primary cursor-pointer hover:text-accent transition" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Publications</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Conférences</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Expertise</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}