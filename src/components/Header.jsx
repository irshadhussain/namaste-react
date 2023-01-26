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
    </div>
  );
};

export default Header;
