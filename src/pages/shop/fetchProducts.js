import React, { useEffect, useState } from "react";

export const fetchProducts = () => {
  const [products, setProducts] = useState([]);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return products;
};
