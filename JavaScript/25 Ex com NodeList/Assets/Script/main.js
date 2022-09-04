const paragrafos = document.querySelector('.paragrafos'); // div com classe paragrafos
const ps = paragrafos.querySelectorAll('p'); // NodeList - pega todos os <p></p> dentro da div paragrafos
// NodeLists se comportam de formamuito similar a um array
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}