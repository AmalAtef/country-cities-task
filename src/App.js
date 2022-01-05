import "./App.scss";
import { getCookie } from "./util/session";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import base64url from "base64url";
import { logout } from "./redux/actions/Auth";

import Login from "./pages/login";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Header from "./components/header";
import Country from "./pages/country";
import City from "./pages/city";

function App() {
  const dispatch = useDispatch();
  const authUser = useSelector(state => state.auth.authUser);
  const isLogin = useSelector(state => state.auth.isLogin);
  return (
    <>
       <BrowserRouter>
      <Switch>
              
              <Route
                exact
                path="/cities"
                component={isLogin && authUser ? City : Login}
              />
              <Route
                exact
                path="/"
                component={isLogin && authUser ? Country : Login}
              />
          
            </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
