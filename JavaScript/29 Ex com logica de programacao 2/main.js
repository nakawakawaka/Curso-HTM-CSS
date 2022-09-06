// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem

// Minha solução
const ePaisagem = (largura, altura) => largura > altura ? true : false;

console.log(ePaisagem(100, 200));

// Aula
function ePaisagem(largura, altura) {
  return largura > altura; // podemos eliminar o true ou false pq a condicao ja retorna esses valores automaticamente
}

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1080));
