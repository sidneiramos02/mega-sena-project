import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './database/dataSource';
import megaSenaRoutes from './routes/megaSenaRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', megaSenaRoutes); // Prefixo para as rotas

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
