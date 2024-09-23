import { useState } from 'react';
import './App.css'

function App() {

  let [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count += 1);
    /*
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
    */

  }

  const removeValue = () => {
    setCount(count -= 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: { count}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App
