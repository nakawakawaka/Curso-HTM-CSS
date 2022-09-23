// Map altera os valores e retorna um array do mesmo tamanho do array original
// Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map(valor => valor*2);
// Versao longa
// const dobro = numeros.map(function(valor) {
//     return valor*2;
// })

console.log(dobro);

console.log('----------------/----------------');

// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione um chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

const nomes = pessoas.map(obj => obj.nome)
console.log(nomes);

// Para fazer com que a arrow retorne o objeto de forma correta precisamos envolver ela dentro de parenteses () por assim transformamos ela em uma expressao e o js nao confunde as chaver do objeto como chaves de uma funcao
const idade = pessoas.map(obj => ({idade: obj.idade}));

// const idade = pessoas.map(function(obj) {
//     return {idade: obj.idade};
// });
// const idade = pessoas.map(function(obj) {
//     delete obj.nome;
//     return obj;
// });
console.log(idade);

const id = pessoas.map(function(obj, indice) {
    //obj.id = indice; // assim podemos criar uma chave para o objeto e essa chave recebe os indices do array
    // objetos e arrays sao passador por referencia por isso o objeto original é modificado para evitar este comportamento podemos copiar o objto mantando assim o origial sem modificacoes
    const newObj = {...obj}; // objetos e array sao copiados com o operador spread
    newObj.id = (indice +1);

    return newObj;
});

console.log(id);
console.log(pessoas);
