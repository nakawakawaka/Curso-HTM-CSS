// c:\Users\Naoki Nakamura\Documents\Cursos\Udemy\JavaScript\31 Try, catch, throw\main.js:2 -> Isso indica em qual linha ocorreu o erro caso aja mais um : significa a coluna Ex: main.js:2:12
//console.log(naoExisto);

// try - tentar, catch - pegar
// try { // testa o codigo dentro do bloco casa ocorra um erro catch captura esse erro
//   console.log(naoExisto);
// } catch(err) { // catch pega o erro e coloca em uma varial no caso err para exiver o erro é necessario logar o err
//   console.log('Var: naoExisto, não existe.');
// }

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('X e Y precisam ser números.'); // utilizando uma funcao construtora criamos um novo erro com a classe Error 
  } 

  return x + y
}

try{
  console.log(soma(1, 2));
  console.log(soma("1", 2));
} catch(error) { // catch esta capiturando o erro porem como foi lancado apenas uma string com o throw o erro real nao aparece
  console.log(Error);
}
