"use client"
import { useState } from "react"
import style from '../custom.module.css'

const page = () => {
    const[MyStyle,setStyle] = useState(true)
  return (
    <>
        
        <h2 className={MyStyle? style.black : style.white}>Hello</h2>
        <button
        onClick={()=>{
            setStyle(!MyStyle)
        }}>
            Change Color
        </button> 
    </>
  )
}

export default page