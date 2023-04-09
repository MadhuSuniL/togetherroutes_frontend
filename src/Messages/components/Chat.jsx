import React from 'react'
import user from '../../assests/g.png'
import book from '../../assests/book.png'
import book2 from '../../assests/book2.png'

const Chat = () => {
  return (
    <div className='text-md active:bg-sky-400 focus:bg-sky-400  shadow-sm shadow-gray-400 p-1 my-2 text-sky-400 border-0 rounded-md font-bold'>
        <div className='flex justify-between items-center'>
        <h1 className='flex items-center text-md shadow-sm text-sky-400 border-0 rounded-md font-bold'><img src={user} className='w-10 mr-2 rounded-full'/> Sean </h1>
        <img src={book} className='w-6 mt-10 mr-4'/>
        </div>
        <h1 className='text-sm pr-10 m-1 mb-0 font-normal text-black'>How are you?
         ddd df d s sd as dfdf 
          </h1>
        <h1 className='text-[12px] m-1 mb-0 font-normal text-black float-right'>12:00PM</h1>
    <br/>
    </div>
  )
}

export default Chat