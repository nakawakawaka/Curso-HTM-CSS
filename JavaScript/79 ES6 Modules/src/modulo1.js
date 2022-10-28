const nome = 'naoki';
const sobrenome = 'nakamura';
const idade = 30;
// tudo que nao estiver dentro do objeto export ou com a palavra export antes nao sera exportado
const cpf = '111.111.111-11';

// defalt cria um padrao
export default function soma(x, y) {
    return x + y;
}

export { nome, sobrenome as sobrenome2, idade };
// exportar variaveis com o nome alterado

// podemos exportar qualquer coisa diretamento colocado a palavra export antes
export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}


