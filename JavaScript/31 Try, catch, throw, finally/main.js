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
  // é executada quando não há erros
  console.log(soma(1, 2));
  console.log(soma("1", 2)); 
} catch(error) { // catch esta capiturando o erro porem como foi lancado apenas uma string com o throw o erro real nao aparece
  // é executada quando há erros
  console.log(Error);
} finally {
  // sempre é executado
}

console.log('--------------//---------------')

try{
  // é executada quando não há erros
  console.log('Abri um arquivo');
  console.log('Manipulei o arquivo e gerou um erro'); 
  console.log('Fechei o arquivo'); 

  try {
    console.log(b);
  } catch (e) {
    console.log('deu erro')
  } finally {
    console.log('tambem sou finally')
  }

} catch(error) {
  // é executada quando há erros
  console.log('Tratando o erro');
} finally {
  // sempre é executado
  console.log('Sempre sou executado');
}

console.log('--------------//---------------')

function retornaHora(data) {
  //Se a data for enviada E não for uma instancia de Date lança o erro
  if(data && !(data instanceof Data)) {
    throw new TypeError('Esperando instância de Date.');
  }

  // diferente de data / se a data nao for enviada ele gera uma data
  if(!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHora();
  console.log(hora);
} catch (error) {
  console.log(data);
} finally {
  console.log('Bom Dia');
}



