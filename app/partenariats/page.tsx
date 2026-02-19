/* eslint-disable react/no-unescaped-entities */

import { Globe, Building, Users, Handshake } from 'lucide-react'

export default function Partenariats() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">Partenariats et Expertise</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
            <Globe className="w-8 h-8 mr-3" />
            Coopération Universitaire
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Échanges Académiques</h3>
              <p className="text-gray-700 mb-4">
                Programmes d'échange avec des universités internationales pour enrichir notre recherche.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Programmes Erasmus+</li>
                <li>• Partenariats bilatéraux</li>
                <li>• Conférences conjointes</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Collaborations de Recherche</h3>
              <p className="text-gray-700 mb-4">
                Projets de recherche conjoints avec des institutions prestigieuses.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Projets européens</li>
                <li>• Études comparatives</li>
                <li>• Publications communes</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
            <Building className="w-8 h-8 mr-3" />
            Partenariats Public-Privé
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6">
              Nous collaborons avec des entreprises pour appliquer la recherche académique aux défis du monde réel.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg hover:border-primary transition">
                <Handshake className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-2">Consulting</h3>
                <p className="text-sm text-gray-600">Expertise pour entreprises</p>
              </div>
              <div className="text-center p-4 border rounded-lg hover:border-primary transition">
                <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-2">Stages</h3>
                <p className="text-sm text-gray-600">Opportunités pour étudiants</p>
              </div>
              <div className="text-center p-4 border rounded-lg hover:border-primary transition">
                <Globe className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">Projets collaboratifs</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
            <Users className="w-8 h-8 mr-3" />
            Réseaux de Recherche
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Réseaux Nationaux</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Réseau Marocain de Recherche en Économie</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Association des Chercheurs en Management</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Forum des Universités Marocaines</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Réseaux Internationaux</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>European Association for Research in Management</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Academy of Management</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>International Association for Business Research</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}