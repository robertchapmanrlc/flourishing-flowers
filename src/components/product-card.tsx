import { useContext } from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { ShopContext } from "../contexts/shop-context";
import { Card, Color } from "../../types";

interface ProductCardProps {
  card: Card;
}

function ProductCard({ card }: ProductCardProps) {

  const { addToCart } = useContext(ShopContext);

  const handleAddItem = () => {
    toast.success('Item added to cart');
    addToCart(card.product_id);
  }

  let colors: Color[] = card.colors;

  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].name === "red") {
      colors[i].class = "bg-red-600";
    } else if (colors[i].name === "blue") {
      colors[i].class = "bg-blue-700";
    } else if (colors[i].name === "yellow") {
      colors[i].class = "bg-yellow-300";
    } else if (colors[i].name === "green") {
      colors[i].class = "bg-green-600";
    } else if (colors[i].name === "pink") {
      colors[i].class = "bg-pink-300";
    } 
  }

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-h-1 aspect-w-1 w-[200px] md:w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none transition ease-in-out group-hover:opacity-75 lg:max-h-100 xl:max-h-140">
        <Link to={`/product/${card.product_id}`}>
          <img
            src={`${card.image_url}`}
            alt="Picture of flower"
            className="object-cover object-center md:h-full md:w-full"
          />
        </Link>
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex justify-end">
            <Plus size={25} className="bg-pink-300 rounded-full p-1 shadow-md hover:scale-110 transition" onClick={handleAddItem} />
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <Link to={`/product/${card.product_id}`}>
            <h3 className="font-lexend text-sm text-gray-700 hover:underline">{card.name}</h3>
          </Link>
          <p className="font-lexend mt-1 text-sm text-gray-500">
            {card.category}
          </p>
        </div>
        <p className="font-lexend text-sm font-medium text-gray-900">
          ${card.price}
        </p>
      </div>
      <div className="flex flex-row gap-x-2 mt-2">
        {card.colors.map((color) => (
          <div key={color.name} className={`w-4 h-4 ${color.class} rounded-full border border-gray-500`} /> 
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
