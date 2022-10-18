function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  // para criar uma promisse utilizamos o contrutor new Promise este contrutor recebe 2 parametros resolve e reject
  return new Promise((resolve, reject) => {
    // caso ocorra algume erro no meio do processo reject ira capturar o erro e esse erro era tratado como desejado
    if(typeof msg !== 'string') reject('Bad Value');

    // setTimeout esta simulando um carregamento demorado a promesa so sera resolvida pos o termino do carregamento
    setTimeout(() => {
      //console.log(msg);
      resolve(msg); // quando a promesse chegar aqui ele sera mandado para o then
    }, tempo);
  });
}

esperaAi('Conexão com o Banco de dados', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da Base', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi(123123, rand(1, 3));
    //return esperaAi('Tratando os dados da Base', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  })
  .then(() => {
    console.log('Exibe dados na tela')
  })
  .catch(e => {
    console.log('ERRO: ', e);
  });


