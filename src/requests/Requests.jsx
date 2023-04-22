import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Request from './components/Request'
import Header from '../Header'
import { AuthContext } from '../contexts/AuthContext'
import Loading from '../Loading'
import del from '../assests/delete.png'
const Requests = () => {
  // states
  const [filter, setFilter] = useState(false)
  const nav = useNavigate()
  const [data,setdata] = useState([])
  const [loading,setLoading] = useState(false)
  
  const {authState} = useContext(AuthContext)
  function check_auth(){
      if(authState.isAuthenticated != true){
          return nav('/signin')
        }
      }
      
      async function Api(){
        setLoading(true)   
      const response = await fetch(authState.domain+'requests/get_reqs/',{
        headers:{
          'Authorization':'Bearer '+authState.access
        }
      })

      const res_data = await response.json()
      setdata(res_data)
      setLoading(false)
  }

  

async function Delete(){
  setLoading(true)
  const response = await fetch(authState.domain+'requests/delete',{
    method:'DELETE',
    headers:{
      'Authorization':'Bearer '+authState.access

    }
  })
  setLoading(false)
  Api()
}

useEffect(()=>{
  Api()
},[])




  return (

  <div onLoad={check_auth} className=''>
    {loading && <Loading/>}
      <Header req={true}/>
        <div className='flex max-w-[702px] mx-auto justify-around'>
      <h1 className='text-center m-2 text-lg font-semibold'>Requests ({data.length})</h1>
      <button className='flex text-center m-2 text-lg ml-10 py-1 px-3 rounded-md font-semibold items-center' onClick={Delete} > <img src={del} className='w-7 mx-2'/> Clear requests</button>
        </div>
      <div className='tra max-w-[702px] mx-auto border-0 py-3 border-black flex flex-col overflow-y-scroll h-[565px] md:h-[545px]'>
      {data.map(obj=> <Request key={obj.id} id={obj.id} profile={authState.domain+obj.traveler.profile} user={obj.traveler.name} trip_title={obj.trip.title} to_var={obj.trip.to_var} time={obj.time} />)}
      </div>
  </div>
)
}

export default Requests