import AuthForm from "./components/Auth-Form";
import AllDishes from "./components/home/AllDishes";
import RootLayout from "./components/page/Root";
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
    ],
  },

  {
    path: "/mode",
    element: <AuthForm />,
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
