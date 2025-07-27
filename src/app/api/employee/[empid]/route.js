import { employee } from "@/db/db";
import { NextResponse } from "next/server";

export async function GET(req,value){
    // console.log(req.params.empid);
    const para = await value.params
    const id = para.empid
    const res = employee.filter(item=> item.id == id? id : 0)
    let result = res == 0? {status : 0} : {status : res}

    return NextResponse.json(result)
}
export const DELETE = (req,val) => {
    let data = val.params.empid;
    console.log(req.json())
    if(data){
        return NextResponse.json(
            {result : "Bariya",success : true},
            {status : 200})
    }else{
        return NextResponse.json(
            {result : "Chal nikal sahi se dhaal",success : false},
            {status : 400}
        )
    }
}
export const POST = (req,val) => {
    let data = val.params.empid;
    console.log(req.json())
   if(body.name || body.age){
        return NextResponse.json(
            {result : "Bariya",success : true, data : body},
            {status : 200})
    }else{
        return NextResponse.json(
            {result : "Chal nikal sahi se dhaal",success : false},
            {status : 400}
        )
    }
}
export const PUT = async (req,val) =>{
    let data = val.params.empid;
    const body = await req.json()
    if(data){
        return NextResponse.json(
            {result : "Bariya",success : true, data : req},
            {status : 200})
    }else{
        return NextResponse.json(
            {result : "Chal nikal sahi se dhaal",success : false},
            {status : 400}
        )
    }
}