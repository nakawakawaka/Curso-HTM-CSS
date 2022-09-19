//funções geradores pausam o codigo em determinado local

function* geradora1() {
    //codigo qualquer ...
    yield 'valor1';
    //codigo qualquer ...
    yield 'valor2';
    //codigo qualquer ...
    yield 'valor3';
}

const g1 = geradora1();
// console.log(g1); // para vermos o valor de uma funcao geradora precisamos do .next()
// console.log(g1.next()); // aqui podemos ver um objeto com chaves value e done. O done verifica se a funcao ja terminou de motrar todos os valores inseridos nele entao no caso quando ele chegar no 4 yield no valor ira ter undefined e o done passara a ser true ensserrando assim a funcao
// console.log(g1.next().value);// para vermos apenas o valor precisamos chamar o valor da msm forque que chamamos em um objeto

for (let valor of g1) {
    console.log(valor);
}

console.log('-------------------//-----------------------');

function* geradora2() {
    let i = 0;
    
    while(i <= 10) { // podemos deixar um looping infinito e mostrar os valores uma a um
        yield i;
        i++;
    }
}
const g2 = geradora2();
for (let i of g2) {
    console.log(i);
}

console.log('-------------------//-----------------------');

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3(); // precisamos utilizar um * no yield para que ele chame uma funcao
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}

console.log('-------------------//-----------------------');

function* geradora5() {
    yield function() {
        console.log('vim do yield1');
    };
    // codigo qualquer...
    //return function() {
    //  console.log('vim do return') // o return para o codigo aqui e por isso o resto do codigo nao sera mais executado
    //}

    yield function() {
        console.log('vim do yield2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();

