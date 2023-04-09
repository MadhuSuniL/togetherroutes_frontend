import React, { useState } from 'react'
import logo from '../../assests/g.png'
import time from '../../assests/time.png'
import timer from '../../assests/timer.png'
import usb from '../../assests/usb.png'
import user from '../../assests/user.png'
import ft from '../../assests/ft.png'

const Traveler = (p) => {
  const domain = 'http://localhost:8000/'
  const [request, setRequest] = useState(false)


  function days_ago(date){
    var main = new Date(date)
    var cudate = new Date()
    var diff = main - cudate
    diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (diff == 0){
      return 'Completed'
    }
    return `${diff} days to go`
  }






  return (
    <div className='shadow-sm m-1 p-3 ease-in-out duration-700 shadow-gray-500 rounded-md'>
        <div className='flex justify-between'>
            <div>
       <h1 className='m-3 text-lg text-left text-sky-400 font-semibold'>{p.title}</h1> 
            </div>
            <img src={`${domain}${p.profile}`} className='w-10 rounded-full m-3 mb-0'/>
        </div>
       <h1 className='m-3 mt-0 text-md  font-semibold text-left  flex'><span><img src={user} className='mr-1 mt-[13%] w-4'/></span>{p.name}</h1> 
        <h1 className='m-3 text-sm  font-semibold text-left flex '><span><img src={time} className='mr-1 mt-[13%] w-4'/></span>{p.date}</h1>
        <h1 className='m-3 text-sm  font-semibold text-left flex '><span><img src={usb} className='mr-1 mt-[13%] w-4'/></span> {p.trip_for}</h1>
        <h1 className='m-3 text-sm  font-semibold text-left flex '><span><img src={timer} className='mr-1 mt-[13%] w-4'/></span> {days_ago(p.date)}</h1>
        {/* <br/> */}

        <div className='flex justify-around  mt-5'>
            <center>
            <h1 className='text-gray-500 font-bold'>From</h1>
            <h1 className='text-yellow-400 font-bold'>{p.from}</h1>
            </center>
            <img src={ft} className='w-12'/>
            <center>
            <h1 className='text-gray-500 font-bold'>To</h1>
            <h1 className='text-sky-400 font-bold'>{p.to}</h1>
            </center>

        </div>
        <br/>
        {p.vis && !request && <button onClick={()=>setRequest(true)} className='border-2 p-3 float-right py-1 text-white font-bold rounded-md m-2 bg-sky-400 border-gray-400'>Request Trip</button>}
        {request && <button className='border-0 p-3 float-right py-1 text-green-500 font-bold rounded-md m-2' disabled>Requested Successfully..!</button>}
    </div>
  )
}

export default Traveler