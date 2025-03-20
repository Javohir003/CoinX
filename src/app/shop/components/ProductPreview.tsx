import { IoArrowBack } from "react-icons/io5";
import ProductCard from "./ProductCard";
import { getProducts } from "../../../../constants/page";
import { IProduct } from "@/types/type";
import Link from "next/link";

async function ProductPreview() {
  const products = await getProducts();
  console.log(products);

  return (
    <div className="mb-10">
      <Link href={"/dashboard"} className="flex items-center gap-2 text-[20px] mb-6">
        <IoArrowBack className="text-[25px]" />
        Orqaga
      </Link>
      <div>
        <h1 className="mb-5">Bu bizning mahsulotlar</h1>
        <div className="grid grid-cols-3 gap-5">
          {products?.map((product: IProduct, id) => (
            <ProductCard key={id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPreview;
