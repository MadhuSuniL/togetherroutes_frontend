import React, { useState } from 'react'
import user from '../../assests/g.png'
const Request = () => {

    const [react, setReact] = useState('none')

  return (
    <div className='my-3 mx-1 shadow-md shadow-gray-400 rounded-md p-2'>
        <h1 className='w-10 flex font-bold text-lg items-center'> <img src={user} className='mr-2 w-10 rounded-full' /> Sean</h1>
        <h1 className='text-md text-cente0r font-semibold my-2'>Requested for <span className='text-sky-400'>Visit to paris </span>- <span className='text-yellow-400'>Banglore </span></h1>
        {react == 'none' && <button onClick={()=>setReact('true')} className='border-2 p-3 float-right py-1 text-white font-bold rounded-md m-2 mt-1 bg-sky-400 border-gray-400'>Accept</button>}        
        {react == 'none' && <button onClick={()=>setReact('false')} className='border-2 p-3 float-right py-1 text-black font-bold rounded-md m-2 mt-1 border-gray-400'>Cancel</button>}
        {react == 'true' && <h1 className='text-green-400 float-right font-bold text-lg m-2'>Request Accepted</h1>}
        {react == 'false' && <h1 className='text-red-600 float-right font-bold text-lg m-2'>Request Canceled</h1>}

    </div>
  )
}

export default Request