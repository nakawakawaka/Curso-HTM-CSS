/*
Javascript é baseado em prototipos para passar propriedades e metodos de um objeto para outro.

Definicao de prototipo
Prototipo é um termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras producoes.

Todos os objetos tem uma referencia interna para um prototipo (__proto__) que vem da propriedade prototype da funcao contrutora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no proprio objeto e depois a cadeia de prototipo e usada ate o topo (null) ate encontrar (ou nao) tal membro.
*/

// construtora -> molde (classe)
// a funcao contrutora funcio como um molde para um objeto
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; // este metodo gera um problema de performace pois a cada novo objeto criado este metodo é criado junto e para evitar isso podemos colocar este meto em um lugar onde todos os objetos podem chamar este meto assim melhorando a performace do programa
}
// todos os objeto vao ter o que for inserido dentro do prototype
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

//instancia / objeto sao essas abaixo
const pessoa1 = new Pessoa('luiz', 'O.'); // <- Pessoa = Funcao contrutora
const pessoa2 = new Pessoa('maria', 'A.'); // <- Pessoa = Funcao contrutora

// a cadeia onde o JS ira procurar o metodo que for chamado ficaria assim:
// pessoa1 --> Pessoa.prototype --> Object.prototype
console.dir(Pessoa.prototype)
console.log(Pessoa.prototype === pessoa1.__proto__)