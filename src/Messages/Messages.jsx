import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import Message from './components/Message'
import Chat from './components/Chat'
import user from '../assests/g.png'
import refresh from '../assests/refresh.png'
import book2 from '../assests/book2.png'
import pencil from '../assests/navbar/pencil.png'
import Loading from '../Loading'
import { AuthContext } from '../contexts/AuthContext'

const Messages = () => {
    
    const nav = useNavigate()
    const [filter, setFilter] = useState(false)
    const [data, setData] = useState([])
    const [loading,setLoading] = useState(false)
    
    const {authState} = useContext(AuthContext)
    function check_auth(){
      if(authState.isAuthenticated != true){
        return nav('/signin')
      }
    }
    
    function CreateApi(f){
      setLoading(true)   
      f.preventDefault()
      alert(f.target[0].value)
      const response = fetch(authState.domain+'messages/recv_msg',{
        headers:{
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Authorization':'Bearer '+authState.access

        },
        method:'POST',
        body:JSON.stringify({
          receiver_id : 1,
          message:f.target[0].value
        })
      })
      f.target[0].value = ''
      setLoading(false)      
    }
    
    const [mates,setMates] = useState([])
    const [reciverId , setRecieverId] = useState(null)
    const [reciverName , setRecieverName] = useState('Select Mate')
    const [reciverImg , setRecieverImg] = useState('https://tse4.mm.bing.net/th?id=OIP.zagjQ5boIhl3BrdnhBeGqQHaHu&pid=Api&P=0')
    const [optBool, setOptBoll] = useState(false)
    function show_opts(){

    }


    async function get_mates(){
      setLoading(true)
      const response = await fetch(authState.domain+'travelmates/get_mates/',{
        headers:{
          'Authorization':'Bearer '+authState.access
        }
      })
      const res_data = await response.json()
      setMates(res_data)
      setLoading(false)
    }





     async function Api(){
      setLoading(true)     
        const response = await fetch(authState.domain+'messages/get_msgs/',{
          headers:{
          'Authorization':'Bearer '+authState.access

          }
        })
        const res_data = await response.json()
        setData(res_data)
        setLoading(false)
      }

      useEffect(()=>{
        Api()
      },[])

    return (
    <div onLoad={check_auth} className=''>
      {loading && <Loading/>}
        <Header msg={true}/>
        <div className='grid md:grid-cols-3 gap-2 max-w-[1030px] p-1 mx-auto border-0 border-black'>
        {/* filter */}
        <div className='tra overflow-y-scroll hidden md:block p-1 m-3 shadow-sm h-[535px] rounded-md shadow-gray-500'>
        <h1 className='text-center m-2 text-lg font-semibold'>Send</h1>
        <form onSubmit={CreateApi}>

          <label htmlFor='to' className='m-4 font-medium'>TravelMate</label><br/>
        
        <h1 onClick={()=>{
          setOptBoll(!optBool)
          get_mates()
        }} className='flex cursor-pointer m-4 items-center text-md shadow-sm text-sky-400 border-0 rounded-md font-bold'><img src={reciverImg} className='w-10 mr-2 rounded-full'/> {reciverName}</h1>
        {/* opts */}
        <div className={optBool ? 'fixed duration-500 top-[50%] w-96 h-[300px] tra overflow-y-scroll left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-3 shadow-md shadow-sky-300 rounded-md' : 'fixed duration-500 left-[200%]'}>
        
        <h1 className='text-center m-2 text-lg font-semibold'>Travelmates</h1>
        
        {
          mates.map(obj=> <h1 key={obj.id} onClick={()=>{
            setOptBoll(!optBool)
            setRecieverImg(authState.domain+obj.mate_var.profile)
            setRecieverName(obj.mate_var.name)
            setRecieverId(obj.mate_var.id)
        }
        } className='flex cursor-pointer m-4 items-center text-md shadow-sm text-sky-400 border-0 rounded-md font-bold'><img src={authState.domain+obj.mate_var.profile} className='w-10 mr-2 rounded-full'/> {obj.mate_var.name}</h1>)
        }
        
        </div>


          <br/>
          <label htmlFor='msg' className='m-4 font-medium'>Message</label><br/>
          <input type='text' placeholder='Type Message Here..' required id='msg' className='m-3 p-1 pb-3 text-gray-500 border-0 outline-none h-5  border-b-2 bg-white border-sky-400'/><br/>

      
<br></br>
      <input type='submit' value={'Send'} onClick={()=>setFilter(!filter)} className='border-2 p-3 float-right py-1 text-white font-bold rounded-md m-2 bg-sky-400 border-gray-400'/>
      <input type='reset' value={'Clear'} onClick={()=>{
        setRecieverImg('https://tse4.mm.bing.net/th?id=OIP.zagjQ5boIhl3BrdnhBeGqQHaHu&pid=Api&P=0')
        setRecieverId(null)
        setRecieverName('Select Mate')
        setOptBoll(false)
      }} className='border-2 p-3 float-right py-1 rounded-md m-2 font-bold border-sky-400'/>
      </form>
        </div>
        <div className='col-span-2 p-1 pb-0'>
        <h1 className='text-center m-2 text-lg font-semibold hidden md:block text-black'>Messages</h1>
        <div className='flex justify-around items-center'>
        <h1 className='text-center m-2 text-lg font-semibold block md:hidden text-black'>Messages</h1>
        
        <img src={refresh} onClick={()=> Api()} className='w-7 active:animate-spin hidden md:block mr-2 rounded-full cursor-pointer'/> 
        <h1 className='text-center m-2 text-lg font-semibold hidden md:flex items-start text-sky-400'><img src={book2} className='w-7 cursor-pointer'/></h1>
            </div>
        <div className='md:hidden mb-2 flex justify-around overflow-x-scroll w-96'>
            <button><img src={refresh} className='w-7 md:hidden mr-2 rounded-full cursor-pointer'/></button>
            <img src={book2} className='w-7 mr-3 rounded-full'/>
            <img onClick={()=>setFilter(!filter)}  src={pencil} className='w-7 mr-3 rounded-full'/>
            </div>        

        <div className='tra overflow-x-scroll h-[535px]'>
        
        {
          data.map(obj=> <Chat key={obj.id} sender={obj.sender} receiver={obj.receiver} msg={obj.message} time={obj.time} /> )
        }
        
        </div>
        </div>
        
        </div>

        <div className={filter ? 'md:hidden fixed bg-white w-full h-[650px] top-0 text-md p-0 left-0' : 'hidden md:hidden fixed bg-white w-full h-full top-0 text-lg p-5 left-0'}>
        <h1 className='text-center m-2 text-lg text-sky-400 font-semibold'>Chats</h1>
        <div className='tra overflow-y-scroll md:hidden p-2 m-0 shadow-0 h-[535px] rounded-md shadow-gray-500'>

        <form onSubmit={CreateApi}>
          <label htmlFor='to' className='m-4 font-medium'>TravelMate</label><br/>
        <h1 onClick={()=>setOptBoll(!optBool)} className='flex cursor-pointer m-4 items-center text-md shadow-sm text-sky-400 border-0 rounded-md font-bold'><img src={reciverImg} className='w-10 mr-2 rounded-full'/> {reciverName}</h1>
        {/* opts */}
        <div className={optBool ? 'fixed duration-500 top-[43%] w-[94%] h-[500px] tra overflow-y-scroll left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-3 shadow-md shadow-sky-300 rounded-md' : 'fixed duration-500 left-[200%]'}>
        
        <h1 className='text-center m-2 text-lg font-semibold'>Travelmates</h1>
        
        {
          mates.map(obj=> <h1 key={obj.id} onClick={()=>{
            setOptBoll(!optBool)
            setRecieverImg(authState.domain+obj.mate_var.profile)
            setRecieverName(obj.mate_var.name)
            setRecieverId(obj.mate_var.id)
        }
        } className='flex cursor-pointer m-4 items-center text-md shadow-sm text-sky-400 border-0 rounded-md font-bold'><img src={authState.domain+obj.mate_var.profile} className='w-10 mr-2 rounded-full'/> {obj.mate_var.name}</h1>)
        }
        </div>


          <br/>
          <label htmlFor='title' className='m-4 font-medium'>Message</label><br/>
          <input type='text' required id='title' className='m-3 p-1 border-0 outline-none h-20 w-[90%]  border-b-2 bg-white border-sky-400'/><br/>

      
<br></br>
      <input type='submit' value={'Send'} onClick={()=>setFilter(!filter)} className='border-2 p-3 float-right py-1 text-white font-bold rounded-md m-2 bg-sky-400 border-gray-400'/>
      <input type='reset' value={'Cancel'} onClick={()=>{
        setRecieverImg('https://tse4.mm.bing.net/th?id=OIP.zagjQ5boIhl3BrdnhBeGqQHaHu&pid=Api&P=0')
        setRecieverId(null)
        setRecieverName('Select Mate')
        setOptBoll(false)
      }} className='border-2 p-3 float-right py-1 rounded-md m-2 font-bold border-sky-400'/>
      </form>
        </div>
        </div>
    </div>
  )

}
export default Messages