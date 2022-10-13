
// usar o express
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json()); // para tratar json
app.use(cors());
app.options('*', cors());

// prerarar para responder ao GET
app.get('/', (req, res) => {
    res.send('Atendida a requisição GET!!');
});

// conexão com mongoBD
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://gustavo:123654@cluster0.u1eqtuz.mongodb.net/?retryWrites=true&w=majority";
MongoClient.connect(uri, (err, client) => {
    if (err)
        return console.log(err);
    db = client.db('basepredios');
    app.listen(3000, function () { // subir serviço da api na porta 3000
        console.log('API rodando na porta 3000');
        console.log('Testar por http://localhost:3000');
        console.log("rodando")

    });
});

// rotas para upf
const upf = require('./upf');
upf(app);