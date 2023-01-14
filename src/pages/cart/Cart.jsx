import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../CartContext";
import "./Cart.css";

export const Cart = () => {
  const { items, itQty, setItems, totalIt, setTotalIt } =
    useContext(CartContext);

  const [getSub, setGetSub] = useState(() => {
    const result = items.reduce(function (acc, obj) {
      return acc + obj.price * obj.quantity;
    }, 0);
    return result;
  });

  items.map((it) => {
    if (it.quantity === 0) {
      setItems(items.filter((it) => it.quantity !== 0));
    }
  });

  const result = items.reduce(function (acc, obj) {
    return acc + obj.quantity;
  }, 0);
  setTotalIt(result);

  useEffect(() => {
    const subtotal = items.reduce(function (acc, obj) {
      return acc + obj.price * obj.quantity;
    }, 0);
    setGetSub(subtotal);
  }, [setGetSub, items]);


  const [qty, setQty] = useState();
  // const [totalIt, setTotalIt] = useState(() => {
  //   const result = items.reduce(function (acc, obj) {
  //     return acc + obj.quantity;
  //   }, 0);

  //   return result;
  // });

  const addItem = (id) => {
    const check_index = items.findIndex((item) => item.id === id);
    if (check_index !== -1) {
      setQty(items[check_index].quantity++);
    }
    const result = items.reduce(function (acc, obj) {
      return acc + obj.quantity;
    }, 0);
    setTotalIt(result);

    itQty(result);

    const subtotal = items.reduce(function (acc, obj) {
      return acc + obj.price * obj.quantity;
    }, 0);
    setGetSub(subtotal);
  };

  const removeItem = (id) => {
    //
    const check_index = items.findIndex((item) => item.id === id);

    if (items[check_index]?.quantity !== 0) {
      setQty(items[check_index].quantity--);

      itQty(result);
    } else if (result < 0) {
      return;
    }

    const subtotal = items.reduce(function (acc, obj) {
      return acc + obj.price * obj.quantity;
    }, 0);
    setGetSub(subtotal);
  };
  const deleteItem = (id) => {
    items.map((it) => {
      if (it.id === id) {
        setItems(items.filter((it) => it.id !== id));
      }
    });
  };

  return (
    <div className="container">
      <div className="productsCart">
        <h1>Shopping Cart</h1>
        {items?.map((item) => (
          <div key={item.id}>
            <div className="items">
              <div>
                <img src={item.image} alt="" />
              </div>
              <div className="others">
                <h2>{item.title}</h2>

                <p>${item.price}</p>
                <div>
                  <div className="buttons">
                    <button
                      className="buttAction"
                      onClick={() => removeItem(item.id)}
                    >
                      -
                    </button>
                    <p>Quantity: {item.quantity}</p>
                    <button
                      className="buttAction"
                      onClick={() => addItem(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="otherButtons"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
          </div>
        ))}
      </div>

      <div className="total">
        <h1>
          Subtotal({totalIt} items): ${getSub}
        </h1>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
};
