import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass, ShoppingCart } from "phosphor-react";
import "./Navbar.css";
import CartContext from "../CartContext";
import { AiOutlineSearch } from "react-icons/ai";
import UserContext from "../UserContext";

export const Navbar = () => {
  const { items, totalIt } = useContext(CartContext);
  const { authUser, handleSignOut } = useContext(UserContext);

  return (
    <div className="navbar links">
      <div className="title">
        <Link to="/"> Online Shop</Link>
      </div>
      <form>
        <input
          className="search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="searchBut" type="submit">
          Search
        </button>
      </form>

      {authUser ? (
        <p onClick={handleSignOut} className="signOut">
          Sign Out
        </p>
      ) : (
        <Link to="/signin">
          <p className="signIn">Sign In</p>
        </Link>
      )}

      <div className="navCart">
        <span>({totalIt})</span>
        <Link to="/cart">
          <ShoppingCart className="shopping" />
        </Link>
      </div>
    </div>
  );
};
