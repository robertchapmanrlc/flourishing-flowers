"use client";

import useCartService from "contexts/shop-context";
import OrderItem from "./order-item";

export default function OrderList() {
  const { orderItems } = useCartService();

  return (
    <ul className="w-full flex flex-col">
      {orderItems.length === 0 && (
        <p className="font-pokova text-xl text-center text-gray-600/60">
          No orders in the cart.
        </p>
      )}
      {orderItems.map((orderItem, i) => (
        <OrderItem key={i} order={orderItem} />
      ))}
    </ul>
  );
}
