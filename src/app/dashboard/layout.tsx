import Image from "next/image"
import { RxDashboard } from "react-icons/rx";
import { BsCoin } from "react-icons/bs";
import { GraduationCap, Users } from 'lucide-react';
import { PiHandCoinsDuotone } from "react-icons/pi";
import Logo from "../../../public/icons/logod.png"
import Link from "next/link";
import Bank from "../../../public/icons/bank.svg"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full gap-4 pt-5">
    <aside className="py-2 px-3 sticky top-0 z-[10] w-[230px] h-screen overflow-y-auto scrolbars">
      <div className="w-full border shadow-md rounded-lg pb-20">
        <article className="pt-3 mx-3 border-b pb-4 mb-16">
          <Image src={Logo} alt="Logo" />
        </article>
        <ul className="mb-16">
          <Link href={"/dashboard"} className="group flex items-center gap-2 py-5 px-2 border-b rounded hover:bg-orange-400 hover:text-white cursor-pointer transition-all duration-200">
            <RxDashboard className="text-[25px] flex justify-center items-center group-hover:stroke-white duration-0" /> Dashboard
          </Link>
          <Link href={"/dashboard/courses"} className="group flex items-center gap-2 py-5 px-2 border-b rounded hover:bg-orange-400 hover:text-white cursor-pointer transition-all duration-200">
            <GraduationCap className="text-[30px] flex justify-center items-center group-hover:stroke-white duration-0" /> Course
          </Link>
          <Link href={"/dashboard/students"} className="group flex items-center gap-2 py-5 px-2 border-b rounded hover:bg-orange-400 hover:text-white cursor-pointer transition-all duration-200">
            <Users className="text-[30px] flex justify-center items-center group-hover:stroke-white duration-0" /> Student
          </Link>
          <Link href={"/dashboard/coins"} className="group flex items-center gap-2 py-5 px-2 border-b rounded hover:bg-orange-400 hover:text-white cursor-pointer transition-all duration-200">
            <BsCoin className="text-[27px] flex justify-center items-center group-hover:stroke-white duration-0" /> Coins
          </Link>
          <li className="group flex items-center gap-2 py-5 px-2 border-b rounded hover:bg-orange-400 hover:text-white cursor-pointer transition-all duration-200">
            <PiHandCoinsDuotone className="text-[30px] flex justify-center items-center group-hover:stroke-white duration-0" /> Add Coins
          </li>
        </ul>
        <div className="bg-yellow-500 flex flex-col items-center rounded-xl pb-3">
          <Image className="mb-3 drop-shadow-2xl shadow-red-500" width={150} src={Bank} alt="Bank" />
          <p className="text-[18px] font-semibold mb-3 text-white">Shoppinga o&apos;tish</p>
          <button className="py-[6px] px-7 border rounded-lg font-semibold text-white">
            <Link href={"/shop"}>Kettik</Link>
          </button>
        </div>
      </div>
    </aside>
    <main className="w-[calc(100%-250px)] p-2 overflow-y-auto h-screen scrolbars  ">
      <div className="mr-[50px]">{children}</div>
    </main>
  </div>
  
  )
}
