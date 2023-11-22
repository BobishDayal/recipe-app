import classes from "./Dishes.module.css";

const Dishes = (props) => {
  return (
    <>
      <div className={classes.wrapper}>
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
    </>
  );
};

export default Dishes;
