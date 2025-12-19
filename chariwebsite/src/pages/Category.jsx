import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Category = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/category/${category}`)
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div className="category-page">
      <h1 className="page-title">{category.toUpperCase()} Collection</h1>

      <div className="products-grid">
        {items.length === 0 && (
          <p className="empty-text">No products found in this category.</p>
        )}

        {items.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Category;
