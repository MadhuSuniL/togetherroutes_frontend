import React, { useState ,useEffect, useContext, useRef} from 'react'
import Loading from '../Loading'
import logo from '../assests/plane.png'
import { AuthContext } from '../contexts/AuthContext'



const Signin = () => {
    
    // context states
    const { login } = useContext(AuthContext)

    //states 
    const [loading , setLoading] = useState(false)
    const [email,setEmail] = useState('')
    const [rotp,setROtp] = useState(123456)
    const [target,setTarget] = useState(true)
    
    



  

    //functions 

    const handleForm = async(f)=>{
        f.preventDefault()
        setLoading(true)
        setEmail(f.target[0].value)
        //otp call 
        setTarget(false)
        setTimeout(function(){
            setLoading(false)
        },500)
    }

    const handleForm2 = async(f)=>{
        f.preventDefault()
        setLoading(true)
        
        var otp = ''
        for(let num in f.target){
            if(num <= 5){
                otp = otp + String(f.target[num].value)
            }
            else{
                break
            }
        }
        if(Number(otp) == rotp){
            const res = await login(email)
            if (res == true){
                //.....
                alert('login')
            }

            setTimeout(function(){
                setLoading(false)
            },500)
            
        }
        else{
            document.getElementById(f.target[0].id).style.color='red'
            document.getElementById(f.target[1].id).style.color='red'
            document.getElementById(f.target[2].id).style.color='red'
            document.getElementById(f.target[3].id).style.color='red'
            document.getElementById(f.target[4].id).style.color='red'
            document.getElementById(f.target[5].id).style.color='red'
            document.getElementById('otp-error').style.display='block'
            setTimeout(function(){
                setLoading(false)
            },200)
            return false
        }
        setTimeout(function(){
            setLoading(false)
        },500)
    }









    const form = <form onSubmit={handleForm} className='border-2 border-sky-200 shadow-lg shadow-sky-300 rounded-lg p-5 px-3 md:mr-20 mt-1'>
        <center>
            <label htmlFor='emails' className='m-2 font-medium'>Enter Your Email - (for otp) </label><br/>
            <input type='email' id='emails' required className='m-3 p-1 w-72 border-0 outline-none  border-b-2 bg-white border-sky-400'/>

            
            <input type='submit' className='bg-sky-400 cursor-pointer text-white border-2 border-sky-400 active:border-black hover:border-black active:scale-105 p-1 px-3 rounded-md'/>
        
        </center>
    </form>
    
    
    const form2 = <form onSubmit={handleForm2} className='border-2 border-sky-200 shadow-lg shadow-sky-300 md:w-96 rounded-lg p-5 px-3 md:mr-20 mt-1'>
    <center>
    <label htmlFor='numbers_1' className='m-2 mb-1 font-medium'>Enter OTP <br/><br/><span className='text-[12px]'>An OTP has been sent to <span class='text-sky-400 text-sm'>bagammagarimadhu@gmail</span> <br/>"The OTP will expire after 10 minutes."</span> </label><br/>
            <input type='number' onChange={(e)=>{
                e.target.style.color='black'
                if (e.target.value == ''){
                document.getElementById(e.target.id).value = null
                }
                else{
                    document.getElementById(e.target.id).value = Number(String(e.target.value).slice(0,1))
                }
                document.getElementById('numbers_2').focus()
                document.getElementById('otp-error').style.display='hidden'
                }} id='numbers_1' required className='w-7 m-3  text-xl mx-1 p-1 border-0 outline-none border-b-2 bg-white border-sky-400'/>
            
            <input type='number' onChange={(e)=>{
                e.target.style.color='black'
                if (e.target.value == ''){
                document.getElementById(e.target.id).value = null
                }
                else{
                    document.getElementById(e.target.id).value = Number(String(e.target.value).slice(0,1))
                }
                document.getElementById('numbers_3').focus()
                document.getElementById('otp-error').style.display='hidden'
                }} id='numbers_2'  required className='w-7 m-3 text-xl mx-1 p-1 border-0 outline-none border-b-2 bg-white border-sky-400'/>
            
            <input type='number' onChange={(e)=>{
                e.target.style.color='black'
                if (e.target.value == ''){
                document.getElementById(e.target.id).value = null
                }
                else{
                    document.getElementById(e.target.id).value = Number(String(e.target.value).slice(0,1))
                }
                document.getElementById('numbers_4').focus()
                document.getElementById('otp-error').style.display='hidden'
                }} id='numbers_3'  required className='w-7 m-3 text-xl mx-1 p-1 border-0 outline-none border-b-2 bg-white border-sky-400'/>
            
            <input type='number' onChange={(e)=>{
                e.target.style.color='black'
                if (e.target.value == ''){
                document.getElementById(e.target.id).value = null
                }
                else{
                    document.getElementById(e.target.id).value = Number(String(e.target.value).slice(0,1))
                }
                document.getElementById('numbers_5').focus()
                document.getElementById('otp-error').style.display='hidden'
                }} id='numbers_4'  required className='w-7 m-3 text-xl mx-1 p-1 border-0 outline-none border-b-2 bg-white border-sky-400'/>
            
            <input type='number' onChange={(e)=>{
                e.target.style.color='black'
                if (e.target.value == ''){
                document.getElementById(e.target.id).value = null
                }
                else{
                    document.getElementById(e.target.id).value = Number(String(e.target.value).slice(0,1))
                }
                document.getElementById('numbers_6').focus()
                document.getElementById('otp-error').style.display='hidden'
                }} id='numbers_5'  required className='w-7 m-3 text-xl mx-1 p-1 border-0 outline-none border-b-2 bg-white border-sky-400'/>
            
            <input type='number' onChange={(e)=>{
                e.target.style.color='black'
                if (e.target.value == ''){
                document.getElementById(e.target.id).value = null
                }
                else{
                    document.getElementById(e.target.id).value = Number(String(e.target.value).slice(0,1))
                }
                document.getElementById('otp-error').style.display='hidden'
                }} id='numbers_6'  required className='w-7 m-3 text-xl mx-1 p-1 border-0 outline-none border-b-2 bg-white border-sky-400'/>
            
            <br></br><span class='text-red-400 hidden m-0 text-sm' id="otp-error">Invalid OTP!</span>
            <br></br>
            <br></br>
            
            <input type='submit' className='bg-sky-400 cursor-pointer text-white border-2 border-sky-400 active:border-black hover:border-black active:scale-105 p-1 px-3 rounded-md'/>
    </center>
        
</form>
  
  
  



    return (
    <div className='md:flex justify-around'>
        <div>
        <div className='flex justify-center text-3xl md:text-4xl text-sky-400 font font-semibold m-5 mb-2 mt-3 text-center md:mb-5 md:mt-64'>
            <span> <img src={logo} className='w-7 md:w-8 mt-1 md:mt-2 mx-2'/></span><h1 className=''>TravelMates<span className='text-yellow-400'>.com</span></h1>
        </div>
        <p className='text-yellow-400 px-3 text-center text-sm md:text-md md:pr-32 font-semibold md:ml-20'>"Don't want to travel alone? Our website matches you with a compatible travel partner who shares your itinerary. Say goodbye to lonely trips and hello to new friendships and unforgettable experiences."</p>
        
        </div>
        <div className='px-5'>
        
        
        {target ? <span><h1 className='text-xl text-sky-400 m-5 mb-2 mt-4 text-center md:text-left md:mt-48 font-semibold'>Create Profile 1/2</h1> {form}</span> : <span><h1 className='text-xl text-sky-400 m-5 mb-2 mt-4 text-center md:text-left md:mt-32 font-semibold'>Create Profile 2/2</h1> {form2}</span> }

        {loading && <Loading/>}
        </div>
    </div>
  )
}

export default Signin