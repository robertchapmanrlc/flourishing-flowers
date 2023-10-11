import { createContext, useLayoutEffect, useState } from "react";
import { Order, Product } from "../../types";
import { products } from "../../products";

interface ShopContextType {
  cartItems: Map<number, Order[]>;
  addToCart: (product_id: number) => void;
  addManyToCart: (product_id: number, quantity: number, color: string) => void;
  removeFromCart: (product_id: number, created_at: string) => void;
  changeQuantity: (product_id: number, created_at: string, newQuantity: number) => void;
  emptyCart: () => void;
  length: number;
}

const initialCart: Map<number, Order[]> = new Map();

export const ShopContext = createContext<ShopContextType>({
  cartItems: initialCart,
  addToCart: () => {},
  removeFromCart: () => { },
  addManyToCart: () => { },
  changeQuantity: () => { },
  emptyCart: () => { },
  length: 0
});

interface ShopContextProviderProps {
  children: React.ReactNode;
}

export const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const [cartItems, setCartItems] = useState(initialCart);
  const [length, setLength] = useState(0);


  useLayoutEffect(() => {
    if (localStorage.getItem('cartItems')) {
      const localMap = localStorage.getItem("cartItems");
      const deserializedObject = JSON.parse(localMap!);
    
      const deserializedMap: Map<string, Order[]> = new Map(Object.entries(deserializedObject));
      const cartItemMap: Map<number, Order[]> = new Map();
      let len = 0;

      for (const key of deserializedMap.keys()) {
        cartItemMap.set(Number(key), deserializedMap.get(key)!);
        len += deserializedMap.get(key)?.length!;
      }

      setCartItems(cartItemMap);
      setLength(len);
    }
  },[]);

  const addToCart = (product_id: number) => {
    const prod: Product = products[product_id - 1];
    const newOrder: Order = {
      name: prod.name,
      image_url: prod.image_url,
      price: prod.price,
      color: prod.colors[0].name,
      quantity: 1,
      category: prod.category,
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

    const mapObj = Object.fromEntries(prevMap);
    const serializedMap = JSON.stringify(mapObj);
    localStorage.setItem("cartItems", serializedMap);
    setCartItems(prevMap);
    setLength((prevLength) => prevLength + 1);
  };

  const removeFromCart = (product_id: number, created_at: string) => {
    let prevMap = new Map(cartItems);
    let order = prevMap.get(product_id);

    order = order?.filter((item) => item.created_at !== created_at);
    prevMap.set(product_id, order!);

    const mapObj = Object.fromEntries(prevMap);
    const serializedMap = JSON.stringify(mapObj);
    localStorage.setItem("cartItems", serializedMap);
    setCartItems(prevMap);
    setLength((prevLength) => prevLength - 1);

  };

  const emptyCart = () => {
    localStorage.setItem("cartItems", JSON.stringify({}));
    setCartItems(new Map());
    setLength(0);
  }

  const addManyToCart = (product_id: number, quantity: number, color: string ) => {
    const prod: Product = products[product_id - 1];
    const newOrder: Order = {
      name: prod.name,
      image_url: prod.image_url,
      price: prod.price,
      color: color,
      category: prod.category,
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

    const mapObj = Object.fromEntries(prevMap);
    const serializedMap = JSON.stringify(mapObj);
    localStorage.setItem("cartItems", serializedMap);
    setCartItems(prevMap);
    setLength((prevLength) => prevLength + 1);

  };

  const changeQuantity = (product_id: number, created_at: string, newQuantity: number) => {
    let prevMap = new Map(cartItems);
    prevMap.get(product_id)!.filter((item) => item.created_at === created_at)[0].quantity = newQuantity;
    const mapObj = Object.fromEntries(prevMap);
    const serializedMap = JSON.stringify(mapObj);
    localStorage.setItem("cartItems", serializedMap);
    setCartItems(prevMap);
  };

  const contextValue = { cartItems, addToCart, removeFromCart, emptyCart, addManyToCart, changeQuantity, length };


  return <ShopContext.Provider value={contextValue}>
    {children}
  </ShopContext.Provider>;
};
