// const HomeModel = require('../models/HomeModel');

// HomeModel.create({ 
//     titulo: 'Outro Titulo de teste',
//     descricao: 'Outro Descricao de teste'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

exports.paginaInicial = (req, res, next) => {
    console.log('Respondendo o cliente');
    res.render('index');
    console.log(`'Pagina inicial' -> Olha o que tem na req.session.nome ${req.session.nome}`);
    next();
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}
