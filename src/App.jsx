import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/shop/Shop";

import { Cart } from "./pages/cart/Cart";

import { CartProvider } from "./CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />

            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
