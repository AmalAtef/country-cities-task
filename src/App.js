import "./App.scss";
import { getCookie } from "./util/session";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import base64url from "base64url";
import { logout } from "./redux/actions/Auth";

import Login from "./pages/login";

function App() {
  const dispatch = useDispatch();
  const authUser = useSelector(state => state.auth.authUser);
  const isLogin = useSelector(state => state.auth.isLogin);
  return (
    <>
      {/* <div className="App">{isLogin && authUser ? "" : <Login />}</div> */}
      <Login />
    </>
  );
}

export default App;
