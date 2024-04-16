"use client";

import toast from "react-hot-toast";
import { Order } from "@/types/types";
import useCartService from "contexts/shop-context";

interface AddToCartProps {
  order: Order;
}

export default function AddToCart({ order }: AddToCartProps) {
  const { addToCart } = useCartService();

  const addToCartHandler = (order: Order) => {
    addToCart(order);
    toast.success("Item(s) added to cart");
  };

  return (
    <button
      className="bg-primary rounded-md py-2 font-pokova text-xl text-white hover:scale-105 transition-transform"
      onClick={() => addToCartHandler(order)}
    >
      Add To Cart
    </button>
  );
}
