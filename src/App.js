import logo from "./logo.svg";
import "./App.css";
import Markup from "./markup";
import { useDispatch } from "react-redux";
import { checkAuth } from "./store/Home/authReducer";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the checkAuth action when the component mounts
    dispatch(checkAuth());
  }, []);

  return (
    <div>
      <Markup />
    </div>
  );
}

export default App;
