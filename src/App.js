import { useEffect, useState } from "react";
import Header from "./components/Header";
import AuthForm from "./components/Auth-Form";

const url = "https://food-recipes-with-images.p.rapidapi.com/?q=chicken";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "34eb0a0141mshbe381927aa26e5bp114d97jsn64e6e818541a",
    "X-RapidAPI-Host": "food-recipes-with-images.p.rapidapi.com",
  },
};

function App() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       setData(result.d);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  console.log(data);

  return (
    <div>
      <Header />
      <AuthForm />
    </div>
  );
}

export default App;
