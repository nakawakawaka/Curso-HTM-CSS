// Atribuição via desestrutiração por Array
let a = 'a';
let b = 'b';
let c = 'c';

// o lado da esquerda ea desestruteracao e da direita e a atribuicao
const letra = [b, c, a];
[a, b, c] = letra;
console.log(a, b, c);

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// isso é como se arrancassemos o conteudo de uma array e atribuimos ela a uma variavel
//todas as tribuicoes iram seguir o msm padrao colocado ex so colocar let todas vao ser let se colocar const todos seram const
const [um, dois, ,quatro, ...resto] = numeros;
//podemos pular um conteudo colocando um espaco vazio entre as virgulas

// ... este operador de tres ponto tem 2 sentidos no caso como rest ou spread (resto ou espalhar)

console.log(um, dois,quatro);
console.log(resto);

//              0          1          2
//           0  1  2    0  1  2    0  1  2 
const n = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(n[1][2]); //ira exibir 6

//para fazer via destrutiracao 
const[,[,,seis]] = n; // formar complexa que porem existe
console.log(seis);

const [li1, li2, li3] = n;
console.log(li2[2]);


// Atribuição via desestrutiração por Objetos

const pessoas = {
  nome: 'naoki',
  sobrenome: 'nakamura',
  //idade: 30,
  endereco: {
    rua: 'av brasil',
    numero: 320
  }
};

//podemos reatribuir nomes de variaves de um objeto ex nome passa a se chamar teste
//podemos atribuir um valor padrao para a variavel ex idade nao existe
const { nome: teste = '', sobrenome, idade = 'nao existe', endereco, endereco: {rua, numero}} = pessoas;
console.log(teste, sobrenome, idade);
console.log(endereco, rua, numero);