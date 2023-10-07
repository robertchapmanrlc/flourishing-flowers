import { createContext, useState } from "react";
import { Product } from "../../types";
import { products } from "../../products";

interface ShopContextType {
  cartItems: Product[];
  addToCart: (product_id: number) => void;
  addManyToCart: (product_id: number, quantity: number) => void;
  removeFromCart: (product_id: number) => void;
}

const initialCart: Product[] = [];

export const ShopContext = createContext<ShopContextType>({
  cartItems: initialCart,
  addToCart: () => {},
  removeFromCart: () => { },
  addManyToCart: () => {}
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

  const addManyToCart = (product_id: number, quantity: number) => {
    let newItemCopies: Product[] = [];
    const newProd: Product = products[product_id];
    for (let i = 0; i < quantity; i += 1) {
      newItemCopies.push(newProd);
    }
    setCartItems((prevItems) => [...prevItems, ...newItemCopies]);
  };

  const contextValue = { cartItems, addToCart, removeFromCart, addManyToCart };

  console.log(cartItems); 

  return <ShopContext.Provider value={contextValue}>
    {children}
  </ShopContext.Provider>;
};
