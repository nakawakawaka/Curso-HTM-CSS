// Reduce
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    //acumulador = acumulador + valor;
    acumulador += valor;
    //console.log(acumulador, valor)
    return acumulador;
}, 0); // o acumulador pode recebem um valor inicial no caso zero. este valor é opcional porem se nao for enviado um valor iniciao o valor inicial sera o primeio elemento do array

console.log(total);

const par = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
},[]);

console.log(par);

const inpar = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 !== 0) acumulador.push(valor);
    return acumulador;
},[]);

console.log(inpar);



const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 70 },
]

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);