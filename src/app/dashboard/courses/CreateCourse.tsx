"use client"

import { postCourse } from "@/actions/course.action";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { useState } from "react";


function CreateCourse() {
  const [courseTitle, setCourseTitle] = useState("")
  const [teacher, setTeacher] = useState("")
  const [open, setOpen] = useState(false)
  const router = useRouter()


  const totalValue = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!courseTitle || !teacher) {
      alert("Sizdagi karobkalar bo'sh")
      return;
    }

    try {
        await postCourse(courseTitle, teacher)
        setCourseTitle("")
        setTeacher("")
        setOpen(false); // ✅ Sheet'ni yopish
        router.push("/dashboard/courses"); // ✅ Sahifani yangilash
    } catch (error) {
      console.log('Sizdagi karobkalar xatolikka uchradi', error);

    }
  }

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen} >
        <SheetTrigger asChild>
          <button className="px-7 py-3 rounded-full bg-[#f18024] hover:bg-[#f18024ca] transition-all duration-200">
            <p className="text-[15px] font-medium text-white">
              Yangi Kurs qushish
            </p>
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mb-5">
            <SheetTitle>Yangi Kurs Yaratish</SheetTitle>
            <SheetDescription>
              Kurs yaratish uchun to&apos;ldirib chiqing !
            </SheetDescription>
          </SheetHeader>
          <div className="w-full mb-5">
            <label className="flex gap-2 text-[#d47323cd] flex-col mb-5" htmlFor="kurs">
              Kurs nomi
              <input onChange={(e) => setCourseTitle(e.target.value)} value={courseTitle} className="py-2 border rounded-md px-2 text-gray-700" id="kurs" type="text" placeholder="Kurs nomini kiriting !" />
            </label>
            <label className="flex gap-2 text-[#d47323cd] flex-col mb-5" htmlFor="kurs">
              Teacher ismi
              <input onChange={(e) => setTeacher(e.target.value)} value={teacher} className="py-2 border rounded-md px-2 text-gray-700" id="kurs" type="text" placeholder="Teacher ismini kiriting !" />
            </label>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <button onClick={totalValue} type="submit" className="px-5 py-2 rounded-full bg-[#f18024] hover:bg-[#f18024ca] transition-all duration-200">
                <p className="text-[15px] font-medium text-white">Saqlash</p>
              </button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default CreateCourse;
