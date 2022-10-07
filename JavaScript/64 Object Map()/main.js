const pessoas = [
  {id: 3, nome: 'Luiz'},
  {id: 2, nome: 'Maria'},
  {id: 1, nome: 'Helena'},
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));

for (const [ident, { id, nome }] of novasPessoas) {
  console.log(ident, id, nome);
}

for (const keys of novasPessoas.keys()) {
  console.log(keys);
}

for (const value of novasPessoas.values()) {
  console.log(value);
}

novasPessoas.delete(2);
console.log(novasPessoas);
