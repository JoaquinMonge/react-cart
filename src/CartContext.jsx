import { createContext, useEffect, useState } from "react";
import { fetchProducts } from "./pages/shop/fetchProducts";
import { Products } from "./pages/shop/Products";

const CartContext = createContext(null);

export function CartProvider(props) {
  const products = fetchProducts();
  const [items, setItems] = useState([]);
  const [totalIt, setTotalIt] = useState();
  const [getSub, setGetSub] = useState();

  const addToCart = (id, title, price, image) => {
    setItems((prevState) => [...prevState, { id, title, price, image }]);
  };

  // const getTotalItems = (result) => {
  //   setTotalIt(result);
  // };
  // const getSubTotal = (sub) => {
  //   setGetSub(sub);
  // };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,

        // getTotalItems,
        // getSubTotal,

        // totalIt,
        // getSub,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
