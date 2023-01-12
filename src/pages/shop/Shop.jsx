import { useState } from "react";
import { fetchProducts } from "./fetchProducts";
import { Products } from "./Products";

import "./shop.css";

export const Shop = () => {
  const products = fetchProducts();
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div className="shop">
      <div className="products">
        {isLoading ? (
          <div class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
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
