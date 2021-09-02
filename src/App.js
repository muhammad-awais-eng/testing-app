import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { increment, decrement, islogged } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  console.log(counter, isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      React Redux Testing
      <br />
      <br />
      <h1>counter :{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <br />
      <h1>{isLogged ? "information not shown" : "dd"}</h1>
    </div>
  );
}

export default App;
