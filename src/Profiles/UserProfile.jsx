import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import Header from '../Header'
import user from '../assests/g.png'
import Traveler from '../Homepage/components/Traveler'
const UserProfile = () => {
    const nav = useNavigate()
    
    const {authState} = useContext(AuthContext)
    function check_auth(){
        if(authState.isAuthenticated != true){
            return nav('/signin')
        }
    }
  
  return (
    
    <div onLoad={check_auth} className=''>
    <Header/>
      <div className='flex max-w-[702px] mx-auto justify-around'>
    </div>
    <div className='tra max-w-[702px] mx-auto border-0 py-3 border-black flex flex-col overflow-y-scroll h-[565px] md:h-[545px]'>
        
        <div className='m-2 p-2 flex justify-around items-center rounded-md shadow-sm shadow-gray-400'>
            <div className='flex flex-col items-center'>
            <img src={user} className='w-14 md:w-36 m-1 mb-0 rounded-full border-2 border-sky-400'/>
            <h1 className='text-lg md:text-2xl text-sky-400  font-bold'>Madhu</h1>
            </div>
            
            <div className='flex flex-col items-center'>
            <h1 className='text-lg text-gray-800 font-semibold'>Trips</h1>
            <h1 className='text-lg text-gray-400 font-bold'>12</h1>
            </div>
            
            <div className='flex flex-col items-center'>
            <h1 className='text-lg text-gray-800 font-semibold'>Travelmates</h1>
            <h1 className='text-lg text-gray-400 font-bold'>45</h1>
            </div>

            <div className='flex flex-col items-center'>
            <h1 className='text-lg text-gray-800 font-semibold'>Fans</h1>
            <h1 className='text-lg text-gray-400 font-bold'>123</h1>
            </div>
        </div>


        <h1 className='m-1 mx-7 text-lg font-semibold'>Trips</h1>
        <div className='tra flex flex-col overflow-y-scroll md:h-[555px]'>
      <Traveler vis={true}/>
      <Traveler vis={true}/>
      <Traveler vis={true}/>
      <Traveler vis={true}/>
      <Traveler vis={true}/>
      <Traveler vis={true}/>
      <Traveler vis={true}/>

      </div>
      

    </div>
</div>
  )
}

export default UserProfile