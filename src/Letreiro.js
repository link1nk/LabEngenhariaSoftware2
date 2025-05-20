import { useState, useEffect } from 'react';
import './Letreiro.css';

export default function Letreiro() {
  const mensagem = "Conheça a Fatec";
  const [posicao, mudarPosicao] = useState(0);
  const [mostrar, mudarMostrar] = useState("");

  function atualizarLetreiro() {
    mudarMostrar(mensagem.substring(0, posicao + 1));
    mudarPosicao(posicao => posicao >= mensagem.length - 1 ? 0 : posicao + 1);
  }

  useEffect(() => {
    const timer = setInterval(atualizarLetreiro, 200);
    return () => clearInterval(timer);
  }, [posicao]);

  return (
    <div className="letreiro">
      <h1>Letreiro</h1>
      <h1>{mostrar}</h1>
      <br />
    </div>
  );
}
