const express = require('express');
const app = express();

//         criar  ler   atualizar apagar
// CRUD -> CRATE, READ, UPDATE,   DELETE
//         POST   GET   PUT       DELETE

// http://meusite.com/ <- GET -> Entregue a pagina

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});







