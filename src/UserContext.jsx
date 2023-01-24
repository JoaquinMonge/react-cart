import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import CartContext from "./CartContext";
import { createContext } from "react";
import { auth, db } from "./firebase";

import { doc, onSnapshot } from "firebase/firestore";

const UserContext = createContext(null);
export function UserProvider(props) {
  const [aut, setAut] = useState();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <UserContext.Provider
      value={{ aut, setAut, authUser, setAuthUser, handleSignOut }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
