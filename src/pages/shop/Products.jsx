import { useContext, useState } from "react";
import CartContext from "../../CartContext";
import { fetchProducts } from "./fetchProducts";

export const Products = (props) => {
  const [ID, setID] = useState([]);
  const { id, title, price, category, image } = props.data;
  const products = fetchProducts();

  const { addToCart, items, quantity, getTotalItems, getSubTotal } =
    useContext(CartContext);

  const add = () => {
    // addToCart(id, title, price, image, quantity);

    const check_index = items.findIndex((item) => item.id === id);
    if (check_index !== -1) {
      items[check_index].quantity++;

      console.log("Quantity updated", items);
    } else {
      items.push({ ...products.find((p) => p.id === id), quantity: 1 });
      console.log("The product has been added to cart:", items);
    }

    // const result = items.reduce(function (acc, obj) {
    //   return acc + obj.quantity;
    // }, 0);
    // getTotalItems(result);

    // const subtotal = items.reduce(function (acc, obj) {
    //   return acc + obj.price * obj.quantity;
    // }, 0);
    // getSubTotal(subtotal);
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
