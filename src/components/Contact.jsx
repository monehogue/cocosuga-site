import React from 'react'

export default function Contact(){
  function handleSubmit(e){
    e.preventDefault()
    alert('Thanks — we will get back to you at the provided email.')
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <label className="block text-sm mb-1">Email</label>
      <input required type="email" placeholder="you@example.com" className="w-full border rounded-xl px-3 py-2" />
      <label className="block text-sm mt-4 mb-1">Message</label>
      <textarea required rows="4" className="w-full border rounded-xl px-3 py-2" placeholder="Tell us about your project…" />
      <button className="mt-4 px-4 py-2 rounded-xl bg-black text-white text-sm">Send</button>
      <p className="mt-2 text-xs text-neutral-500">Or email <a className="underline" href="mailto:hello@cocosuga.example">hello@cocosuga.example</a></p>
    </form>
  )
}