import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { BuyNowContext } from "../context/BuyNowContext";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const { setBuyNowItem } = useContext(BuyNowContext);

  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [qty, setQty] = useState(1);

  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${slug}`).then((res) => {
      setProduct(res.data);
      setMainImage(res.data.images?.[0] || "");
      if (res.data.options?.colors?.length)
        setColor(res.data.options.colors[0]);
      if (res.data.options?.materials?.length)
        setMaterial(res.data.options.materials[0]);
    });
  }, [slug]);

  if (!product) return <div className="loading">Loading...</div>;

  // Price Calculation
  const basePrice = product.basePrice || 0;
  const addonsPrice = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const finalPrice = basePrice + addonsPrice;

  const toggleAddOn = (addon) => {
    const exists = selectedAddOns.find((a) => a.key === addon.key);
    if (exists) {
      setSelectedAddOns(selectedAddOns.filter((a) => a.key !== addon.key));
    } else {
      setSelectedAddOns([...selectedAddOns, addon]);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, qty, {
      color,
      material,
      addons: selectedAddOns,
      finalPrice,
    });
    alert("Added to cart!");
  };

  return (
    <div className="product-page">
      {/* LEFT SIDE: IMAGE + THUMBS */}
      <div className="product-gallery">
        <img className="main-img" src={mainImage} alt={product.title} />

        <div className="thumbs">
          {product.images?.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`thumb ${mainImage === img ? "active" : ""}`}
              onClick={() => setMainImage(img)}
              alt="thumb"
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: DETAILS */}
      <div className="product-details">
        <h1 className="product-title">{product.title}</h1>

        <p className="product-category">{product.category}</p>

        <div className="price-box">
          <h2>₹{finalPrice.toLocaleString("en-IN")}</h2>
          {addonsPrice > 0 && (
            <p className="old-price">₹{basePrice.toLocaleString("en-IN")}</p>
          )}
        </div>

        <p className="desc">{product.description}</p>

        {/* OPTIONS */}
        <div className="options-box">
          {/* Colors */}
          {product.options?.colors?.length > 0 && (
            <div className="option-section">
              <p>Color:</p>
              <div className="option-list">
                {product.options.colors.map((c) => (
                  <button
                    key={c}
                    className={`opt-btn ${color === c ? "selected" : ""}`}
                    onClick={() => setColor(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Materials */}
          {product.options?.materials?.length > 0 && (
            <div className="option-section">
              <p>Material:</p>
              <div className="option-list">
                {product.options.materials.map((m) => (
                  <button
                    key={m}
                    className={`opt-btn ${material === m ? "selected" : ""}`}
                    onClick={() => setMaterial(m)}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add-on items */}
          {product.options?.addOns?.length > 0 && (
            <div className="option-section">
              <p>Add-ons:</p>
              <div className="addon-list">
                {product.options.addOns.map((a) => (
                  <label key={a.key} className="addon-item">
                    <input
                      type="checkbox"
                      checked={selectedAddOns.some((x) => x.key === a.key)}
                      onChange={() => toggleAddOn(a)}
                    />
                    {a.key} (+₹{a.price})
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quantity */}
        <div className="qty-box">
          <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button
          className="buy-now-btn"
          onClick={() => {
            setBuyNowItem({
              product,
              quantity: qty,
              selected: {
                color,
                material,
                addons: selectedAddOns,
                finalPrice,
              },
            });
            navigate("/checkout");
          }}
        >
          Buy Now
        </button>

        <p className="note">Free delivery & 7-day return policy</p>
      </div>
    </div>
  );
};

export default Product;
