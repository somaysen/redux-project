import React from 'react'

function ResultCard({ item }) {
  return (
    <div className='w-[18vw] h-66 relative bg-zinc-300  rounded-2xl overflow-hidden ' >
      <div className='h-full ' >
        {item.type == "photo" ? <img className='h-full w-full object-cover object-center ' src={item.src} alt='' /> : ""}
        {item.type == "video" ? <video autoPlay loop muted className='h-full w-full object-cover object-center ' src={item.src} ></video> : ""}
        {item.type == "gif" ? <img className='h-full w-full object-cover object-center ' src={item.src} alt="" /> : ""}
      </div>
      <div id="bottom" className=' w-full px-4 py-6 absolute bottom-0 text-white' >
        <h1 className='text-sm font-semibold capitalize ' >{item.title}</h1>
      </div>
    </div>
  )
}

export default ResultCard