import ConnectMonogDB from "@/lib/mongodb"
import Course from "@/models/Course";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function PUT(request: NextRequest, {params}: {params:{id: string}}){
    const {id} = await params
    const {newcourseTitle: courseTitle, newteacher: teacher, newcoin: coin} = await request.json()
    await ConnectMonogDB();
    await Course.findByIdAndUpdate(id, {courseTitle, teacher, coin})
    return NextResponse.json({message: "Course Updated"}, {status: 200})
};


export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    await ConnectMonogDB();

    try {
        const {id} = await params
        if (!ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
        }

        const course = await Course.findOne({ _id: new ObjectId(id) });

        if (!course) {
            return NextResponse.json({ error: "Course not found" }, { status: 404 });
        }

        return NextResponse.json(course, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}