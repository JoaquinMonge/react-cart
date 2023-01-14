import React, { useEffect, useState } from "react";

export const fetchCategories = (category) => {
  const [products, setProducts] = useState([]);
  const url = `https://fakestoreapi.com/products/category/${category}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return products;
};
