const verdadeiro = true;
console.log(nome2); // hoisting
// let tem escopo de bloco {... bloco} tudo que esta dentro de chaves
// var so tem escopo de funcao
let nome = 'naoki'; //criado
var nome2 = 'naoki'; //criado

//var tambem funciona com hoisting com let nao acontece isso

// let nome = 'bruno'; let nao pode ser redeclarado gerando um erro
var nome2 = 'bruno'; //var pode ser redeclarado

if (verdadeiro) {
  let nome = 'nakamura'; // criado
  console.log(nome, nome2);
  
  //exprecao bloco aninhado
  if (verdadeiro) {
    // se caso a variavel nao estiver declarada dentro deste bloco ela ira buscar no escopo mais proximo
    let nome = 'outra coisa'
    var nome2 = 'redeclarado' //redeclarado 
    console.log(nome, nome2);
  }
}

console.log(nome, nome2, 'escopo global');

function falaOi () {
  //funcoes tem um escopo especial pois ela protege as variaveis
  var sobrenome = 'sobrenome'
  console.log(sobrenome);
}

//console.log(sobrenome); isso gera um erro por que o espoco de uma funcao so pertece a funcao
falaOi();