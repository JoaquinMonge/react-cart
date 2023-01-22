import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth, db } from "../firebase";
import "./Signin.css";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";
import { doc, setDoc } from "firebase/firestore";
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const { authUser } = useContext(UserContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });

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
          <Link to="/signup">
            <p className="create">Create account</p>
          </Link>
          <button className="signinbtn">Sign In</button>
        </form>
      )}
    </>
  );
};
