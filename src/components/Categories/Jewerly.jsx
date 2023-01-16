import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../CartContext";
import { fetchProducts } from "../../pages/shop/fetchProducts";
import { fetchCategories } from "./fetchCategories";

import "./Categories.css";

export const Jewelery = () => {
  const products = fetchCategories("jewelery");
  const { items, itQty } = useContext(CartContext);

  const add = (id) => {
    // addToCart(id, title, price, image, quantity);

    const check_index = items.findIndex((item) => item.id === id);
    if (check_index !== -1) {
      items[check_index].quantity++;

      console.log("Quantity updated", items);
    } else {
      items.push({ ...products.find((p) => p.id === id), quantity: 1 });
      console.log("The product has been added to cart:", items);
    }

    itQty(
      items.reduce(function (acc, obj) {
        return acc + obj.quantity;
      }, 0)
    );
  };

  return (
    <div className="products">
      {products.map((it) => (
        <div key={it.id} className="card">
          <p>{it.title}</p>

          <p className="cat">{it.category}</p>
          <img src={it.image} alt="" />
          <p className="price">${it.price}</p>

          <button onClick={() => add(it.id)} className="addCart">
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};