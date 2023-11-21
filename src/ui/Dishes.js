import { useState } from "react";
import DetailedPage from "./Deatailed-Page";
import classes from "./Dishes.module.css";

const Dishes = (props) => {
  const [toogle, setToogle] = useState(false);

  const openDetailsHandler = () => {
    console.log("click");
    setToogle(!toogle);
  };

  return (
    <>
      <div className={classes.wrapper} onClick={openDetailsHandler}>
        <div className={classes.container}>
          <img
            src={`${props.image}`}
            alt={`${props.name}'s image`}
            className={classes.image}
          />
        </div>
        <div className={classes.box}>
          <h3 className={classes.heading}>{props.name}</h3>
        </div>
      </div>

      {toogle && (
        <DetailedPage
          image={props.image}
          name={props.title}
          id={props.id}
          ingredients={props.ingredients}
          instructions={props.instructions}
        />
      )}
    </>
  );
};

export default Dishes;
