const elementos = [
    {tag: 'p', texto: 'Qualquer texto'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'footer', texto: 'Frase3'},
    {tag: 'section', texto: 'Frase4'}
];

// pegamos o container que ja existia no HTML
const container = document.querySelector('.container');
// criamos uma Div
const div = document.createElement('div');

console.log(elementos)

for (let i = 0; i < elementos.length; i++) {
    // criamos as Tags dentro do For
    let {tag, texto} = elementos[i]; // pegamos as tags e o texto que estao dentro do objeto dentro de uma array
    let tagCriada = document.createElement(tag); // ira criar as tags que estao dentro do objeto que foi pego acima
    let textoCriado = document.createTextNode(texto); // cria o texto contido dentro do objeto
    
    tagCriada.appendChild(textoCriado); // adiciona o texto criado dentro da tag criada anteriormente
    div.appendChild(tagCriada); // adiciona as tags criadas dentro da Div criada no topo do codigo
}

container.appendChild(div); // adicionamos a div com todo o conteudo criado anteriormente dentro do container que ja existia no HTML