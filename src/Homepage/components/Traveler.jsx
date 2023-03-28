import React, { useState } from 'react'
import logo from '../../assests/g.png'
import time from '../../assests/time.png'
import timer from '../../assests/timer.png'
import usb from '../../assests/usb.png'
import user from '../../assests/user.png'
import ft from '../../assests/ft.png'

const Traveler = (p) => {

  const [request, setRequest] = useState(false)

  return (
    <div className='shadow-sm m-1 p-3 ease-in-out duration-700 shadow-gray-500 rounded-md'>
        <div className='flex justify-between'>
            <div>
       <h1 className='m-3 text-lg text-left text-sky-400 font-semibold'>Visit To Paris</h1> 
            </div>
            <img src={logo} className='w-10 rounded-full m-3 mb-0'/>
        </div>
       <h1 className='m-3 mt-0 text-md  font-semibold text-left  flex'><span><img src={user} className='mr-1 mt-[13%] w-4'/></span>Madhu</h1> 
        <h1 className='m-3 text-sm  font-semibold text-left flex '><span><img src={time} className='mr-1 mt-[13%] w-4'/></span>12-03-2023</h1>
        <h1 className='m-3 text-sm  font-semibold text-left flex '><span><img src={usb} className='mr-1 mt-[13%] w-4'/></span> Tourism</h1>
        <h1 className='m-3 text-sm  font-semibold text-left flex '><span><img src={timer} className='mr-1 mt-[13%] w-4'/></span> 3 days  to go</h1>
        {/* <br/> */}

        <div className='flex justify-around  mt-5'>
            <center>
            <h1 className='text-gray-500 font-bold'>From</h1>
            <h1 className='text-yellow-400 font-bold'>Hyderbad</h1>
            </center>
            <img src={ft} className='w-12'/>
            <center>
            <h1 className='text-gray-500 font-bold'>To</h1>
            <h1 className='text-sky-400 font-bold'>Bagnlore</h1>
            </center>

        </div>
        <br/>
        {p.vis && !request && <button onClick={()=>setRequest(true)} className='border-2 p-3 float-right py-1 text-white font-bold rounded-md m-2 bg-sky-400 border-gray-400'>Request Trip</button>}
        {request && <button className='border-0 p-3 float-right py-1 text-green-500 font-bold rounded-md m-2' disabled>Requested Successfully..!</button>}
    </div>
  )
}

export default Traveler