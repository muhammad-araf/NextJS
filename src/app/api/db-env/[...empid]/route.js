import {Employee} from '../../../../lib/database/model/employee'
import { connectionString } from "@/lib/database/db_connection";
import mongoose from "mongoose";
import { Chiron_Sung_HK } from 'next/font/google';
import { NextResponse } from "next/server"

export const PUT = async (req,val) => {
    const empID = val.params.empid;
    const id = {_id : empID};
    console.log(id);
    const newdata = await req.json()
    await mongoose.connect(connectionString);
    const result = await Employee.findOneAndUpdate(id,newdata);
    return NextResponse.json({success : true,result: result})
}
export const DELETE = async (req,val) => {
    const empID = val.params.empid;
    const id = {_id : empID};
    await mongoose.connect(connectionString);
    const result = await Employee.findOneAndDelete(id);
    return NextResponse.json({success : true,result: result})
}
export const GET = async (req,val) => {
    const empID = val.params.empid;
    const id = {_id : empID}; 
    await mongoose.connect(connectionString);
    const result = await Employee.findById(id);
    return NextResponse.json({success : true,result})
}