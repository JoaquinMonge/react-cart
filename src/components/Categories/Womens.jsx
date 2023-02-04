import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../CartContext";
import { fetchProducts } from "../../pages/shop/fetchProducts";
import { fetchCategories } from "./fetchCategories";

import "./Categories.css";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import UserContext from "../../UserContext";

export const Womens = () => {
  const { items, itQty, add } = useContext(CartContext);
  const { authUser } = useContext(UserContext);

  const products = fetchCategories("women's clothing");

  const addItem = async (id) => {
    if (authUser) {
      await add(id, products);

      const saveCart = doc(db, "users", authUser?.email);
      updateDoc(saveCart, {
        cartItems: items,
      });
    } else {
      alert("Please login to save an item");
    }
  };

  return (
    <div className="products">
      {products.map((it) => (
        <div key={it.id} className="card">
          <p>{it.title}</p>

          <p className="cat">{it.category}</p>
          <img src={it.image} alt="" />
          <p className="price">${it.price}</p>

          <button onClick={() => addItem(it.id)} className="addCart">
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};
