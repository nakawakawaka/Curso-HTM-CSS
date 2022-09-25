// Retorene a soma do dobro de todos os pares
// -> Filtar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// exemplo para ver como fica a notacao de ponto sem pular linhas
// const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor*2).reduce((acumulador, valor) => acumulador+valor);

const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor*2)
    .reduce((acumulador, valor) => acumulador+valor);


// [ 50, 80, 2, 8, 22 ] Pares
//[ 100, 160, 4, 16, 44 ] Dobro
console.log(numerosPares);



