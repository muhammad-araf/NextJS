import { NextResponse } from "next/server";
export const POST = async (req,res)=>{
    const data = await req.json();
    if(!data.name || !data.age){
        return NextResponse.json({result : "Bad Request"},{status : 400})
    }
    return NextResponse.json({result : "success"},{status : 200})
}