"use client";

import Image from "next/image";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

import { cn } from "@/utilities/utils";
import { Product } from "@/types/types";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <main className="w-full px-4 py-8 flex flex-col">
      <div className="w-full flex flex-col-reverse mb-5 gap-y-5">
        <div className="w-full flex flex-col gap-y-2">
          <h1 className="font-pokova text-3xl">{product.name}</h1>
          <h3 className="font-pokova text-xl">${product.price}</h3>
          <h3 className="font-pokova font-bold text-xl">Colors:</h3>
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
