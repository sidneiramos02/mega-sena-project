import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao Mega-Sena Tracker</h1>
        <p>Veja os números sorteados e suas frequências.</p>
        <Link to="/get-numbers">
        <button className="button">
          Ver Números Sorteados
        </button>
        </Link>
        <Link to="/create-draw">
          <button className="button">
            Adicionar Novo Sorteio
          </button>
        </Link>
      </header>
    </div>
  );
}

export default Home;
