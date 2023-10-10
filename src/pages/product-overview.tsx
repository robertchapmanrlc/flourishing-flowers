import toast from "react-hot-toast";
import { Minus, Plus } from "lucide-react";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { RadioGroup } from "@headlessui/react";

import { ShopContext } from "../contexts/shop-context";
import { cn } from "../lib/utils";
import { Product } from "../../types";
import { products } from "../../products";

function ProductOverview() {
  const { id } = useParams();
  const { addManyToCart } = useContext(ShopContext);

  let product: Product = products[Number(id) - 1];

  for (let i = 0; i < product.colors.length; i += 1) {
    if (product.colors[i].name === "red") {
      product.colors[i].class = "bg-red-600";
    } else if (product.colors[i].name === "blue") {
      product.colors[i].class = "bg-blue-700";
    } else if (product.colors[i].name === "yellow") {
      product.colors[i].class = "bg-yellow-300";
    } else if (product.colors[i].name === "green") {
      product.colors[i].class = "bg-green-600";
    }
  }

  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const updateQuantity = (num: number) => {
    if ((quantity === 0 && num === -1) || (quantity === 8 && num === 1)) {
      return;
    }
    setQuantity((prevQuantity) => prevQuantity + num);
  };

  const handleAddToCart = () => {
    if (quantity !== 0) {
      toast.success("Item(s) added to cart");
      addManyToCart(product.product_id, quantity, selectedColor.name);
    }
  };

  return (
    <div className="w-full lg:px-32 md:px-16 px-4 lg:py-8 md:py-4 py-2">
      <div className="w-full flex flex-col md:flex-row md:justify-between lg:gap-x-16 md:gap-x-8 gap-y-8 md:gap-y-0">
        <img
          src="/src/assets/products/red-rose-bouquet.webp"
          alt="Picture of product"
          className="border-2 rounded-md md:max-h-[500px]"
        />
        <div className="w-full flex flex-col items-start gap-y-5">
          <div className="w-full flex flex-col gap-y-5 border-b pb-5">
            <h1 className="font-lexend text-4xl">{product.name}</h1>
            <p className="font-lexend text-2xl">${product.price}</p>
          </div>
          <p className="font-lexend text-xl">Quantity:</p>
          <div className="w-full flex flex-row items-center gap-x-5">
            <button
              onClick={() => updateQuantity(-1)}
              className="bg-pink-300 rounded-md p-1"
            >
              <Minus />
            </button>
            <p className="font-lexend text-lg">{quantity}</p>
            <button
              onClick={() => updateQuantity(1)}
              className="bg-pink-300 rounded-md p-1"
            >
              <Plus />
            </button>
          </div>
          <p className="font-lexend text-xl">Colors:</p>
          <RadioGroup value={selectedColor} onChange={setSelectedColor}>
            <RadioGroup.Label className="sr-only">
              Choose a color
            </RadioGroup.Label>
            <div className="flex flex-wrap justify-start items-center space-x-3">
              {product.colors.map((color) => (
                <RadioGroup.Option
                  key={color.name}
                  value={color}
                  className={({ active, checked }) =>
                    cn(
                      color.selectedClass,
                      active && checked ? "ring ring-offset-1" : "",
                      !active && checked ? "ring-2" : "",
                      "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                    )
                  }
                >
                  <RadioGroup.Label as="span" className="sr-only">
                    {color.name}
                  </RadioGroup.Label>
                  <span
                    aria-hidden="true"
                    className={cn(
                      color.class,
                      "h-8 w-8 rounded-full border border-black border-opacity-10"
                    )}
                  />
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
          <p className="font-lexend text-xl">Type: {product.category}</p>
          <button
            className="w-full font-lexend bg-pink-500 py-2 rounded-md"
            onClick={() => handleAddToCart()}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <p className="font-lexend text-sm text-gray-600 mt-5">
        {product.description}
      </p>
    </div>
  );
}

export default ProductOverview;
