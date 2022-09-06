/*
 Escreva uma função que recebe um número e retorne o seguinte:
 Número é divisivel por 3 = Fizz
 Número é divisivel por 5 = Buzz
 Número é divisivel por 3 e 5 = FizzBuzz
 Número NÃO é divisivel por 3 e 5 = Retorna o próprio número
 Checar se o número é realmente um número = Retorna o próprio número
 Use a função com números de 0 a 100
*/

// Minha solução
function fizzBuzz(x) {
  let res;
  Number.isInteger(x/3) && Number.isInteger(x/5) ? res = 'FizzBuzz' : Number.isInteger(x/3) ? res = 'Fizz' : Number.isInteger(x/5) ? res = 'Buzz' : res = x;

  return res;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}

console.log(fizzBuzz('a'));

// Aula
// function fizzBuzz(n) {
//   if (typeof n !== 'number') return n;
//   if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
//   if (n % 3 === 0) return 'Fizz';
//   if (n % 5 === 0) return 'Buzz';
//   return n;
// }

// console.log(fizzBuzz('a'));

// for (let i = 0; i <= 100; i++) {
// console.log(i, fizzBuzz(i));
// }