import { Card, ColorVariants } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  card: Card;
}

export default function ProductCard({ card }: ProductCardProps) {

  const colors: ColorVariants = {
    red: "bg-red-700",
    yellow: "bg-yellow-300",
    pink: "bg-pink-300",
    blue: "bg-blue-700",
    white: "bg-white",
  };

  return (
    <Link href={`/product/${card.link}`} className="group w-full cursor-pointer flex flex-col gap-y-2">
      <div className="relative w-full">
        <Image src={card.image_url} width={300} height={375} alt={card.name} className="group-hover:opacity-65 transition-opacity" />
        <button className="absolute bg-primary rounded-full bottom-2 right-2 p-1 opacity-0 group-hover:opacity-100 hover:scale-125 transition-transform">
          <Image src={`/plus.svg`} width={18} height={18} alt="plus"/>
        </button>
      </div>
      <div className="w-full flex flew-row justify-between">
        <h3 className="font-pokova md:text-xl">{card.name}</h3>
        <h3 className="font-pokova md:text-xl">${card.price}</h3>
      </div>
      {card.colors.map((color) => (
        <div
          key={color.id}
          className={`w-4 h-4 rounded-full ${
            colors[color.name]
          } border border-black`}
        />
      ))}
    </Link>
  );
}
