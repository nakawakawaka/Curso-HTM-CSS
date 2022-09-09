// Declaração de função (function hoisting)
//hoisting eleva as declaracoes de funcoes e variavei var para o topo
falaOi(); // hoisting

function falaOi() {
  console.log('oie');
}

// first-class objectis (objetos de primeira classe)
// significa que podemos tratar funcoes como dados
// Function Expression
const souUmDado = function() {
  console.log('sou um dado');
};
souUmDado();

function executaFuncao(funcao) {
  console.log('Vou executar sua funcao abaixo:')
  funcao();
}

executaFuncao(souUmDado);

// Arrow function
const arrowfunction = () => {
  console.log('sou uma arrow function')
}
arrowfunction();

// Dentro de um objeto
const obj = {
  // falar: function() {
  //   console.log('estou falando')
  // }
  falar() { //vercao atualizada do codigo acima comentado
    console.log('estou falando')
  } 
}
obj.falar();

