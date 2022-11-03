// esta funcao funcia de forma parecida com default porem ela foi criada para ser utilizada fora deste modulo
module.exports = function(x, y) {
    return x * y;
};

module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        console.log(`${this.nome} esta fazendo au au`);
    }
}