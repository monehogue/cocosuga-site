import React from 'react'
import Hero from './components/Hero.jsx'
import Catalog from './components/Catalog.jsx'

export default function App(){
  const items = [
    {id:'quietly-wild', name:'Quietly Wild', price:18, image:'https://source.unsplash.com/nSmUC15tsUI/1200x1200'},
    {id:'sultry-minimal', name:'Sultry Minimal', price:22, image:'https://source.unsplash.com/6GQ8ALFOVdM/1200x1200'},
    {id:'afrocentric-earth', name:'Afrocentric Earth', price:20, image:'https://source.unsplash.com/hhIYIqFF4O4/1200x1200'},
    {id:'playful-street', name:'Playful Street', price:16, image:'https://source.unsplash.com/FGecv_NjKco/1200x1200'},
    {id:'monochrome-kiss', name:'Monochrome Kiss', price:24, image:'https://source.unsplash.com/IqkCe7QLs-w/1200x1200'},
    {id:'heritage-weave', name:'Heritage Weave', price:19, image:'https://source.unsplash.com/QgJ1Z4c4c8k/1200x1200'}
  ]
  return (
    <div>
      <Hero heroImageUrl={'https://source.unsplash.com/RvzOH38nxoQ/1200x900'} />
      <div className='max-w-6xl mx-auto px-6 py-12' id='catalog'>
        <Catalog items={items} />
      </div>
    </div>
  )
}
