import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const domain = 'http://localhost:8000/'
    const [authState, setAuthState] = useState({
        isAthenticated : false,
        access:null,
        refesh:null,
    })


    const register = async (form) =>{
        
        const response = await fetch(`${domain}travelers/register`,{
            method: 'POST',
            body:form
        })
        const data = await response.json()
        if(response.status == 200){
            return true
        }
        return false
    }


    const otp_verification = async (email) =>{
        const response = await fetch(`${domain}travelers/otp_verify`,{
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
            },
            method:'POST',
            body:JSON.stringify({
                'email':email
            })
        })
        if(response.status == 200){
            const data = await response.json()
            localStorage.setItem('access',data.access)
            localStorage.setItem('refresh',data.refesh)
            setAuthState({
                isAthenticated : true,
                access:data.access,
                refesh:data.refesh,
            })
            return true
        }
    }


    const login = async (email) =>{
        const response = await fetch(`${domain}travelers/login`,{
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
            },
            method:'POST',
            body:JSON.stringify({
                'email':email
            })
        })
        if(response.status == 200){
            const data = await response.json()
            localStorage.setItem('access',data.access)
            localStorage.setItem('refresh',data.refesh)
            setAuthState({
                isAthenticated : true,
                access:data.access,
                refesh:data.refesh,
            })
            return true
        }
    }



    const logout = () =>{
        localStorage.setItem('access','')       
        localStorage.setItem('refresh','')
        setAuthState({
            isAthenticated : false,
            access:null,
            refesh:null,
        })       
    }


    return (
        <AuthContext.Provider value={{authState, login, logout, register, otp_verification}}>
            {children}
        </AuthContext.Provider>
        )
}

