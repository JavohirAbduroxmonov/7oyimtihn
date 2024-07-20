import "./App.css";
import logo from "../public/img.svg";
import logo2 from "../public/svg.svg";
import logo4 from "../public/Vector.png";
import logo3 from "../public/GG.png";
import logo5 from "../public/Rectangle.png";
import logo6 from "../public/Vector_12.png";
import logo7 from "../public/fi-bs-user.png";
import layer from "../public/Line.png";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Product from "./components/product/Product";
import { FaCartShopping } from "react-icons/fa6";

function App() {
  const [cart, setCart] = useState([]);
  const [add, setAdd] = useState(0);
  const baseURL = "https://headphones-server.onrender.com/products";

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Fetching data from", baseURL);
        const response = await fetch(baseURL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [add]);

  return (
    <Router>
      <div>
        <header>
          <div className="header-logo">
            <div className="header_logo2">
              <img className="img1" src={logo3} alt="Logo 3" />
              <img className="img2" src={logo4} alt="Logo 4" />
              <p className="text-header">+4904-049-950</p>
            </div>
            <div className="header_logo2">
              <p className="text-logo2">Get 50% Off on the Selected items</p>
              <img className="img3" src={logo5} alt="Logo 5" />
              <p className="text-logo3">Shop now</p>
            </div>
            <div className="header_logo3">
              <img className="img5" src={logo} alt="Logo" />
            </div>
            <div className="header_logo4">
              <img className="img6" src={logo2} alt="Logo 2" />
            </div>
          </div>
          <nav className="navbar">
            <ul className="header-link">
              <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "")}
                to="/"
              >
                <li>Cartpage</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "")}
                to="/products"
              >
                <li>Products</li>
              </NavLink>
              <li className="list">Categories</li>
              <li className="list2">Brands</li>
              <li className="list3">What’s new</li>
              <li className="list4">Sales</li>
              <li className="list5">Help</li>
              <li className="list6">About</li>
              <li className="list7">
                <img src={logo6} alt="Logo 6" />
              </li>
              <li className="list8">
                <img src={logo7} alt="Logo 7" />
              </li>
              <NavLink to="/">
                <li className="cart-icon">
                  <FaCartShopping />
                  {add > 0 && <span className="cart-count">{add}</span>}
                </li>
              </NavLink>
            </ul>
          </nav>
          <div className="layer_div">
            <img className="layer" src={layer} alt="Layer" />
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home cart={cart} />} />
          <Route
            path="/products"
            element={<Products cart={cart} setCart={setCart} setAdd={setAdd} />}
          />
          <Route path="/products/:productId" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
