import { NextResponse } from "next/server";
export const POST = async (req,res)=>{
    const data = await req.json();
    console.log(data)
    return NextResponse.json({name : "Araf"})
}