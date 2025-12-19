import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.slug}`} className="product-card">
  <div className="product-img-wrapper">
    <img src={product.images[0]} alt={product.title} />
  </div>

  <div className="product-info">
    <h3 className="product-title">{product.title}</h3>
    <p className="product-category">{product.category}</p>

    <p className="product-price">
      ₹{product.basePrice.toLocaleString("en-IN")}

      
    </p>
    
    <button className="view-btn">View Details</button>
      </div>
    </Link>
  );
};

export default ProductCard;
