import React from 'react'

export default function Hero(){
  return (
    <section className="pt-16 pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-semibold leading-tight">Photoreal vibes. Unisex energy.</h1>
          <p className="mt-4 text-lg text-neutral-600">Sell pattern files, not garments — let buyers visualize instantly.</p>
          <div className="mt-6 flex gap-3">
            <a href="#catalog" className="px-5 py-3 rounded-xl bg-black text-white text-sm">Shop Catalog</a>
            <a href="#uploader" className="px-5 py-3 rounded-xl border text-sm">Upload Pattern</a>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-2xl border grid place-items-center">
          <div className="text-neutral-400 text-sm">Stock placeholder</div>
        </div>
      </div>
    </section>
  )
}