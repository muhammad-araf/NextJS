import { NextResponse } from "next/server";
// const isLogin = false
export function middleware(req){
    // if(!isLogin && req.nextUrl.pathname!='/employee'){
        return NextResponse.redirect(new URL('/employee',req.url));
    // }
}
export const config = {
    matcher: ['/Segment/:posts*']
}