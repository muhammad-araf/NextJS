import {Employee} from '../../../../lib/database/model/employee'
import { connectionString } from "@/lib/database/db_connection";
import mongoose from "mongoose";
import { NextResponse } from "next/server"

export const PUT = async (req,val) => {
    const empID = val.params.empid;
    const id = {_id : empID};
    console.log(id);
    const newdata = await req.json()
    await mongoose.connect(connectionString);
    const result = await Employee.findOneAndUpdate(id,newdata);
    return NextResponse.json({success : "chala gaya tera data chill kr",yehle: result})
}