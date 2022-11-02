// importando modulos
const mod1 = require('./mod1'); // desta forma importamos o modulo inteiro

const falaNome = require('./mod1').falaNome; // assim importamos apenas 1 elemento que desejamos

// outra maneira é importando o modulo inteiro mas separando apenas o necessario
const falaNome2 = mod1.falaNome;

// podemos importa vaia desestruturacao 
const { nome, sobrenome, falaNome3 } = require('./mod1');

console.log(mod1);
console.log(mod1.falaNome()); // desta maneira afuncao mostra o nome mas tambem mostra undefined e isso ocorre por que a funcao nao retorna nada e o nome aparece por causa do console.log que esta dentro da funcao

falaNome();
falaNome2();

console.log(nome, sobrenome)