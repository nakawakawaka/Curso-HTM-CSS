// (condicao) ? "valor para verdadeior" : "valor para falso" ;

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuario VIP" : "Usuario normal";

const corUsuario = null;
const corPadao = corUsuario || 'preto'

console.log(nivelUsuario, corPadao);

/*
if (pontuacaoUsuario >= 1000) {
  console.log("usuario viop");
} else {
  console.log("ususario normal");
}
*/