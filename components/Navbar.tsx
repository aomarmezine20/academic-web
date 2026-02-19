'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Blur Background */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-lg border-b border-white/10" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="text-2xl font-bold bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan bg-clip-text text-transparent group-hover:from-accent-purple group-hover:via-accent-cyan group-hover:to-accent-blue transition-all duration-300">
              Association
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="group relative px-6 py-2 text-sm font-semibold text-text-primary rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 group-hover:from-accent-purple/40 group-hover:to-accent-blue/40 transition-all duration-300" />
              <div className="absolute inset-0 border border-white/20 group-hover:border-white/40 rounded-lg transition-all duration-300" />
              <span className="relative">Get Started</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-primary hover:bg-surface rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-surface/95 backdrop-blur-lg border-b border-white/10 animate-slide-up">
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-accent-purple to-accent-blue text-text-primary rounded-lg font-semibold hover:shadow-glow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
