import React, { useRef, useState } from 'react'

export default function Uploader({ onPattern }){
  const [swatches, setSwatches] = useState([])
  const fileRef = useRef()

  async function handleFile(e){
    const file = e.target.files?.[0]
    if(!file) return
    const url = await readFileAsDataURL(file)
    const tiles = [1, 0.75, 0.5, 0.25]
    const sws = await Promise.all(tiles.map(scale => makeSwatch(url, scale)))
    setSwatches(sws)
    onPattern?.(url, sws)
  }

  return (
    <div className="rounded-2xl border p-6">
      <div className="flex items-center gap-3">
        <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="block text-sm" />
      </div>
      <p className="mt-2 text-sm text-neutral-500">Upload a PNG/JPG pattern. We’ll tile live swatches and use it for on‑body preview.</p>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {swatches.map((s,i)=>(
          <img key={i} src={s} alt={"swatch "+i} className="w-full aspect-video object-cover rounded-xl border" />
        ))}
      </div>
    </div>
  )
}

function readFileAsDataURL(file){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader()
    reader.onload = ()=> resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

function makeSwatch(imgUrl, scale=1){
  const c = document.createElement('canvas')
  c.width = 240; c.height = 160
  const ctx = c.getContext('2d')
  const img = new Image()
  img.src = imgUrl
  return new Promise(resolve => {
    img.onload = () => {
      const pattern = ctx.createPattern(img, 'repeat')
      if(pattern.setTransform){
        const m = new DOMMatrix()
        m.a = scale; m.d = scale
        pattern.setTransform(m)
      }
      ctx.fillStyle = pattern
      ctx.fillRect(0,0,c.width,c.height)
      resolve(c.toDataURL())
    }
  })
}