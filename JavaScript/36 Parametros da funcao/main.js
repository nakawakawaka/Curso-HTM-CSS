// podemos eviar varios parametros separados por virgula
// arguments cria uma variavel especia que sustenta todos os argumentos enviados
function funcao() {
  console.log('oie');
  console.log(arguments); // podemos observar algo semelhante a um array
  console.log(arguments[0])

  // somando todos os arguementos passados
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}
funcao(500,1,2,3,4,5,6,7,8,9,10); // os valores enviados para os parametros se chamam argumentos
// o js ignora os argumentos passados pois a funcao nao tem tenhum paramtro declarado porem esses arguemtos pode funcinar dentro da funcao

function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f)
}
funcao2(1,2,3); // js trata os parametro como variaveis e se caso tenham parametro que nao receberam argumentos automaticamente recebem undefined que é o mesmo que ocorrem com variaveis vazias

// podemos colcoar valores padroes nos parametro caso eles nao sejam enviados caso nao aja um valor padrao o js retornara NaN
function soma(a, b = 2, c = 4) {
  console.log(a + b + c);
}
soma(2, undefined, 20); //Caso queira que B assuma o valor padrao a unica maneira é colanco um valorundefined pois de outrar formas como colocando strings vazias '' ou zero ele ira assur o valor passado
soma(2, '', 20); // contatena os valores
soma(2, 0, 20);
soma(2, null, 20); // null é a msm coisa que zero neste caso

function desestruturacaoObj({nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade);
}
let obj = {nome:'bruno', sobrenome:'nakamura', idade: 20};

desestruturacaoObj(obj);


function desestruturacaoArr([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
let arr = ['bruno', 'nakamura', 20];

desestruturacaoArr(arr);

