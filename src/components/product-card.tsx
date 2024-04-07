import { Card, ColorVariants } from "@/types/types";
import Image from "next/image";

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
    <div className="w-full cursor-pointer flex flex-col">
      <Image src={card.image_url} width={300} height={375} alt={card.name} />
      <div className="w-full flex flew-row justify-between">
        <h3 className="font-pokova">{card.name}</h3>
        <h3 className="font-pokova">${card.price}</h3>
      </div>
      {card.colors.map((color) => (
        <div
          key={color.id}
          className={`w-4 h-4 rounded-full ${
            colors[color.name]
          } border border-black`}
        />
      ))}
    </div>
  );
}
