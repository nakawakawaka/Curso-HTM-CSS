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
