import classes from "./Header.module.css";
import image from "../assets/logo.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={image} alt="logo" className={classes.logo} />
      <nav className={classes.navBar}>
        <Link className={classes.links} to="/myRecipe">
          My Reciepes
        </Link>
        <Link className={classes.links} to="/">
          All Reciepes
        </Link>
      </nav>
      <Link className={classes.button} to="/mode">
        Login
      </Link>
    </header>
  );
};

export default Header;
