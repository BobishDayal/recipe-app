import { useState } from "react";
import classes from "./AddRecipe.module.css";

const AddRecipe = () => {
  const [ingredients, setIngredients] = useState([]);
  const [file, setFile] = useState();

  const addIngHandler = () => {
    let newIng = [...ingredients, []];
    setIngredients(newIng);
  };

  const ingredientsChangeHandler = (e, i) => {
    e.preventDefault();
  };

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.heading}>ADD RECIPE</h3>
      <form className={classes.form}>
        <div className={classes.container}>
          <label>Dish's Image</label>
          <input
            type="file"
            onChange={(e) => {
              console.log(e.target.files);
              setFile(URL.createObjectURL(e.target.files[0]));
            }}
          />
          <img src={file} />

          <div className={classes.subWrapper}>
            <label>Dish's Name</label>
            <input type="text" required />
            <label>Ingredients</label>
            <button onClick={addIngHandler}>add</button>
            {ingredients.map((val, i) => {
              return (
                <div>
                  <input
                    onChange={(e) => ingredientsChangeHandler(e, i)}
                    key={i}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <label>Instruction</label>
        <textarea />
        <input type="submit" value="add" />
      </form>
    </div>
  );
};

export default AddRecipe;
