import React from 'react'

export default function Footer({ total=0, cart=[], onRemove }){
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
        <p className="text-sm">© {new Date().getFullYear()} CocoSuga</p>
        <div className="text-sm">
          <strong>Cart Total:</strong> ${total.toFixed(2)}
          {cart.length > 0 && (
            <div className="mt-2 space-y-1">
              {cart.map(it => (
                <div key={it.id} className="flex items-center gap-2">
                  <span>{it.name} × {it.qty}</span>
                  <button onClick={()=>onRemove?.(it.id)} className="text-xs underline">remove</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}