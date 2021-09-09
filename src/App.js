import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { increment, decrement, islogged } from "./actions";
import Testing from "./component/Testing";
// import MultiForm from "./component/multistepForm/MultiForm";
import Practice from "./component/practice/Practice";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  console.log(counter, isLogged);
  const dispatch = useDispatch();
  return (
    <div className="">
      {/* <Testing /> */}
      {/* <MultiForm /> */}
      <Practice />
    </div>
  );
}

export default App;
