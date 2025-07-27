"use client"

import { useEffect, useState } from "react";
// let myId;
const page =  ({params}) => {
    const [id,setId] = useState();

    useEffect(()=>{
        const getId = async () =>{
            const res = await params;
            setId(res.empid)
        }
        
        
        getId();
    },[params])
    useEffect(()=>{
        const getApi = async () => {
            if(!id) return
            const res = await fetch(`http://localhost:3000/api/employee/${id}`);
            const data = await res.json();
            setName(data.status[0].name)
            setAge(data.status[0].age)
        }
        getApi()
    },[id])
    async function update(){
        let response = await fetch(`http://localhost:3000/api/employee/${id}`,{
            method : 'PUT',
            body : JSON.stringify({name,age})
        })
        // console.log(response)
        const myresponse = await response.json()
        console.log(myresponse)
        if(myresponse.success){
            alert("Data has been updated")
        }else{
            alert("Error: 404")
        }

    }
    const [name, setName] = useState('None');
    const [age, setAge] = useState('None');
  return (
    <>
    <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
    <input type="text" placeholder="Enter Your Age" value={age} onChange={(e)=>setAge(e.target.value)}/><br/><br/>
    <button onClick={update}>Update</button>
    </>
  )
}

export default page