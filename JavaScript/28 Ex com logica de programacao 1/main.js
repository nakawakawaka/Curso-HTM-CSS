// Escreva uma função que receva 2 números e retorne o maior deles

// Minha resolução
function maiorNumero(x, y) {
  return Math.max(x, y);
}

console.log(maiorNumero(10, 50));

// Minha solucão depois de ver a aula
const maior = (x, y) => Math.max(x, y);

console.log(maior(100, 50));

// Aula
function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
  
}

function max(x, y) {
  if (x > y) {
    return x;
  } 
  return y;
}

function max(x, y) {
  if (x > y) return x; // se a condicao do if for apenas uma linha e o bloco tamber for pequeno podemos eliminar as chaves e deixar tudo em uma mesma linha
  return y;
}

function max(x, y) {
  return x > y ? x : y; // se X for maior que Y ? retorna X : se nao retorna Y
}

// const max2 = (x, y) => {
//   return x > y ? x : y;
// };

const max2 = (x, y) => x > y ? x : y; // arrow function quando so temos uma linha podemos elimnar as achves e remover a palavra return


console.log(max(10, 200));