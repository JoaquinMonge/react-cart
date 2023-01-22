import {
  doc,
  getDoc,
  getDocFromCache,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useContext, useState } from "react";
import CartContext from "../../CartContext";
import { db } from "../../firebase";
import UserContext from "../../UserContext";
import { fetchProducts } from "./fetchProducts";

export const Products = (props) => {
  const { id, title, price, category, image } = props.data;
  const products = fetchProducts();

  const { items, itQty, saveItem } = useContext(CartContext);
  const { authUser } = useContext(UserContext);

  const [carIt, setCartIt] = useState();

  const add = () => {
    // addToCart(id, title, price, image, quantity);
    // saveItem;

    console.log(authUser.email);

    // console.log(items);

    const check_index = items?.findIndex((item) => item.id === id);

    if (authUser) {
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
    } else {
      alert("Please log in to save items to the cart");
    }
    const saveCart = doc(db, "users", authUser.email);
    updateDoc(saveCart, {
      cartItems: items,
    });
  };

  return (
    <>
      <div className="card">
        <p>{title}</p>

        <p className="cat">{category}</p>
        <img src={image} alt="" />
        <p className="price">${price}</p>

        <button className="addCart" onClick={add}>
          Add To Cart
        </button>
      </div>
    </>
  );
};
