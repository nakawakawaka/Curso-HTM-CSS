const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function meuMiddleware(req, res, next) {
    res.session = { nome: 'naoki', sobrenome: 'nakamura' }
    console.log();
    console.log('Passei no seu middleware');
    console.log();
    next()
}

// Rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next) {
    console.log();
    console.log('ainda estou aqui');
    console.log(`'Ultimo middleware' -> Olha o que tem na req.session.sobrenome ${req.session.sobrenome}`);
});
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);




module.exports = route;
