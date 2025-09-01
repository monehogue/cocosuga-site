import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Uploader from './components/Uploader.jsx'
import OnBody from './components/OnBody.jsx'
import Catalog from './components/Catalog.jsx'
import Story from './components/Story.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const DEFAULT_ITEMS = [
  { id: 'quietly-wild', name: 'Quietly Wild', price: 18 },
  { id: 'sultry-minimal', name: 'Sultry Minimal', price: 22 },
  { id: 'afrocentric-earth', name: 'Afrocentric Earth', price: 20 },
  { id: 'playful-street', name: 'Playful Street', price: 16 },
  { id: 'monochrome-kiss', name: 'Monochrome Kiss', price: 24 },
  { id: 'heritage-weave', name: 'Heritage Weave', price: 19 }
]

export default function App() {
  const [cart, setCart] = useState([])              // [{id, qty}]
  const [patternDataUrl, setPatternDataUrl] = useState(null)  // uploaded pattern for previews
  const [swatchUrls, setSwatchUrls] = useState([])  // generated swatches

  function addToCart(item) {
    setCart(prev => {
      const found = prev.find(it => it.id === item.id)
      if (found) return prev.map(it => it.id === item.id ? { ...it, qty: it.qty + 1 } : it)
      return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1 }]
    })
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(it => it.id !== id))
  }

  const total = cart.reduce((s, it) => s + it.price * it.qty, 0)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={cart.reduce((s, it)=>s+it.qty,0)} />
      <main className="flex-1">
        <Hero />
        <section id="uploader" className="py-16 border-t">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6">Pattern Uploader & Live Swatches</h2>
            <Uploader onPattern={(url, swatches)=>{ setPatternDataUrl(url); setSwatchUrls(swatches); }} />
          </div>
        </section>
        <section id="on-body" className="py-16 border-t">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6">On‑Body Previews</h2>
            <OnBody patternUrl={patternDataUrl} />
          </div>
        </section>
        <section id="catalog" className="py-16 border-t">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6">Pattern Catalog</h2>
            <Catalog items={DEFAULT_ITEMS} onAdd={addToCart} />
          </div>
        </section>
        <section id="story" className="py-16 border-t">
          <div className="max-w-6xl mx-auto px-6">
            <Story />
          </div>
        </section>
        <section id="contact" className="py-16 border-t">
          <div className="max-w-6xl mx-auto px-6">
            <Contact />
          </div>
        </section>
      </main>
      <Footer total={total} cart={cart} onRemove={removeFromCart} />
    </div>
  )
}