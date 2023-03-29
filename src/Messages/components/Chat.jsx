import React from 'react'
import user from '../../assests/g.png'
const Chat = () => {
  return (
    <div className='text-md active:bg-sky-400 focus:bg-sky-400  shadow-sm shadow-gray-400 p-1 my-2 text-sky-400 border-0 rounded-md font-bold'>
        <h1 className='flex items-center text-md shadow-sm text-sky-400 border-0 rounded-md font-bold'><img src={user} className='w-10 mr-2 rounded-full'/> Sean </h1>
        <h1 className='text-[12px] m-1 font-normal text-black float-right'>You : How are you?</h1>
    <br/>
    </div>
  )
}

export default Chat