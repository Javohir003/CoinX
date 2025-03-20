"use client"



import { Pencil } from 'lucide-react';

const getCourseByID = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3001/api/courses/${id}`, {
      cache: "no-store"
    })
    if (!res.ok) {
      throw new Error("Sizda mahsulot uchirilmadi")
    }
    return await res.json()
  } catch (error) {
    console.log("Xatolik yuz berdi id olishda");

  }
}


export default async function EditCourse({ id }: { id: string }) {

  const courseId = id;

  await getCourseByID(courseId)

  return (
    <>
      <button className='group p-3 inline-flex rounded-full border hover:border-orange-400 transition-all duration-200 cursor-pointer'>
        <Pencil className=' stroke-gray-500 group-hover:stroke-orange-400 transition-all duration-200' />
      </button>
    </>
  )
}
