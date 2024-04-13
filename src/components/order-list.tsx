import { Order } from "@/types/types";

interface OrderListProps {
  orderItems: Order[];
}

export default function OrderList({ orderItems }: OrderListProps) {
  return (
    <ul>
      {orderItems.length === 0 && (
        <p className=" font-pokova text-xl text-gray-600/60">No orders in the cart.</p>
      )}
    </ul>
  );
}
