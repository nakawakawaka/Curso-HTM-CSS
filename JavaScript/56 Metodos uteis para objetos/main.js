const produto = { nome: 'caneca', preco: 1.8};
// spread operator copia um objeto e tambem podemos adicionar outras coisas
const produtoSpread = { ...produto, material: 'porcelana' };
// outra maneira de copiar um objeto é utilizando Object.assign()
// Object.assign() precisa de um objto vazio em seguida o objeto a ser copiado e para criar mais elemento para o objte é necessari criar um outro objeto dentro do metodo
const produtoAssign = Object.assign({}, produto, {material: 'porcelana'});
// um forma nao recomendada de copiar um objeto é pegar as chaves e valores manualmente mais utilizado caso queira pegar apenas um elemento do objeto
//const outraCoisa = { nome: produto.nome, preco: produto.preco};

// este metodo mostra as configuracoes da propriedade do objeto no caso o nome
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.keys(produto)); // mostra as chaves do objeto
console.log(Object.values(produto)); // mostra os valores do objeto
console.log(Object.entries(produto)); // mostra um array com as chaves e os valores do objeto

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}

