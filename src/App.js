import logo from "./logo.svg";
import "./App.css";
import Markup from "./markup";
import { useDispatch } from "react-redux";
import { checkAuth } from "./store/Home/authReducer";
import { useEffect } from "react";
import ReactGA from "react-ga4";
ReactGA.initialize("G-FR08YTKBZM");

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the checkAuth action when the component mounts
    dispatch(checkAuth());
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div>
      <Markup />
    </div>
  );
}

export default App;
