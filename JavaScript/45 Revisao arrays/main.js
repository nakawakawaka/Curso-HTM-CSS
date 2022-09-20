//                  0         1         2 
//const nomes = ['eduardo', 'maria', 'joana']; // forma literal de array
// String, Objetos, Funcoes, Numeros, etc...
const nomes = new Array('eduardo', 'maria', 'joana', 'yumi', 'yuuki'); // funcao construtora de arrays porem nao é muito utilizado
delete nomes[2]; // delete um elemento do array sem mecher nos indeces deixando o espaco vazio
nomes[2] = 'joão'; // altera um elemento da array

// Valor por referencia
const novo = nomes; // tudo o que for feito em novo reflete em nomo e tudo o que for feito em nomes reflete em novo
const novoCopia = [...nomes]; // copiando um array com o operador spread/rest

const removido = novo.pop(); // deleta o ultimo item do array e retorna o valor removido por esse motivo podemos colocar o item em uma variavel
const removido2 = novo.shift(); // delete o primeiro item da array e retorna o valor removido

nomes.push('naoki'); // adiciona um valor no final do array 
nomes.unshift('nakamura'); // adiciona um valora no inicio do array e assim altera todos os indices do array

const fatia = nomes.slice(0, -1); // fatia o array 
console.log(nomes);
console.log(novo, removido, removido2);
console.log(novoCopia);
console.log(novoCopia.length); // mostra o comprimento do array
console.log(fatia);

const string = 'bruno naoki nakamura';
const stringToArry = string.split(' '); // tranforma a string em uma array separando elas pelos espacos neste casa mas podemos definir outras coisas para separar a string em um array com opor exemplo a virgula
console.log(stringToArry);

const arrayToString = stringToArry.join(' '); // transforma uma array em string e para separa os elementos passamos uma espaco dentro do join
console.log(arrayToString);
