import { createContext, useState } from "react";
import { Order, Product } from "../../types";
import { products } from "../../products";

interface ShopContextType {
  cartItems: Map<number, Order[]>;
  addToCart: (product_id: number) => void;
  addManyToCart: (product_id: number, quantity: number, color: string) => void;
  removeFromCart: (product_id: number, created_at: string) => void;
}

const initialCart: Map<number, Order[]> = new Map();

export const ShopContext = createContext<ShopContextType>({
  cartItems: initialCart,
  addToCart: () => {},
  removeFromCart: () => { },
  addManyToCart: () => {}
});

interface ShopContextProviderProps {
  children: React.ReactNode;
}

export const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const [cartItems, setCartItems] = useState(initialCart);

  const addToCart = (product_id: number) => {
    const prod: Product = products[product_id - 1];
    const newOrder: Order = {
      name: prod.name,
      image_url: prod.image_url,
      price: prod.price,
      color: prod.colors[0].name,
      quantity: 1,
      product_id: prod.product_id,
      created_at: new Date().toLocaleString()
    };

    let prevMap = new Map(cartItems);

    if (prevMap.get(product_id) === undefined) {
      prevMap.set(product_id, [newOrder]);
    } else {
      let prevList = prevMap.get(product_id);
      prevList?.push(newOrder);
      prevMap.set(product_id, prevList!);
    }

    setCartItems(prevMap);
  };

  const removeFromCart = (product_id: number, created_at: string) => {
    let prevMap = new Map(cartItems);
    let order = prevMap.get(product_id);

    order = order?.filter((item) => item.created_at !== created_at);
    prevMap.set(product_id, order!);

    setCartItems(prevMap);
  };

  const addManyToCart = (product_id: number, quantity: number, color: string ) => {
    const prod: Product = products[product_id - 1];
    const newOrder: Order = {
      name: prod.name,
      image_url: prod.image_url,
      price: prod.price,
      color: color,
      quantity: quantity,
      product_id: prod.product_id,
      created_at: new Date().toLocaleString()
    };

    let prevMap = new Map(cartItems);

    if (prevMap.get(product_id) === undefined) {
      prevMap.set(product_id, [newOrder]);
    } else {
      let prevList = prevMap.get(product_id);
      prevList?.push(newOrder);
      prevMap.set(product_id, prevList!);
    }

    setCartItems(prevMap);
  };

  const contextValue = { cartItems, addToCart, removeFromCart, addManyToCart };


  return <ShopContext.Provider value={contextValue}>
    {children}
  </ShopContext.Provider>;
};
