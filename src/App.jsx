import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/shop/Shop";

import { Cart } from "./pages/cart/Cart";

import { CartProvider } from "./CartContext";
import { Categories } from "./components/Categories";
import { Mens } from "./components/Categories/Mens";
import { Womens } from "./components/Categories/Womens";
import { Electronics } from "./components/Categories/Electronics";
import { Jewelery } from "./components/Categories/Jewerly";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Categories />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/womens" element={<Womens />} />
            <Route path="/jewelery" element={<Jewelery />} />
            <Route path="/electronics" element={<Electronics />} />

            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
