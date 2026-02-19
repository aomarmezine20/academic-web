'use client'

import { useState } from 'react'

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsLoggedIn(true)
    }
  }

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-background p-8 flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
          <h1 className="text-2xl font-bold text-primary mb-4">Connexion Admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            className="w-full p-2 border rounded mb-4"
          />
          <button type="submit" className="bg-accent text-white px-4 py-2 rounded">Se connecter</button>
        </form>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold text-primary mb-4">Administration</h1>
      <p>Dashboard pour gérer le contenu.</p>
      {/* Add forms for managing content */}
    </main>
  )
}