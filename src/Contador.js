import React, { useState } from 'react';
import './Contador.css';

export default function App() {
  const [count, setCount] = useState(0);

  function incrementar() {
    setCount(count + 1);
  }

  function decrementar() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="container">
      <h1>Contador de Pessoas</h1>
      <h2>{count}</h2>
      <div className="buttons">
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
      </div>
    </div>
  );
}
