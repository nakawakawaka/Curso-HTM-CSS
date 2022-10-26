const nome = 'naoki';
const obj = { nome };
const novoObj = { ...obj };
console.log(novoObj);

class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// para iniciar o babel digine no terminal
//npm run babel e para para ctrl+c