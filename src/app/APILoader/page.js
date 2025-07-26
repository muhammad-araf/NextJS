"use client"
import Loading from './Loader'
import { useEffect, useState } from "react";
async function getData(){
    const data = await fetch('https://mocki.io/v1/fdc8a28e-a83d-4047-814b-36320ff1db2a');
    const response = await data.json();
    return response
}
const page = () => {
    const [users, setUsers] = useState([]);
    const [loader,setLoader] = useState(false)
    useEffect(()=>{
        async function api(){
            let myData = await getData()
            console.log(myData)
            setUsers(await myData)
            setLoader(true);
        }
        api();
    },[])
  return (
    <>
        {
            (!loader)? <Loading/> : (
                users.map((user,i)=>(
                    <h4 key={i}>{user.name}</h4>
                ))
            )
        }
    </>
  )
}

export default page