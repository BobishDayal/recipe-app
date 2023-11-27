import AuthForm from "./components/Auth-Form";
import AllDishes from "./components/home/AllDishes";
import MyRecipe from "./components/myRecipe/MyRecipe";
import RootLayout from "./components/page/Root";
import AddRecipe from "./ui/AddRecipe";
import DetailedPage from "./ui/Deatailed-Page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <AllDishes />,
      },
      {
        path: `/:dishId`,
        element: <DetailedPage />,
      },
      {
        path: "/myRecipe",
        element: <MyRecipe />,
      },
      {
        path: "/mode",
        element: <AuthForm />,
      },
      {
        path: "/myRecipe/addRecipeForm",
        element: <AddRecipe />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
