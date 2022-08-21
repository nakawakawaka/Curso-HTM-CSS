// IEEE 754-2008 -> e o padrao que causa a imprecisao na conta

let num1 = 0.7;
let num2 = 0.1;

//essa conta existe uma imprecisao
// num1 = num1 + num2
num1 += num2; //0.8
console.log(num1);

//para consertar essa imprecisao podemos utilizar:
num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.9
console.log(num1);

num1 += num2; //1.0
num1 += num2; //1.1
num1 += num2; //1.2
num1 += num2; //1.3
num1 += num2; //1.4
num1 += num2; //1.5
num1 += num2; //1.6
num1 += num2; //1.7
num1 += num2; //1.8
num1 += num2; //1.9
num1 += num2; //2.0

console.log(num1);


//outra maneira de resolver o problema:
num1 = parseFloat(num1.toFixed(2));
console.log('parseFolat: ' + num1);
//ou
num1 = Number(num1.toFixed(2));
console.log('Number: ' + num1);

console.log(Number.isInteger(num1));


// console.log(num1 + num2);
// //se o tipo do valor nao for um numero nao e realizado uma conta e sim apena a concatenacao
// //neste caso o tipo de dados do num1 foi alterado temporariamente
// console.log(num1.toString() + num2);
// console.log(typeof num1);

// //aqui tipo de dados de num1 foi alterado definitivamente
// //num1 = num1.toString; 

// //representacao binaria da string
// console.log(num1.toString(2));

// //limita a quantidade de casas decimais exibidas e arredonda o valor
// console.log(num1.toFixed(2));

// //retorna um valor de true ou false para numeros inteiros
// console.log(Number.isInteger(num1));

// //retorna verdadeiro ou falso se o valor da conta Nao e um Numero
// let temp = num1 * 'ola'
// console.log(Number.isNaN(num1));

