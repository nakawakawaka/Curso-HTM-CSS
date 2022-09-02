// i - index
// for precisa de 3 coisas - criar uma variavel, criar uma condicao que vai apra esse laço, e incrementar ou decrementar a variavel de controle
for (let i = 0; i <= 5; i++) {
  console.log(`linha ${i}`);
}
// podemos pular numeros dessa forma 
// podemos tambem comecar de valores negativos
for (let i = -30; i <= 30; i += 10) {
  console.log(`10 em 10 -> ${i}`);
}
// invertido - decrementa o valor
for (let i = 50; i >= 0; i -= 10) {
  console.log(`50 a 0 -> ${i}`);
}
// checar se o numero é par
for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? 'par' : 'impar';
  console.log(i, par);
}

// condicao com o tamanho do array
const frutas = ['maçã', 'pera', 'uva', 'banana', 'pecego', 'morango', 'tomate', 'jabuticaba', 'manga', 'mamao', 'abacate'];
for (let i = 0; i < frutas.length; i++) {
  console.log(`indice ${i}`,frutas[i]);
}

