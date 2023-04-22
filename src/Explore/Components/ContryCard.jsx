import React, { useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../../Loading'

const ContryCard = (p) => {


    const nav = useNavigate()
    const {authState} = useContext(AuthContext)
    const [data, setData] = useState({})
    const [id, setId] = useState(9)
    const [loading,setLoading] = useState(false)
    
    async function Api () {
        setLoading(true)
        const response = await fetch(`${authState.domain}explore/trips/${p.contry}`,{
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization':'Bearer '+authState.access

            },
            method:'GET'
        })
        const d = await response.json()
        setData(d)

        setInterval(function(){
          setId(Math.ceil(Math.random() * (d.length-2)))
        },10000)
        setLoading(false)

      }

    useEffect(() => {
        Api()
    }, [])

    return (
        <div onClick={()=>nav('/explore/'+p.contry)} className='m-2 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-sm p-2 pb-1 shadow-black'>
            <img className='rounded-md shadow-sm shadow-black' src={data[id]?.image} />
            <h1 className='text-xl text-center  m-1 text-sky-400 font-bold'>{data[id]?.contry}</h1>
        {loading && <Loading/>}
        </div>
    )
}

export default ContryCard
