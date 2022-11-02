const nome = 'naoki';
const sobrenome = 'nakamura';

const falaNome = () => {
    console.log(nome, sobrenome);
};

// o Node disponibiliza um objeto para exportar o que for nescessario
//console.log(module);

// Maneiras de exportar modulos
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// esta forma é um atalho para module.exports
exports.nome = nome; // as chaves nao precisam ter o mesmo nome que as variaveis
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

// neste contexto o this se refere ao module.exports 
this.qualqueCoisa = 'O que eu quiser exportar'; // esta não é uma maneira comum

console.log(module.exports);
