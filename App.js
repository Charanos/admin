import "./static/sass/main.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import User from "./components/Pages/User";
import Home from "./components/Pages/Home";
import Users from "./components/Pages/Users";
import NewUser from "./components/Pages/NewUser";
import Product from "./components/Pages/Product";
import Products from "./components/Pages/Products";
import NewProduct from "./components/Pages/NewProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />

      <div className=" flex-container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/users/">
            <Users />
          </Route>

          <Route path="/user/:userId/">
            <User />
          </Route>

          <Route path="/newUser/">
            <NewUser />
          </Route>

          <Route path="/products/">
            <Products />
          </Route>

          <Route path="/product/:productId">
            <Product />
          </Route>

          <Route path="/newProduct/">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
