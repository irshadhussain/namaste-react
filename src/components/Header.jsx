import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import useOnline from "../components/utils/useOnline";
const Title = () => (
  <a href="/">
    <img alt="Food Adda" src={Logo} className="h-28 px-2" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 md:bg-blue-100">
      <Title />
      <div>
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">Cart</li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">{isOnline ? "🟢" : "🔴"}</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
