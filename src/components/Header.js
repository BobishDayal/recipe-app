import classes from "./Header.module.css";
import image from "../assets/logo.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={image} alt="logo" className={classes.logo} />
      <nav className={classes.navBar}>
        <li className={classes.links}>My Reciepes</li>
        <li className={classes.links}>All Reciepes</li>
      </nav>
      <button className={classes.button}>Login</button>
    </header>
  );
};

export default Header;
