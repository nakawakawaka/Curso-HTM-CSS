const frutas = ['maçã', 'pera', 'uva', 'banana', 'pecego', 'morango', 'tomate', 'jabuticaba', 'manga', 'mamao', 'abacate'];
const pessoas = {
  nome: 'naoki',
  sobrenome: 'nakamura',
  idade: 30
}
// For classico - geralmente com iteravel (array ou string)
// For in - Retorna o indice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteravel, array ou string)


// for in - esta lendo os indices e quando for objeto ele ira ler as chaves
for (let i in frutas) {
  console.log(i); // retorna o indice do array para retornar o valor dentro do array precisariamos colocar nome_da_array[indice]
}

console.log('------------------------//-------------------------');
for (let chaves in pessoas) {
  console.log(chaves ,pessoas[chaves]); // chaves retorna as chaves do objeto
}

console.log('------------------------//-------------------------');
const nomes = ['naoki', 'nakamura', 'bruno'];
// os 3 for retornam o mesmo resultado porem o for classico e o for in tambem retornam o dindice 

//for classico
for (let i = 0; i < nomes.length; i++) {
  console.log(i,nomes[i]);
}

console.log('------------------------//-------------------------');
// for in
for (let i in nomes) {
  console.log(i,nomes[i]);
}

console.log('------------------------//-------------------------');
//for of retorna o valor em vez do indice como acontece com o for classico e o for in
// um objeto nao é um valor iteravel por isso nao funciona
for (let valor of nomes) {
  console.log(valor); // retorna direto o valor contido no array 
}

console.log('------------------------//-------------------------');
// para arrays ainda podemos utilizar o forEach que precisa de um funcao
nomes.forEach(function (valor, indice, array) {
  console.log(indice, valor, array);
});
