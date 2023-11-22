import { useLocation, useParams } from "react-router-dom";
import classes from "./Details.module.css";

const DetailedPage = (props) => {
  const params = useParams();

  let { state } = useLocation();

  const ingredients = Object.values(state.Ingredients);

  console.log(ingredients);
  console.log(state);

  return (
    <div className={classes.page}>
      <h3 className={classes.heading}>{state.Title}</h3>
      <div className={classes.wrapper}>
        <div className={classes.image}>
          <img src={`${state.Image}`} alt={` image of ${state.Title}`} />
        </div>

        <div className={classes.itemContainer}>
          <h5 className={classes.subHeading}>Ingredients</h5>
          <ul className={classes.list}>
            {ingredients.map((ing, i) => (
              <li key={i} className={classes.listItem}>
                {ing}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h5 className={classes.subHeading}>Instructions</h5>
        <p className={classes.instructions}>{state.Instructions}</p>
      </div>
    </div>
  );
};

export default DetailedPage;
