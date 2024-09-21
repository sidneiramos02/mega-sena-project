"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const MegaSenaSorteio_1 = require("./entities/MegaSenaSorteio");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
const AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: 'sua_senha', // substitua pela sua senha
    database: 'nome_do_seu_banco', // substitua pelo nome do seu banco
    synchronize: true,
    logging: false,
    entities: [
        MegaSenaSorteio_1.MegaSenaSorteio,
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
