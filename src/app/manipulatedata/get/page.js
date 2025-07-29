'use client'
import React, { useEffect, useState } from 'react'
const page = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        const getData = async () => {
            let myData = await fetch('http://localhost:3000/api/db-env');
            console.log(myData)
            let kash = await myData.json()
           setData(kash.success)

        }
        getData();
    },[])
  return (
    <>
    <table border={1}>
        <thead>
            <tr>
                <td>name</td>
                <td>age</td>
            </tr>
        </thead>
        <thead>
            {
            data.map((item)=>{
                return(
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
            </tr>)
            })
            }
            
        </thead>
    </table>
    
    
    </>
  )
}

export default page