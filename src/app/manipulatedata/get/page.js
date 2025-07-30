'use client'
import { Chiron_Sung_HK } from 'next/font/google'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
const page = () => {
    const [data,setData] = useState([])
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [edit,setEdit] = useState(false)
    const [id,setId] = useState();
    useEffect(()=>{
        const getData = async () => {
            let myData = await fetch('http://localhost:3000/api/db-env',{cache:'no-store'});
            console.log(myData)
            let kash = await myData.json()
           setData(kash.success)

        }
        getData();
    },[])
    const EditData = (i,id) => {
        setEdit(true);
        setId(id);
        setName(data[i].name);
        setAge(data[i].age)
    }
    const deleteData = async (myID) => {
        let response = await fetch(`http://localhost:3000/api/db-env/${myID}`,{
            method:'DELETE'
        })
        response = await response.json();
        if(response.success){
            alert("Your Data has been deleted");
        }else{
            alert("Try Again...")
        }
    }
    const handleData = async (id) => {
        let response = await fetch(`http://localhost:3000/api/db-env/${id}`,{
            method:'PUT',
            body : JSON.stringify({name,age})
        })
        console.log(response)
        response = await response.json();
        console.log(response)
        if(response.success){
            alert("Your Data has been updated")
            setEdit(false);
        }else{
            alert("Your Data is not Updated Try Again")
        }
    }
  return (
    <>


    <table border={1}>
        <thead>
            <tr>
                <td>name</td>
                <td>age</td>
                <td>Action</td>
            </tr>
        </thead>
        <thead>
            {
            data.map((item,i)=>{
                return(
            <tr key={i}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td><button onClick={()=>EditData(i,item._id)}>Edit</button><span>  </span><button onClick={()=>deleteData(item._id)}>Delete</button></td>
            </tr>)
            })
            }
            
        </thead>
    </table>
    {
        edit? <>
            <input type='text' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
            <input type='Number' placeholder='Enter your Age' value={age} onChange={(e)=>setAge(e.target.value)}/><br/><br/>
            <button onClick={handleData}>Update Data</button>
            </> : null
    }
    
    
    </>
  )
}

export default page