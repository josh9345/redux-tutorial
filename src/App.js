import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.islogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(login())}>Login</button>
      {isLogged ? <h3>if not logged in info is hidden</h3> : <h3>Sign Up</h3>}
    </div>
  );
}

export default App;
