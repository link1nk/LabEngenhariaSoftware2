import React, { useState } from 'react';
import './Contador.css';

export default function Contador() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const total = homens + mulheres;

  function incrementarHomens() {
    setHomens(homens + 1);
  }

  function decrementarHomens() {
    if (homens > 0) setHomens(homens - 1);
  }

  function incrementarMulheres() {
    setMulheres(mulheres + 1);
  }

  function decrementarMulheres() {
    if (mulheres > 0) setMulheres(mulheres - 1);
  }

  function resetar() {
    setHomens(0);
    setMulheres(0);
  }

  return (
    <div className="contador-container">
      <div className="header">
        <h1>Total</h1>
        <button className="reset-btn" onClick={resetar}>🔄</button>
      </div>
      <div className="total-box">{total}</div>

      <div className="grupo">
        <div className="pessoa">
          <div className="emoji">👨</div>
          <div className="botoes">
            <button className="mais" onClick={incrementarHomens}>+</button>
            <button className="menos" onClick={decrementarHomens}>−</button>
          </div>
          <p>Homens</p>
          <div className="contador">{homens}</div>
        </div>

        <div className="pessoa">
          <div className="emoji">👩</div>
          <div className="botoes">
            <button className="mais" onClick={incrementarMulheres}>+</button>
            <button className="menos" onClick={decrementarMulheres}>−</button>
          </div>
          <p>Mulheres</p>
          <div className="contador">{mulheres}</div>
        </div>
      </div>
    </div>
  );
}
