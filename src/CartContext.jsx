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
    // console.log(authUser);
  };

  // const userCart = doc(db, "users", authUser.email);

  // const saveItem = async () => {
  //   await updateDoc(userCart, {
  //     items: items,
  //   });
  // };

  // useEffect(() => {
  //   const readData = onSnapshot(doc(db, "users", authUser), (doc) => {
  //     console.log(doc.data());
  //   });
  // }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        totalIt,
        itQty,
        setItems,
        setTotalIt,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
