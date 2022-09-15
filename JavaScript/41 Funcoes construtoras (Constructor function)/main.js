// A diferenca entre a funcao contrutora(constructor) e a funcao fabrica(factory) é que a funcao fabrica retorna um objeto voluntariamente ja a funcao contrutora ela cria e retorna automaticamente o objto
// Funcoes contrutora(constructor) -> objetos
// Funcoes fabrica(factory) -> objetos

// Funcao contrutora é criada com a primeira letra do nome Maiusculo pois assim sabemos o tipode de funcao que ela é diferenciando da funcao factory

function Pessoa(nome, sobrenome) {
    // Atributos e metodos privados
    const ID = 123456;
    const metodoInterno = function() {

    };

    // Atributos ou metodos publicos
    // a palavra this torna esses atributos e metodos publicos
    this.nome = nome; // this se refere ao objeto no caso Pessoa e o .nome é a chave que vai ser criada dentro do objeto
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + `: sou um metodo`);
    };
}

// a palavra new é obrigatorio na criaca o do objeto
// new cria um objeto vazio e faz com que this pegue a referencia desse objeto no caso p1 e automaticamente retorna o que foi passado para dentro do objeto 
const p1 = new Pessoa('naoki', 'nakamura'); 
const p2 = new Pessoa('yumi', 'kimura');

p2.metodo();
console.log(p1.nome);










