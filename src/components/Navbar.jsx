import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
import CartContext from "../CartContext";

export const Navbar = () => {
  const { items, totalIt } = useContext(CartContext);

  return (
    <div className="navbar links">
      <div className="title">
        <Link to="/">Shop</Link>
      </div>
      <div className="navCart">
        <span>({totalIt})</span>
        <Link to="/cart">
          <ShoppingCart className="shopping" />
        </Link>
      </div>
    </div>
  );
};
