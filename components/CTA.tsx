'use client'

import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2s" />
        </div>

        {/* Main CTA Box */}
        <div className="relative group">
          {/* Border gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
          
          {/* Main content */}
          <div className="relative bg-gradient-to-br from-surface to-surface-alt rounded-3xl p-12 sm:p-16 border border-white/10 group-hover:border-white/30 transition-all duration-300">
            <div className="text-center">
              {/* Eyebrow */}
              <p className="text-accent-purple font-semibold tracking-widest uppercase text-sm mb-4">
                Get Started Today
              </p>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-text-primary">Ready to Transform</span>
                <span className="block bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent mt-2">
                  Your Research?
                </span>
              </h2>

              {/* Description */}
              <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
                Join thousands of researchers and institutions already benefiting from our platform. Start your free trial today - no credit card required.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group/btn relative px-8 py-4 text-lg font-semibold text-text-primary rounded-xl overflow-hidden w-full sm:w-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-blue" />
                  <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 bg-gradient-to-r from-accent-blue to-accent-cyan transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    Start Free Trial
                    <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <button className="group/btn px-8 py-4 text-lg font-semibold text-text-primary rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto">
                  Schedule Demo
                </button>
              </div>

              {/* Trust badges */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-text-secondary text-sm mb-4">Trusted by leading organizations</p>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  {['🏆 ISO 27001 Certified', '🔒 SOC 2 Compliant', '⚡ 99.9% Uptime SLA'].map((badge, i) => (
                    <div key={i} className="text-sm text-text-secondary">
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
