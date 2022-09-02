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
    let tagCriada = document.createElement(tag);
    
    tagCriada.innerText += texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);