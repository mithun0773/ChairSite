import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD TO CART (corrected)
  const addToCart = (product, qty = 1, selected = {}) => {
    const key = product._id + JSON.stringify(selected);

    const newItem = {
      key,
      id: product._id,
      slug: product.slug,
      title: product.title,
      image: product.images?.[0] || "",
      quantity: qty,
      basePrice: product.basePrice,
      finalPrice: selected.finalPrice || product.basePrice, // FIXED
      options: selected, // FIXED FORMAT
    };

    setCart((prev) => {
      const existing = prev.find((p) => p.key === key);
      if (existing) {
        return prev.map((p) =>
          p.key === key ? { ...p, quantity: p.quantity + qty } : p
        );
      }
      return [...prev, newItem];
    });
  };

  // UPDATE QUANTITY
  const updateQty = (key, qty) => {
    setCart((prev) =>
      prev.map((item) => (item.key === key ? { ...item, quantity: qty } : item))
    );
  };

  // REMOVE ITEM
  const removeItem = (key) => {
    setCart((prev) => prev.filter((p) => p.key !== key));
  };

  // CLEAR ALL
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQty, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
