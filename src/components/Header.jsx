// NPM Packages
import { Link, useLocation, useHistory } from "react-router-dom";

// Components
import { BackButton } from "./BackButton";

export const Header = () => {
  const logo = require(`../media/images/logo.png`).default;
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <header className="main-header">
      {pathname !== "/" && <BackButton history={history} />}
      <Link to={"/"}>
        <img src={logo} className="logo" alt="Logo" />
      </Link>
      <p className="slogan">Just Stay Home, We Deliver For You</p>
    </header>
  );
};
