const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
    // __proto__: objA
}

const objC = new Object();
objC.chaveC = 'C';
// __proto__: objB

Object.setPrototypeOf(objB, objA); // setamos um prototype para o objeto B este objeto recebe o objeto A assim podemos acessas tudo que estiver dentro do objeto A pelo objeto B
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}
;
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('camiseta', 50);
//p1.desconto(100)
p1.aumento(10)

// aqui temos um objeto liter e por esse motivo ele nao tem o prototype que foi configurado para a funcao contrutora Produto. Para fazer com que este objeto pegue os metodos configurados nos objeto criados em Produto podemos utilizar Object.setPrototypeOf(Objeto a ser configurado, Local onde estao as configuracoes)
const p2 = {
    nome: 'caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);



console.log(p1)
console.log(p2)

// create recebe um objeto
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});

p3.aumento(20);
console.log(p3);




