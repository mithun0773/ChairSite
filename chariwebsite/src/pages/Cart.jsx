import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, updateQty, removeItem } = useContext(CartContext);

  // TOTAL PRICE
  const total = cart.reduce((sum, item) => {
    const price = item.finalPrice || 0;
    const qty = item.quantity || 1;
    return sum + price * qty;
  }, 0);

  if (cart.length === 0)
    return (
      <div className="empty-cart">
        <h2>Your Cart is Empty</h2>
        <p>Add items to continue shopping.</p>
      </div>
    );

  return (
    <div className="cart-page">
      {/* LEFT SIDE — ITEMS */}
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-card" key={item.key}>
            {/* IMAGE */}
            <img src={item.image} alt={item.title} className="cart-img" />

            {/* ITEM DETAILS */}
            <div className="cart-info">
              <h2 className="cart-title">{item.title}</h2>

              <p className="cart-meta">
                {item.options?.material || "Material N/A"} •{" "}
                {item.options?.color || "Color N/A"}
              </p>

              {/* ADD-ONS */}
              {item.options?.addons?.length > 0 && (
                <p className="cart-addons">
                  Add-ons: {item.options.addons.map((a) => a.key).join(", ")}
                </p>
              )}

              {/* PRICE */}
              <p className="cart-price">
                ₹{item.finalPrice.toLocaleString("en-IN")}
              </p>

              {/* QUANTITY */}
              <div className="qty-box">
                <button
                  onClick={() =>
                    updateQty(item.key, Math.max(1, item.quantity - 1))
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => updateQty(item.key, item.quantity + 1)}>
                  +
                </button>
              </div>

              {/* REMOVE */}
              <button
                className="remove-btn"
                onClick={() => removeItem(item.key)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE — SUMMARY */}
      <div className="cart-summary">
        <h2>Order Summary</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>

        <div className="summary-row">
          <span>Delivery</span>
          <span>FREE</span>
        </div>

        <div className="summary-total">
          <span>Total</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>

        <Link to="/checkout">
          <button className="checkout-btn">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
