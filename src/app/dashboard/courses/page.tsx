import Image from "next/image";
import Frontend from "../../../../public/img/kursSchema.png";
import CreateCourse from "./CreateCourse";
import Link from "next/link";
import { getStableColor } from "../../../../constants/page";
import { getCourses } from "@/actions/course.action";

async function CourseAll() {
  const courses = await getCourses()
  return (
    <div>
      <article className="flex justify-between items-center mb-3">
        <h6 className="font-semibold text-[26px]">Kurslar</h6>
        <CreateCourse/>
      </article>
      <hr className="mb-7" />
      {courses?.length < 1 && <h1>Sizda Datalar yuq</h1>}
        <div className="w-full grid grid-cols-4 gap-4">
          {courses?.map((item, id)=> {
            let titleS = item.courseTitle.split(" ")[0]          
            return(
              <div key={id} className={`border drop-shadow-sm shadow-black rounded-lg overflow-hidden `}>
                <Link href={`/dashboard/courses/${item._id}`} className={`mb-4 relative flex top-0 left-0 w-full h-[200px]`} style={{backgroundColor: getStableColor(item._id.toString())}}>
                  <p className="text-center w-full mt-12 text-[15px] font-semibold text-white">{item.courseTitle}</p>
                  <Image className="absolute bottom-0 left-0" src={Frontend} alt="Course Img" />
                </Link>
                <article className="px-7 py-4">
                  <p className="text-[18px] mb-2 line-clamp-1">{titleS}</p>
                </article>
              </div>
            )
          })}
        </div>
    </div>
  );
}

export default CourseAll;
