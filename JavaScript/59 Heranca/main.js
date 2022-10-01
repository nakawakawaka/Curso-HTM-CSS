// Prduto - aumento, desconto
// camiseta = cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor; // uma funcao contrutora especializada pode ter quantas informacoes adicionais forem necessarias
}
// criamos um novo objeto que pega o prototype de produto e passa para a funcao construtora camista porem com apenas isso camiseta nao aparece mais como sendo a contrutora e sim o Produto e assim perdendo o construtor no prototype
Camiseta.prototype = Object.create(Produto.prototype);
// para resolvermos este problema configuramos de volta a funcao contrutora para camista novamente
Camiseta.prototype.constructor = Camiseta;
// desta forma termos uma funcao contrutora especializada que tem como heranca todos os prototypes da funcao contrutora que captura todos os tipos de produto sem separar eles

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco *(percentual / 100));
};

const camiseta = new Camiseta('Regata', 7.5, 'Preto');

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('caneca', 13, 'plastico', 5);

caneca.estoque = 100;
console.log(caneca);
console.log(caneca.estoque);
console.log(camiseta);











