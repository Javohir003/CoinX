"use client"

import Image from "next/image";
import Frontend from "../../../../../public/img/kursSchema.png";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCourseById } from "@/actions/course.action";
import { getStableColor } from "../../../../../constants/page";



function CourseDetail() {
  const [course, setCourse] = useState<any>(null);
  const {id} = useParams();
  const courseID = id as string; 
  
  
  


  useEffect(()=> {
    if(!id) return 

    const fetchCourse = async() => {
      try{
        const data = await getCourseById(courseID)
        setCourse(data)
      }catch(error){
        console.log(`Course olishda Xatolik`, error);
        
      }
    }
    fetchCourse()

  }, [id])

  
  

  if (!course) {
    return <h1>Kurs topilmadi</h1>;
  }


  return (
    <div className={`w-full`}>
      <h5 className="mb-5 text-[25px] ">{course.courseTitle}</h5>
      <div className={`relative top-0 flex justify-center items-end border mb-5 w-[500px] h-[300px] rounded-xl`} style={{backgroundColor: getStableColor(courseID.toString())}}>
        <p className="absolute top-8 left-0 text-center w-full mt-12 text-[20px] font-semibold text-white">{course.courseTitle}</p>
        <Image className="w-[500px] object-cover" src={Frontend} alt="Course Detail Img" />
      </div>
      <h4 className="mb-3">O'qituvchi: <span className="font-semibold text-[19px]">{course.teacher}</span></h4>
      <div className="flex items-center gap-3">
        {/* <EditCourse id={course?.courses?._id} /> */}
        {/* <RemoveCourse id={course?._id}/> */}
      </div>
    </div>
  )
}

export default CourseDetail
