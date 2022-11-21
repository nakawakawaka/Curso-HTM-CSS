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
    res.render('index', {
        titulo: 'Este sera o titulo da pagina',
        numeros: [0,1,2,3,4,5,6,7,8,9]
    });
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}
