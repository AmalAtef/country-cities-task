import "./App.scss";
import { getCookie } from "./util/session";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import base64url from "base64url";
import { logout } from "./redux/actions/Auth";
import Home from "./pages/home";
import LangDropdown from "./components/langDropdown";

import Login from "./pages/login";
import Header from "./components/header";

function App() {
  const dispatch = useDispatch();
  const authUser = useSelector(state => state.auth.authUser);
  const isLogin = useSelector(state => state.auth.isLogin);
  return (
    <>
      {/* <div className="btn-lang">
        <LangDropdown />
        {isLogin && authUser && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </Button>
        )}
      </div>
      <div className="App">{isLogin && authUser ? <Home /> : <Login />}</div> */}
      <Header></Header>
    </>
  );
}

export default App;
