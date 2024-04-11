"use client";

import Image from "next/image";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

import { cn } from "@/utilities/utils";
import { ColorVariants, Product } from "@/types/types";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const colors: ColorVariants = {
    red: "bg-red-700",
    yellow: "bg-yellow-300",
    pink: "bg-pink-300",
    blue: "bg-blue-700",
    white: "bg-white",
  };

  const updateQuantity = (num: number) => {
    if ((quantity === 0 && num === -1) || (quantity === 8 && num === 1))
      return;
    setQuantity((prevQuantity) => prevQuantity + num);
  }

  let imgs: string[] = [];

  product.images.forEach((product) => imgs.push(product.imageUrl));

  let index = imgs.findIndex((img) => img.includes(selectedColor.name));

  const imageUrl = imgs[index];

  return (
    <main className="w-full px-4 md:px-8 lg:px-24 py-8 md:py-16 lg:py-24 flex flex-col gap-y-5 md:gap-y-10 lg:gap-y-16">
      <div className="w-full flex flex-col md:flex-row items-center justify-start md:items-start gap-y-5 md:gap-x-8 lg:gap-x-16">
        <Image
          className="border-2 rounded-md"
          src={imageUrl}
          width={500}
          height={625}
          alt={product.name}
        />
        <div className="w-full md:max-w-[40%] flex flex-col gap-y-5 md:gap-y-8">
          <h1 className="font-pokova text-3xl md:text-4xl lg:text-5xl">{product.name}</h1>
          <h3 className="font-pokova text-xl md:text-2xl lg:text-3xl">${product.price}</h3>
          <div className="w-full border-b-2" />
          <h3 className="font-pokova font-bold text-xl md:text-2xl lg:text-3xl">Quantity:</h3>
          <div className="w-32 flex flex-row gap-x-5">
            <button className="bg-primary rounded-md p-1 hover:scale-125 transition-transform" onClick={() => updateQuantity(-1)}>
              <Image src={'/minus.svg'} width={25} height={25} alt="minus"/>
            </button>
            <h4 className="font-h4okova text-lg md:text-xl lg:text-2xl">{quantity}</h4>
            <button className="bg-primary rounded-md p-1 hover:scale-125 transition-transform" onClick={() => updateQuantity(1)}>
              <Image src={'/plus.svg'} width={25} height={25} alt="plus"/>
            </button>
          </div>
          <h3 className="font-pokova font-bold text-xl md:text-2xl lg:text-3xl">Colors:</h3>
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
                    className={`${
                      colors[color.name]
                    } h-8 w-8 rounded-full border border-black border-opacity-10`}
                  />
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
          <button className="bg-primary rounded-md py-2 font-pokova text-xl text-white hover:scale-105 transition-transform">Add To Cart</button>
        </div>
      </div>
      <p className="font-pokova text-left md:text-lg lg:text-2xl">{product.description}</p>
    </main>
  );
}
