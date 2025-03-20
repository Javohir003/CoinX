import ConnectMonogDB from "@/lib/mongodb";
import Course from "@/models/Course";
import { NextResponse } from "next/server";


export async function POST(request: Request){
    const {courseTitle, teacher, coin} = await request.json();
    await ConnectMonogDB();
    await Course.create({courseTitle, teacher, coin});
    return NextResponse.json({message: "Course created successfully"}, {status: 201});
}

export async function GET(){
    await ConnectMonogDB();
    const courses = await Course.find();
    return NextResponse.json({courses});
}

export async function DELETE(request: Request){
    const {id} = await request.json();
    await ConnectMonogDB();
    await Course.findByIdAndDelete(id);
    return NextResponse.json({message: "Course deleted successfully"}, {status: 200});
}