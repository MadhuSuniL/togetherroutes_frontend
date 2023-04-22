import React, { useState, useContext } from 'react'
import user from '../../assests/g.png'
import { AuthContext } from '../../contexts/AuthContext'
const Request = (p) => {

    const [react, setReact] = useState('none')
    // const domain = 'http://127.0.0.1:8000/'
    const domain = 'https://travelmates.pythonanywhere.com/'

    const {authState}  = useState(AuthContext)

    function accept(){
      fetch(domain+'requests/accept_reject/'+String(p.id),{
        headers:{
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Authorization':'Bearer '+authState.access
        },
        method:'PUT',
        body:JSON.stringify({
          action:'accept'
        })
      
      })
    }

    function reject(){
      fetch(domain+'requests/accept_reject/'+String(p.id),{
        headers:{
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Authorization':'Bearer '+authState.access
        },
        method:'PUT',
        body:JSON.stringify({
          action:'reject'
        })
      
      })
    }




  return (
    <div className='my-3 mx-1 shadow-md shadow-gray-400 rounded-md p-2'>
        <h1 className='w-10 flex font-bold text-lg items-center'> <img src={p.profile} className='mr-2 w-10 rounded-full' /> {p.user}</h1>
        <h1 className='text-md text-cente0r font-semibold my-2'>Requested for <span className='text-sky-400'>{p.trip_title} </span>- <span className='text-yellow-400'>{p.to_var} </span></h1>
        {react == 'none' && <button onClick={()=>
          {
            setReact('true')
            accept()        
          }
          } className='border-2 p-3 float-right py-1 text-white font-bold rounded-md m-2 mt-1 bg-sky-400 border-gray-400'>Accept</button>}        
        {react == 'none' && <button onClick={()=>
          {
            setReact('false')
            reject()
          }
          } className='border-2 p-3 float-right py-1 text-black font-bold rounded-md m-2 mt-1 border-gray-400'>Cancel</button>}
        <span className='text-sm font-thin text-gray-500'>{p.time}</span>
        {react == 'true' && <h1 className='text-green-400 float-right font-bold text-lg m-2'>Request Accepted</h1>}
        {react == 'false' && <h1 className='text-red-600 float-right font-bold text-lg m-2'>Request Canceled</h1>}
    </div>
  )
}

export default Request