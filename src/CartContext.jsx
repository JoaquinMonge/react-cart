import { createContext, useEffect, useState } from "react";
import { fetchProducts } from "./pages/shop/fetchProducts";
import { Products } from "./pages/shop/Products";

const CartContext = createContext(null);

export function CartProvider(props) {
  const products = fetchProducts();
  const [items, setItems] = useState([]);
  const [totalIt, setTotalIt] = useState(0);

  const itQty = (qty) => {
    setTotalIt(qty);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        totalIt,
        itQty,
        setItems,
        setTotalIt
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
