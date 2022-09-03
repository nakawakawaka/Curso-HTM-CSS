const frutas = ['maçã', 'pera', 'uva', 'banana', 'pecego', 'morango', 'tomate', 'jabuticaba', 'manga', 'mamao', 'abacate'];
const pessoas = {
  nome: 'naoki',
  sobrenome: 'nakamura',
  idade: 30
}


// for in - esta lendo os indices e quando for objeto ele ira ler as chaves
for (let i in frutas) {
  console.log(i);
}

for (let chaves in pessoas) {
  console.log(chaves ,pessoas[chaves]);
}
