'use client'

import { Lightbulb, Zap, Globe, Shield, Users, Rocket } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Lightbulb size={32} />,
    title: 'AI-Powered Research',
    description: 'Leverage artificial intelligence to accelerate your research and uncover new insights.',
  },
  {
    icon: <Zap size={32} />,
    title: 'Lightning Fast',
    description: 'Process data in seconds with our optimized infrastructure and real-time collaboration.',
  },
  {
    icon: <Globe size={32} />,
    title: 'Global Collaboration',
    description: 'Connect with researchers worldwide and share findings instantly across borders.',
  },
  {
    icon: <Shield size={32} />,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with international data protection standards.',
  },
  {
    icon: <Users size={32} />,
    title: 'Team Workspace',
    description: 'Organize teams, manage permissions, and streamline your entire research workflow.',
  },
  {
    icon: <Rocket size={32} />,
    title: 'Deploy Instantly',
    description: 'Launch your research platform in minutes with our one-click deployment system.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-text-primary">Powerful Features for</span>
            <span className="block bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent mt-2">
              Modern Research
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Everything you need to conduct cutting-edge research with advanced tools and seamless collaboration.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl overflow-hidden hover:transition-all hover:duration-300"
              style={{
                animation: `slide-up 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-alt group-hover:from-surface-alt group-hover:to-surface transition-all duration-300" />
              
              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-300" />

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl shadow-glow transition-all duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-lg bg-accent-purple/10 group-hover:bg-accent-purple/20 transition-all duration-300 mb-4">
                  <div className="text-accent-purple group-hover:text-accent-blue transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accent-purple group-hover:to-accent-blue group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-6 pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
                  <div className="w-12 h-1 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full group-hover:w-24 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
