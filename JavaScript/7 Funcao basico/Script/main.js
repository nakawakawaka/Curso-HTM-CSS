//função é nomeada da mesma forma que uma variavel
//tudo que esta dentro de uma funcao pertence a funcao
//parametros de uma funcao funcionam de forma bem parecedi como a variavel
function saudacao(nome) {
    return `bom dia! ${nome}`;
}

saudacao('naoki'); //chamando a funcao
const variavel = saudacao('naoki'); //qual funcao retorna undefined se caso nao esteja especicado o que a funcao deve retornar
console.log(variavel);

function soma(x = 1, y = 1) {
    const resultado = x + y;
    console.log('isso sera execudado')
    return resultado;
    //nada é execudao depois da palave return dentro da funcao
    console.log('ola mundo')
}

console.log(soma(2, 2));

//podemos definir valores padroes para uma funcao caso nenhum paramentro seja enviado
//se caso nao for definido nenhum valor padrao para os paramentro da funcao ele retornara NaN
console.log(soma());
console.log(soma(2));

//podemos colocar uma funcao dentro de uma variavel
//e neste casa é nescessario colocar ; no final da funcao
const raiz = function (n) {
    return n ** 0.5;
};

//outra maneira de criar uma funcao é com o arrow function
const raizArrow = n => n ** 0.5;
//a mesma funcao acima porem com arrow function fica de forma bem mais simplificado removendo a palavra 'function', (), {}e o 'return'

console.log(raiz (16));
console.log(raizArrow (25));