import React, {  useEffect, useState } from 'react'
import Entries from './Entries'
import data1 from '../utils/data.json'
import { databases } from '../AppWriteConfig/config'
import './dashbord.css'
import { useNavigate } from 'react-router-dom'


function Dashbord() {
    const navigate=useNavigate()
  
    const[data,setData]=useState()
    async function getDetails(){
      const responce=await databases.listDocuments('66f5750e00245ea988f8','66f57633002f27844d5b')
      setData(responce.documents)
      
    } 
   
   

    useEffect(()=>{
     
        getDetails();
      
    },[])
    if(data==null){
      return <h1>loading...</h1>
     }
  return (
    <div>
    <div>
         <button onClick={()=>navigate("/addEntry")}>Add Entries</button>
       
    </div>
    <div className='EntriesList'>
        {data?.map((item)=>{
            return(
                <div key={item.id} >
                <Entries info={item}></Entries>
                </div>
            )
        })
      }
    </div>

    </div>
  )
}

export default Dashbord