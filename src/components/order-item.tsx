"use client";

import Image from "next/image";

import { Order } from "@/types/types";
import useCartService from "contexts/shop-context";

interface OrderItemProps {
  order: Order;
}

export default function OrderItem({ order }: OrderItemProps) {
  const { changeQuantity, removeFromCart } = useCartService();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeQuantity(order, Number(e.target.value));
  };

  const handleRemove = () => {
    removeFromCart(order);
  };

  return (
    <li className="w-full flex items-start border-b-2 py-8 border-b-gray-600/20">
      <Image
        src={order.imageUrl}
        width={100}
        height={125}
        alt={order.name}
        className="border rounded-lg"
      />
      <div className="w-full min-h-28 px-5 flex flex-col md:flex-row justify-between md:justify-start items-center md:items-start">
        <div className="w-full md:w-1/2">
          <h5 className="font-pokova font-semibold text-base">{order.name}</h5>
          <h5 className="font-pokova text-gray-600/70 text-base">
            {order.color.charAt(0).toUpperCase() + order.color.slice(1)}
          </h5>
          <h5 className="font-pokova font-semibold text-base">
            ${order.price}
          </h5>
        </div>
        <div className="w-full md:w-10 md:min-h-28 flex items-start justify-start">
          <select
            name="quantity"
            defaultValue={order.quantity}
            id="quantity"
            className="w-10 p-1 border border-gray-900/20 rounded-md"
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
      </div>
      <button onClick={() => handleRemove()}>
        <Image src={"/x.svg"} width={30} height={30} alt="x" />
      </button>
    </li>
  );
}
