import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { BuyNowContext } from "../context/BuyNowContext";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
const { buyNowItem } = useContext(BuyNowContext);

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [payment, setPayment] = useState("cod"); // default: Cash on Delivery

  const subtotal = cart.reduce(
    (sum, item) => sum + item.finalPrice * item.quantity,
    0
  );

  const delivery = subtotal > 2999 ? 0 : 99;
  const total = subtotal + delivery;

  const handleOrder = () => {
    if (
      !address.fullName ||
      !address.phone ||
      !address.street ||
      !address.city ||
      !address.state ||
      !address.pincode
    ) {
      alert("Please fill all address fields!");
      return;
    }

    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <div className="checkout-page">
      {/* LEFT: ADDRESS & PAYMENT */}
      <div className="checkout-left">
        <h2>Shipping Details</h2>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={address.fullName}
            onChange={(e) =>
              setAddress({ ...address, fullName: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            value={address.phone}
            onChange={(e) => setAddress({ ...address, phone: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Street Address</label>
          <input
            type="text"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              value={address.state}
              onChange={(e) =>
                setAddress({ ...address, state: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            value={address.pincode}
            onChange={(e) =>
              setAddress({ ...address, pincode: e.target.value })
            }
          />
        </div>

        <h2 style={{ marginTop: "30px" }}>Payment Method</h2>

        <div className="payment-options">
          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              checked={payment === "cod"}
              onChange={() => setPayment("cod")}
            />
            Cash on Delivery (COD)
          </label>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              checked={payment === "card"}
              onChange={() => setPayment("card")}
            />
            Credit / Debit Card
          </label>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              checked={payment === "upi"}
              onChange={() => setPayment("upi")}
            />
            UPI (GPay / PhonePe / Paytm)
          </label>
        </div>

        <button className="place-order-btn" onClick={handleOrder}>
          Place Order
        </button>
      </div>

      {/* RIGHT: ORDER SUMMARY */}
      <div className="checkout-summary">
        <h2>Order Summary</h2>

        {cart.map((item) => (
          <div className="checkout-item" key={item.key}>
            <img src={item.image} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>
                Qty: {item.quantity} • ₹
                {item.finalPrice.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        ))}

        <hr />

        <div className="summary-line">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString("en-IN")}</span>
        </div>

        <div className="summary-line">
          <span>Delivery</span>
          <span>{delivery === 0 ? "FREE" : `₹${delivery}`}</span>
        </div>

        <div className="summary-total">
          <strong>Total</strong>
          <strong>₹{total.toLocaleString("en-IN")}</strong>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
