import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";

import "./SignUp.css";
import { doc, setDoc } from "firebase/firestore";
import UserContext from "../UserContext";
import { Link } from "react-router-dom";
export const SignUp = () => {
  const { authUser } = createContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSuccess(true);
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
    <>
      {success ? (
        <p className="user">Account created succesfully</p>
      ) : (
        <form onSubmit={handleSignUp} className="signin">
          <h2 className="title">Create Account</h2>
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

          <button className="signinbtn">Sign Up</button>
        </form>
      )}
    </>
  );
};
