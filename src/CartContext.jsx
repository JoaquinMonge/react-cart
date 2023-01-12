import { createContext, useEffect, useState } from "react";
import { fetchProducts } from "./pages/shop/fetchProducts";
import { Products } from "./pages/shop/Products";

const CartContext = createContext(null);
let quantity = 1;

export function CartProvider(props) {
  const products = fetchProducts();
  const [items, setItems] = useState([]);
  const [totalIt, setTotalIt] = useState();
  const [getSub, setGetSub] = useState();

  const addToCart = (id, title, price, image, addQuantity) => {
    setItems((prevState) => [
      ...prevState,
      { id, title, price, image, addQuantity },
    ]);

    // const check_index = items.findIndex((item) => item.id === id);
    // if (check_index !== -1) {
    //   console.log(items[check_index].quantity++);
    //   console.log("Quantity updated", items);
    // } else {
    //   items.push({ ...products.find((p) => p.id === id), quantity: 1 });
    //   console.log("The product has been added to cart:", items);
    // }
  };

  const getTotalItems = (result) => {
    setTotalIt(result);
  };
  const getSubTotal = (sub) => {
    setGetSub(sub);
  };

  const updateQuantity = (id) => {};

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        quantity,
        getTotalItems,
        getSubTotal,
        updateQuantity,
        totalIt,
        getSub,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
