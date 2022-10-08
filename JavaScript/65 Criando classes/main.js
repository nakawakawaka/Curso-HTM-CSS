// classe faz a mesma coisa que uma funcao construtora

class Pessoa {
  //caso precise passar parametros para essa classe precusamos usar o metodo constructor
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  // os metodos criados dentro de uma classe sao linkados automaticamente ao objeto em seu prototype
  falar() {
    console.log(`${this.nome} esta falando`);
  }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
  console.log(`${this.nome} esta falando`);
}

//instanciar é criar um objeto a partir da classe
const p1 = new Pessoa('naoki', 'nakamura');
const p2 = new Pessoa2('thamiris', 'nakamura');
console.log(p1)
console.log(p2)
