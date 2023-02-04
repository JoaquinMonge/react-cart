import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useContext, useEffect } from "react";
import CartContext from "../../CartContext";
import { db } from "../../firebase";
import UserContext from "../../UserContext";
import { fetchProducts } from "./fetchProducts";

export const Products = (props) => {
  const { id, title, price, category, image } = props.data;
  const products = fetchProducts();

  const { items, itQty, setItems, add } = useContext(CartContext);
  const { authUser } = useContext(UserContext);

  useEffect(() => {
    if (authUser) {
      onSnapshot(doc(db, "users", authUser.email), (doc) => {
        const data = doc.data().cartItems;
        const result = data.reduce(function (acc, obj) {
          return acc + obj.quantity;
        }, 0);
        itQty(result);
        setItems(data);
      });
    }
  }, [authUser]);

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
    <>
      <div className="card">
        <p>{title}</p>

        <p className="cat">{category}</p>
        <img src={image} alt="" />
        <p className="price">${price}</p>

        <button className="addCart" onClick={() => addItem(id)}>
          Add To Cart
        </button>
      </div>
    </>
  );
};
