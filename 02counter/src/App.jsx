import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // variable, method
  //let counter = 15;
  const addValue = () => {
    setCounter(counter + 1);

    //won't add +3 , react does batching
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    //callback
    // setCounter((prevCounter) => { prevCounter + 1});
    // setCounter((prevCounter) => { prevCounter + 1});
    // setCounter((prevCounter) => { prevCounter + 1});
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React course with jay {counter}</h1>
      <h2>COunter value: {counter}</h2>
      <button onClick={addValue}>add value</button>{" "}
      <button onClick={removeValue}>remove value</button>
      <p>footer {counter}</p>
    </>
  );
}

export default App;
