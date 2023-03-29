import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Request from './components/Request'
import Header from '../Header'
import { AuthContext } from '../contexts/AuthContext'

const Requests = () => {
  // states
  const [filter, setFilter] = useState(false)
  const nav = useNavigate()
  
  const {authState} = useContext(AuthContext)
  function check_auth(){
      if(authState.isAuthenticated != true){
          return nav('/signin')
      }
  }

  return (


  <div onLoad={check_auth} className=''>
      <Header req={true}/>
        <div className='flex max-w-[702px] mx-auto justify-around'>
      <h1 className='text-center m-2 text-lg font-semibold'>Requests (12)</h1>
      <button className='text-center m-2 text-lg text-white ml-10 bg-red-600 py-1 px-3 rounded-md font-semibold'>Clear requests</button>
        </div>
      <div className='tra max-w-[702px] mx-auto border-0 py-3 border-black flex flex-col overflow-y-scroll h-[565px] md:h-[545px]'>
      <Request/>
      <Request/>
      <Request/>
      <Request/>
      <Request/>
      <Request/>
      <Request/>
      <Request/>
      </div>
  </div>
)
}

export default Requests