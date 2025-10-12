import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === pizza.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prevCart, { ...pizza, count: 1 }];
    });
  };

  const updateCount = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, count: Math.max(item.count + delta, 0) }
            : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.count, 0),
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCount, total }}>
      {children}
    </CartContext.Provider>
  );
};