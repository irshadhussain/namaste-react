import { useState } from "react";
const Title = () => (
  <a href="/">
    <img
      alt="Food Adda"
      src="https://lh5.googleusercontent.com/p/AF1QipOTrCuGu2abvY7S2nNZRwyGaPQdqs26Tk2VYD_U"
      width="100px;"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
