import React, { useEffect, useState } from "react";
import api from "../api"; // your axios instance
import { Link } from "react-router-dom";

const CATEGORY_LABELS = [
  "All",
  "chairs",
  "sofas",
  "tables",
  "beds",
  "cabinets",
  "wardrobes",
  "decor",
  "outdoor",
  "lighting",
  "storage",
];

const formatPrice = (v) =>
  typeof v === "number" ? v.toLocaleString("en-IN") : v;

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // 1) Fetch all products once
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data || []);
      } catch (err) {
        console.error("Error fetching products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 2) Filtering + ordering logic
  const normalizedSearch = search.toLowerCase().trim();

  const filtered = products.filter((p) => {
    if (!normalizedSearch) return true;
    const str = (
      (p.title || "") +
      " " +
      (p.description || "") +
      " " +
      (p.category || "") +
      " " +
      (p.options?.materials?.join(" ") || "") +
      " " +
      (p.options?.colors?.join(" ") || "")
    ).toLowerCase();
    return str.includes(normalizedSearch);
  });

  let ordered = filtered;

  if (selectedCategory !== "All") {
    ordered = [
      ...filtered.filter((p) => p.category === selectedCategory),
      ...filtered.filter((p) => p.category !== selectedCategory),
    ];
  }

  if (loading) {
    return (
      <div className="shop-loading">
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="shop-page">
      {/* TOP BAR: Search + dropdown */}
      <div className="shop-top-bar">
        <div className="shop-search">
          <input
            type="text"
            placeholder="Search chairs, sofas, tables, materials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="shop-dropdown">
          <label>Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {CATEGORY_LABELS.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "All"
                  ? "All Categories"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* CATEGORY PILLS */}
      <div className="shop-category-pills">
        {CATEGORY_LABELS.map((cat) => (
          <button
            key={cat}
            className={`pill ${selectedCategory === cat ? "pill-active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat === "All" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="shop-grid">
        {ordered.length === 0 ? (
          <p className="no-results">No products found.</p>
        ) : (
          ordered.map((p) => (
            <div className="shop-card" key={p._id}>
              <div className="shop-card-img-wrapper">
                <img
                  src={p.images?.[0] || "/fallback.jpg"}
                  alt={p.title}
                  loading="lazy"
                />
              </div>

              <div className="shop-card-body">
                <p className="shop-card-category">
                  {p.category?.charAt(0).toUpperCase() + p.category?.slice(1)}
                </p>
                <h3 className="shop-card-title">{p.title}</h3>
                <p className="shop-card-price">
                  ₹{formatPrice(p.basePrice || 0)}
                </p>

                <div className="shop-card-actions">
                  <Link to={`/product/${p.slug}`} className="details-btn">
                    View Details
                  </Link>
                  {/* If you want "Buy now" or "Add to cart" here later, we add it */}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
