const DetailedPage = (props) => {
  const ingredients = Object.values(props.ingredients);

  console.log(ingredients);

  return (
    <div>
      <h3>{props.name}</h3>
      <div>
        <h5>Ingredients</h5>
        <ul>
          <li>just checking</li>
          <li>just checking</li>
        </ul>
      </div>

      <div>
        <h5>Instructions</h5>
        <p>{props.instructions}</p>
      </div>
    </div>
  );
};

export default DetailedPage;
