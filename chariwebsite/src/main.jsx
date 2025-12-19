import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthProvider } from './context/AuthContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { BuyNowProvider } from './context/BuyNowContext.jsx';

AOS.init();

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <BuyNowProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
    </BuyNowProvider>
  </CartProvider>
);
