import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";

import "./SignUp.css";
import { doc, setDoc } from "firebase/firestore";
export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setDoc(doc(db, "users", email), {
          cartItems: [],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSignUp} className="signin">
      <h2 className="title">Create Account</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="signinbtn">Sign Up</button>
    </form>
  );
};
