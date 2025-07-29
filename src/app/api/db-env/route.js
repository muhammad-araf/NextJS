import {Employee} from '../../../lib/database/model/employee'
import { connectionString } from "@/lib/database/db_connection"
import mongoose from "mongoose"
import { NextResponse } from "next/server";

export const GET = async () => {
    await mongoose.connect(connectionString);
    const empData = await Employee.find();
    return NextResponse.json({success : empData})
}
export const POST = async (req) => {
    await mongoose.connect(connectionString);
    const myReq = await req.json();
    const employee = new Employee(myReq);
    const response = await employee.save();
    return NextResponse.json({result : response});
}