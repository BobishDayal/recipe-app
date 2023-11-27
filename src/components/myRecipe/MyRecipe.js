import classes from "./MyRecipe.module.css";
import Dishes from "../../ui/Dishes";

import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";

const MyRecipe = () => {
  return (
    <>
      <Dishes />
      <Link className={classes.button} to="/myRecipe/addRecipeForm">
        <HiPlus className={classes.icon} />
        <p className={classes.text}>RECIPE</p>
      </Link>
    </>
  );
};

export default MyRecipe;
