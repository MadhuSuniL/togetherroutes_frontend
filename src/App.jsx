import React, {useContext} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyTrips from './MyTrips/MyTrips';
import Signin from './Authpage/Signin';
import Signup from './Authpage/Signup'
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import Header from './Header';
import Travelers from './Homepage/Travelers';
import Requests from './requests/Requests';
import Messages from './Messages/Messages';
import Myprofile from './Profiles/Myprofile';
import UserProfile from './Profiles/UserProfile';

const App = () => {

  const userRoutes =<BrowserRouter>
  <Routes>
  <Route exact path='/signin' element={<Signin/>}/>
  <Route exact path='/signup' element={<Signup/>}/>
    <Route exact path='/' element={<Travelers/>}/>
    <Route exact path='/mytrips' element={<MyTrips/>}/>
    <Route exact path='/requests' element={<Requests/>}/>
    <Route exact path='/chat' element={<Messages/>}/>
    <Route exact path='/myprofile' element={<Myprofile/>}/>
    <Route exact path='/*' element={<Travelers/>}/>
  </Routes>
  </BrowserRouter>

  
  
  
  return (
    <AuthProvider>
      {userRoutes}
    </AuthProvider>
  )
}

export default App