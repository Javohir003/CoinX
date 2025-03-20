import { IProduct } from "@/types/type";
import Image from "next/image"
import { BsCoin } from "react-icons/bs";

interface ProductCardProps{
  product: IProduct
}

function ProductCard({product}: ProductCardProps) {
  return (
      <div className="border rounded-lg">
        <article className="h-[250] w-full overflow-hidden flex justify-center mb-8">
          <Image className="object-cover w-full h-full" src={product.image} alt="Macbook" />
        </article>
        <div className="px-3 pb-3">
          <article className="flex items-center justify-between mb-3">
            <h6 className="text-[20px] font-medium">{product.title}</h6>
            <p className="flex items-center gap-1 py-1 px-2 rounded-[5px] border overflow-hidden">
              <BsCoin className="fill-[#f9d222] text-[20px] animate-bounce"/>
              <span className="font-normal text-[14px]">{product.coin}</span>
              </p> 
          </article>
          <button className="px-2 py-2 border rounded-md cursor-pointer">Almashtirish</button>
        </div>
        
      </div>
  )
}

export default ProductCard