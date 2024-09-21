import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo ao Projeto Mega-Sena!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});