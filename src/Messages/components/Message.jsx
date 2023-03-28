import React from 'react'
import user from '../../assests/g.png'
const Message = () => {
  return (
    <div className=''>

        {/* Messages */}
        <div className='tra overflow-y-scroll h-[500px] md:h-[440px]'>
      
        <div className='m-3 rounded-lg p-2 flex justify-end  items-center bg-gray-100'>
           <img src={user} className='w-7 rounded-full mr-2' /> Hello!
        </div>

        <div className='m-3 rounded-lg p-2 flex items-center text-white bg-sky-400'>
        <img src={user} className='w-7 rounded-full mr-2' /> Hai
        </div>
      
        <div className='m-3 rounded-lg p-2 flex justify-end  items-center bg-gray-100'>
           <img src={user} className='w-7 rounded-full mr-2' /> Hello!
        </div>

        <div className='m-3 rounded-lg p-2 flex items-center text-white bg-sky-400'>
        <img src={user} className='w-7 rounded-full mr-2' /> Hai
        </div>
      
        <div className='m-3 rounded-lg p-2 flex justify-end  items-center bg-gray-100'>
           <img src={user} className='w-7 rounded-full mr-2' /> Hello!
        </div>

        <div className='m-3 rounded-lg p-2 flex items-center text-white bg-sky-400'>
        <img src={user} className='w-7 rounded-full mr-2' /> Hai
        </div>
      
        <div className='m-3 rounded-lg p-2 flex justify-end  items-center bg-gray-100'>
           <img src={user} className='w-7 rounded-full mr-2' /> Hello!
        </div>

        <div className='m-3 rounded-lg p-2 flex items-center text-white bg-sky-400'>
        <img src={user} className='w-7 rounded-full mr-2' /> Hai
        </div>
      
        <div className='m-3 rounded-lg p-2 flex justify-end  items-center bg-gray-100'>
           <img src={user} className='w-7 rounded-full mr-2' /> Hello!
        </div>

        <div className='m-3 rounded-lg p-2 flex items-center text-white bg-sky-400'>
        <img src={user} className='w-7 rounded-full mr-2' /> Hai
        </div>

        </div>

        
        {/* //sending */}

        <div className='fixed md:top-[87%] mx-auto'>
        <input type={'text'} id='msg' className='m-3 p-1 md:w-96 border-0 outline-none  border-b-2 bg-white border-sky-400'/>
        <button className='bg-sky-400 cursor-pointer text-white border-2 border-sky-400 active:border-black hover:border-black active:scale-105 p-1 px-3 rounded-md'>Send</button>
        </div>

    </div>
  )
}

export default Message