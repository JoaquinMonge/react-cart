import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Categories = () => {
  return (
    <div className="categories">
      <div className="dropdown">
        <span>Categories</span>
        <div className="dropdown-content">
          <Link to="/">
            <p>All Categories</p>
          </Link>
          <Link to="/mens">
            <p>Mens</p>
          </Link>
          <Link to="/womens">
            <p>Womens</p>
          </Link>
          <Link to="/jewelery">
            <p>Jewerly</p>
          </Link>
          <Link to="/electronics">
            <p>Electronics</p>
          </Link>
        </div>
      </div>
      <p>Todays deals</p>
      <p>Customer service</p>
      <p>Gift Cards</p>
    </div>
  );
};
