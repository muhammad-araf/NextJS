"use client"

import { useState } from "react"

const page = () => {
    const [name,setName] = useState()
    const [age,setAge] = useState()
    const registerUser = async () => {
        let data = fetch('http://localhost:3000/api/users',{
            method : 'POST',
            body : JSON.stringify({name,age})
        })
        data = await (await data).json();
        console.log(data)
    }
  return (
    <>
    <input type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}/><br/>
    <input type="text" placeholder="Enter Your Age" onChange={(e)=>setAge(e.target.value)}/><br/>
    <button onClick={registerUser}>Register</button>
    </>
  )
}

export default page