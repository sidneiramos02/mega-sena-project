import 'reflect-metadata';
import { DataSource } from 'typeorm';
import express from 'express';
import { MegaSenaSorteio } from './entities/MegaSenaSorteio';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
      MegaSenaSorteio,
    ],
});
  
AppDataSource.initialize()
  .then(() => {
    console.log('Conectado ao banco de dados!');

    app.get('/', (req, res) => {
      res.send('Bem-vindo ao Projeto Mega-Sena!');
    });

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => console.log('Erro ao conectar ao banco de dados:', error));
