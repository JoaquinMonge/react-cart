import React, { useContext } from "react";
import CartContext from "../../CartContext";
import "./Cart.css";

export const Cart = () => {
  const { items, totalIt, getSub } = useContext(CartContext);

  return (
    <div className="container">
      <div className="productsCart">
        <h1>Shopping Cart</h1>
        {items.map((item) => (
          <div>
            <div key={item.id} className="items">
              <div>
                <img src={item.image} alt="" />
              </div>
              <div className="others">
                <h2>{item.title}</h2>

                <p>${item.price}</p>

                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
            <hr></hr>
          </div>
        ))}
      </div>

      <div className="total">
        <h1>
          Subtotal({totalIt} items): ${getSub.toFixed(2)}
        </h1>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
};
