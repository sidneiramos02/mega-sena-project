import React, { useState } from 'react';
import { createDraw } from '../Api';
import { Link } from 'react-router-dom';

function CreateDraw() {
  const [numeros, setNumeros] = useState(Array(6).fill(''));
  const [dataSorteio, setDataSorteio] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleNumeroChange = (index, value) => {
    const novosNumeros = [...numeros];
    novosNumeros[index] = value;
    setNumeros(novosNumeros);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      numeros: numeros.map(Number),
      data_sorteio: dataSorteio,
    };

    try {
      await createDraw(data);
      setMensagem('Sorteio criado com sucesso!');
      setNumeros(Array(6).fill(''));
      setDataSorteio('');
    } catch (error) {
      setMensagem('Erro ao criar sorteio. Tente novamente.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cadastro de Sorteio da Mega-Sena</h1>
        <form onSubmit={handleSubmit}>
          <div>
            {numeros.map((numero, index) => (
              <input
                key={index}
                type="number"
                value={numero}
                onChange={(e) => handleNumeroChange(index, e.target.value)}
                min="1"
                max="60"
                placeholder={`Número ${index + 1}`}
                required
              />
            ))}
          </div>
          <div>
            <input
              type="date"
              value={dataSorteio}
              onChange={(e) => setDataSorteio(e.target.value)}
              required
            />
          </div>
          <button type="submit">Criar Sorteio</button>
        </form>
        {mensagem && <p>{mensagem}</p>}
        <Link to="/">
          <button className="button">Voltar para Home</button>
        </Link>
      </header>
    </div>
  );
}

export default CreateDraw;
