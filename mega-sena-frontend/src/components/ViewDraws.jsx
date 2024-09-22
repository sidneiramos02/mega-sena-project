import React, { useEffect, useState } from 'react';
import { getDraws } from '../Api';
import { Link } from 'react-router-dom';

function ViewDraws() {
  const [draws, setDraws] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDraws = async () => {
      try {
        const response = await getDraws();
        setDraws(response);
      } catch (err) {
        console.error(err);
        setError('Erro ao carregar os sorteios. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchDraws();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Números Sorteados</h1>
        {loading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul>
            {draws.map((draw, index) => (
              <li key={index}>
                {`Número: ${draw.numero}, Quantidade: ${draw.quantidade}`}
              </li>
            ))}
          </ul>
        )}
        <Link to="/">
          <button className="button">Voltar para Home</button>
        </Link>
      </header>
    </div>
  );
}

export default ViewDraws;

