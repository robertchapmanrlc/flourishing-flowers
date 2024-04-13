import { create } from "zustand";
import { Order } from "@/types/types";

type Cart = {
  orderItems: Order[];
  totalPrice: number;
};

const initialCart: Cart = {
  orderItems: [],
  totalPrice: 0,
};

export const cartStore = create<Cart>(() => initialCart);

export default function useCartService() {
  const { orderItems, totalPrice } = cartStore();

  return {
    orderItems,
    totalPrice,
    addToCart: (item: Order) => {
      const updatedOrderItems = [...orderItems, { ...item }];
      const totalPrice = calculatePrice(updatedOrderItems);
      cartStore.setState({ orderItems: updatedOrderItems, totalPrice });
    },
    increase: (item: Order) => {
      const product = orderItems.find(
        (orderItem) => item.product_id === orderItem.product_id
      );
      const updatedOrderItems = product
        ? orderItems.map((orderItem: Order) =>
            orderItem.product_id === item.product_id
              ? { ...product, quantity: product.quantity + 1 }
              : orderItem
          )
        : [...orderItems, { ...item }];
      const totalPrice = calculatePrice(updatedOrderItems);
      cartStore.setState({
        orderItems: updatedOrderItems,
        totalPrice
      })
    },
  };
}

const calculatePrice = (items: Order[]) => {
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return totalPrice;
}
