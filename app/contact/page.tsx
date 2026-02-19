'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-accent-primary mb-8">Nous Contacter</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <Mail className="text-accent-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-text-primary">Email</h3>
                <p className="text-text-secondary">contact@rceme.org</p>
                <p className="text-text-secondary">info@rceme.org</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-accent-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-text-primary">Téléphone</h3>
                <p className="text-text-secondary">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-accent-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-text-primary">Adresse</h3>
                <p className="text-text-secondary">
                  Institut de Recherche<br/>
                  Université Centrale<br/>
                  Ville, Code Postal
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface border border-border-color rounded-lg p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Formulaire de Contact</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Nom</label>
                <input type="text" className="w-full border border-border-color rounded px-4 py-2 text-text-primary" placeholder="Votre nom"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Email</label>
                <input type="email" className="w-full border border-border-color rounded px-4 py-2 text-text-primary" placeholder="votre@email.com"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Sujet</label>
                <input type="text" className="w-full border border-border-color rounded px-4 py-2 text-text-primary" placeholder="Sujet de votre message"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Message</label>
                <textarea className="w-full border border-border-color rounded px-4 py-2 text-text-primary h-32" placeholder="Votre message..."></textarea>
              </div>
              <button type="submit" className="w-full bg-accent-primary text-white px-6 py-2 rounded font-semibold hover:bg-accent-secondary transitions-smooth">
                Envoyer
              </button>
            </form>
          </div>
        </div>

        {/* Hours */}
        <div className="bg-accent-light border border-accent-primary rounded-lg p-6">
          <h2 className="text-2xl font-bold text-accent-primary mb-4">Horaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-text-secondary">
            <div>
              <p className="font-semibold">Lundi - Vendredi: 09h - 17h</p>
              <p className="font-semibold">Samedi - Dimanche: Fermé</p>
            </div>
            <div>
              <p className="text-sm">Pour les demandes urgentes, contactez-nous par email</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}