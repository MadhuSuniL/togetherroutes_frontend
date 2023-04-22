import React, { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
export const FilterContext = createContext()

export const FilterProvider = ({children}) => {
    // const domain = 'http://localhost:8000/'
    const domain = 'https://travelmates.pythonanywhere.com/'
    
    const {authState} = useContext(AuthContext)
    const [filterState, setFilterState] = useState({
        title:'',
        from:'',
        to:'',
        trip_for:'all',
        date:'',
    })
    const [trips,setTrips] = useState([])

    const Api = async () =>{
        // alert(localStorage.getItem('access'))
        const response = await fetch(`${domain}trips/trip_filter`,{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('access')
            },
            method:'POST',
            body:JSON.stringify(filterState)
        })

        const data = await response.json()
        setTrips(data)

    }

    useEffect(()=> {
        Api()
    },[filterState])

    return (
        <FilterContext.Provider value={{filterState,setFilterState,trips}}>
            {children}
        </FilterContext.Provider>
        )
}
