import React, { useMemo } from 'react'
import placeholder from '../assets/onbody.svg'

export default function OnBody({ patternUrl }){
  const style = useMemo(()=> patternUrl ? { backgroundImage: `url(${patternUrl})`, backgroundSize: '200px 200px', opacity: 0.9 } : {}, [patternUrl])
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl overflow-hidden border relative">
        <img src={placeholder} alt="on-body" className="w-full h-full object-cover" />
        {patternUrl && (
          <div className="absolute inset-20 rounded-xl mix-blend-multiply" style={{...style, backgroundRepeat:'repeat'}} />
        )}
      </div>
      <div className="rounded-2xl overflow-hidden border relative hidden md:block">
        <img src={placeholder} alt="on-body" className="w-full h-full object-cover" />
        {patternUrl && (
          <div className="absolute inset-28 rounded-xl mix-blend-multiply" style={{...style, backgroundRepeat:'repeat'}} />
        )}
      </div>
    </div>
  )
}