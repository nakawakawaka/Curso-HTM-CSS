// IIFE - immediately invoked function expression
// Para evitar que as variaveis toquem o escopo global utilizamos as funcoes imediatas

// Estrutura da funcao imediata
(function() {})();

(function(idade, peso, altura) {
    const sobrenome = 'nakamura';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('naoki'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80); // podemos eviar argumento para os parametros como qualque funcao

const sobrenome = 'qualquer coisa'; // essa variavel esta no escopo global
