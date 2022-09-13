// Factory function sao as funcoes que retornam um objeto

function criaPessoa(nome, sobrenome, a, p) {
    return {
        // quando criamos funcoes dentro de objetos elas sao chamadas de metodos
        nome, 
        sobrenome,

        get nomeCompleto() {
            return`${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' '); // split ira dividir as palavras peles espacos e colocar em um array
            this.nome = valor.shift(); // retrona o primeiro valor da array e remove ele da array
            this.sobrenome = valor.join(' '); // retorna o resto da array e separa pelos espacos
        },

        //this sempre vai se referir a pessoa que chamou o que tiver executando
        fala(assunto = 'falando sobre NADA.') {
            return `${this.nome} esta ${assunto}.`;
        },
        altura: a,
        peso: p,

        // Getter
        get imc() { // com get o metodo finge ser um atributo
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
// no caso quem chamou o this foi o p1
const p1 = criaPessoa('naoki', 'nakamura', 1.8, 80); 
console.log(p1.fala('falando sobre JS'));
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);

