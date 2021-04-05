export const Header = () => {
  const logoObject = require(`../media/images/logo.png`);
  const logo = logoObject.default;

  return (
    <header className="main-header">
      <img src={logo} className="logo" alt="Logo" />
      <p className="slogan">Just Stay Home, We Deliver For You</p>
    </header>
  );
};
