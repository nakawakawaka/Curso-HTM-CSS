import { nome as nome2, sobrenome2, idade, soma, Pessoa } from './modulo1'
// pode ocorrer de variaves importadas terem o mesmo nome de uma variavel ja existente no arquivo e para contornar isso podemos "renomear a variavel importada"
// podemos exportar variaves ja com o nome alterado
const nome = 'yuuki'

// desta forma importamos um padrao que esta utilizando a palavra default no modulo1
import padrao from './modulo1'

console.log(nome);
console.log(nome2 ,sobrenome2, idade);
console.log(padrao(5, 5));

const p1 = new Pessoa('Luiz', 'Otavio');
console.log(p1)

/*
podemos importar tudo de de um modulo
import * as MeuModulo from './modulo1';
*/