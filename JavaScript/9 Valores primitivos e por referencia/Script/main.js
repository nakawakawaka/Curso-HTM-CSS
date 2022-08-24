/*Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados

Referência (mutável) - array, object, function - valores passados por referencia
*/
let nome = 'naoki';
nome[0] = 'b'; //nao é possivel alterar o valor de um dado primitivo
console.log(nome[0], nome)

let a = 'A';
let b = a; //o valor de A é COPIADO para o valor de B assim cada vairavel se mantem independente
console.log(a, b);

a = 'outra coisa'
console.log(a, b);

let arrayA = [1, 2, 3];
let arrayB = [...arrayA]; //para copiar definitivamento um valor por referencia podemos colocar [...arrayA] isso se chama spread
let arrayC = arrayB;
console.log(arrayA, arrayB);

arrayA.push(4); //mesmo alterando apenas o valor de arrayA arrayB tambem é afetado por ser um valor por referencia
console.log(arrayA, arrayB);

arrayB.pop()
console.log(arrayA, arrayB);

arrayA.push('naoki')
console.log(arrayA, arrayC);