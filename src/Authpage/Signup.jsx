import React, { useState ,useEffect, useContext, useRef} from 'react'
import Loading from '../Loading'
import logo from '../assests/plane.png'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'



const Signup = () => {
    
    // context states
    const { login,register,otp_verification, authState } = useContext(AuthContext)
    const nav = useNavigate()

    //states 
    const [loading , setLoading] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [number,setNumber] = useState('')
    const [language,setLanguage] = useState('')
    const [rotp,setROtp] = useState(0)
    const [target,setTarget] = useState(true)
    // const [img,setImg] = useState(null)
    const img = useRef(null);
    const [profileImage, setProfileImage] = useState('https://tse4.mm.bing.net/th?id=OIP.zagjQ5boIhl3BrdnhBeGqQHaHu&pid=Api&P=0')

    //error states 
    const [number_error , setNumber_Error] = useState(true)


    function check_auth() {
        if(authState.isAuthenticated == true){
            return nav('/')
        }
    }


  

    //functions 

    const handleForm = async(f)=>{
        f.preventDefault()
        setLoading(true)
        const profilev = document.getElementById('profiles').files[0]
        const namev = f.target[1].value
        const emailv = f.target[2].value
        setEmail(emailv)
        setROtp(123456)
        if(String(f.target[3].value).length === 10){
            const numberv = f.target[2].value
            document.getElementById('number-error').style.display='none'
            const languagev = f.target[4].value
            const otp = 123456

            const form = new FormData()
            form.append('profile',profilev)
            form.append('email',emailv)
            form.append('name',namev)
            form.append('number',String(numberv))
            form.append('otp',otp)
            form.append('language',languagev)

            const res = await register(form)
            if(res == true){
                setTarget(false)
            }
            setTimeout(function(){
                setLoading(false)
            },300)
        }
        else{
            document.getElementById(f.target[2].id).style.color='red'
            document.getElementById('number-error').style.display='block'
            document.getElementById(f.target[2].id).focus()
            setTimeout(function(){
                setLoading(false)
            },300)
            return false
        }
        
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
            const res = await otp_verification(email)
            if (res == true){
                //.....
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


    function handleImageChange(event) {
        const imageFile = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = () => {
          setProfileImage(reader.result);
          document.getElementById('imglabel').innerText = imageFile.name
        };
      }
      







    const form = <form onSubmit={handleForm} className='border-2 border-sky-200 shadow-lg shadow-sky-300 rounded-lg p-5 px-3 md:mr-20 mt-1'>
        <center>
        <input type='file' onChange={handleImageChange} id='profiles' className='m-0 opacity-0 h-0 text-sky-400 mb-1 p-1 w-72 outline-none border-2 rounded-md bg-white border-sky-400'/>
            {profileImage ? <img src={profileImage} ref={img} className='rounded-full mt-[-4%] w-14' alt="Profile" /> :<img src={profileImage} alt="Profile" />}
            <label htmlFor='profiles' id='imglabel' className='m-2 font-medium'>Profile</label><br/>
            <br></br>
            
            <label htmlFor='usernames' className='m-2 font-medium'>Enter Your name</label><br/>
            <input type='text' id='usernames' required className='m-3 p-1 w-72 border-0 outline-none  border-b-2 bg-white border-sky-400'/>
            
            <label htmlFor='emails' className='m-2 font-medium'>Enter Your Email - (for otp) </label><br/>
            <input type='email' id='emails' required className='m-3 p-1 w-72 border-0 outline-none  border-b-2 bg-white border-sky-400'/>

            <label htmlFor='numbers' className='m-2 font-medium'>Enter Your Whatsapp Number</label><br/>
            <input type='number' onChange={(e)=>{
                e.target.style.color='black'
                document.getElementById('number-error').style.display='hidden'
                }} id='numbers' required className='m-3 p-1 w-72 border-0 outline-none border-b-2 bg-white border-sky-400'/>
            <br></br><span class='text-red-400 hidden m-0 text-[10px]' id="number-error">Invalid number</span>

            {/* <div class="bg-sky-blue-100 p-4">
              <h1 class="font-medium text-sky-blue-700 mb-3">Languages Knows</h1>
  
        <div class="grid grid-cols-3 sm:grid-cols-3 gap-4">
            
            <div class="flex items-center">
            <input type="checkbox" id="hindi" name="languages" value="Hindi" class="mr-2 text-sky-blue-600"/>
            <label for="hindi" class="text-sky-blue-800">Hindi</label>
            </div>

            <div class="flex items-center">
            <input type="checkbox" id="hindi" name="languages" value="English" class="mr-2 text-sky-blue-600"/>
            <label for="hindi" class="text-sky-blue-800">English</label>
            </div>
            
            <div class="flex items-center">
            <input type="checkbox" id="nepali" name="languages" value="Nepali" class="mr-2 text-sky-blue-600"/>
            <label for="nepali" class="text-sky-blue-800">Nepali</label>
            </div>
            
            <div class="flex items-center">
            <input type="checkbox" id="gujarathi" name="languages" value="Gujarathi" class="mr-2 text-sky-blue-600"/>
            <label for="gujarathi" class="text-sky-blue-800">Gujarathi</label>
            </div>
            
            <div class="flex items-center">
            <input type="checkbox" id="telugu" name="languages" value="Telugu" class="mr-2 text-sky-blue-600"/>
            <label for="telugu" class="text-sky-blue-800">Telugu</label>
            </div>
            
            <div class="flex items-center">
            <input type="checkbox" id="tamil" name="languages" value="Tamil" class="mr-2 text-sky-blue-600"/>
            <label for="tamil" class="text-sky-blue-800">Tamil</label>
            </div>
            
            <div class="flex items-center">
            <input type="checkbox" id="malayalam" name="languages" value="Malayalam" class="mr-2 text-sky-blue-600"/>
            <label for="malayalam" class="text-sky-blue-800">Malayalam</label>
            </div>
            
            <div class="flex items-center">
            <input type="checkbox" id="kannada" name="languages" value="Kannada" class="mr-2 text-sky-blue-600"/>
            <label for="kannada" class="text-sky-blue-800">Kannada</label>
            </div>
            
            <div class="flex items-center">
            <input type="checkbox" id="urdu" name="languages" value="Urdu" class="mr-2 text-sky-blue-600"/>
            <label for="urdu" class="text-sky-blue-800">Urdu</label>
            </div>
            
            <div class="flex items-center">
            <input type="checkbox" id="punjabi" name="languages" value="Punjabi" class="mr-2 text-sky-blue-600"/>
            <label for="punjabi" class="text-sky-blue-800">Punjabi</label>
            </div>
            
            <div class="flex items-center">
            <input type="checkbox" id="bengali" name="languages" value="Punjabi" class="mr-2 text-sky-blue-600"/>
            <label for="punjabi" class="text-sky-blue-800">Punjabi</label>
            </div>

    </div>
        <input type='submit' className='bg-sky-400 text-white border-2 float-right border-sky-400 active:border-black hover:border-black active:scale-105 p-1 px-3 rounded-md'/>
</div> */}
            <label htmlFor='languages' className='m-2 font-medium'>Select Mother Tounge</label><br/>
            <select id='languages' className='m-3 mb-0 p-1 w-72 outline-none border-2 rounded-md bg-white border-sky-400'>
            <option value="hindi">Hindi</option>
            <option value="telugu">Telugu</option>
            <option value="bengali">Bengali</option>
            <option value="marathi">Marathi</option>
            <option value="tamil">Tamil</option>
            <option value="urdu">Urdu</option>
            <option value="gujarati">Gujarati</option>
            <option value="punjabi">Punjabi</option>
            <option value="kannada">Kannada</option>
            <option value="malayalam">Malayalam</option>
            <option value="oriya">Oriya</option>
            <option value="assamese">Assamese</option>
            <option value="kashmiri">Kashmiri</option>
            <option value="sindhi">Sindhi</option>
            <option value="konkani">Konkani</option>
            <option value="manipuri">Manipuri</option>
            <option value="nepali">Nepali</option>
            </select>
            <br></br>
            <br></br>
            
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
                document.getElementById('numbers_2').focus()
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
    <div onLoad={check_auth} className='md:flex justify-around'>
        <div>
        <div className='flex justify-center text-3xl md:text-4xl text-sky-400 font font-semibold m-5 mb-2 mt-3 text-center md:mb-5 md:mt-64'>
            <span> <img src={logo} className='w-7 md:w-8 mt-1 md:mt-2 mx-2'/></span><h1 className=''>TravelMates<span className='text-yellow-400'>.com</span></h1>
        </div>
        <p className='text-yellow-400 px-3 text-center text-sm md:text-md md:pr-32 font-semibold md:ml-20'>"Don't want to travel alone? Our website matches you with a compatible travel partner who shares your itinerary. Say goodbye to lonely trips and hello to new friendships and unforgettable experiences."</p>
        
        </div>
        <div className='px-5'>
        
        
        {target ? <span><h1 className='text-xl text-sky-400 m-5 mb-2 mt-4 text-center md:text-left md:mt-12 font-semibold'>Create Profile 1/2</h1> {form}</span> : <span><h1 className='text-xl text-sky-400 m-5 mb-2 mt-4 text-center md:text-left md:mt-32 font-semibold'>Create Profile 2/2</h1> {form2}</span> }

        {loading && <Loading/>}
        </div>
    </div>
  )
}

export default Signup