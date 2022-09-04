// utilizamos o while quando nao sabemos quantas vezes o codigo precisa ser executado para encontrar o valor

// const nome = 'naoki'

// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++; // nunca esqueca de atualizar a varial de controle porque cria um looping infinito
// }

// while (i < nome.length) {
//   console.log(nome[i]);
//   i++;
// }

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

// checa primeiro a condicao se caso encontre false logo de inicio o codigo nao sera executado
while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log('-------------------//------------------')

// checa a condicao depois de ter executado o codigo entao caso encontre falso no incino o codigo ja tera sido executado uma vez
do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);