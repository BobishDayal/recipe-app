import { useEffect, useState } from "react";
import Dishes from "../../ui/Dishes";

import { Link } from "react-router-dom";

const url = "https://food-recipes-with-images.p.rapidapi.com/?q=chicken";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "34eb0a0141mshbe381927aa26e5bp114d97jsn64e6e818541a",
    "X-RapidAPI-Host": "food-recipes-with-images.p.rapidapi.com",
  },
};

const AllDishes = () => {
  const [data, setData] = useState([]);
  let newData = [];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result.d);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  newData = data;
  console.log(newData);

  return (
    <>
      {data.map((dish) => {
        return (
          <Link to={`/${dish.id}`} state={dish}>
            <Dishes
              image={dish.Image}
              name={dish.Title}
              key={dish.id}
              ingredients={dish.Ingredients}
              instructions={dish.Instructions}
              id={dish.id}
            />
          </Link>
        );
      })}
    </>
  );
};

export default AllDishes;
