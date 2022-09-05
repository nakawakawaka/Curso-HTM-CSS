const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue continua para proxima iteracao
// Break sai do laço

// continue e break funcionam para todos os for e while e do while
for (let n of numeros) {

  if (n === 2) {
    console.log('Pueli o numero 2');
    continue; // pula pra proxima iteracao sem executar o codigo abaixo
    // podemos colocar quantos contunue forem precisos
  }

  console.log(n); // como o codico esta antes do break o numero 7 sera exibido 
  if (n === 7) {
    break;
  }
  // aqui o 7 nao é exibido porque o break quebra o laço e nada mais é executado na iteracao
  //console.log(n);
}

console.log('-------------------//------------------')

let i = 0;
// geralmente a atualizacao da variavel de controle fica no final do bloco porem quando utilizamos o continue ou break é indicado atualar a variavel antes
while (i < numeros.length) {
  let ns = numeros[i];

  
  if (ns === 2) {
    console.log('Pulei o numero 2');
    i++; // atualizacao da varia de controle para evitar um loop infinito
    continue;
  }

  console.log(ns);

  if (ns ===7) {
    console.log('7 encontrado, saindo...');
    i++; // atualizacao da varia de controle para evitar um loop infinito
    break;
  }

  i++;
}