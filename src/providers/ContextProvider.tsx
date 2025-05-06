import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, Product } from "../types";
import { randomUUID } from "expo-crypto";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateItemQuantity: (itemId: string, amount: -1 | 1) => void;
};

export const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateItemQuantity: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem["size"]) => {
  const existingItem = items.find((item) => item.product === product && item.size === size);

  if(existingItem){
    updateItemQuantity(existingItem.id, 1);
    return
  }

    const newCartItem: CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };

    setItems([newCartItem, ...items]);
  };

  const updateItemQuantity = (itemId: string, amount: -1 | 1) => {
    const updatedItem = items.map((item) =>
      item.id !== itemId ? item : { ...item, quantity: item.quantity + amount }
    ).filter((item) => item.quantity > 0);
    setItems(updatedItem)
  };
  return (
    <CartContext.Provider value={{ items, addItem, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
