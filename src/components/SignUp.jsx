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
  const [error, setError] = useState(false);

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
        if (error.code === "auth/weak-password") {
          setError("Please try with a different password");
        }
        if (error.code === "auth/email-already-in-use") {
          setError("Email already in use");
        }
        console.log(error);
      });

    setTimeout(() => {
      setError(false);
    }, 4000);
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

          {error ? <p className="error">{error}</p> : ""}

          <button className="signinbtn">Sign Up</button>
        </form>
      )}
    </>
  );
};
