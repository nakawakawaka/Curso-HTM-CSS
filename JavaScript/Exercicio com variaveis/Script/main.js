//troque o as variaveis com os valires comentados a frente 

// let varA = 'A' //B
// let varB = 'B' //C
// let varC = 'C' //A

// let B = varB
// let C = varC
// let A = varA

// varA = B
// varB = C
// varC = A

// console.log('varA=' + varA,'varB=' + varB,'varC=' + varC)

//Resoluçao da aula

let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

const varATemp = varA;
varA = varB
varB = varC
varC = varATemp

console.log(varA, varB, varC)

//solucao da aula mais moderna porem por algum motivo varC nao e encontrado

// let varA = 'A' //B
// let varB = 'B' //C
// let varC = 'C' //A

// [varA, varB, varC] = [varB, varC, varA]

// console.log(varA, varB, varC)