// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.

// Retorne os numeros maires que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10); // este metodo vair receber uma funcao de callback e essa funcao vai iterar sobre cada um dos elementos da array

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array);
//     return valor > 10;
// });

// versao longa callbackFilter vai como referencia dentro do filter
// function callbackFilter(valor, indice, array) {
//     return valor > 10;
// }

console.log(numerosFiltrados);

console.log('----------------/----------------');

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termna com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

// const pessoasNomeGrande = pessoas.filter(function(obj) {
//     return obj.nome.length >= 5;
// });

//const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);

const maiorIdade = pessoas.filter(obj => obj.idade >= 50);
const nomeFimA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(nomeFimA);


