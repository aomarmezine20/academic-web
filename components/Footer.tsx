'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Security', href: '#security' },
        { name: 'Enterprise', href: '#enterprise' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '#blog' },
        { name: 'Careers', href: '#careers' },
        { name: 'Press', href: '#press' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#privacy' },
        { name: 'Terms', href: '#terms' },
        { name: 'Cookies', href: '#cookies' },
        { name: 'Contact', href: '#contact' },
      ],
    },
  ]

  return (
    <footer className="relative border-t border-white/10 bg-background/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="group inline-block mb-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent group-hover:from-accent-blue group-hover:to-accent-cyan transition-all duration-300">
                Association
              </div>
            </Link>
            <p className="text-text-secondary text-sm mb-6">
              Transforming scientific research with cutting-edge technology and collaboration tools.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: '#' },
                { icon: <Twitter size={20} />, href: '#' },
                { icon: <Linkedin size={20} />, href: '#' },
                { icon: <Mail size={20} />, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-2 rounded-lg bg-surface hover:bg-accent-purple/20 text-text-secondary hover:text-accent-purple transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-text-primary mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-secondary text-sm">
              © {currentYear} Scientific Association. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                Status
              </Link>
              <Link href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                Support
              </Link>
              <Link href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                Feedback
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
