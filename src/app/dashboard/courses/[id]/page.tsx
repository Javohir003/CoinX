import Image from "next/image";
import { getStableColor } from "../../../../../constants/page";
import Frontend from "../../../../../public/img/kursSchema.png";
import RemoveCourse from "../components/RemoveCourse";
import EditCourse from "../components/EditCourse";


const getCourseByID = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3001/api/courses/${id}`, {
      cache: "no-store"
    })
    return await res.json()
  } catch (error) {
    console.log("Xatolik yuz berdi id olishda");

  }
}


async function CourseDetail({ params }: { params: { id: string } }) {
  const course = await getCourseByID(params.id)
  
  if (!course) {
    return <h1>Kurs topilmadi</h1>;
  }

  return (
    <div className={`w-full`}>
      <h5 className="mb-5 text-[25px] ">{course?.courses.courseTitle}</h5>
      <div className={`relative top-0 flex justify-center items-end border mb-5 w-[500px] h-[300px] rounded-xl`} style={{backgroundColor: getStableColor(params.id)}}>
        <p className="absolute top-8 left-0 text-center w-full mt-12 text-[20px] font-semibold text-white">{course?.courses?.courseTitle}</p>
        <Image className="w-[500px] object-cover" src={Frontend} alt="Course Detail Img" />
      </div>
      <h4 className="mb-3">O'qituvchi: <span className="font-semibold text-[19px]">{course?.courses?.teacher}</span></h4>
      <p className="flex gap-2 items-end mb-5">Coinlar soni: <span className="text-orange-500 font-semibold">{course?.courses?.coin}</span>coin</p>
      <div className="flex items-center gap-3">
        {/* <EditCourse id={course?.courses?._id} /> */}
        <RemoveCourse id={course?.courses?._id}/>
      </div>
    </div>
  )
}

export default CourseDetail
