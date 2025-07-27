import { NextResponse } from "next/server"

export const GET = (req,val) =>{
    const detail = val.params.all
    return NextResponse.json({result : detail});
}