import classes from "./Dishes.module.css";
import { Link } from "react-router-dom";

const Dishes = (props) => {
  return (
    <>
      <Link className={classes.wrapper} to={`/${props.id}`} state={props}>
        <div className={classes.container}>
          <img
            src={`${props.image}`}
            alt={`${props.name}'s image`}
            className={classes.image}
          />
        </div>
        <div className={classes.box}>
          <h3 className={classes.heading}>{props.name}</h3>
          <div className={classes.paraWraaper}>
            <p className={classes.instruction}>{props.instructions}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Dishes;
