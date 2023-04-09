import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import Message from './components/Message'
import Chat from './components/Chat'
import user from '../assests/g.png'
import { AuthContext } from '../contexts/AuthContext'

const Messages = () => {
    
    const nav = useNavigate()
    const [filter, setFilter] = useState(false)
  
    const {authState} = useContext(AuthContext)
    function check_auth(){
        if(authState.isAuthenticated != true){
            return nav('/signin')
        }
    }

    return (
    <div onLoad={check_auth} className=''>
        <Header msg={true}/>
        <div className='grid md:grid-cols-3 gap-2 max-w-[1030px] p-1 mx-auto border-0 border-black'>
        {/* filter */}
        <div className='tra overflow-y-scroll hidden md:block p-1 m-3 shadow-sm h-[535px] rounded-md shadow-gray-500'>
        <h1 className='text-center m-2 text-lg font-semibold'>Chats</h1>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        </div>
        <div className='col-span-2 p-1 pb-0'>
            <div className='flex justify-around'>
        <h1 className='text-center m-2 text-lg font-semibold hidden md:flex items-start text-sky-400'><img src={user} className='w-7 mr-2 rounded-full '/> Sean</h1>
            </div>
        <div className='md:hidden mb-2 flex justify-around overflow-x-scroll w-96'>
            <button onClick={()=>setFilter(!filter)} >back</button>
            <h1 className='mr-4 p-1 px-2 border-02 text-sky-400 border-sky-400 rounded-md flex items-center '> <img src={user} className='w-7 mr-3 rounded-full'/> Sean</h1>
            </div>        

        <div className='tra h-[535px]'>
        <Message/>
        </div>
        </div>
        
        </div>

        <div className={filter ? 'md:hidden fixed bg-white w-full h-[650px] top-0 text-md p-5 left-0' : 'hidden md:hidden fixed bg-white w-full h-full top-0 text-lg p-5 left-0'}>
        <h1 className='text-center m-2 text-lg text-sky-400 font-semibold'>Chats</h1>
        <div className='tra overflow-y-scroll md:hidden p-0 m-0 shadow-sm h-[535px] rounded-md shadow-gray-500'>
        <Chat/>
        </div>
        </div>
    
    </div>
  )

}
export default Messages