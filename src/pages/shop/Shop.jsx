import { useState } from "react";
import { fetchProducts } from "./fetchProducts";
import { Products } from "./Products";

import "./shop.css";

export const Shop = () => {
  const products = fetchProducts();
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div className="shop">
      <div className="products">
        {isLoading ? (
          <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
        ) : (
          products.map((product) => (
            <Products key={product.id} data={product} />
          ))
        )}
      </div>
    </div>
  );
};
