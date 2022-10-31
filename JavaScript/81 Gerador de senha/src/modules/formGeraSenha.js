import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const maiusculas = document.querySelector('.maiusculas');
const minusculas = document.querySelector('.minusculas');
const numeros = document.querySelector('.numeros');
const simbolo = document.querySelector('.simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    })
}

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        maiusculas.checked,
        minusculas.checked,
        numeros.checked,
        simbolo.checked
        );
    return senha || 'Nada Selecionado'
}