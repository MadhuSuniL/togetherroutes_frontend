import React, {useState}  from 'react'
import Traveler from '../Homepage/components/Traveler'
import Header from '../Header'
import tab from '../assests/tab.png'




const MyTrips = () => {
  // states
  const [filter, setFilter] = useState(false)
  
  
  return (


  <div className=''>
      <Header/>
      <div className='grid md:grid-cols-3 max-w-[1030px] p-1 mx-auto border-0 border-black'>
      {/* filter */}
      <div className='hidden md:block p-3 m-3 shadow-sm rounded-md shadow-gray-500'>
      <h1 className='text-center text-sky m-2 text-lg font-semibold'>Post Trip</h1>
        <form>
      <label htmlFor='title' className='m-4 font-medium'>Title</label><br/>
          <input type='text' id='title' className='m-3 p-1 w-64 border-0 outline-none h-7  border-b-2 bg-white border-sky-400'/><br/>

          <label htmlFor='from' className='m-4 font-medium'>From</label><br/>
          <input type='text' id='from' className='m-3 p-1 border-0 w-64 outline-none h-7  border-b-2 bg-white border-sky-400'/><br/>

      <label htmlFor='to' className='m-4 font-medium'>To</label><br/>
      <input type='text' id='from' className='m-3 p-1 border-0 w-64 outline-none h-7 border-b-2 bg-white border-sky-400'/><br/>

      <label htmlFor='to' className='m-4 font-medium'>Trip For</label><br/>
      <select id='to' className='m-3 p-1 border-0 outline-none w-64 border-b-2 bg-white border-sky-400'>
              <option>Education</option>
              <option>Tourism</option>
          </select><br/>

      <label htmlFor='date' className='m-4 font-medium'>Date</label><br/>
          <input type='date' id='date' required className='m-3 p-1 w-64 border-0 outline-none h-7  border-b-2 bg-white border-sky-400'/>
<br/>
      <input type='submit' value={'Post'} className='border-2 p-3 float-right py-1 text-white font-bold rounded-md m-2 bg-sky-400 border-gray-400'/>  
      <input type='reset' value={'Clear'} className='border-2 p-3 float-right py-1 text-w font-bold rounded-md m-2 bg-sky-0400 border-gray-400'/>  
      </form>
      </div>
      <div className='col-span-2 p-1 pb-0'>
          <div className='flex justify-around'>
      <h1 className='text-center m-2 text-lg font-semibold'>My Trips (12)</h1>
      <h1 onClick={()=>setFilter(!filter)} className='md:hidden border-0 text-center m-2 mt-1 text-md text-white py-2 px-3 rounded-md font-semibold bg-sky-400 flex'><img src={tab} className='w-6 mr-2'/> Post Trip</h1>
          </div>
      <div className='tra flex flex-col overflow-y-scroll h-[535px]'>
      <Traveler vis={false}/>
      <Traveler vis={false}/>
      <Traveler vis={false}/>
      <Traveler vis={false}/>
      <Traveler vis={false}/>
      <Traveler vis={false}/>
      <Traveler vis={false}/>
      </div>
      </div>
      
      </div>

      <div className={filter ? 'md:hidden fixed bg-white w-full h-full top-0 text-md p-5 left-0' : 'hidden md:hidden fixed bg-white w-full h-full top-0 text-lg p-5 left-0'}>
      <h1 className='text-center m-2 text-lg text-sky-400 font-semibold'>Filters</h1>
      <form>
      <label htmlFor='title' className='m-4 font-medium'>Title</label><br/>
          <input type='text' required id='title' className='m-3 p-1 border-0 w-80 outline-none h-5  border-b-2 bg-white border-sky-400'/><br/>

      <label htmlFor='from' className='m-4 font-medium'>From</label><br/>
          <input type='text' required id='from' className='m-3 p-1 border-0 w-80 outline-none  border-b-2 bg-white border-sky-400'/><br/>

      <label htmlFor='to' className='m-4 font-medium'>To</label><br/>
      <input type='text' id='from' required className='m-3 p-1 border-0 w-80 outline-none  border-b-2 bg-white border-sky-400'/><br/>
      
      <label htmlFor='to' className='m-4 font-medium'>Type</label><br/>
      <select id='to' required className='m-3 p-1 border-0 outline-none w-80 border-b-2 bg-white border-sky-400'>
              <option>Education</option>
              <option>Tourism</option>
          </select>
          <br/>

      <label htmlFor='date' className='m-4 font-medium'>Date</label><br/>
          <input type='date' id='date' required className='m-3 p-1 w-44 border-0 outline-none h-5  border-b-2 bg-white border-sky-400'/> and after
      <br></br>
      <input type='submit' value={'Post'} className='border-2 p-3 float-right py-1 text-white font-bold rounded-md m-2 bg-sky-400 border-gray-400'/>
      <input type='reset' value={'Cancel'} onClick={()=>setFilter(!filter)} className='border-2 p-3 float-right py-1 rounded-md m-2 font-bold border-sky-400'/>
      </form>
      </div>
  
  </div>
)
}


export default MyTrips