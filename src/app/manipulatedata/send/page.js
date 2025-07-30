'use client'
import React, { useState } from 'react'

const page = () => {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const handleData = async () => {
        let data = await fetch('http://localhost:3000/api/db-env',{
            method : 'POST',
            body : JSON.stringify({name,age})
        })
        data = await data.json();
        if(data.success){
          alert("Your Data has been added")
        }else{
          alert("Try again...")
        }
        console.log(data)

    }
  return (
    <>
    <input type='text' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
    <input type='Number' placeholder='Enter your Age' value={age} onChange={(e)=>setAge(e.target.value)}/><br/><br/>
    <button onClick={handleData}>Update Data</button>
    
    </>
  )
}

export default page