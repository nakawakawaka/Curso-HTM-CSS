// Para criar objetos podemos utilizar as {} isso é um objeto literal
const pessoa = {
    // um objeto é formado por um par chave e valor
    nome: 'naoki', // as chaver server para que possamo acessar o valor contido nelas
    sobrenome: 'nakamura'
};
//console.log(pessoa.nome); // podemos acessar as chaves via notacao de ponto
//console.log(pessoa['sobrenome']); // ou notacao de colchetes a mesma utilizada em um array

const chave = 'nome';
//console.log(pessoa[chave]); // acessando de forma dinamica. isso nao é possivel de fazer utilizando notacao de ponto

// Podemos utilizar um contrutor para objeto
const pessoa1 = new Object();
pessoa1.nome = 'naoki'; // criando o par chave valor
pessoa1.sobrenome = 'nakamura';
pessoa1.idade = 27;
// metodos sao funcoes que estao dentro de objetos
pessoa1.falaNome = function() {
    return(`${this.sobrenome} esta falando seu sobrenome.`);
};
pessoa1.nascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

delete pessoa1.nome; // podemos deletar uma chave utilizando notacao de ponto ou colchetes
//console.log(pessoa, pessoa1);

// console.log(pessoa1.falaNome());
// console.log(pessoa1.nascimento());

for(let chave in pessoa1) {
    //console.log(chave); // mostra as chaves
    //console.log(pessoa1[chave]); // mostra o valor dentro das chaves
    //console.log(chave, pessoa1[chave]);
}

// Podemos criar um molde que cria um objeto utilizando Factory function ou constructor function
// Factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

//const p1 = criaPessoa('naoki', 'nakamura');
///console.log(p1.nomeCompleto);

// Constructor function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // Trava o objeto e nada altera o objeto que for retornado por esta funcao
}

// a palavra new cria um objteo vazio {} e pega a palavra this e atrela a palavra this dentro da funcao ao objeto e retorna o this
const p1 = new Pessoa('naoki', 'nakamura');
console.log(p1);






















