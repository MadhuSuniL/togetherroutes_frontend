import React from 'react'
import Signin from './Authpage/Signin';
import Signup from './Authpage/Signup'
import { AuthProvider } from './contexts/AuthContext';
import Header from './Header';

const App = () => {
  
  
  
  
  return (
    <AuthProvider>
        {/* <Signin/> */}
        {/* <Signup/> */}
        <Header/>
    </AuthProvider>
  )
}

export default App