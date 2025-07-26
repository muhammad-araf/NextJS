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
    if(data){
        return NextResponse.json({Result : "Bariya"},{status : 200})
    }else{
        return NextResponse.json({
            result : "Chal nikal sahi se dhaal"
        },{
            status : 400
        })
    }
}