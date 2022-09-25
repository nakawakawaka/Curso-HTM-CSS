// forEach é uma forma de iterar sobre array
// e este metodo so esta disponivel dentro de arrays

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// o forEach funciona de forma parecia com os for of, for in e for classico
// for(let valor of a1) {
//     console.log(valor);
// }

// a estrura do forEach
// a1.forEach(function(valor, indice, array) {
//     //console.log(valor, indice, array);
//     console.log(valor);
// });

// utilizando arrow function
a1.forEach(valor => console.log(valor));

// simulando o reduce
let total = 0;
a1.forEach(valor => total +=valor);
console.log(total);



