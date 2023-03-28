import React from 'react'
import MyTrips from './MyTrips/MyTrips';
import Signin from './Authpage/Signin';
import Signup from './Authpage/Signup'
import { AuthProvider } from './contexts/AuthContext';
import Header from './Header';
import Travelers from './Homepage/Travelers';
import Requests from './requests/Requests';
import Messages from './Messages/Messages';

const App = () => {
  
  
  
  
  return (
    <AuthProvider>
        {/* <Signin/> */}
        {/* <Signup/> */}
        {/* <Header/> */}
        {/* <Travelers/> */}
        {/* <MyTrips/> */}
        {/* <Requests/> */}
        <Messages/>
    </AuthProvider>
  )
}

export default App