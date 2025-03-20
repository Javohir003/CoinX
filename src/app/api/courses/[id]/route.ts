import ConnectMonogDB from "@/lib/mongodb"
import Course from "@/models/Course";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function PUT(request: Request, {params}: {params:{id: string}}){
    const {id} = params
    const {newcourseTitle: courseTitle, newteacher: teacher, newcoin: coin} = await request.json()
    await ConnectMonogDB();
    await Course.findByIdAndUpdate(id, {courseTitle, teacher, coin})
    return NextResponse.json({message: "Course Updated"}, {status: 200})
}

export async function GET(request: Request, {params}: {params:{id: string}}){
    const {id} = params
    await ConnectMonogDB();
    const courses = await Course.findOne({ _id: new ObjectId(id) })
    return NextResponse.json({courses}, {status: 200})
}