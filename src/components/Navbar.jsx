import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
import CartContext from "../CartContext";

export const Navbar = () => {
  const { items } = useContext(CartContext);
  return (
    <div className="navbar links">
      <div className="title">
        <Link to="/">Shop</Link>
      </div>
      <div>
        <Link to="/cart">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
};
