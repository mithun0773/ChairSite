import { createContext, useState } from "react";

export const BuyNowContext = createContext();

export const BuyNowProvider = ({ children }) => {
  const [buyNowItem, setBuyNowItem] = useState(null);

  return (
    <BuyNowContext.Provider value={{ buyNowItem, setBuyNowItem }}>
      {children}
    </BuyNowContext.Provider>
  );
};
