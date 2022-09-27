// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // caso for trabalhar com pripriedades do objeto como acima é aconcelhavel colocar dentro de uma varial para tornala privada por assim evita um looping infinito
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        // Property Descriptor
        enumerable: true, // mostra a chave
        //value: estoque,
        //writable: false, // o valor nao pode ser alterado
        configurable: false, // configuravel ou nao
        get: function() { // geralmente utilizado apenas para pegar o valor
            return estoquePrivado; 
        },

        set: function(valor) { // set é onde configuramos ou validamos o valor
            if (typeof valor != 'number') {
                throw new TypeError('Nao é um numero');
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('camiseta', 20, 3);
//p1.estoque = 'o valor que eu quero'
p1.estoque = 500
console.log(p1.estoque);

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        },
    };
}
const p2 = criaProduto('camista');
p2.nome = 'qualquer coisa';
console.log(p2.nome);
