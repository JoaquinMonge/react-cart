import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth, db } from "../firebase";
import "./Signin.css";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import CartContext from "../CartContext";
import { setLogLevel } from "firebase/app";
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const { authUser } = useContext(UserContext);

  const { setItems, items, itQty, setTotalIt } = useContext(CartContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential.user.email);
        onSnapshot(doc(db, "users", userCredential.user.email), (doc) => {
          const data = doc.data().cartItems;
          // data.map((it) => console.log(it.quantity));
          const result = data.reduce(function (acc, obj) {
            return acc + obj.quantity;
          }, 0);
          // console.log(result);
          itQty(result);
          setItems(data);
        });
      })
      .catch((error) => {
        setError(true);
      });

    setTimeout(() => {
      setError(false);
    }, 4000);

    setEmail("");
    setPassword("");
  };
  return (
    <>
      {authUser ? (
        <h2 className="user">Signed in as {authUser.email}</h2>
      ) : (
        <form onSubmit={handleSignIn} className="signin">
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error ? <p className="error">Incorrect user/password</p> : ""}
          <Link to="/signup">
            <p className="create">Create account</p>
          </Link>
          <button className="signinbtn">Sign In</button>
        </form>
      )}
    </>
  );
};
