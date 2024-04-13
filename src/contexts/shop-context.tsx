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
    removeFromCart: (item: Order) => {
      const updatedOrderItems = orderItems.filter((orderItem) => orderItem.created_at !== item.created_at);
      const totalPrice = calculatePrice(updatedOrderItems);
      cartStore.setState({ orderItems: updatedOrderItems, totalPrice });
    },
    changeQuantity: (item: Order, newQuantity: number) => {
      const product = orderItems.find(
        (orderItem) => item.created_at === orderItem.created_at
      );
      const updatedOrderItems = product
        ? orderItems.map((orderItem: Order) =>
            orderItem.created_at === item.created_at
              ? { ...product, quantity: newQuantity }
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
