// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            // Property Descriptor
            enumerable: true, // mostra a chave
            value: nome,  // valor
            writable: true, // o valor nao pode ser alterado
            configurable: true, // configuravel ou nao
        },

        preco: {
            // Property Descriptor
            enumerable: true, // mostra a chave
            value: preco,  // valor
            writable: true, // o valor nao pode ser alterado
            configurable: true, // configuravel ou nao
        },
    });

    Object.defineProperty(this, 'estoque', {
        // Property Descriptor
        enumerable: true, // mostra a chave
        get value() {
            return estoque;  // valor
        },
        writable: false, // o valor nao pode ser alterado
        configurable: false, // configuravel ou nao
    });
}

const p1 = new Produto('camiseta', 20, 3);
p1.estoque = 500000;
delete p1.estoque;
console.log(p1);
console.log(Object.keys(p1));

for(let chave in p1) {
    console.log(chave);
}

