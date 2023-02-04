import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "./firebase";
import UserContext from "./UserContext";

const CartContext = createContext(null);

export function CartProvider(props) {
  const { authUser } = createContext(UserContext);
  const [items, setItems] = useState([]);
  const [totalIt, setTotalIt] = useState(0);

  const itQty = (qty) => {
    setTotalIt(qty);
  };

  const add = (id, products) => {
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
    <CartContext.Provider
      value={{
        items,
        totalIt,
        itQty,
        setItems,
        setTotalIt,
        add,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
