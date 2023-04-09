import React from 'react'
const TripCard = (p) => {


  function replace_some(text){
    return text.replace('[','').replace(']','')
  }

  return (
    <div>
    <h1 className='m-3 mt-6 text-xl text-sky-400 font-bold'>{p.title}</h1>
    <div className='grid md:grid-cols-2'>
    <img className='m-3 rounded-md shadow-lg shadow-gray-600 w-[96%] md:w-[100%] mx-auto' src={p.img}/>
    <p className='text-justify p-3 py-10' dangerouslySetInnerHTML={{__html:replace_some(p.content)}}/>
    </div>
    </div>
  )
}

export default TripCard