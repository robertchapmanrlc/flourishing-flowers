import { createContext, useState } from "react";
import { Product } from "../../types";
import { products } from "../../products";

interface ShopContextType {
  cartItems: Product[];
  addToCart: (product_id: number) => void;
  removeFromCart: (product_id: number) => void;
}

const initialCart: Product[] = [];

export const ShopContext = createContext<ShopContextType>({
  cartItems: initialCart,
  addToCart: (product_id: number) => {},
  removeFromCart: (product_id: number) => {},
});

interface ShopContextProviderProps {
  children: React.ReactNode;
}

const cart: Product[] = []; 

export const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const [cartItems, setCartItems] = useState(cart);

  const addToCart = (product_id: number) => {
    const newProd: Product = products[product_id];
    setCartItems((prevItems) => [...prevItems, newProd ]);
  };

  const removeFromCart = (product_id: number) => {
    let newItems = [...cartItems];
    newItems = newItems.filter((item) => item.product_id !== product_id);
    setCartItems(newItems);
  }

  const contextValue = { cartItems, addToCart, removeFromCart };

  return <ShopContext.Provider value={contextValue}>
    {children}
  </ShopContext.Provider>;
};
