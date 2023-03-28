import React, { useState } from 'react'
import logo from './assests/plane.png'
import travel from './assests/navbar/tra2.png'
import travel2 from './assests/navbar/tra.png'
import profile from './assests/navbar/profile2.png'
import profile2 from './assests/navbar/profile.png'
import my from './assests/navbar/my2.png'
import my2 from './assests/navbar/my.png'
import msg from './assests/navbar/msg2.png'
import msg2 from './assests/navbar/msg.png'
import noti from './assests/navbar/noti.png'
import noti2 from './assests/navbar/noti2.png'
const Header = () => {
  
    const [travelIcon , setTravelIcon] = useState(travel)
    const [myIcon , setMyIcon] = useState(my)
    const [profileIcon , setProfileIcon] = useState(profile)
    const [notiIcon , setNotiIcon] = useState(noti)
    const [msgIcon , setMsgIcon] = useState(msg)
  
  
    function travel_click(){
     setTravelIcon(travel2)
     setMyIcon(my)
     setProfileIcon(profile)
     setNotiIcon(noti) 
     setMsgIcon(msg)  
    }
  
  
    function my_click(){
     setTravelIcon(travel)
     setMyIcon(my2)
     setProfileIcon(profile)
     setNotiIcon(noti) 
     setMsgIcon(msg)  

    }
  
  
    function profile_click(){
     setTravelIcon(travel)
     setMyIcon(my)
     setProfileIcon(profile2)
     setNotiIcon(noti)   
     setMsgIcon(msg)  

    }
  
  
    function msg_click(){
     setTravelIcon(travel)
     setMyIcon(my)
     setProfileIcon(profile)
     setNotiIcon(noti2)   
     setMsgIcon(msg)  

    }

    function noti_click(){
     setTravelIcon(travel)
     setMyIcon(my)
     setProfileIcon(profile)
     setNotiIcon(noti)   
     setMsgIcon(msg2)  

    }
  


  
    return (
    <div>
        {/* for large */}

    <div className='hidden md:flex justify-around shadow-md mb-10 shadow-gray-300'>
        <div className='flex justify-center text-xl md:text-2xl text-sky-400 font font-semibold m-5 mb-2 mt-3 text-center md:mb-5'>
            <span> <img src={logo} className='w-4 md:w-5 mt-1  md:mt-2 mx-2'/></span><h1 className='mr-20'>TravelMates<span className='text-yellow-400'>.com</span></h1>
        </div>
        <div className='flex font-semibold'>
        <h1 onClick={travel_click} className='m-3 mx-4'><img src={travelIcon} className='w-6 mx-auto mb-1'/> Travelers</h1>
            <h1 onClick={my_click} className='m-3 mx-4'><img src={myIcon} className='w-6 mx-auto mb-1'/> My&nbsp;Trips</h1>
            <h1 onClick={noti_click} className='m-3 mx-'><img src={msgIcon} className='w-6 mx-auto mb-1'/> Requests</h1>
            <h1 onClick={msg_click} className='m-3 mx-4'><img src={notiIcon} className='w-6 mx-auto mb-1'/> Messages</h1>
            <h1 onClick={profile_click} className='m-3 mx-4'><img src={profileIcon} className='w-6 mx-auto mb-1'/> Profile</h1>
        </div>
    </div>
    
    
    {/* for mobile */}

    <div className='flex md:hidden justify-center text-xl md:text-2xl text-sky-400 font font-semibold m-5 mb-2 mt-3 text-center md:mb-5'>
            <span> <img src={logo} className='w-5 md:w-5 mt-[10%] md:mt-2 mx-2'/></span><h1 className=''>TravelMates<span className='text-yellow-400'>.com</span></h1>
        </div>
    <div className='fixed md:hidden  bg-white top-[90.5%] w-full'>
        <div className='flex text-[12px] border-t-2 border-gray-0 shadow-xl shadow-gray-60 w-full'>
            <h1 onClick={travel_click} className='m-3 mx-4'><img src={travelIcon} className='w-6 mx-auto mb-1'/> Travelers</h1>
            <h1 onClick={my_click} className='m-3 mx-4'><img src={myIcon} className='w-6 mx-auto mb-1'/> My&nbsp;Trips</h1>
            <h1 onClick={noti_click} className='m-3 mx-'><img src={msgIcon} className='w-6 mx-auto mb-1'/> Requests</h1>
            <h1 onClick={msg_click} className='m-3 mx-4'><img src={notiIcon} className='w-6 mx-auto mb-1'/> Messages</h1>
            <h1 onClick={profile_click} className='m-3 mx-4'><img src={profileIcon} className='w-6 mx-auto mb-1'/> Profile</h1>
        </div>
    </div>
    
    </div>
  )
}

export default Header