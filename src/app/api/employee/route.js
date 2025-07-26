import { employee } from "@/db/db";
import { NextResponse } from "next/server";

export function GET(request){
    return NextResponse.json(employee)
}