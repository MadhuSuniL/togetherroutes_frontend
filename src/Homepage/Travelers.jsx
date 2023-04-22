import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import Traveler from './components/Traveler'
import { AuthContext } from '../contexts/AuthContext'
import { FilterContext } from '../contexts/FilterContext'
import explore from '../assests/travel.png'
import Loading from '../Loading'

const Travelers = () => {
    // states
    const nav = useNavigate()
    const [filter, setFilter] = useState(false)
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const {authState} = useContext(AuthContext)
    const {filterState,setFilterState,trips} = useContext(FilterContext)
    
    function check_auth(){
        
        if(authState.isAuthenticated != true){
            return nav('/signin')
        }
    }
    
    useEffect(()=>{
        setData(trips)  
    },[trips])

    // 'Authorization' : `Bearer ${authState.access}`
      
    const filterFuntion = (f)=>{
        f.preventDefault()
        
        setLoading(true)
        setFilterState({
            title:f.target[0].value,
            from:f.target[1].value,
            to:f.target[2].value,
            trip_for:f.target[3].value,
            date:f.target[4].value
            })
            setLoading(false)
        
        }
      

    const res = data.reverse().map((trip)=> <Traveler key={trip.id} vis={true} trip_for={trip.trip_for} title={trip.title} name={trip.traveler.name} profile={trip.traveler.profile} from={trip.from_var} to={trip.to_var} date={trip.date} time={trip.remaining_time} />)

        // const res = ''
        

    return (

    <div onLoad={check_auth} className=''>
        <Header tra={true}/>
        <div className='grid md:grid-cols-3 gap-2 max-w-[1030px] p-1 mx-auto border-0 border-black'>
        {/* filter */}
        <div className='hidden md:block p-3 m-3 shadow-sm rounded-md shadow-gray-500'>
        <h1 className='text-center m-2 text-lg font-semibold'>Filters</h1>
        
        <form onSubmit={filterFuntion}>
        <label htmlFor='title' className='m-4 font-medium'>Title</label><br/>
            <input type='text' id='title' className='m-3 p-1 w-64 border-0 outline-none h-7  border-b-2 bg-white border-sky-400'/><br/>

            <label htmlFor='from' className='m-4 font-medium'>From</label><br/>
            <input type='text' id='from' className='m-3 p-1 border-0 outline-none w-64 h-7 border-b-2 bg-white border-sky-400'/><br/>
        <label htmlFor='to' className='m-4 font-medium'>To</label><br/>
        <input type='text' id='to' className='m-3 p-1 border-0 outline-none w-64 h-7 border-b-2 bg-white border-sky-400'/><br/>

        <label htmlFor='for' className='m-2 font-medium'>Trip For</label><br/>
        <select id='for' className='m-3 p-1 border-0 outline-none border-b-2 w-64 h-7 bg-white border-sky-400'>
                <option value={'all'}>All</option>
                <option value={'education'} >Education</option>
                <option  value={'tourism'}>Tourism</option>
        </select><br/>

        <label htmlFor='date' className='m-2 font-medium'>Date</label><br/>
            <input type='date' id='date' required className='m-3 p-1 border-0 h-7 w-44 outline-none border-b-2 bg-white border-sky-400'/> and after

        <input type={'submit'} value={'Filter'} className='border-2 p-3 float-right py-1 text-white font-bold rounded-md m-2 bg-sky-400 border-gray-400' />
            </form>

        </div>
        <div className='col-span-2 p-1 pb-0'>
            <div className='flex justify-around'>
        <h1 className='text-center m-2 text-lg font-semibold'>{trips.length} total Trips</h1>
        <h1 onClick={()=>setFilter(!filter)} className='md:hidden text-center m-2 mt-3 text-sm text-sky-400 font-semibold'>Filters</h1>

            </div>
        <div className='tra flex flex-col overflow-y-scroll h-[535px]'>
        
        {/* ad */}
        <div className='shadow-sm m-1 p-3 ease-in-out duration-700 shadow-gray-500 rounded-md'>
        <div className='flex items-center'>
        <img src={explore} className='w-20'/>
        <p className='p-1 text-center text-yellow-0 text-sm'>"Discover our collection of visited places across different countries! From stunning beaches to breathtaking mountains, we've got it all. Explore our curated list and get inspired for your next adventure."</p>
        </div>
        <button onClick={()=>nav('/explore')} className='border-2 p-3 m-1 float-right py-1 text-white font-bold rounded-md bg-yellow-400 border-gray-400'>Explore</button>
        </div>

        {res}
        </div>
        </div>
        
        </div>

        <div className={filter ? 'md:hidden fixed bg-white w-full h-full top-0 text-md p-5 left-0' : 'hidden md:hidden fixed bg-white w-full h-full top-0 text-lg p-5 left-0'}>
        <h1 className='text-center m-2 text-lg text-sky-400 font-semibold'>Filters</h1>

        <form onSubmit={filterFuntion}>
        <label htmlFor='title' className='m-4 font-medium'>Title</label><br/>
            <input type='text' id='title' className='m-3 p-1 border-0 w-80 outline-none h-5  border-b-2 bg-white border-sky-400'/><br/>

        <label htmlFor='from' className='m-4 font-medium'>From</label><br/>
            <input type='text' id='from' className='m-3 p-1 border-0 outline-none  border-b-2 bg-white border-sky-400'/><br/>

        <label htmlFor='to' className='m-4 font-medium'>To</label><br/>
        <input type='text' id='from' className='m-3 p-1 border-0 outline-none  border-b-2 bg-white border-sky-400'/><br/>
        
        <label htmlFor='to' className='m-4 font-medium'>Type</label><br/>
        <select id='to' className='m-3 p-1 border-0 outline-none border-b-2 bg-white border-sky-400'>
                <option value={'all'}>All</option>
                <option value={'education'} >Education</option>
                <option  value={'tourism'}>Tourism</option>
            </select>
            <br/>

        <label htmlFor='date' className='m-4 font-medium'>Date</label><br/>
            <input type='date' id='date' required className='m-3 p-1 border-0 outline-none h-5  border-b-2 bg-white border-sky-400'/> and after
        <br></br>
        <input onClick={()=>setFilter(!filter)} type={'submit'} value={'Filter'} className='border-2 p-3 float-right py-1 text-white font-bold rounded-md m-2 bg-sky-400 border-gray-400' />
        <button onClick={()=>setFilter(!filter)} className='border-2 p-3 float-right py-1 rounded-md m-2 font-bold border-sky-400'>Cancel</button>
        </form>
        <br></br>
        </div>
    {loading && <Loading/>}
    </div>
  )
}

export default Travelers