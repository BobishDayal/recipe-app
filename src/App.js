import Header from "./components/Header";
import AuthForm from "./components/Auth-Form";
import AllDishes from "./components/home/AllDishes";
import Dishes from "./ui/Dishes";

function App() {
  return (
    <div>
      <Header />

      <AllDishes />
      {/* <AuthForm /> */}
    </div>
  );
}

export default App;
