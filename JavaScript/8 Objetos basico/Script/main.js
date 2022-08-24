//para criar um objeto é atribuir {}
const pessoa1 = {
//atributos funcionam como variaveis dentro de um objeto
    nome: 'bruno', //os atributos sao separados por virgula
    sobrenome: 'nakamura',
    idade: 25,
    
    //uma funcao dentro de um objeto se chama metodo e assim nao precisa colocar a palavra function
    fala() {
        //podemos usar a palabra this para referenciar o objeto dentro do metodo
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é: ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();

// function criaPessoa (nome, sobrenome, idade) {
//     return{nome, sobrenome, idade}; //uma funcao que cira objeto se chama factory
// }

// const pessoa1 = criaPessoa('bruno', 'nakamura', 25); //o valor enviado para uma funcao se chama argumento

// console.log(pessoa1);

