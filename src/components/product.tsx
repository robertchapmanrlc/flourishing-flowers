
import Image from "next/image";
import { Product } from "@/types/types";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <main className="w-full px-4 py-8 flex flex-col">
      <div className="w-full flex flex-col-reverse mb-5 gap-y-5">
        <div className="w-full flex flex-col gap-y-2">
          <h1 className="font-pokova text-3xl">{product.name}</h1>
          <h3 className="font-pokova text-xl">${product.price}</h3>
          <h3 className="font-pokova font-bold text-xl">Colors:</h3>
          {product.colors.map((color) => (
            <p key={color.id}>{color.name}</p>
          ))}
        </div>
        <Image
          className="border-2 rounded-md"
          src={product.imageUrl}
          width={400}
          height={500}
          alt={product.name}
        />
      </div>
      <p className="font-pokova text-left">{product.description}</p>
    </main>
  );
}
