import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import user from '../assests/g.png'
import pen from '../assests/navbar/pen.png'
import { AuthContext } from '../contexts/AuthContext'
import Loading from '../Loading'
import Toast from '../ToastComponent'


const Myprofile = () => {
    const nav = useNavigate()
    const {authState} = useContext(AuthContext)

    const [loading , setLoading] = useState(false)
    const [name,setName] = useState('')
    const [mates,setMates] = useState(0)
    const [number,setNumber] = useState('')
    const [fans,setFans] = useState(0)
    const [trips,setTrips] = useState(0)
    const [target,setTarget] = useState(true)
    const [profileImage, setProfileImage] = useState('https://tse4.mm.bing.net/th?id=OIP.zagjQ5boIhl3BrdnhBeGqQHaHu&pid=Api&P=0')
    const [message,setMessage] = ('Name was successfully Updated!')


    async function Api(){
        setLoading(true)
        const response = await fetch(authState.domain+'travelers/details/',{
            headers:{
          'Authorization':'Bearer '+localStorage.getItem('access')
        //   'Authorization':'Bearer '+authState.access
            }
        })
        const res_data = await response.json()
        setName(res_data.name)
        setProfileImage(authState.domain+res_data.profile)
        setNumber(Number(res_data.phone_number))
        setMates(res_data.mates)
        setFans(res_data.fans)
        setTrips(res_data.trips)
        setLoading(false)
    }


    useEffect(()=>{
        Api()
    },[])



    async function UpdateImage(e){
        setLoading(true)
        var imgfile =  document.getElementById('profiles2').files[0]
        const form = new FormData()
        form.append('profile',imgfile)
        const response = await fetch(authState.domain+'travelers/update_profile',{
            headers:{
                'Authorization':'Bearer '+authState.access
            },
            method:'PUT',
            body:form
        })
        const res_data = await response.json()
        setLoading(false)
        alert('Profile was successfully Updated!')
        

    }

    async function UpdateNumber(){
        setLoading(true)
        const response = await fetch(authState.domain+'travelers/update_number',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+authState.access

            },
            body:JSON.stringify({
                'number':String(number)
            })
        })
        const res_data = await response.json()
        setLoading(false)
        alert('Phone Number was successfully Updated!')


    }

    async function UpdateName(){
        setLoading(true)
        const response = await fetch(authState.domain+'travelers/update_name',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+authState.access

            },
            body:JSON.stringify({
                'name':name
            })
        })
        const res_data = await response.json()
        setLoading(false)
        alert('Name was successfully Updated!')

    }


    function handleImageChange(event) {
        const imageFile = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = () => {
          setProfileImage(reader.result);
          document.getElementById('imglabel').innerText = imageFile.name
        };
      }


    //   const {authState} = useContext(AuthContext)
      function check_auth(){
          if(authState.isAuthenticated != true){
              return nav('/signin')
          }
      }

    return (


    <div onLoad={check_auth} className=''>
    <Header pro={true}/>
      <div className='flex max-w-[702px] mx-auto justify-around'>
    <h1 className='text-center m-2 text-lg font-semibold'>My Profile</h1>
    </div>
    <div className='tra max-w-[702px] mx-auto border-0 py-3 border-black flex flex-col overflow-y-scroll h-[565px] md:h-[545px]'>
        
        <div className='m-2 p-2 flex justify-around items-center rounded-md shadow-sm shadow-gray-400'>
            <div className='flex flex-col items-center'>
            <img src={profileImage} className='w-14 md:w-44 m-1 mb-0 rounded-full border-2 border-sky-400'/>
            <h1 className='text-lg md:text-2xl text-sky-400  font-bold'>{name}</h1>
            </div>
            
            <div className='flex flex-col items-center'>
            <h1 className='text-lg text-gray-800 font-semibold'>Trips</h1>
            <h1 className='text-lg text-gray-400 font-bold'>{trips}</h1>
            </div>
            
            <div className='flex flex-col items-center'>
            <h1 className='text-lg text-gray-800 font-semibold'>Mates</h1>
            <h1 className='text-lg text-gray-400 font-bold'>{mates}</h1>
            </div>

            <div className='flex flex-col items-center'>
            <h1 className='text-lg text-gray-800 font-semibold'>Fans</h1>
            <h1 className='text-lg text-gray-400 font-bold'>{fans}</h1>
            </div>

        </div>

        {/* edit */}
    <h1 className='m-4 mx-10 text-lg font-semibold flex items-center'><img src={pen} className='w-7 mr-3'/> Edit Profile</h1>
    <div className='p-3 shadow-sm shadow-gray-400 m-2 mt-3 '>

    <input type='file' onChange={(e)=>{
        handleImageChange(e)
        // setProfileImage(e.target.value)
        // alert(e.target.value)
        UpdateImage(e)
    }} id='profiles2' className='m-0 opacity-0 h-0 text-sky-400 mb-1 p-1 w-72 outline-none border-2 rounded-md bg-white border-sky-400'/>
            {profileImage ? <img src={profileImage} id='img_file' className='rounded-full mt-[-4%] w-14' alt="Profile" /> :<img src={profileImage} alt="Profile" />}
            <label htmlFor='profiles2' id='imglabel' className='m-2 font-medium cursor-pointer'>Profile</label><br/>
            <br></br>
            <label htmlFor='usernames' className='m-2 font-medium'>Name</label><br/>
            <input type='text' id='usernames' value={name} onChange={(e)=>{
                setName(e.target.value)
                
            }} required className='m-3 p-1 w-72 border-0 outline-none  border-b-2 bg-white border-sky-400'/>
            <button onClick={UpdateName} className='border-2 p-3 py-1 text-white font-bold rounded-md m-2 bg-sky-400 border-gray-400'>Update</button>
        <br/>
            <label htmlFor='numbers' className='m-2 font-medium'>Ph Number</label><br/>
            <input type='number' value={Number(number)} onChange={(e)=>{
                e.target.style.color='black'
                setNumber(e.target.value)
                document.getElementById('number-error').style.display='hidden'
                }} id='numbers' required className='m-3 p-1 w-72 border-0 outline-none border-b-2 bg-white border-sky-400'/>
            <button onClick={UpdateNumber} className='border-2 p-3 py-1 text-white font-bold rounded-md m-2 bg-sky-400 border-gray-400'>Update</button>
            <br></br><span class='text-red-400 hidden m-0 text-[10px]' id="number-error">Invalid number</span>

    </div>

    </div>
    {loading && <Loading/>}
</div>
)
}



export default Myprofile