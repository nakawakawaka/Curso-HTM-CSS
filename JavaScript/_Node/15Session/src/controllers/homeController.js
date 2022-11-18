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
    
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}
