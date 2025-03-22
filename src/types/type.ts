import { StaticImageData } from "next/image";

export interface IProduct{
    id: number,
    image: string | StaticImageData,
    title: string,
    description: string,
    qolganproduct: number,
    levelRequired: number
}

export interface ICourse{
    _id: string;
    courseTitle: string
    teacher: string
}

