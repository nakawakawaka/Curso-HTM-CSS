function mostraHora () {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

// // Essa funcao na realidade nao é necessaria podemos criar uma funcao anomima dentro do setInterval
// function funcaoDoInterval() {
//   console.log(mostraHora());
// }
// referencia     de quanto em quanto tempo deve ser executado
//setInterval(funcaoDoInterval, 1000); // configura um intervalo de tempo para que uma funcao seja executada

const timer = setInterval(function() {console.log(mostraHora());} , 1000);
// setInterval(function() {
//   console.log(mostraHora());
// } , 1000);

// ctrl + alt + M -> para a execucao do codigo

// seTimeout executa o codigo por um perio de tempo definido
setTimeout(function() {
  clearInterval(timer); 
}, 3000);

setTimeout(function() {
  console.log('ola mundo'); 
}, 5000);


