import { Plus } from "lucide-react";
import { Card } from "../../types";

interface ProductCardProps {
  card: Card;
}

function ProductCard({ card }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative border aspect-h-1 aspect-w-1 w-[200px] md:w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none transition ease-in-out group-hover:opacity-75 lg:max-h-100 xl:max-h-140">
        <img
          src={`${card.image_url}`}
          alt="Picture of flower"
          className="object-cover object-center lg:h-full lg:w-full"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex justify-end">
            <Plus size={25} className="bg-pink-300 rounded-full p-1 shadow-md hover:scale-110 transition" />
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="font-lexend text-sm text-gray-700">{card.name}</h3>
          <p className="font-lexend mt-1 text-sm text-gray-500">
            {card.category}
          </p>
        </div>
        <p className="font-lexend text-sm font-medium text-gray-900">
          ${card.price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
