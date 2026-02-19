import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Association Scientifique</Link>
        <ul className="flex space-x-4">
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/evenements">Événements</Link></li>
          <li><Link href="/publications">Publications</Link></li>
          <li><Link href="/formations">Formations</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}