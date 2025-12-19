import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext"; // only if you have auth

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext) || {}; // optional if auth exists

  const [showDropdown, setShowDropdown] = useState(false);

  // first letter of user name
  const profileLetter = user ? user.name.charAt(0).toUpperCase() : "";

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        FurniCraft
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
       <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart" className="cart-icon">
            Cart🛒
            {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </Link>
        </li>
      </ul>

      <div className="nav-right">
        {/* Cart Icon */}

        {/* If logged in → show profile */}
        {user ? (
          <div className="profile-section">
            <div
              className="profile-circle"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {profileLetter}
            </div>

            {showDropdown && (
              <div className="profile-dropdown">
                <p>{user.email}</p>
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="btn-outline">
              Login
            </Link>
            <Link to="/signup" className="btn-fill">
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
