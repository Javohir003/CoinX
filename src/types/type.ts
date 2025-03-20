import { StaticImageData } from "next/image";

export interface IProduct{
    id: number,
    image: string | StaticImageData,
    title: string,
    description: string,
    coin: number,
    qolganproduct: number,
    levelRequired: number
}

export interface ICourse{
    _id: string;
    courseTitle: string
    teacher: string
    coin: number
}

