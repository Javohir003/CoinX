"use server"

import ConnectMonogDB from "@/lib/mongodb"
import Course from "@/models/Course"
import { ICourse } from "@/types/type"
import mongoose from "mongoose"


export const getCourses  = async()=> {
    try{
        await ConnectMonogDB()
        const courses = await Course.find()
        return courses as ICourse[]
    }catch(error){
        throw new Error(`Sizda Xatolik yuz berdi Courselarni olishda  ${error}`)
    }
}


export const postCourse = async(courseTitle: string, teacher: string) => {
    if(!courseTitle || !teacher){
        throw new Error(`Xatolik yuz berdi Courseni POST qilishda`)
    }

    try{
        await ConnectMonogDB()
        const createCourse = new Course({courseTitle, teacher})
        await createCourse.save()
    }catch(error){
        throw new Error(`Xatolik yuz berid POST Courseda, ${error}`)
    }
}

export const getCourseById = async (id: string) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error(`Noto‘g‘ri ID formati: ${id}`);
        }

        await ConnectMonogDB();
        const courseDoc = await Course.findById(id);
        if (!courseDoc) {
            throw new Error(`Kurs topilmadi: ${id}`);
        }
        
        // 🔹 Mongoose Document -> Oddiy JS Object
        const course = courseDoc.toObject(); 
        
        return {
            ...course,
            _id: course._id.toString(), // ✅ ObjectId -> String
            createdAt: course.createdAt.toISOString(), // ✅ Date -> String
            updatedAt: course.updatedAt.toISOString(), // ✅ Date -> String
        };
    } catch (error) {
        throw new Error(`Sizda ID olishda xatolik yuz berdi: ${error}`);
    }
};