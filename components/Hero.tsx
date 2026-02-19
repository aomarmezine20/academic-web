'use client'

import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient circles */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-blue/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2s" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-accent-cyan/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4s" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <div className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-purple/10 border border-accent-purple/30 hover:border-accent-purple/60 transition-all duration-300 cursor-pointer">
            <Sparkles size={16} className="text-accent-purple" />
            <span className="text-sm font-medium bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
              Introducing AI-Powered Features
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-slide-up">
          <span className="block text-text-primary">The Future of</span>
          <span className="block bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan bg-clip-text text-transparent">Scientific Excellence</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-1s leading-relaxed">
          Transform your research with cutting-edge technology. Collaborate, innovate, and lead the future of science.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-2s">
          <button className="group relative px-8 py-4 text-lg font-semibold text-text-primary rounded-xl overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-blue opacity-90" />
            {/* Animated border */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-accent-blue to-accent-cyan transition-opacity duration-300" />
            {/* Glow effect */}
            <div className="absolute inset-0 group-hover:shadow-glow-lg transition-all duration-300" />
            <span className="relative flex items-center gap-2">
              Get Started Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>

          <button className="group px-8 py-4 text-lg font-semibold text-text-primary rounded-xl border border-white/20 hover:border-white/40 hover:bg-surface/50 transition-all duration-300 backdrop-blur-sm">
            View Demo
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 sm:gap-12 animate-slide-up animation-delay-3s">
          {[
            { value: '10K+', label: 'Researchers' },
            { value: '500+', label: 'Publications' },
            { value: '99.9%', label: 'Uptime' },
          ].map((stat, index) => (
            <div key={index} className="group">
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent group-hover:from-accent-blue group-hover:to-accent-purple transition-all duration-300">
                {stat.value}
              </p>
              <p className="text-text-secondary text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
