
"use client"

import { useRouter } from "next/navigation"

function RemoveCourse({ id }: { id: any }) {
    const router = useRouter()

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";


    const removeCourse = async () => {
        const confirmed = confirm("O'chirishni xoxlaysizmi !!!")

        if(confirmed){
            const res =  await fetch(`${API_URL}/courses?id=${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ id })
            })
            if(res.ok){
                router.push("/dashboard/courses")
                router.refresh()
            }
        }
    }

    return (
        <button onClick={removeCourse}  className="px-7 py-3 rounded-full bg-[#f18024] hover:bg-[#f18024ca] transition-all duration-200">
            <p className="text-[15px] font-medium text-white">
                O'chirish
            </p>
        </button>
    )
}

export default RemoveCourse
