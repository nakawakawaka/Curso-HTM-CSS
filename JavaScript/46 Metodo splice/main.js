//               -5      -4       -3         -2         -1
//                0       1        2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// estrutuda do metodo splice
// nomes.splice(indice, delete, elemento1, elemento2, etc...);

// simula o pop
//const removidos = nomes.splice(-1, 1); // deleta o elemento e retora ele em uma array
//const removidos = nomes.splice(4, 1);
// caso seje preciso deletar todods os elemntos a partir de um ceto indice podemos utilizar Number.MAX_VALUE 

// shift
//const removidos = nomes.splice(0, 1);

// push
//nomes.splice(nomes.length, 0, 'luiz', 'naoki');

// unshift
nomes.splice(0, 0, 'luiz', 'naoki');

console.log(nomes, removidos);
console.log(Number.MAX_VALUE) // mostra o maior numero possivel dentro do js
