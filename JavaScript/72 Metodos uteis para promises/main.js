function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string') {
        reject('cai no erro');
        return;
      }  

      resolve(msg.toUpperCase());
      return;
    }, tempo);
  });
}

// Promise.all Promise.race Promice.resolve Promise.reject
const promises = [
  //'Primeiro valor',
  esperaAi('Promise 1', rand(1, 5)),
  esperaAi('Promise 2', rand(1, 5)),
  esperaAi('Promise 3', rand(1, 5)),
  esperaAi(1000, rand(1, 5)),
  //'Outro valor'
];
// ele pega todos os promises e reslve todos de uma vez caso ocorra um erro ele rejeita todos e retorna o erro
// Promise.all(promises)
//   .then(function(valor) {
//     console.log(valor);
//   })
//   .catch(function(erro) {
//     console.log(erro);
//   })
// ira exibir o primeiro promise que for executado e so ira rejeitar caso o primeiro promise sera o erro
Promise.race(promises)
  .then(function(valor) {
    console.log(valor);
  })
  .catch(function(erro) {
    console.log(erro);
  });

function baixaPagina() {
  const emCache = true;

  if(emCache) {
    //return Promise.resolve('Pagina em cache');
    return Promise.reject('Pagina em cache');
  } else {
    return esperaAi('Baixei a pagina', 3000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log('Erro:', e));



