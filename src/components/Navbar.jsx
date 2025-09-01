import React from 'react'

export default function Navbar({ cartCount = 0 }){
  const links = [
    { href: '#catalog', label: 'Catalog' },
    { href: '#on-body', label: 'On-Body' },
    { href: '#story', label: 'Story' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">CocoSuga</a>
        <nav className="hidden sm:flex gap-6">
          {links.map(l => <a key={l.href} href={l.href} className="text-sm hover:opacity-70">{l.label}</a>)}
        </nav>
        <a href="#catalog" className="text-sm">Cart ({cartCount})</a>
      </div>
    </header>
  )
}