import React from 'react'
export default function Catalog({ items=[] }){
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {items.map(it => (
        <article key={it.id} className='border rounded-2xl p-4 flex flex-col'>
          <img src={it.image} alt={it.name} className='aspect-square rounded-xl object-cover' />
          <h3 className='mt-3 font-medium'>{it.name}</h3>
          <p className='text-sm text-neutral-600'>${it.price.toFixed(2)}</p>
          <button className='mt-3 px-4 py-2 rounded-xl bg-black text-white text-sm self-start'>Add to Cart</button>
        </article>
      ))}
    </div>
  )
}
