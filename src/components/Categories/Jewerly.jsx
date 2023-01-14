import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../CartContext";
import { fetchProducts } from "../../pages/shop/fetchProducts";
import { fetchCategories } from "./fetchCategories";

import "./Categories.css";

export const Jewelery = () => {
  const { items } = useContext(CartContext);

  const products = fetchCategories("jewelery");

  return (
    <div className="products">
      {products.map((it) => (
        <div className="card">
          <p>{it.title}</p>

          <p className="cat">{it.category}</p>
          <img src={it.image} alt="" />
          <p className="price">${it.price}</p>

          <button className="addCart">Add To Cart</button>
        </div>
      ))}
    </div>
  );
};
