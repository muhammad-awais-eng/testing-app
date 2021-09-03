import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { increment, decrement, islogged } from "./actions";
import Testing from "./component/Testing";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  console.log(counter, isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Testing />
    </div>
  );
}

export default App;
